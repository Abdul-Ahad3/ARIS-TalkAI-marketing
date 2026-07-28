import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 right-1/3 h-[32rem] w-[32rem] rounded-full bg-teal-300/20 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 font-mono text-eyebrow uppercase text-teal-600">About ARIS</p>
          <h1 className="text-display text-balance text-ink">
            Every conversation deserves to be <span className="text-gradient-teal">understood.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            ARIS TalkAI exists to remove language as an obstacle — whether
            that means a private, offline device or a real-time app that
            fits in your pocket.
          </p>
        </div>
      </Container>
    </section>
  );
}