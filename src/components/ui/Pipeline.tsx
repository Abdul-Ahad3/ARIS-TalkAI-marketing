import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PipelineStepData {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  description: string;
}

interface PipelineProps {
  steps: PipelineStepData[];
  className?: string;
}

export function Pipeline({ steps, className }: PipelineProps) {
  return (
    <div className={cn("flex flex-col items-stretch gap-6 lg:flex-row lg:items-center", className)}>
      {steps.map((step, index) => {
        const Icon = step.icon;
        const hasIcon = !!Icon;
        const hasEyebrow = !!step.eyebrow;
        const isLast = index === steps.length - 1;

        const eyebrowMargin = hasIcon ? "mt-6" : "";
        const titleMargin = hasEyebrow ? "mt-2" : hasIcon ? "mt-6" : "";

        return (
          <div key={step.title} className="flex flex-col items-center gap-6 lg:flex-1 lg:flex-row">
            <div className="w-full max-w-sm flex-1 rounded-2xl bg-surface-soft p-8 text-left shadow-card">
              {hasIcon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                  <Icon size={22} className="text-teal-600" />
                </div>
              )}
              {hasEyebrow && (
                <p className={cn("font-mono text-xs uppercase tracking-wider text-teal-600", eyebrowMargin)}>
                  {step.eyebrow}
                </p>
              )}
              <h3 className={cn("text-lg font-medium text-ink", titleMargin)}>{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </div>

            {!isLast && (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
                <ArrowRight size={16} className="rotate-90 lg:rotate-0" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}