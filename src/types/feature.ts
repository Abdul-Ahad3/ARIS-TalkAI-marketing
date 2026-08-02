import type { LucideIcon } from "lucide-react";
import type { Card } from "@/types/card";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureGroup {
  id: string;
  label: string;
  features: Feature[];
}
