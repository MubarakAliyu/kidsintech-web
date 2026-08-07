"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
/*
 * News index (9A) — hero → featured post → category filter (reused FilterBar)
 * + animated post grid → newsletter (reused NotifyForm). aria-live count.
 */
import { useMemo, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import DecorativeArrow from "@/components/DecorativeArrow";
import FilterBar from "@/components/FilterBar";
import NotifyForm from "@/components/NotifyForm";
import PostCard from "@/components/PostCard";
import SectionHeader from "@/components/SectionHeader";
import SkewPill from "@/components/SkewPill";
import { featuredPost, newsFilters, publishedNews } from "@/data/news";
import { fadeUp, Reveal } from "@/lib/motion";
import HeroArr1 from "../../../public/assets/images/heroArr1.svg";

export default function NewsPage() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? publishedNews
        : publishedNews.filter((p) => p.category === active),
    [active],
  );
  // Avoid duplicating the featured post in the "all" grid.
  const gridPosts =
    active === "all" && featuredPost
      ? filtered.filter((p) => p.slug !== featuredPost.slug)
      : filtered;

  return (
    <div>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://kidsintech.school",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "News",
                item: "https://kidsintech.school/news",
              },
            ],
          }),
        }}
      />
      {/* Hero */}
      <section className="bg-cream px-4 sm:px-8 lg:px-[160px] pt-10 pb-12 lg:pb-16">
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <DecorativeArrow
            src={HeroArr1}
            width={110}
            height={78}
            className="hidden lg:block absolute top-0 right-[7%] opacity-70"
          />
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "News" }]}
          />
          <Reveal variant={fadeUp}>
            <SkewPill bg="bg-gold" text="text-brown">
              News & Stories
            </SkewPill>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon leading-tight max-w-3xl">
            Fresh from the community
          </h1>
          <Reveal
            as="p"
            variant={fadeUp}
            custom={1}
            className="text-base sm:text-lg lg:text-xl text-ink max-w-2xl"
          >
            Cohort recaps, student stories, partnerships and STEM ideas — news
            from the Kids in Tech community.
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && active === "all" && (
        <section
          className="bg-cream px-4 sm:px-8 lg:px-[160px] pb-12"
          aria-label="Featured post"
        >
          <div className="container">
            <Reveal variant={fadeUp}>
              <PostCard post={featuredPost} featured />
            </Reveal>
          </div>
        </section>
      )}

      {/* Filter + grid */}
      <section
        className="bg-cream px-4 sm:px-8 lg:px-[160px] pb-16 lg:pb-24"
        aria-labelledby="all-news-heading"
      >
        <div className="container flex flex-col items-center gap-8">
          <SectionHeader
            eyebrow="All Posts"
            title="Browse the blog"
            headingId="all-news-heading"
            pillBg="bg-tint-lime"
          />
          <FilterBar
            filters={newsFilters}
            active={active}
            onChange={setActive}
            label="Filter posts by category"
          />
          <p className="sr-only" aria-live="polite">
            Showing {filtered.length} {filtered.length === 1 ? "post" : "posts"}
            {active !== "all" ? ` in ${active}` : ""}.
          </p>

          <motion.div
            layout={!reduced}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            <AnimatePresence mode="popLayout">
              {gridPosts.map((post) => (
                <motion.div
                  key={post.slug}
                  layout={!reduced}
                  initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: reduced ? 0 : 0.25, ease: "easeOut" }}
                  className="flex"
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {gridPosts.length === 0 && (
            <p className="text-ink/60">
              No posts in this category yet — check back soon!
            </p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-maroon px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
            Never miss an update
          </h2>
          <p className="text-base sm:text-lg text-cream/85 max-w-2xl">
            Get cohort news and stories straight to your inbox.
          </p>
          <NotifyForm subject="Newsletter" buttonLabel="Subscribe" />
        </div>
      </section>
    </div>
  );
}
