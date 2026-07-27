import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecGrid } from "@/components/ui/SpecGrid";
import { platformSpecs } from "@/data/app-platforms";

export function PlatformSupport() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <SectionHeading align="center" eyebrow="Platform Support" title="Available wherever you already talk." />
        <div className="mt-16">
          <SpecGrid specs={platformSpecs} />
        </div>
        <p className="mt-6 text-center text-xs text-ink-muted">
          Platform requirements shown are indicative and subject to change.
        </p>
      </Container>
    </section>
  );
}