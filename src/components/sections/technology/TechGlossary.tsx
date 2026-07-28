import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordian";
import { glossaryItems } from "@/data/tech-glossary";

export function TechnologyGlossary() {
  return (
    <section className="bg-surface py-section">
      <Container size="narrow">
        <SectionHeading
          align="center"
          eyebrow="In Plain Language"
          title="The terms, explained simply."
          description="Tap any term for a closer look — everything above the fold is all you need to know."
        />
        <div className="mt-16">
          <Accordion items={glossaryItems} />
        </div>
      </Container>
    </section>
  );
}