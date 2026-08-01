/*
 * gallery.js — the 16 gallery photos, organised by category/cohort so the
 * Gallery page (Batch 07) can filter them and cohort pages (Batch 05) can
 * pull their own. Static imports keep next/image blur placeholders.
 *
 * HOW TO ADD A NEW COHORT'S PHOTOS (no layout edits needed):
 *   1. Drop the AVIF files in public/assets/images/.
 *   2. `import` them here and append entries to `galleryItems` with the
 *      right `category` (e.g. "Bootcamp 5") and `cohort` number.
 *   3. For a video, add `{ kind: "video", videoId: "<youtube id>", ... }`.
 *   The FilterBar, counts, grid and lightbox all update automatically.
 *
 * TODO (owner): the `category` tags below are BEST-GUESS placeholders —
 * please correct them (see the batch report for the current mapping).
 * Allowed categories: "Bootcamp 1" | "Bootcamp 2" | "Bootcamp 3"
 *   | "Future Bootcamp 4" | "Robotics" | "Coding Sessions" | "Parents"
 *   | "Certificates" | "Graduation" | "Innovation Events".
 */
import GalleryPic11 from "../../public/assets/images/galleryimg1.avif";
import GalleryPic12 from "../../public/assets/images/galleryimg2.avif";
import GalleryPic13 from "../../public/assets/images/galleryimg3.avif";
import GalleryPic1 from "../../public/assets/images/gallerypic1.avif";
import GalleryPic2 from "../../public/assets/images/gallerypic2.avif";
import GalleryPic3 from "../../public/assets/images/gallerypic3.avif";
import GalleryPic4 from "../../public/assets/images/gallerypic4.avif";
import GalleryPic5 from "../../public/assets/images/gallerypic5.avif";
import GalleryPic6 from "../../public/assets/images/gallerypic6.avif";
import GalleryPic7 from "../../public/assets/images/gallerypic7.avif";
import GalleryPic8 from "../../public/assets/images/gallerypic8.avif";
import GalleryPic9 from "../../public/assets/images/gallerypic9.avif";
import GalleryPic10 from "../../public/assets/images/gallerypic10.avif";
import GalleryPic14 from "../../public/assets/images/gallerypic14.avif";
import GalleryPic15 from "../../public/assets/images/gallerypic15.avif";
import GalleryPic16 from "../../public/assets/images/gallerypic16.avif";

const sources = [
  GalleryPic1,
  GalleryPic2,
  GalleryPic3,
  GalleryPic4,
  GalleryPic5,
  GalleryPic6,
  GalleryPic7,
  GalleryPic8,
  GalleryPic9,
  GalleryPic10,
  GalleryPic11,
  GalleryPic12,
  GalleryPic13,
  GalleryPic14,
  GalleryPic15,
  GalleryPic16,
];

// Best-guess category per image (index-aligned with `sources`). TODO: correct.
const categories = [
  "Coding Sessions",
  "Coding Sessions",
  "Robotics",
  "Bootcamp 3",
  "Certificates",
  "Graduation",
  "Coding Sessions",
  "Robotics",
  "Bootcamp 2",
  "Parents",
  "Coding Sessions",
  "Bootcamp 1",
  "Innovation Events",
  "Certificates",
  "Coding Sessions",
  "Graduation",
];

export const galleryItems = sources.map((src, i) => ({
  id: i + 1,
  src,
  alt: `Kids in Tech bootcamp — photo ${i + 1}`, // TODO: meaningful alt per image
  caption: `Kids in Tech — ${categories[i]}`,
  category: categories[i],
  cohort: (i % 3) + 1, // TODO: real cohort — placeholder round-robin 1–3
  kind: "image",
}));

// Ordered category list (only those actually present), for building filters.
const presentCategories = [
  "Bootcamp 1",
  "Bootcamp 2",
  "Bootcamp 3",
  "Future Bootcamp 4",
  "Robotics",
  "Coding Sessions",
  "Parents",
  "Certificates",
  "Graduation",
  "Innovation Events",
].filter((c) => galleryItems.some((i) => i.category === c));

export const galleryCategories = presentCategories;

// Filters (label/value/count) for the reused FilterBar — same shape Batch 06 uses.
export const galleryFilters = [
  { key: "all", label: "All", count: galleryItems.length },
  ...presentCategories.map((c) => ({
    key: c,
    label: c,
    count: galleryItems.filter((i) => i.category === c).length,
  })),
];

// Photos for a given cohort number (used by cohort pages — Batch 05).
export const getGalleryByCohort = (cohort) =>
  galleryItems.filter((i) => i.cohort === cohort);

export default galleryItems;
