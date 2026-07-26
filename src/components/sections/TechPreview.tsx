import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { techSpecs } from "@/data/technologies";

export function TechnologyPreview() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The Technology Behind ARIS"
          title="Trust, engineered in."
        />

        <div className="mt-16 rounded-3xl bg-ink px-6 py-12 md:px-12">
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/10">
            {techSpecs.map((spec) => (
              <div key={spec.label} className="px-4 text-center">
                <p className="font-mono text-2xl font-medium text-teal-400 md:text-3xl">
                  {spec.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-white/60">
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            href="/technology"
            variant="secondary"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            See the Full Technology
          </Button>
        </div>
      </Container>
    </section>
  );
}