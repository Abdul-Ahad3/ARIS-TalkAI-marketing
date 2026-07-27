import { ArrowRight, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-24 pt-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-teal-300/25 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 font-mono text-eyebrow uppercase text-teal-600">
            <Smartphone size={14} />
            TalkAI App
          </p>
          <h1 className="text-display text-balance text-ink">
            Every call, <span className="text-gradient-teal">understood.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Talk to anyone, in any language — right inside a normal voice or
            video call, with live translation and transcript built in.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg">Request Demo</Button>
            <Button href="#translation-demo" size="lg" variant="ghost" icon={<ArrowRight size={16} />} iconPosition="right">
              See It In Action
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-sm">
          <div className="rounded-[2.5rem] border border-line bg-surface-soft p-3 shadow-premium">
            <div className="rounded-[2rem] bg-surface p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">Live Call</span>
                <span className="flex items-center gap-1.5 text-xs text-teal-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
                  Connected
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="ml-auto h-2 w-2/3 rounded-full bg-teal-200" />
                <div className="h-2 w-3/4 rounded-full bg-surface-muted" />
                <div className="ml-auto h-2 w-1/2 rounded-full bg-teal-200" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}