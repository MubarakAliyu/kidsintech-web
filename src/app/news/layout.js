const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "News",
  description:
    "News and stories from Kids in Tech — bootcamp recaps, student stories, partnerships and STEM articles for our coding, design and STEM community.",
  keywords: [
    "kids in tech news",
    "STEM education updates",
    "coding bootcamp recap",
    "student stories",
    "kids tech blog Nigeria",
  ],
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News | Kids in Tech",
    description:
      "Bootcamp recaps, student stories and STEM articles from Kids in Tech.",
    url: `${baseUrl}/news`,
    images: [
      {
        url: "/assets/images/gallerypic1.avif",
        width: 1200,
        height: 630,
        alt: "Kids in Tech news",
      },
    ],
  },
  twitter: {
    title: "News | Kids in Tech",
    description: "Updates and stories from the Kids in Tech community.",
    images: ["/assets/images/gallerypic1.avif"],
  },
};

// This layout wraps BOTH /news and /news/[slug] — each page renders its own
// breadcrumb/JSON-LD, so none lives here.
export default function NewsLayout({ children }) {
  return children;
}
