import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const roadmap = [
  {
    status: "Available",
    title: "Embedded Translator",
    description:
      "Offline AI translation hardware for private, real-time conversations.",
  },
  {
    status: "Available",
    title: "TalkAI Mobile App",
    description:
      "Connected multilingual conversations wherever you go.",
  },
  {
    status: "Future Platform",
    title: "Cloud & RTT API",
    description:
      "The next evolution of the ARIS ecosystem—bringing multilingual communication infrastructure to software platforms around the world.",
  },
];

export function ComingSoon() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-ink via-ink2 to-teal-700">
      <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"> 
        <div className="mt-10">
            <SectionHeading
                className="text-white"
                align="left"
                eyebrow="The Road Ahead"
                title="Cloud & API is the Next Chapter of ARIS"
                description="The RTT API represents our vision for bringing multilingual communication to every application and every conversation. We're building it carefully—and we'd love your feedback along the way."
            />

            <div className="mt-20 flex flex-wrap justify-left gap-4">
                <Button href="/contact" size="lg">
                    Request Demo
                </Button>

                <Button
                    className="bg-white text-ink"
                    href="/contact"
                    size="lg"
                    iconPosition="right"
                >
                    Join Early Access
                </Button>
            </div>

        </div>

        <div className="relative mx-auto mt-10 max-w-5xl">
          {/* Line */}

          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-teal-500/40 via-teal-400/20 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-2">
            {roadmap.map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-[28px] border border-line bg-surface p-7 shadow-premium"
              >

                <Badge
                  variant={
                    index === roadmap.length - 1
                      ? "teal"
                      : "outline"
                  }
                >
                  {item.status}
                </Badge>

                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        
      </Container>
    </section>
  );
}