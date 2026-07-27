/*
 * SkewPill — the signature skewed section-label pill (see Bootcamp /
 * LearningOutcome sections). Token-based; reused as section eyebrows.
 *
 * Props:
 *   bg    — background utility (default "bg-gold")
 *   text  — text colour utility (default "text-brown")
 *   as    — wrapper element (default "span")
 *   className — extra classes on the outer wrapper
 */
export default function SkewPill({
  children,
  bg = "bg-gold",
  text = "text-brown",
  as = "span",
  className = "",
}) {
  const Tag = as;
  return (
    <Tag className={`relative inline-block overflow-hidden w-fit ${className}`}>
      <span
        className={`absolute inset-0 ${bg} rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[80px] -skew-x-[5deg] rounded-br-[40px] sm:rounded-br-[60px] lg:rounded-br-[80px]`}
        aria-hidden="true"
      />
      <span className="relative z-10 py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2">
        <span
          className={`font-semibold text-sm sm:text-base lg:text-xl ${text} leading-tight text-center`}
        >
          {children}
        </span>
      </span>
    </Tag>
  );
}
