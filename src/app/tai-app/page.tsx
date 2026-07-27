import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/tai-app/Hero";
import { CallingExperience } from "@/components/sections/tai-app/CallExp";
import { LiveTranscript } from "@/components/sections/tai-app/LiveTranscript";
import { TranslationDemo } from "@/components/sections/tai-app/TranslationDemo";
import { PlatformSupport } from "@/components/sections/tai-app/PlatformSupport";
import { CTA } from "@/components/sections/tai-app/CTA";
import { Footer } from "@/components/layout/Footer";

export default function TaiAppPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <CallingExperience />
      <LiveTranscript />
      <TranslationDemo />
      <PlatformSupport />
      <CTA />
      <Footer />
    </>
  );
}