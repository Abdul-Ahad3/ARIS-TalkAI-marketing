import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScenarioCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?:
    | "teal"
    | "cyan"
    | "emerald"
    | "orange"
    | "violet"
    | "blue"
    | "rose"
    | "indigo";
}

const accentClasses = {
  teal: {
    icon: "bg-teal-500/10 text-teal-600",
    border: "group-hover:border-teal-500/40",
    glow: "group-hover:shadow-teal-500/10",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-600",
    border: "group-hover:border-cyan-500/40",
    glow: "group-hover:shadow-cyan-500/10",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-600",
    border: "group-hover:border-emerald-500/40",
    glow: "group-hover:shadow-emerald-500/10",
  },
  orange: {
    icon: "bg-orange-500/10 text-orange-600",
    border: "group-hover:border-orange-500/40",
    glow: "group-hover:shadow-orange-500/10",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-600",
    border: "group-hover:border-violet-500/40",
    glow: "group-hover:shadow-violet-500/10",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-600",
    border: "group-hover:border-blue-500/40",
    glow: "group-hover:shadow-blue-500/10",
  },
  rose: {
    icon: "bg-rose-500/10 text-rose-600",
    border: "group-hover:border-rose-500/40",
    glow: "group-hover:shadow-rose-500/10",
  },
  indigo: {
    icon: "bg-indigo-500/10 text-indigo-600",
    border: "group-hover:border-indigo-500/40",
    glow: "group-hover:shadow-indigo-500/10",
  },
};

export function ScenarioCard({
  icon: Icon,
  title,
  description,
  accent = "teal",
}: ScenarioCardProps) {
  const colors = accentClasses[accent];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-line bg-surface p-7 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        colors.border,
        colors.glow
      )}
    >
      <div className="absolute right-5 top-5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100">
        <ArrowUpRight
          size={18}
          className="text-ink-muted"
        />
      </div>

      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-2xl",
          colors.icon
        )}
      >
        <Icon size={26} />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-ink-soft">
        {description}
      </p>

      <div className="mt-8 h-px w-16 bg-gradient-to-r from-teal-500/60 to-transparent transition-all duration-300 group-hover:w-24" />
    </div>
  );
}