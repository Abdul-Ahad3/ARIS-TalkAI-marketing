import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "default" | "onInk";
  className?: string;
}

export function Logo({ tone = "default", className }: LogoProps) {
  const isOnInk = tone === "onInk";

  return (
    <Link
      href="/"
      aria-label="ARIS TalkAI home"
      className={cn(
        "inline-flex items-center gap-[0.6rem] text-[1.12rem] font-semibold tracking-[-0.02em]",
        isOnInk ? "text-on-ink" : "text-ink",
        className
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6 shrink-0">
        <rect
          x="1.5"
          y="1.5"
          width="21"
          height="21"
          rx="6.5"
          className={isOnInk ? "fill-[#122a33]" : "fill-[#0b1519]"}
        />
        <g className="stroke-cyan" strokeWidth="1.9" strokeLinecap="round">
          <line x1="7" y1="9.5" x2="7" y2="14.5" />
          <line x1="10.3" y1="6.7" x2="10.3" y2="17.3" />
          <line x1="13.7" y1="8.5" x2="13.7" y2="15.5" />
          <line x1="17" y1="10.5" x2="17" y2="13.5" />
        </g>
      </svg>
      ARIS{" "}
      <small
        className={cn(
          "font-mono text-[0.6rem] uppercase tracking-[0.14em]",
          isOnInk ? "text-on-ink-2" : "text-ink-muted"
        )}
      >
        TalkAI
      </small>
    </Link>
  );
}