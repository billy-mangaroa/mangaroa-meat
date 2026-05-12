# TODO - meat.mangaroa.org

Active tasks and planned work. See CHANGELOG.md for completed features. Full task list in Airtable project "Locally Processed Meat Launch" (`recNVzDSiMsvYltj1`).

---

## [BLOCKED ON BILLY]

- [ ] Sign up DataForSEO at https://app.dataforseo.com/register, drop `login` + `password` into `mangaroa/mcp/data/credentials/secrets.json` under `dataforseo`. Unblocks real keyword volumes for the cluster.
- [ ] Claim Google Business Profile at https://business.google.com — categories: Farm shop, Butcher shop, Meat producer. Invite bookings@mangaroa.org as Manager. Unblocks `/seo-maps` baseline + map-pack tracking.
- [ ] Set up Google Search Console (Domain property `meat.mangaroa.org`) — verify via TXT record in Squarespace Domains DNS, add bookings@ as Full user. Unblocks impression/CTR/position data via `/seo-google`.
- [ ] Sign off on 3 LINKED blog post titles (Educational #1, Brand story #5, Comparison #8 from `SEO_STRATEGY.md` §4). Unblocks the first content wave.

---

## [HIGH PRIORITY]

### SEO Phase 3 (technical + first content wave)

- [x] `LocalBusiness` schema on home (FoodEstablishment, geo, hours)
- [x] `Product` schema on `/order` (47 Shopify products)
- [x] `FAQPage` schema on landing + `/faq`
- [x] `BreadcrumbList` schema on inner pages + blog
- [x] `Article` schema on blog posts (via BlogLayout)
- [x] `Organization` schema global (via Layout)
- [x] Canonical URL tags
- [x] Per-page meta description audit + fixes (order/bulk/faq)
- [x] `/blog/` infrastructure (content collection, MDX, layouts, index, [slug])
- [ ] First 3 LINKED anchor posts (after Billy title sign-off)
- [ ] First 9 HIDDEN posts (autonomous publishing — no sign-off needed per hybrid mode)
- [ ] Mobile Lighthouse Performance 86 → ≥90 (last 4 points)

### Content / Ops

- [ ] Research bulk pricing — whole lamb, side of beef (confirm with Rob)
- [ ] Create filming schedule with Miki
- [ ] Video concept: meat launch story (Rob in butchery, paddock to counter)
- [ ] Newsletter #1: Rob butchery story (use week 2 email template)

---

## [MEDIUM PRIORITY]

### SEO Phase 4 (autonomous routine — wires up after Phase 3)

- [ ] Add 4 routines to `/schedule` cron (weekly /seo-drift, monthly competitor refresh, bi-weekly Nightwatch publish, monthly content gap review)
- [ ] Wire bi-weekly publish into Nightwatch (overnight draft → /blog/ as HIDDEN)
- [ ] Telegram digest format for review notifications
- [ ] Brain synthesis pages cumulative (each routine writes back)

### Other

- [ ] Video concept: farm story (virtual fencing, Halter cattle, cover crops)
- [ ] Film TB testing and cattle movement (coordinate with Rob)
- [ ] Plan farmer-facing content for On the Land (confirm specs with editor)
- [ ] Plan launch barbecue/tasting event (date, logistics, promotion)
- [ ] Build Klaviyo email templates from HTML files
- [ ] Set up content calendar in Airtable or scheduling tool

---

## [LOW PRIORITY / FUTURE]

- [ ] WOAP entry follow-up (submitted, waiting confirmation)
- [ ] Heritage story — get family approval before using
- [ ] Add product reviews/testimonials section
- [ ] Local SEO citations (regenerative.org.nz, OrganicFarmNZ, Wellington food blogs)
- [ ] Backlink campaign — target 10+ quality referring domains over 6 months

---

## [DONE 2026-04-30 — local only, awaiting deploy]

- ✓ Hero goal-statement subhead added
- ✓ Wide banner photo swapped (lambing photo)
- ✓ Soil Connection split into own section + 5 regen principles list
- ✓ NEW Pasture System section (tall grass / standing hay / no plastic baleage)
- ✓ NEW Adaptive Grazing on Halter section + halterhq.com link
- ✓ Pasture-is-the-system row 1: drone photo replaces sheep mustering
- ✓ "How it's grown" copy expansion in Dark Interlude
- ✓ Featured products grid title-filters for sirloin / lamb rack / sausages
- ✓ Removed "See all FAQs" link
- ✓ FAQ on home now renders embedded HTML (set:html) + 7 hyperlinks wired
- ✓ Inner page headers brightened (bulk/order/faq)
- ✓ Banner images deduped across home + page headers
- ✓ "On-farm butchery" card now shows actual butchery photo (was BBQ)
- ✓ OG image swapped to 1200×630 cooked beef flatlay

## [DONE 2026-04-29 — see CHANGELOG]

- ✓ Bulk EOI form fixed in prod (Airtable PAT swap to canonical `mangaroa_farms_pat`)
- ✓ Site deployed to production
- ✓ DNS configured via Squarespace Domains
- ✓ SSL issued for meat.mangaroa.org
- ✓ Full Winter Residency design system applied
- ✓ Beef/Lamb sections, Born & Grazed, Soil Connection added
- ✓ `/order` page filter system (Beef/Lamb + cut type)
- ✓ 4-step "How it works" with /about-our-meat copy
- ✓ Coming Soon banner site-wide
- ✓ SEO Strategy locked (`SEO_STRATEGY.md`)
- ✓ sitemap-index.xml + robots.txt deployed
