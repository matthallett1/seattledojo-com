# Requirements: Seattle Dojo Website

**Defined:** 2026-03-30
**Core Value:** Visitors can quickly find what Seattle Dojo offers and understand why this place is special

## v1 Requirements

### Pages

- [ ] **PAGE-01**: Homepage with hero, editorial history section, class highlights, schedule preview, contact CTA
- [ ] **PAGE-02**: About/History page with rich content about the dojo's 120+ year legacy
- [ ] **PAGE-03**: What is Judo educational page explaining the art
- [ ] **PAGE-04**: Judo for Kids program page with youth program details
- [ ] **PAGE-05**: Instructors page listing all 22 current instructors with names
- [ ] **PAGE-06**: Schedule page with weekly class times in table format
- [ ] **PAGE-07**: Membership overview page with current pricing ($40 initiation, $40/mo adult, $30/mo junior)
- [ ] **PAGE-08**: Getting Started enrollment guide with step-by-step process
- [ ] **PAGE-09**: Contact page with address, phone, email, Google Maps embed, and contact form
- [ ] **PAGE-10**: News page showing blog posts in reverse chronological order
- [ ] **PAGE-11**: Annual Tournament page with current year info

### Design & Layout

- [ ] **DESGN-01**: All pages follow DESIGN.md system (Sumi Ink + Persimmon, Instrument Serif + DM Sans)
- [ ] **DESGN-02**: Responsive mobile-first layout works on phone, tablet, and desktop
- [ ] **DESGN-03**: Shared navigation header and footer across all pages
- [ ] **DESGN-04**: Dark mode support via CSS custom properties and prefers-color-scheme

### Images

- [ ] **IMG-01**: Curate ~20-30 key images from scraped WordPress content for hero, instructors, dojo interior, classes
- [ ] **IMG-02**: All images served via Next.js Image component with automatic optimization, lazy loading, responsive srcset
- [ ] **IMG-03**: Hero section uses real dojo photography (not placeholder)

### CMS

- [ ] **CMS-01**: Sanity Studio configured with schemas for pages, news posts, instructors, schedule, tournament
- [ ] **CMS-02**: Non-technical dojo staff can edit text content and swap images via Sanity visual editor
- [ ] **CMS-03**: Content changes trigger Vercel rebuild via webhook

### Infrastructure

- [ ] **INFRA-01**: Site deployed to Vercel with production build passing
- [ ] **INFRA-02**: SEO meta tags, Open Graph, structured data for local business
- [ ] **INFRA-03**: Contact form sends submissions via email (Resend, Formspree, or similar free service)
- [ ] **INFRA-04**: DNS migrated from Dreamhost to Vercel with SSL

## v2 Requirements

### Enhanced Content

- **ENH-01**: Photo gallery page for tournament and event photos
- **ENH-02**: Individual instructor profile pages with bios and photos
- **ENH-03**: Tournament results and bracket archives

### Engagement

- **ENG-01**: Instagram feed embed on homepage
- **ENG-02**: Google Reviews widget
- **ENG-03**: Online registration or waitlist form

## Out of Scope

| Feature | Reason |
|---------|--------|
| User accounts / authentication | Informational site only |
| Online payment / registration | Dojo is cash/check only |
| Blog comments | Minimal traffic, not worth moderation |
| Multi-language support | English only audience |
| E-commerce / merchandise | Not a dojo revenue channel |
| Real-time event calendar | Schedule is simple enough for static/CMS |
| Video hosting | Bandwidth costs, link to YouTube/Facebook instead |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DESGN-01 | Phase 1 | Pending |
| DESGN-02 | Phase 1 | Pending |
| DESGN-03 | Phase 1 | Pending |
| DESGN-04 | Phase 1 | Pending |
| IMG-01 | Phase 1 | Pending |
| IMG-02 | Phase 1 | Pending |
| IMG-03 | Phase 1 | Pending |
| PAGE-01 | Phase 2 | Pending |
| PAGE-02 | Phase 2 | Pending |
| PAGE-03 | Phase 2 | Pending |
| PAGE-04 | Phase 2 | Pending |
| PAGE-05 | Phase 2 | Pending |
| PAGE-06 | Phase 2 | Pending |
| PAGE-07 | Phase 2 | Pending |
| PAGE-08 | Phase 2 | Pending |
| PAGE-09 | Phase 2 | Pending |
| PAGE-10 | Phase 2 | Pending |
| PAGE-11 | Phase 2 | Pending |
| CMS-01 | Phase 3 | Pending |
| CMS-02 | Phase 3 | Pending |
| CMS-03 | Phase 3 | Pending |
| INFRA-01 | Phase 4 | Pending |
| INFRA-02 | Phase 4 | Pending |
| INFRA-03 | Phase 4 | Pending |
| INFRA-04 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 25 total
- Mapped to phases: 25
- Unmapped: 0

---
*Requirements defined: 2026-03-30*
*Last updated: 2026-03-30 after roadmap creation (traceability populated)*
