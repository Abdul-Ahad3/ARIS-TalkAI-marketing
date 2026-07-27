import type { JourneyMoment } from "@/types/eco-journey";
import { Briefcase, Video, HeartPulse, Users } from "lucide-react";


export const journeyMoments: JourneyMoment[] = [
  { time: "7:30 AM", mode: "embedded", icon: Briefcase, title: "A private team briefing", description: "The device listens quietly in the room — no signal needed, nothing leaves the building." },
  { time: "12:00 PM", mode: "mobile", icon: Video, title: "A video call with a supplier abroad", description: "The app steps in the moment there's a connection — live translation, live transcript, same understanding." },
  { time: "6:00 PM", mode: "embedded", icon: HeartPulse, title: "A confidential conversation at the clinic", description: "Back offline, back private — the same trust, with no internet in the room." },
  { time: "9:00 PM", mode: "mobile", icon: Users, title: "Catching up with family overseas", description: "One more call, no barriers, no missed words." },
];