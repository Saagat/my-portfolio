# GitHub Deployment Guide

## Prerequisites
1. Install Git: https://git-scm.com/download/win
2. Create a GitHub account: https://github.com

## Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Enter repository name (e.g., `portfolio` or `google-antigravity`)
3. Add description (optional): "UX/UI Portfolio"
4. Choose **Public** (so GitHub Pages works)
5. **Do NOT** check "Initialize with README"
6. Click **Create repository**
7. **Copy the repository URL** from the screen (should look like `https://github.com/YOUR-USERNAME/your-repo-name.git`)

## Step 2: Configure Git (First Time Only)
Open PowerShell and run:
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Initialize & Push to GitHub
In PowerShell, navigate to your project folder and run these commands one by one:

```powershell
cd "d:\Google-Antigravity\new\New folder"
git init
git add .
git commit -m "Initial commit: UX/UI portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/your-repo-name.git
git push -u origin main
```

**Replace `https://github.com/YOUR-USERNAME/your-repo-name.git` with your actual repository URL from Step 1.**

## Step 4: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**
7. Wait 1-2 minutes for deployment

## Step 5: Access Your Live Site
Your portfolio will be live at:
```
https://YOUR-USERNAME.github.io/your-repo-name
```

Example: If your GitHub username is `sagarnav` and repo is `portfolio`, your URL will be:
```
https://sagarnav.github.io/portfolio
```

## Troubleshooting

### "Git command not recognized"
- Git is not installed. Download from https://git-scm.com/download/win and restart PowerShell.

### Pages showing 404
- Wait 2-3 minutes after pushing (GitHub needs time to build)
- Make sure `Index.html` is in the repository root (it is)
- Check Settings → Pages to confirm deployment status

### Want to use a custom domain?
- Edit Settings → Pages → Custom domain
- Point your domain's DNS to GitHub Pages (see GitHub docs for your DNS provider)

## Future Updates
To push changes after you've set up the repository:
```powershell
cd "d:\Google-Antigravity\new\New folder"
git add .
git commit -m "Update: description of changes"
git push
```

---

**Questions?** Ask me to help troubleshoot any step.
