# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

David Tavares's personal portfolio website — a static site with no build step, no package manager, and no dependencies beyond a CDN-loaded Font Awesome. It is meant to be opened directly as `index.html` or served as static files.

## Running / previewing

There is no build or test tooling. To preview changes, open `index.html` directly in a browser, or serve the directory with any static file server (e.g. `npx serve .` or the VS Code Live Server extension) if you need proper relative-path/CORS behavior.

## Architecture

Three files carry the entire site:

- `index.html` — all page markup and content (hero, about, skills, portfolio, contact sections). Section content (bio text, skills lists, contact links) is edited directly in the HTML.
- `css/styles.css` — all styling, plain CSS with no preprocessor. Organized top-to-bottom by page section (nav, hero, about, skills, portfolio, contact, footer), matching the section order in `index.html`.
- `js/main.js` — all JavaScript, vanilla (no framework/bundler). Key pieces:
  - `portfolioData`: an array of project objects (title, description, image, technologies, link) that is the single source of truth for the portfolio grid. To add/edit/remove a portfolio project, edit this array — there is no CMS or backend.
  - `loadPortfolioItems()` / `createPortfolioItem()`: render `portfolioData` into `#portfolio-grid`, paginated client-side via `currentPage` / `itemsPerPage` (6 per page) with a "Load More" button.
  - `initHeroSlider()`: rotates the background-image slides in `.hero-slider` every 5s, preloading each image first.
  - Remaining listeners handle smooth-scroll navigation, header background on scroll, active nav-link highlighting per section, and the mobile hamburger menu.

CSS and Font Awesome are loaded with the `media="print" onload="this.media='all'"` trick for non-blocking render, with a `<noscript>` fallback — preserve this pattern if touching `<head>`.

Hero slider images live in `images/slider/` as paired `.png`/`.webp` (webp preloaded and referenced in the CSS `background-image`; png appears to be a fallback source). Favicons live in `images/favicon/`.

## Editing conventions

- Portfolio projects: add entries to `portfolioData` in `js/main.js`; the grid and pagination update automatically.
- Content (bio, skills, contact info): edit directly in `index.html`.
- Styling: edit `css/styles.css`, keeping additions near the relevant section block.
