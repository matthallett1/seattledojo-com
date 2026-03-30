# Seattle Dojo Website

## What This Is

A modern website for Seattle Dojo, North America's first judo dojo (est. early 1900s), migrating from a dated WordPress site on Dreamhost to a fast, low-maintenance Next.js static site on Vercel with Sanity CMS for content management. The site serves parents looking for kids' martial arts, adults interested in judo, and the existing dojo community in Seattle's International District.

## Core Value

Visitors can quickly find what Seattle Dojo offers (classes, schedule, pricing, contact) and understand why this place is special — a 120+ year old living cultural institution, not just another martial arts gym.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Homepage with hero, editorial history section, class highlights, schedule preview, contact CTA
- [ ] About/History page with rich content about the dojo's 120+ year legacy
- [ ] What is Judo educational page
- [ ] Judo for Kids program page
- [ ] Instructors page listing all 22 current instructors
- [ ] Schedule page with weekly class times
- [ ] Membership overview page with current pricing ($40 initiation, $40/mo adult, $30/mo junior)
- [ ] Getting Started enrollment guide
- [ ] Contact page with address, phone, email, map, and contact form
- [ ] News/blog section for occasional posts
- [ ] Annual Tournament page
- [ ] Responsive mobile-first design
- [ ] Sanity CMS integration for content editing by non-technical dojo staff
- [ ] Image curation and optimization (select ~20-30 key images from 2,203 scraped)
- [ ] SEO optimization for local search ("judo Seattle", "martial arts International District")
- [ ] Deploy to Vercel with seattledojo.com domain

### Out of Scope

- User accounts / authentication — informational site only
- Online payment / registration — dojo is cash/check only
- Event calendar integration — schedule is simple enough to be static/CMS
- Photo gallery — too many images, not core to visitor conversion
- Blog comments — site gets minimal traffic, not worth the moderation overhead
- Multi-language support — English only
- E-commerce / merchandise — not a revenue channel for the dojo

## Context

- **Current site:** WordPress on Dreamhost at seattledojo.com, last meaningfully updated 2023 (schedule page updated April 2025)
- **Content scraped:** 14 pages of markdown content + 2,203 images (880 MB, mostly WordPress thumbnail variants) saved to `content/` directory
- **Content issues:** Pricing conflict between Getting Started page (2018, $25/$20-25) and Membership Overview (2023, $40/$30-40) — use 2023 numbers
- **WordPress junk:** Sample pages, placeholder sections, "Hello World" post — all to be dropped
- **22 instructors** led by Alan Yamada (head) and Brian Toth (primary content author)
- **Design system:** Complete DESIGN.md with Sumi Ink + Persimmon palette (#1C1C1E primary, #D4622B accent), Instrument Serif + DM Sans typography, editorial layout. Created via /design-consultation with competitive research.
- **This is a favor project** for Matt's friend. Keep it simple, beautiful, and low-maintenance.
- **Dojo staff rarely update the site.** CMS must be dead simple — Sanity visual editor.

## Constraints

- **Budget:** Free tier hosting (Vercel hobby, Sanity free tier). No paid services.
- **Tech stack:** Next.js 15 + Tailwind CSS + Sanity CMS on Vercel (decided)
- **Design system:** DESIGN.md is the source of truth for all visual decisions (decided)
- **Images:** Cannot host 880 MB in the repo. Must curate down to ~20-30 key images, optimized via Next.js Image component.
- **DNS:** Domain currently at Dreamhost. Will need DNS migration to Vercel at launch.
- **Maintenance:** Site must be near-zero maintenance. No PHP, no database, no plugin updates.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js + Tailwind over plain HTML | Need Image optimization, SSG, font loading, future CMS integration | — Pending |
| Sanity CMS over markdown files | Friend needs visual editor, not git workflow | — Pending |
| Sumi Ink + Persimmon palette over original Indigo + Amber | Original felt like 90s accounting site. Persimmon is rooted in Japanese visual culture. | — Pending |
| Instrument Serif for headings | Every competitor uses sans-serif. Serif says institution, not gym. | — Pending |
| Curate images to ~20-30 over hosting all 2,203 | 880 MB too large for repo/Vercel. Most are WP thumbnail variants. | — Pending |
| Editorial homepage layout over standard hero+grid+CTA | Tells a visual story. Visitors discover something meaningful, not shop for a gym. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-30 after initialization*
