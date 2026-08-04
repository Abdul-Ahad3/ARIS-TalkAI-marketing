import type { iconCard, simpleCard } from "@/types/card";

export interface FeatureGroup {
  id: string;
  label: string;
  features: iconCard[];
}

export interface simpleFeatureGroup {
  eyebrow: string;
  label: string;
  description?: string;
  features: simpleCard[];
}
