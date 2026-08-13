/*
 * faqs.js — frequently asked questions.
 * Seeded with real answers where known (ages, certificate). Items marked
 * TODO need the team to confirm before publishing (price, dates).
 */
import { site } from "./site";

export const faqs = [
  {
    q: "What ages is Kids in Tech for?",
    a: `Kids in Tech is designed for children and teens ages ${site.ages}. Programs are grouped so beginners and older, more advanced learners each get the right level.`,
  },
  {
    q: "Do children need any prior experience?",
    a: "No. Our Scratch Programming foundation is built for total beginners. More advanced tracks (Web Development, Robotics, and the Advanced Track) build on earlier skills.",
  },
  {
    q: "How much does it cost?",
    a: "[Pricing — TODO: confirm current bootcamp fee. Recent cohorts have run free of charge.]",
  },
  {
    q: "When is the next bootcamp?",
    a: "[Dates — TODO: confirm the next cohort start date. See the Bootcamps page for the latest status.]",
  },
  {
    q: "What should my child bring?",
    a: "[What to bring — TODO: confirm, e.g. a laptop if available; devices may be provided.]",
  },
  {
    q: "Is there a certificate?",
    a: "Yes — learners receive a Certificate of Participation. A Certificate of Completion will be available later through KITOS, our upcoming learning platform.",
  },
];

export default faqs;
