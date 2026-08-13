"use client";
import { Facebook, Link2, Twitter } from "lucide-react";
/*
 * ShareButtons — real share links (WhatsApp, X, Facebook) + copy-link with a
 * react-toastify confirmation (toast container is mounted in the root layout).
 * All buttons have discernible accessible names.
 */
import { toast } from "react-toastify";

export default function ShareButtons({ url, title = "" }) {
  const enc = encodeURIComponent;
  const shareUrl = enc(url);
  const shareText = enc(title);

  const links = [
    {
      name: "Share on WhatsApp",
      href: `https://wa.me/?text=${shareText}%20${shareUrl}`,
      Icon: WhatsAppIcon,
    },
    {
      name: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      Icon: Twitter,
    },
    {
      name: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      Icon: Facebook,
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Couldn't copy the link.");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-maroon">Share:</span>
      {links.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="w-10 h-10 grid place-items-center rounded-full border border-hairline text-maroon hover:bg-tint-peach/50 hover:-translate-y-0.5 transition-all"
        >
          <Icon className="w-5 h-5" aria-hidden="true" />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className="w-10 h-10 grid place-items-center rounded-full border border-hairline text-maroon hover:bg-tint-peach/50 hover:-translate-y-0.5 transition-all active:scale-95"
      >
        <Link2 className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
}

// lucide-react has no WhatsApp glyph — small inline icon.
function WhatsAppIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
    </svg>
  );
}
