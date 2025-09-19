export const metadata = {
  title: "Gallery - Kids in Tech Bootcamp Photos & Videos",
  description:
    "Discover the creativity, fun, and learning from our Kids in Tech Bootcamps. Browse through photos and videos capturing moments of curiosity, teamwork, and growth as children build their future in technology.",
  keywords: [
    "kids in tech gallery",
    "coding bootcamp photos",
    "children learning technology",
    "STEM education gallery",
    "kids programming photos",
    "tech bootcamp Nigeria",
    "coding class pictures",
    "children creativity gallery",
  ],
  openGraph: {
    title: "Gallery - Kids in Tech Bootcamp Photos & Videos",
    description:
      "Discover the creativity, fun, and learning from our Kids in Tech Bootcamps. Browse through photos and videos capturing moments of curiosity, teamwork, and growth.",
    url: "https://kidsintech.school/gallery",
    images: [
      {
        url: "/assets/images/aboutHeading.png",
        width: 1200,
        height: 630,
        alt: "Kids in Tech Gallery - Children learning and creating",
      },
    ],
  },
  twitter: {
    title: "Gallery - Kids in Tech Bootcamp Photos & Videos",
    description: "Discover the creativity, fun, and learning from our Kids in Tech Bootcamps through our photo gallery.",
    images: ["/assets/images/aboutHeading.png"],
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({ children }) {
  return children;
}
