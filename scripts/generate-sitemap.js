// Generates sitemap.xml for SEO
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.resolve(__dirname, '../dist')
const SITE_URL = 'https://game-elden.asia'

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/guides', priority: '0.9', changefreq: 'daily' },
  { path: '/guides/beginner-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/guides/best-starting-classes', priority: '0.8', changefreq: 'monthly' },
  { path: '/guides/boss-order-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/guides/best-builds-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/guides/hidden-secrets', priority: '0.7', changefreq: 'monthly' },
  { path: '/guides/shadow-of-the-erdtree-dlc-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/guides/best-endings-explained', priority: '0.7', changefreq: 'monthly' },
  { path: '/guides/best-weapons-early-game', priority: '0.7', changefreq: 'monthly' },
  { path: '/guides/pvp-guide-beginners', priority: '0.7', changefreq: 'monthly' },
  { path: '/guides/lore-explained', priority: '0.7', changefreq: 'monthly' },
  { path: '/guides/malenia-boss-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/guides/dlc-secret-bosses-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/guides/best-talismans-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/guides/dlc-meta-builds-2026', priority: '0.8', changefreq: 'weekly' },
  { path: '/guides/rune-farming-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.5', changefreq: 'yearly' },
  { path: '/contact', priority: '0.4', changefreq: 'yearly' },
  { path: '/privacy-policy', priority: '0.2', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.2', changefreq: 'yearly' },
]

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0]

  const urls = routes.map(route => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap, 'utf-8')
  console.log('✅ sitemap.xml generated')
}

// Generate robots.txt
function generateRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://game-elden.asia/sitemap.xml

# Elden Ring Guide - Comprehensive gaming guides
# https://game-elden.asia/
`

  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robots, 'utf-8')
  console.log('✅ robots.txt generated')
}

// Run
generateSitemap()
generateRobots()
