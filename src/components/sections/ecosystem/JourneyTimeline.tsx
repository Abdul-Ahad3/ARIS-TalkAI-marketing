import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journeyMoments } from "@/data/eco-journey";
import { cn } from "@/lib/utils";

export function JourneyTimeline() {
  return (
    <section id="journey" className="bg-surface-soft py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="One Day, One Ecosystem"
          title="The same understanding, wherever the day takes you."
          description="Two products, moving with you between the moments that need privacy and the ones that need reach."
        />

        <div className="mx-auto mt-16 max-w-2xl">
          {journeyMoments.map((moment, index) => (
            <div key={moment.title} className="flex gap-6 pb-12 last:pb-0">
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-full",
                    moment.mode === "embedded" ? "bg-ink text-teal-400" : "bg-teal-500/10 text-teal-600"
                  )}
                >
                  <moment.icon size={20} />
                </span>
                {index < journeyMoments.length - 1 && (
                  <span
                    className={cn(
                      "mt-2 w-0 flex-1",
                      moment.mode === "embedded" ? "border-l-2 border-teal-500" : "border-l-2 border-dashed border-teal-400"
                    )}
                  />
                )}
              </div>
              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-ink-muted">{moment.time}</span>
                  <span className="rounded-full bg-surface-muted px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                    {moment.mode === "embedded" ? "Embedded Edition" : "TalkAI App"}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-ink">{moment.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{moment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}