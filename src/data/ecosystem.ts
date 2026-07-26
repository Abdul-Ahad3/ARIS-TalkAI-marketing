import { EcosystemProduct } from "@/types/ecosystem";
import { Cpu, Smartphone } from "lucide-react";


export const ecosystemProducts: EcosystemProduct[] = [
  { icon: Cpu, title: "Embedded Edition", tag: "Offline Edge AI", description: "Private, on-device — works with zero connection." },
  { icon: Smartphone, title: "Mobile Application", tag: "Global Reach", description: "Real-time AI interpretation, wherever you are." },
];