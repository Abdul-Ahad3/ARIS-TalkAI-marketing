import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pipeline } from "@/components/ui/Pipeline";
import { cloudPipeline } from "@/data/cloud-pipeline";

export function HowItWorks() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Cloud Translation Pipeline"
          title="How the RTT API Works"
          description="Integrate once and let ARIS handle the entire multilingual communication pipeline. Conversations remain uninterrupted while every participant hears fluent speech in their preferred language."
        />

        <Pipeline steps={cloudPipeline} className="mt-16" />
      </Container>
    </section>
  );
}