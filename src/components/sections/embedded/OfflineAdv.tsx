import { SplitFeatureSection } from "@/components/shared/SplitFeature";
import { offlineAdvantages } from "@/data/offline-advs";

export function OfflineAdvantage() {
  return (
    <SplitFeatureSection
      className="bg-teal-50"
      eyebrow="Offline Advantage"
      title="Understanding that never touches the internet."
      description="No signal, no cloud, no compromise. Embedded Edition processes every conversation locally, so it works exactly the same in a basement, on a factory floor, or thirty thousand feet in the air."
      visual={
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {offlineAdvantages.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-2xl bg-teal-50 p-7 shadow-card hover:bg-surface hover:border"
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