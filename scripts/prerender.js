// Pre-render script for GitHub Pages deployment
// Generates static HTML snapshots for each route

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createServer } from 'vite'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.resolve(__dirname, '../dist')
const BASE_URL = '/elden-ring-guide/'

// Routes to pre-render
const ROUTES = [
  '/',
  '/guides',
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
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
]

async function prerender() {
  console.log('🏰 Starting Elden Ring Guide pre-render...\n')

  // Start Vite preview server
  const server = await createServer({
    root: __dirname,
    server: { port: 8080 }
  })
  await server.listen()

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  for (const route of ROUTES) {
    const url = `http://localhost:8080${BASE_URL}${route === '/' ? '' : route.slice(1)}`
    console.log(`  Rendering: ${route}`)

    try {
      const page = await browser.newPage()
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })

      // Wait for content to be rendered
      await page.waitForSelector('#app', { timeout: 5000 })

      const html = await page.content()
      const outputPath = route === '/'
        ? path.join(DIST_DIR, 'index.html')
        : path.join(DIST_DIR, route, 'index.html')

      const outputDir = path.dirname(outputPath)
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      fs.writeFileSync(outputPath, html, 'utf-8')
      await page.close()
    } catch (err) {
      console.warn(`  ⚠ Failed to render ${route}: ${err.message}`)
    }
  }

  await browser.close()
  await server.close()

  console.log('\n✅ Pre-render complete!')
}

// Only run if this file is executed directly
const isMain = process.argv[1] && (
  process.argv[1].endsWith('prerender.js') ||
  process.argv[1].endsWith('prerender')
)

if (isMain) {
  prerender().catch(console.error)
}

export { prerender }
