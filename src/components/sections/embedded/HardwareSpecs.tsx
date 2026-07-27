import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecGrid } from "@/components/ui/SpecGrid";
import { hardwareSpecs } from "@/data/embedded-hardware";

export function HardwareSpecs() {
  return (
    <section id="hardware-specs" className="bg-surface-soft py-section">
      <Container>
        <SectionHeading align="center" eyebrow="Hardware" title="Built to disappear into daily use." />
        <div className="mt-16">
          <SpecGrid specs={hardwareSpecs} />
        </div>
        <p className="mt-6 text-center text-xs text-ink-muted">
          Specifications shown are preliminary and subject to change.
        </p>
      </Container>
    </section>
  );
}