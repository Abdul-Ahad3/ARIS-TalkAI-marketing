"use client";

import { useEffect, useMemo, useState } from "react";
import { integrations } from "@/data/capi-service-list";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY = 4000;

export function IntegrationShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % integrations.length);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [isPaused]);

  const previousIndex = useMemo(
    () => (activeIndex - 1 + integrations.length) % integrations.length,
    [activeIndex]
  );

  const nextIndex = useMemo(
    () => (activeIndex + 1) % integrations.length,
    [activeIndex]
  );

  const previous = integrations[previousIndex];
  const current = integrations[activeIndex];
  const next = integrations[nextIndex];

  return (
    <div
      className="mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex h-[340px] items-center justify-center overflow-hidden">
        {/* Previous */}

        <ShowcaseCard
          integration={previous}
          position="left"
        />

        {/* Active */}

        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[40px] bg-teal-400/10 blur-3xl" />
        <ShowcaseCard
          integration={current}
          position="center"
        />
        

        {/* Next */}

        <ShowcaseCard
          integration={next}
          position="right"
        />
      </div>

      {/* Pills */}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {integrations.map((integration, index) => (
          <button
            key={integration.title}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              index === activeIndex
                ? "border-teal-500 bg-teal-500/10 text-teal-600 shadow-sm"
                : "border-line bg-surface text-ink-soft hover:border-teal-500/40 hover:text-ink"
            )}
          >
            {integration.title}
          </button>
        ))}
      </div>
    </div>
  );
}

interface ShowcaseCardProps {
  integration: (typeof integrations)[number];
  position: "left" | "center" | "right";
}

function ShowcaseCard({
  integration,
  position,
}: ShowcaseCardProps) {
  const Icon = integration.icon;

  const positionClasses = {
    left:
      "-translate-x-[68%] scale-[0.88] opacity-35 z-0 hidden lg:block",

    center:
      "translate-x-0 scale-100 opacity-100 z-20",

    right:
      "translate-x-[68%] scale-[0.88] opacity-35 z-0 hidden lg:block",
  };

  return (
    <div
      className={cn(
        "absolute w-[420px] rounded-[32px] border border-line bg-surface p-8 shadow-premium transition-all duration-700 ease-out",
        positionClasses[position]
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600">
        <Icon size={30} />
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-ink">
        {integration.title}
      </h3>

      <p className="mt-4 leading-relaxed text-ink-soft">
        {integration.description}
      </p>

      <div className="mt-8 inline-flex rounded-full bg-teal-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-teal-600">
        Supported Integration
      </div>
    </div>
  );
}