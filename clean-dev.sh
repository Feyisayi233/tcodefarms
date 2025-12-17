#!/bin/bash
echo "🧹 Cleaning Next.js dev cache..."
echo ""
echo "Stopping any running dev servers..."
pkill -f "next dev" 2>/dev/null || true
sleep 1

echo "Removing build cache..."
rm -rf .next
rm -rf node_modules/.cache

echo "✅ Cache cleared!"
echo ""
echo "Now you can run: npm run dev"
echo "Or use: npm run clean:dev (cleans and starts dev server)"
