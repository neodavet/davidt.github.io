# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

David Tavares's personal portfolio website — a static site with no build step, no package manager, and no third-party runtime dependencies (icons are inline SVG, CSS is inlined, no CDN). It is meant to be opened directly as `index.html` or served as static files. It is tuned to pass Google PageSpeed / Lighthouse at 100 across Performance, Accessibility, Best Practices, and SEO — preserve that when editing.

## Running / previewing

There is no build or test tooling. To preview changes, open `index.html` directly in a browser, or serve the directory with any static file server (e.g. `npx serve .` or the VS Code Live Server extension) if you need proper relative-path/CORS behavior.

## Architecture

The site is essentially self-contained:

- `index.html` — all page markup and content (hero, about, skills, portfolio, contact sections) **plus all styling inlined in a single `<style>` block in `<head>`**, organized top-to-bottom by page section (nav, hero, about, skills, portfolio, contact, footer). There is no separate stylesheet — inlining eliminates the render-blocking request, which is what keeps the Performance score at 100. Section content (bio text, skills lists, contact links) and styling are both edited directly here.
  - `<head>` also carries SEO metadata: canonical URL, Open Graph / Twitter Card tags, and a JSON-LD `Person` block. Keep these in sync with real content when it changes.
  - Icons are an **inline SVG sprite** (`<symbol id="i-…">` defined once near the top of `<body>`, referenced via `<svg class="icon"><use href="#i-…"></use></svg>`). There is no Font Awesome / CDN. To add an icon, add a new `<symbol>` and reference it; decorative icons get `aria-hidden="true"` and rely on the parent link's `aria-label`.
- `js/main.js` — all JavaScript, vanilla (no framework/bundler). Key pieces:
  - `portfolioData`: an array of project objects (title, description, image, technologies, link) that is the single source of truth for the portfolio grid. To add/edit/remove a portfolio project, edit this array — there is no CMS or backend.
  - `loadPortfolioItems()` / `createPortfolioItem()`: render `portfolioData` into `#portfolio-grid`, paginated client-side via `currentPage` / `itemsPerPage` (6 per page) with a "Load More" button.
  - `initHeroSlider()`: rotates the `.hero-slider` slides every 5s. Only slide 1 has an inline `background-image` (it's the LCP element, preloaded in `<head>` with `fetchpriority="high"`); slides 2+ carry their URL in `data-src` and are lazy-loaded so they don't compete with the LCP image.
  - Remaining listeners handle smooth-scroll navigation, header background on scroll, active nav-link highlighting per section, and the mobile hamburger menu (a real `<button>` that syncs `aria-expanded`).
- Static SEO/PWA files at the repo root: `robots.txt`, `sitemap.xml`, `site.webmanifest`. The canonical/OG/sitemap URLs all point at `https://neodavet.github.io/davetportfolio/` — update them together if the deploy URL changes.

Hero slider images live in `images/slider/` as paired `.png`/`.webp` (only the `.webp` is referenced and shipped; the `.png` sources are git-ignored). Favicons live in `images/favicon/`.

## Editing conventions

- Portfolio projects: add entries to `portfolioData` in `js/main.js`; the grid and pagination update automatically.
- Content (bio, skills, contact info): edit directly in `index.html`.
- Styling: edit the inline `<style>` block in `index.html`, keeping additions near the relevant section block.
- Icons: add a `<symbol>` to the inline SVG sprite and reference it with `<use href="#i-…">`; do not reintroduce a CDN icon font.
