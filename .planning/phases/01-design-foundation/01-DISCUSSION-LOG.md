# Phase 1: Design Foundation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-30
**Phase:** 01-design-foundation
**Areas discussed:** Image curation strategy, Navigation & mobile menu, Component architecture

---

## Image Curation Strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Sort through all 2,203 images | Full manual review of every image | |
| Use only 2017/09 core photos | 82 files (~15 MB), strip WP thumbnails to ~13 originals | ✓ |
| Host on external CDN | Cloudinary or Vercel Blob for image hosting | |

**User's choice:** Use only the core site photos from 2017/09/. User noted the 2021 folder is likely "a single or couple of photo albums" from blog posts they can't even find when browsing the site. The actual page photos are just the 2017 originals.
**Notes:** 865 MB of 2021/ images confirmed as "Crack of Dawn" outdoor training blog series. Not needed for main site pages.

---

## Navigation & Mobile Menu

| Option | Description | Selected |
|--------|-------------|----------|
| Hamburger menu | Three-line icon, slide-out/dropdown on mobile | ✓ |
| Bottom tab bar | Fixed bar at bottom like native app | |

**User's choice:** Hamburger menu (standard approach)

| Option | Description | Selected |
|--------|-------------|----------|
| Sticky header | Always visible when scrolling | ✓ |
| Scrolls away | More screen space, cleaner editorial feel | |

**User's choice:** Sticky header

| Option | Description | Selected |
|--------|-------------|----------|
| Text logo in Instrument Serif | "Seattle Dojo" in display font | ✓ |
| Dojo plaque image | Scraped plaque PNG | |
| Both plaque + text | Richer but more complex | |

**User's choice:** Text logo in Instrument Serif

---

## Component Architecture

**User's choice:** User selected "All of the above" and was comfortable with Claude's discretion on component structure.
**Notes:** Build Header, Footer, Layout wrapper, Section component as shared foundation.

## Claude's Discretion

- Footer layout (4-column grid pattern from homepage placeholder)
- Dark mode toggle approach
- Image filename conventions
- Section component API design

## Deferred Ideas

None — discussion stayed within phase scope
