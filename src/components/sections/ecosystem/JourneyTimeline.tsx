import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journeyMoments } from "@/data/eco-journey";
import { cn } from "@/lib/utils";

export function JourneyTimeline() {
  return (
    <section id="journey" className="bg-teal-50 py-section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="One Day, One Ecosystem"
          title="The same understanding, wherever the day takes you."
          description="Three products, moving with you between the moments that need privacy, reach and collaboration."
        />

        <div className="text-left justify-items-left mt-16">
          {journeyMoments.map((moment) => (
            <div key={moment.title} className="flex items-left gap-6 pb-8 last:pb-0 grid-cols-1 text-center sm:grid sm:gap-2 sm:grid-cols-2">
              <div className="flex flex-col items-left">
                <span
                  className={cn(
                    "flex shrink-0 items-left justify-left grid-cols-1 text-left sm:grid sm:gap-2 sm:grid-cols-1"
                  )}
                >
                  <span className=" text-left font-mono text-xs text-teal-500">{moment.time}</span>
                  <span className=" text-left font-mono text-xs uppercase tracking-wider text-ink-soft">
                    {moment.mode === "embedded" ? "Embedded" : "TalkAI App"}
                  </span>
                </span> 
              </div>
              <div className="items-left">
                <h3 className=" text-left mt-1 text-lg font-medium text-ink">{moment.title}</h3>
                <p className="text-left mt-1 text-sm leading-relaxed text-ink-soft">{moment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}