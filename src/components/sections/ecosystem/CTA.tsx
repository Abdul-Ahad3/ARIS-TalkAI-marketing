import { CtaBanner } from "@/components/shared/CTABanner";

export function CTA() {
  return (
    <CtaBanner
      title="See each half of the ecosystem up close."
      description="Explore Embedded Edition for private, offline conversation, or the TalkAI App for real-time calls across the world."
      primaryLabel="Explore Embedded Edition"
      primaryHref="/embedded"
      secondaryLabel="Explore TalkAI App"
      secondaryHref="/tai-app"
    />
  );
}