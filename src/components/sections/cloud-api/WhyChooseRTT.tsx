import { AudioWaveform, Languages, Layers3, Rocket } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    eyebrow: "Low Latency",
    icon: AudioWaveform,
    title: "Built for Live Conversations",
    description:
      "Designed for real-time multilingual communication with minimal delay between speech and translated audio.",
  },
  {
    eyebrow: "Natural Speech",
    icon: Languages,
    title: "High-Quality AI Voices",
    description:
      "Deliver fluent, natural speech that feels conversational rather than robotic.",
  },
  {
    eyebrow: "Developer Experience",
    icon: Layers3,
    title: "Simple API Integration",
    description:
      "Integrate once and bring multilingual communication to web, desktop and mobile applications.",
  },
  {
    eyebrow: "Future Ready",
    icon: Rocket,
    title: "Built to Scale",
    description:
      "Designed as the communication layer for products ranging from startups to enterprise platforms.",
  },
];

export function WhyChooseRTT() {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Why ARIS"
          title="Why Choose Our RTT API?"
          description="ARIS is designed as multilingual communication infrastructure, not just a translator. Every part of the platform is built around delivering natural conversations at scale. Whether you are enabling global meetings, powering customer support,
            or building multilingual products, ARIS provides the infrastructure
            that allows everyone to continue speaking naturally while every
            participant hears the conversation in their preferred language."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <Badge variant="teal">Low Latency</Badge>
          <Badge variant="teal">Cloud Native</Badge>
          <Badge variant="teal">Enterprise Ready</Badge>
          <Badge variant="teal">API First</Badge>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              eyebrow={benefit.eyebrow}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}