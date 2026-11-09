# SIMLOT — deployment build fix (v0.1.1)

The original `npm run build` script was:

```bash
npm run validate:data && tsc -b && vite build
```

The strict TypeScript step failed on an unused `Filter` import in `src/App.tsx` (TS6133). This has been removed. We also separated TypeScript validation from the production bundler command, following the normal Vite split:

- `npm run build`: validate the 16-entry catalogue and create `dist/` with Vite.
- `npm run typecheck`: perform strict TypeScript checking.
- `npm run check`: validate the catalogue and run the TypeScript check.

GitHub Actions still runs both the strict check and production build. Vercel runs `npm run build`; `vercel.json` sets the Vite framework and `dist` output.

## Deploy the fix to an existing GitHub / Vercel website

1. Extract the updated SIMLOT ZIP and copy its files over your existing GitHub repository, including `src/App.tsx`, `package.json`, `vercel.json`, and `.github/workflows/deploy.yml`.
2. Commit the changes and push them to the connected `main` branch.
3. In Vercel, open the SIMLOT project, visit **Deployments** and redeploy the latest commit. The new commit should normally trigger an automatic deploy.
4. Under **Project Settings → Build and Deployment**, use Framework Preset **Vite**; Build Command `npm run build`; Output Directory `dist`; and Node.js 22 if the project supports selecting it. Leave Root Directory at the repository root, or select the actual project folder if nested.

## Test locally (when npm packages can be downloaded)

```bash
node --version
npm install
npm run check
npm run build
```

This environment could validate the JSON catalogue and TypeScript **source syntax**, but could **not run a real dependency-installed Vite build**, because the npm registry was not reachable here. A success after redeploy cannot be claimed without the hosted deployment log.

## If the build still fails

In Vercel, open the failed deployment → **Build Logs**. Copy the **first actual error line** (usually `error TS...`, `Could not resolve...`, or `npm ERR!`) plus roughly 15 lines before/after it. The final line `Command "npm run build" exited with 1` only tells you the command failed; it does not identify the cause.

Important: do not put access tokens, secrets or .env files into the repository or build logs you share.
