import { Container } from "@/components/ui/Container";
import { PipelineStep } from "@/components/ui/PipelineStep";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { cloudPipeline } from "@/data/cloud-pipeline";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-28 bg-teal-200/35">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Cloud Translation Pipeline"
          title="How the RTT API Works"
          description="Integrate once and let ARIS handle the entire multilingual communication pipeline. Conversations remain uninterrupted while every participant hears fluent speech in their preferred language."
        />

        {/* Pipeline */}

        <div className="mt-24 grid gap-14 lg:grid-cols-4">
          {cloudPipeline.map((step, index) => (
            <PipelineStep
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
              isLast={index === cloudPipeline.length - 1}
            />
          ))}
        </div>

        {/* Bottom Summary */}

        <div className="mt-24 rounded-[2rem] border border-line bg-surface p-10 shadow-premium">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-mono text-eyebrow uppercase tracking-[0.18em] text-teal-600">
                Built For Live Conversations
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-ink text-balance">
                Everyone continues speaking naturally.
                Everyone understands each other.
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
                ARIS handles speech recognition, translation and natural
                voice synthesis behind the scenes so conversations continue
                without changing platforms or disrupting existing workflows.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-line bg-background p-8">
              <div className="space-y-6">
                <PipelineMetric
                  label="Live Audio"
                  value="Captured"
                />

                <PipelineMetric
                  label="Translation"
                  value="Real-Time"
                />

                <PipelineMetric
                  label="Speech Output"
                  value="Natural AI Voices"
                />

                <PipelineMetric
                  label="Experience"
                  value="Continuous Conversation"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface PipelineMetricProps {
  label: string;
  value: string;
}

function PipelineMetric({
  label,
  value,
}: PipelineMetricProps) {
  return (
    <div className="flex items-center justify-between border-b border-line pb-4 last:border-0 last:pb-0">
      <span className="text-sm text-ink-soft">
        {label}
      </span>

      <span className="font-semibold text-ink">
        {value}
      </span>
    </div>
  );
}