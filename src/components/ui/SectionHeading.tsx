import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && <div className="mb-4">{badge}</div>}
      {eyebrow && (
        <p className="mb-3 font-mono text-eyebrow uppercase text-teal-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-title text-ink text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-ink-soft">{description}</p>
      )}
    </div>
  );
}