import type { Feature } from "@/types/feature";
import { ShieldCheck, Users, Wrench, Globe } from "lucide-react";

export const companyValues: Feature[] = [
  { icon: ShieldCheck, title: "Privacy as a Right", description: "Not a feature to upsell — a baseline we design around." },
  { icon: Users, title: "Built for Real People", description: "Every decision starts with the person on the other end of the conversation." },
  { icon: Wrench, title: "No Shortcuts", description: "Reliability matters more in the moments that matter most." },
  { icon: Globe, title: "Global by Default", description: "Designed to work across languages, cultures, and connectivity." },
];