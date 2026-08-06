import { Building2, Globe, Laptop, MessageSquare, Monitor, Phone, Server, Smartphone, Video, Wifi } from "lucide-react";
import { iconCard } from "@/types/card";

export const integrations: iconCard[] = [
    {
    title: "Microsoft Teams",
    description: "Meetings",
    icon: Building2,
  },
  {
    title: "Zoom",
    description: "Video Calls",
    icon: Video,
  },
  {
    title: "Google Meet",
    description: "Collaboration",
    icon: Globe,
  },
  {
    title: "Slack",
    description: "Huddles",
    icon: MessageSquare,
  },
  {
    title: "Discord",
    description: "Voice Chat",
    icon: Wifi,
  },
  {
    title: "Webex",
    description: "Enterprise",
    icon: Monitor,
  },
  {
    title: "VoIP Systems",
    description: "Telephony",
    icon: Phone,
  },
  {
    title: "Desktop Apps",
    description: "Native Software",
    icon: Laptop,
  },
  {
    title: "Mobile Apps",
    description: "iOS & Android",
    icon: Smartphone,
  },
  {
    title: "Browser Apps",
    description: "Web Platforms",
    icon: Globe,
  },
  {
    title: "Phone Systems",
    description: "PBX",
    icon: Phone,
  },
  {
    title: "Custom APIs",
    description: "Integrations",
    icon: Server,
  },
]