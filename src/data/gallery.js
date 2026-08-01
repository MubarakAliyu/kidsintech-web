/*
 * gallery.js — the existing 16 gallery photos, data-driven with
 * category/cohort tags so Batch 07 can group/filter and cohort pages can
 * pull their own photos. Static imports keep next/image blur placeholders.
 *
 * TODO (owner): RE-TAG each image with its TRUE cohort/category. The
 * `cohort` values below are a placeholder round-robin across cohorts 1–3
 * so cohort pages render a gallery — they are NOT accurate yet.
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

export const galleryItems = sources.map((src, i) => ({
  id: i + 1,
  src,
  alt: `Kids in Tech bootcamp — photo ${i + 1}`,
  category: "Coding Sessions", // TODO: real category
  cohort: (i % 3) + 1, // TODO: real cohort — placeholder round-robin 1–3
}));

// Distinct categories present (for filter chips later).
export const galleryCategories = [
  ...new Set(galleryItems.map((i) => i.category)),
];

// Photos for a given cohort number (used by cohort pages).
export const getGalleryByCohort = (cohort) =>
  galleryItems.filter((i) => i.cohort === cohort);

export default galleryItems;
