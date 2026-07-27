import type { LucideIcon } from "lucide-react";

export interface JourneyMoment {
  time: string;
  mode: "embedded" | "mobile";
  icon: LucideIcon;
  title: string;
  description: string;
}
