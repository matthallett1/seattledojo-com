# Phase 1: Design Foundation - Context

**Gathered:** 2026-03-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the visual skeleton of the site: shared layout components (Header, Footer, Layout wrapper), curate and optimize photography from the scraped WordPress content, and ensure the DESIGN.md system (Sumi Ink + Persimmon palette, Instrument Serif + DM Sans typography) is fully implemented as reusable Tailwind tokens and components. Every future page should drop into this foundation and look right.

</domain>

<decisions>
## Implementation Decisions

### Image Curation
- **D-01:** Use only images from `content/images/2017/09/` (~15 MB, 82 files). The `2021/` folder (865 MB, 2,121 files) is entirely "Crack of Dawn" outdoor training blog series photos — not needed for the main site pages.
- **D-02:** Strip WordPress thumbnail variants (300x, 768x, 1024x). Keep only the original full-resolution images. Next.js Image component handles responsive sizing.
- **D-03:** Key originals to keep: Alan Yamada portrait, Dojo interior (3 angles), Dojo exterior (2 shots + sign + evening), Students action shots (2), Kids activities, Plaque/logo PNG. ~13 unique images.
- **D-04:** Copy curated originals to `public/images/` (flat structure, clean filenames). Do not keep the WordPress upload directory structure.

### Navigation & Header
- **D-05:** Sticky header that stays visible on scroll. Keeps nav always accessible.
- **D-06:** Hamburger menu on mobile (below `md` breakpoint). Standard slide-out or dropdown.
- **D-07:** Text logo "Seattle Dojo" in Instrument Serif. No image logo. Clean and simple.
- **D-08:** Desktop nav shows all links inline: About, Instructors, Schedule, Membership, News, Contact.

### Component Architecture
- **D-09:** Build shared components in this phase: `Header`, `Footer`, `Layout` (wrapper that includes both). Future pages import Layout and just provide content.
- **D-10:** Create a reusable `Section` component for consistent max-width, padding, and background treatment across pages.

### Claude's Discretion
- Footer content and layout (follow the pattern from the homepage placeholder — 4-column grid with brand, About, Join, Community)
- Dark mode toggle implementation (CSS custom properties with `data-theme` attribute, or rely on `prefers-color-scheme` only)
- Image filename conventions when copying to public/

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design System
- `DESIGN.md` — Complete design system: colors, typography, spacing, layout, motion. Source of truth for all visual decisions.

### Scraped Content
- `content/pages/home.md` — Homepage content (to understand what sections the layout needs to support)
- `content/images/2017/09/` — Source images to curate from

### Existing Code
- `src/app/layout.tsx` — Root layout with font loading (DM Sans + Instrument Serif already configured)
- `src/app/globals.css` — Tailwind tokens with full DESIGN.md color system already wired
- `src/app/page.tsx` — Homepage placeholder with design system applied (reference for component patterns)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Tailwind color tokens already configured in `globals.css` (--primary, --accent, --bg, --surface, etc.)
- Font loading already set up in `layout.tsx` (DM Sans variable + Instrument Serif variable)
- Homepage placeholder in `page.tsx` demonstrates the hero, editorial, schedule, and footer patterns

### Established Patterns
- Tailwind CSS utility classes for all styling (no CSS modules)
- CSS custom properties for theming (light/dark via `data-theme` and `prefers-color-scheme`)
- `font-display` and `font-body` Tailwind utilities mapped to Instrument Serif and DM Sans

### Integration Points
- `src/app/layout.tsx` is where the shared Header/Footer/Layout components will wrap all pages
- `public/images/` is where curated photos will live (Next.js Image component serves from here)
- `src/app/` is where new page routes will be added (App Router)

</code_context>

<specifics>
## Specific Ideas

- Hero background should use one of the dojo interior or action shots with a dark gradient overlay (matching the current placeholder pattern)
- The warm ivory background (#FAF6F1) should be prominent on content sections to feel like parchment/heritage
- Navigation should feel understated — not a thick bar, more like editorial magazine nav

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-design-foundation*
*Context gathered: 2026-03-30*
