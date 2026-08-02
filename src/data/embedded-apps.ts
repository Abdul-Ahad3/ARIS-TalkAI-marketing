import type { Card } from "@/types/card";
import { HeartPulse, Landmark, Factory, Briefcase } from "lucide-react";

export const embeddedApplications: Card[] = [
  { icon: HeartPulse, title: "Healthcare", description: "Bedside conversations that never leave the room." },
  { icon: Landmark, title: "Government", description: "Secure interpretation for sensitive proceedings." },
  { icon: Factory, title: "Manufacturing", description: "Clear instructions on any floor, any shift, no signal." },
  { icon: Briefcase, title: "Business", description: "Confidential meetings stay confidential." },
];