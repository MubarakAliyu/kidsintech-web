"use client";
/*
 * ShareButtons — real share links (WhatsApp, X, Facebook) + copy-link with a
 * react-toastify confirmation (toast container is mounted in the root layout).
 * Brand glyphs come from react-icons (lucide-react ships no brand icons);
 * non-brand UI icons (Link2) stay on lucide-react. All buttons are labelled.
 */
import { Link2 } from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function ShareButtons({ url, title = "" }) {
  const enc = encodeURIComponent;
  const shareUrl = enc(url);
  const shareText = enc(title);

  const links = [
    { name: "Share on WhatsApp", href: `https://wa.me/?text=${shareText}%20${shareUrl}`, Icon: FaWhatsapp },
    { name: "Share on X", href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, Icon: FaXTwitter },
    { name: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, Icon: FaFacebookF },
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
