/*
 * projects.js — student project showcase (Batch 06).
 *
 * PRIVACY: never invent real full names. `studentFirstName` defaults to
 * "Anonymous"; use a first name / initials ONLY when the team confirms
 * permission. The set below is a small, realistic PLACEHOLDER seed — every
 * `media.src`, `thumbnail`, and title is TODO until real work is supplied.
 * Do not treat these as real projects.
 *
 * Shape:
 *   id, title, studentFirstName, cohort (bootcamps cohort number),
 *   track  ("scratch"|"web"|"robotics"|"ai"|"game"|"mobile"),
 *   type   (filter category: "scratch"|"website"|"robotics"|"ai"|"game"|"mobile"),
 *   thumbnail (image import | null → placeholder tile),
 *   media  { kind: "image"|"video"|"liveUrl"|"scratchEmbed", src, embeddable? },
 *          - liveUrl.embeddable defaults false → modal shows screenshot +
 *            "Open project ↗" (never a raw iframe that X-Frame-Options breaks).
 *   description, tags[], featured (bool).
 */
export const projects = [
  {
    id: "p1",
    title: "[Maze Runner — Scratch game — TODO]",
    studentFirstName: "Anonymous",
    cohort: 3,
    track: "scratch",
    type: "scratch",
    thumbnail: null,
    media: { kind: "scratchEmbed", src: null }, // TODO: Scratch project id
    description: "[A maze game built in Scratch — TODO: real description]",
    tags: ["Scratch", "Game"],
    featured: true,
  },
  {
    id: "p2",
    title: "[My First Website — TODO]",
    studentFirstName: "Anonymous",
    cohort: 3,
    track: "web",
    type: "website",
    thumbnail: null,
    media: { kind: "liveUrl", src: null, embeddable: false }, // TODO: real URL
    description: "[A personal website built with HTML & CSS — TODO]",
    tags: ["HTML", "CSS", "Web"],
    featured: true,
  },
  {
    id: "p3",
    title: "[Obstacle-Avoiding Robot — TODO]",
    studentFirstName: "Anonymous",
    cohort: 1,
    track: "robotics",
    type: "robotics",
    thumbnail: null,
    media: { kind: "image", src: null }, // TODO: photo(s)
    description: "[A robot that avoids obstacles using sensors — TODO]",
    tags: ["Robotics", "Sensors"],
    featured: true,
  },
  {
    id: "p4",
    title: "[AI Helper Bot — TODO]",
    studentFirstName: "Anonymous",
    cohort: 4,
    track: "ai",
    type: "ai",
    thumbnail: null,
    media: { kind: "video", src: null }, // TODO: YouTube id
    description: "[An AI assistant demo — TODO]",
    tags: ["AI", "Prompting"],
    featured: false,
  },
  {
    id: "p5",
    title: "[Platformer Game — TODO]",
    studentFirstName: "Anonymous",
    cohort: 2,
    track: "game",
    type: "game",
    thumbnail: null,
    media: { kind: "video", src: null }, // TODO: YouTube id or gameplay
    description: "[A 2D platformer game — TODO]",
    tags: ["Game Dev"],
    featured: false,
  },
  {
    id: "p6",
    title: "[Quiz Mobile App — TODO]",
    studentFirstName: "Anonymous",
    cohort: 4,
    track: "mobile",
    type: "mobile",
    thumbnail: null,
    media: { kind: "image", src: null }, // TODO: screenshots
    description: "[A mobile quiz app — TODO]",
    tags: ["Mobile"],
    featured: false,
  },
  {
    id: "p7",
    title: "[Animated Story — TODO]",
    studentFirstName: "Anonymous",
    cohort: 2,
    track: "scratch",
    type: "scratch",
    thumbnail: null,
    media: { kind: "scratchEmbed", src: null },
    description: "[An animated story made in Scratch — TODO]",
    tags: ["Scratch", "Animation"],
    featured: false,
  },
];

// Human labels for filter categories (kept here so FilterBar stays generic).
export const projectTypeLabels = {
  scratch: "Scratch Games",
  website: "Websites",
  robotics: "Robotics",
  ai: "AI",
  game: "Game Dev",
  mobile: "Mobile",
};

// Filters (with counts) for the FilterBar: All + one per present type.
export const projectFilters = [
  { key: "all", label: "All", count: projects.length },
  ...Object.entries(projectTypeLabels)
    .map(([key, label]) => ({
      key,
      label,
      count: projects.filter((p) => p.type === key).length,
    }))
    .filter((f) => f.count > 0),
];

export const featuredProjects = projects.filter((p) => p.featured);
export const projectTracks = [...new Set(projects.map((p) => p.track))];

export default projects;
