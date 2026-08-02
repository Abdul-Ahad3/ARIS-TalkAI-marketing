import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

import { cn } from "@/lib/utils";
import { Badge } from "lucide-react";

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

        {/* visual column — dual panel, stacked, reordered above copy on mobile */}
        <div className="order-first grid gap-4 lg:order-last">
          {/* offline panel — Embedded Edition */}
          <div className="rounded-3xl bg-ink p-6 text-white shadow-premium">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-soft">
                Embedded Edition
              </span>
              <Wave />
            </div>
            <div className="mt-4 flex items-center gap-2 text-[1.7rem] font-semibold tracking-[-0.02em]">
              EN <span className="text-lg text-teal-400">⇄</span> FR
            </div>
            <div className="mt-4 space-y-1.5 font-mono text-xs text-on-ink-2">
              <div className="flex justify-between gap-4">
                <span>status</span>
                <b className="font-medium text-on-ink">offline · on-d{/* copy column */}evice</b>
              </div>
              <div className="flex justify-between gap-4">
                <span>network</span>
                <b className="font-medium text-on-ink">none required</b>
              </div>
              <div className="flex justify-between gap-4">
                <span>data</span>
                <b className="font-medium text-on-ink">never leaves device</b>
              </div>
            </div>
          </div>

          {/* online panel — TalkAI App */}
          <div className="rounded-3xl border border-line bg-surface p-6 shadow-card">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-teal-600">
                TalkAI App
              </span>
              <Badge size={16} className="text-teal-600">
                Live call
              </Badge>
            </div>
            <div className="mt-4 space-y-2.5">
              <div className="rounded-xl bg-surface-soft p-3 text-sm text-ink-soft">
                <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-wider text-ink-muted">
                  You speak · English
                </span>
                Are you free to meet on Thursday?
              </div>
              <div className="rounded-xl border border-[#cde9ea] bg-[#e6f4f5] p-3 text-sm text-teal-900">
                <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-wider text-teal-700/70">
                  They hear · French
                </span>
                Es-tu libre pour se voir jeudi&nbsp;?
              </div>
            </div>
            <div className="mt-4 flex justify-between font-mono text-xs text-ink-muted">
              <span>link</span>
              <b className="font-medium text-ink-soft">WebRTC · encrypted</b>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}