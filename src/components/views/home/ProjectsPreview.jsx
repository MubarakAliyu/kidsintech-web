"use client";
import { Code2 } from "lucide-react";
import Image from "next/image";
/*
 * ProjectsPreview — 3–4 featured student projects. Card = thumbnail
 * (aspect-ratio box, no CLS) + title + track pill; image zooms within the
 * frame and an overlay fades in on hover. Links to /student-projects.
 * Placeholder tiles render when a thumbnail isn't supplied yet.
 */
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { featuredProjects } from "@/data/projects";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";

function ProjectCard({ project }) {
  return (
    <Link
      href="/student-projects"
      className="group flex flex-col rounded-4xl overflow-hidden bg-white border border-hairline transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-brand-red"
    >
      {/* Thumbnail (aspect box prevents layout shift) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-tint-lime">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-maroon/40">
            <Code2 className="w-12 h-12" aria-hidden="true" />
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/60 transition-colors duration-300 flex items-end p-4">
          <span className="text-cream font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View project →
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <span className="inline-block w-fit rounded-full bg-tint-butter px-3 py-1 text-xs font-semibold text-brown">
          {project.trackLabel}
        </span>
        <h3 className="text-lg font-bold text-maroon">{project.title}</h3>
      </div>
    </Link>
  );
}

export default function ProjectsPreview() {
  const items = featuredProjects.slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section
      className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="container flex flex-col items-center gap-12">
        <SectionHeader
          eyebrow="Student Projects"
          title="Look what our kids built"
          subtitle="Games, websites, animations and robots — real projects made by young makers in our bootcamps."
          headingId="projects-heading"
          pillBg="bg-tint-butter"
        />

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {items.map((p, i) => (
            <Reveal key={p.slug} variant={fadeUp} custom={i} className="flex">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal variant={fadeUp}>
          <Link
            href="/student-projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-maroon text-maroon px-6 py-4 font-bold text-lg transition-all duration-150 hover:bg-maroon hover:text-cream active:scale-[0.98]"
          >
            See all projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
