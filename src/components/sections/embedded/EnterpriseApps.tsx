import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { embeddedApplications } from "@/data/embedded-apps";

export function EnterpriseApplications() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Enterprise Applications"
          title="Where offline isn't optional."
          description=""
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {embeddedApplications.map((app) => (
            <IndustryCard key={app.title} {...app} href="/contact" />
          ))}
        </div>
      </Container>
    </section>
  );
}