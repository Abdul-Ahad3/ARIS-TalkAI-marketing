import { CtaBanner } from "@/components/shared/CTABanner";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
   <section className="bg-surface-soft py-section">
    <Container>
       <CtaBanner
        eyebrow="One Ecosystem"
        title="See how it fits your world."
        description="Tell us where your conversations happen, and we will show you which part of the ecosystem fits, or how they work together."
        secondaryLabel="See the Technology"
        secondaryHref="/tai-app"
      />
    </Container>
   </section>
  );
}