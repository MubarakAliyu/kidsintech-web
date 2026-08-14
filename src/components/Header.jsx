"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { homeSectionNav, mainNav, moreNav, primaryNav } from "@/data/nav";
import { site } from "@/data/site";
import { track } from "@/lib/track";
import Logo from "../../public/assets/images/logo.svg";
import Menu from "../../public/assets/images/menu.svg";
import Rocket from "../../public/assets/images/rocket.svg";
import Whatsapp from "../../public/assets/images/whatsapp.svg";

// NOTE (Batch 01): nav now renders from src/data/nav.js (single source of
// truth). Colours converted to @theme tokens (cream / ink / teal / etc.)
// — same hex as before, so the header looks identical; the only additions
// are the extra destinations (via a "More" dropdown + the mobile drawer).

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const moreRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close the "More" dropdown on outside-click / Escape.
  useEffect(() => {
    if (!moreOpen) return;
    const onClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target))
        setMoreOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  // Intersection Observer to detect active in-page section (Home only).
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = homeSectionNav.map((s) => s.anchor);
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let activeId = "";
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeId = entry.target.id;
        }
      });
      if (activeId) setActiveSection(activeId);
    }, observerOptions);

    const timeoutId = setTimeout(() => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, [pathname]);

  const scrollOrNavigate = useCallback(
    (sectionId) => {
      if (pathname === "/") {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(`/`);
      }
    },
    [pathname, router],
  );

  const isRouteActive = (href) => pathname === href;
  const isSectionActive = (anchor) =>
    pathname === "/" && activeSection === anchor;

  // Shared link classes (tokens = same hex as before).
  const linkClass = (active) =>
    `transition-colors text-xl ${active ? "text-teal-active" : "text-ink hover:text-teal-active"}`;

  return (
    <header className="w-full bg-cream sticky top-0 z-50 border-b border-hairline">
      <div className="container px-4 lg:px-[160px] py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Kids in Tech"
            width={120}
            height={36}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex flex-row gap-10 items-center">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(isRouteActive(item.href))}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* "More" dropdown — extra destinations + Home-section scroll links */}
            <li className="relative" ref={moreRef}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={moreOpen}
                onClick={() => setMoreOpen((p) => !p)}
                className={`inline-flex items-center gap-1 ${linkClass(false)}`}
              >
                More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-3 min-w-[220px] bg-cream border border-hairline rounded-2xl shadow-lg p-2 flex flex-col"
                  >
                    {moreNav.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          className={`block px-4 py-2 rounded-xl text-lg transition-colors ${
                            isRouteActive(item.href)
                              ? "text-teal-active"
                              : "text-ink hover:text-teal-active hover:bg-tint-peach/40"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    <li
                      className="my-1 border-t border-hairline"
                      aria-hidden="true"
                    />
                    {homeSectionNav.map((s) => (
                      <li key={s.anchor}>
                        <button
                          type="button"
                          onClick={() => {
                            scrollOrNavigate(s.anchor);
                            setMoreOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 rounded-xl text-lg transition-colors ${
                            isSectionActive(s.anchor)
                              ? "text-teal-active"
                              : "text-ink hover:text-teal-active hover:bg-tint-peach/40"
                          }`}
                        >
                          {s.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href={site.whatsappGroupUrl}
            target="_blank"
            onClick={() => track("whatsapp_join", { location: "header" })}
            className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-5 py-3 font-semibold shadow-sm hover:brightness-95 transition"
          >
            <Image src={Whatsapp} alt="WhatsApp" width={18} height={18} />
            Join Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Open menu"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-ink"
        >
          <span className="sr-only">Menu</span>
          <Image
            src={Menu}
            alt="menu"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            {/* Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 h-full w-full bg-cream shadow-xl p-5 flex flex-col gap-6 overflow-y-auto"
            >
              {/* Top Row: Logo + Close */}
              <div className="flex items-center justify-between">
                <Image src={Logo} alt="Kids in Tech" width={96} height={30} />
                <button
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="w-10 h-10 grid place-items-center text-ink"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Links (all destinations) */}
              <nav className="mt-2">
                <div className="flex flex-col gap-6">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={toggleMenu}
                      className={`flex items-center gap-2 font-normal transition-colors text-xl ${
                        isRouteActive(item.href)
                          ? "text-teal-active"
                          : "text-ink"
                      }`}
                    >
                      <span
                        className={
                          isRouteActive(item.href)
                            ? "text-teal-active"
                            : "text-ink"
                        }
                      >
                        &lt;/&gt;
                      </span>
                      {item.label.toUpperCase()}
                    </Link>
                  ))}

                  {/* Home-section scroll links */}
                  {homeSectionNav.map((s) => (
                    <button
                      key={s.anchor}
                      type="button"
                      onClick={() => {
                        scrollOrNavigate(s.anchor);
                        toggleMenu();
                      }}
                      className={`flex items-center gap-2 font-normal transition-colors text-xl ${
                        isSectionActive(s.anchor)
                          ? "text-teal-active"
                          : "text-ink"
                      }`}
                    >
                      <span
                        className={
                          isSectionActive(s.anchor)
                            ? "text-teal-active"
                            : "text-ink"
                        }
                      >
                        &lt;/&gt;
                      </span>
                      {s.label.toUpperCase()}
                    </button>
                  ))}
                </div>
              </nav>

              {/* CTAs */}
              <div className="mt-auto flex flex-col gap-4 pt-4">
                <Link
                  href={site.whatsappGroupUrl}
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-teal-alt text-white px-5 py-3 font-semibold shadow-sm hover:brightness-95 transition"
                >
                  <Image src={Whatsapp} alt="WhatsApp" width={18} height={18} />
                  Join Us
                </Link>
                <Link
                  href={site.registrationUrl}
                  target="_blank"
                  onClick={toggleMenu}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-white px-5 py-3 font-semibold shadow-sm hover:brightness-95 transition"
                >
                  <Image src={Rocket} alt="Start" width={18} height={18} />
                  Start Learning Today!
                </Link>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
