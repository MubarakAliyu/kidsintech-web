"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.svg";
import Rocket from "../../public/assets/images/rocket.svg";
import Whatsapp from "../../public/assets/images/whatsapp.svg";
import Facebook from "../../public/assets/images/facebook.svg";
import Instagram from "../../public/assets/images/instagram.svg";
import X from "../../public/assets/images/X.svg";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

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
    [pathname, router]
  );

  return (
    <footer className="bg-[#401D26] px-8 lg:px-[160px] py-[96px] ">
      <div className="container flex flex-col gap-14 items-cente text-white">
        {/* Hero/Banner Section */}
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-3xl md:text-5xl lg:text-[64px] leading-normal font-bold text-white text-center">
            Coding Bootcamp is now open!
          </h2>
          <button className="bg-[#A41C3F] hover:bg-[#2D2124] transition-all duration-300 ease-in-out flex items-center gap-2 justify-center p-6 rounded-[80px] text-[#F1EAEB] text-xl lg:text-2xl font-bold w-full cursor-pointer">
            <Image src={Rocket} alt="Rocket" width={20} height={20} />
            Register Now!
          </button>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white w-full"></div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt="Kids in Tech Logo" width={200} height={60} />
          </div>

          {/* Vertical Separator */}
          <div className=" hidden md:block border-l border-white h-[120px]"></div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 self-start items-start">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <button type="button" onClick={() => scrollOrNavigate("coding-bootcamp")} className="text-white hover:text-yellow-400 transition-colors">
              Coding Bootcamp
            </button>
            <button type="button" onClick={() => scrollOrNavigate("design-stem")} className="text-white hover:text-yellow-400 transition-colors">
              Design & STEM Bootcamp
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">
              About Us
            </Link>
            <Link href="/gallery" className="text-white hover:text-yellow-400 transition-colors">
              Our Gallery
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-2">
            <a href="tel:+2347067834186" className="text-white hover:text-yellow-400 transition-colors">
              +2347067834186
            </a>
            <a href="mailto:kidsintech@gmail.com" className="text-white hover:text-yellow-400 transition-colors">
              kidsintech@gmail.com
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white w-full"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-8">
          {/* Copyright */}
          <div className="text-2xl text-white">COPYRIGHT 2025 ALL RIGHTS RESERVED KIDS IN TECH</div>

          {/* Social Media Icons */}
          <div className="flex items-start justify-center gap-6">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <Image src={Whatsapp} alt="WhatsApp" width={24} height={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <Image src={Facebook} alt="Facebook" width={24} height={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <Image src={Instagram} alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <Image src={X} alt="X (Twitter)" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
