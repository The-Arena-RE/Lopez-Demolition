# Lopez Demolition Company — Website

Phone-first marketing site for **Lopez Demolition Company** — junk removal, mobile home removal,
property cleanouts, land clearing, and Bobcat site work. The single conversion goal is a phone call to
**(210) 739-8016** (`tel:+12107398016`).

Static HTML/CSS/JS with no runtime dependencies or frameworks. A small Node script generates every page
from shared templates, so the header, footer, phone number, and SEO tags stay consistent.

## Quick start

```bash
npm install        # installs wrangler (Cloudflare CLI)
npm run build      # generates ./public
npm run dev        # local preview through Cloudflare's runtime
```

## Deploying on Cloudflare (Workers + static assets)

Deploy in the **same Cloudflare account that holds the domain**. A Worker can only attach a custom
domain that belongs to its own account.

1. In the Cloudflare dashboard, switch to the account that owns the domain (account picker, top-left).
2. Go to **Workers & Pages → Create → Import a repository**. Connect GitHub if asked, then pick
   this repository and branch.
3. Use these build settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
4. Deploy. `wrangler.jsonc` attaches `lopezdemo.com` and `www.lopezdemo.com`, and the Worker
   301-redirects `www` to the bare domain.
   - If the deploy says a DNS record already exists, delete the old A/AAAA/CNAME records for `@` and
     `www` on that domain's **DNS** page, then deploy again.

Every push to the connected branch redeploys automatically.

**Using a different domain?** Change it in three places: `url` in `src/config.mjs`, `CANONICAL_HOST`
in `worker/index.js`, and `routes` in `wrangler.jsonc`.

## Maintenance mode (currently ON)

While `MAINTENANCE_MODE` is `"true"` in `wrangler.jsonc`, every visitor sees only a branded
"New Website Coming Soon" page. It has the call button, returns HTTP 503 and is marked noindex.

- **Preview the real site:** in Cloudflare, open the Worker and go to **Settings → Variables and
  Secrets → Add**. Choose type **Secret**, name it `PREVIEW_KEY`, and give it a long random value. Then
  visit `https://lopezdemo.com/?preview=<that value>` once. A cookie keeps you in for 30 days.
  `?preview=off` signs you out.
- **Launch:** set `"MAINTENANCE_MODE": "false"` and push.

## Hidden from search engines until launch

`searchVisible` in `src/config.mjs` is currently **false**. The site is live, but every page carries
`noindex` (a meta tag plus an `X-Robots-Tag` header), and robots.txt doesn't list the sitemap. To go
public, set it to `true` and push. Then submit `https://lopezdemo.com/sitemap.xml` in Google Search Console.

## Structure

```
wrangler.jsonc         ← Cloudflare Worker config (static assets + custom domain)
worker/index.js        ← www → apex redirect, then serves ./public
src/config.mjs         ← business info, service area, hours, media, real project photos
src/layout.mjs         ← <head>, SEO tags, LocalBusiness schema, header, footer, sticky mobile call bar
src/partials.mjs       ← page hero, gallery / before-after, call band
src/pages/home.mjs     ← homepage (12 sections)
src/pages/services.mjs ← 5 service pages (unique content each)
src/pages/other.mjs    ← about, our work, service areas, contact, privacy, 404
assets/css/styles.css  ← all styles
assets/js/main.js      ← nav, scroll reveals, lazy background video, before/after slider, call tracking
public/                ← build output (committed so it can be deployed as-is)
```

## Before launch — information to confirm

All of these live in `src/config.mjs`. Anything left empty stays off the site.

| Item | Why |
|---|---|
| `url` — the registered domain (currently `https://lopezdemo.com`) | Canonical URLs, sitemap, schema |
| `primaryCity`, `citiesServed`, `countiesServed`, `travelArea` | Service-area section, footer, schema. Do **not** assume San Antonio from the 210 area code. |
| `hours` | Footer + contact page |
| `googleBusinessProfile` | Linked in structured data |
| Free estimates? | If yes, change `primaryCta` to `CALL NOW FOR A FREE QUOTE` |
| Licensing / insurance | Only add once verified |
| Demolition scope | Demolition is a homepage card only; add a page once the scope and permits are confirmed |

## Photos & video

The site currently uses **licensed stock media** hotlinked from Pexels (photos) and Mixkit (background
video). Stock images are never labeled as company jobs. The gallery says that clearly, and it switches to
the "The Work Speaks for Itself" before/after layout automatically once real photos are added.

To add real work:

1. Put optimized `.webp` files in `assets/img/projects/`.
2. Add entries to `projects` (before/after pairs) or `projectPhotos` in `src/config.mjs`.
3. To replace a stock image anywhere, set `src: '/assets/img/your-file.webp'` on that entry in `media`.
4. `npm run build`.

Background videos only load on screens ≥ 768px wide. They are skipped for reduced-motion and data-saver
users and pause when off-screen. If a video fails to load, the poster photo stays visible.

## Call tracking

Every `tel:` link has a `data-call` location (`header`, `hero`, `service-card`, `service-page`,
`sticky-mobile`, `footer`, …). A click pushes `phone_click` to `dataLayer` and, if GA4 is installed,
fires `gtag('event', 'phone_click', { call_location })`. Add your GA4/GTM snippet in `src/layout.mjs`.
A click is a call **attempt**, not proof of a completed call.

## SEO included

A unique title and description on every page, canonical URLs, one H1 per page, `sitemap.xml` and
`robots.txt`, and Open Graph tags. Structured data covers HomeAndConstructionBusiness, Service, FAQPage
and BreadcrumbList. No street address is published.
