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
  reverse?: boolean;
  background?: "surface" | "soft";
  className?: string;
}

export function SplitFeatureSection({
  eyebrow,
  title,
  description,
  bullets,
  visual,
  reverse = false,
  background = "surface",
  className,
}: SplitFeatureSectionProps) {
  return (
    <section className={cn("py-section", background === "soft" ? "bg-surface-soft" : "bg-surface", className)}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={cn("max-w-xl", reverse && "lg:order-2")}>
            <p className="mb-4 font-mono text-eyebrow uppercase text-teal-600">{eyebrow}</p>
            <h2 className="text-title text-balance text-ink">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{description}</p>
            <ul className="mt-6 space-y-3">
              {bullets && bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Check size={16} className="mt-0.5 shrink-0 text-teal-600" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className={cn(reverse && "lg:order-1")}>{visual}</div>
        </div>
      </Container>
    </section>
  );
}