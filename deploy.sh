#!/bin/bash
# Deploy script for GitHub Pages
# Prerequisites:
#   1. Install dependencies: npm install
#   2. Set up GitHub repo with gh-pages branch
#   3. Update the REPO_URL below

set -e

REPO_URL="https://github.com/yourusername/elden-ring-guide.git"
BUILD_DIR="dist"

echo "🏰 Building Elden Ring Guide..."
echo ""

# Clean
rm -rf $BUILD_DIR

# Build
npm run build

# Generate sitemap and robots
node scripts/generate-sitemap.js

# Copy 404.html for SPA support
cp public/404.html $BUILD_DIR/404.html

# Copy CNAME if exists
if [ -f "CNAME" ]; then
  cp CNAME $BUILD_DIR/CNAME
fi

echo ""
echo "📦 Deploying to GitHub Pages..."

# Deploy using gh-pages
npx gh-pages -d $BUILD_DIR --dotfiles true -m "Deploy: $(date +%Y-%m-%d_%H-%M-%S)"

echo ""
echo "✅ Deploy complete!"
echo "   Site: https://yourusername.github.io/elden-ring-guide/"
echo ""
