/*
 * programs.js — the 4-level learning path.
 * Source of truth for the Programs page (Batch 04) and any "pathway"
 * previews on Home/About. `colorToken` references a token from
 * globals.css @theme so cards stay on-palette.
 *
 * TODO: confirm durations/prerequisites/certification wording with the
 * team; icons currently reuse existing SVGs in public/assets/images.
 */
export const programs = [
  {
    slug: "scratch",
    level: 1,
    name: "Scratch Programming",
    stage: "Foundation",
    focus: "Logic & thinking",
    overview:
      "The starting point: kids learn computational thinking, sequencing, and problem-solving by building games and animations in Scratch — no typing syntax required.",
    outcomes: [
      "Break problems into steps (algorithms)",
      "Use loops, events and conditionals visually",
      "Build a playable game or animation",
    ],
    ages: "8–12", // TODO: confirm per-level age bands
    duration: "5 weeks", // TODO: confirm
    prerequisites: "None — total beginners welcome",
    certification: "Certificate of Participation",
    icon: "brain", // public/assets/images/brain.svg
    colorToken: "tint-butter",
  },
  {
    slug: "web-development",
    level: 2,
    name: "Web Development",
    stage: "Structure",
    focus: "Building for the web",
    overview:
      "Kids move from blocks to real code, building their first web pages with HTML, CSS and a taste of JavaScript — and publishing something they can share.",
    outcomes: [
      "Structure a page with HTML",
      "Style layouts with CSS",
      "Add simple interactivity with JavaScript",
    ],
    ages: "10–15", // TODO: confirm
    duration: "5 weeks", // TODO: confirm
    prerequisites:
      "Comfortable with a computer; Scratch helpful but not required",
    certification: "Certificate of Participation",
    icon: "html", // public/assets/images/html.svg
    colorToken: "tint-lime",
  },
  {
    slug: "robotics-embedded",
    level: 3,
    name: "Robotics & Embedded Systems",
    stage: "Integration",
    focus: "Programming & control",
    overview:
      "Where code meets the physical world: kids program microcontrollers and build robots, connecting sensors and motors to bring their projects to life.",
    outcomes: [
      "Wire and program a microcontroller",
      "Read sensors and drive motors",
      "Build a working robot project",
    ],
    ages: "12–18", // TODO: confirm
    duration: "6 weeks", // TODO: confirm
    prerequisites: "Basic coding (Scratch or Web Development)",
    certification: "Certificate of Participation",
    icon: "computer", // public/assets/images/computer.svg
    colorToken: "tint-blue",
  },
  {
    slug: "advanced-track",
    level: 4,
    name: "Advanced Track",
    stage: "Specialization",
    focus: "Choose your path",
    overview:
      "For learners ready to go deep. Specialise in one of three directions and build a substantial project you can show off.",
    specializations: [
      "AI & Prompt Engineering",
      "Game Development",
      "Mobile App Development",
    ],
    outcomes: [
      "Pick a specialization and scope a real project",
      "Apply prior skills to a larger build",
      "Ship and present a portfolio-worthy project",
    ],
    ages: "14–18", // TODO: confirm
    duration: "6–8 weeks", // TODO: confirm
    prerequisites: "Web Development or Robotics track",
    certification:
      "Certificate of Participation (Certificate of Completion via KITOS, later)",
    icon: "rocket", // public/assets/images/rocket.svg
    colorToken: "tint-peach",
  },
];

export default programs;
