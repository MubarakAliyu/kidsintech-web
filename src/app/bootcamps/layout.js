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
    url: "https://kidsintech.school/bootcamps",
  },
  twitter: {
    title: "Bootcamps | Kids in Tech",
    description: "Kids in Tech coding bootcamp cohorts for ages 8–18.",
  },
};

export default function BootcampsLayout({ children }) {
  return children;
}
