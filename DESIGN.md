# Design System — Seattle Dojo

## Product Context
- **What this is:** Informational website for North America's first judo dojo, established early 1900s in Seattle's International District
- **Who it's for:** Parents looking for kids' activities, adults interested in judo, existing community members
- **Space/industry:** Martial arts / community sports / cultural institution
- **Project type:** Marketing site with CMS-managed content (Sanity)
- **Peers:** Budokan Judo Seattle, Kodokan (world HQ), local martial arts schools

## Aesthetic Direction
- **Direction:** Organic/Natural + Editorial
- **Decoration level:** Intentional — subtle wood grain or tatami-inspired textures in section backgrounds, light photographic grain for archival/documentary quality
- **Mood:** A living cultural institution, not a gym. Think museum meets community center. Warm, grounded, serious about craft, welcoming. The site should feel like visiting a thoughtfully curated heritage space that also happens to be an active training facility.
- **Reference sites:** budokanjudoseattle.org, dentondojo.com, kodokan.org

## Typography
- **Display/Hero:** Instrument Serif — elegant, readable heritage feel without being stuffy. Communicates institution over gym.
- **Body:** DM Sans — clean, friendly, excellent readability at all sizes
- **UI/Labels:** DM Sans medium weight
- **Data/Tables:** DM Sans (tabular-nums)
- **Code:** Not applicable
- **Loading:** Google Fonts CDN (`family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Instrument+Serif:ital@0;1`)
- **Scale:**
  - Hero: 64px / 4rem
  - H1: 40px / 2.5rem
  - H2: 28px / 1.75rem
  - H3: 20px / 1.25rem
  - Body: 16px / 1rem
  - Small: 14px / 0.875rem
  - Caption: 12px / 0.75rem (uppercase, 0.06em tracking for labels)

## Color
- **Approach:** Restrained with bold accent — sumi ink + persimmon
- **Primary (Sumi Ink):** #1C1C1E — near-black ink wash, used for text, hero backgrounds, footer, nav
- **Primary Light:** #333336 — hover states, secondary surfaces
- **Accent (Persimmon):** #D4622B — Japanese persimmon orange, used sparingly for CTAs, highlights, active states, section labels
- **Accent Light:** #E07A45 — hover state for accent elements
- **Background (Warm Ivory):** #FAF6F1 — warm off-white, like old paper
- **Surface:** #F0EBE3 — slightly deeper warm for cards, table rows, inputs
- **Surface Hover:** #E8E1D6
- **Text:** #1C1C1E — same as primary, warm near-black
- **Text Muted:** #6B6560 — warm gray for secondary text, captions, metadata
- **Border:** #D9D0C3 — warm light border for cards, dividers, inputs
- **Semantic:** success #3D7A4A, warning #C48A1A, error #B83D2F, info #3A6B8C
- **Dark mode strategy:** Invert to deep warm charcoal backgrounds (#141413 bg, #1E1E1C surface), lighten text to #E8E0D4, brighten accent to #E07A45, desaturate 15%

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — a heritage institution should breathe
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px) 4xl(96px)

## Layout
- **Approach:** Hybrid — editorial for homepage and history (asymmetric, photo-forward, magazine-style), grid-disciplined for functional pages (schedule, membership, contact)
- **Grid:** 12 columns on desktop, 4 on mobile
- **Max content width:** 1200px
- **Border radius:** sm(4px) md(8px) lg(12px) full(9999px for pills/badges)

## Motion
- **Approach:** Minimal-functional — dignified, not bouncy
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms) long(400-700ms)
- **Scroll:** Subtle fade-in on content sections. No parallax. No bounce.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-30 | Initial design system created | Created by /design-consultation based on competitive research of martial arts/dojo websites |
| 2026-03-30 | Chose Sumi Ink + Persimmon over original Indigo + Amber | Original palette felt like a 90s accounting website. Sumi ink + persimmon is rooted in Japanese visual culture (calligraphy, woodblock prints) and distinctive in the martial arts web space |
| 2026-03-30 | Editorial layout for storytelling pages | Every martial arts site uses hero > feature grid > CTA. Editorial layout tells a visual story, which fits a 120+ year institution |
| 2026-03-30 | Instrument Serif headings | Every competitor uses sans-serif or heavy block fonts. A refined serif says institution, not gym |
