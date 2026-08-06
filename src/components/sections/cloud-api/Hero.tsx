import {  ArrowRight, Cloud, Globe, Mic, Network, Radio } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const integrations = [
  "Teams",
  "Zoom",
  "Google Meet",
  "Slack",
  "Discord",
  "Webex",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <Container className="relative grid gap-20 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2">
            

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
              Future Platform · Coming Soon
            </span>
          </div>

          <h1 className="mt-8 text-display text-balance text-ink">
            Multilingual
            <span className="text-gradient-teal">
              {" "}
              Communication Infrastructure
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            The third pillar of the ARIS ecosystem. Connect meetings,
            conversations, customer calls and applications through one
            cloud-powered Real-Time Translation platform that lets everyone
            communicate naturally in their own language.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Join Early Access
            </Button>

            <Button
              href="/contact"
              variant="ghost"
              size="lg"
              iconPosition="right"
            >
              Request Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {integrations.map((platform) => (
              <div
                key={platform}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft shadow-sm"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative h-[38rem]">

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 500 600"
            fill="none"
          >
            <path
              d="M120 120 C180 180 200 220 250 300"
              stroke="rgb(45 212 191 / .35)"
              strokeWidth="2"
            />

            <path
              d="M380 110 C330 180 300 220 250 300"
              stroke="rgb(45 212 191 / .35)"
              strokeWidth="2"
            />

            <path
              d="M120 470 C170 410 200 360 250 300"
              stroke="rgb(45 212 191 / .35)"
              strokeWidth="2"
            />

            <path
              d="M380 470 C330 410 300 360 250 300"
              stroke="rgb(45 212 191 / .35)"
              strokeWidth="2"
            />
          </svg>
          <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink shadow-premium">
            <div className="flex flex-col items-center">
              <Network className="h-8 w-8 text-teal-400" />

              <span className="mt-3 font-mono text-xs uppercase tracking-widest text-teal-400">
                RTT API
              </span>
            </div>
          </div>

          <FloatingNode
            icon={<Mic className="h-5 w-5" />}
            label="Live Audio"
            className="left-6 top-16"
          />

          <FloatingNode
            icon={<Globe className="h-5 w-5" />}
            label="Translate"
            className="right-4 top-10"
          />

          <FloatingNode
            icon={<Radio className="h-5 w-5" />}
            label="Speech"
            className="left-8 bottom-20"
          />

          <FloatingNode
            icon={<Cloud className="h-5 w-5" />}
            label="Cloud"
            className="right-10 bottom-14"
          />

        </div>
      </Container>
    </section>
  );
}

interface FloatingNodeProps {
  icon: React.ReactNode;
  label: string;
  className: string;
}

function FloatingNode({
  icon,
  label,
  className,
}: FloatingNodeProps) {
  return (
    <div
      className={`absolute ${className} animate-float rounded-3xl border border-line bg-surface px-5 py-4 shadow-premium`}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-teal-500/10 p-2 text-teal-500">
          {icon}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}