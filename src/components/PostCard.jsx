/*
 * PostCard — news/blog card. Cover in an aspect-ratio box (no CLS) that
 * zooms within its frame on hover; category pill, title, excerpt, date +
 * read time. `featured` renders a larger horizontal layout. Token + motion
 * based. Links to /news/[slug].
 */

import { Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function Cover({ post, className }) {
  return (
    <div className={`relative overflow-hidden bg-tint-blue ${className}`}>
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
  );
}

function Meta({ post }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-ink/60">
      <span className="inline-block rounded-full bg-tint-butter px-3 py-1 font-semibold text-brown">
        {post.category}
      </span>
      <time dateTime={post.date}>{fmtDate(post.date)}</time>
      {post.readTime && <span>· {post.readTime} min read</span>}
    </div>
  );
}

export default function PostCard({ post, featured = false }) {
  if (featured) {
    return (
      <Link
        href={`/news/${post.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-2 rounded-4xl overflow-hidden bg-white border border-hairline transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-brand-red w-full"
      >
        <Cover
          post={post}
          className="w-full aspect-[16/10] lg:aspect-auto lg:h-full min-h-[220px]"
        />
        <div className="flex flex-col gap-3 p-6 sm:p-8">
          <Meta post={post} />
          <h3 className="text-2xl sm:text-3xl font-bold text-maroon">
            {post.title}
          </h3>
          <p className="text-ink/80">{post.excerpt}</p>
          <span className="mt-1 text-sm font-semibold text-brand-red group-hover:underline">
            Read the post →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col rounded-4xl overflow-hidden bg-white border border-hairline transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-brand-red h-full"
    >
      <Cover post={post} className="w-full aspect-[16/9]" />
      <div className="flex flex-col gap-2 p-5">
        <Meta post={post} />
        <h3 className="text-lg font-bold text-maroon">{post.title}</h3>
        <p className="text-sm text-ink/75">{post.excerpt}</p>
      </div>
    </Link>
  );
}
