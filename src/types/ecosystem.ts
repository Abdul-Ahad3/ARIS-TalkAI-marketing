import type { LucideIcon } from "lucide-react";

export interface EcosystemProduct {
  title: string;
  tag: string;
  description: string;
  runson: string;
  bestfor: string;
  href: string;
  comingSoon?: boolean;
}