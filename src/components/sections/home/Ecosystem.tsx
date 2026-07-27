import { Globe, Link2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ecosystemProducts } from "@/data/ecosystem";

export function Ecosystem() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="One Ecosystem"
          title="Two products. One understanding."
          description="Embedded Edition and the TalkAI App don't compete for the same moment — they cover different ones, together."
        />

        <div className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {ecosystemProducts.map(({ icon: Icon, title, tag, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-surface-soft p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                    <Icon size={22} className="text-teal-600" />
                  </div>
                  <span className="rounded-full bg-surface-muted px-3 py-1 font-mono text-xs text-ink-muted">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-md items-center gap-3">
            <span className="h-0 flex-1 border-t-2 border-teal-500" />
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
              <Link2 size={16} />
            </span>
            <span className="h-0 flex-1 border-t-2 border-dashed border-teal-400" />
          </div>

          <div className="mx-auto h-8 w-px bg-line" />

          <div className="mx-auto max-w-md rounded-2xl bg-ink p-8 text-center text-white shadow-premium">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Globe size={22} className="text-teal-400" />
            </div>
            <h3 className="mt-6 text-lg font-medium">Global Communication</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              One ecosystem. Every conversation, connected.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}