/*
 * about.js — content for the expanded About page (mission, vision, values,
 * journey timeline, roadmap). Derived from existing About/founder copy — no
 * fabricated facts. Dates that aren't confirmed are TODO.
 */
import { site } from "./site";

export const about = {
  mission: `To inspire and equip children ages ${site.ages} with essential tech and creative skills — through fun, hands-on learning in coding, design and STEM that sparks curiosity and confidence.`,
  vision:
    "A generation of young people who don't just use technology, but create with it — supported by a program that grows and endures instead of fading after a single event.",

  // Themes drawn from the founder story ("continuity", "creativity", "confidence", "community").
  values: [
    {
      title: "Creativity",
      blurb:
        "We help kids imagine and build, not just consume — every session ends in something they made.",
    },
    {
      title: "Confidence",
      blurb:
        "Reasoning, creating and presenting their ideas builds belief that carries far beyond code.",
    },
    {
      title: "Continuity",
      blurb:
        "We break the cycle of one-off events with a sustainable, evolving learning path.",
    },
    {
      title: "Community",
      blurb:
        "Parents, mentors, schools and partners keep the momentum alive together.",
    },
  ],

  // Our journey — the story so far. TODO: confirm exact dates for cohorts 1–2.
  journey: [
    {
      phase: "It started at home",
      date: null,
      blurb:
        "A founder teaching his young nieces — their excitement sparked the idea.",
    },
    {
      phase: "First bootcamp cohort",
      date: null,
      blurb:
        "A small family activity grew into a real cohort of young coders. [Date — TODO]",
    },
    {
      phase: "The community grows",
      date: null,
      blurb:
        "A second cohort deepened the curriculum and widened the circle. [Date — TODO]",
    },
    {
      phase: "Coding Bootcamp — Cohort 3",
      date: "2025-08-06",
      blurb:
        "Three focused weeks of HTML, CSS and JavaScript — every child shipped a real web page.",
    },
    {
      phase: "111+ students & counting",
      date: null,
      blurb:
        "Across three cohorts, 111+ young makers trained and multiple partner schools joined.",
    },
    {
      phase: "Coding Bootcamp 2.0",
      date: null,
      blurb: "Our latest cohort — now open, blending design, coding and STEM.",
    },
  ],

  // What's next — roadmap. Ties to existing site sections; nothing over-claimed.
  roadmap: [
    {
      title: "More tracks & cohorts",
      blurb:
        "Growing beyond coding into Robotics and the Advanced Track (AI, Game & Mobile).",
      href: "/programs",
      status: "In progress",
    },
    {
      title: "Partner schools",
      blurb: "Bringing bootcamps to more schools across the community.",
      href: "/partner-schools",
      status: "Growing",
    },
    {
      title: "Innovation Challenge",
      blurb: "A stage for young makers to pitch and build real solutions.",
      href: "/innovation-challenge",
      status: "Coming soon",
    },
    {
      title: "KITOS platform",
      blurb:
        "A learning platform to sustain progress and issue the Certificate of Completion.",
      href: "/kitos",
      status: "Coming soon",
    },
  ],
};

export default about;
