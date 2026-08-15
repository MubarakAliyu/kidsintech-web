"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Batch 03 — expanded About: added Mission/Vision, Journey timeline, Roadmap.
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import AboutSponsorSection from "@/components/views/AboutSponsorSection";
import { about } from "@/data/about";
import { site } from "@/data/site";
import { fadeUp as fadeUpUtil, Reveal, RevealGroup } from "@/lib/motion";
import { track } from "@/lib/track";
import Heading from "../../../public/assets/images/aboutHeading.avif";
import GalleryImg1 from "../../../public/assets/images/aboutImg1.avif";
import GalleryImgMob1 from "../../../public/assets/images/aboutImg1Mobile.avif";
import GalleryImg2 from "../../../public/assets/images/aboutImg2.avif";
import GalleryImg3 from "../../../public/assets/images/aboutImg3.avif";
import TechCreativity from "../../../public/assets/images/outcome1.avif";
import CriticalThinking from "../../../public/assets/images/outcome2.avif";
import ConfidenceExpression from "../../../public/assets/images/outcome3.avif";
import CollaborationFun from "../../../public/assets/images/outcome4.avif";
import Rocket from "../../../public/assets/images/rocket.svg";
import TeachHeading from "../../../public/assets/images/teachHeading.avif";
import TeachHeadingMob from "../../../public/assets/images/teachHeadingMob.avif";
// Meet the Team photos. To swap in a real photo, just drop the file at the
// path below (same filename) — no code change needed:
//   team1.avif → Aliyu Mubarak (Founder)
//   team2.avif → Murtala Ishaq (Co-Founder & COO)
//   team3.avif → Mustapher Muhammad Lawal (Co-Founder & CTO)
//   team4.avif → Faruk Yusuf (Educator/Front End Dev)  TODO: replace placeholder (currently a copy of team3.avif)
import TeamImg1 from "../../../public/assets/images/team1.avif";
import TeamImg2 from "../../../public/assets/images/team2.avif";
import TeamImg3 from "../../../public/assets/images/team3.avif";
import TeamImg4 from "../../../public/assets/images/team4.avif";
import TeamHeading from "../../../public/assets/images/teamHeading.avif";

// Variant: fade up with custom stagger
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutUsPage = () => {
  return (
    <>
      {/* Breadcrumb (Batch 03) */}
      <div className="bg-cream px-4 sm:px-8 lg:px-[160px] pt-6">
        <div className="container">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "About us" }]}
          />
          {/* Accessible page h1 (the hero heading is an image) — no visual change. */}
          <h1 className="sr-only">
            About Kids in Tech — our story, mission, team and roadmap
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-scree bg-[#401C26] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <article className="h-full container flex flex-col items-center justify-center gap-6 sm:gap-8 relative">
          <motion.div
            className="flex flex-col items-center justify-center lg:-space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <Image
                src={Heading}
                alt="heading"
                width={913}
                height={228}
                className="w-[325px] lg:w-[913px] h-[80px] lg:h-[202px]"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="bg-white py-1.5 px-2.5 lg:px-8 lg:py-4 gap-2.5 flex items-center rounded-3xl lg:rounded-[100px]"
            >
              <p className="text-base sm:text-lg lg:text-xl text-center font-normal text-[#2D2124] leading-normal">
                We are a community-driven initiative dedicated to inspiring and
                equipping children with essential tech and creative skills.
                Through fun, interactive, and hands-on learning, we help kids
                explore coding, design, and STEM in ways that spark curiosity
                and imagination.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={2}>
              <Link
                href={site.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("register_click", { location: "about_hero" })
                }
                className="flex p-6 justify-center items-center gap-2 rounded-[80px] bg-[#A41C3F] text-[#F1EAEB] font-bold text-xl lg:text-[28px] transition-all duration-300 ease-in-out hover:bg-[#2D2124] cursor-pointer"
              >
                <Image
                  src={Rocket}
                  alt="gallery"
                  width={22}
                  height={21}
                  className="w-[22px] h-[21px]"
                />
                Start Learning Today!
              </Link>
            </motion.div>
          </motion.div>
        </article>
      </section>

      {/* About Us Section */}
      <section className="bg-[#FFF7F1] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <article className="container flex flex-col items-center gap-14 relative">
          <motion.figure
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:hidden block w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={GalleryImgMob1}
              alt="Gallery image 1"
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </motion.figure>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-[#2D2124] text-center text-xl lg:text-2xl font-normal leading-normal"
            >
              Kids in Tech began quite unexpectedly. It all started when I began
              teaching my little nieces, and to my surprise, they were genuinely
              excited and deeply engaged in the learning process. Encouraged by
              my sister to extend this opportunity to more children, what began
              as a small family activity quickly grew into something much
              bigger.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-[#2D2124] text-center text-xl lg:text-2xl font-normal leading-normal"
            >
              The experience turned out to be far more rewarding than I ever
              imagined. Watching children reason, create, and express their
              ideas through technology has been truly inspiring. Each session
              became not just about teaching, but about sparking creativity,
              building confidence, and opening doors to new possibilities.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-[#2D2124] text-center text-xl lg:text-2xl font-normal leading-normal"
            >
              From the very beginning, my vision has been to create continuity
              where it often doesn’t exist. Too often, initiatives such as tech
              events or bootcamps spark interest but fade away due to a lack of
              clear goals and long-term structure. At Kids in Tech, we are
              committed to breaking that cycle by building a sustainable,
              engaging, and impactful program that continues to grow and evolve
              with the children.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={4}
              className="text-[#2D2124] text-center text-xl lg:text-2xl font-normal leading-normal"
            >
              This is more than just a bootcamp; it is a foundation for the
              future. And with the support of parents, mentors, and the
              community, we aim to keep the momentum alive and inspire the next
              generation of creators and innovators.
            </motion.p>
          </motion.div>

          {/* GALLERY IMAGES - Mobile Layout */}
          <div className="flex flex-col lg:hidden items-center gap-6 w-full">
            {/* Mobile Image 1 */}
            <motion.figure
              variants={fadeUp}
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={GalleryImg1}
                alt="Gallery image 1"
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </motion.figure>

            {/* Mobile Image 2 */}
            <motion.figure
              variants={fadeUp}
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="hidden lg:block w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={GalleryImg2}
                alt="Gallery image 2"
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </motion.figure>

            {/* Mobile Image 3 */}
            <motion.figure
              variants={fadeUp}
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={GalleryImg3}
                alt="Gallery image 3"
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </motion.figure>
          </div>

          {/* GALLERY IMAGES - Desktop Layout */}
          <motion.div
            className="hidden lg:grid grid-cols-3 gap-8 w-full mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.figure
              variants={fadeUp}
              custom={8}
              className="rounded-2xl overflow-hidden cursor-pointer group transform -rotate-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0"
            >
              <Image
                src={GalleryImg1}
                alt="Gallery image 1"
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </motion.figure>

            <motion.figure
              variants={fadeUp}
              custom={9}
              className="rounded-2xl overflow-hidden cursor-pointer group transform -rotate-1 -translate-y-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0 hover:translate-y-0"
            >
              <Image
                src={GalleryImg2}
                alt="Gallery image 2"
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </motion.figure>

            <motion.figure
              variants={fadeUp}
              custom={10}
              className="rounded-2xl overflow-hidden cursor-pointer group transform rotate-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0"
            >
              <Image
                src={GalleryImg3}
                alt="Gallery image 3"
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </motion.figure>
          </motion.div>
        </article>
      </section>

      {/* Mission & Vision (Batch 03) */}
      <section
        className="bg-tint-lime px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
        aria-labelledby="about-mv"
      >
        <div className="container flex flex-col items-center gap-10">
          <SectionHeader
            eyebrow="Why we exist"
            title="Our mission & vision"
            headingId="about-mv"
            pillBg="bg-gold"
          />
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Reveal
              variant={fadeUpUtil}
              className="flex flex-col gap-3 rounded-4xl bg-white border border-hairline p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-brand-red">Mission</h3>
              <p className="text-base sm:text-lg text-ink leading-relaxed">
                {about.mission}
              </p>
            </Reveal>
            <Reveal
              variant={fadeUpUtil}
              custom={1}
              className="flex flex-col gap-3 rounded-4xl bg-white border border-hairline p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-teal-active">Vision</h3>
              <p className="text-base sm:text-lg text-ink leading-relaxed">
                {about.vision}
              </p>
            </Reveal>
          </RevealGroup>
          <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {about.values.map((v, i) => (
              <Reveal
                key={v.title}
                variant={fadeUpUtil}
                custom={i}
                className="flex flex-col gap-2 rounded-3xl bg-white/70 border border-hairline p-5"
              >
                <h4 className="font-bold text-maroon">{v.title}</h4>
                <p className="text-sm text-ink/80">{v.blurb}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#F6F8DC] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <motion.article
          className="container flex flex-col items-center gap-2 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <Image
              src={TeachHeading}
              alt="Teach Heading"
              width={496}
              height={70}
              className="w-[496px] h-[70px] hidden lg:block"
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={0}>
            <Image
              src={TeachHeadingMob}
              alt="Teach Heading"
              width={358}
              height={70}
              className="w-[358px] h-[80px] block lg:hidden"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-col items-start  sm:-gap-4 w-full"
          >
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
                At <span className="font-bold">Kids in Tech</span>, we run
                interactive programs that balance creativity and learning.
                Through our <span className="font-bold">Coding Bootcamps</span>,
                kids learn the foundations of HTML, CSS, and JavaScript by
                creating their own web pages and projects. Our{" "}
                <span className="font-bold">Design & Creativity</span> sessions
                allow them to explore digital art, character design, and app
                mockups. In our{" "}
                <span className="font-bold">STEM Adventures</span>, children
                build robots, carry out fun experiments, and explore how science
                connects to everyday life. All these programs are built around
                practical, hands-on projects that keep kids engaged and excited
                to learn.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 w-full  relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div
                variants={fadeUp}
                custom={2}
                className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#5B343E] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6"
              >
                <Image
                  src={TechCreativity}
                  alt="Tech Creativity"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
                />
                <p className="text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">
                  Design & Creativity
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#8E9E5A] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6"
              >
                <Image
                  src={CriticalThinking}
                  alt="Critical Thinking"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
                />
                <p className="text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">
                  Web Development
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#5C6D8F] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6"
              >
                <Image
                  src={ConfidenceExpression}
                  alt="Confidence Expression"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
                />
                <p className="text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">
                  Interactivity & Coding
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={5}
                className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#675982] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6"
              >
                <Image
                  src={CollaborationFun}
                  alt="Collaboration Fun"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
                />
                <p className="text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">
                  STEM Activities
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.article>
      </section>

      {/* Our Journey (Batch 03) */}
      <section
        className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
        aria-labelledby="about-journey"
      >
        <div className="container flex flex-col items-center gap-10">
          <SectionHeader
            eyebrow="Our Journey"
            title="From a family activity to a growing community"
            headingId="about-journey"
            pillBg="bg-tint-blue"
          />
          <Timeline items={about.journey} />
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-[#FFFFFF] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <motion.article
          className="container flex flex-col items-center gap-2 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <Image
              src={TeamHeading}
              alt="Team Heading"
              width={913}
              height={70}
              className="w-[325px] lg:w-[500px] h-auto lg:h-[70px]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-col items-start -space-x-4"
          >
            <div className="flex p-4 sm:p-6 lg:p-8 flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#401D26] w-full">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-5 sm:leading-6 lg:leading-[26px]">
                At Kids in Tech, our strength lies in the passionate people who
                make learning possible. Each member of our team is dedicated to
                creating a safe, fun, and engaging environment where children
                can learn, grow, and thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-0 w-full items-center justify-between lg:-mt-4">
              {/* team1 member */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="flex flex-col items-start gap-2"
              >
                <figure className="overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105 w-[334px] lg:w-[261px] h-[326px]">
                  <Image
                    src={TeamImg1}
                    alt="Gallery image 1"
                    className="w-full h-full object-cover md:object-contain"
                    placeholder="blur"
                  />
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
              </motion.div>

              {/* team2 member */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-col items-start gap-2"
              >
                <figure className=" overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-[334px] lg:h-[326px] h-full">
                  <Image
                    src={TeamImg2}
                    alt="Gallery image 2"
                    className="w-full h-full object-cover md:object-contain"
                    placeholder="blur"
                  />
                </figure>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-base md:text-lg lg:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px] uppercase font-semibold">
                    Murtala <br /> Ishaq
                  </p>
                  <p className="text-base md:text-lg lg:text-xl  text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
                    Co-Founder & COO <br /> @ Kids In Tech
                  </p>
                </div>
              </motion.div>

              {/* team3 member */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="flex flex-col items-start gap-2"
              >
                <figure className=" overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-[334px] lg:h-[326px] h-full">
                  <Image
                    src={TeamImg3}
                    alt="Gallery image 3"
                    className="w-full h-full object-cover md:object-contain"
                    placeholder="blur"
                  />
                </figure>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-base md:text-lg lg:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px] uppercase font-semibold">
                    Mustapher Muhammad <br /> Lawal
                  </p>
                  <p className="text-base md:text-lg lg:text-xl  text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
                    Co-Founder & CTO <br /> @ Kids In Tech
                  </p>
                </div>
              </motion.div>

              {/* team4 member */}
              <motion.div
                variants={fadeUp}
                custom={5}
                className="flex flex-col items-start gap-2"
              >
                <figure className=" overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-[334px] lg:h-[326px] h-full">
                  <Image
                    src={TeamImg4}
                    alt="Gallery image 4"
                    className="w-full h-full object-cover md:object-contain"
                    placeholder="blur"
                  />
                </figure>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-base md:text-lg lg:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px] uppercase font-semibold">
                    Faruk <br /> Yusuf
                  </p>
                  <p className="text-base md:text-lg lg:text-xl  text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
                    Educator/Front End Dev <br /> @ Kids In Tech
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.article>
      </section>

      {/* Roadmap / What's next (Batch 03) */}
      <section
        className="bg-tint-blue px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
        aria-labelledby="about-roadmap"
      >
        <div className="container flex flex-col items-center gap-10">
          <SectionHeader
            eyebrow="What's next"
            title="Where we're headed"
            subtitle="Kids in Tech, a STEM program by StarNova Labs, is building for the long term — here's what's coming."
            headingId="about-roadmap"
            pillBg="bg-white"
          />
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {about.roadmap.map((item, i) => (
              <Reveal
                key={item.title}
                variant={fadeUpUtil}
                custom={i}
                className="flex"
              >
                <Link
                  href={item.href}
                  className="group flex flex-col gap-2 rounded-4xl bg-white border border-hairline p-6 w-full transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <span className="inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold text-brown">
                    {item.status}
                  </span>
                  <h3 className="text-lg font-bold text-maroon">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/80">{item.blurb}</p>
                  <span className="mt-1 text-sm font-semibold text-brand-red group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Sponsor */}
      <AboutSponsorSection />

      {/* Closing CTA (Batch 03) */}
      <CtaBanner
        title="Be part of the story"
        subtitle="Join a bootcamp, partner your school, or help us keep the momentum alive."
        primaryLabel="Register Now!"
        secondaryLabel="Explore programs"
        secondaryHref="/programs"
      />
    </>
  );
};

export default AboutUsPage;
