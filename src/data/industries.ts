import type { Industry } from "@/types/industry";
import { HeartPulse, Plane, Briefcase, Landmark, GraduationCap, Factory, ConciergeBell } from "lucide-react";



export const industries: Industry[] = [
  { icon: HeartPulse, title: "Healthcare", description: "Clear communication between patients and providers, every time." },
  { icon: Plane, title: "Travel", description: "Navigate any country without missing a word." },
  { icon: Briefcase, title: "Business", description: "Negotiate, present, and close deals across languages." },
  { icon: Landmark, title: "Government", description: "Secure, compliant communication for public service." },
  { icon: GraduationCap, title: "Education", description: "Every student understood, regardless of language." },
  { icon: Factory, title: "Manufacturing", description: "Clear instructions on the floor, no matter the shift." },
  { icon: ConciergeBell, title: "Hospitality", description: "Welcome every guest in their own language." },
];