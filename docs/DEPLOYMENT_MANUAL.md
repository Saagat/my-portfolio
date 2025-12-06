# Portfolio Deployment Guide

Since the automatic deployment script could not find the remote repository, please follow these manual steps to get your portfolio online.

## 1. Create Repository on GitHub
1. Go to [GitHub.com](https://github.com/new).
2. Login if asked.
3. Create a new repository name: `portfolio` (or whatever you prefer).
4. **Important**: Do NOT check "Initialize with README", "Add .gitignore", or "Add license". Create an empty repository.

## 2. Connect and Push Code
Open your terminal (PowerShell or Command Prompt) in the folder `d:\Google-Antigravity\new\portfolio` and run these commands:

```powershell
# Remove the old specific link that wasn't working
git remote remove origin

# Add the link to YOUR new repository
# Replace <YOUR_USERNAME> with your actual GitHub username
git remote add origin https://github.com/<YOUR_USERNAME>/portfolio.git

# Upload the code
git push -u origin main
```

## 3. Activate GitHub Pages (To make it Live)
1. Once the push is successful, go to your repository on GitHub.
2. Click **Settings** (top right tab).
3. Click **Pages** (on the left sidebar).
4. Under **Build and deployment** > **Branch**, select `main` and save.
5. Wait a minute, and GitHub will verify your link (usually `https://<username>.github.io/portfolio/`).

## Security Note
Your project already includes `security.js` and `security.css` which disable right-clicking and inspecting elements. These will be active automatically once the site is live.
