import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionSteps } from "@/data/solutions";

export function Solution() {
  return (
    <section className="bg-surface-soft py-section">
      <Container className="flex flex-col items-center grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:flex-row lg:justify-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="How it works"
            title="One AI engine. Deployed where the moment needs it."
            description="Whether a conversation is processed on the device or in the cloud, it is the same underlying pipeline: listen, transcribe, translate, speak. We just run it in the place that fits, close to you for privacy, or connected for reach."
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <span className="rounded-full bg-teal-400/15 px-4 py-2 font-mono text-sm text-teal-500">
              Edge · fully on-device
            </span>
            <span className="rounded-full bg-teal-400/15 px-4 py-2 font-mono text-sm text-teal-500">
              Cloud · Broader Languages
            </span>
          </div>
          <a href="/technology" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition-colors hover:text-teal-400">See the Full Technology <ArrowRight size={16}/> </a>
        </div>

        <div className="mt-16 flex flex-col items-center grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:flex-row lg:justify-center">
          {solutionSteps.map((step) => (
            <div key={step.title} className="flex flex-col bg-white items-center gap-6 lg:flex-row">
              <div className="w-full max-w-sm rounded-2xl bg-surface-white p-5 text-left shadow-card lg:w-72">
                <p className="mt-2 text-sm text-eyebrow uppercase text-teal-600">{step.eyebrow}</p>
                <h3 className="mt-6 text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}