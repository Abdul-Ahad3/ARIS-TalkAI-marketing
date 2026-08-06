import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PipelineStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

export function PipelineStep({
  icon: Icon,
  title,
  description,
  isLast = false,
}: PipelineStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector */}

      {!isLast && (
        <div className="absolute left-[calc(50%+3.5rem)] top-7 hidden w-[calc(100%-2rem)] items-center lg:flex">
          <div className="h-px flex-1 bg-gradient-to-r from-teal-500/50 to-teal-300/20" />

          <ArrowRight
            size={18}
            className="mx-3 text-teal-500/60"
          />

          <div className="h-px flex-1 bg-gradient-to-r from-teal-300/20 to-transparent" />
        </div>
      )}

      {/* Icon */}

      <div
        className={cn(
          "relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl",
          "bg-teal-500/10 text-teal-600 ring-1 ring-teal-500/15",
          "transition-all duration-300",
          "group-hover:scale-105"
        )}
      >
        <Icon size={28} />
      </div>

      {/* Title */}

      <h3 className="mt-6 text-xl font-semibold text-ink">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">
        {description}
      </p>

      {/* Step Number */}

      <div className="mt-6 inline-flex rounded-full border border-line bg-background px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
        Step
      </div>
    </div>
  );
}