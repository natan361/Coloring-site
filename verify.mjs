// Crawls every URL in public/sitemap.xml against the running dev server and fails loudly
// on the things that are easy to break and easy to miss:
//   SEO       — title, meta description, canonical, Open Graph, exactly one rel=icon
//   a11y      — single <h1>, missing alt attributes, real WCAG contrast ratios
//   integrity — broken images, dead links, console errors, failed network requests
//
// Usage: npm run dev   (in one terminal)
//        npm run verify
import puppeteer from 'puppeteer'
import { readFileSync } from 'node:fs'

const BASE = process.env.BASE_URL || 'http://localhost:3050'

// The sitemap holds full production URLs, which may sit under a deploy sub-path
// (e.g. /Coloring-site/about on GitHub Pages). The dev server serves from the root,
// so that prefix has to come off — otherwise every request falls through to the
// catch-all route, renders the home page, and the whole run passes for the wrong reason.
const sitemap = readFileSync('./public/sitemap.xml', 'utf8')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]))
const prefix = process.env.BASE_PATH?.replace(/\/$/, '') ?? findCommonPrefix(urls)

function findCommonPrefix(list) {
  // The home entry's pathname IS the deploy prefix ('/' when deployed at the root).
  const shortest = list.map((u) => u.pathname).sort((a, b) => a.length - b.length)[0] || '/'
  return shortest === '/' ? '' : shortest.replace(/\/$/, '')
}

const paths = urls.map((u) => {
  const p = prefix && u.pathname.startsWith(prefix) ? u.pathname.slice(prefix.length) : u.pathname
  return p || '/'
})

// Injected into the page: WCAG relative-luminance maths. Foreground alpha is composited
// over the backdrop, otherwise faded text (e.g. text-white/30) falsely passes.
const CONTRAST = `
function srgb(c){c/=255;return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4)}
function lum([r,g,b]){return 0.2126*srgb(r)+0.7152*srgb(g)+0.0722*srgb(b)}
function parse(c){const m=c.match(/[\\d.]+/g);return m?m.slice(0,3).map(Number):null}
function alpha(c){const m=c.match(/[\\d.]+/g);return m&&m.length>3?Number(m[3]):1}
function effectiveBg(el){let n=el;while(n&&n!==document.documentElement){const b=getComputedStyle(n).backgroundColor;if(alpha(b)>0.85)return parse(b);n=n.parentElement}return [255,255,255]}
function ratio(a,b){const l1=lum(a),l2=lum(b);const [h,lo]=l1>l2?[l1,l2]:[l2,l1];return (h+0.05)/(lo+0.05)}
`

const browser = await puppeteer.launch()
let failed = 0

for (const path of paths) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })

  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('requestfailed', (r) => errors.push(`request failed: ${r.url().slice(0, 60)}`))

  await page.goto(BASE + path, { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 250))

  const d = await page.evaluate((fns) => {
    eval(fns)
    const contrast = []
    const sel = 'p,h1,h2,h3,h4,a,span,li,label,button,strong,blockquote,figcaption'
    for (const el of document.querySelectorAll(sel)) {
      const text = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join('')
      if (!text || el.closest('.a11y-widget')) continue
      const cs = getComputedStyle(el)
      if (cs.visibility === 'hidden' || cs.display === 'none' || Number(cs.opacity) < 0.5) continue
      const box = el.getBoundingClientRect()
      if (!box.width || !box.height) continue

      let fg = parse(cs.color)
      const bg = effectiveBg(el)
      if (!fg) continue
      const a = alpha(cs.color)
      if (a < 1) fg = fg.map((c, i) => c * a + bg[i] * (1 - a))

      const r = ratio(fg, bg)
      const size = parseFloat(cs.fontSize)
      const large = size >= 24 || (size >= 18.66 && Number(cs.fontWeight) >= 700)
      const need = large ? 3 : 4.5
      if (r < need) contrast.push(`${r.toFixed(2)}:1 (need ${need}) "${text.slice(0, 30)}"`)
    }
    return {
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.content || '',
      canonical: document.querySelector('link[rel="canonical"]')?.href || '',
      og: document.querySelector('meta[property="og:title"]')?.content || '',
      h1: document.querySelectorAll('h1').length,
      // alt="" is valid for decorative images; only a MISSING attribute is a defect.
      noAlt: [...document.querySelectorAll('img')].filter((i) => i.getAttribute('alt') === null).length,
      broken: [...document.querySelectorAll('img')].filter((i) => i.complete && i.naturalWidth === 0).length,
      icons: document.querySelectorAll('link[rel~="icon"]').length,
      dead: document.querySelectorAll('a[href="#"], a:not([href])').length,
      lang: document.documentElement.lang,
      dir: document.documentElement.dir,
      contrast,
    }
  }, CONTRAST)

  const f = []
  if (!d.title) f.push('NO-TITLE')
  else if (d.title.length > 65) f.push(`TITLE-LONG(${d.title.length})`)
  if (!d.desc) f.push('NO-DESC')
  else if (d.desc.length > 170) f.push(`DESC-LONG(${d.desc.length})`)
  if (!d.canonical) f.push('NO-CANONICAL')
  if (!d.og) f.push('NO-OG')
  if (d.h1 !== 1) f.push(`H1=${d.h1}`)
  if (d.noAlt) f.push(`MISSING-ALT x${d.noAlt}`)
  if (d.broken) f.push(`BROKEN-IMG x${d.broken}`)
  if (d.icons !== 1) f.push(`ICON-TAGS=${d.icons}`)
  if (d.dead) f.push(`DEAD-LINK x${d.dead}`)
  if (d.lang !== 'he' || d.dir !== 'rtl') f.push(`LANG/DIR=${d.lang}/${d.dir}`)
  if (d.contrast.length) f.push(`CONTRAST x${d.contrast.length}`)
  if (errors.length) f.push(`ERRORS x${errors.length}`)

  if (f.length) failed++
  console.log(`${f.length ? '✗' : '✓'} ${path.padEnd(26)} ${f.join('  ') || 'clean'}`)
  d.contrast.forEach((c) => console.log(`      contrast ${c}`))
  errors.forEach((e) => console.log(`      ${e}`))

  await page.close()
}

await browser.close()
console.log(`\n${paths.length - failed}/${paths.length} routes clean`)
process.exit(failed ? 1 : 0)
