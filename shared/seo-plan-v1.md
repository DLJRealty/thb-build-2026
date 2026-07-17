# SEO Plan v1 — tinyhomeboutiques.com Rebuild
**Date:** 2026-07-16 | **Author:** Marketing (SEO strategist) | **Scope:** Colorado ONLY (Miami excluded per Owner decision 2026-06-07)
**Goal #1:** Direct bookings for 7 Woodland Park, CO homes (6 tiny homes + 1 full home pre-launch).
**Platform:** Static HTML on GitHub Pages, CNAME tinyhomeboutiques.com (repo: `/Users/dljrealty/Desktop/dlj-properties/websites`, push-to-main = deploy).

**Hard constraints honored throughout:**
- Property names VERBATIM from units.json SSOT (v2.4.0).
- NO pricing or % claims in any meta copy (titles/descriptions).
- Dog-friendly / pet-friendly is UNVERIFIED in units.json `amenities_verified` → **EXCLUDED from all targeting**. Same for hot tubs (explicitly prohibited).
- Verified amenity claims only: gas fire pit (Y/W/X/33/MR), direct Pikes Peak view (Y), panoramic mountain views (MR). Unit 35 + Aspen Lodge have empty verified lists — views/amenity language stays generic ("Woodland Park," "mountain setting") until verified.
- Brand social proof allowed: Airbnb Superhost, 1,000+ five-star reviews (Owner-overridden public claim — do NOT "correct" to 879).
- aggregateRating schema ONLY for units with 85+ reviews (Y=293, W=139, X=140, 33=85). NEVER for Pikes Peak Mountain Retreat (1 review), Woodland Peak Tiny Lodge (0), Aspen Lodge (0).

---

## 1. KEYWORD MAP

Intent: **T** = transactional, **I** = informational. Difficulty (est): L / M / H for a niche local SERP.

### Homepage — `/` (index.html)
| Keyword | Role | Intent | Diff |
|---|---|---|---|
| woodland park tiny homes | PRIMARY | T | L-M |
| woodland park cabins | PRIMARY | T | M |
| tiny homes near pikes peak | SECONDARY | T | L |
| tiny home boutiques (brand) | SECONDARY | T | L |
| woodland park vacation rentals | SECONDARY | T | M |
| pikes peak vacation rentals | SECONDARY | T | M |
| boutique tiny home colorado | LONG-TAIL | T | L |

### Unit pages (7)
Each unit page primaries on **its verbatim name (brand-nav capture)** + one differentiated modifier keyword so the 7 pages don't cannibalize each other:

| Page | Primary | Secondary / long-tail | Intent | Diff |
|---|---|---|---|---|
| **Boutique TinyHome w/Direct View of PikesPeak!** (Unit Y) | boutique tinyhome pikes peak view | tiny home with pikes peak view, mountain view cabin woodland park | T | L |
| **Pikes Peak Boutique Retreat** (Unit W) | pikes peak boutique retreat | romantic tiny home colorado, couples getaway woodland park | T | L |
| **Pikes Peak BrightStar Boutique** (Unit X) | pikes peak brightstar boutique | stargazing cabin colorado, tiny home stargazing pikes peak | T | L |
| **Pikes Peak Heaven's Retreat** (Unit 33) | pikes peak heaven's retreat | quiet mountain retreat woodland park, tiny home with fire pit | T | L |
| **Pikes Peak Mountain Retreat** | pikes peak mountain retreat | panoramic mountain view rental woodland park | T | L |
| **Woodland Peak Tiny Lodge** (Unit 35) | woodland peak tiny lodge | tiny home sleeps 6 colorado, family tiny home woodland park | T | L |
| **Woodland Park Home with Direct Views of Pikes Peak!** (Aspen Lodge, pre-launch) | woodland park home pikes peak view | woodland park house rental, full home rental woodland park | T | L-M |

> Cannibalization guard: "pikes peak" + "tiny home" appear on every unit page — the differentiated modifier (view / romantic / stargazing / fire pit / sleeps-6 / full home) is what each page uniquely owns. Homepage owns the head terms; unit pages never lead a title with a head term.
> Dog-friendly long-tail: **EXCLUDED** (unverified amenity). Revisit only if Owner/Ops verify pet policy into units.json.

### Area guide — `/tiny-homes-near-pikes-peak.html` (hub)
| Keyword | Role | Intent | Diff |
|---|---|---|---|
| tiny homes near pikes peak | PRIMARY | T/I | L |
| pikes peak stays | SECONDARY | T | M |
| pikes peak lodging | SECONDARY | T | M-H |
| garden of the gods lodging | SECONDARY (supported by existing dedicated page) | T | M |
| colorado springs tiny home getaway | SECONDARY | T | L |
| where to stay near pikes peak | LONG-TAIL | I | M |

### Book-direct page — `/woodland-park-airbnb-direct-booking.html`
| Keyword | Role | Intent | Diff |
|---|---|---|---|
| woodland park airbnb direct booking | PRIMARY | T | L |
| book direct woodland park vacation rental | SECONDARY | T | L |
| airbnb alternatives woodland park | LONG-TAIL | T | L |

### About — `/about.html` (NET-NEW in rebuild)
| Keyword | Role | Intent | Diff |
|---|---|---|---|
| tiny home boutiques (brand) | PRIMARY | I | L |
| airbnb superhost woodland park | SECONDARY | I | L |

### FAQ — `/faq.html` (NET-NEW in rebuild)
| Keyword | Role | Intent | Diff |
|---|---|---|---|
| woodland park tiny home rental questions | PRIMARY | I | L |
| what is it like staying in a tiny home | SECONDARY | I | L-M |
| woodland park altitude / weather for visitors | LONG-TAIL (FAQ entries) | I | L |

### Cluster → page assignment (summary)
- "woodland park cabins" → homepage + existing `/woodland-park-cabin-rentals.html` (keep; supporting page)
- "woodland park tiny homes" → homepage
- "tiny homes near pikes peak" → area guide hub
- "pikes peak vacation rentals / stays" → area guide + homepage secondary
- "woodland park vacation rentals" → homepage secondary
- "colorado springs tiny home getaway" → area guide secondary now; dedicated page later (see §5)
- "garden of the gods lodging" → existing `/garden-of-the-gods-lodging.html` (keep)
- Romantic getaway → Unit W page + existing `/romantic-pikes-peak-getaway.html`
- Stargazing → Unit X page + existing `/colorado-stargazing-getaways.html`
- Mountain view cabin → Unit Y page
- Fire pit → Unit 33 page + existing `/pikes-peak-tiny-home-with-fire-pit.html`

---

## 2. META PLAN — actual strings (title ≤60 chars, description ≤155 chars, no pricing/% claims)

**Homepage `/`**
- Title (58): `Tiny Home Boutiques | Woodland Park Cabins Near Pikes Peak`
- Desc (152): `Boutique tiny homes in Woodland Park, CO with Pikes Peak views. Airbnb Superhost, 1,000+ five-star reviews. Book direct at tinyhomeboutiques.com.`

**Unit Y — Boutique TinyHome w/Direct View of PikesPeak!**
- Title (59): `Boutique TinyHome w/Direct View of PikesPeak! | Book Direct`
- Desc (146): `Wake up to a direct Pikes Peak view. Design-forward tiny home in Woodland Park, CO with gas fire pit. 293 Airbnb reviews, 4.9 rating. Book direct.`

**Unit W — Pikes Peak Boutique Retreat**
- Title (58): `Pikes Peak Boutique Retreat | Tiny Home in Woodland Park CO`
- Desc (147): `A romantic boutique tiny home in Woodland Park, Colorado. Gas fire pit, mountain air, minutes from Pikes Peak. 139 five-star-level Airbnb reviews.`

**Unit X — Pikes Peak BrightStar Boutique**
- Title (56): `Pikes Peak BrightStar Boutique | Woodland Park Tiny Home`
- Desc (145): `Stargazing-perfect boutique tiny home in Woodland Park, CO. Gas fire pit under dark Colorado skies near Pikes Peak. 140 Airbnb reviews. Book direct.`

**Unit 33 — Pikes Peak Heaven's Retreat**
- Title (54): `Pikes Peak Heaven's Retreat | Woodland Park Tiny Home`
- Desc (139): `A quiet, well-reviewed tiny home retreat in Woodland Park, Colorado with gas fire pit, near Pikes Peak. Book your mountain escape direct.`

**Pikes Peak Mountain Retreat**
- Title (53): `Pikes Peak Mountain Retreat | Woodland Park Tiny Home`
- Desc (140): `Panoramic mountain views from a brand-new tiny home in Woodland Park, CO. Gas fire pit, crisp Colorado air, near Pikes Peak. Book direct.`
- (No review/rating claim — 1 review.)

**Woodland Peak Tiny Lodge**
- Title (60): `Woodland Peak Tiny Lodge | Sleeps 6 Tiny Home, Woodland Park`
- Desc (139): `Our roomiest tiny home — Woodland Peak Tiny Lodge sleeps 6 in Woodland Park, Colorado near Pikes Peak. Ideal for families. Book direct.`
- (No review/rating claim — 0 reviews.)

**Aspen Lodge Retreat — Woodland Park Home with Direct Views of Pikes Peak!** (pre-launch)
- Title (57): `Woodland Park Home with Direct Views of Pikes Peak! | New`
- Desc (141): `Our newest stay: a full Woodland Park, Colorado home with direct Pikes Peak views, sleeps 6. Opening summer 2026 — book your dates direct.`
- (Full HOME, not tiny home — taxonomy-correct. No review claims.)

**Area guide `/tiny-homes-near-pikes-peak.html`**
- Title (54): `Tiny Homes Near Pikes Peak | Woodland Park Stay Guide`
- Desc (150): `Compare 7 boutique stays near Pikes Peak in Woodland Park, CO — tiny homes and a full home. Superhost-run, 1,000+ five-star reviews. Book direct.`

**Book-direct `/woodland-park-airbnb-direct-booking.html`**
- Title (52): `Book Direct | Woodland Park Tiny Home Vacation Rentals`
- Desc (150): `Book your Woodland Park tiny home directly with the Superhost team behind 1,000+ five-star Airbnb reviews. Real humans, fast answers, best flexibility.`

**About `/about.html`**
- Title (59): `About Tiny Home Boutiques | Airbnb Superhost, Woodland Park`
- Desc (145): `The story behind Tiny Home Boutiques: design-forward tiny homes in Woodland Park, CO, run by an Airbnb Superhost team with 1,000+ five-star reviews.`

**FAQ `/faq.html`**
- Title (45): `FAQ | Tiny Home Boutiques, Woodland Park CO`
- Desc (144): `Answers on staying in our Woodland Park tiny homes: check-in, altitude, winter driving, what's included, and how direct booking works.`

> Rounding rule applies in visible copy: never 4.89-style precision — 4.9/4.9+ (per feedback_review_score_rounding.md). JSON-LD uses exact units.json values (schema must match verifiable data).

---

## 3. SCHEMA PLAN (JSON-LD)

| Page | Types |
|---|---|
| Homepage | `LodgingBusiness` (brand) + `WebSite` |
| Each unit page | `VacationRental` + `BreadcrumbList`; `aggregateRating` ONLY on Y / W / X / 33 |
| Area guide | `CollectionPage` + `ItemList` (links to 7 units) + `BreadcrumbList` |
| Book-direct | `WebPage` + `BreadcrumbList` |
| About | `AboutPage` + `BreadcrumbList` |
| FAQ | `FAQPage` (Question/Answer pairs) + `BreadcrumbList` |
| Info/content pages | `Article` or `TouristAttraction` mentions + `BreadcrumbList` |

**aggregateRating rules (P0):**
- Include ONLY where `airbnb_reviews_count >= 85` in units.json: Unit Y (4.91/293), Unit W (4.96/139), Unit X (4.91/140), Unit 33 (4.79/85).
- NEVER on Pikes Peak Mountain Retreat (1 review), Woodland Peak Tiny Lodge (0), Aspen Lodge Retreat (0). Thin/absent ratings in schema risk a structured-data manual action and look fake.
- Values come from units.json at build time — when refresh-units-json.sh updates counts, re-sync schema (brand block via `~/.dlj-scripts/update-site-review-count.py` is per-unit-safe; per-unit blocks updated by hand).

**Homepage example — LodgingBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://tinyhomeboutiques.com/#brand",
  "name": "Tiny Home Boutiques",
  "url": "https://tinyhomeboutiques.com/",
  "description": "Boutique tiny home vacation rentals in Woodland Park, Colorado, near Pikes Peak. Airbnb Superhost-run, design-forward stays.",
  "image": "https://tinyhomeboutiques.com/images/brand/hero-pikes-peak.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Woodland Park",
    "addressRegion": "CO",
    "postalCode": "80863",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 38.9939, "longitude": -105.0569 },
  "areaServed": "Woodland Park, Colorado",
  "sameAs": [
    "https://www.instagram.com/dlj_properties",
    "https://www.pinterest.com/dljrealty",
    "https://x.com/DljRealty"
  ]
}
```

**Unit page example — Pikes Peak Boutique Retreat (Unit W, 139 reviews → aggregateRating allowed):**
```json
{
  "@context": "https://schema.org",
  "@type": "VacationRental",
  "@id": "https://tinyhomeboutiques.com/unit-w-pikes-peak-retreat.html#rental",
  "name": "Pikes Peak Boutique Retreat",
  "url": "https://tinyhomeboutiques.com/unit-w-pikes-peak-retreat.html",
  "description": "A romantic boutique tiny home in Woodland Park, Colorado with gas fire pit, minutes from Pikes Peak.",
  "image": [
    "https://tinyhomeboutiques.com/images/unit-w/exterior-1.jpg",
    "https://tinyhomeboutiques.com/images/unit-w/interior-1.jpg"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Woodland Park",
    "addressRegion": "CO",
    "postalCode": "80863",
    "addressCountry": "US"
  },
  "containedInPlace": { "@id": "https://tinyhomeboutiques.com/#brand" },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Gas fire pit", "value": true }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.96,
    "reviewCount": 139,
    "bestRating": 5
  }
}
```
For MR / Unit 35 / Aspen Lodge: identical block **minus `aggregateRating` entirely** (no empty/zero rating objects). `amenityFeature` only from `amenities_verified` — Unit 35 and Aspen Lodge currently get NO amenityFeature array.

**BreadcrumbList example (unit page):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tinyhomeboutiques.com/" },
    { "@type": "ListItem", "position": 2, "name": "Tiny Homes Near Pikes Peak", "item": "https://tinyhomeboutiques.com/tiny-homes-near-pikes-peak.html" },
    { "@type": "ListItem", "position": 3, "name": "Pikes Peak Boutique Retreat", "item": "https://tinyhomeboutiques.com/unit-w-pikes-peak-retreat.html" }
  ]
}
```

**FAQPage:** standard `mainEntity` array of `Question`/`acceptedAnswer` — only questions that appear verbatim as visible text on the page. Suggested seed Qs: check-in/checkout, altitude (8,465 ft) tips, winter driving to Woodland Park, what's provided, how book-direct works, distance to Pikes Peak / Garden of the Gods.

---

## 4. TECHNICAL

### 4.1 URL slugs — keep-or-redirect (REBUILD RULE: slugs are equity; default = KEEP)
GitHub Pages **cannot serve true server-side 301s**. Redirect options are: (a) keep the slug (preferred, zero loss), (b) meta-refresh(0) stub + `rel=canonical` to the new URL + `<a>` fallback — the pattern already live at `unit-w-brightstar-boutique.html`. Treat meta-refresh stubs as a last resort; Google treats meta-refresh(0)+canonical as a permanent-redirect signal but it's weaker/slower than a 301.

| Current live slug | Rebuild action |
|---|---|
| `index.html` | KEEP |
| `unit-y-boutique-tinyhome.html` | KEEP |
| `unit-w-pikes-peak-retreat.html` | KEEP (real Unit W page) |
| `unit-x-brightstar-boutique.html` | KEEP (real Unit X page) |
| `unit-w-brightstar-boutique.html` | KEEP AS-IS — existing redirect stub → unit-x page (W/X slug-swap history; do NOT delete, it holds inbound equity) |
| `unit-x-pikes-peak-retreat.html` | KEEP AS-IS — verify it's a stub → unit-w page; do not delete |
| `unit-33-heavens-retreat.html` | KEEP |
| `mountain-retreat-woodland-park.html` | KEEP |
| `woodland-peak-tiny-lodge.html` | KEEP |
| `aspen-lodge-retreat.html` | KEEP (pre-launch page; flip content at launch, same slug) |
| `tiny-homes-near-pikes-peak.html` | KEEP — becomes the hub/area guide |
| `woodland-park-airbnb-direct-booking.html` | KEEP — becomes the book-direct page |
| `woodland-park-cabin-rentals.html`, `garden-of-the-gods-lodging.html`, `pikes-peak-lodging-near-me.html`, `pikes-peak-tiny-home-with-fire-pit.html`, `romantic-pikes-peak-getaway.html`, `colorado-stargazing-getaways.html`, `pikes-peak-cog-railway-stays.html`, `cripple-creek-area-lodging.html`, `things-to-do-woodland-park-colorado.html`, `tiny-home-vacation-rental-colorado.html`, `guide.html`, `blog.html`, `links.html`, policy pages | KEEP ALL — these are the ranking long-tail pages; rebuild restyles them, never renames them |
| `about.html`, `faq.html` | NET-NEW (no equity concern) |
| `404.html`, `google*.html` verification files, `robots.txt`, `CNAME` | KEEP untouched — deleting Google verification files breaks Search Console |

Additional rules:
- **NEVER change a slug for aesthetics.** Any rename = permanent equity tax on a no-301 host.
- Repo hygiene: `git fetch && git reset --hard origin/main` BEFORE the rebuild branch (stale-local gotcha per reference_website_repo_and_review_count_tool.md). Purge `index.html.bak` / `index.html.regen-candidate` / `sitemap.xml.candidate` from the deployed tree (or exclude via build) — .bak files get crawled.
- Every page: exactly one `<link rel="canonical">` self-reference (absolute https://tinyhomeboutiques.com URL).

### 4.2 Internal-linking model
- **Hub:** `tiny-homes-near-pikes-peak.html` links to all 7 unit pages with descriptive anchor text (the verbatim property name + a modifier, e.g. "Pikes Peak BrightStar Boutique — our stargazing favorite").
- **Every unit page links:** up to the hub, sideways to 2 sibling units ("Guests also compare…"), and to the book-direct page with a prominent CTA.
- **Every page → book-direct page** (`woodland-park-airbnb-direct-booking.html`) at least once in body + persistent header/footer "Book Direct" CTA.
- **Info pages** (things-to-do, garden-of-the-gods, stargazing, romantic, cog-railway, cripple-creek) each link to the hub + the 1-2 most topically-matched unit pages (stargazing→Unit X, romantic→Unit W, fire-pit→Unit 33) — this is where informational traffic converts.
- Homepage links: hub, all 7 units (card grid), book-direct, top 3 info pages. Footer: full page list (flat site = every page ≤2 clicks from home).

### 4.3 Image alt-text convention
Pattern: `"[verbatim property name] — [specific descriptor], Woodland Park CO"`
- `alt="Pikes Peak Boutique Retreat — gas fire pit at dusk, Woodland Park CO"`
- `alt="Boutique TinyHome w/Direct View of PikesPeak! — bedroom window framing Pikes Peak"`
- Scenery/brand shots: `alt="Pikes Peak at sunrise seen from Woodland Park, Colorado"`.
- Never keyword-stuff; one property name per alt; only verified amenities in descriptors (no hot tub, no pets, no wood fire).

### 4.4 sitemap.xml + robots.txt
- Regenerate `sitemap.xml` at rebuild ship: all canonical pages, EXCLUDE redirect stubs (`unit-w-brightstar-boutique.html`, `unit-x-pikes-peak-retreat.html` if stub), policy pages optional, exclude `links.html`, google-verification files, 404. `<lastmod>` = real file ship date.
- `robots.txt`: `Allow: /` everything; `Sitemap: https://tinyhomeboutiques.com/sitemap.xml` line; `Disallow: /preview/` and `/seo/` if those dirs aren't public-intended (both exist in repo — audit before ship).
- Submit sitemap in Search Console post-deploy (verification files already in place); request indexing on the 7 unit pages + hub.

### 4.5 Core Web Vitals (static-site playbook)
- **LCP:** hero image as compressed `.webp` (≤200KB), `<link rel="preload" as="image">`, explicit `width`/`height` (or aspect-ratio CSS) on ALL imgs to kill CLS.
- **Lazy-load:** `loading="lazy"` on every below-fold image; NEVER on the LCP/hero image.
- **Video:** never autoload; `preload="none"` + `poster=` frame (poster doubles as the LCP-safe visual); or click-to-load thumbnail linking to the GitHub-releases MP4. Verify poster frame actually matches clip content (frame-extract rule, P0 6/15).
- **Fonts:** system-font stack preferred; if webfont, self-host WOFF2 + `font-display: swap` + preload — no Google Fonts render-blocking CSS chain.
- **CSS/JS:** single minified `styles.css`; inline critical above-fold CSS if hero is style-dependent; zero render-blocking JS (static site needs almost none — defer everything).
- GitHub Pages already serves HTTP/2 + caching headers; keep total page weight <1MB per page.

---

## 5. CONTENT-GAP LIST (build over time, 1-2/month)

Already live (do NOT duplicate): things-to-do-woodland-park, garden-of-the-gods-lodging, romantic-pikes-peak-getaway, colorado-stargazing-getaways, pikes-peak-cog-railway-stays, cripple-creek-area-lodging, pikes-peak-tiny-home-with-fire-pit, woodland-park-cabin-rentals.

1. **Pikes Peak Visitor Guide** (`pikes-peak-visitor-guide.html`) — targets: "pikes peak visitor guide", "how to visit pikes peak", "pikes peak highway vs cog railway". Hub for the cog-railway page; strongest informational magnet; links to all units.
2. **Winter in Woodland Park** (`winter-woodland-park-colorado.html`) — targets: "woodland park winter activities", "colorado winter cabin getaway", "snow tubing near colorado springs". Seasonal (publish Sept-Oct); converts to cozy fire-pit unit pages (33, W).
3. **Fall Aspen Viewing Near Pikes Peak** (`fall-colors-pikes-peak.html`) — targets: "fall colors pikes peak", "aspen viewing colorado springs area", "best time fall colors woodland park". Seasonal (publish July-Aug); natural tie-in for Aspen Lodge Retreat launch content.
4. **Tiny Home Getaway Near Colorado Springs** (`colorado-springs-tiny-home-getaway.html`) — targets: "colorado springs tiny home getaway", "tiny house rental near colorado springs", "weekend getaway from colorado springs". Transactional landing page for the metro feeder market (30 min away) — highest direct-booking ROI on this list.
5. **Mueller State Park & Dome Rock Guide** (`mueller-state-park-guide.html`) — targets: "mueller state park camping alternatives", "mueller state park hiking", "where to stay near mueller state park". Low competition, 10 min from the units, zero OTA presence on this term.

**Measurement:** GA4 (existing script per reference_google_analytics.md) + Search Console queries monthly; KPI = direct-booking sessions landing on unit pages + book-direct page, not raw traffic.

---
*SSOT note: all names/counts/amenities in this plan pulled from `/Users/dljrealty/.dlj-scripts/data/units.json` v2.4.0 on 2026-07-16. Re-verify against units.json before every implementation write.*
