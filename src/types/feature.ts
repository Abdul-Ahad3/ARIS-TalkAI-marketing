import type { Card } from "@/types/card";

export interface FeatureGroup {
  id: string;
  label: string;
  features: Card[];
}
