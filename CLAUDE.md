# meat.mangaroa.org Development Guide

**For current status**: See `ACTIVE.md`
**For SEO program**: See `SEO_STRATEGY.md`

Live editorial site for the Mangaroa Farms locally-processed meat launch. Static Astro + React 19 islands, Tailwind 4, deployed on Vercel. Pulls products from Shopify Storefront API (collection: `online-meat-deliveries`), handles bulk order EOI via Airtable, newsletter via Klaviyo.

**Production:** https://meat.mangaroa.org

---

## Essential Commands

### Environment Setup
```bash
cd app
cp .env.example .env
# Add SHOPIFY_STOREFRONT_TOKEN + AIRTABLE keys to .env
npm install
```

### Development Commands
```bash
cd app
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production (also generates sitemap-index.xml)
npm run preview  # Preview production build locally
```

### Deployment
```bash
cd /Users/billylewis/workspace/mangaroa/meat
npx vercel --prod
```

### Vercel env vars — IMPORTANT

Always use `printf "%s"` (NOT `echo`) when setting env vars via CLI. `echo` injects a trailing newline that silently breaks the var at runtime.

```bash
# Right
printf "%s" "value" | npx vercel env add MY_VAR production

# Wrong (silently broken)
echo "value" | npx vercel env add MY_VAR production
```

---

## Project Structure

```
meat/
├── app/                          # Astro application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.astro       # Landing (Coming Soon → Hero → Stats → Editorial → Pillars → Beef + Lamb → Products → How It Works → FAQ → CTA → Newsletter)
│   │   │   ├── order.astro       # Shopify product grid w/ Beef/Lamb + cut filters
│   │   │   ├── bulk.astro        # Bulk EOI form (12 fields) → Airtable
│   │   │   ├── faq.astro         # FAQ accordion (10 Qs)
│   │   │   └── blog/
│   │   │       ├── index.astro   # Blog listing (LINKED non-draft only)
│   │   │       └── [slug].astro  # Blog post (all non-draft — linked + hidden)
│   │   ├── components/
│   │   │   ├── Header.astro      # Transparent overlay (absolute top-0)
│   │   │   ├── Footer.astro      # 3-column footer
│   │   │   └── schema/           # JSON-LD structured data
│   │   │       ├── OrganizationSchema.astro  # Global (every page via Layout)
│   │   │       ├── LocalBusinessSchema.astro # Home only (FoodEstablishment)
│   │   │       ├── FAQPageSchema.astro       # Home + /faq
│   │   │       ├── ProductSchema.astro       # /order (47 Shopify products)
│   │   │       └── BreadcrumbSchema.astro    # Inner pages + blog
│   │   ├── layouts/
│   │   │   ├── Layout.astro      # Base layout, OG tags, canonical URL, noindex, OrganizationSchema, Typekit defer
│   │   │   └── BlogLayout.astro  # Blog post layout, Article JSON-LD, breadcrumbs
│   │   ├── content/
│   │   │   └── blog/             # MDX blog posts (content collection)
│   │   ├── content.config.ts     # Blog collection schema (pillar, status, draft, targetKeyword)
│   │   ├── lib/
│   │   │   └── shopify.ts        # Shopify client, MeatProduct interface, mock data
│   │   └── styles/
│   │       └── global.css        # Tailwind 4 + brand tokens (charcoal/cream/eaves)
│   ├── public/
│   │   ├── meat/                 # 25+ optimised images (hero, food, farm, banners)
│   │   ├── logo.png
│   │   └── robots.txt            # Allow-all + sitemap pointer
│   ├── astro.config.mjs          # output: 'static', adapter: vercel(), integrations: [react(), mdx(), sitemap()]
│   └── .env.example
├── api/                          # Vercel serverless functions
│   └── submit-bulk-order.js      # Bulk EOI → Airtable
├── content/                      # All copy deliverables (Klaviyo HTML, social, in-store, print)
├── vercel.json
├── ACTIVE.md                     # Current state
├── TODO.md                       # Active work
├── CHANGELOG.md                  # History
├── SEO_STRATEGY.md               # Long-term SEO plan
├── SEO_BRIEF.md                  # SEO interview answers
└── RESIDENCY_UPGRADE_PROMPT.md   # Design system reference
```

---

## Astro Config

```js
// app/astro.config.mjs
export default defineConfig({
  site: 'https://meat.mangaroa.org',
  output: 'static',
  adapter: vercel(),
  integrations: [react(), mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] }
});
```

`@astrojs/sitemap` auto-generates `sitemap-index.xml` + `sitemap-0.xml` on every build.

## Blog Content Model

Blog posts live in `app/src/content/blog/*.mdx`. Schema defined in `content.config.ts`:

- **pillar**: `educational` | `brand-story` | `comparison` (NOT recipes)
- **status**: `linked` (shows on blog index + nav) | `hidden` (reachable by URL/sitemap only)
- **draft**: `true` = excluded from build entirely (not in sitemap, not routable)
- **targetKeyword**: primary SEO keyword for the post

Hybrid autonomy model: HIDDEN posts can be published autonomously (bot/Nightwatch). LINKED posts need Billy's sign-off.

---

## Tech Stack (pinned)

| Dependency | Version | Notes |
|---|---|---|
| astro | 6.1.3 | Newer breaks build |
| @astrojs/react | 5.0.4 | React 19 islands |
| @astrojs/mdx | latest | Blog MDX content |
| @astrojs/sitemap | 3.7.2 | Auto sitemap |
| @astrojs/vercel | 10.0.4 | Static + serverless |
| tailwindcss | 4.2.2 | Pinned — newer breaks |
| @tailwindcss/vite | 4.2.2 | Pinned |
| react / react-dom | 19.2.5 | |
| framer-motion | 12.38.0 | Hero motion |
| vite | ^7 (override) | Vite 8 + Rolldown breaks React refresh |

Adobe Fonts/Typekit kit `gdd7waj` (aktiv-grotesk + mr-eaves-modern) loaded deferred in `Layout.astro`.

---

## Shopify Integration

- Collection: `online-meat-deliveries` (smart collection, ID 495042003233)
- 47 products live
- Uses Storefront API (read-only, public)
- Mock data fallback when `SHOPIFY_STOREFRONT_TOKEN` not set

## Airtable Integration

- Base: `app8H6Ok8BVYKYCGz`
- Table: `Bulk Meat Orders` (`tblkIn0STPXvjDJgl`)
- Fields: Name, Email, Phone, Region, Meat Type, Quantity, Butchering, Collection, Frequency, Preferred Timing, Why Interested, Notes, Status, Source, Created Date
- Project tracker: "Locally Processed Meat Launch" (`recNVzDSiMsvYltj1`)
- **PAT**: must be canonical `mangaroa_farms_pat` (in `mangaroa/mcp/data/credentials/secrets.json` → `airtable.mangaroa_farms_pat`). The older `marketing_brain_pat` lacks scope on this table.

## Klaviyo Integration

- Public key: `QVwuJb`
- List: `VYSmUq`
- Newsletter form on landing has First Name + Email

## Brand Tokens (Tailwind/CSS)

- `--bg-cream`: warm off-white
- `--ink-charcoal`: primary text
- `--accent-eaves`: serif accent (mr-eaves-modern)
- Typeface: aktiv-grotesk (body), mr-eaves-modern (display/serif)
- All legacy `mangaroa-green*` tokens repointed to charcoal — never reintroduce green

## Key Messaging

- Coming Soon line: fresh meat from on-farm butchery launches in a few weeks; frozen cuts available now
- "Born & Grazed in Alignment with Nature"
- "Home-grown, home-processed"
- Rob = farm manager + butcher (same person raises animals, prepares cuts)
- Halter virtual fencing — NZ tech leader, brand-adjacent SEO opportunity
- Mycelium soil story — white-space differentiator
- Preston's handles slaughter — frame as trusted partner, never replacement

---

## CRITICAL RULES

- Never commit `.env` files with real tokens
- Preston's framing: additive, never corrective
- Heritage story needs family approval before use
- Quiet operators (Rob, Miki, Jake): acknowledge in copy, do NOT hero-feature with portraits
- Vercel env vars: ALWAYS `printf "%s"`, never `echo`
- DNS lives in Squarespace Domains, NOT GCP (despite ns-cloud-d* nameservers)
- No green anywhere in the design system
- Pinned versions: don't bump astro/tailwind/vite without testing build
