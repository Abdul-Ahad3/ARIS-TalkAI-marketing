"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { AnimatedLangDisplay } from "@/components/ui/AnimatedLangDisplay";
import { cn } from "@/lib/utils";

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

const PANEL_LABELS = ["Embedded Edition", "TalkAI App", "Cloud & API"] as const;

// Long enough for the Embedded panel's language-pair animation (2.5s per pair)
// to actually cycle a couple of times before the widget moves on.
const PANEL_DURATION_MS = 4000;

export function HeroProductWidget() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      clearTimer();
      setActive(index);
    },
    [clearTimer]
  );

  useEffect(() => {
    clearTimer();
    if (!reducedMotion && !paused) {
      timeoutRef.current = setTimeout(() => {
        setActive((current) => (current + 1) % PANEL_LABELS.length);
      }, PANEL_DURATION_MS);
    }
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reducedMotion, paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative min-h-[17.5rem]">
        {/* Embedded Edition */}
        <div
          aria-hidden={active !== 0}
          className={cn(
            "absolute inset-0 rounded-3xl bg-ink p-6 text-white shadow-premium transition-opacity duration-700 ease-out",
            active === 0 ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-soft">Embedded Edition</span>
            <Wave />
          </div>
          <AnimatedLangDisplay />
          <div className="mt-4 space-y-1.5 font-mono text-xs text-on-ink-2">
            <div className="flex justify-between gap-4">
              <span>status</span>
              <b className="font-medium text-on-ink">offline · on-device</b>
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

        {/* TalkAI App */}
        <div
          aria-hidden={active !== 1}
          className={cn(
            "absolute inset-0 rounded-3xl border border-line bg-surface p-6 shadow-card transition-opacity duration-700 ease-out",
            active === 1 ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-teal-600">TalkAI App</span>
            <Badge variant="teal">Live call</Badge>
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

        {/* Cloud & API */}
        <Link
          href="/cloud-api"
          aria-hidden={active !== 2}
          tabIndex={active === 2 ? 0 : -1}
          className={cn(
            "absolute inset-0 block rounded-3xl border-2 border-dashed border-line bg-surface-soft/70 p-6 shadow-card transition-opacity duration-700 ease-out hover:border-teal-500/40",
            active === 2 ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-teal-600">Cloud & API</span>
            <Badge variant="outline">Coming Soon</Badge>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="teal">Teams</Badge>
            <Badge variant="teal">Zoom</Badge>
            <Badge variant="teal">Meet</Badge>
            <Badge variant="teal">Slack</Badge>
          </div>
          <div className="mt-4 space-y-1.5 font-mono text-xs text-ink-muted">
            <div className="flex justify-between gap-4">
              <span>status</span>
              <b className="font-medium text-ink-soft">in development</b>
            </div>
            <div className="flex justify-between gap-4">
              <span>reach</span>
              <b className="font-medium text-ink-soft">any live audio source</b>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {PANEL_LABELS.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show ${label} panel`}
            aria-current={active === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              active === index ? "w-6 bg-teal-500" : "w-1.5 bg-line"
            )}
          />
        ))}
      </div>
    </div>
  );
}