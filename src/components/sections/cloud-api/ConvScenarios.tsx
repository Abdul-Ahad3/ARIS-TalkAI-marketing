import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { cloudScenarios } from "@/data/cloud-scenarios";

export function ConversationScenarios() {
  return (
    <section className="relative overflow-hidden bg-surface py-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeading
          align="left"
          eyebrow="Built for Every Conversation"
          title="Real-world Conversation Scenarios"
          description="ARIS adapts to the way people already communicate. Whether you're speaking with colleagues, customers, patients or family members, everyone can participate naturally in their preferred language."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cloudScenarios.map((scenario) => (
            <IndustryCard key={scenario.title} {...scenario} />
          ))}
        </div>
      </Container>
    </section>
  );
}