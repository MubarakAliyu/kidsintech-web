export const metadata = {
  title: "Student Projects",
  description:
    "See what Kids in Tech students have built — games, websites, robots and more, created by young makers ages 8–18.",
  keywords: [
    "kids coding projects",
    "student tech projects",
    "kids game development",
    "children web projects",
  ],
  alternates: { canonical: "/student-projects" },
  openGraph: {
    title: "Student Projects | Kids in Tech",
    description:
      "Games, websites and robots built by Kids in Tech students ages 8–18.",
    url: "https://kidsintech.school/student-projects",
  },
  twitter: {
    title: "Student Projects | Kids in Tech",
    description: "Projects built by Kids in Tech students.",
  },
};

export default function StudentProjectsLayout({ children }) {
  return children;
}
