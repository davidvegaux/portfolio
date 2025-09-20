#!/bin/bash

# Navigate to the project directory
cd "/Users/davidinframetal/Documents/CV ATS"

# Initialize git repository if it doesn't exist
if [ ! -d ".git" ]; then
    git init
fi

# Add all files
git add .

# Commit changes
git commit -m "Fix project card padding: reduce from space-6 to space-4 for better visual balance"

# Set main branch
git branch -M main

# Add remote origin if it doesn't exist
if ! git remote | grep -q origin; then
    git remote add origin https://github.com/davidvegaux/portfolio.git
fi

# Push to GitHub
git push -u origin main

echo "✅ Changes pushed to GitHub successfully!"
