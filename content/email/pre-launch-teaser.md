---
type: email
audience: existing customer list (Klaviyo — shop customers + newsletter)
purpose: Pre-launch teaser email — 5-7 days before locally processed meat launch. Build anticipation without overselling. No order CTA yet.
launch_anchor: 2026-05-10 (Saturday) — TBC, confirm with Helena/Billy. Send this email Mon 2026-05-04 or Tue 2026-05-05.
status: DRAFT — for Billy/Grady review
drafted_by: Nightwatch cycle 3 (2026-05-04)
brand_voice_source: get_brand_voice MCP + messaging-pillars.md + launch-announcement.md (paired voice)
related_artefacts:
  - mangaroa/meat/content/email/launch-announcement.md (paired LAUNCH email — sent Sat 2026-05-10)
  - mangaroa/meat/content/social/launch-content-calendar.md (Week -1 — Hōtoke is butchery season, Tue 2026-05-05)
  - mangaroa/meat/content/messaging-pillars.md (canonical pillars)
  - airtable: recEWrB57m0BnUm3z (this task)
notes_for_billy_grady:
  - Pick ONE subject line. Strongest = A (matches task description prompt: "Something new is coming to the shop").
  - NO order CTA — meat.mangaroa.org meat catalogue goes live launch day. Pre-launch keeps the email a quiet heads-up, not a sales push.
  - Save-the-date block at the bottom is OPTIONAL — only include if BBQ is locked with Helena. Otherwise keep the email tight.
  - Pair with Week -1 social: Tue 2026-05-05 "Hōtoke has settled in" (IG/FB). Both reach the same audience same day. Echo on purpose.
  - Recommended send: Tue 2026-05-05 between 9-11am NZ. Same morning as the IG post. Keeps the rhythm coherent.
  - Length: 145 words body. Within tight-email range (newsletter announcements typically 120-200 words).
  - Day-of follow-up post-launch is the existing `launch-announcement.md` Variant A.
---

# Pre-launch teaser email — Mangaroa Farms meat-shop relaunch

## Subject line options

**A. (recommended — matches task brief)** Something new is coming to the shop
**B.** A heads-up from Mangaroa — our meat is coming home this weekend
**C.** Hōtoke is butchery season, and we have news

## Preview text

For two years our meat has been processed off-site. That changes this Saturday — Rob is in the new on-farm butchery and the first proper cuts of hōtoke are nearly ready.

---

## Body

**From:** The team at Mangaroa Farms <welcome@mangaroa.org>
**To:** Existing customer + newsletter list (Klaviyo)

---

Subject: Something new is coming to the shop
Preview: For two years our meat has been processed off-site. That changes this Saturday — Rob is in the new on-farm butchery and the first proper cuts of hōtoke are nearly ready.

---

Kia ora {{ first_name|default:'friend' }},

Hōtoke has settled in. The cattle have had a long summer on pasture, the lambs are ready, and the sheds are quiet enough for slow careful work.

For the last two years, the meat we raised here at Mangaroa had to leave the farm to get cut and packed somewhere else. The animals are raised in alignment with this whenua, and the cuts always felt like they should come back home with the same care.

This Saturday, that changes.

Our on-farm butchery opens. Rob is in there now, laying down the first proper cuts of the season. Locally raised. Locally processed. Mauri kept intact from paddock to plate.

Full details and the online shop go live Saturday morning. Until then — watch this space.

Ngā mihi aroha,
The team at Mangaroa Farms

📍 98 Whitemans Valley Road, Upper Hutt
🌐 mangaroa.org · meat.mangaroa.org
📧 shop@mangaroa.org

---

## Optional save-the-date block (insert ONLY if BBQ confirmed with Helena)

Insert above sign-off:

> If you can come down on launch weekend, we'll be firing up the BBQ at the shop. Rob will be on hand to talk cuts and the whole team will be there. {{ launch_event_details — confirm with Helena }}

---

## Notes on voice & structure (for Grady's review)

- **Subject A** matches the task brief verbatim ("Something new is coming to the shop"). Sentence case. No exclamation, no urgency. Builds curiosity rather than pressure.
- **Opens on hōtoke / butchery season** — same beat as the Tue 2026-05-05 IG post. Subscriber gets a small thrill of recognition if they see both within a few hours. The seasonal frame is the load-bearing context, not a marketing hook.
- **Names Rob.** Same as the launch email. Quiet-operators rule applies — Rob in the butchery, doing the work, not posed.
- **Load-bearing phrase appears mid-body** ("Locally raised. Locally processed.") — same construction as launch email and all of Week -1 → +4 social. Don't break the rhythm.
- **NO order CTA.** This is the difference between teaser and launch. Pre-launch = anticipation, no purchase ask. Launch = full CTAs to online + in-shop.
- **"Watch this space"** at the close is the only forward-pointer. The reader knows Saturday is the date. The next email (`launch-announcement.md` Variant A) is the call to act.
- **Paragraphs are short and physical** — single-line opening (Hōtoke has settled in.), then a 60-word block on the why, then the 6-word turn ("This Saturday, that changes."), then the news. Standard editorial cadence for the brand.
- **Te reo natural** — hōtoke, whenua, mauri. Never italicised, never translated.
- **Sign-off canonical** — "Ngā mihi aroha, / The team at Mangaroa Farms".
- **Length** — 145 words body. Tight by Mangaroa standards (newsletter long-form is 280-450). Tight is right for a teaser — the launch email does the heavy lifting.
- **No banned adjectives** (beautiful, amazing, gorgeous, magical, incredible, stunning). No banned openers ("We're so excited", "What a", rhetorical question). No corporate jargon.
- **Klaviyo merge tags** — `{{ first_name|default:'friend' }}` matches the launch email pattern. If Klaviyo template uses different syntax, swap accordingly.

---

## Send checklist

- [ ] Confirm launch date is still Sat 2026-05-10 (otherwise re-anchor "this Saturday" wording)
- [ ] Pick subject line (A recommended)
- [ ] Decide on save-the-date block (only if BBQ confirmed with Helena)
- [ ] Stage as Klaviyo template — copy body + subject + preview
- [ ] Send to test segment first (yourself + Helena + Grady)
- [ ] Schedule send Tue 2026-05-05 between 9-11am NZ (same morning as IG "Hōtoke has settled in" post)
- [ ] Mark airtable recEWrB57m0BnUm3z Done after Klaviyo template is staged (DRAFT) — this email is content-ready; the send is human-gated
