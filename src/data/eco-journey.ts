import type { JourneyMoment } from "@/types/eco-journey";


export const journeyMoments: JourneyMoment[] = [
  { time: "7:30", mode: "embedded", title: "A private team briefing", description: "The device listens quietly in the room, no signal needed, nothing leaves the building." },
  { time: "12:00", mode: "mobile", title: "A video call with a supplier abroad", description: "The app steps in the moment there's a connection. Live translation, live transcript, same understanding." },
  { time: "14:00", mode: "capi", title: "An inter-regional team needs better, seamless communication", description: "Easy integration of the ARIS API to your meeting app" },
  { time: "18:00", mode: "embedded", title: "A confidential conversation at the clinic", description: "Back offline, back private. The same trust, with no internet in the room." },
  { time: "21:00", mode: "mobile", title: "Catching up with family overseas", description: "One more call, no barriers, no missed words." },
];