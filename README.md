# Nicolas Miranda Delgado — Portfolio

Personal portfolio website for **Nicolas Miranda Delgado**, Software Engineer.
A fast, accessible, static-first single-page site built to present professional
experience to recruiters, hiring managers and engineering teams, and to be
deployed on **GitHub Pages**.

All content is sourced from Nicolas' CV. No experience, technology, project,
company or metric is invented.

The site is bilingual (**English** at `/` and **Spanish** at `/es/`) with a
language switcher that persists the visitor's choice.

---

## Tech stack

| Concern            | Choice                                                    |
| ------------------ | --------------------------------------------------------- |
| Framework          | [Astro](https://astro.build) (static output)             |
| Language           | TypeScript + Astro components                             |
| i18n               | Two static routes (`/`, `/es/`) + typed content dictionaries |
| Styling            | Plain modern CSS (custom properties, no CSS framework)    |
| Interactivity      | A few tiny inline vanilla-JS scripts (theme, nav, i18n, reveal) |
| SEO                | Native meta/OG/Twitter tags, hreflang + `@astrojs/sitemap` |
| Analytics          | GoatCounter (privacy-friendly, optional, no cookies)      |
| Hosting            | GitHub Pages + custom domain (via GitHub Actions)         |

### Why Astro?

Astro ships **zero JavaScript by default** and renders everything to static
HTML at build time. That yields excellent Lighthouse scores (performance, SEO,
best practices, accessibility), first-class SEO through semantic HTML, and a
trivial static deployment to GitHub Pages — while still giving a proper
component model and centralized, typed data. It is simpler to maintain than a
full React/Next.js SPA and lighter than shipping a client framework we don't
need for a content site.

---

## Project structure

```
portfolio/
├── public/                     # Copied verbatim into the build output
│   ├── cv/
│   │   └── Nicolas-Miranda-Delgado-CV.pdf   # Downloadable CV
│   ├── profile.jpg             # Hero portrait (replace with your photo)
│   ├── favicon.svg
│   ├── og-image.svg            # Social share image
│   ├── CNAME                   # Custom domain for GitHub Pages
│   └── robots.txt
├── src/
│   ├── i18n/                   # ← Single source of truth (content per language)
│   │   ├── types.ts            # Shared content/UI interfaces + Lang type
│   │   ├── en.ts               # English content (profile, experience, skills, projects, UI)
│   │   ├── es.ts               # Spanish content (same shape)
│   │   └── index.ts            # getContent(lang), socials, localized routes
│   ├── data/
│   │   ├── contact.ts          # Non-translatable data (email, LinkedIn, GitHub, avatar)
│   │   └── site.ts             # Site config (GoatCounter analytics code)
│   ├── lib/
│   │   └── paths.ts            # Base-path-aware URL helper (GitHub Pages)
│   ├── layouts/
│   │   └── BaseLayout.astro    # <head>, SEO, hreflang, theme, analytics, scroll reveal
│   ├── components/
│   │   ├── Portfolio.astro     # Composes the page for a given language
│   │   ├── Nav.astro           # Sticky navbar, mobile menu, language switch
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro   # Dark/light switch (persisted)
│   │   └── Icon.astro          # Inline SVG icon set (no icon dependency)
│   ├── sections/               # One component per page section (lang-aware)
│   │   ├── Hero.astro  About.astro  Experience.astro  Skills.astro
│   │   └── Projects.astro  Education.astro  Contact.astro
│   ├── styles/
│   │   └── global.css          # Design tokens, base styles, utilities
│   └── pages/
│       ├── index.astro         # English site (/)
│       └── es/index.astro      # Spanish site (/es/)
├── .github/workflows/deploy.yml # GitHub Pages CI/CD
└── astro.config.mjs
```

---

## Requirements

- **Node.js 20+** and npm (Node 18.20.8+ also works; the CI uses Node 20).

Check with:

```bash
node --version
npm --version
```

---

## Commands

Run these from the project root (`portfolio/`).

```bash
npm install     # Install dependencies

npm run dev      # Start the dev server → http://localhost:4321
npm run build    # Build the static site into dist/
npm run preview  # Serve the built dist/ locally to verify the production build
npm run check    # Type-check + Astro diagnostics
```

> Note: locally the base path is `/`, so the site is served at the root URL the
> dev/preview server prints. The `/<repo>` base path is only applied for
> production project-page builds (see Deployment).

---

## Editing content

Translatable content lives in `src/i18n/` (one file per language, same shape);
non-translatable data lives in `src/data/`. You normally never touch the
components to update content.

- **Text content (both languages)** → `src/i18n/en.ts` and `src/i18n/es.ts`
  - `profile` (summary, tagline, focus areas, specialties, languages)
  - `experience`, `skills`, `education`, `projects`
  - `ui` (all interface labels: nav, buttons, section titles, etc.)
  - Keep the two files in sync: any key added to `en.ts` must exist in `es.ts`
    (TypeScript enforces this via the shared `SiteContent` type).
- **Contact / identity (shared, not translated)** → `src/data/contact.ts`
  (name, email, phone, LinkedIn, GitHub, avatar path)
- **Analytics** → `src/data/site.ts`

### Languages / i18n

- English is served at `/`, Spanish at `/es/`.
- The navbar language switch links between them and stores the choice in
  `localStorage` (`lang`); returning visitors are sent to their preferred
  language automatically.
- To add another language: add a new dictionary (e.g. `src/i18n/pt.ts`), extend
  the `languages`/`Lang` union and `content` map in `src/i18n/`, and add a page
  at `src/pages/<lang>/index.astro` rendering `<Portfolio lang="<lang>" />`.

### Replacing the portrait photo

Replace `public/profile.jpg` with your own photo (square works best, e.g.
640×640). Keep the filename, or change `avatar` in `src/data/contact.ts`.

### Adding projects later

Add project objects to the `projects` array in **both** `src/i18n/en.ts` and
`src/i18n/es.ts` — the grid renders automatically. Only `title`, `description`,
`year` and `stack` are required.

```ts
{
  title: 'Bike Rental Service API',
  description: '…',
  year: '2026',
  stack: ['Go', 'SQLite', 'Docker'],
  highlights: ['…'],       // optional
  image: '/projects/x.png', // optional; file goes in public/projects/
  repo: 'https://github.com/user/repo', // optional (shows a "Code" link)
  demo: 'https://example.com',          // optional (shows a "Live demo" link)
  isPrivate: true,          // optional; shows a "Private repository" note when no repo link
  featured: true,           // optional
}
```

### Replacing the CV

Replace the file at `public/cv/Nicolas-Miranda-Delgado-CV.pdf`. Keep the
**same filename** and the "Download CV" buttons keep working, or update
`cvPath` in `src/lib/paths.ts`.

### Analytics (GoatCounter)

Analytics is off until configured. Create a free site at
[goatcounter.com](https://www.goatcounter.com/), then set your site code in
`src/data/site.ts`:

```ts
export const goatCounterCode = 'your-code'; // -> https://your-code.goatcounter.com
```

When empty, no analytics script is emitted. GoatCounter is cookie-less and
privacy-friendly. To swap providers (e.g. Plausible/Umami), replace the small
script block in `src/layouts/BaseLayout.astro`.

---

## Deployment — GitHub Pages

You do **not** need any tokens, secrets or third-party integrations. Two paths
are documented: automated (recommended) and manual.

### URL & base path

This project is configured to be served at the **root** of a GitHub user page:
`https://nimirandad.github.io/` (base path `/`). The GitHub Actions workflow
computes `SITE_URL` and `BASE_PATH` automatically, so you normally don't edit
anything. Supported setups:

| Setup                                   | Public URL                               | Base path    |
| --------------------------------------- | ---------------------------------------- | ------------ |
| Repo `<username>.github.io` (this one)  | `https://<username>.github.io`           | `/`          |
| Any other repo name (project page)      | `https://<username>.github.io/<repo>`    | `/<repo>`    |
| Custom domain (add `public/CNAME`)      | `https://your-domain`                    | `/`          |

---

### Option A — Push to the `Nimirandad.github.io` repository

For the clean root URL, the repository **must be named exactly**
`Nimirandad.github.io`. Create that empty repo on GitHub (no README), then from
the project root:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Nimirandad/Nimirandad.github.io.git
git push -u origin main
```

### Option B — Enable GitHub Pages with GitHub Actions (recommended)

1. Push the code (Option A).
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) runs on every push to
   `main`: install → compute URL/base → build → deploy.
5. Wait for the **Actions** run to finish (green check).
6. Your site is live at `https://nimirandad.github.io/`.

### Option C — Manual build & deploy (no Actions)

```bash
# PowerShell:  $env:SITE_URL="https://nimirandad.github.io"; $env:BASE_PATH="/"; npm run build
# bash:        SITE_URL="https://nimirandad.github.io" BASE_PATH="/" npm run build
npm run build
```

Then publish `dist/` to the `gh-pages` branch and set **Settings → Pages →
Source** to **Deploy from a branch → `gh-pages` / root**. The fallbacks in
`astro.config.mjs` already default to the values above.

### Custom domain (optional — only if you buy one later)

1. Add a `public/CNAME` file containing the domain (e.g. `nicolasmiranda.dev`).
2. In your registrar's DNS, point the apex at GitHub Pages with four `A`
   records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153` (optionally the matching `AAAA` records for IPv6). For a
   `www` subdomain, add a `CNAME` record to `<username>.github.io`.
3. In **Settings → Pages → Custom domain**, enter the domain and enable
   **Enforce HTTPS**.
4. Push again: the workflow detects `public/CNAME` and switches `SITE_URL`/base
   automatically. Update the `Sitemap:` line in `public/robots.txt` too.

### robots.txt / sitemap

`public/robots.txt` points at `https://nimirandad.github.io/sitemap-index.xml`.
The sitemap (with both language URLs) is generated automatically at build time.

---

## Accessibility & performance notes

- Semantic HTML, correct heading hierarchy, skip-link, keyboard-focusable
  controls with visible focus states, and ARIA labels on icon-only buttons.
- Dark mode is the default; the theme toggle persists the choice in
  `localStorage` and there is no theme "flash" on load.
- Animations are subtle and fully disabled under
  `prefers-reduced-motion: reduce`.
- No client framework, no heavy dependencies; icons are inline SVG.

---

## License

Personal project. Content © Nicolas Miranda Delgado.
