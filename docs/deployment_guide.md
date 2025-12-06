# How to Host Your Website on GitHub

Since **Git** is not currently installed on your computer, I cannot automatically upload the files for you. However, you can easily do this manually through the GitHub website!

Here is a step-by-step guide to getting your portfolio online.

## Step 1: Create a GitHub Account & Repository
1.  Go to [github.com](https://github.com) and sign in (or sign up if you don't have an account).
2.  Click the **+** icon in the top-right corner and select **New repository**.
3.  **Repository name**: Enter a name (e.g., `my-portfolio` or `sagarh-designer`).
4.  **Public/Private**: Select **Public** (this is required for free hosting).
5.  Check **"Add a README file"** (optional, but good practice).
6.  Click **Create repository**.

## Step 2: Upload Your Files
1.  In your new repository, click the **Add file** button and select **Upload files**.
2.  Open the folder on your computer where your project is located:
    `d:\Google-Antigravity\new\New folder\`
3.  **Select all files and folders** (Index.html, projects.html, assets folder, etc.) and **drag and drop** them into the GitHub upload area.
    *   *Note: Make sure you include the `assets` folder!*
4.  Wait for the files to upload.
5.  In the "Commit changes" box at the bottom, type a message like "Initial upload of portfolio".
6.  Click **Commit changes**.

## Step 3: Enable GitHub Pages (Hosting)
1.  In your repository, click on the **Settings** tab (top right).
2.  In the left sidebar, click on **Pages** (under the "Code and automation" section).
3.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4.  Under **Branch**, select **main** (or `master`) and ensure the folder is set to **/(root)**.
5.  Click **Save**.

## Step 4: View Your Website
*   GitHub will take a minute or two to build your site.
*   Refresh the **Pages** settings page.
*   You will see a message at the top: **"Your site is live at..."** followed by a link (usually `https://your-username.github.io/repository-name/`).
*   Click that link to see your live website!

---

## Option B: Install Git (For future updates)
If you plan to make frequent changes, installing Git is recommended.
1.  Download Git from [git-scm.com](https://git-scm.com/downloads).
2.  Install it (default settings are fine).
3.  Restart your terminal/VS Code.
4.  Then you can use commands like `git add .`, `git commit`, and `git push` to update your site easily.
