"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Heading from "../../../public/assets/images/heroHeading.png";
import Rocket from "../../../public/assets/images/rocket.svg";
import heroImg1 from "../../../public/assets/images/heroImg1.png";
import heroImg2 from "../../../public/assets/images/heroImg2.png";
import heroImg3 from "../../../public/assets/images/heroImg3.png";
import heroImg4 from "../../../public/assets/images/heroImg4.png";
import heroImg14 from "../../../public/assets/images/heroImg1&4.png";
import HeroArr1 from "../../../public/assets/images/heroArr1.svg";
import HeroArr2 from "../../../public/assets/images/heroArr2.svg";

// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Floating animation for arrows
const float = {
  hidden: { y: 0 },
  visible: {
    y: [0, -12, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const HeroSection = () => {
  return (
    <section className="bg-[#FFF7F1] px-4 sm:px-8 lg:px-[160px] py-24">
      <article className="container flex flex-col items-center gap-14 relative">
        {/* Decorative Arrow 1 */}
        <motion.div variants={float} initial="hidden" animate="visible" className="hidden lg:block absolute -top-[3%] right-[0%]">
          <Image src={HeroArr1} alt="Decorative Arrow" width={158} height={110} />
        </motion.div>

        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center lg:-space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image src={Heading} alt="heading" width={913} height={228} className="w-[325px] lg:w-[913px] h-[80px] lg:h-[202px]" />

          <motion.div
            variants={fadeUp}
            custom={1}
            className="bg-white py-1.5 px-2.5 lg:px-8 lg:py-4 gap-2.5 flex items-center rounded-3xl lg:rounded-[100px]"
          >
            <p className="text-base sm:text-lg lg:text-xl text-center font-normal text-[#2D2124]">
              Where creativity meets technology, and young minds discover the power of coding, design, and STEM.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={2}>
            <Link
              href="https://wa.me/2347067834186"
              className="flex p-6 justify-center items-center gap-2 rounded-[80px] bg-[#A41C3F] text-[#F1EAEB] font-bold text-xl lg:text-[28px] transition-all duration-300 ease-in-out hover:bg-[#2D2124] hover:scale-105"
            >
              <Image src={Rocket} alt="rocket" width={22} height={21} />
              Start Learning Today!
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Arrow 2 */}
        <motion.div
          variants={float}
          initial="hidden"
          animate="visible"
          className="hidden lg:block absolute top-[0%] lg:-left-[5%] 2xl:-left-[3%]"
        >
          <Image src={HeroArr2} alt="Decorative Arrow" width={158} height={401} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hero Image 1 */}
          <motion.figure
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:block hidden w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={heroImg1}
              alt="Sponsor Image 1"
              width={358}
              height={476}
              className="w-full h-auto object-cover"
              placeholder="blur"
            />
          </motion.figure>

          <motion.figure
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:hidden block w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={heroImg14}
              alt="Hero Image 1 & 4"
              width={358}
              height={476}
              className="w-full h-auto object-cover"
              placeholder="blur"
            />
          </motion.figure>

          {/* Hero Image 2 & 3 stacked */}
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.figure
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full max-w-xs rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={heroImg2}
                alt="Sponsor Image 2"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </motion.figure>

            <motion.figure
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" w-full max-w-xs rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={heroImg3}
                alt="Sponsor Image 3"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </motion.figure>
          </div>

          {/* Hero Image 4 */}
          <motion.figure
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:block hidden w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={heroImg4}
              alt="Sponsor Image 4"
              width={331}
              height={440}
              className="w-full h-auto object-cover"
              placeholder="blur"
            />
          </motion.figure>
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
