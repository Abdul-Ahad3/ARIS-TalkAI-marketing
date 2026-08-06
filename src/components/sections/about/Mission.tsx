import { SplitFeatureSection } from "@/components/shared/SplitFeature";

export function Mission() {
  return (
    <SplitFeatureSection
      className="bg-teal-50"
      eyebrow="Our Mission"
      title="Understanding shouldn't depend on connectivity, geography, or budget."
      description=""
      background="soft"
      visual={
        <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <p className="text-lg px-8 leading-relaxed text-ink-soft">
            We started ARIS because too many important conversations in hospitals, classrooms, businesses, and living rooms, still break down over language. We set out to build technology that removes that barrier, wherever the conversation happens.
          </p>
          <div className="rounded-lg bg-teal-50 p-7 shadow-card hover:bg-white hover:border">
            <h3 className="text-sm font-medium text-ink">Built for the moments that matter most</h3>
          </div>
          <div className="rounded-lg bg-teal-50 p-7 shadow-card hover:bg-white hover:border">
            <h3 className="text-sm font-medium text-ink">Designed to work anywhere, for anyone</h3>
          </div>
          <div className="rounded-lg bg-teal-50 p-7 shadow-card hover:bg-white hover:border">
            <h3 className="text-sm font-medium text-ink">Privacy treated as a right, not a feature</h3>
          </div>
        </div>
      }
    />
  );
}