import React from "react";
import Image from "next/image";

import BigRocket from "../../../public/assets/images/bigRocket.svg";
import Computer from "../../../public/assets/images/computer.svg";
import Brain from "../../../public/assets/images/brain.svg";
import AboutSectionImg1 from "../../../public/assets/images/aboutSectionImg1.png";
import AboutSectionImg2 from "../../../public/assets/images/aboutSectionImg2.png";
import AboutSectionImg3 from "../../../public/assets/images/aboutSectionImg3.png";
import AboutSectionArr1 from "../../../public/assets/images/aboutSectionArr1.svg";
import AboutSectionArr2 from "../../../public/assets/images/aboutSectionArr2.svg";
import AnimatedSection, { AnimatedItem } from "../ui/AnimatedSection";

const AboutSection = () => {
  return (
    <section className="bg-[#EDF4D6] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
      <AnimatedSection className="container flex flex-col items-center gap-6 sm:gap-8 relative">
        {/* Decorative Arrow 1 - Points to title */}
        <div className="hidden lg:block absolute -top-[18%] right-[0%]">
          <Image src={AboutSectionArr1} alt="Decorative Arrow" width={270} height={76} className="w-[270px] h-[76px] " />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
          {/* Left Image */}
          <AnimatedItem
            delay={0.2}
            direction="left"
            distance={100}
            className="w-full lg:w-[30%] rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105 lg:block hidden"
          >
            <Image src={AboutSectionImg1} alt="Gallery image 1" className="w-full h-full object-cover" placeholder="blur" />
          </AnimatedItem>

          {/* Text Content */}
          <AnimatedItem delay={0.3} direction="up" distance={60} className="flex flex-col items-center text-center gap-4 w-full lg:w-[60%]">
            <AnimatedItem delay={0.4} direction="up" distance={40}>
              <p className="text-base sm:text-base lg:text-2xl text-[#2D2124] leading-7">
                At Kids in Tech, we believe every child has the power to create and innovate. We're a community of teachers, designers, and
                tech lovers passionate about helping kids explore the digital world in a safe, fun, and supportive way.
              </p>
            </AnimatedItem>

            <AnimatedItem delay={0.5} direction="up" distance={40}>
              <p className="text-base sm:text-base lg:text-2xl text-[#2D2124] leading-7">
                Our programs are designed to make technology less scary and more exciting. Kids don't just learn they build, play, and
                create! From coding games to designing apps and discovering how science works, we make sure every child feels confident,
                curious, and ready for the future.
              </p>
            </AnimatedItem>

            {/* Icons */}
            <AnimatedItem delay={0.6} direction="scale" distance={30}>
              <div className="flex items-center justify-center gap-8 pt-4">
                <AnimatedItem delay={0.7} direction="scale" distance={20}>
                  <Image src={BigRocket} alt="Rocket icon" width={60} height={60} />
                </AnimatedItem>
                <AnimatedItem delay={0.8} direction="scale" distance={20}>
                  <Image src={Computer} alt="Computer icon" width={60} height={60} />
                </AnimatedItem>
                <AnimatedItem delay={0.9} direction="scale" distance={20}>
                  <Image src={Brain} alt="Brain icon" width={60} height={60} />
                </AnimatedItem>
              </div>
            </AnimatedItem>

            <AnimatedItem delay={0.4} direction="up" distance={40}>
              <Image
                src={AboutSectionImg3}
                alt="Gallery image 3"
                className="w-full h-full object-cover lg:object-contain block lg:hidden"
                placeholder="blur"
              />
            </AnimatedItem>
          </AnimatedItem>

          {/* Right Image */}
          <AnimatedItem
            delay={0.4}
            direction="right"
            distance={100}
            className="w-full lg:w-[30%] rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105 lg:block hidden"
          >
            <Image src={AboutSectionImg2} alt="Gallery image 2" className="w-full h-full object-cover" placeholder="blur" />
          </AnimatedItem>
        </div>

        {/* Decorative Arrow 2 - Points to content */}
        <div className="hidden lg:block absolute -bottom-[15%] lg:left-[2%] 2xl:left-[5%]">
          <Image src={AboutSectionArr2} alt="Decorative Arrow" width={374} height={152} className="w-[374px] h-[152px]" />
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutSection;
