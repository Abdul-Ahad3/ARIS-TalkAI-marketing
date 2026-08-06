import { ArrowUpRight, LucideIcon } from "lucide-react";

interface AppCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AppCard({
  icon: Icon,
  title,
  description,
}: AppCardProps) {
  return (
    <div className="group rounded-[28px] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-premium">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600">
          <Icon size={22} />
        </div>

        <ArrowUpRight
          size={18}
          className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
        />
      </div>

      <h3 className="mt-5 font-semibold text-ink">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {description}
      </p>
    </div>
  );
}