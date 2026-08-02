import type { LucideIcon } from "lucide-react";


interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function IndustryCard({ icon: Icon, title, description }: IndustryCardProps) {
  return (
    <div className="group rounded-2xl bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
        <Icon size={22} className="text-teal-600" />
      </div>
      <h3 className="mt-6 text-lg font-medium text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  );
}