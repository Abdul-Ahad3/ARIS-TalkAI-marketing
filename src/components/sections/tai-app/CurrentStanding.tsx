import { SplitFeatureSection } from "@/components/shared/SplitFeature";
import { currentStand } from "@/data/current-stand";

export function CurrentSTanding() {
  return (
    <SplitFeatureSection 
      className="bg-surface-soft"
      eyebrow="Where it stands"
      title="Live today, getting better fast."
      description="The app already handles the full journey: pick a language, place a call, and translate it live. We are refining the call experience now, and an updated demo with a full real-time conversation will be shared in the next few days."
      position="right"
      visual={
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {currentStand.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-lg bg-white p-7 shadow-card hover:bg-surface hover:border "
          >
            <h3 className="mt-2 text-lg font-medium text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
          </div>
          ))}
        </div>
      }
    />
  );
}