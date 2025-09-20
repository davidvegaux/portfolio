#!/bin/bash

# Navigate to the project directory (always use absolute path)
PROJECT_DIR="/Users/davidinframetal/Documents/CV ATS"
cd "$PROJECT_DIR"

# Verify we're in the right directory
echo "📍 Current directory: $(pwd)"
echo "📁 Files in directory:"
ls -la | head -10

# Check if we're in the right place
if [ ! -f "index.html" ] || [ ! -f "styles.css" ]; then
    echo "❌ Error: Not in the right directory! Expected to find index.html and styles.css"
    exit 1
fi

# Initialize git repository if it doesn't exist
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Get commit message from user or use default
if [ -z "$1" ]; then
    COMMIT_MSG="Update portfolio - $(date '+%Y-%m-%d %H:%M')"
else
    COMMIT_MSG="$1"
fi

# Commit changes
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

# Set main branch
git branch -M main

# Add remote origin if it doesn't exist
if ! git remote | grep -q origin; then
    echo "🔗 Adding remote origin..."
    git remote add origin https://github.com/davidvegaux/portfolio.git
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo "✅ Changes pushed to GitHub successfully!"
echo "🌐 Repository: https://github.com/davidvegaux/portfolio"
