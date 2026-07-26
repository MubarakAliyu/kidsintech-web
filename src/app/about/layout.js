// /about is a redirect alias. Canonical lives at /about-us (chosen as the
// single canonical About route this batch). We keep /about resolvable for
// any old inbound links; it points search engines at /about-us and
// client-redirects visitors there.
export const metadata = {
  title: "About Us",
  alternates: { canonical: "/about-us" },
  robots: { index: false, follow: true },
};

export default function AboutRedirectLayout({ children }) {
  return children;
}
