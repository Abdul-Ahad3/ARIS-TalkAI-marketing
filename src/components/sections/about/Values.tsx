import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyValues } from "@/data/about-values";

export function Values() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <SectionHeading align="left" eyebrow="What We Believe" title="The principles behind every decision." />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {companyValues.map(({ eyebrow, title, description }) => (
          <div
            key={title}
            className="rounded-lg bg-white p-7 shadow-card hover:shadow-premium"
          >
            <p className="text-sm font-semibold text-teal-500">{eyebrow}</p>
            <h3 className="mt-2 text-lg font-medium text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
          </div>
          ))}
        </div>
      </Container>
    </section>
  );
}