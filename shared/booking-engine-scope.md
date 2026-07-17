# Booking Engine Scope — tinyhomeboutiques.com Direct Bookings
**Author:** CTO sub-agent (research-only) · **Date:** 2026-07-16 · **Status:** SCOPING — no code, no account changes, read-only everywhere.
**Goal:** Live availability + direct reservations on the static GitHub-Pages site (goal #1 = direct bookings, cut OTA fees).

---

## 0. Critical context: we are NOT starting from zero (CONFIRMED locally)

- **Guesty hosted Booking Engine is ALREADY LIVE** at `https://tinyhomeboutiques.guestybookings.com/` (curl 200 → `/en`, verified 2026-07-16). All 6 live CO units are published to the booking-engine channel as of 2026-06-07 (W/X/Y/33/Mountain Retreat/Unit 35; Aspen pre-launch). Source: `~/.dlj-wiki/decisions/20260607-unit35-booking-engine-publish-resolved-20260607.md`.
- **The live site already links out to it.** Repo `/Users/dljrealty/Desktop/tinyhomeboutiques-pending-push` (→ github.com/DLJRealty/tinyhomeboutiques, GH Pages + CNAME) has 8 `guestybookings` links in index.html. Owner policy: **book-direct-only CTAs** (Airbnb interim CTA was DECLINED, Owner DM 11213 — do not re-add).
- **Per-unit deep links work**: `https://tinyhomeboutiques.guestybookings.com/en/properties/{guestyListingId}` renders calendar + nightly pricing (Playwright-verified 2026-06-07 for Unit 35, $119–139/night shown). Listing IDs are in `shared/co-units-ssot.json`.
- **Guesty Open API auth already in production**: OAuth2 client-credentials at `open-api.guesty.com/oauth2/token`; secrets live as env vars `GUESTY_CLIENT_ID`/`GUESTY_CLIENT_SECRET` in the 256GB Mac Studio production stack (`/Users/dljrealty/openclaw-guesty/server.js` ~L183); token cached at `~/.dlj-scripts/data/guesty-token.json`. (Secrets not printed here.)
- **Production-tested Open API endpoints** (from our own `/Users/dljrealty/guesty-mcp-server/src/server.js`): `GET /v1/listings/{id}/calendar` (availability + pricing by date), `POST /v1/reservations` (the MCP `create_reservation` "website → Guesty direct booking" tool), `GET/PUT /v1/reservations`.
- **We already run public serverless infra**: `checkin.tinyhomeboutiques.com` pre-check-in form is Cloudflare (D1 database `dlj-checkin` via wrangler), plus Cloudflare tunnel endpoints off the Studios. A small booking proxy has an obvious home.
- **Known constraint**: the Open API token has **no channel-publish scope** — publishing a listing to the booking-engine channel is an app.guesty.com dashboard action (Owner did Unit 35 manually, msg 1452).
- **Page-QA rule (P1, wiki pattern 2026-06-07)**: every unit page sign-off must verify the unit actually appears/bookable on the booking engine, not just that the CTA href exists.

## 1. What Guesty officially offers (web research, 2026-07-16)

Guesty documents **three direct-booking product lines** (help.guesty.com article 9362217514141 — title confirmed via search; page body returned 403 to fetch, so per-product fine print below is partially UNVERIFIED):

1. **Guesty Websites** — turnkey hosted marketing + booking site (separately billed; "Guesty Websites billing" help article exists). We don't need this — we own tinyhomeboutiques.com content.
2. **Guesty Booking Engine** — the hosted portal we already run (`*.guestybookings.com`). Help docs confirm: an **embeddable widget** for external websites (paste-in snippet, color-customizable) and a **custom domain** can be connected to the booking engine (address entry + validation). Exact widget mechanics (iframe vs script; search-bar vs full checkout) UNVERIFIED — help center blocks automated fetch.
3. **Guesty Booking Engine API** — a separate API family for building fully custom booking UX (docs: booking-api-docs.guesty.com). CONFIRMED from official docs:
   - Separate OAuth2: `https://booking.guesty.com/oauth2/token`, per-"instance" client_id/secret created in the Guesty dashboard ("Creating a Guesty Booking Engine API instance" help article). Token 24h TTL, max 3 renewals/24h, ≤5 apps/account.
   - Endpoints (from official docs index): listings search `https://booking-api.guesty.com/v1/search`; per-listing **availability calendar**; **reservation quote flow** (create quote → retrieve quote → coupons) → **instant / inquiry / instant-charge reservation from quote**; **GuestyPay tokenization** and **Stripe tokenization** flows; payment-provider lookup per listing; upsells (pilot); reviews.
   - Guesty explicitly recommends the **quote flow**; legacy Reservations V1 booking path is being deprecated for direct-booking websites (open-api-docs migration guide).
   - Rate limits: 5 req/s, 275/min, 16,500/hr.
   - **Secrets must be server-side** ("Never store tokens in frontend or client-side code") → a static GH-Pages site REQUIRES a proxy (Cloudflare Worker or Studio-tunnel endpoint).

### Fees (UNVERIFIED — third-party sources only; must confirm on OUR account)
- GuestyPay processing reported ≈ 2.9% + $0.30/transaction (Stripe-like).
- Reports of an additional ≈2% Guesty fee per covered direct-booking transaction (optionally passed to guest as markup). UNVERIFIED for our plan.
- Booking Engine API instance availability/cost on our plan: UNVERIFIED (docs describe setup, not entitlement).
- Even so: total ≈3–5% direct-booking cost vs ~14–16% Airbnb guest+host fees — the economics hold under any plausible fee outcome.

### PCI posture (ASSUMED, standard pattern — verify at build time)
GuestyPay/Stripe **tokenization** means card data goes browser → processor; our proxy never touches PANs. That is normally SAQ A / SAQ A-EP territory, not full PCI-DSS. ASSUMPTION until we read the tokenization docs in detail during build scoping.

## 2. Option matrix

| # | Option | Effort | Cost | UX quality | Time-to-live | Risk |
|---|--------|--------|------|-----------|--------------|------|
| 1a | **Hosted engine link-out** (status quo, live today) | 0 | $0 incremental (txn fees only) | OK — off-domain hop to guestybookings.com, generic branding | LIVE | Minimal |
| 1b | **Hosted engine, upgraded**: custom subdomain `book.tinyhomeboutiques.com` + per-unit deep links `/en/properties/{id}` on every unit page/card | Low (DNS + dashboard + href edits) | $0 incremental (UNVERIFIED: custom-domain fee) | Good — branded URL, lands on the unit's own calendar, one fewer click | Days | Low (DNS validation; QA-per-unit rule applies) |
| 2 | **Embed official widget** in our static pages (snippet/iframe) | Low-Med | $0 incremental | Medium — on-page availability feel; widget look partly fixed; mobile iframe quirks | ~1 week | Low-Med (widget capabilities UNVERIFIED) |
| 3 | **Booking Engine API native**: our own calendar + quote + GuestyPay/Stripe checkout, secrets behind a Cloudflare Worker proxy | High (multi-week: instance, quote flow, tokenization, error/edge cases, e2e QA) | Dev time; same txn fees; instance cost UNVERIFIED | Best — fully branded, on-domain end-to-end | 3–6 weeks | Med-High: payments = P0 correctness; rate limits; support burden; "API success ≠ action delivered" verification required on every reservation |
| 3-lite | **Read-only availability teaser**: Worker proxies/caches `GET /v1/listings/{id}/calendar` (already-proven endpoint + creds) → static pages show live calendar/next-available, CTA → deep link (1b) | Low-Med | $0 (Workers free tier scale) | Very good — live availability on OUR pages, checkout on Guesty's PCI-scoped engine | ~1 week | Low: read-only, no payments, fail-open to plain CTA |
| 4 | **Airbnb deep-link fallback** (baseline) | 0 | 14–16% OTA fees | Familiar but off-goal | LIVE (listings exist) | Business risk: defeats goal #1; **Owner already DECLINED Airbnb CTAs on the site (DM 11213)** — not a permitted fallback for web CTAs |

## 3. Confirmed vs assumed — explicit ledger

**CONFIRMED (first-party: our repos/wiki, live curl, or official Guesty docs):**
- Hosted engine live w/ 6 units; site already links it; deep-link pattern works; Open API creds + calendar/reservation endpoints production-tested; Booking Engine API exists w/ quote flow + GuestyPay/Stripe tokenization + separate OAuth at booking.guesty.com; official embed-widget and custom-domain help articles exist; server-side-secret requirement; rate limits; Cloudflare Worker/D1 infra already ours.

**UNVERIFIED (do not build on these without confirmation):**
- Exact widget embed mechanics/capabilities (full checkout vs search bar).
- Custom-domain steps/cost for the booking engine on our plan.
- Booking Engine API instance entitlement + cost on our Guesty plan.
- Per-transaction fee stack on OUR account (GuestyPay % + any Guesty direct-booking fee).
- PCI SAQ level under tokenization (assumed A/A-EP).
- Whether the Open API `POST /v1/reservations` path (MCP tool) is sanctioned for guest-facing checkout — official guidance says use BE API quote flow instead; treat MCP create_reservation as ops-tool only.

## 4. Recommended path — phased

- **Phase 0 (done):** hosted engine live, site links out. Maintain per-unit bookability QA rule.
- **Phase 1 (recommend now, ~days):** (a) Owner/dashboard: connect `book.tinyhomeboutiques.com` custom domain to the booking engine; (b) repoint all site CTAs to branded subdomain + per-unit deep links; (c) confirm fee stack + BE API entitlement with Guesty (open questions below). Zero payment code, immediate UX/brand lift.
- **Phase 2 (~1 week):** ship **3-lite** — Cloudflare Worker (same infra as checkin form) caching read-only Guesty calendar per unit; live availability rendered on our static unit pages; checkout stays on the hosted engine. Fail-open: Worker down → plain CTA still works.
- **Phase 3 (conditional, 3–6 weeks):** full BE-API-native quote + tokenized checkout on-domain — ONLY if Phase 1/2 conversion data justifies it AND the BE API instance is confirmed on our plan AND Owner GO. Widget embed (option 2) is the cheaper middle step if Phase 2 shows on-page availability converts but off-domain checkout leaks.

## 5. Open questions requiring Owner / Guesty-account confirmation
1. Is **Booking Engine API instance** creation available on our plan? Any add-on cost? (Dashboard: Integrations/Marketplace → Booking Engine API.)
2. Exact **fee stack** on a guestybookings.com direct reservation for our account (GuestyPay % + any Guesty booking-engine fee) — pull from a real reservation's financials or Guesty billing.
3. **Custom domain**: confirm dashboard option + DNS records for `book.tinyhomeboutiques.com` (Owner action; CTO can prep one-click link + CNAME values).
4. Payment provider on our account: **GuestyPay vs Stripe** (determines tokenization flow in Phase 3).
5. **Aspen**: when it launches, publish to booking-engine channel day-1 (dashboard action — remember Unit 35 gap).
6. Widget capability check (can request from Guesty support): full checkout in-embed or search-only?

## 6. Non-actions (research-only compliance)
No pricing changes, no Guesty account/setting changes, no deployments, no external messages. All local reads were read-only; secrets located but not printed.
