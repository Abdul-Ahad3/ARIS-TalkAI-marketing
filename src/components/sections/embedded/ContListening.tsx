import { SplitFeatureSection } from "@/components/shared/SplitFeature";

const bars = [16, 28, 40, 24, 34, 18];

export function ContinuousListening() {
  return (
    <SplitFeatureSection
      eyebrow="Continuous Listening"
      title="Always ready, without always recording to the cloud."
      description="Embedded Edition listens continuously so conversation never has to pause for a button press — but nothing is streamed or stored anywhere outside the device."
      bullets={[
        "No wake delay — interpretation starts instantly",
        "Designed for natural, ongoing conversation",
        "Listening state never leaves the device",
      ]}
      visual={
        <div className="flex aspect-square flex-col items-center justify-center gap-8 rounded-3xl bg-ink p-12 shadow-premium">
          <div className="flex items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className="w-1.5 animate-pulse rounded-full bg-teal-400"
                style={{ height: h, animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <p className="font-mono text-sm uppercase tracking-wider text-white/60">Always Ready</p>
        </div>
      }
    />
  );
}