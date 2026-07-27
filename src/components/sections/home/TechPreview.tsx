import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SpecGrid } from "@/components/ui/SpecGrid";
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
        <div className="mt-16">
          <SpecGrid specs={techSpecs} />
        </div>
        <div className="mt-10 text-center">
          <Button href="/technology" variant="secondary" icon={<ArrowRight size={16} />} iconPosition="right">
            See the Full Technology
          </Button>
        </div>
      </Container>
    </section>
  );
}