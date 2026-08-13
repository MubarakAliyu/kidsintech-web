/*
 * challenge.js — Kids in Tech STEM Innovation Challenge.
 * `status` drives the hero CTA + status pill. Prizes/judges/sponsors are
 * PLACEHOLDER — never invent real names or over-claim prizes.
 * TODO: confirm dates, prizes, judges, sponsors, and rules.
 */
import { site } from "./site";

export const challenge = {
  status: "coming-soon", // "coming-soon" | "open" | "closed"
  title: "Kids in Tech STEM Innovation Challenge",
  tagline:
    "Where young makers pitch and build creative tech solutions to real problems.",
  overview:
    "The Innovation Challenge invites kids and teens to dream up and build a project that uses technology to solve a problem they care about — and show the world what young minds can do.",
  eligibility: `Open to young makers ages ${site.ages}. [Full eligibility — TODO]`,
  registrationUrl: site.registrationUrl,
  // Used by the Home EventsPreview (Batch 02) — keep these.
  ctaLabel: "Learn about the Challenge",
  href: "/innovation-challenge",

  // Competition tracks map to the learning tracks where sensible.
  tracks: [
    {
      name: "Scratch Creations",
      programSlug: "scratch",
      blurb: "Games and animated stories that teach or delight.",
    },
    {
      name: "Web for Good",
      programSlug: "web-development",
      blurb: "A website that solves a real problem in your community.",
    },
    {
      name: "Robotics & Making",
      programSlug: "robotics-embedded",
      blurb: "A robot or gadget that does something useful.",
    },
    {
      name: "AI Explorers",
      programSlug: "advanced-track",
      blurb: "A creative use of AI to help people.",
    },
  ],

  // Ordered timeline (for the reused/animated Timeline).
  timeline: [
    {
      phase: "Registration opens",
      date: null,
      blurb: "[Date — TODO] Sign up and pick a track.",
    },
    {
      phase: "Build phase",
      date: null,
      blurb: "[Dates — TODO] Weeks to design and build your project.",
    },
    {
      phase: "Submissions close",
      date: null,
      blurb: "[Date — TODO] Final projects due.",
    },
    {
      phase: "Judging & showcase",
      date: null,
      blurb: "[Date — TODO] Projects judged; finalists showcase.",
    },
    { phase: "Awards", date: null, blurb: "[Date — TODO] Winners celebrated." },
  ],

  // Prizes — placeholder, not over-claimed.
  prizes: [
    {
      place: "1st place",
      title: "[Grand prize — TODO]",
      blurb: "[e.g. a laptop or tech kit — TODO confirm]",
    },
    { place: "2nd place", title: "[Runner-up prize — TODO]", blurb: "[TODO]" },
    { place: "3rd place", title: "[Third prize — TODO]", blurb: "[TODO]" },
    {
      place: "All finalists",
      title: "Certificate of Participation",
      blurb: "Every finalist is recognised.",
    },
  ],

  judges: [
    { name: "[Judge — TODO]", role: "[Role/organisation — TODO]", photo: null },
    { name: "[Judge — TODO]", role: "[Role/organisation — TODO]", photo: null },
    { name: "[Judge — TODO]", role: "[Role/organisation — TODO]", photo: null },
  ],

  sponsors: [
    { name: "[Sponsor — TODO]", logo: null },
    { name: "[Sponsor — TODO]", logo: null },
  ],

  // Rules & eligibility (accordion).
  rules: [
    {
      q: "Who can enter?",
      a: `The Challenge is open to young makers ages ${site.ages}. [Confirm details — TODO]`,
    },
    {
      q: "Can I enter as a team?",
      a: "[Team rules — TODO: individual and/or small teams.]",
    },
    {
      q: "What can I build?",
      a: "Anything that fits one of the tracks and solves a real problem. [Full rules — TODO]",
    },
    {
      q: "What do I need to submit?",
      a: "[Submission requirements — TODO: project + short demo/description.]",
    },
    {
      q: "How is it judged?",
      a: "[Judging criteria — TODO: creativity, impact, execution.]",
    },
  ],
};

export default challenge;
