import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ecosystemProducts } from "@/data/ecosystem";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function Ecosystem() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="One Ecosystem"
          title="Three products. One understanding."
          description="Embedded Edition, the TalkAI App, and the Cloud & API platform are three parts of the same idea — built to move with you between the moments that need privacy, the ones that need reach, and the systems you're building next."
        />

        <div className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemProducts.map(({ title, tag, description, runson, bestfor, href, comingSoon }) => (
              <div
                key={title}
                className={cn(
                  "group rounded-2xl p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium",
                  comingSoon ? "border-2 border-dashed border-line border-teal-500 bg-surface-soft/10" : "bg-surface"
                )}
              >
                <div className="flex items-center justify-between">
                  <Badge variant={comingSoon ? "outline" : "teal"}>{tag}</Badge>
                </div>
                <h2 className="mt-6 text-lg font-medium text-ink">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>

                <div className="mt-4 space-y-1.5 font-mono text-xs text-ink-muted">
                  <div className="flex justify-between gap-4">
                    <span>runs on</span>
                    <b className="font-medium text-ink">{runson}</b>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>best for</span>
                    <b className="font-medium text-ink">{bestfor}</b>
                  </div>
                </div>

                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition-colors hover:text-teal-400"
                  href={href}
                >
                  Explore {title}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}