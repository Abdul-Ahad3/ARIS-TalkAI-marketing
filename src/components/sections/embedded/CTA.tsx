import { CtaBanner } from "@/components/shared/CTABanner";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <CtaBanner
          align="left"
          eyebrow="Embedded Edition"
          title="See it in action"
          description="Request a private demo for your team, facility or organisation. No internet connection required."
          secondaryLabel="Contact Sales"
          secondaryHref="/contact"
        />
      </Container>
    </section>
  );
}