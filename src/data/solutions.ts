import type { SolutionStep } from "@/types/solution";
import { Cpu, Sparkles, Smartphone } from "lucide-react";



export const solutionSteps: SolutionStep[] = [
  { icon: Cpu, title: "Embedded Device", description: "Private, on-device listening — no signal required." },
  { icon: Sparkles, title: "AI Communication", description: "Real-time interpretation, wherever the conversation happens." },
  { icon: Smartphone, title: "TalkAI App", description: "Carries the same understanding into every call, everywhere." },
];