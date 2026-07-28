import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-32">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[32rem] w-[32rem] rounded-full bg-teal-300/20 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 font-mono text-eyebrow uppercase text-teal-600">The Technology</p>
          <h1 className="text-display text-balance text-ink">
            Complex engineering. <span className="text-gradient-teal">Simple to trust.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            You don't need to understand how ARIS works to trust it — but for
            anyone who wants to look closer, here's what's actually happening
            under the hood.
          </p>
        </div>
      </Container>
    </section>
  );
}