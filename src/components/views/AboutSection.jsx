"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BigRocket from "../../../public/assets/images/bigRocket.svg";
import Computer from "../../../public/assets/images/computer.svg";
import Brain from "../../../public/assets/images/brain.svg";
import AboutSectionImg1 from "../../../public/assets/images/aboutSectionImg1.png";
import AboutSectionImg2 from "../../../public/assets/images/aboutSectionImg2.png";
import AboutSectionImg3 from "../../../public/assets/images/aboutSectionImg3.png";
import AboutSectionArr1 from "../../../public/assets/images/aboutSectionArr1.svg";
import AboutSectionArr2 from "../../../public/assets/images/aboutSectionArr2.svg";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const slideIn = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

// Floating arrows
const float = {
  hidden: { y: 0 },
  visible: {
    y: [0, -12, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const AboutSection = () => {
  return (
    <section className="bg-[#EDF4D6] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container flex flex-col items-center gap-6 sm:gap-8 relative"
      >
        {/* Decorative Arrow 1 - Floating */}
        <motion.div variants={float} className="hidden lg:block absolute -top-[18%] right-[0%]">
          <Image src={AboutSectionArr1} alt="Decorative Arrow" width={270} height={76} className="w-[270px] h-[76px]" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
          {/* Left Image */}
          <motion.figure
            variants={slideIn("left")}
            className="w-full lg:w-[30%] rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 ease-in-out hover:scale-105 lg:block hidden"
          >
            <Image src={AboutSectionImg1} alt="Gallery image 1" className="w-full h-full object-cover" placeholder="blur" />
          </motion.figure>

          {/* Text Content */}
          <motion.div variants={fadeUp} custom={0.2} className="flex flex-col items-center text-center gap-4 w-full lg:w-[60%]">
            <motion.p variants={fadeUp} custom={0.3} className="text-base sm:text-base lg:text-2xl text-[#2D2124] leading-7">
              At Kids in Tech, we believe every child has the power to create and innovate. We're a community of teachers, designers, and
              tech lovers passionate about helping kids explore the digital world in a safe, fun, and supportive way.
            </motion.p>

            <motion.p variants={fadeUp} custom={0.4} className="text-base sm:text-base lg:text-2xl text-[#2D2124] leading-7">
              Our programs are designed to make technology less scary and more exciting. Kids don't just learn they build, play, and create!
              From coding games to designing apps and discovering how science works, we make sure every child feels confident, curious, and
              ready for the future.
            </motion.p>

            {/* Icons */}
            <motion.div variants={fadeUp} custom={0.5} className="flex items-center justify-center gap-8 pt-4">
              {[BigRocket, Computer, Brain].map((icon, i) => (
                <motion.div key={i} variants={scaleIn} custom={i}>
                  <Image src={icon} alt="Icon" width={60} height={60} />
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Image */}
            <motion.figure variants={fadeUp} custom={0.6}>
              <Image
                src={AboutSectionImg3}
                alt="Gallery image 3"
                className="w-full h-full object-cover lg:object-contain block lg:hidden"
                placeholder="blur"
              />
            </motion.figure>
          </motion.div>

          {/* Right Image */}
          <motion.figure
            variants={slideIn("right")}
            className="w-full lg:w-[30%] rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 ease-in-out hover:scale-105 lg:block hidden"
          >
            <Image src={AboutSectionImg2} alt="Gallery image 2" className="w-full h-full object-cover" placeholder="blur" />
          </motion.figure>
        </div>

        {/* Decorative Arrow 2 - Floating */}
        <motion.div variants={float} className="hidden lg:block absolute -bottom-[15%] lg:left-[2%] 2xl:left-[5%]">
          <Image src={AboutSectionArr2} alt="Decorative Arrow" width={374} height={152} className="w-[374px] h-[152px]" />
        </motion.div>
      </motion.article>
    </section>
  );
};

export default AboutSection;
