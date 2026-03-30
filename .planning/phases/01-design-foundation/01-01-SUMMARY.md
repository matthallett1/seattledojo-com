---
phase: 01-design-foundation
plan: "01"
subsystem: ui
tags: [images, assets, next-image, typescript, manifest]

# Dependency graph
requires: []
provides:
  - 13 curated dojo images in public/images/ with clean kebab-case filenames
  - typed IMAGES manifest (public/images/manifest.ts) with actual pixel dimensions
  - ImageKey type for typed image lookups
affects:
  - 01-02-design-tokens
  - 02-homepage
  - 02-history
  - 02-instructors
  - 02-kids

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Image manifest pattern: typed const object with src/alt/width/height per image — import IMAGES.hero instead of remembering filenames"

key-files:
  created:
    - public/images/manifest.ts
    - public/images/alan-yamada.jpg
    - public/images/dojo-interior-1.jpg
    - public/images/dojo-interior-2.jpg
    - public/images/dojo-interior-3.jpg
    - public/images/dojo-interior-upstairs.jpg
    - public/images/dojo-exterior-1.jpg
    - public/images/dojo-exterior-2.jpg
    - public/images/dojo-exterior-sign.jpg
    - public/images/dojo-exterior-evening.jpg
    - public/images/students-action-1.jpg
    - public/images/students-action-2.jpg
    - public/images/kids-activities.jpg
    - public/images/plaque.png
  modified: []

key-decisions:
  - "Used Seattle-Dojo-Interior.jpg for dojo-exterior-2.jpg — plan referenced cropped-Seattle-Dojo-Interior.jpg which was absent from source"
  - "Used Seattle-Dojo-Students-Action-2.jpg for students-action-2.jpg — plan referenced -2-1 variant which was absent"
  - "Updated manifest dimensions to actual pixel values verified via file command (not estimates from plan)"

patterns-established:
  - "Image manifest pattern: public/images/manifest.ts exports IMAGES const for typed imports in page components"

requirements-completed:
  - IMG-01
  - IMG-02

# Metrics
duration: 4min
completed: 2026-03-30
---

# Phase 01 Plan 01: Image Curation Summary

**13 original-resolution dojo photographs copied to public/images/ with kebab-case filenames and a typed TypeScript manifest with verified pixel dimensions**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-30T20:14:15Z
- **Completed:** 2026-03-30T20:18:19Z
- **Tasks:** 2
- **Files modified:** 14

## Accomplishments

- 13 curated dojo images placed in public/images/ — instructor portrait, 4 interior shots, 4 exterior shots, 2 student action shots, kids activities, and plaque PNG
- No WordPress thumbnail variants (300x/768x/1024x) present — Next.js Image handles responsive sizing
- TypeScript manifest exports typed IMAGES const with actual pixel dimensions verified from files — no estimates
- Source files in content/images/2017/09/ remain untouched

## Task Commits

1. **Task 1: Copy curated originals to public/images/** - `889ae81` (feat) — images were committed by parallel 01-02 agent during wave execution
2. **Task 2: Create images manifest file** - `23a586e` (feat)

**Plan metadata:** (see final commit hash below)

## Files Created/Modified

- `public/images/manifest.ts` — Typed IMAGES const with src/alt/width/height for all 12 named image entries; ImageKey type exported
- `public/images/alan-yamada.jpg` — Instructor portrait (1500x1000)
- `public/images/dojo-interior-1.jpg` — Interior shot (960x720)
- `public/images/dojo-interior-2.jpg` — Interior shot portrait (638x960)
- `public/images/dojo-interior-3.jpg` — Primary interior hero shot (2000x1200)
- `public/images/dojo-interior-upstairs.jpg` — Upstairs view (2000x1200)
- `public/images/dojo-exterior-1.jpg` — Exterior building (1500x1001)
- `public/images/dojo-exterior-2.jpg` — Exterior/interior (1500x1000)
- `public/images/dojo-exterior-sign.jpg` — Exterior sign (1500x1001)
- `public/images/dojo-exterior-evening.jpg` — Evening exterior (2000x1241)
- `public/images/students-action-1.jpg` — Students throwing (1500x1000)
- `public/images/students-action-2.jpg` — Students randori (1500x1000)
- `public/images/kids-activities.jpg` — Kids program (2000x1200)
- `public/images/plaque.png` — Dojo plaque PNG (250x250)

## Decisions Made

- Used Seattle-Dojo-Interior.jpg for dojo-exterior-2.jpg since the plan's referenced cropped-Seattle-Dojo-Interior.jpg did not exist in the source directory
- Used Seattle-Dojo-Students-Action-2.jpg for students-action-2.jpg since the plan's referenced -2-1 variant was absent
- Updated all manifest dimensions to actual pixel values from `file` command output — more accurate than the plan's estimates

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Source filename mismatch for dojo-exterior-2.jpg**
- **Found during:** Task 1 (Copy curated originals)
- **Issue:** Plan referenced `cropped-Seattle-Dojo-Interior.jpg` which does not exist in content/images/2017/09/. Available files: `Seattle-Dojo-Interior.jpg` (uncropped) and `cropped-Seattle-Dojo-Interior-2.jpg` (different image)
- **Fix:** Used `Seattle-Dojo-Interior.jpg` — the non-thumbnail original with no dimension suffix
- **Files modified:** public/images/dojo-exterior-2.jpg
- **Verification:** File is valid JPEG, 1500x1000 pixels
- **Committed in:** 889ae81 (Task 1 commit by parallel agent)

**2. [Rule 1 - Bug] Source filename mismatch for students-action-2.jpg**
- **Found during:** Task 1 (Copy curated originals)
- **Issue:** Plan referenced `Seattle-Dojo-Students-Action-2-1.jpg` which does not exist in source. Available: `Seattle-Dojo-Students-Action-2.jpg`
- **Fix:** Used `Seattle-Dojo-Students-Action-2.jpg` — the correct original without the erroneous `-1` suffix
- **Files modified:** public/images/students-action-2.jpg
- **Verification:** File is valid JPEG, 1500x1000 pixels
- **Committed in:** 889ae81 (Task 1 commit by parallel agent)

**3. [Rule 1 - Bug] Manifest dimensions updated from estimates to actual**
- **Found during:** Task 2 (Create images manifest)
- **Issue:** Plan provided estimated dimensions (e.g., 1024x683 for most images). Actual dimensions differ significantly — dojo-interior-3.jpg is 2000x1200 not 1024x614, dojo-exterior-evening.jpg is 2000x1241 not 1024x635, etc.
- **Fix:** Read actual dimensions via `file` command for all 13 images and used verified values
- **Files modified:** public/images/manifest.ts
- **Verification:** All values match `file` command output
- **Committed in:** 23a586e (Task 2 commit)

---

**Total deviations:** 3 auto-fixed (all Rule 1 - Bug: source filename mismatches and inaccurate dimension estimates)
**Impact on plan:** All fixes necessary for correctness. dojo-exterior-2 and students-action-2 images needed valid source files. Accurate dimensions prevent CLS (Cumulative Layout Shift) in Next.js Image component.

## Issues Encountered

- Images were committed as part of parallel agent wave execution (plan 01-02 agent committed them alongside Section component in commit 889ae81). This is expected parallel execution behavior — the images exist correctly in the repository regardless of which agent's commit included them.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- All 13 dojo images are in public/images/ with clean filenames — Phase 2 page components can reference them immediately
- manifest.ts provides typed IMAGES.hero, IMAGES.alanYamada, etc. — no guessing filenames
- Accurate pixel dimensions prevent layout shift in Next.js Image component
- No blockers for Phase 2 content pages

---
*Phase: 01-design-foundation*
*Completed: 2026-03-30*
