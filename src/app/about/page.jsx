"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/*
 * /about → /about-us alias (see layout.js). Static export can't do a
 * server redirect, so we redirect on the client and offer a visible link
 * as a no-JS fallback.
 */
export default function AboutRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/about-us");
  }, [router]);

  return (
    <section className="bg-cream px-4 sm:px-8 lg:px-[160px] py-24 min-h-[50vh]">
      <div className="container flex flex-col items-center gap-4 text-center">
        <p className="text-xl text-ink">
          Redirecting to{" "}
          <Link href="/about-us" className="text-teal-active underline">
            About Us
          </Link>
          …
        </p>
      </div>
    </section>
  );
}
