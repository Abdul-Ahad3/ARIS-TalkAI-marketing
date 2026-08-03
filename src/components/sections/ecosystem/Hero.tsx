import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[32rem] w-[32rem] rounded-full bg-teal-300/20 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-left">
          <p className="mb-6 font-mono text-eyebrow uppercase text-teal-600">The ARIS Ecosystem</p>
          <h1 className="text-display text-balance text-ink">
            One ecosystem. <span className="text-gradient-teal">Every conversation.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Embedded Edition and the TalkAI App are not two separate products. They are two halves of the same idea, built to move with you between the moments that need privacy and the ones that need reach.
          </p>
          <div className="mt-10 flex flex-wrap items-left justify-left gap-4">
            <Button href="/contact" size="lg">Request Demo</Button>
            <Button href="#translation-demo" size="lg" variant="ghost">
              Compare the two
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}