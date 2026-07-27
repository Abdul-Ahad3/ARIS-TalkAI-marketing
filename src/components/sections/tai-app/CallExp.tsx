import { Phone } from "lucide-react";
import { SplitFeatureSection } from "@/components/shared/SplitFeature";

export function CallingExperience() {
  return (
    <SplitFeatureSection
      eyebrow="Calling Experience"
      title="It's just a phone call. With understanding built in."
      description="No separate app to open, no switching screens mid-conversation. TalkAI works inside the voice and video calls people already make, every day."
      bullets={[
        "Standard voice and video calling, nothing new to learn",
        "Interpretation happens live, as the call happens",
        "Works across iOS and Android",
      ]}
      visual={
        <div className="flex aspect-square flex-col items-center justify-center gap-6 rounded-3xl bg-teal-50 p-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-premium">
            <Phone size={28} className="text-teal-600" />
          </div>
          <div className="flex items-center gap-2 text-sm text-teal-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
            <span className="font-mono">Live · 02:14</span>
          </div>
        </div>
      }
    />
  );
}