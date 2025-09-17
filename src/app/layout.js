// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Kids in Tech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${polySans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
