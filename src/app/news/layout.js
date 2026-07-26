export const metadata = {
  title: "News",
  description:
    "News and updates from Kids in Tech — cohort announcements, events, and stories from our coding, design and STEM community.",
  keywords: [
    "kids in tech news",
    "STEM education updates",
    "coding bootcamp announcements Nigeria",
  ],
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News | Kids in Tech",
    description: "Announcements, events and stories from Kids in Tech.",
    url: "https://kidsintech.school/news",
  },
  twitter: {
    title: "News | Kids in Tech",
    description: "Updates from the Kids in Tech community.",
  },
};

export default function NewsLayout({ children }) {
  return children;
}
