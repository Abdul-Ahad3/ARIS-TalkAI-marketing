import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedLangDisplay } from "@/components/ui/AnimatedLangDisplay";
import { Badge } from "@/components/ui/Badge";
import { HeroProductWidget } from "./HeroProductWidget";

import { cn } from "@/lib/utils";

const heroStats = [
  { label: "Offline device", value: "Nothing leaves the room" },
  { label: "Live app latency", value: "1.0–2.3 s", mono: true },
  { label: "Available now", value: "EN ⇄ FR", mono: true },
];

function Wave() {
  const bars = [40, 70, 100, 55, 90, 60, 45];
  return (
    <span className="inline-flex h-[18px] items-end gap-[3px]">
      {bars.map((height, i) => (
        <span
          key={i}
          className="w-[3px] animate-wave-bar rounded-sm bg-teal-500"
          style={{ height: `${height}%`, animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="bg-surface-soft relative overflow-hidden pt-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 85% -10%, rgb(55 203 220 / 0.22), transparent 55%), radial-gradient(80% 60% at -5% 10%, rgb(11 162 184 / 0.10), transparent 60%)",
        }}
      />

      <Container className="relative grid gap-10 py-[clamp(3rem,7vw,6rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">

        <div>
          <p className="before:inline-block before:h-px before:w-[22px] before:bg-teal-500/70 before:content-[''] mb-4 inline-flex items-center gap-2 font-mono text-eyebrow uppercase text-teal-600">
            One engine · two ways to run it
          </p>
          <h1 className="text-display text-balance text-ink">
            Understand any conversation.
            <br />
            <span className="text-teal-500">Online or offline.</span>
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
            A dedicated device that translates speech entirely on its own
            hardware, and a real-time app for calls across the world. Same
            AI, chosen to fit the moment, private when it has to be.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Request a demo
            </Button>
            <Button href="/ecosystem" size="lg" variant="ghost">
              See the ecosystem
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

        {/* visual column — triple panel, stacked, reordered above copy on mobile */}
        <div className="order-first grid gap-4 lg:order-last">
          {/* offline panel — Embedded Edition */}
          <HeroProductWidget />
        </div>
      </Container>
    </section>
  );
}