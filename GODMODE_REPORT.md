# Godmode Audit Report — meat.mangaroa.org

**Date**: 2026-04-30
**Scope**: Dead code, accessibility, performance, code consistency, Astro best practices
**Constraints**: No page hierarchy/section order/routing changes. No deploy. No dependency bumps.

---

## 1. Auto-Applied (low-risk fixes, applied directly)

### 1.1 HTML Nesting Bug — `index.astro`
**Severity: High**

The "Shape of It" pillars section (`<section id="shape">`, line 410) was never closed. The `</div>` for the inner grid ended at line 425, but the wrapping `<div class="max-w-6xl...">` and `<section>` tags were missing. This caused every section from "Regenerative" through "Paddock to Plate" to be nested children of the pillars section — broken semantic structure for screen readers, crawlers, and any CSS/JS targeting section boundaries.

**Fix**: Added `</div></section>` after the pillars grid, before the Regenerative section comment.

### 1.2 Green Color Violations — `index.astro`
**Severity: Medium**

Two image fallback `<div>` backgrounds used `bg-mangaroa-green-dark` (line 445) and `bg-mangaroa-green` (line 460) in the Regenerative rows. Violates the "no green anywhere in the design system" rule.

**Fix**: Replaced with `bg-mangaroa-earth` and `bg-mangaroa-earth-light` — consistent with surrounding image containers.

### 1.3 Removed `btn-outline` Class — `global.css`
**Severity: Low**

`.btn-outline` was defined with green colors (`bg-mangaroa-green`, `text-mangaroa-green`, `border-mangaroa-green`) but never used in any template. Removed to prevent accidental future use.

### 1.4 Removed Green Color Tokens — `global.css`
**Severity: Low**

`--color-mangaroa-green`, `--color-mangaroa-green-light`, `--color-mangaroa-green-dark` were defined in `@theme` but no longer referenced anywhere after fixes 1.2 and 1.3. Removed to enforce the no-green rule at the token level.

### 1.5 Newsletter Form Accessibility — `index.astro`
**Severity: Medium**

Newsletter `<input>` fields (`newsletter-firstname`, `newsletter-email`) had placeholders but no `<label>` elements or `aria-label` attributes. Screen readers could not identify the fields.

**Fix**: Added `aria-label="First name"` and `aria-label="Email address"` to the inputs.

### 1.6 Missing `--color-mangaroa-paper` Token — `global.css`
**Severity: Medium**

`bg-mangaroa-paper` was used across `index.astro` (7 occurrences), `order.astro` (3), and `bulk.astro` for alternating section backgrounds, but the color was never defined in `@theme`. Tailwind 4 silently ignored it, rendering those sections with no background (falling through to parent/body cream). Visually subtle but semantically wrong — paper sections should be slightly lighter than cream.

**Fix**: Added `--color-mangaroa-paper: #FDFCF9` to `@theme`. Visually near-white, provides the intended subtle contrast against cream (#F8F6F1).

---

## 2. Needs Billy's Sign-Off

### 2.1 Dead React Components (delete?)
Four React components exist but are **not imported by any `.astro` page**:

| File | Size | Notes |
|------|------|-------|
| `components/react/Hero.tsx` | 93 lines | Video hero with framer-motion. Replaced by static Astro hero. |
| `components/react/Pillars.tsx` | 51 lines | Lucide icons + motion. Replaced by inline SVG pillars. |
| `components/react/CTAGrid.tsx` | 64 lines | 4-card CTA grid with motion. Replaced by inline Astro cards. |
| `components/react/Timeline.tsx` | 93 lines | Paddock-to-plate timeline with motion. Not used. |

Also: `lib/utils.ts` (6 lines, `cn()` helper) is only imported by `Timeline.tsx`.

**Recommendation**: Delete all 5 files. They ship `framer-motion` + `lucide-react` as unused client-side JS if tree-shaking doesn't fully eliminate them.

**Your call** — these may have sentimental or reference value.

### 2.2 Unused Images (~49 MB reclaimable)

**`public/images/`** — 29 of 31 files are unused (43 MB total). This appears to be the entire v1 image set from before the Winter Residency redesign. Only `og-image-meat.jpg` and `lamb.jpg` are referenced (og-image-meat.jpg as the OG image).

**`public/meat/`** — 18 of 40 files are unused (5.7 MB). These are JPEG originals where WebP versions replaced them, plus a few deprecated banners:

Unused in `public/meat/`: `banner-herd.webp`, `banner-lambs.jpg`, `banner-mustering.*`, `crew-yards.jpg`, `cta-bulk.jpg`, `cta-order.jpg`, `cta-visit.*`, `dark-banner.jpg`, `farm-calf-portrait.jpg`, `farm-mustering.jpg`, `food-bbq.jpg`, `food-cooked-flatlay.jpg`, `food-raw-flatlay.jpg`, `lead-image.jpg`, `product-hero.jpg`, `regen-3.jpg`

**Recommendation**: Delete `public/images/` entirely (keep `og-image-meat.jpg`, move to `public/meat/`). Delete the 18 unused `public/meat/` files. Saves ~49 MB from the deploy bundle.

**Your call** — some images may be useful for future blog posts or content.

### 2.3 Heading Hierarchy — Soil Connection Section

In `index.astro`, "The Soil Connection" section uses `<h3>` as its primary heading (line 338). Since it's a standalone section (not nested under a parent `<h2>`), screen readers and SEO crawlers expect `<h2>`. Same applies to "Adaptive Grazing on Halter" (line 394).

**Impact**: Minor SEO and accessibility. Cosmetically identical.

**Your call** — changing to `<h2>` is a 2-character edit per heading but technically changes the heading hierarchy. The design won't change at all.

### 2.4 Typo — "aligment" in Index Copy

Line 473 (Regenerative row 2, "The crew" copy): "raising high quality products in **aligment** with nature" — missing 'n' in "alignment".

**Your call** — this is live copy.

---

## 3. Observations (no action needed now)

### 3.1 Duplicated Scroll-Reveal Script
The IntersectionObserver `[data-reveal]` script is copy-pasted identically in `index.astro`, `order.astro`, and `bulk.astro` (13 lines each). Could be extracted to a shared `<script>` in `Layout.astro` or a standalone `.ts` file. Low priority — it works, and Astro dedupes inline scripts per-page.

### 3.2 Inline `onerror` Handlers
12 images across `index.astro` have `onerror="this.style.display='none'"` — inline JS that hides broken images. Not a security risk (no user input involved) but doesn't pass strict CSP. Low priority unless CSP headers are planned.

### 3.3 `product-card` Defined Twice
`.product-card` has styles in both `global.css` (lines 207-214) and `order.astro` `<style is:global>` (line 334, `.product-card.is-hidden`). Not a conflict — they target different states — but worth noting for future cleanup.

### 3.4 `hero-800.jpg` Exists but Never Served
The `<picture>` element in the hero serves `hero-800.webp` for mobile and `hero-1600.webp` for desktop, with `hero.jpg` as the fallback `<img src>`. The file `hero-800.jpg` exists in `public/meat/` but is never referenced — browsers that don't support WebP fall through to `hero.jpg` (full size), not `hero-800.jpg`.

### 3.5 `prefers-reduced-motion` Already Handled
The CSS in `global.css` correctly disables scroll-reveal animations and ken-burns for `prefers-reduced-motion: reduce`. Good practice already in place.

---

## Build Verification

Build passes clean after all changes:
```
4 page(s) built in 1.82s
Complete!
```
