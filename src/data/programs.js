/*
 * programs.js — the 4-level learning path.
 * Source of truth for the Programs page (Batch 04), the Home/About
 * "pathway" previews, and Course JSON-LD. `colorToken` references a token
 * from globals.css @theme so cards stay on-palette.
 *
 * Adding a track, project, or specialization is a DATA-ONLY change.
 * `image` (track media) and project `thumbnail` are null → components
 * render an on-brand placeholder tile until real assets are supplied.
 *
 * TODO: confirm per-level age bands, durations, prerequisites, and supply
 * real project media/examples per track.
 */
export const programs = [
  {
    slug: "scratch",
    level: 1,
    name: "Scratch Programming",
    stage: "Foundation",
    focus: "Logic & thinking",
    overview:
      "The starting point: kids learn computational thinking, sequencing, and problem-solving by building games and animated stories in Scratch — no typing syntax required.",
    outcomes: [
      "Break problems into steps (algorithms)",
      "Use loops, events and conditionals visually",
      "Design characters, sprites and scenes",
      "Build a playable game or animated story",
    ],
    projects: [
      { title: "[Maze / catch game — TODO]", thumbnail: null },
      { title: "[Animated story — TODO]", thumbnail: null },
    ],
    ages: "8–18", // programs are open to 8–18; younger learners usually start here
    duration: "5 weeks", // TODO: confirm
    prerequisites: "None — total beginners welcome",
    certification: "Certificate of Participation",
    icon: "brain", // public/assets/images/brain.svg
    colorToken: "tint-butter",
    image: null, // TODO: track photo/graphic
  },
  {
    slug: "web-development",
    level: 2,
    name: "Web Development",
    stage: "Structure",
    focus: "Building for the web",
    overview:
      "Kids move from blocks to real code, building their first web pages with HTML, CSS and a taste of JavaScript — and publishing something they can share online.",
    outcomes: [
      "Structure a page with semantic HTML",
      "Style responsive layouts with CSS",
      "Add interactivity with JavaScript",
      "Deploy and share a live web page",
    ],
    projects: [
      { title: "[Personal profile site — TODO]", thumbnail: null },
      { title: "[Mini quiz app — TODO]", thumbnail: null },
    ],
    ages: "8–18",
    duration: "5 weeks", // TODO: confirm
    prerequisites:
      "Comfortable with a computer; Scratch helpful but not required",
    certification: "Certificate of Participation",
    icon: "html", // public/assets/images/html.svg
    colorToken: "tint-lime",
    image: null,
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
      "Combine hardware with code logic",
      "Build a working robot project",
    ],
    projects: [
      { title: "[Obstacle-avoiding robot — TODO]", thumbnail: null },
      { title: "[Smart sensor gadget — TODO]", thumbnail: null },
    ],
    ages: "8–18",
    duration: "6 weeks", // TODO: confirm
    prerequisites: "Basic coding (Scratch or Web Development)",
    certification: "Certificate of Participation",
    icon: "computer", // public/assets/images/computer.svg
    colorToken: "tint-blue",
    image: null,
  },
  {
    slug: "advanced-track",
    level: 4,
    name: "Advanced Track",
    stage: "Specialization",
    focus: "Choose your path",
    overview:
      "For learners ready to go deep. Specialise in one of three directions and build a substantial, portfolio-worthy project you can show off.",
    specializations: [
      {
        name: "AI & Prompt Engineering",
        blurb:
          "Build with modern AI — craft prompts, design assistants, and explore how intelligent tools work.",
      },
      {
        name: "Game Development",
        blurb:
          "Design and code real games — mechanics, levels, art and sound — beyond drag-and-drop.",
      },
      {
        name: "Mobile App Development",
        blurb:
          "Turn ideas into apps that run on a phone, from UI to logic to sharing them.",
      },
    ],
    outcomes: [
      "Pick a specialization and scope a real project",
      "Apply prior skills to a larger build",
      "Ship and present a portfolio-worthy project",
    ],
    projects: [
      { title: "[AI assistant demo — TODO]", thumbnail: null },
      { title: "[Original game — TODO]", thumbnail: null },
      { title: "[Mobile app — TODO]", thumbnail: null },
    ],
    ages: "8–18",
    duration: "6–8 weeks", // TODO: confirm
    prerequisites: "Web Development or Robotics track",
    certification:
      "Certificate of Participation (Certificate of Completion via KITOS, later)",
    icon: "rocket", // public/assets/images/rocket.svg
    colorToken: "tint-peach",
    image: null,
  },
];

export default programs;
