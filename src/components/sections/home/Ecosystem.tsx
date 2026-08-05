import { ArrowRight } from "lucide-react";
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
            {ecosystemProducts.map(({ title, tag, description, runson, bestfor }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-teal-400/10 px-3 py-1 font-mono text-xs text-ink-muted">
                      {tag}
                    </span>
                         
                </div>
                <b><h2 className="mt-6 text-lg font-medium text-ink">{title}</h2></b>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
                
                
                <div className="mt-4 space-y-1.5 font-mono text-xs text-ink-2">
                  <div className="flex justify-between gap-4">
                    <span>runs on</span>
                    <b className="font-medium text-ink">{runson}</b>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>best for</span>
                    <b className="font-medium text-ink">{bestfor}</b>
                  </div>
                </div>

                <a className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition-colors hover:text-teal-400" href={title === "Embedded Edition" ? "/embedded" : "/tai-app"}>
                  Explore {title} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}