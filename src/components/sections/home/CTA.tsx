import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/shared/CTABanner";


export function CTA() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <CtaBanner
          align="left"
          eyebrow="Ready when you are"
          title="Bring Understanding to your team"
          description="Request a private demo for your facility or organisation. For the offline device, no internet connection required."
          secondaryLabel="Contact Sales"
          secondaryHref="/contact"
        />
      </Container>
    </section>
    
  );
}