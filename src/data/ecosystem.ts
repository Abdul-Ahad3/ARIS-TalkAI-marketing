import { EcosystemProduct } from "@/types/ecosystem";
import { Cpu, Smartphone } from "lucide-react";


export const ecosystemProducts: EcosystemProduct[] = [
  { 
    title: "Embedded Edition", 
    tag: "100% OFFLINE", 
    description: "A dedicated handheld that listens, translates and speaks entirely on its own hardware. No signal, no cloud, no compromise, for clinics, factories and secure sites where a conversation can never leave the room.", 
    runson: "on-device edge AI", 
    bestfor: "private, in-person talk" 
  },
  { 
    title: "TalkAI App", 
    tag: "LIVE · CONNECTED", 
    description: "Real-time interpretation in your pocket. Call anyone in another language and each side hears the other in their own, with a live transcript on screen. Broader language support, wherever there is a connection.", 
    runson: "iOS and Android · cloud AI", 
    bestfor: "calls across distance" 
  },
];