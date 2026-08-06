// Renders the brand mark to real favicon files.
// A data: URI favicon (what this site used to have) renders fine in the browser tab but
// Google will not index it — the search result shows a generic globe. Real files fix that.
//
// Outputs: public/favicon.ico (16/32/48), public/favicon-96.png, public/apple-touch-icon.png
// Run with: node generate-favicon.mjs

import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import puppeteer from 'puppeteer'

const root = dirname(fileURLToPath(import.meta.url))
const outDir = join(root, 'public')
mkdirSync(outDir, { recursive: true })

const INK = '#0F0F10'
const EMBER = '#C6F53D'

// Paint-roller mark — geometry kept IDENTICAL to <LogoMark> in src/components/Logo.jsx
// (same 40x40 viewBox and paths), so the browser tab, the search result and the header
// logo are visibly the same mark. Colours are inverted here: an ink tile reads better
// than a lime one against both light and dark browser chrome.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
  <rect width="40" height="40" rx="11" fill="${INK}"/>
  <rect x="7.5" y="10" width="19" height="9" rx="4.5" fill="${EMBER}"/>
  <path d="M17 19v5.2h7.4a3.4 3.4 0 0 1 3.4 3.4V32"
        stroke="${EMBER}" stroke-width="3" stroke-linecap="round" fill="none"/>
  <circle cx="10.8" cy="24.6" r="2.1" fill="${EMBER}"/>
</svg>`

const browser = await puppeteer.launch()
const page = await browser.newPage()

async function renderPng(size) {
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 })
  await page.setContent(
    `<html><body style="margin:0;width:${size}px;height:${size}px">
       <div style="width:${size}px;height:${size}px">${svg
         .replace(`width="40"`, `width="${size}"`)
         .replace(`height="40"`, `height="${size}"`)}</div>
     </body></html>`,
  )
  return Buffer.from(await page.screenshot({ type: 'png', omitBackground: true }))
}

// ICO container holding PNG frames (supported by every browser Google cares about).
function buildIco(frames) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(frames.length, 4)

  let offset = 6 + frames.length * 16
  const entries = []
  for (const { size, data } of frames) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size >= 256 ? 0 : size, 0) // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1) // height
    entry.writeUInt8(0, 2) // palette count
    entry.writeUInt8(0, 3) // reserved
    entry.writeUInt16LE(1, 4) // color planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(data.length, 8)
    entry.writeUInt32LE(offset, 12)
    entries.push(entry)
    offset += data.length
  }

  return Buffer.concat([header, ...entries, ...frames.map((f) => f.data)])
}

const icoSizes = [16, 32, 48]
const frames = []
for (const size of icoSizes) {
  frames.push({ size, data: await renderPng(size) })
}
writeFileSync(join(outDir, 'favicon.ico'), buildIco(frames))
console.log(`favicon.ico written — ${icoSizes.join('/')}px frames`)

writeFileSync(join(outDir, 'favicon-96.png'), await renderPng(96))
console.log('favicon-96.png written')

writeFileSync(join(outDir, 'apple-touch-icon.png'), await renderPng(180))
console.log('apple-touch-icon.png written')

await browser.close()
