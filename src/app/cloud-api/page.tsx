import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/cloud-api/Hero";
import { MultiLang } from "@/components/sections/cloud-api/MultiLang";
import { WorksEverywhere } from "@/components/sections/cloud-api/Works";
import { ConversationScenarios } from "@/components/sections/cloud-api/ConvScenarios";
import { BuildApps } from "@/components/sections/cloud-api/BuildApps";
import { HowItWorks } from "@/components/sections/cloud-api/HowItWorks";
import { WhyChooseRTT } from "@/components/sections/cloud-api/WhyChooseRTT";
import { ComingSoon } from "@/components/sections/cloud-api/ComingSoon";
import { Footer } from "@/components/layout/Footer";

export default function CloudApiPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <MultiLang />
      <WorksEverywhere />
      <ConversationScenarios />
      <BuildApps />
      <HowItWorks />
      <WhyChooseRTT />
      <ComingSoon />
      <Footer />
    </>
  );
}