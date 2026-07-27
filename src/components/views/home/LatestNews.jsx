"use client";
import { Newspaper } from "lucide-react";
import Image from "next/image";
/*
 * LatestNews — 2–3 most recent posts (data/news.js). Card = cover (aspect
 * box, no CLS) + category pill + title + date + excerpt. Hover lifts and
 * zooms the cover. Links to /news/<slug>; "View all" → /news.
 */
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { latestNews } from "@/data/news";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function NewsCard({ post }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col rounded-4xl overflow-hidden bg-white border border-hairline transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-brand-red"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-tint-blue">
        {post.cover ? (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-maroon/40">
            <Newspaper className="w-10 h-10" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center gap-3">
          <span className="inline-block rounded-full bg-tint-butter px-3 py-1 text-xs font-semibold text-brown">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-xs text-ink/60">
            {fmtDate(post.date)}
          </time>
        </div>
        <h3 className="text-lg font-bold text-maroon">{post.title}</h3>
        <p className="text-sm text-ink/75">{post.excerpt}</p>
      </div>
    </Link>
  );
}

export default function LatestNews() {
  if (!latestNews || latestNews.length === 0) return null;

  return (
    <section
      className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
      aria-labelledby="news-heading"
    >
      <div className="container flex flex-col items-center gap-12">
        <SectionHeader
          eyebrow="Latest News"
          title="Fresh from the community"
          headingId="news-heading"
          pillBg="bg-tint-blue"
        />

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {latestNews.map((p, i) => (
            <Reveal key={p.slug} variant={fadeUp} custom={i} className="flex">
              <NewsCard post={p} />
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal variant={fadeUp}>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border-2 border-maroon text-maroon px-6 py-4 font-bold text-lg transition-all duration-150 hover:bg-maroon hover:text-cream active:scale-[0.98]"
          >
            View all news
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
