---
phase: 01-design-foundation
plan: "04"
subsystem: ui
tags: [nextjs, tailwind, react, layout, footer, image-optimization]

# Dependency graph
requires:
  - phase: 01-design-foundation plan 01
    provides: public/images/dojo-interior-3.jpg for hero photo
  - phase: 01-design-foundation plan 02
    provides: design tokens in globals.css, Section component
  - phase: 01-design-foundation plan 03
    provides: Header component with sticky nav and mobile hamburger
provides:
  - Footer component with 4-column link structure
  - Layout component composing Header + main + Footer
  - Root layout.tsx wrapping all pages with Layout (universal header/footer)
  - Homepage hero with real dojo photograph via Next.js Image
affects: [all-future-pages, phase-02, phase-03]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Root layout wraps all pages via Layout component — no per-page header/footer needed
    - Next.js Image with fill + priority for above-the-fold hero photos
    - Server Components for Footer and Layout (no client interactivity needed)

key-files:
  created:
    - src/components/layout/Footer.tsx
    - src/components/layout/Layout.tsx
  modified:
    - src/app/layout.tsx
    - src/app/page.tsx

key-decisions:
  - "Layout component is a Server Component — no 'use client' needed since it only composes Header and Footer"
  - "Footer uses max-w-[1200px] matching DESIGN.md 1200px max content width (not max-w-6xl)"
  - "Hero Image uses fill prop with relative-positioned section — no explicit width/height needed"
  - "Inline nav and footer removed from page.tsx — Layout wrapper handles both globally"

patterns-established:
  - "Layout pattern: all pages get Header + Footer automatically via root layout.tsx wrapping children in <Layout>"
  - "Hero image pattern: relative section + Image fill + gradient overlay for text legibility"

requirements-completed: [DESGN-03, DESGN-04, IMG-03]

# Metrics
duration: 3min
completed: 2026-03-30
---

# Phase 01 Plan 04: Footer, Layout wrapper, and real hero photo via Next.js Image

**Footer + Layout wrapper wired into root layout.tsx so every page automatically gets sticky header and 4-column footer; homepage hero replaced with real dojo interior photograph**

## Performance

- **Duration:** ~3 min
- **Started:** 2026-03-30T19:21:45Z
- **Completed:** 2026-03-30T19:23:50Z
- **Tasks:** 3 (2 auto + 1 checkpoint auto-approved)
- **Files modified:** 4

## Accomplishments
- Created Footer.tsx with 4-column link structure (brand, About, Join, Community) extracted from page.tsx
- Created Layout.tsx composing Header + main + Footer as a Server Component
- Updated root layout.tsx to wrap all children in Layout — every page now gets the sticky header and footer automatically
- Updated page.tsx: added Next.js Image with dojo-interior-3.jpg (fill + priority), removed inline nav, removed inline footer
- Confirmed dark mode already active via `@media (prefers-color-scheme: dark)` in globals.css (DESGN-04 satisfied)
- Production build passes with zero TypeScript errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Footer and Layout components** - `8335040` (feat)
2. **Task 2: Wire Layout into root layout.tsx and update page.tsx hero** - `e81574a` (feat)
3. **Task 3: Visual verification checkpoint** - auto-approved (build passes)

**Plan metadata:** committed with docs commit after SUMMARY creation

## Files Created/Modified
- `src/components/layout/Footer.tsx` - 4-column footer with brand, About, Join, Community columns; max-w-[1200px]; Persimmon accent headings; named + default exports
- `src/components/layout/Layout.tsx` - Server Component composing Header + main (flex-1) + Footer; named + default exports
- `src/app/layout.tsx` - Added Layout import, wrapped {children} with <Layout>; all font setup and metadata preserved
- `src/app/page.tsx` - Added Image import, real hero photo (fill + priority), removed inline nav, removed inline footer block

## Decisions Made
- Layout is a Server Component — it only composes other components, no interactivity needed
- Footer uses `max-w-[1200px]` to match DESIGN.md 1200px max content width (plan spec, vs max-w-6xl from original page.tsx)
- Hero uses `fill` prop on Image since hero section already has `relative` positioning — no explicit width/height needed
- Dark mode confirmed already working via existing `@media (prefers-color-scheme: dark)` CSS block — no additional code needed

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None.

## Known Stubs
The following placeholder content exists in page.tsx but is intentional — it is content stub work for future content phases:
- `[ Dojo interior photograph ]` in Editorial Section (line ~34 in page.tsx) — tracked for Phase 02 content work
- `[ Kids class in action ]` in Classes Section — tracked for Phase 02 content work
- `[ Google Maps embed ]` in Contact CTA section — tracked for Phase 02 content work

These stubs do NOT prevent this plan's goal (Footer/Layout wiring + hero photo) from being achieved.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Design foundation (Phase 01) is complete: images curated, design tokens set, Header + Footer + Layout wired, homepage shows real photography
- Phase 02 can begin content page development — every page automatically inherits the sticky header and footer
- The `Section` component from Plan 02 is available for consistent section layouts across all content pages
- Dark mode works via OS preference — no additional implementation needed

## Self-Check: PASSED

- Footer.tsx: FOUND
- Layout.tsx: FOUND
- layout.tsx: FOUND
- page.tsx: FOUND
- SUMMARY.md: FOUND
- Commit 8335040 (Task 1): FOUND
- Commit e81574a (Task 2): FOUND

---
*Phase: 01-design-foundation*
*Completed: 2026-03-30*
