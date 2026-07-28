import { Mic, Sparkles, Cpu, Cloud } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessDiagram() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title="One AI engine. Two ways to run it."
          description="Whether a conversation is processed on the device or in the cloud, it's the same underlying AI — just deployed differently, depending on what the moment needs."
        />

        <div className="mt-16">
          <div className="mx-auto flex max-w-xs items-center justify-center gap-3 rounded-2xl bg-surface p-6 text-center shadow-card">
            <Mic size={18} className="text-ink-muted" />
            <span className="font-mono text-sm text-ink">Your Voice</span>
          </div>

          <div className="mx-auto h-8 w-px bg-line" />

          <div className="mx-auto flex max-w-md items-center gap-3">
            <span className="h-0 flex-1 border-t-2 border-teal-500" />
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
              <Sparkles size={16} />
            </span>
            <span className="h-0 flex-1 border-t-2 border-dashed border-teal-400" />
          </div>

          <div className="mx-auto mt-2 grid max-w-2xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-ink p-8 text-center text-white shadow-premium">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Cpu size={22} className="text-teal-400" />
              </div>
              <h3 className="mt-6 text-lg font-medium">Edge</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Runs entirely on Embedded Edition — no internet required.
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-8 text-center shadow-card">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                <Cloud size={22} className="text-teal-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-ink">Cloud</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Powers the TalkAI App — broader language support with a connection.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}