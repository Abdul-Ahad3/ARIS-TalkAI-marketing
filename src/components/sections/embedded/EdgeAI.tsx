import { Mic, Cpu, Volume2 } from "lucide-react";
import { SplitFeatureSection } from "@/components/shared/SplitFeature";

export function EdgeAI() {
  return (
    <SplitFeatureSection
      eyebrow="Edge AI"
      title="The entire model lives on the device."
      description="There's no round trip to a data center. Listening, interpretation, and speech generation all happen inside the device itself — which is what makes true offline operation possible in the first place."
      bullets={[
        "No servers in the processing loop",
        "Nothing streamed while you speak",
        "Same model, same performance, every time",
      ]}
      background="soft"
      reverse
      visual={
        <div className="flex aspect-square flex-col items-center justify-center gap-8 rounded-3xl bg-ink p-12 shadow-premium">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-teal-400">
              <Mic size={20} />
            </span>
            <span className="h-0 w-8 border-t-2 border-teal-500" />
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/40">
              <Cpu size={22} />
            </span>
            <span className="h-0 w-8 border-t-2 border-teal-500" />
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-teal-400">
              <Volume2 size={20} />
            </span>
          </div>
          <p className="font-mono text-sm uppercase tracking-wider text-white/60">Fully On-Device</p>
        </div>
      }
    />
  );
}