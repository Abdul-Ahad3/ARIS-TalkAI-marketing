import { SplitFeatureSection } from "@/components/shared/SplitFeature";
import { Logo } from "@/components/ui/Logo";

export function Mission() {
  return (
    <SplitFeatureSection
      eyebrow="Our Mission"
      title="Understanding shouldn't depend on connectivity, geography, or budget."
      description="We started ARIS because too many important conversations — in hospitals, classrooms, businesses, and living rooms — still break down over language. We set out to build technology that removes that barrier, wherever the conversation happens."
      bullets={[
        "Built for the moments that matter most",
        "Designed to work anywhere, for anyone",
        "Privacy treated as a right, not a feature",
      ]}
      background="soft"
      visual={
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-surface p-12 shadow-card">
          <Logo className="scale-[2.5]" />
        </div>
      }
    />
  );
}