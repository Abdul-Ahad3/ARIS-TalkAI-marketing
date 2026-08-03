import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { glossaryItems } from "@/data/tech-glossary";

export function TechnologyGlossary() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="In Plain Language"
          title="The terms, explained simply."
          description=""
        />
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-2">
          {glossaryItems.map(({ term, detail }) => (
          <div
            key={term}
            className="rounded-lg bg-white p-7 shadow-card border border-ink/20 border-1 hover:bg-surface hover:shadow-[5px_5px_2px_3px] hover:shadow-ink/10"
          >
            <p className="text-sm font-semibold text-eyebrow text-teal-500">{term}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{detail}</p>
          </div>
          ))}
        </div>
      </Container>
    </section>
  );
}