/*
 * kitos.js — KITOS (Kids in Tech Operating System), the future learning
 * platform. A "coming soon" product page. TODO: confirm feature set,
 * visuals, launch timing.
 *
 * NOTE: `features` stays a plain string array — the Home KitosPreview
 * (Batch 02) renders it as chips. The richer `featureCards` (objects) power
 * the full KITOS page. Don't merge them without updating KitosPreview.
 */
export const kitos = {
  name: "KITOS",
  fullName: "Kids in Tech Operating System",
  status: "coming-soon",
  tagline: "Where the spark from our bootcamps keeps growing.",
  promise:
    "Our upcoming learning platform — where students keep building, track progress, and earn their Certificate of Completion.",
  whatItIs:
    "KITOS is the home base for every young learner: lessons to keep going after a bootcamp, a place to track progress, and the platform where the Certificate of Completion lives.",
  vision:
    "Bootcamps light the spark; KITOS keeps it burning. Together they form one ecosystem — hands-on cohorts that inspire, and a platform that sustains learning all year round.",
  pathwayNote:
    "KITOS follows the same pathway as our programs — from Scratch to Web Development, Robotics and the Advanced Track — so learners always know their next step.",
  notifyMechanism: "mailto", // "emailjs" once keys are configured

  // Home KitosPreview chips (strings) — keep as-is.
  features: [
    "Self-paced lessons",
    "Progress tracking",
    "Certificate of Completion",
    "Project portfolio",
  ],

  // Full KITOS page feature cards (icon keys map to lucide-react in the page).
  featureCards: [
    {
      icon: "GraduationCap",
      title: "Student portal",
      blurb: "A personal home for lessons, projects and progress.",
      comingSoon: true,
    },
    {
      icon: "Users",
      title: "Parent portal",
      blurb: "Follow your child's journey and milestones.",
      comingSoon: true,
    },
    {
      icon: "School",
      title: "Teacher portal",
      blurb: "Tools for partner-school teachers to run classes.",
      comingSoon: true,
    },
    {
      icon: "Bot",
      title: "AI Tutor",
      blurb: "A friendly helper that answers questions and nudges learning.",
      comingSoon: true,
    },
    {
      icon: "LineChart",
      title: "Progress tracking",
      blurb: "See skills grow, level by level.",
      comingSoon: true,
    },
    {
      icon: "Award",
      title: "Digital certificates",
      blurb: "The Certificate of Completion, issued and verifiable.",
      comingSoon: true,
    },
    {
      icon: "Route",
      title: "Learning pathways",
      blurb: "Guided paths from first block to real builds.",
      comingSoon: true,
    },
  ],

  href: "/kitos",
};

export default kitos;
