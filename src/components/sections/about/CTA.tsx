import { CtaBanner } from "@/components/shared/CTABanner";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <CtaBanner
          eyebrow="Work with us"
          title="Let's remove a barrier together"
          description="Whether you are exploring a demo or a deployment, we would like to hear from you."
          secondaryLabel="Contact Sales"
          secondaryHref="/contact"
        />
      </Container>
    </section>
  );
}