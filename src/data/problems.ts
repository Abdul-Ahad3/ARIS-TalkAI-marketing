import type {CommunicationBarrier} from "@/types/problem";
import { Briefcase, Plane, HeartPulse, Headset, Users, GraduationCap } from "lucide-react";

export const communicationBarriers: CommunicationBarrier[] = [
  { icon: Briefcase, title: "Business Meetings", description: "A deal hangs on one mistranslated clause." },
  { icon: Plane, title: "International Travel", description: "Asking for help shouldn't feel like a gamble." },
  { icon: HeartPulse, title: "Healthcare", description: "Symptoms lost in translation put care at risk." },
  { icon: Headset, title: "Customer Support", description: "Frustration builds when neither side understands." },
  { icon: Users, title: "Families", description: "Grandparents and grandchildren, separated by language." },
  { icon: GraduationCap, title: "Education", description: "A question unanswered because it couldn't be asked." },
];