import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/embedded/Hero";
import { OfflineAdvantage } from "@/components/sections/embedded/OfflineAdv";
import { EdgeAI } from "@/components/sections/embedded/EdgeAI";
import { ContinuousListening } from "@/components/sections/embedded/ContListening";
import { HardwareSpecs } from "@/components/sections/embedded/HardwareSpecs";
import { EnterpriseApplications } from "@/components/sections/embedded/EnterpriseApps";
import { CTA } from "@/components/sections/embedded/CTA";
import { Footer } from "@/components/layout/Footer";
import { DeviceProto } from "@/components/sections/embedded/DeviceProto";

export default function EmbeddedPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <OfflineAdvantage />
      <EdgeAI />
      <ContinuousListening />
      <HardwareSpecs />
      <DeviceProto />
      <EnterpriseApplications />
      <CTA />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Embedded Solution",
};