/*
 * bootcamps.js — cohort data. `status` is the SINGLE SOURCE OF TRUTH for
 * "ended | open | upcoming" across the whole site. No component should
 * hard-code a bootcamp's state — read it from here. This is what makes the
 * old "now open vs Coming Soon ₦0.00" contradiction structurally impossible.
 *
 * Ref fields point into other data modules (resolved at render):
 *   galleryCohort  → filters data/gallery.js items by `cohort`
 *   tracks         → programs.js slugs
 *   projectRefs    → projects.js slugs
 *   testimonialRefs→ testimonials.js ids
 *   videos         → YouTube ids (nocookie facade)
 *
 * TODO: confirm all dates/prices/venues; supply per-cohort photos (tag in
 * gallery.js), real videos, project media, and certificate images.
 */
import { site } from "./site";

export const bootcamps = [
  {
    slug: "bootcamp-1",
    cohort: 1,
    title: "Coding Bootcamp — Cohort 1",
    edition: "Cohort 1",
    status: "ended",
    startDate: null, // TODO
    endDate: null, // TODO
    ages: site.ages,
    price: { amount: 0, currency: "NGN", label: "Free" }, // TODO confirm
    location: "[Venue — TODO]",
    tracks: ["scratch", "web-development"],
    overview:
      "Where Kids in Tech began — our very first cohort of young coders taking their first steps into technology. [Full recap — TODO]",
    highlights: [
      "First cohort of students",
      "Hands-on coding basics",
      "Showcase day",
    ],
    curriculumWeeks: [], // TODO
    galleryCohort: 1,
    videos: [], // TODO: YouTube ids + titles
    projectRefs: [],
    testimonialRefs: [1],
    certificateNote: "Participants received a Certificate of Participation.",
    certificateImage: null, // TODO
  },
  {
    slug: "bootcamp-2",
    cohort: 2,
    title: "Coding Bootcamp — Cohort 2",
    edition: "Cohort 2",
    status: "ended",
    startDate: null,
    endDate: null,
    ages: site.ages,
    price: { amount: 0, currency: "NGN", label: "Free" },
    location: "[Venue — TODO]",
    tracks: ["scratch", "web-development"],
    overview:
      "Our second cohort grew the community and deepened the curriculum. [Full recap — TODO]",
    highlights: [
      "Bigger cohort",
      "More hands-on projects",
      "Growing community",
    ],
    curriculumWeeks: [],
    galleryCohort: 2,
    videos: [],
    projectRefs: [],
    testimonialRefs: [2],
    certificateNote: "Participants received a Certificate of Participation.",
    certificateImage: null,
  },
  {
    slug: "bootcamp-3",
    cohort: 3,
    title: "Coding Bootcamp — Cohort 3",
    edition: "Cohort 3",
    status: "ended",
    startDate: "2025-08-06",
    endDate: "2025-08-24",
    ages: site.ages,
    price: { amount: 25000, currency: "NGN", label: "₦25,000" },
    location: "[Venue — TODO]",
    tracks: ["web-development"],
    overview:
      "Our most recent completed coding bootcamp — kids went from “What is a computer?” to “Look at the website I built!” across three focused weeks of HTML, CSS and JavaScript.",
    highlights: [
      "HTML, CSS & JavaScript",
      "Every child built a real web page",
      "Certificate showcase",
    ],
    curriculumWeeks: [
      {
        week: 1,
        title: "The Building Blocks (HTML)",
        icon: "html",
        blurb: "Structure the first web page with HTML.",
      },
      {
        week: 2,
        title: "Making it Beautiful (CSS)",
        icon: "css",
        blurb: "Style and lay out pages with CSS.",
      },
      {
        week: 3,
        title: "Make it Work (JavaScript Basics)",
        icon: "js",
        blurb: "Add interactivity with JavaScript.",
      },
    ],
    galleryCohort: 3,
    videos: [],
    projectRefs: [],
    testimonialRefs: [3],
    certificateNote: "Participants received a Certificate of Participation.",
    certificateImage: null,
  },
  {
    slug: "bootcamp-4",
    cohort: 4,
    title: "Coding Bootcamp 2.0",
    edition: "Bootcamp 2.0",
    // Marked open to match the current site CTA. Flip to "upcoming"/"ended"
    // here and every surface (index badge, cohort page, Home) updates.
    status: "open",
    startDate: null, // TODO: real start date drives the countdown
    endDate: null, // TODO
    ages: site.ages,
    price: { amount: 0, currency: "NGN", label: "Free" }, // TODO confirm
    location: "[Venue — TODO]",
    tracks: [
      "scratch",
      "web-development",
      "robotics-embedded",
      "advanced-track",
    ],
    overview:
      "Our latest cohort — now open for registration. A creative, hands-on journey through design, coding and STEM. [Dates, venue & schedule — TODO]",
    highlights: [
      "Design + STEM + coding",
      "Hands-on projects",
      "Showcase & certificates",
    ],
    curriculumWeeks: [
      {
        week: 1,
        title: "Introduction & Foundations",
        icon: "bootcamp1",
        blurb: "Getting started and the big picture.",
      },
      {
        week: 2,
        title: "Exploring Creativity & Science",
        icon: "bootcamp2",
        blurb: "Design thinking and STEM discovery.",
      },
      {
        week: 3,
        title: "Building & Designing Projects",
        icon: "bootcamp3",
        blurb: "Bring ideas to life.",
      },
      {
        week: 4,
        title: "Coding & Interactivity",
        icon: "bootcamp4",
        blurb: "Add real code and interaction.",
      },
      {
        week: 5,
        title: "Fun, Innovation & Showcase",
        icon: "bootcamp5",
        blurb: "Present projects and celebrate.",
      },
    ],
    galleryCohort: 4,
    videos: [],
    projectRefs: [],
    testimonialRefs: [],
    certificateNote:
      "Participants receive a Certificate of Participation (Certificate of Completion via KITOS, later).",
    certificateImage: null,
  },
];

// Helpers — the ONLY way status should be queried.
export const getBootcamp = (slug) =>
  bootcamps.find((b) => b.slug === slug) || null;
export const openBootcamp = bootcamps.find((b) => b.status === "open") || null;
export const upcomingBootcamp =
  bootcamps.find((b) => b.status === "upcoming") || null;
export const currentBootcamp = openBootcamp || upcomingBootcamp; // the one to register for
export const endedBootcamps = bootcamps.filter((b) => b.status === "ended");

export default bootcamps;
