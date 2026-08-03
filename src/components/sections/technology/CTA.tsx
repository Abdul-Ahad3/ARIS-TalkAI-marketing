import { CtaBanner } from "@/components/shared/CTABanner";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <CtaBanner
          eyebrow="Go Deeper"
          title="Still have questions about how it works?"
          description="Our team is happy to walk through the architecture in as much detail as you need."
          primaryLabel="Talk to the team"
          primaryHref="/contact"
          secondaryLabel="See the ecosystem"
          secondaryHref="/ecosystem"
        />
      </Container>
    </section>
    
  );
}