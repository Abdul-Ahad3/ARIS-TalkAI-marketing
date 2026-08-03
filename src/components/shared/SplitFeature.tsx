import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface SplitFeatureSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  visual: ReactNode;
  position?: "right" | "bottom";
  background?: "surface" | "soft";
  className?: string;
  subscript?:string,
}

export function SplitFeatureSection({
  eyebrow,
  title,
  description,
  bullets,
  visual,
  position = "right",
  background = "surface",
  className,
  subscript,
}: SplitFeatureSectionProps) {
  const isBottom = position === "bottom";

  return (
    <section className={cn("py-section", background === "soft" ? "bg-surface-soft" : "bg-surface", className)}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-12",
            isBottom ? "grid-cols-1" : "lg:grid-cols-2 lg:gap-16"
          )}
        >
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-eyebrow uppercase text-teal-600">{eyebrow}</p>
            <h2 className="text-title text-balance text-default">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{description}</p>
            {bullets && (
              <ul className="mt-6 space-y-3">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-ink-soft">
                    <Check size={16} className="mt-0.5 shrink-0 text-teal-600" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={cn(isBottom && "w-full")}>{visual}</div>
          <p className="text-sm text-ink-soft">{subscript}</p>
        </div>
      </Container>
    </section>
  );
}