/*
 * projects.js — student project showcase (Batch 06).
 * PLACEHOLDER data — replace with real student work (never invent real
 * names). `youtubeId` (nocookie embed) and `liveUrl` are optional.
 * `thumbnail` null → components render an on-brand placeholder tile.
 */
export const projects = [
  {
    slug: "placeholder-project-1",
    title: "[Student Game — TODO]",
    student: "[First name — TODO]",
    track: "advanced-track",
    trackLabel: "Game Development",
    cohort: null,
    description: "[Short description of the project — TODO]",
    thumbnail: null,
    liveUrl: null,
    youtubeId: null,
    tags: ["Game Dev"],
    featured: true,
  },
  {
    slug: "placeholder-project-2",
    title: "[Personal Website — TODO]",
    student: "[First name — TODO]",
    track: "web-development",
    trackLabel: "Web Development",
    cohort: null,
    description: "[Short description of the project — TODO]",
    thumbnail: null,
    liveUrl: null,
    youtubeId: null,
    tags: ["Web"],
    featured: true,
  },
  {
    slug: "placeholder-project-3",
    title: "[Scratch Animation — TODO]",
    student: "[First name — TODO]",
    track: "scratch",
    trackLabel: "Scratch",
    cohort: null,
    description: "[Short description of the project — TODO]",
    thumbnail: null,
    liveUrl: null,
    youtubeId: null,
    tags: ["Scratch"],
    featured: true,
  },
  {
    slug: "placeholder-project-4",
    title: "[Robotics Build — TODO]",
    student: "[First name — TODO]",
    track: "robotics-embedded",
    trackLabel: "Robotics",
    cohort: null,
    description: "[Short description of the project — TODO]",
    thumbnail: null,
    liveUrl: null,
    youtubeId: null,
    tags: ["Robotics"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const projectTracks = [...new Set(projects.map((p) => p.track))];

export default projects;
