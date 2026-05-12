# SEO Phase 4 — Autonomous Cron Routines (Implementation Spec)

> **Canonical reference for the 4 scheduled SEO routines defined in `SEO_STRATEGY.md` §7.**
> Authored 2026-05-02 by Nightwatch as the implementation step for Airtable task `reclGNWobRpBjbfJZ`.
> Status: **specified, not yet activated.** See `nightwatch/gates/pending/20260502-0200-seo-phase-4-cron-routines.md` for the one-shot activation gate.

---

## Why a spec instead of auto-create

Three reasons Nightwatch wrote this rather than firing `CronCreate` calls itself:

1. **Routine 3 publishes content to a public URL** (`/blog/<slug>` on meat.mangaroa.org). Even though `SEO_STRATEGY.md` §7 pre-authorises hidden-URL publishing, Mangaroa is Billy's shared team space — Nightwatch's policy is "don't freelance public Mangaroa comms," and creating an autonomous publish loop is one degree removed from a freelance public action. Billy reviews + activates.
2. **The hidden-post queue is currently empty.** Phase 3 still has the 9 HIDDEN blog posts in "to-be-drafted" state (`ACTIVE.md` Open Items). Routine 3 would no-op for the first 4 weeks anyway. Activate it once the queue has at least 1 ready entry.
3. **DataForSEO + GSC signups still pending** (Billy's prerequisite tasks 1 and 3 in `ACTIVE.md`). Routines 1 (drift) and 2 (competitor) work without these but their output quality is significantly higher with field data wired in.

Routines 1, 2, 4 are read-only analysis + Telegram digest. They're safe to activate today even without DataForSEO/GSC. Routine 3 is the only one that needs deferred activation.

---

## The 4 routines

All cron expressions are **UTC** (most cloud schedulers default to UTC). NZ is currently NZST (UTC+12). Convert via `NZ_hour - 12 = UTC_hour`. After 28 Sep 2026 (NZDT, UTC+13), shift each by 1 hour or use the timezone-aware syntax below.

### Routine 1 — Weekly SEO Drift Check

| Field | Value |
|---|---|
| **Name** | `meat-seo-drift-weekly` |
| **Schedule (UTC)** | `0 18 * * 0` — Sunday 18:00 UTC = Mon 06:00 NZST |
| **Schedule (NZ-aware)** | `0 6 * * 1` w/ TZ `Pacific/Auckland` |
| **Frequency** | Weekly |
| **Cost class** | Read-only (PageSpeed API + crawl). ~5 min Claude session. No public output. |
| **Public-action risk** | None — analysis + Telegram only. |

**Prompt** (passed to Claude when the cron fires):

```
You are running the weekly SEO drift check for meat.mangaroa.org.

1. Read /Users/billylewis/workspace/mangaroa/meat/SEO_STRATEGY.md to refresh on the strategy.
2. Invoke the `seo-drift` skill: `/seo drift compare https://meat.mangaroa.org` (and the same for `/order`, `/bulk`, `/faq`, `/blog`).
3. If no baseline exists for any of those URLs, capture one with `/seo drift baseline <url>` BEFORE comparing. First run will baseline-only.
4. Summarise drift findings in ≤8 bullets: what changed since last week, severity (P1/P2/P3), suggested action.
5. Ingest synthesis to brain with `mcp__mangaroa__ingest_to_brain` source_id `seo-drift-weekly-{YYYY-MM-DD}` namespace=mangaroa.
6. Send a Telegram digest via `bash /Users/billylewis/workspace/nightwatch/bin/send-telegram.sh "..."` (≤ 3000 chars).
7. If P1 drift detected (e.g. 5xx, dropped canonicals, missing schema), ALSO write a gate file to `/Users/billylewis/workspace/nightwatch/gates/pending/seo-drift-P1-{YYYY-MM-DD}.md` with the diff and proposed fix.

Do NOT mutate the meat repo. Do NOT commit. Drift detection is read-only by design.
```

**Definition of done per run:** brain page exists for the date; Telegram digest received; if P1 → gate file present.

---

### Routine 2 — Monthly Competitor Refresh

| Field | Value |
|---|---|
| **Name** | `meat-seo-competitor-monthly` |
| **Schedule (UTC)** | `0 19 1 * *` — 1st of month 19:00 UTC = 1st 07:00 NZST |
| **Schedule (NZ-aware)** | `0 7 1 * *` w/ TZ `Pacific/Auckland` |
| **Frequency** | Monthly (1st) |
| **Cost class** | Web fetches across 5 sites + Claude analysis. ~10 min session. No public output. |
| **Public-action risk** | None — research + Telegram only. |

**Prompt:**

```
You are running the monthly competitor refresh for the Mangaroa Farms meat program.

1. Read /Users/billylewis/workspace/mangaroa/meat/SEO_STRATEGY.md §3 (competitive landscape) for current top-5 competitors.
2. For each: WebFetch home + their meat/farm page. Capture changes vs last month: new copy, new claims, pricing changes, new pages, schema changes, blog cadence.
3. Run `mcp__mangaroa__query_brain { question: "competitor refresh meat farms NZ {YYYY-MM-1 prior}" }` to load last month's snapshot.
4. Diff: what shifted? Which competitor introduced something Mangaroa should respond to (new keyword cluster, new offer, new claim)?
5. Ingest to brain as synthesis source_id `seo-competitor-refresh-{YYYY-MM-DD}` namespace=mangaroa. Include a structured "delta-since-last-month" section so future diffs are mechanical.
6. Send Telegram digest summarising the top 3 deltas + 1-2 proposed responses.
7. If a competitor introduced a feature Mangaroa lacks (e.g. monthly subscription, animal-tracking page), write a brain page in `synthesis/` AND log a strategy entry with `mcp__mangaroa__log_strategy` type=Insight.

Do NOT auto-create Airtable tasks for competitor responses — Telegram digest is the trigger for Billy/Natalie to decide.
```

**Definition of done per run:** brain page exists with delta section; Telegram digest received.

---

### Routine 3 — Bi-weekly Blog Post Publish (DEFERRED ACTIVATION)

| Field | Value |
|---|---|
| **Name** | `meat-seo-blog-publish-biweekly` |
| **Schedule (UTC)** | `0 9 * * 2,5` — Tue+Fri 09:00 UTC = Tue+Fri 21:00 NZST |
| **Schedule (NZ-aware)** | `0 21 * * 2,5` w/ TZ `Pacific/Auckland` |
| **Frequency** | Bi-weekly within each week (Tue + Fri) |
| **Cost class** | Claude drafting + git commit + git push (Vercel auto-deploys). ~15 min session. **PUBLIC OUTPUT.** |
| **Public-action risk** | **Yes** — publishes a hidden URL to `meat.mangaroa.org/blog/<slug>`. Hidden = not in nav, but in sitemap (Google indexes it). |

**Prerequisites before activation:**

1. ✅ `/blog/` infra live (already done — Phase 3).
2. ⏳ At least 1 hidden-post draft in queue. Current queue: see "Hidden post queue" section below — 9 titles defined, 0 drafted.
3. ⏳ Brand-voice lint passes on Mangaroa repo (verify with `mcp__mangaroa__get_brand_voice` + a test draft).
4. ⏳ Confirm `git push` from a Claude Cloud routine context is the deploy mechanism. Vercel project on `mangaroa/meat/app` repo auto-deploys main branch. Routine must commit and push, not just commit.

**Prompt (DRAFT — review before activating):**

```
You are running the bi-weekly hidden blog post publish for meat.mangaroa.org.

1. Read /Users/billylewis/workspace/mangaroa/meat/SEO_STRATEGY.md §4 (content pillars + post titles) and /Users/billylewis/workspace/mangaroa/meat/docs/seo-phase-4-cron-spec.md ("Hidden post queue" section).
2. Identify the next un-drafted hidden post (lowest queue index, status=pending).
3. Get brand voice via `mcp__mangaroa__get_brand_voice`. Pay close attention to BANNED OPENERS and BANNED ADJECTIVES.
4. Draft the post in MDX (1200-2000 words, Mangaroa voice, lead with concrete fact, no banned openers). Save to `/Users/billylewis/workspace/mangaroa/meat/app/src/content/blog/<slug>.mdx` with frontmatter:
   - `title`, `description`, `pubDate: <today>`, `author: 'Mangaroa Farms'`, `pillar: <pillar>`, `draft: false`, `noindex: false` (hidden = no nav link, NOT noindex), `linked: false` (so it doesn't appear in nav/footer/related).
5. Add the post to `app/src/content/blog/_queue.json` with status=published.
6. Run `bun --cwd /Users/billylewis/workspace/mangaroa/meat/app run check` (or whatever the brand-voice lint command is — see app/package.json scripts).
7. If lint passes: `git -C /Users/billylewis/workspace/mangaroa/meat add app/src/content/blog/<slug>.mdx app/src/content/blog/_queue.json` then `git commit -m "blog(hidden): publish <slug>"` then `git push origin main`.
8. Vercel auto-deploys. Wait 90s, then `curl -sI https://meat.mangaroa.org/blog/<slug>` — verify HTTP 200.
9. Send Telegram digest: title, slug, public URL, word count, pillar, "hidden mode (sitemap-only, no nav link)".
10. Ingest the published post + decision rationale to brain source_id `meat-blog-hidden-{slug}` namespace=mangaroa.

Guardrail (HARD-STOP):
- If the title mentions a real person (Rob, Miki, Jake, Karen, Natalie, etc.) → ABORT. Write to gates/pending/ for sign-off instead.
- If the body makes a verifiable claim about specific certifications, partnerships, or volumes → ABORT. Write to gates/pending/ for sign-off.
- If brand-voice lint fails twice → ABORT. Write the failed draft to gates/pending/ for human edit.
- If `git push` fails (auth, conflict) → ABORT. Send Telegram alert. Do not retry > 1.
```

**Definition of done per run:** new MDX file pushed; Vercel deploy succeeded; URL resolves; brain + Telegram populated.

**Note on `linked: false`:** the `/blog/` index already filters `linked: true` only (per Phase 3 hidden-vs-linked split). Hidden posts only reach Google via sitemap — there is no in-site path to discover them.

---

### Routine 4 — Monthly Content Gap Review

| Field | Value |
|---|---|
| **Name** | `meat-seo-content-gap-monthly` |
| **Schedule (UTC)** | `0 19 15 * *` — 15th 19:00 UTC = 15th 07:00 NZST |
| **Schedule (NZ-aware)** | `0 7 15 * *` w/ TZ `Pacific/Auckland` |
| **Frequency** | Monthly (15th) |
| **Cost class** | DataForSEO API quota + Claude analysis. ~15 min session. No public output. |
| **Public-action risk** | None — analysis + Telegram only. May propose new content (Telegram-gated). |

**Prerequisite:** DataForSEO credentials in `mangaroa/mcp/data/credentials/secrets.json` under `dataforseo.{login,password}`. Without these the routine still runs in degraded mode (Claude reasoning over GSC + brain + competitor data only — no live keyword volume).

**Prompt:**

```
You are running the monthly content gap review for meat.mangaroa.org.

1. Read /Users/billylewis/workspace/mangaroa/meat/SEO_STRATEGY.md §4 (content pillars) + §9 (KPIs).
2. Pull last 30 days of GSC data via the `seo-google` skill (Search Console API): impressions / clicks / CTR / position per query, per page. If GSC not yet wired, skip and note in output.
3. Pull keyword volume + difficulty for the strategy's hero keywords via `seo-dataforseo` skill (if creds present).
4. Compute coverage: which of the 9 content pillars has the most published-page impressions vs target? Which has the least?
5. Identify the laggard pillar — the one with weakest impression share relative to target. Propose 1-3 specific blog-post titles to address the gap (must align with brand voice + existing pillar).
6. Cross-check brain via `query_brain` for prior gap reviews — is this the same pillar lagging 2 months in a row? If so, escalate.
7. Ingest synthesis to brain source_id `seo-content-gap-{YYYY-MM-DD}` namespace=mangaroa.
8. Send Telegram digest: laggard pillar, proposed titles, 1-line "why this matters."
9. If proposed titles align with the strategy and pass brand-voice criteria, append them to `meat/app/src/content/blog/_queue.json` with status=pending. Do NOT auto-publish — they enter the Routine 3 publish queue and will be drafted on the next bi-weekly run.

Do NOT auto-publish. Do NOT push to git. The output of this routine is brain page + Telegram digest + queue entries (which require Routine 3 to actually publish).
```

**Definition of done per run:** brain page exists; Telegram digest received; if proposed titles → `_queue.json` updated (commit fine, push fine — `_queue.json` is config, not public content).

---

## Hidden post queue

The 9 hidden posts referenced in `ACTIVE.md` and `SEO_STRATEGY.md` §4. Routine 3 draws from this queue in order. Each entry needs (a) title sign-off from Billy and (b) pillar mapping.

| # | Working title | Pillar | Target keyword cluster | Status |
|---|---|---|---|---|
| 1 | TBD | Educational | TBD | pending titles + Billy sign-off |
| 2 | TBD | Educational | TBD | pending |
| 3 | TBD | Brand story | TBD | pending |
| 4 | TBD | Comparison | TBD | pending |
| 5 | TBD | Comparison | TBD | pending |
| 6 | TBD | Local | TBD | pending |
| 7 | TBD | Local | TBD | pending |
| 8 | TBD | Operational | TBD | pending |
| 9 | TBD | Operational | TBD | pending |

> **Action for Billy:** populate this table with titles + pillars before Routine 3 activates. Or override the routine to read from the existing 12-entry meat-launch content calendar in Airtable Marketing Brain (table `tblLaX3fz1kaEVc8O`, seeded by Nightwatch cycle 20260502-0030). The Airtable rows include Pillar mapping in Notes — they could be canonicalised as the queue.

A cleaner alternative: **make Airtable `tblLaX3fz1kaEVc8O` the queue.** Routine 3 filters for `Status=Idea AND Brand=Mangaroa Farms AND Channel=Blog AND Hidden=true`, picks oldest by Publish Date. Recommend this path — single source of truth, already populated, supports drag-and-drop reordering in Airtable UI.

---

## Activation order (recommended)

1. **Today (Billy review)** — Activate Routines 1 (drift) and 2 (competitor). Both are read-only, immediate value, no waiting on prerequisites. Use the gate at `nightwatch/gates/pending/20260502-0200-seo-phase-4-cron-routines.md` for one-shot activation.
2. **+1 week** — Activate Routine 4 (content gap) once DataForSEO is signed up and credentials added. Or activate immediately in degraded mode and upgrade later.
3. **After title sign-off** — Activate Routine 3 (publish). Prereq: hidden queue has ≥1 ready entry.

Each can be deactivated at any time via `CronDelete` or the `schedule` skill.

---

## Observability

All four routines write to brain with predictable `source_id` patterns:

- `seo-drift-weekly-YYYY-MM-DD`
- `seo-competitor-refresh-YYYY-MM-DD`
- `meat-blog-hidden-<slug>`
- `seo-content-gap-YYYY-MM-DD`

Query the brain monthly to audit cadence: `query_brain { question: "seo drift weekly" }` should return the last 4 entries.

Telegram digests give the realtime layer.

Failures or HARD-STOPs surface as gates in `nightwatch/gates/pending/`.

---

## Cross-references

- `mangaroa/meat/SEO_STRATEGY.md` §7 — strategic source for the 4-routine plan.
- `mangaroa/meat/ACTIVE.md` — Phase 3 status + Phase 4 pending.
- `mangaroa/website/docs/events-monitoring-baseline.md` — Tier 5 (SEO) writes into the same observability pattern.
- Airtable `recBJrtJBcxA0RYLB` (Phase 4 task `reclGNWobRpBjbfJZ`) — completion blocked until activation gate fires.
- `nightwatch/gates/pending/20260502-0200-seo-phase-4-cron-routines.md` — the one-shot activation gate.

---

*Last updated: 2026-05-02 by Nightwatch.*
