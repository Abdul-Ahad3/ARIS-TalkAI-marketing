import { ArrowRight } from "lucide-react";

import { cloudApplications } from "@/data/cloud-apps";
import { Badge } from "@/components/ui/Badge";
import { AppCard } from "@/components/ui/AppCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BuildApps() {
  return (
    <section className="relative overflow-hidden py-28">
      <Container>
        <div className="grid gap-16 xl:grid-cols-2 xl:items-start">
          <div>
            <SectionHeading
              eyebrow="Developer Platform"
              title="Build Multilingual Applications"
              description="Embed the ARIS Real-Time Translation API into your own products and deliver multilingual voice experiences with minimal integration effort."
            />

            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              Whether you are building enterprise software, collaboration tools,
              AI assistants or consumer applications, ARIS provides the
              infrastructure layer that makes every conversation multilingual.
            </p>

            <div className="mt-10">
              <Button
                href="/contact"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Join Early Access
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cloudApplications.map((application) => (
              <Badge key={application.title} variant="teal">{application.title}</Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}