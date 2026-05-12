# Meat site → Bring to parity with Winter Residency design system

> **What this is**: a directive prompt to upgrade `meat.mangaroa.org` (pre-launch) with the polished design language shipped on `events.mangaroa.org/winter-residency` in late April 2026. Hand this to a fresh Claude session — or run it yourself — when you're ready to do the upgrade pass.

---

## Context summary — what shipped on Winter Residency

The WR landing page received a series of design + UX upgrades. The patterns that will carry over to the meat site are:

### Brand typography (Adobe Fonts / Typekit)
- Mangaroa Farms now uses kit `gdd7waj` — `aktiv-grotesk` (body) + `mr-eaves-modern` (display)
- Loaded globally from the Layout: `<link rel="stylesheet" href="https://use.typekit.net/gdd7waj.css" />`
- Body: `font-family: 'aktiv-grotesk', 'Inter', system-ui, sans-serif`
- Headings (h1, h2, h3, .display): `font-family: 'mr-eaves-modern', 'aktiv-grotesk', sans-serif`
- Includes `font-feature-settings: 'kern' 1, 'liga' 1` and `letter-spacing: -0.01em` for display

### Typography polish
- `text-wrap: balance` on h1, h2, h3 — kills widows/orphans on display text
- `text-wrap: pretty` on `p, li, summary` — reduces stranded single-word last lines
- Section eyebrow style bumped to `text-[14px] sm:text-[16px] uppercase tracking-[0.25em] font-medium`
- Column-level eyebrows: `text-[14px] uppercase tracking-[0.2em] font-bold`
- Display sizing via `clamp(2.5rem, 7vw, 4.75rem)` for hero, `text-3xl sm:text-5xl` (or larger for marquee sections like "The shape of it" → `text-5xl sm:text-7xl`)
- Editorial dropcap on first letter of lead-paragraph (`font-size: 4rem; line-height: 0.78; color: var(--color-mangaroa-gold); float: left; margin: 0.1rem 0.18rem -0.1rem 0`)

### Header + footer
- Header inner row height: `h-24 sm:h-28` (was 16/20)
- Header logo: `h-14 sm:h-16` (≈ +40%)
- Footer logo: `h-11 sm:h-14`

### Hero pattern
- Full-bleed photo background + dark gradient + radial gold accent: `bg-gradient-to-b from-black/30 via-black/55 to-black/90` + `bg-[radial-gradient(circle_at_25%_15%,rgba(201,162,39,0.22),transparent_60%)] mix-blend-overlay`
- Slow ken-burns: 32s ease-in-out infinite alternate, scale(1) → scale(1.06)
- Eyebrow `text-[11px] sm:text-xs uppercase tracking-[0.3em] text-mangaroa-gold-light`
- H1 with italic gold-light accent line on the date/subtitle

### Stats strip
- 4 stat cells beneath the hero, tight column gap (`gap-3 sm:gap-5`)
- Number: `text-3xl sm:text-4xl font-semibold tracking-tight`
- Unit: `text-xs sm:text-sm text-mangaroa-gray mt-1 leading-snug`

### Lead-in editorial
- 12-col grid: image (col-span-5) on left + copy (col-span-7) on right
- On mobile, image stacks above text via `order-2 md:order-1` reversal
- Two-paragraph intro with dropcap on para 1
- `clamp(1.125rem, 2.2vw, 1.375rem)` on the lede paragraph

### Asymmetric image+text rows
- `grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`
- `aspect-[4/5]` portrait images in 2-col grids with offset `mt-8 sm:mt-12` on alternating cells
- Two rows alternating: row 1 text left + image right, row 2 image left + text right (using `order-1 lg:order-2` swap)

### Dark interlude with banner backdrop
- `bg-mangaroa-charcoal` + photo at `opacity-30/40` + gradient overlay (`from-mangaroa-charcoal/80 via-mangaroa-charcoal/85 to-mangaroa-charcoal/95`) + radial gold accent at `mix-blend-overlay`
- Eyebrow uses `text-mangaroa-gold-light` instead of `text-mangaroa-gold`

### Wide banner sections
- `aspect-[16/7]` (or `16/6`) with `rounded-2xl overflow-hidden bg-mangaroa-earth` fallback color
- `<img>` with `class="w-full h-full object-cover" loading="lazy" onerror="this.style.display='none'"`

### "Plug In" two-card layout
- 2-col on desktop, stacked on mobile
- Each card: `bg-white rounded-2xl border` with `aspect-[16/10]` image on top, padded body below
- `group-hover:scale-[1.03] transition-transform duration-700` on the image
- Optional outbound link with `↗` arrow that nudges right on hover

### FAQ pattern
- Native `<details>` elements wrapped in `bg-white border rounded-xl`
- Hover summary: `hover:bg-mangaroa-cream/50`
- `+` icon rotates 45deg on `group-open`

### Numbered packing/list pattern
- 2-col grid of items, each prefixed by `text-xs font-mono text-mangaroa-gold tabular-nums tracking-tight` two-digit numeral
- Title `font-semibold leading-snug`, body `text-mangaroa-gray text-[14px]`

### Form patterns (apply to bulk.astro)
- Input style: `tf-input-big` (1rem padding, 0.75rem radius, gold focus ring with `box-shadow: 0 0 0 4px gold/18%`)
- Radio cards: pill segmented options with `1`/`2`/`3` numeric keys for keyboard nav
- Check rows: full-width cards that highlight when checked (`bg: gold/8%, border: gold`)
- Required fields kept tight (only the genuinely required ones — name, email, contact); acks should be optional but stored
- Honeypot field: hidden `website_url` field that silently 200s if filled

### Scroll-reveal motion
- `data-reveal` attribute on content blocks
- IntersectionObserver toggles `is-visible` class
- CSS: `opacity 0 → 1`, `translateY(14px) → 0`, 700ms `cubic-bezier(0.22, 1, 0.36, 1)`
- Honor `prefers-reduced-motion: reduce` (disable animations entirely)

### Soft "Got questions?" off-ramp
- Cream-tint band before the closing CTA
- Eyebrow + h2 + body + outline-style mailto button
- Email: `online@mangaroa.org`

### Soft "not paid"-style framings
- Where you have a non-monetary exchange or volunteer ask, add a small italic note with a gold left-border `border-l-2 border-mangaroa-gold/60 pl-6 sm:pl-8 py-2`

### Brand colours (already in your global.css — verify match)
- `mangaroa-green` `#2D5A3D`
- `mangaroa-cream` `#F8F6F1`
- `mangaroa-gold` `#C9A227` (+ light/dark variants)
- `mangaroa-charcoal` `#2C2C2C`
- `mangaroa-earth` `#8B7355`

---

## Prompt — paste this into a fresh Claude session

```
You're upgrading mangaroa/meat (the locally-processed meat landing page,
pre-launch, Astro static site) to match the design system shipped on
events.mangaroa.org/winter-residency. Read RESIDENCY_UPGRADE_PROMPT.md in
the meat root for the full pattern reference.

Apply these changes — in this order:

1. **Brand fonts via Typekit**
   - Edit app/src/layouts/Layout.astro head: drop the Crimson Pro / Inter
     Google Fonts <link>; add <link rel="stylesheet"
     href="https://use.typekit.net/gdd7waj.css" />.
   - Edit app/src/styles/global.css:
     - Set --font-sans to: 'aktiv-grotesk', 'Inter', system-ui,
       -apple-system, sans-serif
     - Add --font-display: 'mr-eaves-modern', 'aktiv-grotesk',
       'Inter', system-ui, sans-serif
     - Drop --font-serif (Crimson Pro) unless used elsewhere — search
       first.
     - Apply h1, h2, h3 { font-family: var(--font-display); text-wrap:
       balance; letter-spacing: -0.01em; }
     - Add p, li, summary { text-wrap: pretty; }

2. **Header + footer logo bumps**
   - Header inner row → h-24 sm:h-28
   - Header logo → h-14 sm:h-16
   - Footer logo → h-11 sm:h-14

3. **Section eyebrow uplift**
   - All section "kicker" small-caps text → text-[14px] sm:text-[16px]
     uppercase tracking-[0.25em] font-medium
   - All column-level small-caps eyebrow → text-[14px] uppercase
     tracking-[0.2em] font-bold

4. **Hero — match WR pattern**
   - Replace existing hero with full-bleed photo backdrop + ken-burns
     animation + dark gradient + radial gold accent.
   - Use new hero photo from /public/meat/hero.jpg (Billy will drop in).
   - H1 with clamp font-size, italic gold-light second line if there's
     a tagline.

5. **Add a Stats strip** beneath the hero
   - 4 stats: e.g. "100% / pasture-raised", "0 / antibiotics & added
     hormones", "<10km / from farm to butcher", "3 / generations on the
     land"
   - Pattern: number text-3xl sm:text-4xl, unit text-xs sm:text-sm
   - Tight gap: gap-3 sm:gap-5
   - Border-bottom mangaroa-gray-light

6. **Lead-in editorial section**
   - 12-col grid: image left (col-5) + copy right (col-7)
   - Two-paragraph intro, dropcap on first letter of para 1
   - Image: a Mangaroa farm shot showing pasture or animals (Billy
     supplies)

7. **Pillars section** (existing) — apply scaled-up "Shape of It"
   typography:
   - Section h2 → text-5xl sm:text-7xl font-semibold leading-[1.05]
   - Pillar titles → text-2xl sm:text-4xl
   - Pillar body → text-lg sm:text-xl

8. **Regenerative section** — switch to asymmetric image+text rows
   (lg:grid-cols-12, image col-7 + text col-5, then reverse order on
   second row). Use 2x2 image grid with offset mt-8 sm:mt-12 on
   alternating cells.

9. **Dark interlude section** — apply photo backdrop pattern
   - bg-mangaroa-charcoal + bg-cover photo at opacity-40
   - gradient overlay from-mangaroa-charcoal/80 via-/85 to-/95
   - subtle gold radial at mix-blend-overlay
   - eyebrow text-mangaroa-gold-light

10. **Products section** — bigger product cards, asymmetric layout
    if 4+ products. Match WR's "land + people" rhythm.

11. **Butcher / Process section** — could use the "Plug In" 2-card
    pattern: card 1 = "Locally processed" (Preston's Foods), card 2 =
    "Regenerative grazing" (link to events).

12. **FAQ section** — replace any existing FAQ with WR's <details>
    pattern. 8–10 questions covering ordering, delivery, animal
    welfare, processing, freezer storage.

13. **Got questions? band** before the footer. Email:
    online@mangaroa.org.

14. **Bulk order form (bulk.astro)** — apply the form-input,
    radio-card, check-row visual styles from WR. Don't go full
    typeform unless the form has 8+ fields. Make ack checkboxes
    optional (store value, don't gate submission).

15. **Scroll-reveal motion**
    - Wrap each major content block in data-reveal
    - Add IntersectionObserver script (copy from WR
      pages/winter-residency.astro)
    - CSS: opacity 0→1, translateY(14px)→0, 700ms ease-out
    - Honor prefers-reduced-motion: reduce

16. **New imagery** — Billy is supplying fresh meat photos. Drop
    them at app/public/meat/ with these conventional names:
    - hero.jpg (1920px wide, ~700KB)
    - lead-image.jpg (~500KB, vertical-friendly 4:5)
    - regen-1..4.jpg (1000px wide, ~300KB each, 2x2 grid)
    - butcher-image.jpg (~400KB)
    - dark-banner.jpg (1800px wide, ~700KB)
    - product-hero.jpg (optional)
    Resize via: sips -Z 1920 -s formatOptions 82 IN.jpg --out OUT.jpg

VERIFY:
- cd app && npm run dev → spot-check each section, mobile viewport
  too (DevTools 375px)
- npm run build clean
- Lighthouse mobile: ≥90 perf, ≥95 a11y, ≥95 best-practices, ≥100 SEO
- Test bulk order form end-to-end (Airtable record lands)

DEPLOY:
- cd /Users/billylewis/workspace/mangaroa/meat && npx vercel --prod
```

---

## Image-naming convention to share with Billy

When dropping fresh meat photos at `app/public/meat/`, use these conventional names so the upgrade prompt above wires them in without further ambiguity:

| File | Aspect | Use |
|---|---|---|
| `hero.jpg` | 16:9 wide | Hero backdrop |
| `lead-image.jpg` | 4:5 portrait | Lead-in editorial |
| `regen-1.jpg` … `regen-4.jpg` | 4:5 portrait | Asymmetric 2×2 grid in regenerative section |
| `butcher-image.jpg` | 4:3 or 16:10 | Butcher/process card |
| `dark-banner.jpg` | 16:6 wide | Dark interlude backdrop |
| `product-hero.jpg` | 4:3 | Optional banner above product grid |

Resize via: `sips -Z <maxDim> -s formatOptions 82 INPUT.jpg --out OUTPUT.jpg`

---

## Files to read for reference

- `mangaroa/website/app/src/pages/winter-residency.astro` — full reference for layouts, motion, form patterns, dropcap, FAQ markup
- `mangaroa/website/app/src/content/winter-residency.ts` — content-file pattern (consider mirroring for meat: `app/src/content/meat.ts`)
- `mangaroa/website/app/src/layouts/Layout.astro` — Typekit link injection
- `mangaroa/website/app/src/styles/global.css` — brand colour tokens (already match meat's)
