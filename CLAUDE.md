# Seattle Dojo — Project CLAUDE.md

## Project
SeattleDojo.com — website for North America's first judo dojo. Migrating from WordPress on Dreamhost to Next.js + Tailwind on Vercel with Sanity CMS.

## Tech Stack
- Next.js 15 + Tailwind CSS
- Sanity CMS (headless, free tier)
- Vercel hosting (hobby tier)
- Static Site Generation

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Content Source
Content scraped from the live WordPress site at seattledojo.com. Images and text harvested for migration. The WordPress site is the source of truth for existing content until the new site launches.

## Key Contacts
- Dojo email: info@SeattleDojo.com / SeattleDojoJudo@gmail.com
- Dojo phone: (206) 324-7080
- Head Instructor: Alan Yamada, (206) 763-9802
- Address: 1510 S. Washington St., Seattle, WA 98144

<!-- GSD:project-start source:PROJECT.md -->
## Project

**Seattle Dojo Website**

A modern website for Seattle Dojo, North America's first judo dojo (est. early 1900s), migrating from a dated WordPress site on Dreamhost to a fast, low-maintenance Next.js static site on Vercel with Sanity CMS for content management. The site serves parents looking for kids' martial arts, adults interested in judo, and the existing dojo community in Seattle's International District.

**Core Value:** Visitors can quickly find what Seattle Dojo offers (classes, schedule, pricing, contact) and understand why this place is special — a 120+ year old living cultural institution, not just another martial arts gym.

### Constraints

- **Budget:** Free tier hosting (Vercel hobby, Sanity free tier). No paid services.
- **Tech stack:** Next.js 15 + Tailwind CSS + Sanity CMS on Vercel (decided)
- **Design system:** DESIGN.md is the source of truth for all visual decisions (decided)
- **Images:** Cannot host 880 MB in the repo. Must curate down to ~20-30 key images, optimized via Next.js Image component.
- **DNS:** Domain currently at Dreamhost. Will need DNS migration to Vercel at launch.
- **Maintenance:** Site must be near-zero maintenance. No PHP, no database, no plugin updates.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->
## Technology Stack

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
