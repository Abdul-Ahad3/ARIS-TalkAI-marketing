import { EcosystemProduct } from "@/types/ecosystem";


export const ecosystemProducts: EcosystemProduct[] = [
  { 
    title: "Embedded Edition", 
    tag: "100% OFFLINE", 
    description: "A dedicated handheld that listens, translates and speaks entirely on its own hardware. No signal, no cloud, no compromise, for clinics, factories and secure sites where a conversation can never leave the room.", 
    runson: "on-device edge AI", 
    bestfor: "private, in-person talk",
    href: "/embedded"
  },
  { 
    title: "TalkAI App", 
    tag: "LIVE · CONNECTED", 
    description: "Real-time interpretation in your pocket. Call anyone in another language and each side hears the other in their own, with a live transcript on screen. Broader language support, wherever there is a connection.", 
    runson: "iOS and Android · cloud AI", 
    bestfor: "calls across distance",
    href: "/tai-app"
  },
  {
    title: "Cloud & API",
    tag: "COMING SOON",
    description: "Multilingual communication infrastructure for the tools you already use, and your own products. Connect your conversations, applications, and teams across languages with real-time translated speech wherever you work.",
    runson: "your infrastructure",
    bestfor: "developers & platforms",
    href: "/cloud-api",
    comingSoon: true,
},
];