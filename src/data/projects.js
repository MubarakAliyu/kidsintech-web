/*
 * projects.js — student project showcase (Batch 06).
 * PLACEHOLDER data — replace with real student work.
 * `youtubeId` (nocookie embed) and `liveUrl` are optional per project.
 */
export const projects = [
  {
    slug: "placeholder-project-1",
    title: "[Student Project — TODO]",
    student: "[First name — TODO]",
    track: "web-development", // matches a programs.js slug
    cohort: null,
    description: "[Short description of the project — TODO]",
    thumbnail: null, // TODO: /assets/images/...
    liveUrl: null, // TODO: real project link
    youtubeId: null, // TODO: YouTube id for nocookie embed
    tags: ["TODO"],
    featured: false,
  },
];

export const projectTracks = [...new Set(projects.map((p) => p.track))];

export default projects;
