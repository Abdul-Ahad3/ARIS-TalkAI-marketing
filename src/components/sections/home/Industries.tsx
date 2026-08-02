import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section className="bg-teal-50 py-section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Who It's For"
          title="Built for the moments that matter."
          description=""
        />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </Container>
    </section>
  );
}