// Writes a real index.html for every route so a static host returns 200 instead of 404.
//
// Without this, GitHub Pages answers /about with 404.html: the page LOOKS fine because
// the SPA takes over, but the HTTP status is 404, so search engines drop the page. Giving
// each route its own file makes every URL a genuine 200.
//
// Runs automatically after `npm run build`.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const DIST = 'dist'
const indexHtml = readFileSync(join(DIST, 'index.html'), 'utf8')

if (!existsSync(join(DIST, 'sitemap.xml'))) {
  console.error('prerender: dist/sitemap.xml missing — run the build first')
  process.exit(1)
}

const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8')
const paths = [...sitemap.matchAll(/<loc>https?:\/\/[^\s<]*?<\/loc>/g)]
  .map((m) => m[0].replace(/<\/?loc>/g, ''))
  .map((url) => new URL(url).pathname)

// The sitemap's paths already include the deploy sub-path (e.g. /Coloring-site/about),
// but files are written relative to dist/, so strip Vite's base prefix back off.
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '')

let written = 0
for (const full of paths) {
  const route = base && full.startsWith(base) ? full.slice(base.length) : full
  if (route === '' || route === '/') continue // dist/index.html already exists
  const dir = join(DIST, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), indexHtml, 'utf8')
  written++
}

// Still needed for genuinely unknown URLs (typos, removed pages).
writeFileSync(join(DIST, '404.html'), indexHtml, 'utf8')

console.log(`prerender: ${written} route files + 404.html written`)
