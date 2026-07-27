import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { communicationBarriers } from "@/data/problems";

export function Problem() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The Communication Gap"
          title="Some words never make it across."
          description="Every day, in boardrooms and clinics, at border crossings and kitchen tables, understanding breaks down — not because people don't want to connect, but because language gets in the way."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communicationBarriers.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-surface p-8 shadow-card transition-shadow hover:shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                <Icon size={22} className="text-teal-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}