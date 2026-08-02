import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { DeviceConcept } from "@/components/ui/DeviceConcept";

const heroStats = [
  { label: "Processing", value: "100% on-device" },
  { label: "Connection", value: "None required", mono: true },
  { label: "Languages", value: "EN ⇄ FR", mono: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-soft pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute -right-20 -top-40 h-[36rem] w-[36rem] rounded-full bg-teal-500/10 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 font-mono text-eyebrow uppercase text-teal-400">
           Embedded Edition
          </p>
          <h1 className="text-display text-balance text-ink">
            Private conversation. <span className="text-gradient-teal">Zero connection.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            A dedicated device that listens, understands and speaks entirely on its own hardware. Nothing is streamed while you talk, and nothing is ever sent to the cloud.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary">Request Demo</Button>
            <Button
              href="#hardware-specs"
              size="lg"
              variant="ghost"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              className="text-ink hover:bg-ink/10 hover:text-ink"
            >
              View Hardware Specs
            </Button>

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
          <DeviceConcept />
        </div>
      </Container>
    </section>
  );
}