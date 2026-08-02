import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { communicationBarriers } from "@/data/problems";

export function Problem() {
  return (
    <section className="bg-teal-50 py-section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="The Communication Gap"
          title="Some words never make it across."
          description="The most important conversations still break down over language, and they rarely wait for a good connection or a human interpreter."
        />

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {communicationBarriers.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-teal-50 p-7 shadow-card hover:bg-surface hover:border"
            >
              <h3 className="mt-2 text-lg font-medium text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}