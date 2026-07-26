import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-teal-300/30 blur-3xl" />

      <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="max-w-xl">
          <p className="mb-6 font-mono text-eyebrow uppercase text-teal-600">
            ARIS TalkAI Ecosystem
          </p>
          <h1 className="text-display text-balance text-ink">
            Communicate <span className="text-gradient-teal">Anywhere.</span>
            <br />
            Online or Offline.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            One ecosystem for every conversation — a fully offline embedded
            translator for the moments that demand privacy, and a real-time
            AI interpreter in your pocket for everyone else.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg">
              Request Demo
            </Button>
            <Button
              href="/ecosystem"
              size="lg"
              variant="ghost"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              Explore Ecosystem
            </Button>
          </div>
        </div>

        <div className="relative h-[28rem] lg:h-[32rem]">
          <div className="absolute left-0 top-8 w-64 animate-float rounded-3xl bg-ink p-6 shadow-premium sm:w-72">
            <p className="font-mono text-xs uppercase tracking-wider text-teal-400">
              Embedded Edition
            </p>
            <p className="mt-4 font-mono text-2xl text-white">EN ⇄ FR</p>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              100% Offline
            </div>
          </div>

          <div
            className="absolute bottom-8 right-0 w-64 animate-float rounded-3xl bg-surface p-6 shadow-premium ring-1 ring-line sm:w-72"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              TalkAI App
            </p>
            <div className="mt-4 space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-surface-muted" />
              <div className="h-2 w-1/2 rounded-full bg-teal-200" />
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-ink-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
              Live · Connected
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}