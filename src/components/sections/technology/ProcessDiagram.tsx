import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techFeatures } from "@/data/tech-feats";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Badge } from "@/components/ui/Badge";

export function ProcessDiagram() {
  return (
    <section className="bg-teal-50 py-section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="How It Works"
          title="One AI engine. Two ways to run it."
          description="Whether a conversation is processed on the device or in the cloud, it's the same underlying AI, just deployed differently, depending on what the moment needs."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {techFeatures.map((group) => (
          <div key={group.eyebrow} className="rounded-2xl bg-surface p-8 hover:shadow-premium">
              <Badge variant="teal">{group.eyebrow}</Badge>
              <h3 className="mt-2 text-2xl font-medium text-ink">{group.label}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">{group.description}</p>
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