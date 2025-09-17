import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rocket from "../../../public/assets/images/rocket.svg";
import Heading from "../../../public/assets/images/aboutHeading.png";

import GalleryImg1 from "../../../public/assets/images/aboutImg1.png";
import GalleryImgMob1 from "../../../public/assets/images/aboutImg1Mobile.png";
import GalleryImg2 from "../../../public/assets/images/aboutImg2.png";
import GalleryImg3 from "../../../public/assets/images/aboutImg3.png";

import TechCreativity from "../../../public/assets/images/outcome1.png";
import CriticalThinking from "../../../public/assets/images/outcome2.png";
import ConfidenceExpression from "../../../public/assets/images/outcome3.png";
import CollaborationFun from "../../../public/assets/images/outcome4.png";

import TeamImg1 from "../../../public/assets/images/team1.png";
import TeamImg2 from "../../../public/assets/images/team2.png";
import TeamImg3 from "../../../public/assets/images/team3.png";
import AboutSponsorSection from "@/components/views/AboutSponsorSection";

const AboutUsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-scree bg-[#401C26] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <article className="h-full container flex flex-col items-center justify-center gap-6 sm:gap-8 relative">
          {/* Header */}
          <div className="flex flex-col items-center justify-center lg:-space-y-2">
            <Image src={Heading} alt="heading" width={913} height={228} className="w-[325px] lg:w-[913px] h-[80px] lg:h-[202px]" />

            <div className="bg-white py-1.5 px-2.5 lg:px-8 lg:py-4 gap-2.5 flex items-center rounded-3xl lg:rounded-[100px]">
              <p className="text-base sm:text-lg lg:text-xl text-center font-normal text-[#2D2124] leading-normal">
                We are a community-driven initiative dedicated to inspiring and equipping children with essential tech and creative skills.
                Through fun, interactive, and hands-on learning, we help kids explore coding, design, and STEM in ways that spark curiosity
                and imagination.
              </p>
            </div>

            <Link
           href="https://wa.me/2347067834186"
              className="flex p-6 justify-center items-center gap-2 rounded-[80px] bg-[#A41C3F] text-[#F1EAEB] font-bold text-xl lg:text-[28px] transition-all duration-300 ease-in-out hover:bg-[#2D2124] cursor-pointer"
            >
              <Image src={Rocket} alt="gallery" width={22} height={21} className="w-[22px] h-[21px]" />
              Start Learning Today!
            </Link>
          </div>
        </article>
      </section>

      {/* About Us Section */}
      <section className="bg-[#FFF7F1] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <article className="container flex flex-col items-center gap-14 relative">
          <figure className="lg:hidden block w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105">
            <Image src={GalleryImgMob1} alt="Gallery image 1" className="w-full h-full object-cover" placeholder="blur" />
          </figure>

          <div className="flex flex-col items-center gap-4">
            <p className="text-[#2D2124] text-center text-xl lg:text-2xl font-normal leading-normal">
              Kids in Tech began quite unexpectedly. It all started when I began teaching my little nieces, and to my surprise, they were
              genuinely excited and deeply engaged in the learning process. Encouraged by my sister to extend this opportunity to more
              children, what began as a small family activity quickly grew into something much bigger.
            </p>
            <p className="text-[#2D2124] text-center text-xl lg:text-2xl font-normal leading-normal">
              The experience turned out to be far more rewarding than I ever imagined. Watching children reason, create, and express their
              ideas through technology has been truly inspiring. Each session became not just about teaching, but about sparking creativity,
              building confidence, and opening doors to new possibilities.
            </p>
            <p className="text-[#2D2124] text-center text-xl lg:text-2xl font-normal leading-normal">
              From the very beginning, my vision has been to create continuity where it often doesn’t exist. Too often, initiatives such as
              tech events or bootcamps spark interest but fade away due to a lack of clear goals and long-term structure. At Kids in Tech,
              we are committed to breaking that cycle by building a sustainable, engaging, and impactful program that continues to grow and
              evolve with the children.
            </p>
            <p className="text-[#2D2124] text-center text-xl lg:text-2xl font-normal leading-normal">
              This is more than just a bootcamp; it is a foundation for the future. And with the support of parents, mentors, and the
              community, we aim to keep the momentum alive and inspire the next generation of creators and innovators.
            </p>
          </div>

          {/* GALLERY IMAGES - Mobile Layout */}
          <div className="flex flex-col lg:hidden items-center gap-6 w-full">
            {/* Mobile Image 1 */}
            <figure className="w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105">
              <Image src={GalleryImg1} alt="Gallery image 1" className="w-full h-full object-cover" placeholder="blur" />
            </figure>

            {/* Mobile Image 2 */}
            <figure className="hidden lg:block w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105">
              <Image src={GalleryImg2} alt="Gallery image 2" className="w-full h-full object-cover" placeholder="blur" />
            </figure>

            {/* Mobile Image 3 */}
            <figure className="w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105">
              <Image src={GalleryImg3} alt="Gallery image 3" className="w-full h-full object-cover" placeholder="blur" />
            </figure>
          </div>

          {/* GALLERY IMAGES - Desktop Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-8 w-full mt-10">
            {/* Left Image */}
            <figure className="rounded-2xl overflow-hidden cursor-pointer group transform -rotate-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0">
              <Image src={GalleryImg1} alt="Gallery image 1" className="w-full h-full object-cover" placeholder="blur" />
            </figure>

            {/* Middle Image */}
            <figure className="rounded-2xl overflow-hidden cursor-pointer group transform -rotate-1 -translate-y-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0 hover:translate-y-0">
              <Image src={GalleryImg2} alt="Gallery image 2" className="w-full h-full object-cover" placeholder="blur" />
            </figure>

            {/* Right Image */}
            <figure className="rounded-2xl overflow-hidden cursor-pointer group transform rotate-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0">
              <Image src={GalleryImg3} alt="Gallery image 3" className="w-full h-full object-cover" placeholder="blur" />
            </figure>
          </div>
        </article>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#F6F8DC] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <article className="container flex flex-col items-center gap-14 relative">
          {/* HEADER */}
          <h2 className="text-center text-4xl md:text-5xl lg:text-[68px] font-bold text-[#C8D295] text-shadow-[6px_3px_0px_#422110]">
            What We teach
          </h2>

          {/* CONTENTS */}
          <div className="flex flex-col items-start  sm:-gap-4 w-full">
            <div className="relative overflow-hidden w-full sm:w-fit">
              <div className="absolute inset-0 bg-[#FFDAA3] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
              <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-start items-center gap-2 sm:gap-3">
                <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#694F42] leading-4 sm:leading-5 lg:leading-[26px] ">
                  Our Programs
                </p>
              </div>
            </div>

            <div className="flex p-4 sm:p-6 lg:p-8 flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white w-full">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
                At <span className="font-bold">Kids in Tech</span>, we run interactive programs that balance creativity and learning.
                Through our <span className="font-bold">Coding Bootcamps</span>, kids learn the foundations of HTML, CSS, and JavaScript by
                creating their own web pages and projects. Our <span className="font-bold">Design & Creativity</span> sessions allow them to
                explore digital art, character design, and app mockups. In our <span className="font-bold">STEM Adventures</span>, children
                build robots, carry out fun experiments, and explore how science connects to everyday life. All these programs are built
                around practical, hands-on projects that keep kids engaged and excited to learn.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 w-full  relative">
              <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#5B343E] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6">
                <Image
                  src={TechCreativity}
                  alt="Tech Creativity"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
                />
                <p className="text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">Design & Creativity</p>
              </div>
              <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#8E9E5A] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6">
                <Image
                  src={CriticalThinking}
                  alt="Critical Thinking"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
                />
                <p className="text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">Web Development</p>
              </div>
              <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#5C6D8F] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6">
                <Image
                  src={ConfidenceExpression}
                  alt="Confidence Expression"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
                />
                <p className="text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">Interactivity & Coding</p>
              </div>
              <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#675982] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6">
                <Image
                  src={CollaborationFun}
                  alt="Collaboration Fun"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
                />
                <p className="text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">STEM Activities</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-[#FFFFFF] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <article className="container flex flex-col items-center gap-2 relative">
          {/* HEADER */}
          <h2 className="text-center text-4xl md:text-5xl lg:text-[68px] font-bold text-[#C3DDF4] text-shadow-[6px_3px_0px_#422110]">
            Meet the Team
          </h2>

          <div className="flex flex-col items-start -space-x-4">
            <div className="flex p-4 sm:p-6 lg:p-8 flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#401D26] w-full">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-5 sm:leading-6 lg:leading-[26px]">
                At Kids in Tech, our strength lies in the passionate people who make learning possible. Each member of our team is dedicated
                to creating a safe, fun, and engaging environment where children can learn, grow, and thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-0 w-full items-center justify-between lg:-mt-4">
              {/* team1 member */}
              <div className="flex flex-col items-start gap-2">
                <figure className="overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105 w-[334px] lg:w-[261px] h-[326px]">
                  <Image src={TeamImg1} alt="Gallery image 1" className="w-full h-full object-cover md:object-contain" placeholder="blur" />
                </figure>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-base md:text-lg lg:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px] uppercase font-semibold">
                    Aliyu <br />
                    Mubarak
                  </p>
                  <p className="text-base md:text-lg lg:text-xl  text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
                    Founder @ Kids In Tech
                  </p>
                </div>
              </div>

              {/* team2 member */}
              <div className="flex flex-col items-start gap-2">
                <figure className=" overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-[334px] lg:h-[326px] h-full">
                  <Image src={TeamImg2} alt="Gallery image 2" className="w-full h-full object-cover md:object-contain" placeholder="blur" />
                </figure>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-base md:text-lg lg:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px] uppercase font-semibold">
                    Muhammad <br /> Sani Haruna
                  </p>
                  <p className="text-base md:text-lg lg:text-xl  text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
                    Educator/Front End Dev <br /> @ Kids In Tech
                  </p>
                </div>
              </div>

              {/* team3 member */}
              <div className="flex flex-col items-start gap-2">
                <figure className=" overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-[334px] lg:h-[326px] h-full">
                  <Image src={TeamImg3} alt="Gallery image 3" className="w-full h-full object-cover md:object-contain" placeholder="blur" />
                </figure>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-base md:text-lg lg:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px] uppercase font-semibold">
                    Salisu <br /> Tanimu
                  </p>
                  <p className="text-base md:text-lg lg:text-xl  text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
                    Program Coordinator <br /> @ Kids In Tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Sponsor */}
      <AboutSponsorSection />
    </>
  );
};

export default AboutUsPage;
