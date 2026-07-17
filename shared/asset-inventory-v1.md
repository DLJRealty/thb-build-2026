# Asset Inventory v1 — tinyhomeboutiques.com Rebuild (Colorado Only)
**Date:** 2026-07-16 | **Compiled by:** Marketing (survey, read-only)

> **P0 CAVEAT (team rule — feedback_verify_video_clip_content_by_frame_not_filename):**
> Filenames are NOT ground truth (mtn-exterior.mp4 was actually a bathroom). Every entry below is
> **content NOT frame-verified yet**. Before ANY asset ships to the live site, extract frames and
> verify actual content end-to-end (opening frame + within-clip + transitions; watch/listen in full
> for anything with VO per feedback_video_watch_listen_end_to_end_before_delivery).

**Surveyed locations:**
- `~/Desktop/Fully Approved Videos/DLJ Realty/` — subfolders: `Social Media Approved`, `Recent Postings`, `Pending Approval`, plus `Images/` (per-unit photo folders + `Images/Animations/` micro-clips)
- Live site repo: `/Users/dljrealty/Desktop/dlj-properties/websites` (git repo, GitHub Pages)
- Public GitHub-release URLs grepped from `~/.dlj-scripts/*.py` + `~/.dlj-scripts/data/*.json*` + live `index.html`

**Headline finding:** nearly the ENTIRE video library is **9:16 vertical (1080x1920)** — built for social, not web heroes. Only 3 non-vertical assets exist: `higgs-MOTION-hero-pikes-dawn-20260615.mp4` (16:9 brand), `unitx-1x1-fill.mp4` (1:1), `mountain-retreat-promo-1x1-fill.mp4` (1:1). **There is NO per-unit 16:9 hero cut for any unit.** The live site today works around this by embedding vertical GitHub-release videos + hotlinking Guesty CDN photos.

---

## (a) Per-Unit Asset Table

### Unit Y — "Boutique TinyHome w/Direct View of PikesPeak!"
| Asset | Path / URL | Specs | Notes |
|---|---|---|---|
| unity-HERO-showcase-20260614-v2.mp4 | `Pending Approval/` | 1080x1920 (9:16), 29.1s, 30fps, 25MB | Newest hero-grade cut — **still Pending Approval**; content NOT frame-verified yet |
| unit-y-promo.mp4 | `Social Media Approved/` + **public**: `github.com/DLJRealty/tinyhomeboutiques/releases/download/v1.0-promo-videos/unit-y-promo.mp4` | 1080x1920 (9:16), 38.5s, 18MB | Already embedded on live index.html; content NOT frame-verified yet |
| unity-promo-A-blurfill / -voiced-blurfill | `Social Media Approved/` | ~15MB ea (9:16 assumed) | Voiced variant available; content NOT frame-verified yet |
| Public 1:1 + 9:16 animated | `.../v1.0-promo-videos/unit-y-animated-1x1-20260602.mp4` + `unit-y-animated-9x16-20260602.mp4` | public, CDN-able | Only unit with a public **1:1** cut; content NOT frame-verified yet |
| Animations micro-clips (10) | `Images/Animations/unity-*.mp4` (coffee-pikespeak, private-deck, living-room, pikes-panorama, loft-bedroom, bedroom, dining-mountain, interior-loft, open-living, coffee-closeup) | 1–5MB each | Great for section b-roll; `unit-y-photo-01-grok.mp4` is **0 bytes — dead file** |
| **Photos** | `Images/Unit-Y/` — 20 jpgs (photo-01…15 + dupes photo-1…5), 53–182KB | web-friendly sizes | Site repo has NO local Unit Y photos; live page hotlinks Guesty CDN |

### Unit W — "Pikes Peak Boutique Retreat"
| Asset | Path / URL | Specs | Notes |
|---|---|---|---|
| unit-w-hero-20260615.mp4 | `Pending Approval/` | 1080x1920 (9:16), 34.0s, 30fps, 35MB | Newest hero cut — Pending Approval; NOT frame-verified |
| unit-w-promo.mp4 | `Social Media Approved/` + **public**: `.../v1.0-promo-videos/unit-w-promo.mp4` | 1080x1920 (9:16), 35.8s, 25MB | Live on index.html; NOT frame-verified |
| fixed_unit-w-promo.mp4 | `Social Media Approved/` + **public**: `.../v1.0-promo-videos/fixed_unit-w-promo.mp4` | 1080x1920, 28.8s, 12MB | Smaller/faster public option; NOT frame-verified |
| unitw-promo-A-blurfill / -voiced | `Social Media Approved/` | ~15MB ea | NOT frame-verified |
| 2026-04-02-unit-w-reel-v4.mp4 | `Social Media Approved/` + **public**: `.../v3.0-reels/2026-04-02-unit-w-reel-v4.mp4` (+ `v3.0-reels/2026-03-22-unit-w-promo-reel.mp4`) | 10MB | NOT frame-verified |
| Animations micro-clips (12) | `Images/Animations/unitw-*.mp4` + `unit-w-promo{,-A,-B}.mp4` | 2–26MB | dining, snowy-exterior, kitchen-fireplace, bedroom, mountain-deck, stone-bathroom, fireplace-living, full-interior, kitchen-detail, dining-loft; NOT frame-verified |
| **Photos** | `Images/Unit-W/` — 22 jpgs, 20–253KB | web-friendly | No local W photos in site repo |

### Unit X — "Pikes Peak BrightStar Boutique"
| Asset | Path / URL | Specs | Notes |
|---|---|---|---|
| unit-x-hero-20260615.mp4 | `Pending Approval/` | 1080x1920 (9:16), 35.6s, 30fps, 30MB | Newest hero cut — Pending Approval; NOT frame-verified |
| unitx-1x1-fill.mp4 | `Social Media Approved/` | **1080x1080 (1:1)**, 27.2s, 24fps, 15MB | One of only two 1:1 local cuts — best square-format web candidate; NOT frame-verified |
| unit-x-promo / unitx-promo-A | **public**: `.../v1.0-promo-videos/unit-x-promo.mp4`, `unitx-promo-A.mp4`, `fixed_unit-x-promo.mp4` | 9:16 | unit-x-promo live on index.html; NOT frame-verified |
| unitx-9x16-blurfill, unitx-promo-A-voiced-blurfill | `Social Media Approved/` | 14–15MB | NOT frame-verified |
| Animations micro-clips (13) | `Images/Animations/unitx-*.mp4` | 1.8–3.4MB | loft-window, kitchen-wide, firepit-coffee, night-firepit, round-shower, kitchen-sink, kitchen-bar, cozy-living, entry-towels, loft-entertainment; NOT frame-verified |
| **Photos** | `Images/Unit-X/` — 47 jpgs, 54KB–1.0MB | mostly web-friendly | `photo-41.jpg` **1.0MB** + `photo-40.jpg` **593KB** need optimization |

### Unit 33 — "Pikes Peak Heaven's Retreat"
| Asset | Path / URL | Specs | Notes |
|---|---|---|---|
| unit-33-hero-20260615.mp4 | `Pending Approval/` | 1080x1920 (9:16), 30.8s, 30fps, 34MB | Newest hero cut — Pending Approval; NOT frame-verified |
| unit-33-promo.mp4 | `Social Media Approved/` (25MB) + **public**: `.../v1.0-promo-videos/unit-33-promo.mp4` + `fixed_unit-33-promo.mp4` | 9:16 | unit-33-promo live on index.html; NOT frame-verified |
| unit33-promo-A/B blurfill + voiced (4 variants) | `Social Media Approved/` | 19–20MB ea | NOT frame-verified |
| 2026-04-02-unit-33-reel-v4.mp4 | `Social Media Approved/` | 8.2MB | smallest 33 cut; NOT frame-verified |
| Animations micro-clips (11) | `Images/Animations/unit33-*.mp4` | 1.9–4.2MB | wood-kitchen, entry-porch, kitchen-dining, porch-chairs, navy-bedroom, loft-bedroom, pikes-peak, fire-pit, cozy-living, listing-photo-1-living; NOT frame-verified |
| **Photos** | `Images/Unit-33/` — 17 jpgs + `review-grid.jpg`, 37–342KB | web-friendly | listing-photo-1…10 + photo-1…7 dupes |

### Mountain Retreat — "Pikes Peak Mountain Retreat"
| Asset | Path / URL | Specs | Notes |
|---|---|---|---|
| mountain-retreat-hero-20260615-v3.mp4 | `Pending Approval/` | 1080x1920 (9:16), 29.9s, 30fps, 22MB | v3 = post-RCA rebuild (v1 had bathroom-open + doubled-fireplace bug — the ORIGIN of the frame-verify rule). v1/v2 quarantined in `_SUPERSEDED_MR/` — do NOT use. NOT frame-verified |
| mountain-retreat-promo-1x1-fill.mp4 | `Social Media Approved/` | **1080x1080 (1:1)**, 38.3s, 9.9MB | Second of two 1:1 cuts; NOT frame-verified |
| mountain-retreat-promo.mp4 | `Social Media Approved/` + **public**: `.../v1.0-promo-videos/mountain-retreat-promo.mp4` + `mountain-retreat-promo-A.mp4` | 12MB | NOT frame-verified |
| 2026-04-02-mountain-retreat-reel-v5.mp4 | `Social Media Approved/` + **public**: `.../v3.0-reels/2026-04-02-mountain-retreat-reel-v5.mp4` | 7.9MB | NOT frame-verified |
| Animations micro-clips (10) | `Images/Animations/mtn-*.mp4` | 1.4–2.7MB | ⚠️ `mtn-exterior.mp4` KNOWN mislabeled (actually bathroom — RCA 6/15). `mtn-hot-tub.mp4` QUARANTINED (banned amenity) — NEVER use. Others: fireplace-living, open-layout, reading-nook, stone-bathroom, kitchen, living-wide, bedroom, rustic-dining; NOT frame-verified |
| **Photos** | `Images/Mountain-Retreat/` — 38 jpgs, 34–260KB | web-friendly | Good depth |

### Unit 35 — "Woodland Peak Tiny Lodge" ⚠️ GAP
- **Videos: ZERO.** No `unit-35`/`unit35`/`woodland-peak` match anywhere in the approved-videos tree.
- **Photos: ZERO local.** No `Images/Unit-35` folder. Site page `woodland-peak-tiny-lodge.html` exists (12KB, built 6/7) — presumably Guesty-CDN hotlinks only.

### Aspen Lodge Retreat — "Woodland Park Home with Direct Views of Pikes Peak!" (PRE-LAUNCH, opens 2026-06-24 per CLAUDE.md — verify status vs units.json) ⚠️ GAP
- **Videos: ZERO. Photos: ZERO local.** Only asset is the site page `aspen-lodge-retreat.html` (14KB).

---

## (b) Brand-Level Assets

| Asset | Path / URL | Specs | Notes |
|---|---|---|---|
| co-tinyhomes-sizzle-20260615.mp4 | `Pending Approval/` | 1080x1920 (9:16), 43.7s, 30fps, 43MB | All-CO sizzle; a **web version already public**: `.../releases/download/v1.1-sizzle-2026/co-tinyhomes-sizzle-web.mp4` (referenced by live index.html — verify it still 200s). NOT frame-verified |
| higgs-MOTION-hero-pikes-dawn-20260615.mp4 | `Pending Approval/` | **1920x1080 (16:9)**, 8.0s, 2.5MB | **The ONLY 16:9 asset in the library** — prime website hero-background loop candidate (short + small = good for autoplay bg). NOT frame-verified |
| master-all-units-promo.mp4 | `Social Media Approved/` (39MB) + **public**: `.../v1.0-promo-videos/master-all-units-promo.mp4` | 1080x1920, 59.7s, 24fps | Live on index.html; NOT frame-verified |
| fixed_master-all-units-promo long.mp4 / 2026-03-30-master-all-units-reel short.mp4 | `Social Media Approved/` | 20MB / 15MB | long+short brand cuts; NOT frame-verified |
| Brand logos | `Images/Brand/dlj-logo-website.jpg` (53K), `dlj-realty-logo.jpg` (29K) | | JPG only — no transparent PNG/SVG logo exists |
| Scenery/photo animations (~35 clips) | `Images/Animations/photo-*.mp4` incl. `photo-pikes-peak.mp4` | 1.4–6.6MB ea | Unit-unattributed b-roll; NOT frame-verified |
| Higgs stills (3) | `Pending Approval/higgs-20260614-16*.png` | 1.7–1.9MB ea | Oversized for web as-is |

**Live-site image reality check:** the current `index.html` hotlinks **Guesty CDN** (`assets.guesty.com/...jpg`) for all CO photos — there are **zero local CO images in the repo** (`preview/assets/` is Miami-only). Rebuild should decide: keep Guesty hotlinks (fragile, uncontrolled) vs. copy the local `Images/<Unit>/` sets into the repo (recommended — sizes are already web-friendly).

---

## (c) GAPS

1. **Woodland Peak Tiny Lodge (Unit 35): NO video, NO local photos.** CONFIRMED thin. Needs Guesty photo pull + new hero cut before its rebuild page can match the others.
2. **Aspen Lodge Retreat: NO assets at all** (pre-launch). CONFIRMED thin. Needs full asset production for launch page.
3. **NO 16:9 per-unit hero cuts for ANY unit** — everything is 9:16 social vertical. Website hero backgrounds will require re-cuts (or design the site around vertical video / the 8s 16:9 pikes-dawn brand loop).
4. Only two 1:1 cuts exist (Unit X, Mountain Retreat). Unit Y has public 1:1; W and 33 have none.
5. The 20260615 hero series (Y/W/X/33/MR — the best per-unit cuts) sits in **Pending Approval**, not approved.
6. No transparent-background logo (PNG/SVG) for the site header.
7. `Images/Animations/unit-y-photo-01-grok.mp4` is 0 bytes (dead file — flag to CTO, do not delete ourselves).

## (d) Optimization To-Dos

- **>500KB images:** `Images/Unit-X/photo-41.jpg` (1.0MB), `Images/Unit-X/photo-40.jpg` (593KB) — compress/resize before web use. (Site repo itself has no oversized local images — Miami previews all <215KB.)
- **Web hero videos:** all candidate videos are 22–43MB source files — too heavy for direct embed. Need web-optimized transcodes (H.264, ~2–5Mbps, muted, + poster jpg) and/or use existing public GitHub-release URLs as the CDN. Precedent exists: `co-tinyhomes-sizzle-web.mp4` in `v1.1-sizzle-2026` release.
- **Create 16:9 hero cuts per unit** (re-frame from source or new renders) — the single biggest asset gap for a website rebuild.
- **Higgs PNG stills** (1.7–1.9MB) → convert to webp/jpg ≤300KB if used.
- Decide Guesty-CDN-hotlink vs local-images strategy; if local, dedupe the `photo-1.jpg`/`photo-01.jpg` duplicate pairs in Unit-Y/W/X/33 folders.
- Media URLs must curl 200 publicly before any page ships (feedback_media_url_200_pregate + feedback_curl_before_live_claim).

## (e) EXCLUDED — Miami (not for this site; P0 CO-only constraint)

- `Recent Postings/miami-m1-arcade-promo.mp4` (21MB) — EXCLUDED (Miami — not for this site)
- `Social Media Approved/miami-m1-arcade-promo.mp4` (+ .meta.json) — EXCLUDED (Miami — not for this site)
- `Pending Approval/miami-dayhero-desktop-16x9-20260622.mp4` (4.1MB), `miami-dayhero-mobile-9x16-20260622.mp4` (2.3MB), `miami-dayhero-poster-20260622.jpg` (269K) — EXCLUDED (Miami — not for this site)
- `Pending Approval/higgs-20260622-140445-1.mp4` (1168x768, 5.4s) — same 6/22 Miami batch; treat as EXCLUDED (Miami — not for this site) pending frame-verify
- `Pending Approval/_RETIRED_ARCADE/` (3 files) — EXCLUDED (Miami, retired)
- `Images/Miami/` (5 jpgs) — EXCLUDED (Miami — not for this site)
- Site repo `preview/assets/miami/` (m1/m2/mb photo sets + m1-arcade-promo.mp4) — EXCLUDED (Miami — not for this site)
- Public URL `.../v1.0-promo-videos/miami-m1-arcade-promo.mp4` — EXCLUDED (Miami — not for this site)

## Quarantined / Do-NOT-Use (all units)
- `Social Media Approved/_quarantine_letterboxed_20260609/` — 16 letterboxed cuts, quarantined
- `Pending Approval/_SUPERSEDED_MR/` — MR hero v1/v2 (bathroom-open / doubled-fireplace RCA)
- `Images/Animations/_QUARANTINE_BANNED_AMENITY_20260615/mtn-hot-tub.mp4` — banned amenity (NO hot tubs)

## Public GitHub-Release URL Master List (CDN-able, already public — CO only)
```
v1.0-promo-videos: unit-y-promo.mp4, unit-y-animated-1x1-20260602.mp4, unit-y-animated-9x16-20260602.mp4,
  unit-w-promo.mp4, fixed_unit-w-promo.mp4, unit-x-promo.mp4, unitx-promo-A.mp4, fixed_unit-x-promo.mp4,
  unit-33-promo.mp4 (index.html), fixed_unit-33-promo.mp4, mountain-retreat-promo.mp4, mountain-retreat-promo-A.mp4,
  master-all-units-promo.mp4
v3.0-reels: 2026-03-22-unit-w-promo-reel.mp4, 2026-04-02-unit-w-reel-v4.mp4, 2026-04-02-mountain-retreat-reel-v5.mp4
v1.1-sizzle-2026: co-tinyhomes-sizzle-web.mp4 (referenced by live index.html)
Base: https://github.com/DLJRealty/tinyhomeboutiques/releases/download/<tag>/<file>
(All URLs must be curl-200 verified before use.)
```
