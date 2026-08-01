const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "Bootcamps",
  description:
    "Kids in Tech coding bootcamps — completed cohorts and the current Coding Bootcamp 2.0. Hands-on coding, design and STEM for children and teens ages 8–18 in Nigeria.",
  keywords: [
    "coding bootcamp for kids",
    "kids in tech cohort",
    "STEM bootcamp Nigeria",
    "children coding classes",
  ],
  alternates: { canonical: "/bootcamps" },
  openGraph: {
    title: "Bootcamps | Kids in Tech",
    description:
      "Past cohorts and the current Coding Bootcamp 2.0 for ages 8–18.",
    url: `${baseUrl}/bootcamps`,
    images: [
      {
        url: "/assets/images/heroImg2.avif",
        width: 1200,
        height: 630,
        alt: "Kids in Tech bootcamp",
      },
    ],
  },
  twitter: {
    title: "Bootcamps | Kids in Tech",
    description: "Kids in Tech coding bootcamp cohorts for ages 8–18.",
    images: ["/assets/images/heroImg2.avif"],
  },
};

// NOTE: this layout wraps BOTH /bootcamps and /bootcamps/[slug], so no
// route-specific JSON-LD lives here — each page renders its own breadcrumb.
export default function BootcampsLayout({ children }) {
  return children;
}
