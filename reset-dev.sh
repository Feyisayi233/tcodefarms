#!/bin/bash
echo "🔄 Complete Dev Server Reset"
echo "================================"
echo ""

# Kill all Next.js processes
echo "1. Stopping all Next.js processes..."
pkill -9 -f "next dev" 2>/dev/null || true
pkill -9 -f "next-server" 2>/dev/null || true
sleep 2

# Remove all cache directories
echo "2. Removing all cache directories..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .swc
rm -rf .turbo 2>/dev/null || true

echo "3. Cache cleared successfully!"
echo ""
echo "✅ Ready to start dev server"
echo ""
echo "Run: npm run dev"

