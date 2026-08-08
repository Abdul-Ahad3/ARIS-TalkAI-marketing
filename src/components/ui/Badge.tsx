import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "outline" | "dark";
}

export function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.18em]",
        {
          "border-line bg-surface text-ink-muted":
            variant === "default",

          "border-teal-500/20 bg-teal-500/10 text-teal-600":
            variant === "teal",

          "border-line bg-transparent text-ink":
            variant === "outline",
          
          "bg-teal-400/20 text-ink-muted":
            variant === "dark",
        }
      )}
    >
      {children}
    </span>
  );
}