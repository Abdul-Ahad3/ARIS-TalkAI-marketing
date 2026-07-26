import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 border-t border-line py-5 first:border-t-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50">
        <Icon size={18} className="text-teal-600" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-ink">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
    </div>
  );
}