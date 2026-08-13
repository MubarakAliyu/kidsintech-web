# DESIGN_TOKENS.md — Kids in Tech

Design tokens introduced in Batch 01 (foundation). Defined as **Tailwind v4
`@theme` custom properties** in [`src/app/globals.css`](src/app/globals.css), so
each becomes a utility (`bg-cream`, `text-maroon`, `border-hairline`, …).

**Golden rule:** every token value equals the exact hex already in use — naming
only, **zero visual change**. Existing inline `[#...]` arbitrary values were left
in place (only Header + Footer were converted this batch as the proven pattern).

## Colour tokens

| Token (utility stem) | Hex | Source / role |
|---|---|---|
| `cream` | `#FFF7F1` | Page background; header/mobile drawer bg |
| `maroon` | `#401D26` | Footer background; primary dark text |
| `ink` | `#2D2124` | Near-black body text; nav links |
| `brand-red` | `#A41C3F` | Primary CTA buttons |
| `rust` | `#A4431C` | Secondary warm accent (AboutSponsor) |
| `teal-active` | `#0F766E` | Active nav link colour |
| `teal` | `#1CA48E` | Desktop "Join Us" WhatsApp button |
| `teal-alt` | `#1DA693` | Mobile WhatsApp button variant |
| `green-success` | `#34A33F` | Registration / success accents |
| `green-deep` | `#214A25` | Dark green pill (Bootcamp/Coding) |
| `green-olive` | `#60A41C` | Olive accent (AboutSponsor) |
| `gold` | `#FFDAA3` | Badge pills |
| `tint-lime` | `#EDF4D6` | Section tint — AboutSection |
| `tint-butter` | `#FDF2CB` | Section tint — CodingClassSection |
| `tint-pale` | `#F6F8DC` | Section tint — LearningOutcome / About |
| `tint-olive` | `#D6DE9B` | Bootcamp "Overview" box |
| `tint-blue` | `#D5EAF4` | Section tint — FounderNoteSection |
| `tint-peach` | `#F4E4D5` | Section tint — AboutSponsorSection |
| `panel-dark` | `#353226` | Dark content panel |
| `panel-charcoal` | `#2C2F28` | Dark content panel (Coding/Bootcamp) |
| `paper` | `#F1EAEB` | Light text on dark surfaces |
| `mint` | `#EEF3E9` | Light text/bg on green surfaces |
| `blush` | `#F3E9E9` | Light text variant |
| `hairline` | `#F1E5DE` | Borders / header bottom border |
| `accent-plum` | `#5B343E` | About timeline accent |
| `accent-moss` | `#8E9E5A` | About timeline accent |
| `accent-steel` | `#5C6D8F` | About timeline accent |
| `accent-indigo` | `#675982` | About timeline accent |

## Radii

| Token | Value | Role |
|---|---|---|
| `--radius-pill` | `118px` | Signature skewed section-label pills |

## Fonts

| Token | Value | Notes |
|---|---|---|
| `--font-sans` | `var(--font-polysans), sans-serif` | PolySans Trial, loaded in `layout.js` (weights 400/700). `font-sans` now resolves to PolySans. |

- Removed the dead `--font-tenor-sans` reference on `html` (that font was never
  defined). `html` now uses `var(--font-polysans)` — no visual change, since
  `body` already rendered PolySans on all content.

## Motion (documented; values live in `src/lib/motion.js`)

Motion variants are JS (framer-motion), not CSS tokens, but recorded here for
reference. All honour `prefers-reduced-motion`.

| Name | Meaning |
|---|---|
| `fadeUp` | opacity 0→1, y 40→0, 0.6s `easeOut` (optional stagger index) |
| `fadeIn` | opacity 0→1, 0.6s `easeOut` |
| `float` | y `[0,-10,0]`, 3s infinite `easeInOut` (decorative arrows) |
| `staggerContainer` | `staggerChildren: 0.2` |
| `<Reveal>` / `<RevealGroup>` | scroll-reveal wrappers (IntersectionObserver + framer-motion) |

A global `@media (prefers-reduced-motion: reduce)` rule in `globals.css` also
calms any CSS-driven animation/transition as a safety net.
