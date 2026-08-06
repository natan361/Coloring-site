import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, 'temporary screenshots');

const url = process.argv[2];
const label = process.argv[3];

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const existing = fs.readdirSync(outDir)
  .map((f) => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map((m) => parseInt(m[1], 10));
const next = existing.length ? Math.max(...existing) + 1 : 1;

const fileName = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const outPath = path.join(outDir, fileName);

const browser = await puppeteer.launch();
const page = await browser.newPage();
page.on('console', (msg) => console.log('BROWSER:', msg.text()));
page.on('pageerror', (err) => console.log('PAGEERROR:', err.message));
await page.setViewport({ width: 1440, height: 900 });
// 'networkidle0' can hang indefinitely on pages with external resources (e.g. Google
// Fonts) if that network is slow/unreachable from this environment. 'load' plus an
// explicit wait for fonts is more robust.
await page.goto(url, { waitUntil: 'load', timeout: 45000 });

// Scroll through the full page first so scroll-triggered animations / lazy-loaded
// images have a chance to fire before the full-page screenshot is taken.
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
  // An autoplaying video competing for CPU/compositing during headless scrolling was
  // observed to make scroll position updates nondeterministic. Pause it for this pass.
  const videos = Array.from(document.querySelectorAll('video'));
  videos.forEach((v) => v.pause());

  // Passing `behavior` explicitly is guaranteed by spec to override the page's CSS
  // `scroll-behavior: smooth` (used for nav anchor links), so each jump lands instantly.
  const step = window.innerHeight;
  let target = 0;
  while (target < document.documentElement.scrollHeight) {
    target += step;
    window.scrollTo({ top: target, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 250));
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  await new Promise((r) => setTimeout(r, 400));

  videos.forEach((v) => v.play());
});

// Lazy-loaded images below the fold can still be decoding when the full-page shot fires,
// leaving blank cards. Wait for every <img> to finish (load or error) before capturing.
await page.evaluate(async () => {
  await Promise.all(
    Array.from(document.images).map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((res) => {
            img.addEventListener('load', res, { once: true });
            img.addEventListener('error', res, { once: true });
          })
    )
  );
});

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: ${path.join('temporary screenshots', fileName)}`);
