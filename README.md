# Kira AI Ring — Next.js site

The Kira AI Ring marketing site, converted from the original static HTML designs (kept in `design-source/`) to Next.js 16 (App Router, TypeScript).

## Pages

| Route       | Source design                                   | Notes                                                    |
| ----------- | ----------------------------------------------- | -------------------------------------------------------- |
| `/`         | `design-source/kira-ai-ring.html`               | Home: features, health, configurator, cart and demo checkout |
| `/compare`  | `design-source/kira-ring-vs-aura-ring-apple.html` | Kira AI Ring vs Aura Fitness Ring                        |
| `/checkout` | `design-source/kira-checkout.html`              | Review cart + membership offer modal (`noindex`)          |

All three pages share one navbar (Home · Intelligence · Health · Specs · Compare · Checkout) with a mobile menu and a light/dark toggle.

## Highlights

- **Matches the original designs.** Each page's CSS is the original stylesheet, scoped to `.pg-home`, `.pg-compare` and `.pg-checkout` so the pages can't clash. At 1440px, full-page screenshots match the originals to within about 1% of pixels.
- **Light / dark mode.** Follows the OS setting by default. The toggle remembers the visitor's choice in `localStorage`, and an inline script applies the theme before first paint so the page never flashes the wrong theme. Checkout got a dark theme it didn't have before.
- **Mobile responsive.** A hamburger menu below 820px, extra small-screen tweaks on every page, and no sideways scrolling at 390px. The originals scrolled sideways on mobile.
- **SEO.** Each page has its own title, description and canonical URL. Also included: Open Graph and Twitter cards, JSON-LD structured data (Product, Organization, WebSite, Breadcrumb), `sitemap.xml`, `robots.txt`, a web manifest, favicon and app icons, a correct heading order, and `next/image` for responsive AVIF/WebP images.
- **Accessibility.** Keyboard focus styles and a modal that closes with Esc. With "reduce motion" turned on, animations are skipped and content still shows.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Configuration

Set your production domain so canonical URLs, the sitemap and Open Graph tags point to it:

```bash
# .env.local (or your hosting provider's environment settings)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If it isn't set, it falls back to `https://kira-ring.vercel.app`.

## Project structure

```
src/
  app/
    layout.tsx          # root layout: metadata, theme script, navbar
    page.tsx            # /
    compare/page.tsx    # /compare
    checkout/page.tsx   # /checkout
    globals.css         # base + shared navbar styles
    sitemap.ts robots.ts manifest.ts icon.png apple-icon.png favicon.ico
  components/
    Navbar.tsx ThemeToggle.tsx Reveal.tsx JsonLd.tsx
    home/HeroRings.tsx home/BuySection.tsx
    checkout/MembershipModal.tsx
  styles/               # page stylesheets (original CSS, scoped per page)
  lib/                  # site constants, theme script
public/images/          # images extracted from the original HTML files
design-source/          # the original HTML designs (reference only)
```
