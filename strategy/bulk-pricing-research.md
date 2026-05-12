<!-- Drafted 2026-04-28 by Nightwatch — research scaffold for Airtable task recKikBVlJ2KcbAWi
     "Research bulk pricing — whole lamb and side of beef".
     Confirms or revises the existing $350-450 lamb commitment + drops a beef floor.
     Billy/Rob fill the canonical rows; only then do FAQ / bulk page / staff sheet update. -->

# Bulk pricing research — whole lamb and side of beef

**Status:** Draft research scaffold. Public surfaces are NOT updated until Rob signs off the canonical rows in Section 4.

**Audience:** Billy, Rob.

**Why this exists:** Three customer-facing surfaces (faq.md, bulk.astro, staff-talking-points.md) currently say "whole lamb $350-450 (butchered)" and "side of beef pricing varies by weight". Rob needs to confirm or revise the lamb band and put a number on beef before we go further. This document gives the comparable market data + the unit-economics template + the open decisions, so the conversation with Rob takes 10 minutes, not 90.

---

## 1. Current commitments in writing

| Surface | What it says about lamb | What it says about beef |
|---|---|---|
| `meat/content/faq.md` | "Whole lamb starts from approximately $350-450 (butchered)" | "Side of beef pricing varies by weight and is confirmed once we know the animal" |
| `meat/app/src/pages/bulk.astro` (live) | "Whole lamb from approx. $350-450 (butchered)" | "Side of beef pricing varies by weight" |
| `meat/content/in-store/staff-talking-points.md` | "A whole lamb butchered starts from about $350-450. Beef pricing depends on weight" | (same) |
| `meat/content/in-store/bulk-order-card.md` | No price (form-only) | No price |

**Read:** the lamb band ($350-450) is locked in three places. Either we keep it, or we change all three at once. The beef gap is real — customers walk in and we have nothing to anchor against.

---

## 2. NZ direct-from-farm market — April 2026

### Whole lamb butchered

| Supplier | Total price | Take-home weight | $/kg | Notes |
|---|---|---|---|---|
| Franklin Country Meats | $355 | 16–19 kg pre-cut | ~$18.70–$22.20 | Lowest in the comparable set. Includes shipping NI urban $12-15. Standard cuts pack. |
| Eketahuna Country Meats | $430 | ~14 kg | ~$30.71 | Standard cuts pack (shoulders, chops, racks, roasts, sausages, shanks). |
| Matangi Prime Meat | $469 | ~14–15 kg | ~$31.30–$33.50 | Estimated price; charged on actual weight day-of-dispatch. Frenched, butterflied, mince added. |

**Range:** $355–$469 total / $19–$33 per kg butchered take-home.
**Median:** ~$430 / ~$30/kg.

**Mangaroa's stated $350-450:** sits at the bottom of the range. Defensible if the cuts pack is the basic spec (no Frenched racks, no specialty butchery), but probably leaves margin on the table once Rob's processing time is costed.

### Side of beef / bulk beef

| Supplier | Pricing model | Implied $/kg | Notes |
|---|---|---|---|
| Hurunui Farms | $13.99/kg carcass weight + $2/kg processing | ~$16/kg carcass; ~$24-26/kg take-home (60-65% yield) | "Call us to discuss." Small-goods quoted separately. |
| Rannoch (Homegrown Butchery) | $18/kg carcass weight (incl GST) | ~$28-30/kg take-home (60-65% yield) | Whole $4,320 / Half $2,160 / Quarter $1,080. Avg whole carcass 240kg. |
| Green Meadows Beef | $26-$28.13/kg butchered (price/kg drops as quantity rises) | $26-$28/kg take-home | 1/4 = 48kg @ $1,350. 1/2 = 96kg @ $2,640. Whole = 192kg @ $4,992. Free shipping. |

**Range:** $24–$30/kg take-home meat.
**Median:** ~$27/kg.
**Side of beef** typical: ~100-150kg carcass weight = ~60-90kg take-home meat. At $25-28/kg take-home, that puts a side of beef at **~$1,500–$2,500**. (Half a Green Meadows beast = $2,640 at 96kg take-home.)

### Industry context (not customer-facing — anchors)

- AgriHQ farmgate, late April 2025: NI bull NZ$9.65/kg CWT (record high), P2 steer ~$7.55/kg CWT, manufacturing cow ~$5.60/kg CWT. (Source: B+L NZ price trends.)
- B+L NZ export value, Dec 2025: $12.42/kg (record). Strong global demand sustaining record farmgate beef prices into Q1 2026.
- Implication: Direct-to-customer retail at $25-30/kg take-home is **2-4× farmgate**. The premium pays for processing, packaging, distribution, customer-relationship cost, and farm margin. Mangaroa needs to land in this band — undercutting it loses money on every animal.

---

## 3. Unit economics — fillable scaffold

This is the math Rob and Billy need to work backwards through, once. Then it stops being a question.

### Lamb — per animal

| Line item | Mangaroa typical | Notes |
|---|---|---|
| Live weight | ~40–50 kg | Confirm Mangaroa stocking weights with Rob |
| Carcass weight (after slaughter) | ~50% of live = 20–25 kg | Standard NZ lamb dressing % |
| Take-home meat (after butchery / bone / trim) | ~60-75% of carcass = ~14–18 kg | Matches Franklin/Eketahuna/Matangi observed ranges |
| Slaughter fee (Preston's, per head) | $___ | Rob confirm |
| Butchery + processing labour (Rob + crew, per lamb) | $___ | Rob confirm — 2-3 hrs per lamb at $___ /hr |
| Packaging + freezer paper + bags | $___ | Estimate $15-25 |
| Allocated overhead (electricity, water, freezer, fuel) | $___ | Estimate $20-30 |
| **Total cost per lamb** | $___ | Sum of above |
| Target margin | __ % | Recommend 35-50% gross margin |
| **Target retail price (whole lamb butchered)** | $___ | Cost / (1 - margin) |

If we use the **median-of-comparables** price of ~$430 and assume 14kg take-home, that's ~$30.70/kg retail. If Mangaroa's per-lamb cost is $250 (feasible with on-farm labour), gross margin is ~42%. That's a healthy-but-not-greedy line.

### Beef — per side / per kg

| Line item | Mangaroa typical | Notes |
|---|---|---|
| Live weight (typical Mangaroa beef beast) | ~400–500 kg | Confirm with Rob |
| Carcass weight (~55% dressing) | 220–275 kg | Rob to confirm |
| Side of beef (half carcass) | 110–138 kg carcass weight | The base unit a customer asks for |
| Take-home meat per side (60-65% of carcass = ~36% of live) | 65–90 kg | 35-40% loss to bone, fat, trim |
| Slaughter fee (per beast / shared across sides) | $___ | Rob confirm |
| Butchery + processing labour per side (8-12 hrs?) | $___ | Rob confirm |
| Packaging + bags | $___ | Estimate $50-80 |
| Allocated overhead | $___ | Estimate $80-120 |
| **Total cost per side** | $___ | Sum |
| Target margin | __ % | Recommend 35-50% gross margin |
| **Target retail price per side** | $___ | Cost / (1 - margin) |
| **Implied $/kg of take-home meat** | $___ | Side price ÷ take-home kg |

If Mangaroa lands at **~$25-28/kg take-home meat**, that puts:
- **Side of beef (75kg take-home avg):** $1,875–$2,100
- **Quarter beef (~37kg take-home):** $925–$1,050
- **Whole beef (~150kg take-home):** $3,750–$4,200

Recommendation for the public surface: lead with a side band, not a $/kg number — customers think in "fill the freezer" terms, not per-kg. **"Side of beef approx. $1,800–$2,200, depending on the animal"** is digestible.

---

## 4. The decision rows Rob needs to fill

> Confirm these six numbers and the public surfaces can be updated same day. Fill in this table and the rest cascades.

| # | Decision | Current public surface | Rob's confirmed value | Notes |
|---|---|---|---|---|
| 1 | Whole lamb butchered — total price band | $350-450 | $___ to $___ | Comparable median is $430. Bottom of band is defensible only if cuts pack is basic. |
| 2 | Whole lamb butchered — typical take-home weight | (not stated) | ~__ kg | Anchors the $/kg the customer can back out. |
| 3 | Side of beef — total price band | (not stated) | $___ to $___ | Comparable median ~$1,800-2,200 take-home for ~75kg. |
| 4 | Side of beef — typical take-home weight | (not stated) | ~__ kg | Customer wants to know "how full is my freezer". |
| 5 | Quarter beef option — yes/no, price | (not offered on bulk page) | Yes / No, $___ | Bulk page has the radio for it; we should either price it or remove the option. |
| 6 | Custom-cuts surcharge — flat fee or per-cut | (not stated) | $___ | Frenched racks, butterflied legs, etc. take meaningful extra time. |

### Adjacent decisions (less urgent but raised by the comparables)

| # | Decision | Rob's call |
|---|---|---|
| 7 | Deposit — refundable or non-refundable? How much? | $___ — Kiwi Butcher Shop uses $100 non-refundable. Locks in the booking, weeds out tyre-kickers. |
| 8 | Lead time we promise | Comparables run 2-4 weeks. FAQ supplement (cycle 1) said "2-4 weeks". Confirm. |
| 9 | Shipping — do we ship butchered orders nationwide? Pricing model? | FAQ says "yes within NZ". Need a rate card or "quoted per order". Comparables: Franklin $12-15 NI urban. Rannoch $230 for half NI-only. |
| 10 | Volume discount — is half/quarter cheaper per-kg than whole? | Green Meadows uses descending $/kg (whole cheapest). Could be a positioning lever later. Default: same $/kg across sizes for v1. |

---

## 5. Recommended public-facing pricing language (once Rob confirms)

These are templates. Don't ship until Section 4 is filled in.

### faq.md update (replace the bulk-pricing Q&A)

> **Can I order a whole lamb or side of beef?**
> Yes — we take expressions of interest for whole animals, half animals, and custom bulk orders. You can choose whether you want it butchered into standard cuts or collect the carcass to butcher yourself.
>
> - **Whole lamb butchered:** approx. $___ to $___, around __ kg of cuts
> - **Side of beef butchered:** approx. $___ to $___, around __ kg of cuts
> - **Quarter beef butchered:** approx. $___ to $___, around __ kg of cuts (or: not currently offered)
>
> Final pricing depends on the weight of the specific animal and how you want it butchered. Fill out the form at meat.mangaroa.org/bulk and we will be in touch to confirm.

### bulk.astro "Indicative pricing" panel update

> **Indicative pricing**
> Whole lamb butchered: approx. $___ to $___ (around __ kg of cuts)
> Side of beef butchered: approx. $___ to $___ (around __ kg of cuts)
> Final pricing is confirmed once we know the animal weight and your cut preferences. All prices subject to availability.

### staff-talking-points.md "Bulk Orders" section update

> - "A whole lamb butchered runs about $___ to $___ — that's around __ kg of cuts"
> - "A side of beef is about $___ to $___ — around __ kg, fills a chest freezer"
> - "Quarter beef option if you want to dip a toe in — about $___ for ~__ kg"
> - "Final price depends on the actual animal — we will quote you when we know what's coming through"

---

## 6. Update plan once Section 4 is locked

1. **Update faq.md** (the bulk Q&A) — Billy or Nightwatch, low-effort.
2. **Update bulk.astro** "Indicative pricing" block — code change, Billy.
3. **Update staff-talking-points.md** "Bulk Orders" section — print + replace counter copy.
4. **Add bulk-order-card.md indicative pricing line** (optional) — currently form-only, could add "From $___ for whole lamb / $___ for side of beef" to set expectation before they fill the form.
5. **Optional: add a pricing line to the bulk-order-card flyer** so walk-in customers can decide before filling the form.

Total work to ship after Rob's input: <30 min across all four surfaces.

---

## 7. Open questions that aren't pricing but came up

- Do we have a written **cut list / preference form** the customer fills in (like Hurunui's downloadable cut list)? If not, the conversation with each bulk customer is going to be 20-30 min of "what do you want" — fine for v1, scales badly. Worth a v2 task: "build a cut-preference form".
- Do we have **freezer-fit guidance**? "A side of beef needs ~3 cubic feet of freezer space" reduces buyer regret. Worth adding once pricing is locked.
- **Subscription / repeat-customer offer.** Comparables don't have this; could be a Mangaroa differentiator — "lock in a side every 6 months" with a 5% discount. Rob/Billy decision later.

---

## 8. Sources (for the research, not customer-facing)

- Eketahuna Country Meats — whole lamb $430 / 14kg
- Franklin Country Meats — whole lamb $355 / 16-19kg
- Matangi Prime Meat — whole lamb $469 / 14-15kg
- Hurunui Farms beef — $13.99/kg CWT + $2/kg processing
- Rannoch (Homegrown Butchery) beef — $18/kg CWT, 60-65% take-home
- Green Meadows Beef — $26-$28/kg butchered, transparent quarter/half/whole tiers
- B+L NZ price trends — farmgate / export anchors

All accessed 2026-04-28. Sources are public retail websites; pricing changes monthly — re-check before any major Mangaroa repricing.

---

*Drafted 2026-04-28 by Nightwatch. Rob fills Section 4, Billy reviews, then ~30 min of edits across faq + bulk page + staff sheet to ship. No public surface changes from this document — research scaffold only.*
