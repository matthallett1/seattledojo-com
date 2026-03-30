# Phase 2: Content Pages - Context

**Gathered:** 2026-03-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Build all 11 content pages using the scraped markdown content from `content/pages/`. Each page uses the shared Layout (Header + Footer from Phase 1), Section component, and DESIGN.md tokens. Content comes directly from the scraped WordPress site with editorial layout for storytelling pages and grid layout for functional pages.

</domain>

<decisions>
## Implementation Decisions

### Content Source
- **D-01:** All page content comes from `content/pages/*.md` files scraped from the live WordPress site
- **D-02:** Use 2023 pricing from membership.md ($40 initiation, $40/mo adult, $30/mo junior) — NOT the outdated 2018 Getting Started prices
- **D-03:** Drop WordPress junk content (sample pages, Hello World post, placeholder sections)

### Page Layout Strategy
- **D-04:** Editorial/magazine layout for storytelling pages: Home, About/History, What is Judo, Judo for Kids
- **D-05:** Grid/functional layout for information pages: Instructors, Schedule, Membership, Getting Started, Contact, News, Tournament
- **D-06:** All pages use the Section component from Phase 1 for consistent spacing and max-width

### Images
- **D-07:** Use images from `public/images/` (curated in Phase 1) via Next.js Image component and the manifest.ts types
- **D-08:** Not every page needs an image — only use where they add value (hero, about, kids, instructors)

### Navigation
- **D-09:** Page routes follow Next.js App Router conventions: `/about`, `/instructors`, `/schedule`, `/membership`, `/getting-started`, `/contact`, `/news`, `/tournament`, `/what-is-judo`, `/for-kids`

### Claude's Discretion
- Content editing/cleanup from scraped markdown (fix formatting, improve readability)
- Which images to place on which pages
- Contact form implementation approach (can be a simple mailto: link or Formspree for v1)
- News page format (simple list of posts vs card grid)

</decisions>

<canonical_refs>
## Canonical References

### Design System
- `DESIGN.md` — All visual decisions
- `src/app/globals.css` — Tailwind tokens
- `src/components/ui/Section.tsx` — Reusable section wrapper
- `src/components/layout/Layout.tsx` — Shared layout (Header + Footer)

### Content Source
- `content/pages/home.md`
- `content/pages/about-history.md`
- `content/pages/what-is-judo.md`
- `content/pages/judo-for-kids.md`
- `content/pages/instructors.md`
- `content/pages/schedule.md`
- `content/pages/membership.md`
- `content/pages/getting-started.md`
- `content/pages/contact.md`
- `content/pages/news.md`
- `content/pages/tournament-2025.md`

### Images
- `public/images/manifest.ts` — Typed image references with dimensions

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Section component with background variants (default, surface, primary)
- Layout wrapper with Header + Footer
- Image manifest with typed src/alt/width/height for all 13 images
- Tailwind tokens for all DESIGN.md values

### Established Patterns
- Homepage page.tsx shows the editorial pattern: hero with Image, alternating Section backgrounds, schedule table
- font-display for headings, font-body for text
- text-accent for persimmon highlights, text-muted for secondary text

### Integration Points
- Each new page is a directory under `src/app/` with a `page.tsx` file
- Layout component automatically wraps all pages (no per-page import needed)

</code_context>

<specifics>
## Specific Ideas

- Homepage already has placeholder content — Phase 2 refines it with final scraped content
- About/History page should be the most editorial — large photos, pull quotes, asymmetric layout
- Schedule should be a clean table (pattern already exists on homepage)
- Contact page needs Google Maps embed and contact info

</specifics>

<deferred>
## Deferred Ideas

None — all pages are scoped in requirements

</deferred>

---

*Phase: 02-content-pages*
*Context gathered: 2026-03-30*
