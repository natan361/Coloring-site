// Generates public/sitemap.xml from the app's real route data so it cannot go stale.
// Runs automatically before `npm run build` (see the "prebuild" script in package.json).

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))

const { default: business } = await import('./src/data/business.js')
const { residentialServices } = await import('./src/data/residentialServices.js')
const { commercialServices } = await import('./src/data/commercialServices.js')

const origin = business.siteUrl.replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

// priority/changefreq are hints only, but they cost nothing and document intent.
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/residential', priority: '0.9', changefreq: 'monthly' },
  { path: '/commercial', priority: '0.9', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/accessibility', priority: '0.3', changefreq: 'yearly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
]

const serviceRoutes = [
  ...residentialServices.map((s) => `/residential/${s.slug}`),
  ...commercialServices.map((s) => `/commercial/${s.slug}`),
].map((path) => ({ path, priority: '0.7', changefreq: 'monthly' }))

const routes = [...staticRoutes, ...serviceRoutes]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${origin}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8')
console.log(`sitemap.xml written — ${routes.length} URLs`)
