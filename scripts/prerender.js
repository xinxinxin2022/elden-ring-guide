// Pre-render script for GitHub Pages deployment
// Generates static HTML snapshots for each route so that
// crawlers (including AdSense) can see actual page content.

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { preview } from 'vite'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(__dirname, '..')
const DIST_DIR = path.resolve(PROJECT_ROOT, 'dist')
const BASE_URL = '/'
const PREVIEW_PORT = 8080

// Routes to pre-render — must cover every page linked from the site
const ROUTES = [
  '/',
  '/guides',
  // All guide detail pages (15 total)
  '/guides/beginner-guide',
  '/guides/best-starting-classes',
  '/guides/boss-order-guide',
  '/guides/best-builds-guide',
  '/guides/hidden-secrets',
  '/guides/shadow-of-the-erdtree-dlc-guide',
  '/guides/best-endings-explained',
  '/guides/best-weapons-early-game',
  '/guides/pvp-guide-beginners',
  '/guides/lore-explained',
  '/guides/malenia-boss-guide',
  '/guides/dlc-secret-bosses-guide',
  '/guides/best-talismans-guide',
  '/guides/dlc-meta-builds-2026',
  '/guides/rune-farming-guide',
  // Static pages
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
]

async function prerender() {
  console.log('🏰 Starting Elden Ring Guide pre-render...\n')

  // Verify dist exists (must run after `vite build`)
  if (!fs.existsSync(DIST_DIR) || !fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
    console.error('❌ dist/ not found or missing index.html. Run `npm run build` first.')
    process.exit(1)
  }

  // Start Vite preview server to serve the built files from dist/
  const server = await preview({
    root: PROJECT_ROOT,
    preview: {
      port: PREVIEW_PORT,
      strictPort: true,
      open: false,
    }
  })

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  let successCount = 0
  let failCount = 0

  for (const route of ROUTES) {
    const url = `http://localhost:${PREVIEW_PORT}${BASE_URL}${route === '/' ? '' : route.slice(1)}`
    console.log(`  Rendering: ${route}`)

    try {
      const page = await browser.newPage()

      // Set a reasonable viewport
      await page.setViewport({ width: 1280, height: 800 })

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })

      // Wait for the Vue app to render content
      await page.waitForSelector('#app', { timeout: 5000 })

      // Wait a bit for any async data / lazy components to load
      await new Promise(r => setTimeout(r, 1000))

      // For guide detail pages, wait for the article content to appear
      if (route.startsWith('/guides/') && route !== '/guides') {
        try {
          await page.waitForSelector('.guide-detail-page, .article-content', { timeout: 5000 })
        } catch {
          // Non-critical — continue even if selector not found
        }
      }

      const html = await page.content()
      const outputPath = route === '/'
        ? path.join(DIST_DIR, 'index.html')
        : path.join(DIST_DIR, route, 'index.html')

      const outputDir = path.dirname(outputPath)
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      fs.writeFileSync(outputPath, html, 'utf-8')
      console.log(`    ✅ Written to ${path.relative(PROJECT_ROOT, outputPath)}`)
      successCount++
      await page.close()
    } catch (err) {
      console.warn(`    ⚠ Failed to render ${route}: ${err.message}`)
      failCount++
    }
  }

  await browser.close()

  // Close the preview server
  try {
    await server.close()
  } catch {
    // preview server may not have a close method in all Vite versions
  }

  console.log(`\n✅ Pre-render complete! ${successCount} succeeded, ${failCount} failed.`)

  if (failCount > 0) {
    process.exit(1)
  }
}

// Only run if this file is executed directly
const isMain = process.argv[1] && (
  process.argv[1].endsWith('prerender.js') ||
  process.argv[1].endsWith('prerender')
)

if (isMain) {
  prerender().catch(err => {
    console.error('Prerender failed:', err)
    process.exit(1)
  })
}

export { prerender }
