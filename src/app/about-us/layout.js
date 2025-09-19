export const metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about Kids in Tech's journey from a small family activity to a community-driven initiative. Discover our mission to inspire children through technology education and our commitment to sustainable, engaging programs.",
  keywords: [
    "about kids in tech",
    "our story",
    "mission statement",
    "team members",
    "founder story",
    "tech education mission",
    "children coding programs",
    "STEM education Nigeria",
  ],
  openGraph: {
    title: "About Us - Our Story & Mission | Kids in Tech",
    description:
      "Learn about Kids in Tech's journey from a small family activity to a community-driven initiative. Discover our mission to inspire children through technology education.",
    url: "https://kidsintech.school/about-us",
    images: [
      {
        url: "/assets/images/aboutHeading.png",
        width: 1200,
        height: 630,
        alt: "Kids in Tech team and mission",
      },
    ],
  },
  twitter: {
    title: "About Us - Our Story & Mission | Kids in Tech",
    description: "Learn about Kids in Tech's journey from a small family activity to a community-driven initiative.",
    images: ["/assets/images/aboutHeading.png"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsLayout({ children }) {
  return children;
}
