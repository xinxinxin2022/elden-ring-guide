#!/bin/bash
# Elden Ring Guide - GitHub Pages 部署脚本
# 用法: ./deploy.sh

set -e

echo "🏰 构建 Elden Ring Guide..."
npm run build

echo "🎨 预渲染所有页面为静态 HTML..."
node scripts/prerender.js

echo "🗺 生成站点地图..."
node scripts/generate-sitemap.js

echo "📄 复制 404 页面..."
cp public/404.html dist/404.html
touch dist/.nojekyll

echo ""
echo "✅ 构建完成！所有页面已预渲染为静态 HTML。"
echo ""
echo "预渲染的页面:"
find dist -name "index.html" | sort | sed 's/^/  /'
echo ""
echo "下一步操作:"
echo "  1. git add -A"
echo "  2. git commit -m 'Deploy: $(date +%Y-%m-%d)'"
echo "  3. git push origin main"
echo ""
echo "GitHub Actions 会自动构建并部署到:"
echo "  https://game-elden.asia/"
