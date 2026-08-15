import type { LucideIcon } from "lucide-react";

export interface JourneyMoment {
  time: string;
  mode: "embedded" | "mobile" | "cloud&api";
  title: string;
  description: string;
}
