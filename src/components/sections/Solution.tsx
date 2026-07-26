import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionSteps } from "@/data/solutions";

export function Solution() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How ARIS Solves This"
          title="Communication Without Barriers"
          description="One connected system carries understanding from a private, offline device into every conversation you have — online or off."
        />

        <div className="mt-16 flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
          {solutionSteps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center gap-6 lg:flex-row">
              <div className="w-full max-w-sm rounded-2xl bg-surface-soft p-8 text-center shadow-card lg:w-72">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                  <step.icon size={22} className="text-teal-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>

              {index < solutionSteps.length - 1 && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
                  <ArrowRight size={16} className="rotate-90 lg:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}