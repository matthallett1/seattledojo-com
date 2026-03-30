---
phase: 02-content-pages
plan: "03"
subsystem: ui
tags: [next.js, tailwind, typescript, pages, schedule, membership, instructors]

# Dependency graph
requires:
  - phase: 02-content-pages
    provides: Section component, image manifest, layout, homepage patterns
provides:
  - Instructors page listing all 22 instructors in a responsive grid with featured Alan Yamada section
  - Schedule page with 6-day timetable including per-day tables and Wed/Sat supplemental notes
  - Membership page with 2023 pricing table, requirements cards, and USJF note
  - Getting Started page with 6 numbered steps using 2023 pricing and payment summary table
affects: [content-pages, navigation, contact]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Dark hero with fill image + gradient overlay for secondary pages"
    - "Day-block pattern for schedule tables (per-day header + overflow-x-auto table)"
    - "Numbered step list with accent circle for process pages"
    - "Alternating bg-background/bg-surface rows for pricing tables"

key-files:
  created:
    - src/app/instructors/page.tsx
    - src/app/schedule/page.tsx
    - src/app/membership/page.tsx
    - src/app/getting-started/page.tsx
  modified: []

key-decisions:
  - "Used relative import for IMAGES manifest in instructors page (../../../public/images/manifest) since @/public alias has pre-existing TS errors in other files"
  - "Getting Started uses 2023 pricing from membership.md ($40 initiation, $40/mo adult, $30/mo junior) not 2018 amounts from getting-started.md ($25/$20)"

patterns-established:
  - "Secondary page hero: section with relative bg-primary min-h-[280px], fill image, gradient, eyebrow + h1 overlay"
  - "Pricing tables: alternating bg-background/bg-surface rows, border-border, max-w-lg"
  - "Step list: flex gap-6, shrink-0 accent circle, heading + body"

requirements-completed:
  - PAGE-05
  - PAGE-06
  - PAGE-07
  - PAGE-08

# Metrics
duration: 15min
completed: 2026-03-30
---

# Phase 02 Plan 03: Instructors, Schedule, Membership, Getting Started Summary

**Four functional information pages built with correct 2023 pricing, 22-instructor grid, 6-day schedule tables, and step-by-step enrollment guide**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-03-30T00:00:00Z
- **Completed:** 2026-03-30T00:15:00Z
- **Tasks:** 2
- **Files modified:** 4 created

## Accomplishments

- Instructors page: hero section, featured Alan Yamada with photo, 22-instructor responsive grid (2 to 4 col), visit CTA
- Schedule page: 6-day timetable with per-day overflow tables, Wed/Sat supplemental notes, senior/junior crossover callout, visit CTA
- Membership page: 2023 pricing table ($40/$40/$30/$70), three requirements cards (USJF/Uniform/Payment), CTA with links to schedule and getting-started
- Getting Started page: 6 numbered steps with 2023 prices throughout, payment summary table, questions CTA with email and phone

## Task Commits

1. **Task 1: Instructors and Schedule pages** - `eb49e8d` (feat)
2. **Task 2: Membership and Getting Started pages** - `f3f9e81` (feat)

## Files Created/Modified

- `src/app/instructors/page.tsx` - 22-instructor grid page with hero and Alan Yamada featured section
- `src/app/schedule/page.tsx` - 6-day schedule with per-day tables and supplemental notes
- `src/app/membership/page.tsx` - Membership pricing table and requirements with 2023 amounts
- `src/app/getting-started/page.tsx` - 6-step enrollment guide with 2023 pricing and payment summary

## Decisions Made

- Used relative import path for IMAGES manifest in instructors page (`../../../public/images/manifest`) rather than `@/public/images/manifest` alias — the `@/public/*` alias is configured in tsconfig but pre-existing files (homepage, about page) using that alias already have TS2307 errors. The relative import resolves correctly with zero TS errors.
- Overrode getting-started.md 2018 pricing ($25 initiation, $20/$25 monthly) with 2023 amounts from membership.md ($40/$30/$40) as required by D-02 and plan instructions.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- Pre-existing TypeScript errors in `src/app/about/page.tsx` and `src/app/page.tsx` (homepage) using `@/public/images/manifest` alias — both fail with TS2307. These are out of scope for this plan and were not touched. New instructors page uses relative import instead to avoid the same issue.

## User Setup Required

None - no external service configuration required.

## Known Stubs

None - all pages render real content from scraped source material.

## Next Phase Readiness

- All four functional information pages complete and TypeScript clean
- Routes /instructors, /schedule, /membership, /getting-started are live
- Internal cross-links in place: membership links to getting-started, schedule links from getting-started and instructors CTAs
- Pre-existing TS alias bug (`@/public/images/manifest`) in homepage and about page should be fixed in a follow-up task

---
*Phase: 02-content-pages*
*Completed: 2026-03-30*
