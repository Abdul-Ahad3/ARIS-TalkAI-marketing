import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/ecosystem/Hero";
import { JourneyTimeline } from "@/components/sections/ecosystem/JourneyTimeline";
import { ComparisonTable } from "@/components/sections/ecosystem/CompTable";
import { SharedFoundation } from "@/components/sections/ecosystem/SharedFoundation";
import { CTA } from "@/components/sections/ecosystem/CTA";
import { Footer } from "@/components/layout/Footer";

export default function EcosystemPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <JourneyTimeline />
      <ComparisonTable />
      <SharedFoundation />
      <CTA />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Ecosystem",
};