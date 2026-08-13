/*
 * nav.js — SINGLE SOURCE OF TRUTH for site navigation.
 * Header (desktop + "More" dropdown), Footer, and the mobile drawer all
 * render from the exports here so a route only has to be added once.
 *
 * Verified anchor ids (grep-confirmed in code, do not guess):
 *   - "coding-bootcamp" → CodingClassSection.jsx (src/components/views/CodingClassSection.jsx:38)
 *   - "design-stem"     → Bootcamp.jsx           (src/components/views/Bootcamp.jsx:52)
 * These are in-page scroll targets on the Home route, kept here as the
 * one place their ids live.
 */

// In-page section anchors on the Home ("/") route.
export const homeAnchors = {
  codingBootcamp: "coding-bootcamp", // CodingClassSection
  designStem: "design-stem", // Bootcamp (Design & STEM)
};

/*
 * Primary destinations. `primary: true` items show inline in the desktop
 * header (kept to 4 — matching the current header's link count so its look
 * and height don't change); the rest live under a "More" dropdown. Every
 * item appears in the footer and the mobile drawer.
 *
 * `stub: true` marks routes whose pages are placeholders this batch and
 * get fleshed out in later batches.
 */
export const mainNav = [
  { label: "Home", href: "/", primary: false },
  { label: "Programs", href: "/programs", primary: true, stub: true },
  { label: "Bootcamps", href: "/bootcamps", primary: true, stub: true },
  {
    label: "Student Projects",
    href: "/student-projects",
    primary: false,
    stub: true,
  },
  {
    label: "Innovation Challenge",
    href: "/innovation-challenge",
    primary: false,
    stub: true,
  },
  { label: "Gallery", href: "/gallery", primary: true },
  { label: "News", href: "/news", primary: false, stub: true },
  { label: "KITOS", href: "/kitos", primary: false, stub: true },
  {
    label: "Partner Schools",
    href: "/partner-schools",
    primary: false,
    stub: true,
  },
  { label: "About us", href: "/about-us", primary: true },
  { label: "Contact", href: "/contact", primary: false, stub: true },
];

/*
 * Home-section scroll links (Coding Bootcamp / Design & STEM). These are
 * NOT routes — they scroll to a section on Home (or navigate Home first).
 * Preserved from the current header/footer so no existing behaviour is
 * lost; surfaced in the "More" dropdown and the mobile drawer.
 */
export const homeSectionNav = [
  { label: "Coding Bootcamp", anchor: homeAnchors.codingBootcamp },
  { label: "Design & STEM", anchor: homeAnchors.designStem },
];

// Convenience selectors.
export const primaryNav = mainNav.filter((i) => i.primary);
export const moreNav = mainNav.filter((i) => !i.primary && i.href !== "/");

export default mainNav;
