# Mangaroa Meat — SEO Strategy & Content Engine

**Status:** Phase 1 draft — confirmed scope 2026-04-29. Living document.
**Owner:** Claude (autonomous routine), Billy (review + sign-off on linked content)

---

## 1. Strategic Brief (locked)

| | |
|---|---|
| **Goal** | Make Mangaroa Farms the leading NZ regenerative meat brand in search. Long-term horizon (12-24 months to dominant local position, 24-36 to NZ-wide). |
| **Geo** | NZ-wide search optimisation, North Island shipping messaging led. Local Wellington/Hutt push parallel via map pack + GBP. |
| **Audience** | Values-driven NZ buyers (regen, ethical, local), Wellington-region foodies, freezer-fillers (whole animal), gift-meat buyers. |
| **Content pillars** | 1. Educational (regen, grass-fed, NZ farming) · 2. Brand storytelling (Rob/Jake/Miki, Halter, mycelium) · 3. Comparison/buyer guides. **Not recipes.** |
| **Autonomy** | Hybrid — bot publishes hidden URLs autonomously (indexable). Linked promotions need Billy sign-off. |

---

## 2. Competitive landscape (Phase 1 first pass)

### Tier A — Commodity giants (Greenlea, Silver Fern, ANZCO)
- **Owns:** generic "NZ beef" terms, export scale, "100% grass-fed", "antibiotic/hormone-free", farmer-supplier story
- **Doesn't own:** family-scale, regenerative-as-system (vs claim), hyperlocal Wellington, on-farm butchery
- **Beat them by:** deeper transparency (return-address meat), specific farming practices (Halter/mycelium), DTC retail (they're B2B/export-led)

### Tier B — DTC peers (First Light, Provenance Lamb, FirstLight)
- **First Light owns:** premium grass-fed wagyu + venison, "Forbes-verified", "Rolls-Royce" positioning, whole-animal philosophy, slick DTC funnel
- **Doesn't own:** family-run, regenerative-first, Hutt local, beef AND lamb (they specialise)
- **Beat them by:** community/place narrative, value-priced premium (vs luxury), commitment to local NZ delivery (they push international)

### Tier C — Local Wellington (Preston's, Mediterranean, Wholly Cow, etc.)
- **Owns:** local map pack rankings, walk-in retail trust, "near me" intent
- **Doesn't own:** online/delivery infrastructure, regenerative provenance, transparent farm-to-counter chain
- **Beat them by:** unique online channel + provenance + regen story they can't replicate

### What no competitor owns (our white space)
- **Halter virtual fencing** brand association (NZ tech leader)
- **Mycelium/soil regeneration** as a story angle
- **Family-run + transparent + regen + local + online** all in one
- **Ewe-lamb-only + Suffolk-Coopworth cross** as a flavour story
- **Hutt Valley/Wellington regenerative meat** geographic claim

---

## 3. Keyword cluster map

### 3a. "Hero" keywords — own these first (low-mid competition, high intent)

| Keyword | Volume est. | Intent | Cluster |
|---|---|---|---|
| regenerative meat NZ | ~50/mo | Educational + commercial | Educational |
| regenerative beef NZ | ~80/mo | Commercial | Educational |
| regenerative lamb NZ | ~30/mo | Commercial | Educational |
| Halter cattle NZ | ~120/mo | Curious + brand-adjacent | Brand story |
| Wellington meat delivery | ~200/mo | Local commercial | Local + DTC |
| Hutt Valley butcher | ~150/mo | Local commercial | Local |
| whole lamb price NZ | ~300/mo | Commercial | Comparison |
| side of beef NZ price | ~200/mo | Commercial | Comparison |
| grass-fed beef vs grain-fed | ~400/mo | Educational | Educational |

### 3b. "Frontier" keywords — push into long-term (high competition, high value)

| Keyword | Volume est. | Why it matters |
|---|---|---|
| grass-fed beef NZ | ~2k/mo | Top-of-funnel, brand awareness |
| online meat delivery NZ | ~1k/mo | Direct commercial competitor terms |
| organic meat NZ | ~600/mo | Adjacent to regen, captures values-driven buyers |
| meat box NZ | ~400/mo | Subscription category |
| NZ meat online | ~800/mo | Commercial, generic |

### 3c. "Long-tail" — easier wins, niche

- "buy whole lamb Upper Hutt"
- "best regenerative beef Wellington"
- "Suffolk Coopworth lamb"
- "ewe lamb taste vs ram lamb"
- "Halter virtual fencing meat"
- "Mangaroa Farms vs supermarket meat"
- "where to buy regenerative meat near me NZ"

---

## 4. Content cluster plan — first 12 posts

Pillar | # | Title | Target keyword | Link strategy
---|---|---|---|---
**Educational** | 1 | What is regenerative meat? A NZ farmer's guide | regenerative meat NZ | LINKED (anchor)
Educational | 2 | Grass-fed vs grain-fed beef: what actually changes in your food | grass-fed beef vs grain-fed | LINKED
Educational | 3 | Why ewe lambs taste better — the breeding choice no supermarket makes | ewe lamb NZ | HIDDEN
Educational | 4 | Halter virtual fencing explained: how tech is changing NZ farming | Halter cattle NZ | HIDDEN
**Brand story** | 5 | Meet Rob, Jake & Miki — the family behind Mangaroa Meat | Mangaroa Farms team | LINKED (anchor)
Brand story | 6 | Mycelium, cattle and carbon: the soil story under our pasture | mycelium regenerative farming | HIDDEN
Brand story | 7 | A day at Mangaroa: from paddock muster to butchery to cabinet | Mangaroa Farms paddock to plate | HIDDEN
**Comparison** | 8 | Mangaroa Meat vs the supermarket: what you're really buying | regenerative meat vs supermarket | LINKED (anchor)
Comparison | 9 | Best NZ meat box subscription: how Mangaroa stacks up | best NZ meat box | HIDDEN
Comparison | 10 | Where to buy a whole lamb in NZ: pricing, timing, butchering options | whole lamb price NZ | HIDDEN
Comparison | 11 | Side of beef NZ: complete buyer's guide | side of beef NZ | HIDDEN
Comparison | 12 | Wellington meat delivery: every option compared | Wellington meat delivery | LINKED (local)

**LINKED = appears in nav/footer/related-posts.** Needs Billy sign-off before promotion.
**HIDDEN = published to /blog/<slug>, in sitemap (so Google indexes), but not linked from main nav.** Bot can publish autonomously.

---

## 5. Technical SEO — immediate wins

| | Status | Priority |
|---|---|---|
| `/sitemap.xml` (auto-generated by Astro plugin) | ✗ | P0 |
| `/robots.txt` (allow all, point to sitemap) | ✗ | P0 |
| `LocalBusiness` schema (Mangaroa Farm Shop, address, hours, geo) | ✗ | P0 |
| `Product` schema on /order page (each Shopify product) | ✗ | P1 |
| `FAQPage` schema on landing + /faq | ✗ | P1 |
| `BreadcrumbList` schema on inner pages | ✗ | P2 |
| `Article` schema on each blog post | ✗ | P2 |
| Open Graph + Twitter Card meta (already exists in Layout) | ✓ | — |
| Canonical URLs | ✗ | P1 |
| Per-page meta description optimisation | partial | P1 |
| Image alt text (all images) | mostly ✓ | — |
| H1 hierarchy (one per page, descriptive) | ✓ | — |
| Mobile Lighthouse Performance ≥90 | 86 (close) | P2 |
| Internal linking from landing to blog posts | n/a until posts ship | P3 |

---

## 6. Local SEO — Wellington/Hutt dominance

- Claim/optimise Google Business Profile for "Mangaroa Farms" (29 Mangaroa Valley Road)
- Categories: Butcher shop, Farm shop, Meat producer
- Add hours, photos, products
- NAP consistency across web (name/address/phone) — verify on Yelp, NZ directories
- Local citations on regenerative.org.nz, OrganicFarmNZ, Wellington food blogs
- Map pack target keywords: "butcher near me", "meat shop Upper Hutt", "farm shop Wellington"

---

## 7. Autonomous routine spec

### Cadence (once Phase 3 ships)
- **Weekly Mon 06:00 NZ** — `/seo-drift` baseline check on meat.mangaroa.org. Slack/Telegram digest if rankings/scores shift.
- **Monthly 1st 07:00 NZ** — competitor refresh: re-fetch top 5 competitor sites, diff against last month. Brain page + digest.
- **Bi-weekly Tue + Fri 21:00 NZ (Nightwatch)** — draft 1 blog post from the queue, publish to /blog/ as hidden URL. Telegram notification with summary + URL.
- **Monthly 15th** — quarterly content gap review. Surface any keyword cluster falling behind.

### Implementation
- Add 4 routines to `/schedule` cron
- Wire to existing Nightwatch infra (overnight publishing) and Dayshift (proactive ad-hoc work)
- Each routine writes to brain (synthesis pages) so cumulative knowledge builds
- Telegram digest goes to @billy_claude_bot for review

### Guardrails
- Hidden posts publish without sign-off (low risk: not in nav, just in sitemap)
- Linked posts (in nav/footer/related) → Telegram approval before promotion
- Any title that mentions a real person needs sign-off (per quiet-operators rule for Rob/Miki/Jake)
- Any claim about specific certifications/partnerships needs sign-off

---

## 8. What ships next (Phase 3 first wave)

1. `/sitemap.xml` + `/robots.txt` (~30 min)
2. `LocalBusiness` schema in Layout.astro (~30 min)
3. Per-page meta description audit + fixes (~1 hr)
4. First 3 blog posts shipped (Educational #1, Brand story #5, Comparison #8 — the 3 LINKED anchors) (~3 hrs)
5. `/blog/` index page with hidden post listing (~1 hr)

Then Phase 4: wire the autonomous routine and let it run.

---

## 9. Tracking + KPIs

| Metric | Source | Cadence | 6-month target |
|---|---|---|---|
| Organic search traffic | GA4 / GSC | Weekly | 5x current |
| Indexed pages | GSC | Weekly | 30+ pages |
| Keyword positions (cluster) | /seo-drift + GSC | Weekly | Top 10 for 5+ hero keywords |
| Local map pack rank | /seo-maps | Monthly | Top 3 for "butcher Upper Hutt" |
| Backlinks | Free tools + DataForSEO | Monthly | 10+ quality referring domains |
| Conversion: meat page → /order or /bulk submit | Vercel Analytics + Airtable | Weekly | Track + improve |

---

*Last updated: 2026-04-29. Next review: after Phase 1 deep audit + competitor /spy run.*
