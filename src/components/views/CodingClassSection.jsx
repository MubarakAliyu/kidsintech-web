import React from "react";
import Image from "next/image";
import CodingLogo from "../../../public/assets/images/codingLogo.svg";
import HTML from "../../../public/assets/images/html.svg";
import CSS from "../../../public/assets/images/css.svg";
import JS from "../../../public/assets/images/js.svg";
import Gallery from "../../../public/assets/images/gallery.svg";
import GalleryImg1 from "../../../public/assets/images/galleryimg1.png";
import GalleryImg2 from "../../../public/assets/images/galleryimg2.png";
import GalleryImg3 from "../../../public/assets/images/galleryimg3.png";
import CodingArr1 from "../../../public/assets/images/codingArr1.svg";
import CodingArr2 from "../../../public/assets/images/codingArr2.svg";
import CodingArr3 from "../../../public/assets/images/codingArr3.svg";
import Link from "next/link";

const CodingClassSection = () => {
  return (
    <section id="design-stem" className="bg-[#FDF2CB] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
      <article className="container flex flex-col items-center gap-6 sm:gap-8 relative">
        {/* HEADER */}
        <Image
          src={CodingLogo}
          alt="coding"
          width={408}
          height={136}
          className="object-cover lg:w-[408px] lg:h-[137px] w-[296px] h-[99px]"
        />

        {/* Decorative Arrow 1 - Points to title */}
        <div className="hidden lg:block absolute -top-[6%] lg:left-[0%] 2xl:left-[11%]">
          <Image src={CodingArr1} alt="Decorative Arrow" width={402} height={168} className="w-[402px] h-[168px]" />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row items-start justify-center -space-x-6 w-full">
          {/* LEFT SECTION - Bootcamp Overview */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col -space-y-6 justify-center items-start">
              {/* Green box */}
              <div className="relative overflow-hidden w-full sm:w-fit">
                <div className="absolute inset-0 bg-[#FFDAA3] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
                  <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#694F42] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                    Bootcamp Overview
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#401D26]">
                <p className="text-sm sm:text-xl lg:text-2xl text-[#F1EAEB] lg:leading-[26px] leading-5">
                  Our Coding Bootcamp is a fun, hands-on program designed to introduce kids <span className="font-bold">(ages 8–16)</span>{" "}
                  to the world of computers, coding, and creativity. Over a series of interactive classes, children go from{" "}
                  <span className="font-bold">“What is a computer?” </span> to{" "}
                  <span className="font-bold">“Look at the website I built!”</span> all while having fun, making friends, and building
                  confidence.
                </p>
              </div>

              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#401D26]">
                <p className="text-sm sm:text-xl lg:text-2xl text-[#F1EAEB] lg:leading-[26px] leading-5">
                  Introduce kids to the foundational tools of web development HTML for structure, CSS for design, and JavaScript for
                  interactivity through hands-on learning and fun projects.
                </p>
              </div>

              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#401D26]">
                <p className="text-sm sm:text-xl lg:text-2xl text-[#F1EAEB] lg:leading-[26px] leading-5">
                  Don’t worry, we start with fun basic drag-and-drop coding before moving to real code{" "}
                  <span className="font-bold">HTML/CSS/JavaScript.</span> By the end, you’ll be a coding wizard!
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Class Curriculum/Fees/Duration */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col -gap-4 items-start">
              {/* Green box */}
              <div className="relative overflow-hidden w-full sm:w-fit self-end">
                <div className="absolute inset-0 bg-[#214A25] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
                  <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#EEF3E9] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                    Class Curriculum/Fees/Duration
                  </p>
                </div>
              </div>

              {/* Html */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white w-full">
                <div className="flex items-center gap-4">
                  <Image src={HTML} alt="intro" width={56} height={56} />
                  <p className="text-[#401D26] text-sm sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">
                    Week 1: <br /> The Building Blocks (HTML)
                  </p>
                </div>
              </div>

              {/* (CSS) */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white w-full">
                <div className="flex items-center gap-4">
                  <Image src={CSS} alt="intro" width={56} height={56} />
                  <p className="text-[#401D26] text-sm sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">
                    Week 2: <br />
                    Making it Beautiful (CSS)
                  </p>
                </div>
              </div>

              {/* (JavaScript Basics) */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white w-full">
                <div className="flex items-center gap-4">
                  <Image src={JS} alt="intro" width={56} height={56} />
                  <p className="text-[#401D26] text-sm sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">
                    Week 3: <br /> Make it Work (JavaScript Basics)
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row p-6 sm:p-8 justify-start items-start gap-6 sm:gap-8 rounded-4xl bg-[#EEF3E9] w-full">
                <div className="flex flex-col items-start gap-2 md:gap-4">
                  <p className="text-[#2C2F28] font-light text-sm sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">Payment</p>

                  <p className="text-[#34A33F] font-bold text-xl lg:text-2xl lg:leading-[26px] leading-5">₦25,000</p>
                </div>

                <div className="border-t md:border-l border-black w-full md:w-px md:h-[64px]"></div>
                <div className="flex flex-col items-start gap-2 md:gap-4">
                  <p className="text-[#2C2F28] font-light text-sm sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">Duration</p>

                  <p className="text-[#34A33F] font-bold text-xl lg:text-2xl lg:leading-[26px] leading-5">3 Weeks</p>
                </div>

                <div className="border-t md:border-l border-black w-full md:w-px md:h-[64px]"></div>
                <div className="flex flex-col items-start gap-2 md:gap-4">
                  <p className="text-[#2C2F28] font-light text-sm sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">Class Date</p>

                  <p className="text-[#34A33F] font-bold text-xl lg:text-2xl lg:leading-[26px] leading-5">AUG 6th - 24th 2025</p>
                </div>
              </div>

              {/* Green box */}
              <div className="relative overflow-hidden w-fit self-end">
                <div className="absolute inset-0 bg-[#B4A19A] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
                  <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#F3E9E9] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                    Coming Soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY IMAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full lg:mt-10">
          {/* Left Image */}
          <figure className="rounded-2xl overflow-hidden cursor-pointer group transform lg:-rotate-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0">
            <Image src={GalleryImg1} alt="Gallery image 1" className="w-full h-full object-cover" placeholder="blur" />
          </figure>

          {/* Middle Image */}
          <figure className="rounded-2xl overflow-hidden cursor-pointer group transform lg:-rotate-1 lg:-translate-y-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0 hover:translate-y-0">
            <Image src={GalleryImg2} alt="Gallery image 2" className="w-full h-full object-cover" placeholder="blur" />
          </figure>

          {/* Right Image */}
          <figure className="rounded-2xl overflow-hidden cursor-pointer group transform lg:rotate-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0">
            <Image src={GalleryImg3} alt="Gallery image 3" className="w-full h-full object-cover" placeholder="blur" />
          </figure>
        </div>

        {/* GALLEY BUTTON */}
        <Link
          href="/gallery"
          className="flex p-6 justify-center items-center gap-2 rounded-full bg-[#34A33F] text-[#EAF1EA] font-bold text-xl lg:text-[28px]"
        >
          <Image src={Gallery} alt="gallery" width={22} height={21} className="w-[22px] h-[21px]" />
          View Our Gallery
        </Link>

        {/* Decorative Arrow 2 - Points to content */}
        <div className="hidden lg:block absolute -bottom-[7%] lg:-left-[8%] 2xl:left-[5%]">
          <Image src={CodingArr3} alt="Decorative Arrow" width={236} height={312} className="w-[336px] h-[312px]" />
        </div>
      </article>
    </section>
  );
};

export default CodingClassSection;
