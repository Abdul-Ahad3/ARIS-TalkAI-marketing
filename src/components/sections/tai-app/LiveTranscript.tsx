import { Captions } from "lucide-react";
import { SplitFeatureSection } from "@/components/shared/SplitFeature";

export function LiveTranscript() {
  return (
    <SplitFeatureSection
      eyebrow="Live Transcript"
      title="Read along, word for word."
      description="Every call generates a live transcript in both languages — helpful in noisy rooms, useful for review afterward, and reassuring when it matters to get the details right."
      bullets={[
        "Text appears in real time as each person speaks",
        "Available in both original and translated language",
        "Saved to the call history for later reference",
      ]}
      background="soft"
      reverse
      visual={
        <div className="flex aspect-square flex-col justify-center gap-3 rounded-3xl bg-white p-10 shadow-card">
          <div className="flex items-center gap-2 text-ink-muted">
            <Captions size={16} />
            <span className="font-mono text-xs uppercase tracking-wider">Transcript</span>
          </div>
          <div className="mt-4 space-y-3">
            <div className="h-2 w-5/6 rounded-full bg-surface-muted" />
            <div className="h-2 w-2/3 rounded-full bg-surface-muted" />
            <div className="h-2 w-3/4 rounded-full bg-teal-200" />
            <div className="h-2 w-1/2 rounded-full bg-teal-200" />
          </div>
        </div>
      }
    />
  );
}