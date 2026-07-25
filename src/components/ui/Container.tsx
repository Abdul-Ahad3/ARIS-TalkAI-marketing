import type { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "narrow" | "content" | "full";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  size?: ContainerSize;
  padding?: boolean;
  className?: string;
}

const sizeStyles: Record<ContainerSize, string> = {
  narrow: "max-w-[var(--width-narrow)]",
  content: "max-w-[var(--width-content)]",
  full: "max-w-none",
};

export function Container({
  children,
  as: Tag = "div",
  size = "content",
  padding = true,
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        sizeStyles[size],
        padding && "px-6 md:px-10",
        className
      )}
    >
      {children}
    </Tag>
  );
}