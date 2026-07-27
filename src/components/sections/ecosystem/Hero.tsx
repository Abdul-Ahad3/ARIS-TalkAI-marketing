import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[32rem] w-[32rem] rounded-full bg-teal-300/20 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 font-mono text-eyebrow uppercase text-teal-600">The ARIS Ecosystem</p>
          <h1 className="text-display text-balance text-ink">
            One ecosystem. <span className="text-gradient-teal">Every conversation.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Embedded Edition and the TalkAI App aren't two separate products —
            they're two halves of the same idea, built to move with you.
          </p>
          <a href="#journey" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
            See how it connects
            <ArrowDown size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}