import { Container } from "@/components/ui/Container";
import { IntegrationShowcase } from "@/components/ui/IntegShowcase";
import { SectionHeading } from "@/components/ui/SectionHeading";

const workflow = [
  {
    title: "Connect",
    description:
      "Capture live audio from meetings, desktop software, browser apps, VoIP systems or custom communication platforms.",
  },
  {
    title: "Translate",
    description:
      "Speech is recognized, translated and synthesized with minimal latency while conversations continue naturally.",
  },
  {
    title: "Deliver",
    description:
      "Participants hear fluent, natural speech in their preferred language without changing the platform they already use.",
  },
];

export function WorksEverywhere() {
  return (
    <section className="bg-teal-200/45 py-28">
      <Container>
        <div className="grid gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          {/* Left */}

          <SectionHeading
            eyebrow="Universal Compatibility"
            title="Works Everywhere You Communicate"
            description="ARIS Cloud connects to the communication tools your teams already use. Meetings, customer calls, browser applications, desktop software and phone systems all become multilingual without changing existing workflows."
            className="mt-16 max-w-3xl"
          />

          {/* Right */}

          <div className="grid gap-5 sm:grid-cols-3 xl:grid-cols-1">
            {workflow.map((item) => {

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-line bg-surface p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30"
                >

                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration Showcase */}

        <div className="mt-24">
          <IntegrationShowcase />
        </div>
      </Container>
    </section>
  );
}