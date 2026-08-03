import { CtaBanner } from "@/components/shared/CTABanner";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <CtaBanner
          align="left"
          eyebrow="TALKAI APP"
          title="Try it on your next call."
          description="Request a demo, or ask to join the beta and be first to the updated release."
          secondaryLabel="Join the beta"
          secondaryHref="/contact"
        />
      </Container>
    </section>
    
  );
}