// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const polySans = localFont({
  src: [
    {
      path: "../../public/fonts/polysanstrial-neutral.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/polysanstrial-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-polysans",
});

export const metadata = {
  title: {
    default: "Kids in Tech - Empowering Children Through Technology Education",
    template: "%s | Kids in Tech",
  },
  description:
    "Kids in Tech is a community-driven initiative dedicated to inspiring and equipping children with essential tech and creative skills. Through fun, interactive, and hands-on learning, we help kids explore coding, design, and STEM.",
  keywords: [
    "kids coding",
    "children technology education",
    "STEM for kids",
    "coding bootcamp for children",
    "tech education Nigeria",
    "kids programming",
    "digital literacy children",
    "creative coding kids",
    "web development for kids",
    "robotics for children",
  ],
  authors: [{ name: "Kids in Tech Team" }],
  creator: "Kids in Tech",
  publisher: "Kids in Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kidsintech.school"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kidsintech.school",
    title: "Kids in Tech - Empowering Children Through Technology Education",
    description:
      "Kids in Tech is a community-driven initiative dedicated to inspiring and equipping children with essential tech and creative skills. Through fun, interactive, and hands-on learning, we help kids explore coding, design, and STEM.",
    siteName: "Kids in Tech",
    images: [
      {
        url: "/assets/images/heroHeading.png",
        width: 1200,
        height: 630,
        alt: "Kids in Tech - Children learning technology and coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids in Tech - Empowering Children Through Technology Education",
    description:
      "Kids in Tech is a community-driven initiative dedicated to inspiring and equipping children with essential tech and creative skills.",
    images: ["/assets/images/heroHeading.png"],
    creator: "@kidsintech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="breadcrumb" />
        {process.env.NODE_ENV === "production" && <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_ID} />}
      </head>
      <body className={`${polySans.variable} antialiased`}>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
