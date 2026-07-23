# Portfolio Website @neodavet
David Tavares Senior Web Full Stack Development Portfolio

## Features

- Responsive, fluid layout (`clamp()`-based type scale, no fixed breakpoints for text)
- **Light/dark theme** — follows the OS by default, with a header toggle that persists the user's choice (`localStorage`) and applies before first paint (no flash)
- Design-token system (CSS custom properties) driving both themes from one place
- Portfolio grid with "Load More" pagination, hover-lift cards, and whole-card links
- Animated stat counters and staggered card reveals — all gated behind `prefers-reduced-motion`
- Skills showcase, About section with LinkedIn CTA, WhatsApp floating button, social links
- Accessible: skip link, visible focus styles, keyboard-operable menu, ARIA-synced controls
- SEO/PWA ready: canonical, Open Graph, Twitter Card, JSON-LD, `robots.txt`, `sitemap.xml`, web manifest

## Tech

- Vanilla JavaScript, no framework or bundler
- All CSS and SVG icons inlined into `index.html` — no CDN, no build step
- Tuned to score 100 across all four Lighthouse / PageSpeed categories

## File Structure

```
portfolio/
├── index.html              # Markup + inlined CSS + inline SVG icons + SEO meta
├── js/
│   └── main.js            # JavaScript functionality
├── robots.txt             # Search-engine directives
├── sitemap.xml            # Sitemap
└── site.webmanifest       # PWA manifest
```

## Setup

1. Clone the repository
2. Open `index.html` in your browser
3. Customize the content in the HTML file
4. Update the portfolio data in the JavaScript file

## Dependencies

None. No build step, no package manager, no CDN. Icons are inline SVG, CSS is inlined in `index.html`, and the site is tuned to score 100 across all four Lighthouse / PageSpeed categories.

## Customization

### Portfolio Items
Edit the `portfolioData` array in the JavaScript file to add or modify portfolio items.

### Styling
Modify the inline `<style>` block in `index.html` to customize the appearance.

### Content
Update the content in the HTML file to match your information.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License. 