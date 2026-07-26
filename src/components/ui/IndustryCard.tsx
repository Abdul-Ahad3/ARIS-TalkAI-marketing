import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function IndustryCard({ icon: Icon, title, description, href = "/contact" }: IndustryCardProps) {
  return (
    <div className="group rounded-2xl bg-surface p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
        <Icon size={22} className="text-teal-600" />
      </div>
      <h3 className="mt-6 text-lg font-medium text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 transition-colors group-hover:text-teal-700"
      >
        Explore
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}