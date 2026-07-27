// Home — existing sections preserved in their original relative order
// (Hero → About → CodingClass → Bootcamp → LearningOutcome → FounderNote);
// Batch 02 INSERTS new sections between them. Nothing existing was moved
// or restyled.

import AboutSection from "@/components/views/AboutSection";
import Bootcamp from "@/components/views/Bootcamp";
import CodingClassSection from "@/components/views/CodingClassSection";
import FounderNoteSection from "@/components/views/FounderNoteSection";
import HeroSection from "@/components/views/HeroSection";
import EventsPreview from "@/components/views/home/EventsPreview";
import FeaturedBootcamp from "@/components/views/home/FeaturedBootcamp";
// New Home sections (Batch 02)
import ImpactStats from "@/components/views/home/ImpactStats";
import KitosPreview from "@/components/views/home/KitosPreview";
import LatestNews from "@/components/views/home/LatestNews";
import LearningPathway from "@/components/views/home/LearningPathway";
import PartnerSchoolsStrip from "@/components/views/home/PartnerSchoolsStrip";
import ProjectsPreview from "@/components/views/home/ProjectsPreview";
import TestimonialsSection from "@/components/views/home/TestimonialsSection";
import LearningOutcomeSection from "@/components/views/LearningOutcomeSection";

const RootPage = () => {
  return (
    <div>
      {/* Accessible page h1 (the hero headline is an image, so this gives
          the document one real h1 and a correct heading order for the new
          h2 sections — visually hidden, no layout change). */}
      <h1 className="sr-only">
        Kids in Tech — building bright minds with technology for ages 8–18
      </h1>
      {/* Existing */}
      <HeroSection />
      {/* New: social proof right after the hero */}
      <ImpactStats />
      {/* Existing */}
      <AboutSection />
      {/* New: the 4-level path */}
      <LearningPathway />
      {/* Existing */}
      <CodingClassSection />
      <Bootcamp />
      {/* New: the current open/upcoming cohort (data-driven status) */}
      <FeaturedBootcamp />
      {/* Existing */}
      <LearningOutcomeSection />
      {/* New: showcase + proof + previews */}
      <ProjectsPreview />
      <PartnerSchoolsStrip />
      <TestimonialsSection />
      <EventsPreview />
      <KitosPreview />
      <LatestNews />
      {/* Existing closing CTA (founder note + Register) */}
      <FounderNoteSection />
    </div>
  );
};

export default RootPage;
