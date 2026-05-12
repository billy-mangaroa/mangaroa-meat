# Google Search Console — meat.mangaroa.org setup runbook

**Goal:** verified GSC property for `meat.mangaroa.org` with sitemap submitted and key URLs requested for indexing.
**Time to execute:** 8–12 minutes start to finish (most of it is waiting on verification + Vercel redeploy if you go meta-tag route).
**Prereqs:** signed in to Google Account that owns / will own this property (`media@mangaroa.org` is the canonical Mangaroa Google account based on existing Drive OAuth wiring).

---

## TL;DR for the impatient

1. Open https://search.google.com/search-console and check whether a **Domain property** for `mangaroa.org` already exists.
2. If yes → meat.mangaroa.org is already covered. Skip to **Step 5** (still recommended: add a URL-prefix property for cleaner per-subdomain reporting).
3. If no → add a new **URL-prefix property** for `https://meat.mangaroa.org/`. Verify by **HTML file** (the easiest path for this Astro app — drop the file into `app/public/` and redeploy).
4. Submit sitemap: `https://meat.mangaroa.org/sitemap-index.xml`.
5. Inspect 4–6 key URLs and request indexing.

Detailed steps below.

---

## Step 0 — Confirm the right Google account

The site already lives in the Mangaroa Google ecosystem. Use **`media@mangaroa.org`** unless there is a stronger reason — that account already holds the Drive OAuth (per brain fact `drive-oauth-2026-04-22`) and previous GSC interactions for the parent domain (per brain fact on shop.mangaroa.org 404 cleanup) suggest a property already exists under a Mangaroa account.

If you want personal access too, add `billy@buildwithbilly.ai` as an Owner inside GSC after verification — never juggle accounts mid-setup.

---

## Step 1 — Check if a Domain property for mangaroa.org already exists

1. Go to https://search.google.com/search-console.
2. Click the property dropdown (top-left).
3. Look for `mangaroa.org` listed as a **Domain** property (icon = globe), distinct from any URL-prefix entries (icon = `https://`).

**Three possible outcomes:**

| Found | Action |
|---|---|
| **Domain property `mangaroa.org` exists.** | meat.mangaroa.org is already covered. You can skip verification entirely and go straight to **Step 5 (sitemap submission)**. Optionally, also add a URL-prefix property for cleaner reporting. |
| **Only URL-prefix `https://mangaroa.org/` exists.** | That property does NOT cover meat.mangaroa.org. You need a separate URL-prefix property for `https://meat.mangaroa.org/`. Continue to Step 2. |
| **Nothing for mangaroa.org at all.** | Continue to Step 2 and add `meat.mangaroa.org` as URL-prefix. (Optional follow-up: add a Domain property for the whole org via DNS TXT later.) |

If you can't tell from the UI, click each property and check the URL listed in the Settings → Ownership verification panel. Domain properties show a globe + bare domain. URL-prefix shows the protocol.

---

## Step 2 — Add `meat.mangaroa.org` as a URL-prefix property

1. In GSC, click **Add property** (top-left of dropdown).
2. Choose **URL prefix** (right side of the modal — NOT Domain).
3. Enter exactly: `https://meat.mangaroa.org/` (with trailing slash, https).
4. Click **Continue**.

GSC will offer 5 verification methods. Recommended order:

| Method | Effort | Reversible? | Notes |
|---|---|---|---|
| **A. HTML file upload** | ★ easiest | Yes — delete file later | Astro serves `public/` at root. One file in repo, one redeploy. |
| **B. HTML meta tag** | ★ medium | Yes — remove env var | Needs Layout.astro edit (already wired in this commit, see Step 3B). |
| C. Google Analytics | n/a | — | Site uses Umami, not GA. Skip. |
| D. Google Tag Manager | n/a | — | Not installed. Skip. |
| E. DNS TXT (Domain property) | ★★ harder | Yes — remove TXT | Use this path only if you also want a Domain property. Requires DNS access at the registrar (Squarespace Domains). |

Pick **A** for speed. Continue to Step 3A.

---

## Step 3A — Verify via HTML file (recommended)

1. In the GSC verification modal, with **HTML file** selected, click **Download file**. You'll get a file named like `googleabc123def456.html` (filename is your verification token; do NOT rename it).
2. Move the file into the Astro project:
   ```
   /Users/billylewis/workspace/mangaroa/meat/app/public/googleabc123def456.html
   ```
   (Replace the filename with whatever Google gave you.)
3. Confirm contents — Google's file is a one-liner like:
   ```
   google-site-verification: googleabc123def456.html
   ```
4. The `mangaroa/meat/` directory is not its own git repo on the local Mac — `vercel link` is the deploy contract. Trigger a deploy from the project directory:
   ```
   cd /Users/billylewis/workspace/mangaroa/meat/app
   vercel deploy --prod
   ```
   (Or push to whatever git remote is wired to this Vercel project, if there is one. Confirm via `vercel inspect` or the Vercel dashboard's Git Integration panel.)
5. Wait until the deploy is the production alias for `meat.mangaroa.org`.
6. Sanity check the file is live: open `https://meat.mangaroa.org/googleabc123def456.html` in a browser. You should see the one-line `google-site-verification` text.
7. Back in GSC, click **Verify**. Expect ✓ within a few seconds.

**Important:** keep the verification file in the repo. If you delete it, GSC re-checks periodically and will mark the property unverified.

---

## Step 3B — Verify via HTML meta tag (alternative)

This path is wired up in the codebase already — Layout.astro now reads `GOOGLE_SITE_VERIFICATION` from env and renders the meta tag automatically when set.

1. In the GSC verification modal, choose **HTML tag**. Copy the value from `content="..."` only — looks like `abc123def456GhIjKlMn`.
2. Add to Vercel env vars:
   - Vercel dashboard → meat project → Settings → Environment Variables.
   - Name: `GOOGLE_SITE_VERIFICATION`
   - Value: paste the `content` value (no `<meta>` wrapper).
   - Environments: Production (and Preview if you want preview verification too — usually skip).
3. **Redeploy** (env vars only take effect on next deploy). Either trigger from the dashboard or push a no-op commit.
4. Sanity check: `curl -s https://meat.mangaroa.org | grep google-site-verification` — should return `<meta name="google-site-verification" content="abc123...">`.
5. Back in GSC, click **Verify**.

---

## Step 3E — Verify via DNS TXT (only if you want a Domain property)

Only choose this path if you also want a **Domain property** for `mangaroa.org` (covers ALL current and future subdomains in one).

1. In GSC, choose **Domain** as the property type (back at Step 2). Enter `mangaroa.org` (no scheme, no subdomain).
2. GSC gives a TXT record like `google-site-verification=abc123...`.
3. Log in to Squarespace Domains (DNS is via Squarespace per ACTIVE.md). Find DNS settings for `mangaroa.org`.
4. Add a TXT record:
   - Host: `@` (or leave blank — registrar-dependent).
   - Type: TXT.
   - Value: `google-site-verification=abc123...` (paste exactly).
   - TTL: default.
5. Wait for DNS propagation (usually <5 min, can take up to 24h). Verify with:
   ```
   dig +short TXT mangaroa.org | grep google-site-verification
   ```
6. Back in GSC, click **Verify**.

If you do this, you don't need the URL-prefix property too — but adding one is still worth it for clean per-subdomain reporting (separate sitemap, separate coverage view, separate Search Analytics).

---

## Step 4 — Add additional users (optional, recommended)

Once verified, add other Mangaroa team members as users so they don't have to start from scratch.

1. Property → Settings (gear icon, top-right inside the property view).
2. Users and permissions → Add user.
3. Add `billy@buildwithbilly.ai` as Owner. Add Helena/Grady/etc. as Full or Restricted users.

---

## Step 5 — Submit the sitemap

1. In GSC, with the meat.mangaroa.org property selected, go to **Sitemaps** (left sidebar, under "Indexing").
2. In "Add a new sitemap", enter: `sitemap-index.xml`
3. Click **Submit**. Within 30 seconds GSC should show "Success — Couldn't fetch" briefly, then "Success" within a few minutes (Astro's `@astrojs/sitemap` integration generates this on every Vercel build).
4. Click into the submitted sitemap to see discovered URLs. Expect: `/`, `/about`, `/order`, `/bulk`, `/faq`, `/blog/` plus the blog index sitemap once posts ship.

If it shows "Couldn't fetch" persistently, check `https://meat.mangaroa.org/sitemap-index.xml` directly in browser — it should serve XML. Also confirm the build deployed cleanly on Vercel.

---

## Step 6 — Request indexing for key URLs

GSC will discover URLs over the next few days, but you can fast-track the highest-value pages:

1. URL Inspection (left sidebar, top — search bar at top of page).
2. Paste each of these one at a time, hit Enter, then click **Request Indexing** if shown:
   - `https://meat.mangaroa.org/`
   - `https://meat.mangaroa.org/order`
   - `https://meat.mangaroa.org/bulk`
   - `https://meat.mangaroa.org/faq`
   - `https://meat.mangaroa.org/blog/` (skip if no posts published yet)
3. Each request takes ~30 seconds for GSC to process. Daily limit is roughly 10–12; this batch is well within limit.

You'll see "Indexing requested" → expect actual indexing within hours to days.

---

## Step 7 — Set up programmatic API access (optional, follow-up task)

The `seo-google` skill in Claude Code can pull Search Analytics, URL inspection, sitemap status, and Core Web Vitals via the Search Console API. Setup unlocks ongoing SEO automation (e.g. Phase 4 cron routines on the SEO board).

Two paths:

- **OAuth (simpler)** — same flow as the existing `media@mangaroa.org` Drive OAuth. Add `https://www.googleapis.com/auth/webmasters.readonly` to the existing token scope, refresh.
- **Service account** — create a service account in GCP project `418977192721`, share the GSC property with it, drop the JSON key into `mangaroa/mcp/data/credentials/`.

Defer to a follow-up Airtable task once the manual flow is verified clean.

---

## Verification checklist

After running through Steps 1–6 you should have all of the below ticked. Use this list to confirm before marking the underlying Airtable task Done.

- [ ] GSC property exists for `meat.mangaroa.org` (URL-prefix or Domain).
- [ ] Verification status shows green ✓ in GSC Settings → Ownership verification.
- [ ] Sitemap `sitemap-index.xml` submitted, status "Success".
- [ ] At least 4 URLs requested for indexing.
- [ ] Verification artefact (HTML file OR env var) is in the repo / Vercel project — won't drift on future deploys.
- [ ] If using Domain property: TXT record persisted at registrar (won't disappear at TTL flush).
- [ ] Backup owner added (billy@buildwithbilly.ai or similar).

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| GSC says "Couldn't verify" on HTML file method | File 404s — Vercel deploy hasn't completed or filename mistyped | Check `https://meat.mangaroa.org/<filename>` directly. Confirm file lives at `app/public/<filename>` (not `app/public/seo/...`). Verify the deploy finished. |
| "Couldn't verify" on meta tag method | Env var not deployed yet, or `content` value pasted with extra whitespace | Redeploy after setting env var. `curl -s https://meat.mangaroa.org \| grep google-site-verification` to confirm tag is in HTML. |
| "Couldn't verify" on DNS TXT method | DNS not yet propagated | Wait 5–60 min. `dig +short TXT mangaroa.org` — if no result, recheck registrar. |
| Sitemap shows "Couldn't fetch" | Vercel deploy not live yet, or sitemap path wrong | Hit `https://meat.mangaroa.org/sitemap-index.xml` directly. Should be XML. If 404, the @astrojs/sitemap integration didn't run — check astro.config.mjs has `sitemap()` in integrations. |
| URL inspection says "URL is not on Google" | Normal pre-indexing | Click Request Indexing. Wait 24–72h. |
| URL inspection says "URL is on Google but not on the latest version" | Page changed after last crawl | Click Request Indexing again to push a recrawl. |
| Coverage report shows "Crawled — currently not indexed" 7+ days post-submission | Page might be deemed thin or duplicate | Audit content quality with `seo-content` skill. Add internal links from authoritative pages on the site. |

---

## Why the URL-prefix path was recommended over Domain

- Domain property is strictly better long-term (covers `meat.`, `store.`, `stories.`, future subdomains in one, with DNS-only verification that survives any code change).
- BUT: it requires DNS access on `mangaroa.org` itself (Squarespace Domains), and current SEO state is fine to begin with one subdomain in scope. The shop.mangaroa.org 301 redirect work (per brain fact `shop-redirect-2026`) suggests the parent domain has had SEO turbulence — adding meat as URL-prefix isolates its reporting cleanly while that settles.
- If/when you want one consolidated view, run Step 3E later. URL-prefix and Domain properties can coexist with no conflict.

---

## What this runbook does NOT cover (deliberate scope cuts)

- **GA4 setup** — the site uses Umami, not GA. If a future decision adds GA4, that's a separate runbook.
- **Bing Webmaster Tools** — worth doing for full coverage but separate task; same general pattern (add property → verify → submit sitemap).
- **Schema validation** — already in scope under existing Phase 3 SEO work; use the `seo-schema` skill for ongoing validation.
- **Indexing API setup** (programmatic submit on publish). Worth doing once `/blog/` content lands. Defer.

---

## Source-of-truth links

- Sitemap: `https://meat.mangaroa.org/sitemap-index.xml`
- Robots: `https://meat.mangaroa.org/robots.txt`
- Astro config (sitemap integration): `mangaroa/meat/app/astro.config.mjs`
- Layout (head injection point): `mangaroa/meat/app/src/layouts/Layout.astro`
- Public folder (verification file landing): `mangaroa/meat/app/public/`
- DNS provider: Squarespace Domains (per `mangaroa/meat/ACTIVE.md`)
- Hosting: Vercel — auto-deploy on push to main

---

_Drafted by Nightwatch cycle 6, 2026-05-03. Closes Airtable task `rec4M8iiHWr9kNbtG`._
