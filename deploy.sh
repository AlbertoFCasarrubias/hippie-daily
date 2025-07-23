#!/bin/bash

echo "🚀 Starting deployment to GitHub Pages..."

# Build the application
echo "📦 Building application..."
ng build --configuration production --base-href "https://AlbertoFCasarrubias.github.io/hippie-daily/"

# Deploy to GitHub Pages
echo "🌟 Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=dist/hippie-daily

echo "✅ Deployment complete! Your site is live at:"
echo "🌐 https://AlbertoFCasarrubias.github.io/hippie-daily/" 