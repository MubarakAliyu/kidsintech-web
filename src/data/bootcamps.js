/*
 * bootcamps.js — cohort data + status.
 * THIS IS THE SINGLE SOURCE that later resolves the current
 * "Coding Bootcamp 2.0 is now open!" (footer) vs "Coming Soon / ₦0.00"
 * (Design & STEM section) contradiction. Drive all bootcamp status UI
 * from `status` here.
 *
 * status: "ended" | "open" | "upcoming"
 *   - ended    → completed cohort (show recap / gallery)
 *   - open     → registration currently open
 *   - upcoming → announced, registration not yet open
 *
 * TODO: confirm all dates, prices and per-cohort curricula with the team.
 */
export const bootcamps = [
  {
    slug: "bootcamp-1",
    cohort: 1,
    title: "Coding Bootcamp — Cohort 1",
    status: "ended",
    startDate: null, // TODO
    endDate: null, // TODO
    price: { amount: 0, currency: "NGN", label: "Free" }, // TODO confirm
    summary: "Our first cohort — where Kids in Tech began. [Recap — TODO]",
    weeks: [], // TODO: per-cohort curriculum
    students: null, // TODO
  },
  {
    slug: "bootcamp-2",
    cohort: 2,
    title: "Coding Bootcamp — Cohort 2",
    status: "ended",
    startDate: null,
    endDate: null,
    price: { amount: 0, currency: "NGN", label: "Free" },
    summary: "Second cohort. [Recap — TODO]",
    weeks: [],
    students: null,
  },
  {
    slug: "bootcamp-3",
    cohort: 3,
    title: "Coding Bootcamp — Cohort 3",
    status: "ended",
    startDate: null,
    endDate: null,
    price: { amount: 0, currency: "NGN", label: "Free" },
    summary: "Third completed cohort. [Recap — TODO]",
    weeks: [],
    students: null,
  },
  {
    slug: "bootcamp-4",
    cohort: 4,
    title: "Coding Bootcamp 2.0",
    // Marked open to match the current footer CTA ("now open!"). Flip to
    // "upcoming"/"ended" here and every surface updates.
    status: "open",
    startDate: null, // TODO
    endDate: null, // TODO
    price: { amount: 0, currency: "NGN", label: "Free" }, // TODO confirm
    summary:
      "Our latest cohort — now open for registration. [Details — TODO: dates, venue, schedule]",
    // Curriculum mirrors the 5-week structure currently shown in the
    // Design & STEM section; confirm/replace per cohort.
    weeks: [
      { week: 1, title: "Introduction & Foundations" },
      { week: 2, title: "Exploring Creativity & Science" },
      { week: 3, title: "Building & Designing Projects" },
      { week: 4, title: "Coding & Interactivity" },
      { week: 5, title: "Fun, Innovation & Showcase" },
    ],
    students: null,
  },
];

// Helpers
export const openBootcamp = bootcamps.find((b) => b.status === "open") || null;
export const upcomingBootcamp =
  bootcamps.find((b) => b.status === "upcoming") || null;
export const endedBootcamps = bootcamps.filter((b) => b.status === "ended");

export default bootcamps;
