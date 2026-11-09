# Publish the SIMLOT website to GitHub

These are instructions for the repository owner. Nothing in this folder requires you to share a GitHub password or token.

## Easiest: GitHub Desktop

1. Extract `simlot-github-ready.zip`.
2. Install **GitHub Desktop**, sign in to your own GitHub account, and choose **File → Add Local Repository** or **Create a New Repository** using the extracted folder.
3. If prompted, create the local repository and commit all files, then click **Publish repository**.
4. Name it `simlot-website` and choose public if you want public GitHub Pages hosting.
5. On github.com open your repository **Settings → Pages** and select **GitHub Actions** as the deployment source.
6. Open the **Actions** tab to see the automated build. GitHub will show your Pages website URL after deployment.

## Terminal alternative

In the extracted project directory (replace `YOUR_USERNAME`):

```bash
git init -b main
git add .
git commit -m "Initial SIMLOT opportunity platform"
git remote add origin https://github.com/YOUR_USERNAME/simlot-website.git
git push -u origin main
```

Create an **empty** repository named `simlot-website` on GitHub before the last two commands. Configure GitHub Pages to use GitHub Actions. You can also install GitHub CLI and use `gh repo create simlot-website --public --source=. --remote=origin --push` instead.

## Run locally

```bash
npm install
npm run dev
```

The website uses `localStorage` for guest profiles and bookmarks, not a hosted database. The 16 catalogue entries are dated starter data, not live updates. GitHub Pages is appropriate for this MVP; a hosted backend is needed for server-side AI and user accounts later.
