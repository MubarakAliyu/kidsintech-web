# ANALYSIS.md — Kids in Tech Website (v2.0 Expansion Baseline)

> Repo map, stack, design tokens, components and issues, produced before any code changes.
> **The code is the source of truth.** This documents the site *as it exists today* so the
> expansion (Batches 01+) can grow it without redesigning it.

---

## 1. Framework & stack (verified in `package.json` / configs)

| Concern | Finding |
|---|---|
| Framework | **Next.js `16.2.2`**, **React `19.2.4`** |
| Router | **App Router** (`src/app/…`), no `pages/` directory |
| Rendering | **Static export** — `next.config.mjs` sets `output: "export"`, `trailingSlash: true`, `images.unoptimized: true` |
| Dev / build | `next dev --turbopack` · `next build` (produces static `out/`) |
| Styling | **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme inline` in `globals.css`), PostCSS via `@tailwindcss/postcss`. **No CSS Modules, no styled-components.** Colors are inline arbitrary values (`bg-[#FFF7F1]`) throughout — there is **no token layer yet**. |
| Animation | **Framer Motion** (`framer-motion`, imported by all view components) + **`motion` `^12.38.0`** (the newer package; `Header.jsx` imports from `motion/react`). Both resolve/build today. Also **`react-intersection-observer`** for scroll-trigger (`useInView`). |
| Icons | **`lucide-react` `^1.7.0`** (used in Gallery lightbox) + local SVGs |
| Forms / email | **`@emailjs/browser`**, **`react-toastify`** (ToastContainer mounted globally). Registration currently points to an external **Google Form**. |
| Linting / format | **Biome** (`biome.json`), not ESLint/Prettier. `npm run lint` = `biome check`. |
| Path alias | `@/*` → `./src/*` (`jsconfig.json`) — plain JS/JSX, **no TypeScript**. |

**Implication of static export:** no server actions / route handlers / API routes / `next/image` optimization / ISR. All new interactivity must be client-side or use external services (Google Forms, EmailJS, Paystack inline, YouTube embeds, `mailto:`/`tel:`).

---

## 2. Repository structure

```
src/
  app/
    layout.js              # Root layout: fonts, global metadata, StructuredData, GA, Header/Footer, ToastContainer
    page.js                # Home — composes 6 view sections
    globals.css            # Tailwind v4 entry + @theme + base layer
    favicon.ico
    about-us/
      layout.js            # Route-level metadata (SEO) for /about-us
      page.jsx             # About page (client component, long)
    gallery/
      layout.js            # Route-level metadata for /gallery
      page.jsx             # Gallery masonry + lightbox (client)
  components/
    Header.jsx             # Shared header (client) — imports motion/react
    Footer.jsx             # Shared footer (client) — CTA + nav + contact + socials
    GoogleAnalytics.jsx    # gtag scripts, prod-only
    StructuredData.jsx     # JSON-LD: organization | website | breadcrumb
    views/
      HeroSection.jsx
      AboutSection.jsx
      CodingClassSection.jsx
      Bootcamp.jsx             # id="design-stem"
      LearningOutcomeSection.jsx
      FounderNoteSection.jsx   # reused on Home + Gallery
      AboutSponsorSection.jsx  # used by About page
public/
  assets/images/           # .avif photos + .svg icons/arrows (see §6)
  fonts/                   # PolySans Trial .otf (neutral / bold / regular)
  .sitemap.xml
  pitch-deck-[kids-in-tech].pdf
```

**Conventions observed:**
- Page-level SEO lives in a sibling **`layout.js`** (server) because `page.jsx` is `"use client"`. Follow this pattern for every new route: `route/layout.js` (metadata) + `route/page.jsx` (client UI).
- Reusable sections live in `src/components/views/*.jsx`, one component per file, `PascalCase`, default export.
- Assets are **statically imported** from `public/assets/images/…` and rendered with `next/image` (`placeholder="blur"` on photos). SVGs imported as components/`src`.
- No barrel/index files; imports use the `@/` alias for `src` and relative `../../../public/...` for assets.

---

## 3. Existing routes

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.js` | Home, 6 stacked sections |
| `/about-us/` | `app/about-us/page.jsx` (+`layout.js`) | Story / team / sponsors |
| `/gallery/` | `app/gallery/page.jsx` (+`layout.js`) | 16-image masonry + lightbox |

In-page anchor targets used by nav: `#coding-bootcamp` (⚠️ see issues — the section id in code is actually rendered by `CodingClassSection`; verify exact id) and `#design-stem` (`Bootcamp.jsx`).

---

## 4. Design system (extracted; **currently hard-coded, no token file exists**)

### Colours (hex, by role — from a full `src/` scan)
| Role | Value(s) |
|---|---|
| Page background (cream) | `#FFF7F1` |
| Section tints (rotating pastels) | `#EDF4D6`, `#FDF2CB`, `#F6F8DC`, `#D6DE9B` (green-yellows) · `#D5EAF4` (blue) · `#F4E4D5` (peach) |
| Primary text / dark maroon | `#401D26` (also footer bg), `#401C26` (typo variant, see issues) |
| Near-black text | `#2D2124` |
| Dark card / panel | `#353226`, `#2C2F28`, `#214A25` |
| **Primary CTA red** | `#A41C3F` (buttons), `#A4431C` (accent) |
| **Accent teal/green** | `#0F766E` (active nav link), `#1CA48E` / `#1DA693` (WhatsApp button), `#34A33F` / `#60A41C` (success/registration) |
| **Accent gold/yellow** | `#FFDAA3` (badge pills) |
| Light text on dark | `#F1EAEB`, `#EEF3E9`, `#F3E9E9` |
| Borders / hairlines | `#F1E5DE` |
| About timeline accents | `#5B343E`, `#8E9E5A`, `#5C6D8F`, `#675982` |

**Note:** Tailwind utility `hover:text-yellow-400` (default palette) is used in the Footer — the brand's own gold is `#FFDAA3`, so the footer hover is slightly off-system.

### Typography
- **Display + body:** **PolySans Trial** (local `.otf`), exposed as CSS var `--font-polysans`.
  - Loaded weights in `layout.js`: **400** (`polysanstrial-neutral.otf`), **700** (`polysanstrial-bold.otf`).
  - `polysanstrial-regular.otf` exists in `public/fonts` but is **not wired up**.
- Headings are frequently **rendered as `.avif` image files** (e.g. `heroHeading.avif`, `stemHeading.avif`, `galleryHeading.avif`) rather than live text — a signature choice, but an **a11y/SEO consideration** (headings aren't real `<h1>` text). New sections should prefer real semantic headings styled with PolySans.

### Spacing / layout rhythm
- Section padding pattern: `px-4 sm:px-8 lg:px-[160px]` with `py-12 sm:py-16 lg:py-[96px]` (or `py-24`).
- `.container` utility: `width:100%; max-width:1536px; margin-inline:auto`.
- Cards: large radii — `rounded-4xl`, plus signature **skewed pill** badges (`-skew-x-[5deg]` with asymmetric `rounded-tl-[118px] rounded-br-[118px]`).
- Custom breakpoints (globals.css `@theme`): `sm 480 · md 768 · lg 1024 · xl 1280 · 2xl 1836`.

### Motion language (reuse these exact variants)
```js
fadeUp    // opacity 0→1, y 40→0, 0.6s easeOut (often custom-indexed for stagger)
float     // y [0,-10..-12,0], 3s infinite easeInOut  (decorative arrows)
staggerContainer // staggerChildren 0.25
```
Scroll reveal is done two ways: `whileInView + viewport={{once:true}}` (Hero/Gallery) and `useInView()` from react-intersection-observer driving `animate={inView?…}` (Bootcamp/Founder). **`prefers-reduced-motion` is NOT currently honoured anywhere** — an expansion opportunity.

### Signature motifs (must be reused, not reinvented)
- **Hand-drawn SVG arrows** between/around sections: `heroArr1/2`, `codingArr1-3`, `bootcamp-arr-1/2`, `outcome-arr-1/2`, `founder-arr-1/2`, `aboutSectionArr1/2`. Always wrapped in the `float` animation, `hidden lg:block absolute`.
- **Founder-note + "Register Now!" CTA** — `FounderNoteSection.jsx` reused on Home and Gallery; the footer also carries a "Register Now!" block. Good candidate to keep as the shared closing CTA on new pages.
- **Skewed pill section labels** (e.g. "Bootcamp Overview", "Coming Soon…").

---

## 5. Shared components — behaviour

- **`Header.jsx`** (`"use client"`, sticky, `bg-[#FFF7F1]`): logo → Home; nav = *Coding Bootcamp*, *Design & STEM* (both are **scroll-or-navigate to home-page section ids**, not routes), *Our Gallery* (`/gallery`), *About us* (`/about-us`); WhatsApp "Join Us" CTA; mobile slide-in drawer (Framer `AnimatePresence`) with the same links + a second "Start Learning Today!" CTA. Active-link state driven by an IntersectionObserver on section ids. **New nav routes must be added here (desktop `NavLinks` + mobile drawer).**
- **`Footer.jsx`** (`"use client"`, `bg-[#401D26]`): "Coding Bootcamp 2.0 is now open!" heading + "Register Now!" → Google Form; nav links (Home, Coding Bootcamp, Design & STEM scroll buttons, About Us → **`/about`**, Gallery → `/gallery`); phone `+2347067834186`; email **`hello@kidsintech.com`**; socials WhatsApp/Facebook/Instagram/X. **New nav routes must be added here too.**
- **`StructuredData.jsx`**: emits JSON-LD for `organization` | `website` | `breadcrumb`; all three mounted in root `<head>`. Founder listed as "Aliyu Mubarak", foundingDate 2023.
- **`GoogleAnalytics.jsx`**: gtag, rendered only when `NODE_ENV==="production"` and `NEXT_PUBLIC_GA_ID` is set.

---

## 6. Assets (`public/assets/images/`)
- **Photos:** `.avif`, statically imported, `placeholder="blur"`. Hero (`heroImg1-4`, `heroImg1&4`), about (`aboutImg*`, `aboutSectionImg*`), gallery (`gallerypic1-16` minus 11/12/13 which are `galleryimg1-3`), team (`team1-3`), outcomes (`outcome1-4`), sponsors (`sponsor1-3`), founder (`founder`, `founder-note`).
- **Heading images:** `.avif` (`heroHeading`, `stemHeading`, `galleryHeading`, `aboutHeading`, `founderHeading`, `learningHeading`, `teachHeading(+Mob)`, `teamHeading`, `sponsorHeading`, `codingLogo`).
- **Icons / decorative:** `.svg` — arrows, socials (`whatsapp/facebook/instagram/X`), `logo`, `menu`, `rocket`, `bigRocket`, `brain`, `computer`, `html/css/js`, `bootcamp1-5`, `gallery`.
- Data-driven expansion should point at these via `data/*` files so images swap without touching layout.

---

### 6a. Heading `.avif` text manifest (decoded via `sharp`→PNG and visually read)
Headings are rendered as images, not live text. Confirmed content (for a11y/SEO planning and to prove **no age text is baked into any asset**):

| Asset | Text in image |
|---|---|
| `heroHeading.avif` | "Building Bright Minds with Tech!" (+ `<code/>` / `create` / `Innovate` badges) |
| `aboutHeading.avif` | "Kids In Tech — Who Are We?" |
| `teachHeading.avif` / `teachHeadingMob.avif` | "What we Teach" |
| `learningHeading.avif` | "Learning Outcome" |
| `stemHeading.avif` | "Designing and STEM Learning Bootcamp" |
| `founderHeading.avif` | "Founder's Note" |
| `galleryHeading.avif` | "Our Little Place On The Internet" |
| `sponsorHeading.avif` | "Become a Sponsor" |
| `teamHeading.avif` | "Meet The Team" |

**Note for a batch owner:** each `<Image>` rendering a heading needs descriptive `alt` text matching the above (several currently use `alt="Heading"` / `alt="heading"`), and new pages should prefer real semantic `<h1>/<h2>` styled with PolySans over baked-in text.

## 7. Issues & inconsistencies spotted (to fix in the relevant batches, not now)

1. **About route split-brain:** Header → `/about-us`; Footer → `/about` (which does not exist under static export → 404). Pick one canonical route (`/about-us`) and fix the footer link (+ redirect if desired).
2. **Footer email wrong:** `hello@kidsintech.com` → should be **`hello@kidsintech.school`**.
3. **Bootcamp status contradiction:** Footer says "Coding Bootcamp 2.0 is now open!"; `Bootcamp.jsx` (Design & STEM) shows **₦0.00 / Duration "-" / "Coming Soon…"**. Needs a single data-driven status source (`upcoming|open|ended`).
4. **Ages 8–16 → 8–18:** ✅ **Resolved to a pure code fix.** The only occurrence is live copy in `CodingClassSection.jsx:98` (`"…kids (ages 8–16)…"`). **All 10 heading `.avif` images were decoded and visually inspected — none contain age text** (see §6a), so **no image re-export is needed for this fix.** (Also sanity-check any About-page copy when Batch 03 runs.)
5. **Placeholder SEO verification codes** in `layout.js`: `your-google-verification-code`, `your-yandex-…`, `your-yahoo-…` — replace with real values or remove.
6. **OG/Twitter images reference `.png`** (`/assets/images/heroHeading.png`, `aboutHeading.png`) but assets on disk are **`.avif`** → broken social preview images. Fix paths/formats.
7. **StructuredData image** references `heroImg1.png` (also `.avif` on disk); Course schema mentions only HTML/CSS/JS — will need to reflect the 4-level path (Scratch → Web → Robotics → Advanced).
8. **Two animation libraries** (`framer-motion` + `motion`): harmless today but worth standardising on one import source during Batch 01 to avoid drift.
9. **Dead CSS var:** `globals.css` sets `html { font-family: var(--font-tenor-sans) }` but that font is never defined (body correctly uses `--font-polysans`).
10. **`prefers-reduced-motion` not respected** anywhere (infinite `float` loops, reveals).
11. **Headings as images** (`.avif`) reduce semantic/SEO value and can't be translated/selected; consider real `<h1>`/`<h2>` for new pages.
12. **Typo variant** `#401C26` vs the standard `#401D26` in `about-us/page.jsx` (line ~42).
13. **No design-token layer** — colours/spacing are inline arbitrary values repeated across ~12 files. Batch 01 should introduce tokens (Tailwind `@theme` custom colors in `globals.css`) capturing the *current* values, then refactor incrementally — **without changing any rendered colour**.
14. **WhatsApp group link** is duplicated as a string literal in Header/Footer — candidate for the data layer.
15. **`.sitemap.xml`** is a hidden/dotfile name (`public/.sitemap.xml`) — likely won't be served as `/sitemap.xml`; verify.

---

## 8. Recommended foundation for Batch 01 (proposal — no code yet)

**Confirmed constraints (from project owner, locked for Batch 01):**
- **Tokens as Tailwind v4 `@theme` custom properties** in `globals.css` (NOT a separate `:root` block) so they're usable as utilities — fits the existing "arbitrary values, no CSS Modules" approach.
- **Token extraction must produce ZERO visual change.** Every value maps to the exact current hex.
- **Do NOT sweep all ~12 files.** Introduce the token layer, use it in **new** components, and convert only **a couple of existing files as a proven pattern** — leave the bulk of existing inline colours untouched (expand-don't-redesign applies to CSS too).
- **Prove no regression:** capture before/after screenshots of **Home, About, Gallery** across breakpoints after the token work and diff them; nothing should move.
- **`src/lib/motion.js` standardises on `framer-motion`** (the dominant existing import — 9 of 10 files; only `Header.jsx` uses `motion/react`). Do not introduce a second import style.
- **Nav anchor is data-driven, single source of truth:** the "Coding Bootcamp" link targets the section `id="coding-bootcamp"` rendered by `CodingClassSection.jsx:38`; "Design & STEM" targets `id="design-stem"` (`Bootcamp.jsx:52`). Define these anchor ids in one place.

**Scope:**
- Token layer in `globals.css` `@theme` (brand colours + pastel section tints + radii) named semantically (e.g. `--color-brand-red`, `--color-cream`, `--color-maroon`), exact-hex mapped.
- **`src/data/`** — start with `site.js` (contact, socials, WhatsApp link, nav model); add `programs.js`, `bootcamps.js`, `gallery.js`, etc. as later batches need them.
- **`src/lib/motion.js`** — shared `fadeUp`, `float`, `staggerContainer` + a `useReducedMotion`-aware wrapper (nothing honours reduced motion today).
- Small **`ScrollReveal`/`Section`** helper for consistent reveal rhythm.
- Make **Header + Footer** nav **data-driven** so new routes (Programs, Bootcamps, Projects, News, KITOS, Partner Schools, Contact) appear in desktop nav, mobile drawer, and footer together.

None of the above changes the existing look; it only prepares clean seams for Batches 02–11.

---

### ✅ Awaiting your confirmation of this analysis before starting **Batch 01 (foundation)**.
