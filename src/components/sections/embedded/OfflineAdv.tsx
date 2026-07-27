import { WifiOff } from "lucide-react";
import { SplitFeatureSection } from "@/components/shared/SplitFeature";

export function OfflineAdvantage() {
  return (
    <SplitFeatureSection
      eyebrow="Offline Advantage"
      title="Understanding that never touches the internet."
      description="No signal, no cloud, no compromise. Embedded Edition processes every conversation locally — so it works exactly the same in a basement, on a factory floor, or thirty thousand feet in the air."
      bullets={[
        "No signal or Wi-Fi required, anywhere",
        "Nothing is ever sent to a server",
        "Consistent performance, regardless of location",
      ]}
      visual={
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-ink p-12 shadow-premium">
          <div className="text-center">
            <WifiOff size={56} className="mx-auto text-teal-400" />
            <p className="mt-6 font-mono text-sm uppercase tracking-wider text-white/60">100% Offline</p>
          </div>
        </div>
      }
    />
  );
}