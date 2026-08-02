import { Mic, Cpu, Volume2 } from "lucide-react";
import { SplitFeatureSection } from "@/components/shared/SplitFeature";
import { embeddedFeatures } from "@/data/embedded-feats";

export function EdgeAI() {
  return (
    <SplitFeatureSection
      eyebrow="Fully on-device"
      title="The entire model lives on the device."
      description="There is no round trip to a data center. Listening, interpretation and speech generation all happen inside the device, which is what makes true offline operation possible. It runs on a compact edge‑AI module built for neural inference."
      background="soft"
      position="bottom"
      subscript="Runs through ONNX Runtime on Raspberry Pi 5 / NVIDIA Jetson / RK3588‑class NPU hardware. No servers in the processing loop."
      visual={
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {embeddedFeatures.map(({ eyebrow, title, description }) => (
          <div
            key={title}
            className="rounded-lg bg-white p-7 shadow-card "
          >
            <p className="text-sm font-semibold text-teal-500">{eyebrow}</p>
            <h3 className="mt-2 text-lg font-medium text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
          </div>
          ))}
        </div>
      }
    />
  );
}