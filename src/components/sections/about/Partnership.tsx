import { aboutPartner } from "@/data/about-partner";
import { SplitFeatureSection } from "@/components/shared/SplitFeature";

export function Partnership() {
  return (
    <SplitFeatureSection 
      className="bg-ink text-white"
      eyebrow="Our partnership"
      title="Built together, with MHTechFusion."
      description="ARIS TalkAI is developed in strategic partnership with MHTechFusion, bringing together complementary expertise in AI research and hardware engineering, from firmware and electronics to real-time apps and edge AI."
      position="right"
      visual={
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {aboutPartner.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-lg bg-ink-soft/45 p-7 shadow-card hover:shadow-premium"
          >          
            <h3 className="text-sm font-semibold text-teal-500">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white">{description}</p>
          </div>
          ))}
        </div>
      }
      subscript="MHTechFusion · Freiburg im Breisgau, Germany"
    />
  );
}