import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  eyebrow?: string,
  icon?: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description, eyebrow }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 border border-line rounded-2xl py-6 px-4 m-4 hover:shadow-[0_0_0_1px]">
      {
        Icon ? 
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50">
            <Icon size={18} className="text-teal-600" /> 
          </div>
        : 
          null
      }
      
      <div>
        {eyebrow ? <p className="mt-1 text-sm leading-relaxed text-eyebrow text-teal-500">{eyebrow}</p> : null}
        <h4 className="text-sm font-medium text-ink">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
    </div>
  );
}