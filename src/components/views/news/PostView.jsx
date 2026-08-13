"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
/*
 * PostView — single-post body (client). Cover + meta, block-rendered body,
 * share buttons, related posts, back link. Reuses BlockRenderer (which reuses
 * VideoEmbed), ShareButtons, PostCard, Breadcrumb.
 */
import Link from "next/link";
import BlockRenderer from "@/components/BlockRenderer";
import Breadcrumb from "@/components/Breadcrumb";
import PostCard from "@/components/PostCard";
import ShareButtons from "@/components/ShareButtons";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function PostView({ post, related = [] }) {
  const url = `https://kidsintech.school/news/${post.slug}`;

  return (
    <article className="bg-cream">
      {/* Header */}
      <div className="px-4 sm:px-8 lg:px-[160px] pt-8">
        <div className="container max-w-3xl mx-auto flex flex-col gap-5">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "News", href: "/news" },
              { label: post.title },
            ]}
          />
          <div className="flex flex-wrap items-center gap-3 text-sm text-ink/60">
            <span className="inline-block rounded-full bg-tint-butter px-3 py-1 font-semibold text-brown">
              {post.category}
            </span>
            <time dateTime={post.date}>{fmtDate(post.date)}</time>
            {post.readTime && <span>· {post.readTime} min read</span>}
            <span>· by {post.author}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Cover */}
      {post.cover && (
        <div className="px-4 sm:px-8 lg:px-[160px] pt-8">
          <div className="container max-w-3xl mx-auto">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-4xl bg-tint-blue">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Body */}
      <div className="px-4 sm:px-8 lg:px-[160px] py-12">
        <div className="container max-w-3xl mx-auto flex flex-col gap-10">
          <BlockRenderer blocks={post.body} />
          <div className="border-t border-hairline pt-6 flex flex-wrap items-center justify-between gap-4">
            <ShareButtons url={url} title={post.title} />
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-active hover:underline"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to News
            </Link>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="bg-tint-lime px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24">
          <div className="container flex flex-col gap-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-maroon text-center">
              More in {post.category}
            </h2>
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Reveal key={p.slug} variant={fadeUp} className="flex">
                  <PostCard post={p} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      )}
    </article>
  );
}
