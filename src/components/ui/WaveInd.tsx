import { cn } from "@/lib/utils";

interface WaveIndicatorProps {
  active?: boolean;
  bars?: number;
  className?: string;
}

const DEFAULT_BARS = 7;
const BAR_DELAY_STEP = 0.15; 

export function WaveIndicator({ active = true, bars = DEFAULT_BARS, className }: WaveIndicatorProps) {
  return (
    <span className={cn("flex h-[18px] items-end gap-[3px]", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={cn("w-[3px] animate-wave-bar rounded-sm", active ? "bg-cyan" : "bg-teal-500")}
          style={{ animationDelay: `${i * BAR_DELAY_STEP}s` }}
        />
      ))}
    </span>
  );
}