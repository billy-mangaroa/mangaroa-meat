# Mangaroa Launch Trio — 25-min Activation Pack

> **Single sequenced runbook.** Closes 3 Airtable tasks (recqWfnwYwnMxDwvP / reclGNWobRpBjbfJZ / recetyEM376wLtFgF) in one focused session. Steps 1 and 2 are independent — do them in either order. Step 3 is the longest and benefits from Steps 1+2 being clear in your head first.
>
> Drafted by Nightwatch cycle 19 (2026-05-04 ~02:30 NZ). Same pattern as the Lucid 35-min pack (cycle 18) — bundle ≥3 gates with the same context-switch cost into one pass.
>
> **Plan-only.** This pack does not auto-publish. Sends, deploys, and Klaviyo campaign-fires stay manual.

---

## TL;DR for morning Billy

3 launch-surface tasks that have each been sitting in In Progress for 2+ days:

| # | Step | Time | Dashboard | Closes task |
|---|------|------|-----------|-------------|
| 1 | Pick the 3 LINKED blog post titles (or accept defaults) | 5 min | This doc + reply | recqWfnwYwnMxDwvP |
| 2 | Activate 3 SEO cron routines via `/schedule` | 5 min | Claude Code session | reclGNWobRpBjbfJZ |
| 3 | Build Newsletter #1 Klaviyo template + schedule send | 15 min | Klaviyo dashboard | recetyEM376wLtFgF |
|   | **Closeout (single curl)** | 1 min | Terminal | All 3 Done |

**KAUPAPA pass:** all three serve the meat-program launch — getting traceable, regenerative meat into Upper Hutt households. Love (Rob's craft, the kaupapa story), life (regenerative pasture, real cuts), oneness (paddock-to-plate visible to the buyer).

---

## Pre-flight (1 min)

Open these tabs / sessions:

1. **This doc** — for picks and paste blocks.
2. **Claude Code session** with the `schedule` skill loaded — for Step 2.
3. **Klaviyo dashboard** — Mangaroa account, list view + templates view.
4. **Terminal** — for the closeout curl.
5. (Optional) **Photo/video drive** — to grab a Rob-in-butchery hero if available.

Confirm the env var is set in your terminal:

```bash
export PAT=$(jq -r '.airtable.marketing_brain_pat' /Users/billylewis/workspace/mangaroa/mcp/data/credentials/secrets.json)
```

---

## Step 1 — Blog title sign-off (5 min)

**Source:** `nightwatch/gates/pending/20260502-2000-linked-blog-titles-signoff.md` (full candidate analysis there).
**Airtable task:** `recqWfnwYwnMxDwvP`.

The 9 candidates (3 anchors × 3 options each) are documented in the source gate. The recommendations are:

| Anchor | Recommended | Rationale |
|--------|-------------|-----------|
| 1. Educational ("What is regen meat?") | **B** — `Regenerative meat NZ: a farmer's plain-English guide` (53 chars, slug `regenerative-meat-nz-guide`) | Keyword-front, signals authority + simplicity |
| 2. Brand story (Rob/Jake/Miki) | **A** — `Meet Rob, Jake and Miki — the people behind Mangaroa Meat` (56 chars, slug `meet-rob-jake-miki-mangaroa-meat`) | Names front matches direct/word-of-mouth searches; "people" avoids the family-heritage approval gate |
| 3. Comparison (vs supermarket) | **B** — `Supermarket meat vs regenerative meat: a transparent NZ comparison` (64 chars, slug `supermarket-vs-regenerative-meat-nz`) | Keyword-front, neutral framing — better SEO and tone |

**Default if no decision** (per the source gate's 48h auto-default at 2026-05-04 20:00): **B / A / B**.

### Pick action

Tick one per anchor — write the picks back here or in the gate file:

- Anchor 1 (Educational): A ☐  **B ☐ ←default**  C ☐  Other: __________
- Anchor 2 (Brand story): **A ☐ ←default**  B ☐  C ☐  Other: __________
- Anchor 3 (Comparison): A ☐  **B ☐ ←default**  C ☐  Other: __________

Once picked: the autonomous routine drafts the 3 posts as HIDDEN URLs, then a final review pass before the LINKED nav promotion.

**You're done with Step 1 once the 3 picks are recorded** (in this doc or via reply ✅ on the source gate). The actual draft + publish is a separate downstream task — it does NOT need to happen this morning.

---

## Step 2 — Activate SEO cron routines (5 min)

**Source:** `nightwatch/gates/pending/20260502-0200-seo-phase-4-cron-routines.md` (full activation prompts).
**Canonical spec:** `mangaroa/meat/docs/seo-phase-4-cron-spec.md`.
**Airtable task:** `reclGNWobRpBjbfJZ`.

Activate **3 of 4 routines** today (drift / competitor / content-gap). Defer Routine 3 (bi-weekly publish) — prerequisites not met (queue empty, queue source decision pending).

In your Claude Code session:

```
/schedule
```

Then paste each block from the source gate in turn. The 3 to fire:

1. **Routine 1 — `meat-seo-drift-weekly`** (cron `0 6 * * 1` Pacific/Auckland) — weekly drift check, read-only, P1 drift writes a gate.
2. **Routine 2 — `meat-seo-competitor-monthly`** (cron `0 7 1 * *` Pacific/Auckland) — monthly competitor refresh + brain delta.
3. **Routine 4 — `meat-seo-content-gap-monthly`** (cron `0 7 15 * *` Pacific/Auckland) — monthly GSC + DataForSEO pillar coverage review, proposes blog titles, appends to queue (no auto-publish).

### Verify

```
/schedule list
```

Expected: 3 entries.

### Smoke-test (optional, 2 min more)

```
/schedule run meat-seo-drift-weekly
```

Expected: Telegram digest within ~5 min, brain page `seo-drift-weekly-2026-05-04`.

### Skip Routine 3 today

Document this decision in the AI Notes when you close the task (closeout script does it for you). When you DO activate Routine 3 later: hidden-post queue ≥1 entry, queue-source decision (`_queue.json` vs Airtable `tblLaX3fz1kaEVc8O`), brand-voice lint working from Cloud routine context, Vercel auto-deploy on `main` push verified end-to-end.

---

## Step 3 — Newsletter #1 Klaviyo template + schedule (15 min)

**Source:** `nightwatch/gates/pending/20260502-1930-newsletter-1-rob-butchery.md` (full body + setup notes).
**Airtable task:** `recetyEM376wLtFgF`.

The full ~310-word body is voice-cleared (no exclamation marks, no banned adjectives, Preston's framing rule respected). Subject line + preview text candidates included.

### 3a. Subject + preview pick

Recommended:
- **Subject:** `Rob raises them. Rob butchers them.` (concrete person, declarative, matches launch theme)
- **Preview:** `The same hands that raise the animal now prepare the cuts. Fresh beef and lamb, processed right here in the valley.`

Alternates listed in the source gate.

### 3b. Hero image

- **Preferred:** Rob in the butchery (per `mangaroa/newsletter/wiki-2026-04.md` Photos Available list — capture during filming if not yet captured).
- **Fallback:** meat-cabinet hero from in-shop launch shoot.
- **If neither ready:** schedule the send for next Sun/Tue and capture before then.

### 3c. Klaviyo template build

In Klaviyo:

1. **Templates** → **Create template** → start from existing Mangaroa newsletter template (consistent header/footer).
2. Name: `Newsletter #1 — Rob butchery story (launch series 1/4)`
3. Paste the body Markdown from `nightwatch/gates/pending/20260502-1930-newsletter-1-rob-butchery.md` lines 28–50.
4. Insert hero image at the top.
5. Wire CTAs:
   - **Primary:** `meat.mangaroa.org` shop link with UTM `?utm_source=klaviyo&utm_medium=email&utm_campaign=meat-launch-newsletter-01-rob`
   - **Secondary:** "Register interest — whole lamb / side of beef" button → existing Airtable form URL
6. Footer: existing Mangaroa footer (address, unsubscribe, contact).
7. Compliance scan: search for `!`, common banned adjectives ("beautiful", "amazing", "incredible", "stunning"). Body is already clean — re-check after any edits.
8. Save as draft.

### 3d. Build the campaign (draft, do NOT send)

1. **Campaigns** → **Create campaign** → email.
2. Name: `Meat launch — newsletter 01 — Rob butchery`
3. **List:** Mangaroa main subscriber list (NOT Lucid / Upstream).
4. Subject + preview from 3a.
5. Template from 3c.
6. UTM auto-applied (set at template level above).
7. **DO NOT click Send Campaign.** Save as draft.

### 3e. Test send

Send a test to:
- billy@buildwithbilly.ai (or Billy's preferred inbox)
- 1 staff inbox (Helena or Carrie) for peer read

### 3f. Schedule

Once the test send + peer read are clean:

- **Send window:** Sunday or Tuesday morning NZT, 9–10am — matches existing audience open patterns.
- **Schedule, don't send-now**, so the team can review the queued campaign in Klaviyo before fire time.

### 3g. Series follow-ups (out of scope for this morning, captured for context)

Subsequent newsletter drafts queued for Nightwatch when assets land:
- #2: virtual fencing + Halter cattle (regen tech)
- #3: cover crops + soil
- #4: whole-animal / bulk-order option

---

## Closeout — single command marks all 3 Done (1 min)

After Steps 1 + 2 + 3 are complete, paste:

```bash
export PAT=$(jq -r '.airtable.marketing_brain_pat' /Users/billylewis/workspace/mangaroa/mcp/data/credentials/secrets.json)
TODAY=$(date +%Y-%m-%d)
for r in recqWfnwYwnMxDwvP reclGNWobRpBjbfJZ recetyEM376wLtFgF; do
  case $r in
    recqWfnwYwnMxDwvP) NOTE="[$TODAY billy] Picked LINKED titles (defaults: B/A/B unless otherwise picked). Drafts kicked off as HIDDEN posts via autonomous routine.";;
    reclGNWobRpBjbfJZ) NOTE="[$TODAY billy] Activated SEO cron routines 1+2+4 (drift/competitor/content-gap) via /schedule. Routine 3 (publish) deferred until hidden-post queue ≥1 entry AND queue-source decision made.";;
    recetyEM376wLtFgF) NOTE="[$TODAY billy] Newsletter #1 Klaviyo template + campaign draft built from nightwatch/gates/pending/20260502-1930-newsletter-1-rob-butchery.md. Test sent. Scheduled for next Sun/Tue 9am NZT. Hero: Rob-in-butchery if captured, else cabinet fallback.";;
  esac
  curl -s -X PATCH "https://api.airtable.com/v0/app8H6Ok8BVYKYCGz/tblFGdJYj2gqb5u14/$r" \
    -H "Authorization: Bearer $PAT" -H "Content-Type: application/json" \
    -d "{\"fields\":{\"Status\":\"Done\",\"Completed Date\":\"$TODAY\",\"AI Notes\":\"$NOTE\"}}" > /dev/null
  echo "✓ $r marked Done"
done
```

If any one step is partial, run only the relevant lines and leave the rest In Progress.

---

## Archive — move 3 source gates to consumed/ (30 sec)

```bash
TS=$(date +%Y%m%d)
mv /Users/billylewis/workspace/nightwatch/gates/pending/20260502-2000-linked-blog-titles-signoff.md \
   /Users/billylewis/workspace/nightwatch/gates/consumed/${TS}-linked-blog-titles-SIGNED-OFF.md
mv /Users/billylewis/workspace/nightwatch/gates/pending/20260502-0200-seo-phase-4-cron-routines.md \
   /Users/billylewis/workspace/nightwatch/gates/consumed/${TS}-seo-phase-4-crons-ACTIVATED.md
mv /Users/billylewis/workspace/nightwatch/gates/pending/20260502-1930-newsletter-1-rob-butchery.md \
   /Users/billylewis/workspace/nightwatch/gates/consumed/${TS}-newsletter-01-rob-butchery-SCHEDULED.md
echo "✓ 3 gates moved to consumed/. Pending queue: $(ls /Users/billylewis/workspace/nightwatch/gates/pending/ | wc -l)"
```

After archive, GATES-INDEX.md will be stale — no manual refresh needed; next Nightwatch cycle (cycle 20+) will refresh it.

---

## Acceptance checklist

After running through the pack:

### Step 1
- [ ] 3 LINKED titles picked (or accepted defaults B/A/B)
- [ ] Picks recorded in this doc OR replied on source gate

### Step 2
- [ ] `/schedule list` shows 3 entries: meat-seo-drift-weekly, meat-seo-competitor-monthly, meat-seo-content-gap-monthly
- [ ] Routine 3 (publish) explicitly NOT activated
- [ ] (Optional) Smoke-test of drift routine fired and Telegram digest received

### Step 3
- [ ] Klaviyo template `Newsletter #1 — Rob butchery story (launch series 1/4)` saved as draft
- [ ] Klaviyo campaign `Meat launch — newsletter 01 — Rob butchery` saved as draft (NOT sent)
- [ ] Subject + preview text picked
- [ ] Hero image inserted (Rob butchery preferred, cabinet fallback OK)
- [ ] Both CTAs link-tested (shop link with UTM + register-interest form)
- [ ] UTM verified at template level
- [ ] Compliance scan clean (no `!`, no banned adjectives, Preston's framing intact)
- [ ] Test send to billy@buildwithbilly.ai + 1 staff inbox
- [ ] Peer read by Helena or Carrie
- [ ] Campaign scheduled for next Sun/Tue 9am NZT (NOT Send Now)

### Closeout
- [ ] Closeout curl run — 3 ✓ confirmations printed
- [ ] Archive script run — pending queue count dropped by 3

---

## Open decisions for Billy + team

| # | Decision | Default if no override |
|---|----------|------------------------|
| 1 | Anchor 1 title — A/B/C? | **B** (SEO-front) |
| 2 | Anchor 2 title — A/B/C? | **A** (names front) |
| 3 | Anchor 3 title — A/B/C? | **B** (neutral framing) |
| 4 | Subject line for newsletter — option 1/2/3? | **1** ("Rob raises them. Rob butchers them.") |
| 5 | Preview text — option 1/2? | **1** ("The same hands that raise the animal now prepare the cuts...") |
| 6 | Send window — Sunday or Tuesday? | **Sunday 9am NZT** if a Sunday is closest within the next 7 days; else next Tuesday 9am |
| 7 | Hero image — Rob butchery captured yet, or cabinet fallback? | If not captured by Sat noon → cabinet fallback, push capture into post-launch series #2+ |
| 8 | Routine 3 (bi-weekly publish) activation date? | After 1+ HIDDEN draft is in queue AND `_queue.json` vs Airtable decision made — earliest realistic: 2026-05-15 |

---

## Failure modes table

| What goes wrong | Symptom | Fix |
|-----------------|---------|-----|
| `/schedule` skill not loaded in Claude Code session | Command not recognized | Type `schedule` (no slash) to invoke or use `ToolSearch query: "select:CronCreate"` and call `CronCreate` directly per source gate |
| Klaviyo list mix-up (Lucid/Upstream subscribers receive Mangaroa email) | Test send goes to wrong inbox | Confirm List = Mangaroa main subscriber list (filter by name in Klaviyo before scheduling); sub-test with a known-Mangaroa-only inbox |
| UTM not applied to CTA | Click attribution to direct/none | Re-check template-level UTM injection; confirm by inspecting CTA HTML in test-send email |
| Hero image too large / breaks Klaviyo render | Test send shows broken image or oversized | Resize to 1200x630 max, JPEG or PNG <500KB; re-upload |
| Closeout curl fails (PAT not exported) | "missing API key" error from Airtable | Re-run the `export PAT=...` line at top of Pre-flight, then closeout block |
| Cron routine fires but produces nothing | No Telegram, no brain page | `/schedule list` to confirm name; `/schedule run <name>` to trigger manually; check Claude Code routine logs |
| LINKED nav promotion happens before review pass | Live-site nav shows half-edited posts | Per SEO_STRATEGY §7: HIDDEN draft → review pass → LINKED. Do not skip review. The HIDDEN draft step is autonomous; LINKED promotion is gated. |
| Routine 3 accidentally activated | Public post appears without review | Pause immediately: `/schedule pause meat-seo-publish-biweekly`; remove from queue. Per `seo-phase-4-cron-spec.md` Routine 3 is the only public-action routine — keep it deferred until prerequisites met |

---

## Why this pack exists (rationale for the bundle)

3 launch-surface tasks, all Mangaroa Farms client, all blocked on Billy time only, all ~5–15 min individually. Without a bundle they cost 3× context-switch overhead (open Klaviyo, switch to schedule, switch to titles doc). Bundled into a single pre-flight + sequenced flow they cost ~25 min total.

Cycle 18 used the same pattern for Lucid Living (4 tasks, 35 min, single Billy+Amy session). When ≥3 pending gates share dashboard owner + context, bundling yields ~30 min saved vs shipping separately.

Contrast: gates that DON'T bundle well — different owners (Billy vs Amy vs partner), different dashboards (Klaviyo vs Stripe vs Airtable vs CLI), different context (sales outreach vs technical activation). Those stay as separate gates.

---

## Sources

- `nightwatch/gates/pending/20260502-2000-linked-blog-titles-signoff.md` — Step 1 full candidate analysis
- `nightwatch/gates/pending/20260502-0200-seo-phase-4-cron-routines.md` — Step 2 paste-ready cron prompts
- `nightwatch/gates/pending/20260502-1930-newsletter-1-rob-butchery.md` — Step 3 full body + setup notes
- `mangaroa/meat/SEO_STRATEGY.md` §4 + §7 + §8 — pillar plan, guardrails, Phase 3 first wave
- `mangaroa/meat/content/messaging-pillars.md` — voice rules, Preston's framing, family-heritage approval gate
- `mangaroa/meat/docs/seo-phase-4-cron-spec.md` — canonical Phase 4 cron spec
- `mangaroa/newsletter/wiki-2026-04.md` — Photos Available list (Rob butchery hero status)
- Cycle 18 Lucid 35-min Activation Pack — pattern blueprint
