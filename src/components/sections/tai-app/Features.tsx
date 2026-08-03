import { Captions } from "lucide-react";
import { SplitFeatureSection } from "@/components/shared/SplitFeature";
import { appFeatures } from "@/data/app-feats";

export function LiveTranscript() {
  return (
    <SplitFeatureSection
      eyebrow="Features"
      title="Everything a real conversation needs."
      description=""
      background="soft"
      position="bottom"
      visual={
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {appFeatures.map(({ eyebrow, title, description }) => (
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