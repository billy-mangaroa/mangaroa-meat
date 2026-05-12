# KPIs and Weekly Reporting — Locally Processed Meat Launch

> Draft v1, 2026-04-28. Owner: Billy + Grady. Decide together what to keep / cut / change.
>
> Posture: simple. A shared doc plus a 15-minute weekly check-in is the whole system. Do not buy a tool for this. Add complexity only after we have eight weeks of data and a real question we cannot answer.

---

## What we are measuring (and why)

The launch has four jobs to do. Each KPI ties back to one of them.

| Job | Why it matters | Primary KPI | Supporting signals |
|---|---|---|---|
| 1. Move fresh meat through the shop each week | Fresh has a shelf life; movement = no waste, repeat customers, cashflow | **Weekly meat revenue** ($ NZD, in-store + online combined) | Units sold, cuts that sell out, cuts that get marked down |
| 2. Build a rhythm of online orders for pickup | Online order is a habit; the second order is the one that matters | **Online orders per week** | Repeat-purchase rate (% of orders from a returning email), avg. order value |
| 3. Grow demand for whole/half animal | High-margin, books out future supply, deepest customer relationship | **Bulk order enquiries per week** | Conversion enquiry → confirmed order, deposit-paid count |
| 4. Stay top-of-mind without overdoing it | Email + social are the cheap, high-trust ways to keep showing up | **Email engagement** (open + click) and **social engagement** (saves, shares, comments — not vanity likes) | Follower growth, story/reel completion rate |

Anything not on this list is interesting but not steering the ship. We can revisit at week 8.

---

## The KPIs in detail

### 1. Weekly meat revenue
- **What:** Total revenue from meat products. In-store till + online order checkouts. Mon→Sun roll-up.
- **Source:** Square (or whatever the shop till runs on) export → meat category filter. Online orders from `meat.mangaroa.org` Vercel/Stripe (whichever is live).
- **Initial target — set by Grady:** _<TBD — Grady to fill in week-1 expectation>_. Suggest revisiting after week 4 with real baseline.
- **Watch:** Cuts that consistently fail to sell (mark-down rate >25% week over week). That signals supply mix is wrong, not demand.

### 2. Online orders per week
- **What:** Count of orders placed through `meat.mangaroa.org`, Mon→Sun.
- **Source:** Order admin in the meat app (or Stripe dashboard, depending on stack).
- **Initial target:** Week 1: _≥10_ orders (modest, just to confirm the funnel works). Trend matters more than the number.
- **Watch:** Repeat-customer ratio. By week 6 we want ≥30% of weekly orders coming from someone who has ordered before. If it stays under 15%, the second-order experience is broken (could be confirmation email, pickup process, or product mix).

### 3. Bulk order enquiries per week
- **What:** Count of enquiries through the bulk order form (whole lamb / side of beef).
- **Source:** Form submissions (whichever inbox / Airtable view receives them). Tagged: enquiry-only, deposit-paid, fulfilled.
- **Initial target:** ≥2 enquiries per week in months 1–3. ≥1 deposit-paid per fortnight by month 3.
- **Watch:** Time-to-response. Bulk enquiries are warm leads — if we take >48 hrs to reply they cool fast. Track median response time as a quiet hygiene metric.

### 4. Email engagement
- **Tool:** Klaviyo (Mangaroa Farms account).
- **Metrics per send:** Open rate, click rate, unsubscribe rate.
- **Reference benchmarks (food / D2C):** Open ≥35%, Click ≥3%, Unsub ≤0.4%. Do not panic about a single send below benchmark — look at the rolling 4-send average.
- **Watch:** Sends that get a click rate ≥6% — those subject lines and offers are the templates worth repeating.

### 5. Social engagement
- **Tool:** Native IG + FB analytics. (Buffer/native — Billy's call on which is canonical.)
- **What we count:** Saves + shares + meaningful comments per post. Not raw likes. Story completion rate (last frame ÷ first frame). Reel watch-through.
- **What we ignore:** Follower count as a primary metric. Useful as a slow-moving health signal, useless as a steering input.
- **Watch:** Posts in the top 10% by saves. Document what they had in common and do more of it.

### 6. Event attendance (when relevant)
- **What:** Headcount at the launch BBQ + any subsequent farm-shop tasting. Plus an estimate of how many were existing customers vs. new walk-ups.
- **Source:** Hand count + brief intake question at the door.
- **Why it matters:** A launch event is the most expensive marketing we will do this year per hour. We should know whether it converts.

---

## The Weekly Check-In

**Cadence:** 15 minutes. Same time every week. Suggest **Monday morning** (covers the previous Mon→Sun week).

**Where the numbers live:** A single shared sheet — Google Sheet or an Airtable view. Either works. Pick one, not both. (Recommend Airtable view in the existing `app8H6Ok8BVYKYCGz` base since that is where the rest of the project lives — see "Airtable wiring" below.)

**Format of the check-in:**

| Question | Source | Time |
|---|---|---|
| What did the numbers do this week? | The shared sheet | 5 min |
| What is the one trend (good or bad) we want to act on? | Discussion | 5 min |
| What are we shipping this week? | Calendar / task list | 5 min |

That is it. No slide deck, no narrative. If a number is genuinely weird, take it offline.

**Monthly:** Once a month, spend an extra 15 minutes asking: "Is the Pick One we are tracking still the right one?" If something has fundamentally changed (e.g. supply has caught up, or a new channel is dominating), update this doc.

---

## Airtable wiring (recommended setup — small)

Create one new table in `app8H6Ok8BVYKYCGz`:

**Table name:** `Meat KPIs Weekly`

**Fields:**
- `Week Ending` (date — Sunday)
- `Meat Revenue ($)` (currency)
- `Online Orders` (number)
- `Bulk Enquiries` (number)
- `Bulk Deposits` (number)
- `Email Sends` (linked to Klaviyo campaigns / or just a number)
- `Avg Open Rate %` (number)
- `Avg Click Rate %` (number)
- `Top Social Post URL` (URL)
- `Notes` (long text)
- `Action for Next Week` (long text)

One record per week. Filling it in is the weekly check-in's homework — should take 5 minutes if numbers are at hand.

**Do not** build a dashboard inside Airtable until we have 8 weeks of data. The shared view is the dashboard.

---

## What we are deliberately NOT measuring (yet)

- **Customer Lifetime Value.** Premature. Need 6 months of order data before this is signal.
- **Cost-per-acquisition.** Almost all marketing this quarter is unpaid. Track when paid begins.
- **Net Promoter Score.** Anecdotal feedback at the shop is more useful at this stage.
- **Email list size as a primary metric.** Engagement quality > list size in months 1–3.
- **Sentiment analysis on social mentions.** Read the comments. That is the analysis.

---

## Decisions still needed from Billy + Grady

- [ ] Which till / POS captures meat-category revenue? (Square? Other?) — need to confirm export path.
- [ ] Online order admin: meat app order export, or Stripe dashboard? Pick the canonical source.
- [ ] Set initial revenue target for week 1–4. Grady's call.
- [ ] Choose the canonical social analytics surface (native IG + FB, or Buffer).
- [ ] Confirm the Airtable table approach (or pick an alternative). Whoever owns it will populate weekly.
- [ ] Confirm Monday morning (or other fixed slot) for the check-in. Put it on a recurring calendar.

---

## Changelog

- **2026-04-28** — Draft v1 written by Night Shift (Airtable task `recPfLmD1NGDxBwNx`). Pending Billy + Grady review.
