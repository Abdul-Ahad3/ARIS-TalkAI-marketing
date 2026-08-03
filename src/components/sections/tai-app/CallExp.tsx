import { Phone } from "lucide-react";
import { SplitFeatureSection } from "@/components/shared/SplitFeature";
import Image from "next/image";

export function CallingExperience() {
  return (
    <SplitFeatureSection
      className="justify-self-center bg-teal-50 text-center "
      eyebrow="REAL SCREENS · RUNNING TODAY"
      title="Translate, call, understand."
      description=""
      position="bottom"
      visual={
        <div className="flex flex-col items-center justify-center rounded-3xl grid-cols-1 text-center sm:grid sm:gap-2 sm:grid-cols-3">
          <div className="mt-1 flex flex-col items-center text-center text-sm">
            <Image className="mt-5 rounded-2xl border-5 border-ink shadow-[25px_10px_200px_rgba(0,0,0,0.25)]" src="/images/app-images/app-home.jpeg" alt="Device Prototype" width={250} height={800} />
            <p className="text-center text-ink py-5">Home · pick languages</p>
          </div>
          <div className="mt-1 flex flex-col items-center text-center text-sm">
            <Image className="mt-5 rounded-2xl border-5 border-ink shadow-[25px_10px_200px_rgba(0,0,0,0.25)]" src="/images/app-images/app-dialing.jpeg" alt="Device Prototype" width={250} height={800} />
            <p className="text-center text-ink py-5">Call · translation on</p>
          </div>
          <div className="mt-1 flex flex-col items-center text-center text-sm">
            <Image className="mt-5 rounded-2xl border-5 border-ink shadow-[25px_10px_200px_rgba(0,0,0,0.25)]" src="/images/app-images/app-call.jpeg" alt="Device Prototype" width={250} height={800} />
            <p className="text-center text-ink py-5">Live · in-call translation</p>
          </div>
        </div>
      }
    />
  );
}