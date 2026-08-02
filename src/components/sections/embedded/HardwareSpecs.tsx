import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecGrid } from "@/components/ui/SpecGrid";
import { hardwareSpecs } from "@/data/embedded-hardware";

export function HardwareSpecs() {
  return (
    <section id="hardware-specs" className="bg-surface-soft py-section">
      <Container>
        <SectionHeading align="left" eyebrow="Hardware" title="Built to disappear into daily use." />
        <div className="mt-16 text-left">
          <SpecGrid specs={hardwareSpecs} />
        </div>
        <p className="mt-6 text-left text-xs text-ink-muted">
          Battery, range and weight are preliminary targets for the productised device and subject to change. More language pairs are on the roadmap.
        </p>
      </Container>
    </section>
  );
}