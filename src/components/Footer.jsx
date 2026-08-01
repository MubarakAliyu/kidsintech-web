"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { openBootcamp, upcomingBootcamp } from "@/data/bootcamps";
import { homeSectionNav, mainNav } from "@/data/nav";
import { site, socials } from "@/data/site";
import Facebook from "../../public/assets/images/facebook.svg";
import Instagram from "../../public/assets/images/instagram.svg";
import Logo from "../../public/assets/images/logo.svg";
import Rocket from "../../public/assets/images/rocket.svg";
import Whatsapp from "../../public/assets/images/whatsapp.svg";
import X from "../../public/assets/images/X.svg";

// Footer CTA heading is derived from bootcamp status (single source of
// truth) — never hardcoded — so it can't contradict the rest of the site.
const ctaHeading = openBootcamp
  ? `${openBootcamp.title} is now open!`
  : upcomingBootcamp
    ? `${upcomingBootcamp.title} is coming soon`
    : "Registration is open!";

// NOTE (Batch 01): footer nav + contact + socials now render from
// src/data (single source of truth). Fixes applied here: email ->
// hello@kidsintech.school (was .com); About link -> /about-us (was the
// non-existent /about). Colours converted to @theme tokens (same hex).

// Map social icon keys (from site.js) to their imported SVGs.
const SOCIAL_ICONS = {
  whatsapp: Whatsapp,
  facebook: Facebook,
  instagram: Instagram,
  X,
};

// Split routes into two balanced columns, mirroring the existing
// two-group footer layout.
const half = Math.ceil(mainNav.length / 2);
const navColA = mainNav.slice(0, half);
const navColB = mainNav.slice(half);

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

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

  const linkClass =
    "text-white hover:text-yellow-400 transition-colors text-xl";

  return (
    <footer className="bg-maroon px-8 lg:px-[160px] py-[96px]">
      <div className="container flex flex-col gap-14 items-cente text-white">
        {/* CTA */}
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-3xl md:text-5xl lg:text-[60px] leading-normal font-bold text-white text-center">
            {ctaHeading}
          </h2>
          <Link
            href={site.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-ink transition-all duration-300 ease-in-out flex items-center gap-2 justify-center p-6 rounded-[80px] text-paper text-xl lg:text-2xl font-bold w-full cursor-pointer"
          >
            <Image src={Rocket} alt="Rocket" width={20} height={20} />
            Register Now!
          </Link>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white w-full"></div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt="Kids in Tech Logo" width={200} height={60} />
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block border-l border-white h-[120px]"></div>

          {/* Navigation Column A */}
          <div className="flex flex-col gap-2 self-start items-start">
            {navColA.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Navigation Column B + Home-section scroll links */}
          <div className="flex flex-col gap-2 self-start items-start">
            {navColB.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
            {homeSectionNav.map((s) => (
              <button
                key={s.anchor}
                type="button"
                onClick={() => scrollOrNavigate(s.anchor)}
                className={`${linkClass} text-left`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-2">
            {site.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className={linkClass}>
                {p.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white w-full"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-8">
          {/* Copyright */}
          <div className="text-2xl text-white">
            COPYRIGHT 2025 ALL RIGHTS RESERVED KIDS IN TECH
          </div>

          {/* Social Media Icons */}
          <div className="flex items-start justify-center gap-6">
            {socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon];
              if (!Icon) return null;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  <Image src={Icon} alt={s.name} width={24} height={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
