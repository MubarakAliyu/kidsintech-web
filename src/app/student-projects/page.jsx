"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
/*
 * Student Projects — filterable showcase. Generic <FilterBar> drives an
 * animated grid (framer-motion layout + AnimatePresence; instant under
 * reduced motion). Cards open typed media: image projects reuse <Lightbox>,
 * everything else opens <ProjectModal> (which reuses <VideoEmbed>).
 */
import { useMemo, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import DecorativeArrow from "@/components/DecorativeArrow";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import SkewPill from "@/components/SkewPill";
import projects, {
  featuredProjects,
  projectFilters,
  projectTypeLabels,
} from "@/data/projects";
import { site } from "@/data/site";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";
import HeroArr1 from "../../../public/assets/images/heroArr1.svg";
import HeroArr2 from "../../../public/assets/images/heroArr2.svg";

const ProjectModal = dynamic(() => import("@/components/ProjectModal"));
const Lightbox = dynamic(() => import("@/components/Lightbox"));

const imagesOf = (p) => {
  const srcs = [];
  if (p.media?.kind === "image" && p.media.src)
    srcs.push({ src: p.media.src, alt: p.title });
  return srcs;
};

const toCard = (p) => ({
  title: p.title,
  thumbnail: p.thumbnail,
  trackLabel: projectTypeLabels[p.type] || p.track,
});

export default function StudentProjectsPage() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState("all");
  const [modalProject, setModalProject] = useState(null);
  const [lightbox, setLightbox] = useState({ items: [], index: null });

  const filtered = useMemo(
    () =>
      active === "all" ? projects : projects.filter((p) => p.type === active),
    [active],
  );

  const openProject = (p) => {
    const imgs = imagesOf(p);
    if (imgs.length > 0) setLightbox({ items: imgs, index: 0 });
    else setModalProject(p);
  };

  return (
    <div>
      {/* SEO JSON-LD (BreadcrumbList + CreativeWork) is rendered in layout.js. */}

      {/* 1. Hero */}
      <section className="bg-cream px-4 sm:px-8 lg:px-[160px] pt-10 pb-14 lg:pb-20">
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <DecorativeArrow
            src={HeroArr1}
            width={110}
            height={78}
            className="hidden lg:block absolute top-0 right-[7%] opacity-70"
          />
          <DecorativeArrow
            src={HeroArr2}
            width={80}
            height={110}
            className="hidden lg:block absolute top-6 left-[4%] opacity-70"
          />
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Student Projects" },
            ]}
          />
          <Reveal variant={fadeUp}>
            <SkewPill bg="bg-gold" text="text-brown">
              Student Projects
            </SkewPill>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon leading-tight max-w-3xl">
            What our students build
          </h1>
          <Reveal
            as="p"
            variant={fadeUp}
            custom={1}
            className="text-base sm:text-lg lg:text-xl text-ink max-w-2xl"
          >
            Real games, websites, robots and apps — made by young makers aged{" "}
            {site.ages} in our bootcamps. Proof that kids don't just use
            technology; they create with it.
          </Reveal>
          <Reveal
            variant={fadeUp}
            custom={2}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href={site.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98]"
            >
              Join a bootcamp
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-maroon text-maroon px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-maroon hover:text-cream active:scale-[0.98]"
            >
              Explore programs
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. Featured strip */}
      {featuredProjects.length > 0 && (
        <section
          className="bg-tint-lime px-4 sm:px-8 lg:px-[160px] py-14 lg:py-20"
          aria-labelledby="featured-heading"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Featured"
              title="Standout builds"
              headingId="featured-heading"
              pillBg="bg-white"
            />
            <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {featuredProjects.map((p) => (
                <Reveal key={p.id} variant={fadeUp} className="flex">
                  <ProjectCard
                    project={toCard(p)}
                    onClick={() => openProject(p)}
                    overlay
                  />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 3 + 4. Filter bar + grid */}
      <section
        className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
        aria-labelledby="all-projects-heading"
      >
        <div className="container flex flex-col items-center gap-10">
          <SectionHeader
            eyebrow="Portfolio"
            title="Browse all projects"
            headingId="all-projects-heading"
            pillBg="bg-tint-butter"
          />

          <FilterBar
            filters={projectFilters}
            active={active}
            onChange={setActive}
            label="Filter projects by type"
          />

          {/* Live region announces result count on filter change */}
          <p className="sr-only" aria-live="polite">
            Showing {filtered.length}{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {active !== "all"
              ? ` in ${projectTypeLabels[active] || active}`
              : ""}
            .
          </p>

          <motion.div
            layout={!reduced}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout={!reduced}
                  initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: reduced ? 0 : 0.25, ease: "easeOut" }}
                  className="flex"
                >
                  <ProjectCard
                    project={toCard(p)}
                    onClick={() => openProject(p)}
                    overlay
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-ink/60">
              No projects in this category yet — check back soon!
            </p>
          )}
        </div>
      </section>

      {/* 5. CTA */}
      <CtaBanner
        title="Your child could build these"
        subtitle="Join a bootcamp and turn curiosity into real, show-off-worthy projects."
        primaryLabel="Register Now!"
        secondaryLabel="See bootcamps"
        secondaryHref="/bootcamps"
      />

      {/* Modals */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
      <Lightbox
        items={lightbox.items}
        index={lightbox.index}
        onClose={() => setLightbox({ items: [], index: null })}
        onIndexChange={(i) => setLightbox((s) => ({ ...s, index: i }))}
      />
    </div>
  );
}
