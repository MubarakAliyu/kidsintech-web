/*
 * /register — SCAFFOLD for a future native registration + Paystack flow.
 * Feature-flagged OFF by default (NEXT_PUBLIC_ENABLE_NATIVE_REGISTER !== "true"),
 * in which case it simply points to the working Google Form. Not in nav; not
 * in the sitemap; noindex until the native flow is enabled.
 */
export const metadata = {
  title: "Register",
  description: "Register for Kids in Tech bootcamps.",
  alternates: { canonical: "/register" },
  robots: { index: false, follow: true },
};

export default function RegisterLayout({ children }) {
  return children;
}
