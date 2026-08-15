import { sharedFoundation } from "@/data/eco-foundation";
import { SplitFeatureSection } from "@/components/shared/SplitFeature";

export function SharedFoundation() {
  return (
    <SplitFeatureSection 
      className="bg-ink text-white"
      eyebrow="Shared Foundation"
      title="Three products. One set of principles."
      description=""
      position="bottom"
      visual={
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-2">
          {sharedFoundation.map((feature) => (
          <div
            key={feature.title}
            className="rounded-lg bg-ink-soft/45 p-7 shadow-card hover:bg-white/10 hover:border "
          >
            <p className="mt-2 text-sm font-mono text-eyebrow uppercase tracking-wider text-teal-500 leading-relaxed">{feature.eyebrow}</p>
            <h3 className="mt-2 text-lg font-medium text-white">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
          </div>
          ))}
        </div>
      }
    />
  );
}