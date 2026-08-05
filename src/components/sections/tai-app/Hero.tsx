import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from 'next/image'

const heroStats = [
  { label: "Platforms", value: "iOS & Android" },
  { label: "End-to-end latency", value: "1.0-2.3 s", mono: true },
  { label: "Status", value: "Beta, refining now", mono: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-24 pt-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-teal-300/25 blur-3xl" />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 justify-items-center">
        <div className="mx-auto max-w-2xl text-left">
          <p className="mb-6 inline-flex items-center gap-2 r px-4 py-1.5 font-mono text-eyebrow uppercase text-teal-600">
            TalkAI App
          </p>
          <h1 className="text-display text-balance text-ink">
            A live interpreter, <span className="text-gradient-teal">in your pocket.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Call anyone in another language and each side hears the other in their own, with a live transcript on screen. When there is a connection, the app brings broader language support and instant, natural voice.
          </p>
          <div className="mt-10 flex flex-wrap items-left justify-left gap-4">
            <Button href="/contact" size="lg">Request Demo</Button>
            <Button href="#translation-demo" size="lg" variant="ghost">
              See How a call works
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-6 border-t border-line pt-6">
            {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                {stat.label}
              </p>
              <p className={cn("mt-1.5 text-base font-semibold text-ink", stat.mono && "font-mono")}>
                {stat.value}
              </p>
            </div>
            ))}
          </div>
        </div>
        <Image className="mt-10 rounded-2xl border-5 border-ink shadow-[25px_10px_200px_rgba(0,0,0,0.25)]" src="/images/app-images/app-call.jpeg" alt="App Call" width={250} height={80} />
        
      </Container>
    </section>
  );
}