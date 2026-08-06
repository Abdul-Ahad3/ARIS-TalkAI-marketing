import { Container } from "@/components/ui/Container";
import { ScenarioCard } from "@/components/ui/ScenarioCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { cloudScenarios } from "@/data/cloud-scenarios";

export function ConversationScenarios() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Built for Every Conversation"
          title="Real-world Conversation Scenarios"
          description="ARIS adapts to the way people already communicate. Whether you're speaking with colleagues, customers, patients or family members, everyone can participate naturally in their preferred language."
        />

        {/* Scenario Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cloudScenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.title}
              icon={scenario.icon}
              title={scenario.title}
              description={scenario.description}
            />
          ))}
        </div>

        {/* Bottom Summary */}

        <div className="mt-20 rounded-[2rem] border border-line bg-surface p-10 shadow-premium">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="font-mono text-eyebrow uppercase tracking-[0.2em] text-teal-600">
                One Platform. Unlimited Conversations.
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-ink text-balance">
                From enterprise meetings to everyday conversations,
                ARIS becomes the multilingual communication layer
                behind every interaction.
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
                These are just a few examples. Any application,
                meeting, support session or voice conversation that
                uses live audio can become multilingual through the
                ARIS Cloud platform.
              </p>
            </div>

            {/* Stats */}

            <div className="grid gap-5">
              <StatCard
                value="∞"
                label="Potential Conversation Types"
              />

              <StatCard
                value="24/7"
                label="Always Available Cloud Infrastructure"
              />

              <StatCard
                value="Global"
                label="Designed for Worldwide Communication"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-background px-6 py-5">
      <p className="text-3xl font-bold text-gradient-teal">
        {value}
      </p>

      <p className="mt-2 text-sm text-ink-soft">
        {label}
      </p>
    </div>
  );
}