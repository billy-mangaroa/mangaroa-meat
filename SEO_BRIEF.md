# SEO Brief — meat.mangaroa.org

> **Status**: Pre-launch landing page for Mangaroa Farms locally-processed regenerative meat. Use this brief as the ground truth for keyword targeting, schema, content pillars, internal linking, and AI-search readiness as the site goes live.

---

## 1. Discovery

### What this site is
- A regional NZ direct-to-consumer meat brand
- Astro static site at `meat.mangaroa.org` (hybrid landing + product story)
- Orders flow through a Shopify storefront (`store.mangaroa.org/collections/online-meat-deliveries`)
- Bulk EOIs (full / half carcass) flow through an Airtable form
- **Hybrid SEO posture**: e-commerce intent + local-service SEO + content authority on regenerative practice

### Audience
1. **Wellington / Hutt Valley households** who already shop at the farm shop, follow Mangaroa on socials, or have heard via word of mouth — high intent, brand-aware
2. **Upper North Island / national NZ buyers** looking for ethical, traceable, regeneratively-raised meat online — searching keywords, comparing brands
3. **Restaurant / café procurement leads** — small but high-LTV, looking for local supply
4. **Bulk buyers** — full/half carcass, freezer-stocking households, food-conscious families

### Conversion targets
1. **Add to cart** on a meat product (primary)
2. **Bulk order EOI submission** (high-value, longer sales cycle)
3. **Newsletter signup** (Klaviyo list `VYSmUq`)
4. **Visit the farm shop** in person (local)

### Constraints
- Pre-launch — no organic baseline yet
- DNS not yet pointed at Vercel
- Single page is the meat landing, but it's part of a wider Mangaroa ecosystem (4 sub-domains share the brand)

---

## 2. Competitive analysis (NZ regen + premium meat market)

### Top 5 competitors to study

| Brand | Domain | What they do well | Where there's a gap |
|---|---|---|---|
| **First Light** | firstlight.farm | Wagyu + venison, premium positioning, strong farm storytelling, recipes | Heavily wholesale-focused, weak local DTC story |
| **Origin Earth** | originearth.co.nz | Farmer-direct, Hawke's Bay, simple narrative | Limited online ordering UX |
| **Greenlea Premier Meats** | greenlea.co.nz | Strong brand, traceability messaging | Big-co feel, no individual-farm story |
| **Aussie Butcher / The Meat Box** | aussiebutcher.co.nz / themeatbox.co.nz | Subscription model, online-first | No regen positioning, generic supply chain |
| **Pure Carnivore / Te Mana Lamb** | various | Venison + lamb specialty | Niche, narrow product range |

### Mangaroa's differentiators (lean into these)
- **Single-farm provenance** — animals raised on-site, processed locally (Preston's Foods), shipped direct
- **Regenerative practice** with verifiable carbon and biodiversity outcomes
- **Storytelling + community** — events, residency, Earth School, creator exchange — most competitors don't have this
- **Hutt Valley / Wellington proximity** — fast delivery, short food miles, local-first
- **Family / generational story** — three generations on the land
- **Cross-domain authority** — `mangaroa.org` is established for events/visiting; meat site inherits trust

### Keyword gaps to claim
- Long-tail "regenerative beef Wellington" / "ethical lamb Hutt Valley" / "grass-fed pork NZ delivery"
- Recipe + how-to content — competitors are thin here
- "Farm to home meat NZ" — few well-optimised pages
- "How to order half a carcass NZ" / "bulk meat freezer NZ" — clear search intent, weak SERPs

---

## 3. Keyword strategy

### Tier 1 — primary commercial keywords (target on landing + product pages)

| Keyword | Intent | Priority |
|---|---|---|
| regenerative meat NZ | Commercial-research | HIGH |
| pasture raised beef Wellington | Commercial | HIGH |
| ethical meat delivery NZ | Commercial | HIGH |
| grass fed beef Hutt Valley | Commercial-local | HIGH |
| local meat Wellington | Commercial-local | HIGH |
| organic meat delivery New Zealand | Commercial | MED |
| farm direct meat NZ | Commercial | MED |

### Tier 2 — bulk / wholesale intent (bulk.astro page)

| Keyword | Intent |
|---|---|
| half carcass beef NZ | Commercial-research |
| buy a quarter beef Wellington | Commercial |
| bulk meat box NZ | Commercial |
| freezer beef Wellington | Commercial-local |
| custom butchery NZ | Commercial |

### Tier 3 — informational / E-E-A-T (blog or expanded landing content)

| Keyword | Intent |
|---|---|
| what is regenerative agriculture NZ | Informational |
| how is grass-fed beef different | Informational |
| how to store half a carcass | Informational |
| pasture raised vs grass fed | Informational |
| how is meat processed in NZ | Informational |
| what cuts come from half a beef | Informational |
| best ways to cook regenerative beef | Informational |

### Tier 4 — local search (Google Business Profile)
- "meat near me" (when within Wellington / Hutt geofence)
- "butcher Upper Hutt"
- "farm shop Wellington"

### Branded
- mangaroa farms meat
- mangaroa meat
- mangaroa farm shop
- order meat mangaroa

---

## 4. Site architecture (current + recommended)

### Current structure (4 pages)

```
/                        Landing page
/order                   Shopify product grid
/bulk                    Bulk order EOI form
/faq                     FAQ
```

### Recommended additions (post-launch, in priority order)

```
/                        Landing (already exists — upgrade per RESIDENCY_UPGRADE_PROMPT)
/order                   Shopify product grid (already exists)
/bulk                    Bulk EOI form (already exists)
/faq                     FAQ (already exists)
/about                   Farm story, family, generations, regenerative kaupapa
/regenerative            Long-form on the practice — soil testing, biodiversity,
                         carbon, animal welfare, processor relationships
/cuts                    "What cuts come from half a beef?" — visual cuts guide
                         + a buying guide. High-intent informational.
/recipes                 Recipe collection — slow cooks, NZ classics, low-and-slow
                         (recipe schema heavy, GEO-optimised)
/recipes/<slug>          Individual recipe pages
/blog                    Regenerative + farm-to-table thought leadership
/blog/<slug>             Individual posts
```

### Quality gates
- ⚠️ Don't churn out thin "city" landing pages (e.g. `/wellington-meat`, `/hutt-valley-meat`). Stick to one strong location landing — the home page itself.
- ✅ Recipe pages — yes, but only if each is genuinely useful (≥600 words, real photo, written by a human, tested)
- ✅ Blog — quality over cadence. 1 post / fortnight beats 4 thin posts / month.

---

## 5. On-page SEO — landing page (`/`)

### Title tag (≤60 chars)
**Recommended**: `Mangaroa Farms — Regenerative Meat, Wellington NZ`
- Brand + primary keyword + locale
- Or variant: `Pasture-Raised Meat from Mangaroa Farms · Wellington NZ`

### Meta description (≤155 chars)
> Beef, lamb and eggs from Mangaroa Farms — three generations on the land in the Hutt Valley. Pasture-raised, locally processed, delivered across NZ.

### H1 strategy
**One H1** — visible above the fold, contains primary keyword:
> Regenerative meat from one Hutt Valley farm.

(Or similar — maintain Mangaroa register, no exclamations, no hype.)

### H2 / section headings (existing 8 sections, mapped to keyword intent)

| Section | Heading direction | Targets |
|---|---|---|
| Pillars | "What sets the meat apart" | "pasture raised", "grass-fed", "regenerative" |
| Journey | "From the land to your kitchen" | "farm to home", "local meat NZ" |
| Regenerative | "How regenerative practice changes the meat" | "regenerative agriculture NZ" |
| Dark interlude | (atmospheric — supports brand) | E-E-A-T |
| Products | "What's available now" | "buy beef NZ", "lamb online" |
| Butcher | "Locally processed at Preston's Foods" | "locally processed meat NZ" |
| Community | "Part of something bigger" | brand authority, trust |
| Get involved | "Order, visit, or sign up" | conversion |

### Image SEO
- All product / hero / lead photos: descriptive `alt` text (e.g. `"Hereford cattle grazing the regenerated pasture at Mangaroa Farms"`, not `"meat.jpg"`)
- File names: `mangaroa-pasture-cattle.jpg`, not `IMG_4234.jpg`
- Compress to ≤300KB at 1920px wide max
- Use WebP if Astro adapter supports — falls back to JPG via `<picture>`

---

## 6. Schema markup — required

### On the landing page (`/`)
- **Organization** (root schema, references parent brand)
- **LocalBusiness** subtype `FoodEstablishment` or `Farm` — physical address, opening hours, geo coordinates
- **WebSite** with SearchAction (sitelinks search box)
- **BreadcrumbList**

### Organization (example)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mangaroa Farms",
  "url": "https://meat.mangaroa.org",
  "logo": "https://meat.mangaroa.org/logo.png",
  "sameAs": [
    "https://mangaroa.org",
    "https://store.mangaroa.org",
    "https://events.mangaroa.org",
    "https://www.instagram.com/mangaroafarms",
    "https://www.facebook.com/mangaroafarms",
    "https://nz.linkedin.com/company/mangaroafarms"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "108 Whitemans Valley Road",
    "addressLocality": "Upper Hutt",
    "addressRegion": "Wellington",
    "postalCode": "5371",
    "addressCountry": "NZ"
  }
}
```

### LocalBusiness — for the home page
```json
{
  "@context": "https://schema.org",
  "@type": "Farm",
  "name": "Mangaroa Farms",
  "image": "https://meat.mangaroa.org/og-image.jpg",
  "telephone": "+64-27-350-0459",
  "address": { ... },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-41.1389",
    "longitude": "175.0936"
  },
  "areaServed": [
    { "@type": "City", "name": "Wellington" },
    { "@type": "City", "name": "Upper Hutt" },
    { "@type": "City", "name": "Lower Hutt" },
    { "@type": "AdministrativeArea", "name": "New Zealand" }
  ],
  "priceRange": "$$",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "09:00", "closes": "16:00" }
  ]
}
```

### On `/order` — `Product` schema per item (from Shopify)
- `name`, `image`, `description`, `sku`, `brand`, `offers` (price, priceCurrency NZD, availability, url, shippingDetails)
- `aggregateRating` + `review` if reviews exist
- Required for Google Merchant Center free listings

### On `/faq` — `FAQPage` schema
- Each Q+A as a `Question` / `acceptedAnswer` pair
- 8–10 entries, mirroring the on-page FAQ

### On recipe pages (when added) — `Recipe` schema
- `name`, `image`, `recipeIngredient`, `recipeInstructions`, `cookTime`, `prepTime`, `recipeYield`, `nutrition`
- Boost AI-search visibility — recipes are heavily surfaced in AI Overviews

### On blog posts — `Article` / `BlogPosting`
- With `author` (Person schema) for E-E-A-T

---

## 7. E-E-A-T signals

### Experience
- First-person farm storytelling — Billy, Amy, the team
- Photographs of actual animals, paddocks, the butchery process
- Dated logs / journal entries showing seasonal rhythm
- "Visit us" CTA — physical access to the farm

### Expertise
- Author bios for Billy + key team members on `/about`
- Reference regenerative practitioners + frameworks (e.g. Charles Massy, Allan Savory) where genuinely relevant
- Soil test results, biodiversity surveys — publish them on `/regenerative`
- Linked credentials: NZFSA / RMP certification (in progress per project status), industry memberships

### Authoritativeness
- Cross-domain link from `mangaroa.org` and `events.mangaroa.org` — signals brand consolidation
- Press mentions — list any RNZ, Stuff, regional paper, podcast appearances on `/about`
- Awards, certifications

### Trustworthiness
- Clear contact info, phone, address
- Policies: shipping, returns, animal welfare (link visibly in footer)
- Customer reviews (encourage Google + Trustpilot signals on the farm shop and online orders — Google Business Profile critical)
- HTTPS, valid certs, no broken links

---

## 8. Internal linking strategy

The Mangaroa ecosystem has 4 sub-domains. They should reinforce each other.

```
mangaroa.org              ←→ meat.mangaroa.org      (primary brand ↔ meat product)
mangaroa.org              ←→ events.mangaroa.org    (primary ↔ events)
mangaroa.org              ←→ store.mangaroa.org     (primary ↔ store)
meat.mangaroa.org         ←→ store.mangaroa.org     (meat landing ↔ checkout flow)
meat.mangaroa.org         ←→ events.mangaroa.org/winter-residency  (meat ↔ residency for trade-skill recruits)
```

### From `meat.mangaroa.org` outward
- Footer: links to `mangaroa.org` (parent), `store.mangaroa.org/collections/online-meat-deliveries` (order), `events.mangaroa.org` (visit/events)
- "About" section on landing: contextual links to `mangaroa.org/about-us`, `mangaroa.org/predator-free`, `mangaroa.org/about-our-meat`
- "Visit us" CTA: deep-link to `mangaroa.org/visit-us`
- Footer + nav same as the events.mangaroa.org Header (consistent UX)

### Internal anchor strategy
- Use descriptive anchor text: "regenerative grazing on our pasture", not "click here"
- Each section heading is a fragment anchor (`#pillars`, `#regenerative`, `#products`) — keeps deep links + GA4 scroll tracking simple

### Sitelink optimisation
- Set up sitelinks in GSC for `mangaroa.org` if multiple sub-domains create internal sitelink sprawl. Verify each sub-domain as a separate property in GSC.

---

## 9. AI Overviews / GEO optimisation

### Why this matters now
- AI Overviews (Google), ChatGPT search, Perplexity, Claude, etc. are surfacing answers above traditional results
- They favour: structured passages, clear factual claims, schema-backed content, brand-mention signals across the open web

### What to do on the meat landing
1. **Passage-level citability** — write FAQ answers and key explainers in self-contained, fully-formed paragraphs that an LLM can lift verbatim. Each starts with the answer (not a setup sentence).
2. **Factual claims with sources** — "raised on regenerated pasture for 18–24 months" is more citable than "raised slowly". Where claims are testable, link to source data.
3. **Brand mentions** — feature in:
   - Local NZ press (RNZ, Stuff, Wellington.scoop)
   - Podcasts (Locked On Local, Eat Local Wellington, regen-ag podcasts)
   - Marketplaces (NZ Made directory, Eat New Zealand)
   - Industry directories (BioGro, AsureQuality, Regenerative Agriculture NZ)
4. **`llms.txt` file** at the domain root listing key product / brand pages with one-line descriptions — emerging standard, low cost, modest upside
5. **Crawler accessibility**: make sure GPTBot, ChatGPT-User, ClaudeBot, Perplexity etc. can access the site (don't aggressively block in robots.txt — leave them allowed unless there's a real reason not to)

### Content patterns that AI surfaces well
- "How is X different from Y" comparisons
- Step-by-step guides ("How to order half a beef in NZ")
- Definitive lists ("What you need to know before buying bulk meat")
- Glossary-style explainers ("What does pasture-raised mean?")

---

## 10. Technical SEO foundation

### Hosting + performance
- Astro static site on Vercel — already optimised for Core Web Vitals
- Target Lighthouse mobile: ≥90 perf, ≥95 a11y, ≥95 best-practices, ≥100 SEO
- LCP target: <2.5s on Hutt Valley 4G
- INP target: <200ms
- CLS: <0.1 — avoid layout shifts on hero photo + product image grid

### Required files
- `robots.txt` — allow all major crawlers including AI bots; reference sitemap
- `sitemap.xml` — auto-generated by Astro adapter; submit to GSC
- `og-image.jpg` — 1200×630, branded, includes farm shot + logo
- `favicon.ico` + `apple-touch-icon.png`
- `llms.txt` (optional, recommended)

### URL hygiene
- All canonical URLs use `https://meat.mangaroa.org/...` (no trailing slashes — pick one and stick with it)
- 301 from `www.meat.mangaroa.org` if anyone hits it
- Avoid query-string clutter on landing — strip UTM params from canonical via `<link rel="canonical">`

### Mobile-first
- Already responsive via Tailwind — verify each section in DevTools 375px before launch
- Inputs on bulk form must be ≥16px to avoid iOS zoom (already enforced via global.css)

### Search Console + tracking
- Verify property: `sc-domain:mangaroa.org` (already in secrets) — meat sub-domain inherits
- Submit sitemap on launch day
- Set up GA4 (or Umami — already in Layout) with the four-conversion event tracking:
  1. Add to cart click (outbound to store.mangaroa.org)
  2. Bulk EOI form submit
  3. Newsletter signup
  4. "Visit us" CTA click
- Consider Microsoft Bing Webmaster Tools too — small but real share in NZ

---

## 11. Implementation roadmap

### Phase 1: Pre-launch foundation (this week)
- Apply the design upgrade per `RESIDENCY_UPGRADE_PROMPT.md`
- Implement Schema (Organization + LocalBusiness + WebSite on landing, Product on /order, FAQPage on /faq)
- Title + meta description for all 4 existing pages
- Image alt text + filename hygiene
- `robots.txt`, `sitemap.xml`, `og-image.jpg` in place
- Lighthouse audit + fix any reds
- DNS + SSL go live

### Phase 2: Launch + measurement (week 1–4)
- Submit sitemap to GSC + Bing
- Verify GA4 events firing correctly
- Newsletter capture wired to Klaviyo
- Set up Google Business Profile (separate from website work — local search critical)
- First-week monitoring: any 404s? indexing issues? Core Web Vitals real-user data trending OK?

### Phase 3: Content expansion (weeks 5–12)
- Add `/about` (the family + farm story) — high E-E-A-T value
- Add `/regenerative` (long-form practice page) — keyword authority
- Add `/cuts` (visual cut guide) — informational + commercial bridge
- Launch `/recipes` with 6 starter recipes — Recipe schema
- 1 blog post fortnightly on the regenerative practice / farm-to-table beat
- Earn first 10 backlinks via PR + directory submissions

### Phase 4: Authority + scale (months 4–12)
- Pitch local + national press (Wellington food media, RNZ Country, Stuff Life)
- Podcast appearances — book Billy + Amy on 4–6 NZ podcasts (food, regen, business)
- Build out `/recipes` to 30+ tested recipes
- Optimise top pages for AI Overviews — re-write any high-traffic page with citable passages
- Track keyword rankings monthly; adjust based on what's moving

---

## 12. KPI targets

| Metric | Launch (M0) | M3 | M6 | M12 |
|---|---|---|---|---|
| Organic sessions / mo | 0 | 1,200 | 4,500 | 12,000 |
| Indexed pages | 4 | 6 | 12 | 25+ |
| Branded keyword rank #1 | — | yes (mangaroa farms meat) | yes (10+ branded terms) | yes (all branded + 30+ non-branded) |
| Tier-1 keyword top-10 ranks | 0 | 2 | 5 | 10+ |
| Core Web Vitals (mobile) | passing | passing | passing | passing |
| Domain authority (Moz) | n/a | 8 | 14 | 22+ |
| Backlinks | 4 (internal cross-domain) | 15 | 35 | 80+ |
| Conversion rate (sessions → order) | tracked baseline | 1.5% | 2.0% | 2.5% |

---

## 13. Risks + mitigations

| Risk | Mitigation |
|---|---|
| Confusion between `meat.mangaroa.org` and `store.mangaroa.org` | Clear nav: meat.* is the brand+story page, store.* is the checkout. Cross-link explicitly. |
| Cannibalisation between `mangaroa.org/about-our-meat` and `meat.mangaroa.org/about` | Pick a primary canonical per topic. Decision: meat.* owns "about our meat" + "regenerative practice"; mangaroa.org links to meat.* for these. Add 301 from mangaroa.org/about-our-meat → meat.mangaroa.org/about once meat about page exists. |
| AI bots crawling everything causing bandwidth blowout | Astro static + Vercel CDN handles this fine. No need to block. |
| GSC verification across multiple sub-domains | Use Domain property `sc-domain:mangaroa.org` — covers all sub-domains in one place. |
| Slow content cadence undermining SEO momentum | Set a realistic 1 / fortnight blog rhythm. Quality > cadence. Use the Mangaroa wiki + brand voice as content engine. |

---

## 14. Critical first-week launch checklist

- [ ] Domain `meat.mangaroa.org` resolves over HTTPS
- [ ] Title + meta description on all 4 pages
- [ ] H1 on landing (one only) contains primary keyword
- [ ] All images have meaningful `alt` text + filenames
- [ ] `robots.txt` present, allows main crawlers + AI bots, references sitemap
- [ ] `sitemap.xml` valid, submitted to GSC + Bing Webmaster
- [ ] `og-image.jpg` 1200×630 in place — share preview tested on FB Debugger + Twitter Card Validator
- [ ] Organization + LocalBusiness + WebSite schema on landing — validated via Schema Markup Validator
- [ ] FAQPage schema on `/faq` (8+ Q&A items)
- [ ] Product schema on `/order` (Shopify storefront pulls these but verify)
- [ ] Lighthouse mobile audit ≥90 across the board
- [ ] GA4 (or Umami) firing on all 4 pages
- [ ] Klaviyo signup form wired
- [ ] 4 conversion events tracked
- [ ] Cross-links from `mangaroa.org` (footer) + `events.mangaroa.org` (footer)
- [ ] Google Business Profile claimed + populated (separate workstream but sync with this launch)

---

## 15. Files referenced

- `mangaroa/meat/RESIDENCY_UPGRADE_PROMPT.md` — design system upgrade prompt (run before/alongside SEO implementation)
- `mangaroa/meat/app/src/pages/index.astro` — current landing page
- `mangaroa/meat/app/src/pages/order.astro` — Shopify product grid
- `mangaroa/meat/app/src/pages/bulk.astro` — bulk EOI form
- `mangaroa/meat/app/src/pages/faq.astro` — FAQ
- `mangaroa/website/app/src/pages/winter-residency.astro` — design system reference
