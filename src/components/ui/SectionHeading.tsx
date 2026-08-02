import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  color?: "default" | "white";
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
        <p className="before:inline-block before:h-px before:w-[22px] before:bg-teal-500/70 before:content-[''] mb-4 inline-flex items-center gap-2 font-mono text-eyebrow uppercase text-teal-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-title text-default text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-default-soft">{description}</p>
      )}
    </div>
  );
}