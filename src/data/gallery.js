/*
 * gallery.js — the existing 16 gallery photos, now data-driven with
 * category/cohort tags so Batch 07 can group & filter the Gallery
 * without touching layout. Static imports are kept so next/image can
 * still use placeholder="blur".
 *
 * TODO (owner): RE-TAG each image with its true cohort/category. The
 * tags below are placeholders — do not treat them as accurate yet.
 * Allowed categories (extend as needed):
 *   "Bootcamp 1" | "Bootcamp 2" | "Bootcamp 3" | "Future Bootcamp 4"
 *   | "Robotics" | "Coding Sessions" | "Parents" | "Certificates"
 *   | "Graduation" | "Innovation Events"
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

export const galleryItems = [
  {
    id: 1,
    src: GalleryPic1,
    alt: "Kids in Tech bootcamp — photo 1",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 2,
    src: GalleryPic2,
    alt: "Kids in Tech bootcamp — photo 2",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 3,
    src: GalleryPic3,
    alt: "Kids in Tech bootcamp — photo 3",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 4,
    src: GalleryPic4,
    alt: "Kids in Tech bootcamp — photo 4",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 5,
    src: GalleryPic5,
    alt: "Kids in Tech bootcamp — photo 5",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 6,
    src: GalleryPic6,
    alt: "Kids in Tech bootcamp — photo 6",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 7,
    src: GalleryPic7,
    alt: "Kids in Tech bootcamp — photo 7",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 8,
    src: GalleryPic8,
    alt: "Kids in Tech bootcamp — photo 8",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 9,
    src: GalleryPic9,
    alt: "Kids in Tech bootcamp — photo 9",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 10,
    src: GalleryPic10,
    alt: "Kids in Tech bootcamp — photo 10",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 11,
    src: GalleryPic11,
    alt: "Kids in Tech bootcamp — photo 11",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 12,
    src: GalleryPic12,
    alt: "Kids in Tech bootcamp — photo 12",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 13,
    src: GalleryPic13,
    alt: "Kids in Tech bootcamp — photo 13",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 14,
    src: GalleryPic14,
    alt: "Kids in Tech bootcamp — photo 14",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 15,
    src: GalleryPic15,
    alt: "Kids in Tech bootcamp — photo 15",
    category: "Coding Sessions",
    cohort: null,
  },
  {
    id: 16,
    src: GalleryPic16,
    alt: "Kids in Tech bootcamp — photo 16",
    category: "Coding Sessions",
    cohort: null,
  },
];

// Distinct categories present (for filter chips later).
export const galleryCategories = [
  ...new Set(galleryItems.map((i) => i.category)),
];

export default galleryItems;
