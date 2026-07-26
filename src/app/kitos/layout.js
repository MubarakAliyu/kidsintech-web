export const metadata = {
  title: "KITOS",
  description:
    "KITOS — the upcoming Kids in Tech learning platform and home of the Certificate of Completion for our young learners ages 8–18.",
  keywords: [
    "KITOS",
    "kids in tech platform",
    "online STEM learning kids",
    "certificate of completion",
  ],
  alternates: { canonical: "/kitos" },
  openGraph: {
    title: "KITOS | Kids in Tech",
    description: "The upcoming Kids in Tech learning platform.",
    url: "https://kidsintech.school/kitos",
  },
  twitter: {
    title: "KITOS | Kids in Tech",
    description: "The upcoming Kids in Tech learning platform.",
  },
};

export default function KitosLayout({ children }) {
  return children;
}
