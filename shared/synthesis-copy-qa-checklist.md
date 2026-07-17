# Alpenglow Editorial — Copy-QA Gate Checklist (run per staged page, BEFORE CEO/Owner)
**Owner:** Marketing · created 2026-07-16 · Gate rule: QA closes BEFORE any Owner send (CEO process fix, Arrowhead lesson).

## A. P0 hard sweeps (grep-able)
- [ ] No "Miami" / no Miami units / no CalleOcho anywhere (site or links)
- [ ] No AI/agent/automation/chatbot disclosure — benefits language only
- [ ] No pricing, no $ amounts, no % discounts, no promo codes
- [ ] No "hot tub"/"jacuzzi"; fire language = GAS only (no wood/kindling/firewood)
- [ ] No internal labels user-facing (Unit Y/W/X/33/35/23, !LOT19253, M1/M2/MB)

## B. Names & claims (SSOT: units.json v2.4.0)
- [ ] All 7 names VERBATIM (incl. Unit Y's full 47-char title w/ "w/" and "!" intact; no "Little Joy Lodge")
- [ ] Ratings: only "4.9+" form, ONLY on No.01/02/03 (never 4.96/4.91/4.79 precision)
- [ ] NO rating/social-proof claims on Heaven's Retreat (aggregate "well-reviewed" ok), Mountain Retreat, Tiny Lodge, Aspen
- [ ] Brand claim = "1,000+ five-star reviews" (Owner override — never 650+/657/658 sums) + Superhost
- [ ] "Guest Favorite" wording ABSENT unless Airbnb badge verified live
- [ ] Trust bar appears ONCE (component), text per synthesis-identity-lines-trustbar-v1.md

## C. Facts matrix (per unit page/card)
- [ ] Capacity: Y=4, X=4, 33=4 | W=6, MR=6, 35=6
- [ ] Grill tags ONLY: No.02, No.03, No.07 cards (+ Y's shared-grill note on its unit page; "the three neighboring homes share one grill")
- [ ] Gas fire pit: Y/W/X/33/MR verified; NOT on 35 or Aspen
- [ ] "Direct Pikes Peak view": Y (+ Aspen "direct views") only; MR = "panoramic mountain views"
- [ ] MR: no-AC/portable-fans in practical details only, never a highlight
- [ ] No.07 Aspen: "full home" — NEVER "tiny home"; coming-soon + opening-list capture; no photos claimed/invented
- [ ] Amenities beyond locked facts: ABSENT (expansion awaits Owner verification)

## D. Identity/voice integrity (my won layer)
- [ ] Hero: "Wake up under Pikes Peak." split-text; "Seven small houses. One enormous mountain." placement
- [ ] No.01–07 numbered collection with identity lines VERBATIM from my doc
- [ ] "City Above the Clouds" anchors the area section (per verdict)
- [ ] Tone: editorial, sensory, no luxury-buzzword filler, no "handcrafted"/"built them" origin claims

## E. Conversion & links
- [ ] EVERY home card deep-links to live Guesty engine (tinyhomeboutiques.guestybookings.com) — zero dead ends
- [ ] CTAs present: hero, per-card, closing band; mobile sticky Book-Direct bar
- [ ] Slugs match SEO plan (existing slugs preserved); title/meta strings per seo-plan-v1.md; JSON-LD aggregateRating only on 85+-review units
- [ ] Images self-hosted (no assets.guesty.com hotlinks); alt-text = verbatim name + descriptor

## F. Hero specifics
- [ ] Default = Unit-Y photo-01 Ken Burns (crop-in ≥15%, transform-only); higgs loop = Variant B toggle only
- [ ] Variant B never default; Owner picks at review delivery

## G. Verify method
- Fetch staged preview URL (not repo file) + grep raw HTML for sweeps A/B; eyeball rendered page for D; click every card link for E.
- Verdict format to CTO: SHIP-READY / FIXES (numbered, exact line + replacement) / ACCEPTED-INFERENCES.
