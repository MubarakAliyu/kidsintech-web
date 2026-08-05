/*
 * schools.js — Partner Schools.
 * PLACEHOLDER data — do NOT invent real school names. Replace with real
 * partners + logos when supplied. `logo`/`photos` null → text/placeholder.
 * TODO: real names, logos, locations, counts, testimonials, photos.
 */
export const schools = [
  {
    id: 1,
    name: "[Partner School 1 — TODO]",
    logo: null,
    location: "[City — TODO]",
    bootcampConducted: "[e.g. Coding Bootcamp — TODO]",
    studentsTrained: null,
    testimonial: "[Short quote from the school — TODO]",
    photos: [],
    url: null,
  },
  {
    id: 2,
    name: "[Partner School 2 — TODO]",
    logo: null,
    location: "[City — TODO]",
    bootcampConducted: "[TODO]",
    studentsTrained: null,
    testimonial: "[Short quote from the school — TODO]",
    photos: [],
    url: null,
  },
  {
    id: 3,
    name: "[Partner School 3 — TODO]",
    logo: null,
    location: "[City — TODO]",
    bootcampConducted: "[TODO]",
    studentsTrained: null,
    testimonial: "[Short quote from the school — TODO]",
    photos: [],
    url: null,
  },
  {
    id: 4,
    name: "[Partner School 4 — TODO]",
    logo: null,
    location: "[City — TODO]",
    bootcampConducted: "[TODO]",
    studentsTrained: null,
    testimonial: "",
    photos: [],
    url: null,
  },
  {
    id: 5,
    name: "[Partner School 5 — TODO]",
    logo: null,
    location: "[City — TODO]",
    bootcampConducted: "[TODO]",
    studentsTrained: null,
    testimonial: "",
    photos: [],
    url: null,
  },
  {
    id: 6,
    name: "[Partner School 6 — TODO]",
    logo: null,
    location: "[City — TODO]",
    bootcampConducted: "[TODO]",
    studentsTrained: null,
    testimonial: "",
    photos: [],
    url: null,
  },
];

// School testimonials (only those with a quote) for the reused carousel.
export const schoolTestimonials = schools
  .filter((s) => s.testimonial)
  .map((s) => ({
    id: s.id,
    quote: s.testimonial,
    author: s.name,
    role: s.location || "Partner School",
  }));

export default schools;
