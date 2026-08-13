/*
 * BlockRenderer — renders a post `body` (array of blocks) with token-based
 * typographic rhythm. Supports paragraph, heading (h2/h3), image (alt'd),
 * youtube (REUSES <VideoEmbed> nocookie facade), quote, list. Content stays
 * editable via data/news.js.
 */
import Image from "next/image";
import VideoEmbed from "@/components/VideoEmbed";

export default function BlockRenderer({ blocks = [] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case "heading": {
            const Tag = block.level === 3 ? "h3" : "h2";
            return (
              <Tag
                key={key}
                className={`${block.level === 3 ? "text-xl" : "text-2xl sm:text-3xl"} font-bold text-maroon mt-2`}
              >
                {block.text}
              </Tag>
            );
          }
          case "image":
            return (
              <figure key={key} className="flex flex-col gap-2">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl bg-tint-blue">
                  <Image
                    src={block.src}
                    alt={block.alt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-sm text-ink/60 text-center">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "youtube":
            return (
              <VideoEmbed
                key={key}
                id={block.id}
                title={block.title || "Video"}
              />
            );
          case "quote":
            return (
              <blockquote
                key={key}
                className="border-l-4 border-brand-red pl-5 py-1 text-lg sm:text-xl text-maroon italic"
              >
                {block.text}
                {block.cite && (
                  <cite className="block not-italic text-sm text-ink/60 mt-2">
                    — {block.cite}
                  </cite>
                )}
              </blockquote>
            );
          case "list": {
            const Tag = block.ordered ? "ol" : "ul";
            return (
              <Tag
                key={key}
                className={`${block.ordered ? "list-decimal" : "list-disc"} pl-6 flex flex-col gap-2 text-ink`}
              >
                {block.items.map((it) => (
                  <li key={`${key}-${it}`}>{it}</li>
                ))}
              </Tag>
            );
          }
          default:
            return (
              <p
                key={key}
                className="text-base sm:text-lg text-ink leading-relaxed"
              >
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
