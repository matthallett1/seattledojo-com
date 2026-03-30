# Roadmap: Seattle Dojo Website

## Overview

A WordPress-to-Next.js migration in four phases: build the design foundation and shared components first, then fill all content pages, then wire up Sanity CMS so staff can edit without touching code, then launch to production with SEO, contact form, and DNS cutover.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Design Foundation** - Build the design system, shared layout, navigation, and curate photography
- [ ] **Phase 2: Content Pages** - Author all 11 site pages using real scraped content
- [ ] **Phase 3: CMS Integration** - Wire Sanity schemas to every editable page so staff can update without code
- [ ] **Phase 4: Launch** - SEO, contact form, Vercel deploy, and DNS cutover to production

## Phase Details

### Phase 1: Design Foundation
**Goal**: The visual and structural skeleton of the site exists — every future page can drop into it and look right
**Depends on**: Nothing (first phase)
**Requirements**: DESGN-01, DESGN-02, DESGN-03, DESGN-04, IMG-01, IMG-02, IMG-03
**Success Criteria** (what must be TRUE):
  1. Any page rendered in the app uses the Sumi Ink + Persimmon palette, Instrument Serif headings, and DM Sans body text from DESIGN.md
  2. The shared navigation header and footer appear consistently on every page and collapse correctly to a mobile menu on small screens
  3. A curated set of 20-30 real dojo photos is committed to the repo and served through Next.js Image with responsive srcset and lazy loading
  4. The hero section on the homepage displays an actual dojo photograph (not a placeholder)
  5. Dark mode renders correctly across all shared components when the OS preference is set to dark
**Plans**: TBD
**UI hint**: yes

### Phase 2: Content Pages
**Goal**: Every page a visitor or prospective member would want to read exists with real content from the dojo
**Depends on**: Phase 1
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07, PAGE-08, PAGE-09, PAGE-10, PAGE-11
**Success Criteria** (what must be TRUE):
  1. Visiting the homepage shows the editorial hero, a history teaser, class highlights, schedule preview, and a contact call-to-action — all with real content
  2. Each of the 11 pages (About, Judo, Kids, Instructors, Schedule, Membership, Getting Started, Contact, News, Tournament) renders with content sourced from the scraped markdown files using 2023 pricing
  3. The Instructors page lists all 22 current instructors by name
  4. The Schedule page displays weekly class times in a readable table
  5. The Contact page includes the address, phone, email, and an embedded Google Map
**Plans**: TBD
**UI hint**: yes

### Phase 3: CMS Integration
**Goal**: Non-technical dojo staff can log into Sanity Studio and change any text or image without touching the codebase
**Depends on**: Phase 2
**Requirements**: CMS-01, CMS-02, CMS-03
**Success Criteria** (what must be TRUE):
  1. Sanity Studio is accessible and has schemas covering pages, news posts, instructors, schedule entries, and tournament info
  2. A non-technical user can edit the membership pricing in Sanity and see the change reflected on the live site after a Vercel rebuild
  3. A content change in Sanity Studio triggers an automatic Vercel rebuild via webhook within a few minutes
**Plans**: TBD

### Phase 4: Launch
**Goal**: The site is live at seattledojo.com, discoverable in local search, and the contact form works
**Depends on**: Phase 3
**Requirements**: INFRA-01, INFRA-02, INFRA-03, INFRA-04
**Success Criteria** (what must be TRUE):
  1. The production build passes on Vercel with no errors and the site is accessible at seattledojo.com over HTTPS
  2. Submitting the contact form delivers an email to the dojo using a free tier email service
  3. Searching "judo Seattle" or "martial arts International District" in Google returns the site within the top results (structured data and meta tags are verified in Google Rich Results Test)
  4. DNS has been migrated from Dreamhost to Vercel with SSL active and no downtime window longer than typical propagation
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Design Foundation | 0/TBD | Not started | - |
| 2. Content Pages | 0/TBD | Not started | - |
| 3. CMS Integration | 0/TBD | Not started | - |
| 4. Launch | 0/TBD | Not started | - |
