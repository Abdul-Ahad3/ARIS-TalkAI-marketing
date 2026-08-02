import type { LucideIcon } from "lucide-react";


interface IndustryCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  href?: string;
  eyebrow?:string;
}

export function IndustryCard({ eyebrow, title, description }: IndustryCardProps) {
  return (
    <div className="group rounded-2xl bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium">
      <p className="font-mono text-eyebrow uppercase text-teal-600">{eyebrow}</p>
      <h3 className="mt-6 text-lg font-medium text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  );
}