import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Who It's For"
          title="Built for the moments that matter."
          description="From hospital rooms to factory floors, ARIS meets people where language shouldn't be the obstacle."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </Container>
    </section>
  );
}