import { Globe, Link2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ecosystemProducts } from "@/data/ecosystem";

export function Ecosystem() {
  return (
    <section className="bg-surface-soft py-section align-items-left">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="One Ecosystem"
          title="Two products. One understanding."
          description="Embedded Edition and the TalkAI App are two halves of the same idea, built to move with you between the moments that need privacy and the ones that need reach."
        />

        <div className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {ecosystemProducts.map(({ title, tag, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-teal-400/10 px-3 py-1 font-mono text-xs text-ink-muted">
                      {tag}
                    </span>
                         
                </div>
                <h3 className="mt-6 text-lg font-medium text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}