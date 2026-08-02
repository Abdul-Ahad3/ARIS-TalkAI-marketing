import { SplitFeatureSection } from "@/components/shared/SplitFeature";
import {Listening} from "@/data/embedded-listen";

const bars = [16, 28, 40, 24, 34, 18];

export function ContinuousListening() {
  return (
    <SplitFeatureSection
      className="bg-teal-50"
      eyebrow="Always Ready"
      title="Always ready, without always recording to the cloud."
      description="Embedded Edition listens continuously so conversation never has to pause for a button press — but nothing is streamed or stored anywhere outside the device."
      visual={
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {Listening.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-lg bg-teal-50 p-7 shadow-card "
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