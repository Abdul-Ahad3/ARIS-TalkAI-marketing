import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { sharedFoundation } from "@/data/eco-foundation";

export function SharedFoundation() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <SectionHeading align="center" eyebrow="Shared Foundation" title="Two products. One set of principles." />
        <div className="mt-16 grid gap-x-12 gap-y-2 rounded-2xl bg-surface p-8 shadow-card sm:grid-cols-2">
          {sharedFoundation.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}