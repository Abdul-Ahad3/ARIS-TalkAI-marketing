import { ArrowDown, Volume2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TranslationDemo() {
  return (
    <section id="translation-demo" className="bg-surface py-section">
      <Container>
        <SectionHeading align="center" eyebrow="Translation Demo" title="Speak naturally. Be understood instantly." />

        <div className="mx-auto mt-16 max-w-md rounded-3xl bg-surface-soft p-8 shadow-card">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white px-3 py-1 font-mono text-xs text-ink-muted">EN</span>
            <Volume2 size={16} className="text-ink-muted" />
          </div>
          <p className="mt-4 text-lg text-ink">&ldquo;It&apos;s so nice to finally meet you.&rdquo;</p>

          <div className="my-6 flex justify-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
              <ArrowDown size={16} />
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="rounded-full bg-teal-500 px-3 py-1 font-mono text-xs text-white">ES</span>
            <Volume2 size={16} className="text-teal-600" />
          </div>
          <p className="mt-4 text-lg text-ink">&ldquo;Qué gusto conocerte por fin.&rdquo;</p>
        </div>

        <p className="mt-6 text-center text-xs text-ink-muted">
          Sample conversation shown for illustration.
        </p>
      </Container>
    </section>
  );
}