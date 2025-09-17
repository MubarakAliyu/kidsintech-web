"use client";
import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import Logo from "../../public/assets/images/logo.svg";
import Whatsapp from "../../public/assets/images/whatsapp.svg";
import Rocket from "../../public/assets/images/rocket.svg";
import Menu from "../../public/assets/images/menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Intersection Observer to detect active section
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["coding-bootcamp", "design-stem"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let activeId = "";

      entries.forEach((entry) => {
        console.log(`Section ${entry.target.id} is intersecting:`, entry.isIntersecting, "ratio:", entry.intersectionRatio);
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeId = entry.target.id;
        }
      });

      if (activeId) {
        setActiveSection(activeId);
      }
    }, observerOptions);

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          console.log(`Observing section: ${sectionId}`);
          observer.observe(element);
        } else {
          console.log(`Section not found: ${sectionId}`);
        }
      });

      // Set initial active section based on scroll position
      const checkInitialSection = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportCenter = scrollY + windowHeight / 2;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementBottom = elementTop + rect.height;

            if (viewportCenter >= elementTop && viewportCenter <= elementBottom) {
              console.log(`Setting initial active section: ${sectionId}`);
              setActiveSection(sectionId);
              break;
            }
          }
        }
      };

      checkInitialSection();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
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
    [pathname, router]
  );

  // Helper function to check if a section is active
  const isSectionActive = (sectionId) => {
    if (pathname !== "/") return false;
    return activeSection === sectionId;
  };

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center">
      <li>
        <button
          type="button"
          onClick={() => {
            scrollOrNavigate("coding-bootcamp");
            onClick && onClick();
          }}
          className={`text-left lg:text-center transition-colors ${
            isSectionActive("coding-bootcamp") ? "text-[#0F766E] font-semibold" : "text-[#2D2124] hover:text-[#0F766E]"
          }`}
        >
          Coding Bootcamp
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => {
            scrollOrNavigate("design-stem");
            onClick && onClick();
          }}
          className={`text-left lg:text-center transition-colors ${
            isSectionActive("design-stem") ? "text-[#0F766E] font-semibold" : "text-[#2D2124] hover:text-[#0F766E]"
          }`}
        >
          Design & STEM
        </button>
      </li>
      <li>
        <Link
          href="/gallery"
          onClick={onClick}
          className={`transition-colors ${
            pathname === "/gallery" ? "text-[#0F766E] font-semibold" : "text-[#2D2124] hover:text-[#0F766E]"
          }`}
        >
          Our Gallery
        </Link>
      </li>
      <li>
        <Link
          href="/about-us"
          onClick={onClick}
          className={`transition-colors ${
            pathname === "/about-us" ? "text-[#0F766E] font-semibold" : "text-[#2D2124] hover:text-[#0F766E]"
          }`}
        >
          About us
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="w-full bg-[#FFF7F1] sticky top-0 z-50 border-b border-[#F1E5DE]">
      <div className="container px-4 lg:px-[160px] py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Kids in Tech" width={120} height={36} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <NavLinks />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="https://wa.me/2347067834186"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-[#1CA48E] text-white px-5 py-3 font-semibold shadow-sm hover:brightness-95 transition"
          >
            <Image src={Whatsapp} alt="WhatsApp" width={18} height={18} />
            Join Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Open menu"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md  text-[#2D2124]"
        >
          <span className="sr-only">Menu</span>
          <Image src={Menu} alt="menu" width={48} height={48} className="w-12 h-12" />
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
              className="absolute right-0 top-0 h-full w-full bg-[#FFF7F1] shadow-xl p-5 flex flex-col gap-6"
            >
              {/* Top Row: Logo + Close */}
              <div className="flex items-center justify-between">
                <Image src={Logo} alt="Kids in Tech" width={96} height={30} />
                <button onClick={toggleMenu} aria-label="Close menu" className="w-10 h-10 grid place-items-center text-[#2D2124]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-2">
                <div className="flex flex-col gap-5">
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className={`flex items-center gap-2 font-semibold transition-colors ${
                      pathname === "/" ? "text-[#0F766E]" : "text-[#2D2124]"
                    }`}
                  >
                    <span className={pathname === "/" ? "text-[#0F766E]" : "text-[#2D2124]"}>&lt;/&gt;</span>
                    HOME
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      scrollOrNavigate("coding-bootcamp");
                      toggleMenu();
                    }}
                    className={`flex items-center gap-2 font-semibold transition-colors ${
                      isSectionActive("coding-bootcamp") ? "text-[#0F766E]" : "text-[#2D2124]"
                    }`}
                  >
                    <span className={isSectionActive("coding-bootcamp") ? "text-[#0F766E]" : "text-[#2D2124]"}>&lt;/&gt;</span>
                    CODING BOOTCAMP
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      scrollOrNavigate("design-stem");
                      toggleMenu();
                    }}
                    className={`flex items-center gap-2 font-semibold transition-colors ${
                      isSectionActive("design-stem") ? "text-[#0F766E]" : "text-[#2D2124]"
                    }`}
                  >
                    <span className={isSectionActive("design-stem") ? "text-[#0F766E]" : "text-[#2D2124]"}>&lt;/&gt;</span>
                    DESIGN & STEM
                  </button>
                  <Link
                    href="/gallery"
                    onClick={toggleMenu}
                    className={`flex items-center gap-2 font-semibold transition-colors ${
                      pathname === "/gallery" ? "text-[#0F766E]" : "text-[#2D2124]"
                    }`}
                  >
                    <span className={pathname === "/gallery" ? "text-[#0F766E]" : "text-[#2D2124]"}>&lt;/&gt;</span>
                    OUR GALLERY
                  </Link>
                  <Link
                    href="/about-us"
                    onClick={toggleMenu}
                    className={`flex items-center gap-2 font-semibold transition-colors ${
                      pathname === "/about-us" ? "text-[#0F766E]" : "text-[#2D2124]"
                    }`}
                  >
                    <span className={pathname === "/about-us" ? "text-[#0F766E]" : "text-[#2D2124]"}>&lt;/&gt;</span>
                    ABOUT US
                  </Link>
                </div>
              </nav>

              {/* CTAs */}
              <div className="mt-auto flex flex-col gap-4">
                <Link
                  href="https://wa.me/2347067834186"
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1DA693] text-white px-5 py-3 font-semibold shadow-sm hover:brightness-95 transition"
                >
                  <Image src={Whatsapp} alt="WhatsApp" width={18} height={18} />
                  Join Us
                </Link>
                <Link
                  href="#register"
                  onClick={toggleMenu}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#A41C3F] text-white px-5 py-3 font-semibold shadow-sm hover:brightness-95 transition"
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
