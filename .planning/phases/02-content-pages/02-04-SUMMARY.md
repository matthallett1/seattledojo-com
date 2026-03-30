---
phase: 02-content-pages
plan: "04"
subsystem: ui
tags: [next.js, tailwind, typescript, pages, contact, news, tournament]

requires:
  - phase: 02-content-pages
    provides: Section component, image manifest, layout, homepage patterns
provides:
  - Contact page with address, phone, email, Google Maps iframe, mailto form, and driving directions
  - News page with blog posts in reverse chronological order
  - Tournament page with 2025 event details

key-files:
  created:
    - src/app/contact/page.tsx
    - src/app/news/page.tsx
    - src/app/tournament/page.tsx

requirements-completed:
  - PAGE-09
  - PAGE-10
  - PAGE-11

duration: multi-session
completed: 2026-03-30
---

# Phase 02 Plan 04: Contact, News, Tournament Summary

**Three functional pages completing the full 11-page site.**

## Accomplishments

- Contact page: dark hero with exteriorEvening photo, contact info section with Google Maps iframe, mailto form (name/email/message), driving directions from 3 directions
- News page: reverse-chronological blog posts (2024 365 Days of Judo, 2022 Reopening Phase II, 2021 Crack of Dawn series, 2021 Reopening Phase I)
- Tournament page: 2025 event details with date, venue, registration link

## Files Created

- `src/app/contact/page.tsx` — 211-line page with Google Maps embed and mailto form
- `src/app/news/page.tsx` — 84-line news list in reverse chronological order
- `src/app/tournament/page.tsx` — 130-line page with 2025 tournament details

## Key Decisions

- Contact form uses `action="mailto:..."` with `method="post"` — opens user's email client (no server-side handling needed for v1)
- Google Maps embed uses `maps.google.com/maps?q=...&output=embed` format (no API key required)
- News uses static data array rather than CMS (Sanity integration is Phase 3)

---
*Phase: 02-content-pages*
*Completed: 2026-03-30*
