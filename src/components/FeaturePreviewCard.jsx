/*
 * FeaturePreviewCard — a KITOS feature preview (icon + title + blurb +
 * "coming soon" tag). Icon key maps to a lucide-react icon. The coming-soon
 * state is conveyed by TEXT, not colour alone. Token + motion based.
 */
import {
  Award,
  Bot,
  GraduationCap,
  LineChart,
  Route,
  School,
  Sparkles,
  Users,
} from "lucide-react";

const ICONS = { GraduationCap, Users, School, Bot, LineChart, Award, Route };

export default function FeaturePreviewCard({ feature }) {
  const Icon = ICONS[feature.icon] || Sparkles;
  return (
    <div className="flex flex-col gap-3 rounded-4xl bg-white border border-hairline p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg">
      <span className="grid place-items-center w-12 h-12 rounded-2xl bg-tint-blue text-maroon">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-bold text-maroon">{feature.title}</h3>
      <p className="text-sm text-ink/75 flex-1">{feature.blurb}</p>
      {feature.comingSoon && (
        <span className="inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold text-brown">
          Coming soon
        </span>
      )}
    </div>
  );
}
