# SIMLOT — Your Potential. Unlimited Opportunities.

A responsive, free-to-use opportunity discovery website inspired by the [SIMLOT product brief](./PRODUCT_BRIEF.md) and branded using the owner's supplied SIMLOT gradient logo.

![SIMLOT gradient logo](./public/simlot-logo.png)

## What works in this initial version

- Premium, mobile-responsive homepage with light/dark modes.
- Opportunity explorer with keywords, filters for type, fee, format, open/closed status and sorting.
- 16 manually curated opportunity records linking to **official organiser** pages; no invented counts. Source checks are dated **9 November 2026**.
- Guided 10-step onboarding with age, country, subject interests, ambitions, budget and availability.
- Deterministic, eligibility-aware matching that excludes known age/country mismatches and ranks remaining results.
- Opportunity details, external official links, bookmarks and adding items to a roadmap.
- Guest dashboard, application statuses/notes, editable roadmap, personal achievement journal and JSON data export.
- Data deletion and local-only storage (no server account required).
- GitHub Pages deployment workflow.

**Not yet included:** hosted user accounts and sync, a persistent shared database, administrator verification portal, automated opportunity discovery/refresh, a live generative-AI assistant or semantic-embedding search. Current search interprets basic natural-language clues and uses keywords/rules; it does *not* call a generative AI service. "Verified" means manually checked against an official page on the date stated, not real-time verification. Some categories may have no available listings yet.

## Start locally

Install [Node.js 22+](https://nodejs.org/), then:

```bash
npm install
npm run dev
```

Open the local URL displayed by Vite (typically `http://localhost:5173`).

Validate and build for production:

```bash
npm run check  # strict TypeScript and catalogue validation
npm run build  # Vite production bundle in dist/
npm run preview
```

If you encounter a build failure, see [BUILD_FIX.md](BUILD_FIX.md) for diagnostics and Vercel settings.

## Deploy to Vercel

Import your GitHub repository into Vercel. Select **Vite** (Node.js 22); the project includes `vercel.json` with build command `npm run build` and output directory `dist`. See [BUILD_FIX.md](BUILD_FIX.md) for recovery steps.

## Publish to GitHub Pages

1. Create a new **public** GitHub repository, for example `simlot-website`.
2. Add the contents of this folder, preserving the `.github/workflows/deploy.yml` path.
3. Push to the `main` branch.
4. On GitHub, open **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. The workflow automatically builds the website on pushes to `main` and publishes it. The live URL will have the form `https://YOUR-USERNAME.github.io/simlot-website/`.

The Vite `base: './'` setting supports relative assets under a GitHub Pages repository subpath.

### Connect Simlot.com (optional)

Only after you control the domain and the Pages build succeeds:

1. In **GitHub → Settings → Pages**, enter `simlot.com` in **Custom domain** and save.
2. At your DNS provider, set the records recommended by [GitHub Pages custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
3. Wait for DNS validation, enable **Enforce HTTPS** and configure `www` if desired.

This repository **does not** claim ownership of `simlot.com`, change DNS, or activate GitHub Pages by itself.

## Data and accuracy rules

The 16 opportunities are stored in [`data/opportunities.json`](data/opportunities.json) as a deliberately small **real** sample. Each contains official URL, source URL, age range if known, geography, costs (or an explicit *check organiser* label), deadline (or explicit *not confirmed*), and verified date. Closed cycles are hidden by default but can be revealed by the user. Never replace this with fabricated entries to display "500+". Verify new entries against a current official organiser page before publishing; update `verifiedAt` only after rechecking.

Be especially cautious with third-party age restrictions, nationality requirements, cancellation dates, late-entry fees and team/school nomination rules. Users should always confirm directly on the organiser's current website.

## Privacy

This is a **guest-only, browser-local MVP**. Profile choices, bookmarks, application notes, roadmap items and achievements are saved in the browser's `localStorage`, not transmitted to an app backend. Browser storage is device-specific and can be deleted by clearing browser data or using **My space → Delete local data**. JSON export is available from **My space**. Avoid collecting birthdays, exact addresses or school names, especially from children. Add a proper safeguarding/privacy review before launching accounts for minors.

## Project structure

```
├── .github/workflows/deploy.yml   # Pages build and deployment
├── data/opportunities.json     # official-source starter catalog
├── public/
│   ├── favicon.svg
│   ├── simlot-logo.png            # cropped supplied logo
│   └── simlot-logo-original.png   # supplied source artwork
├── src/
│   ├── App.tsx                    # site pages, guided onboarding and guest tools
│   ├── data.ts                    # catalog schema and categories
│   ├── main.tsx                   # React mount
│   └── styles.css                 # responsive design system
├── index.html
├── vercel.json                  # Vercel build and output settings
├── BUILD_FIX.md                # deployment troubleshooting
├── vite.config.ts
└── package.json
```

## Recommended next milestones

1. Add authenticated accounts and a secure hosted database (e.g. Supabase/Postgres), with age-appropriate child safety measures, server-side access controls, and deletion/export controls.
2. Build an admin-only verification workflow and vetted imports, with clear source freshness checks and expiry handling.
3. Add a server-side optional AI search interpreter, with strict source-only retrieval and hard eligibility filtering; never embed API keys in browser code.
4. Grow the catalog toward 500 *verified* records with a data-maintenance process.
5. Test keyboard/screen-reader access, minors' data handling and legal terms before public scaling.

### License

Copyright © SIMLOT. The source and supplied logo are not automatically licensed for public reuse. Add an explicit license if you decide to make this an open-source project.
