import type { Feature, FeatureGroup } from "@/types/feature";
import { WifiOff, Cpu, ShieldCheck, Zap, AudioLines, Captions, Phone, Building2 } from "lucide-react";


export const featureGroups: FeatureGroup[] = [
  {
    id: "embedded",
    label: "Embedded Edition",
    features: [
      { icon: WifiOff, title: "Offline", description: "No signal, no internet, no problem." },
      { icon: Cpu, title: "Edge AI", description: "Processed entirely on-device." },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Application",
    features: [
      { icon: Zap, title: "Real-Time", description: "Interpretation as you speak, not after." },
      { icon: AudioLines, title: "Neural Voices", description: "Natural, human-like speech output." },
      { icon: Captions, title: "Live Transcript", description: "Follow along in text, in real time." },
      { icon: Phone, title: "Internet Calling", description: "Built into every call, no extra app." },
    ],
  },
  {
    id: "shared",
    label: "Shared Benefits",
    features: [
      { icon: ShieldCheck, title: "Privacy", description: "Your conversations stay yours." },
      { icon: Building2, title: "Enterprise Ready", description: "Built for teams, compliance, and scale." },
    ],
  },
];