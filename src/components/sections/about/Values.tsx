import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { companyValues } from "@/data/about-values";

export function Values() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <SectionHeading align="center" eyebrow="What We Believe" title="The principles behind every decision." />
        <div className="mt-16 grid gap-x-12 gap-y-2 rounded-2xl bg-surface-soft p-8 shadow-card sm:grid-cols-2">
          {companyValues.map((value) => (
            <FeatureCard key={value.title} {...value} />
          ))}
        </div>
      </Container>
    </section>
  );
}