import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { featureGroups } from "@/data/features";

export function Features() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What Makes ARIS Different"
          title="Built for offline. Built for online. Built for both."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featureGroups.map((group) => (
            <div key={group.id} className="rounded-2xl bg-surface p-8 shadow-card">
              <p className="font-mono text-eyebrow uppercase text-teal-600">{group.label}</p>
              <div className="mt-2">
                {group.features.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}