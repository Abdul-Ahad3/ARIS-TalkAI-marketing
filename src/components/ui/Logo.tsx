import { cn } from "@/lib/utils";

interface LogoProps {
  label?: string;
  className?: string;
}

export function Logo({ label = "ARIS", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true">
        <path d="M1 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-ink" />
        <path
          d="M15 8H27"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0.5 4.5"
          className="text-teal-500"
        />
        <circle cx="13.5" cy="8" r="2.25" fill="currentColor" className="text-teal-500" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        {label}
      </span>
    </span>
  );
}