# Lighthouse mobile audit — meat.mangaroa.org — 2026-05-02

**Task**: recwqMbRG4uKZ8Map "Improve meat.mangaroa.org mobile Lighthouse from 86 to 90"
**Cycle**: nightwatch 20260502-0230
**Baseline (per ACTIVE.md 2026-04-30)**: Mobile 86, Desktop 96, LCP mobile 3.2s

## What's already in place (good)

- Hero image preloaded with `fetchpriority="high"`, responsive `<picture>` (mobile gets `/meat/hero-800.webp`)
- Adobe Typekit CSS loaded via `media="print" onload` swap (deferred, doesn't compete with hero LCP)
- `<link rel="preconnect" href="https://use.typekit.net" crossorigin>` already present
- All below-fold `<img>` tags use `loading="lazy"` and `decoding="async"`
- Static Astro output with Vercel adapter (no SSR cold-start cost on home)
- Vercel Analytics + Speed Insights mounted via Astro components (deferred, async)
- Tailwind 4 + Vite 7 — modern CSS pipeline, content-hashed bundles
- No React islands (no `client:*` directives anywhere in `src/`) — no client hydration cost
- No `framer-motion` imports in `src/` — package is a transitive carry-over, not bundled

## Likely sources of the 86 → 90 gap

Lighthouse mobile uses 4× CPU throttle and slow 4G network (1.6 Mbps down, 750 Kbps up, 150ms RTT). Even an empty static page can land 92-94 on this profile due to TTI overhead from analytics. The 4-point gap from 86 to 90 most likely splits as:

1. **LCP ~3.2s** → Performance −2 to −3
   - On the simulated network, even a 30-50KB hero takes ~600-800ms over the wire. Plus parser, decode, paint.
   - Reducing this further requires: smaller hero file, server-side responsive (HTTP `srcset` width descriptors), or different LCP candidate.
2. **TBT (Total Blocking Time)** → Performance −1 to −2
   - Vercel Analytics + Speed Insights inject ~5KB JS combined; small but non-zero.
   - The Header inline script (~25 lines mobile-menu logic) and possible reveal-animation observer.
3. **Best Practices: image aspect ratios** → Best Practices passes only when explicit `width` + `height` are set on `<img>`. Hero `<img>` had neither.

## Patches applied this cycle (2026-05-02 0230)

### 1. `src/layouts/Layout.astro`

Added preconnect + dns-prefetch for `p.typekit.net` (where Typekit serves the actual font woff2 files; the existing preconnect was only for `use.typekit.net` which serves the CSS):

```diff
     <link rel="preconnect" href="https://use.typekit.net" crossorigin />
+    <link rel="preconnect" href="https://p.typekit.net" crossorigin />
+    <link rel="dns-prefetch" href="https://p.typekit.net" />
     <link rel="stylesheet" href="https://use.typekit.net/gdd7waj.css" media="print" onload="this.media='all'" />
```

**Expected impact**: −50 to −150ms on first font request once the deferred CSS triggers font loading. Doesn't affect LCP directly (fonts are deferred), but shaves time off FCP if Lighthouse measures FCP after font swap. May yield 0-1 points.

### 2. `src/pages/index.astro`

Hero `<img>` got explicit `width`/`height` (16:9, matching the responsive variants) and the JPEG fallback `src` switched from `/meat/hero.jpg` (the multi-MB original) to `/meat/hero-800.jpg` (the optimised mobile variant which already exists in `public/meat/`):

```diff
-        <img src="/meat/hero.jpg" alt="..." class="hero-bg absolute inset-0 w-full h-full object-cover" fetchpriority="high" loading="eager" decoding="async" />
+        <img src="/meat/hero-800.jpg" alt="..." width="1600" height="900" class="hero-bg absolute inset-0 w-full h-full object-cover" fetchpriority="high" loading="eager" decoding="async" />
```

**Expected impact**:
- `width`/`height` attrs make the Lighthouse "Image elements have explicit width and height" audit PASS. WebP-supporting browsers (~97%) still load hero-800.webp from the `<source>` tag — unchanged. The non-webp fallback path (rare) now loads hero-800.jpg instead of the unbounded original. This protects edge-case users from a multi-MB download. May yield 1 point in the Best Practices category.
- The 1600×900 attribute represents intrinsic 16:9 aspect ratio for layout reservation; the parent section uses `position: absolute inset-0` + CSS `object-cover` so the rendered size is independent of the attrs.

## Patches NOT applied (out of scope this cycle)

The following would likely yield more points but require capabilities not available to overnight nightwatch:

1. **Re-encode hero-800.webp at lower quality (q=72 → q=65)** — requires `sharp` or `cwebp` CLI in a writable location. Could shave 20-40KB from LCP candidate.
2. **Switch to `astro:assets` `<Image>`/`<Picture>` components** — gives content-hashed asset URLs, automatic AVIF + WebP variants with `srcset` width descriptors, and intrinsic dimensions from the source file. Bigger refactor; risk of visual regression.
3. **Self-host critical Typekit font as woff2** — biggest single LCP win but requires fetching from Adobe Fonts (kit `gdd7waj`), licensing review, and writing a `<link rel="preload" as="font">` for the critical character set.
4. **Drop `framer-motion` from package.json** — currently unused in `src/`; removing the dep prevents accidental future hydration. Saves ~0KB from current bundle (because tree-shaking already removes it), but cleans up package.json. Skipped because git is not initialised here.
5. **Move Vercel Analytics + Speed Insights behind a defer-on-interaction wrapper** — would lower TBT by deferring the analytics handshake until user interaction. Tradeoff: lose some initial-pageview data. Needs Billy's call.

## How to verify

The patches in this cycle are conservative and should not regress anything. To verify:

```bash
cd /Users/billylewis/workspace/mangaroa/meat/app
npm run build
# Check output: dist/index.html should contain the new preconnect lines and width/height on hero img
```

Run a real Lighthouse against prod after Billy deploys (via PageSpeed Insights or `npx lighthouse https://meat.mangaroa.org --preset=mobile --only-categories=performance,best-practices`). Realistic outcome:

- Best Practices: +1-2 (image dimensions audit now passes)
- Performance: 0 to +2 (preconnect helps slightly)
- **Realistic mobile total: 87-89**

To break 90 mobile, one of the "out of scope" items above (most likely #1 or #3) needs to ship. The cleanest path is #1 (re-encode hero) because it's a single-file optimisation with no behaviour change. #3 (self-host font) is the highest-ceiling fix but requires Billy's involvement.

## Recommended next step

Either:
- **Mark the task Done with the 87-89 ceiling acknowledged** (current state) — the audit doc explains why 90 may need image re-encoding or font self-hosting that needs Billy involvement.
- **Schedule a daytime task to run `cwebp -q 65` on hero-800.webp + measure** — small Mac-Mini-resident task, ~10 min wall time, can confirm whether image weight is the binding constraint.

## Git status note

`mangaroa/meat/` is not a git repo as of this cycle (no `.git` dir; `.gitignore` exists but `git -C` errors). Patches above are on disk only. Billy should `git init` here OR confirm `mangaroa/meat/` is intentionally tracked from a parent repo (currently no parent .git up the tree either).
