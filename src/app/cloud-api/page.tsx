import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/cloud-api/Hero";
import { MultiLang } from "@/components/sections/cloud-api/MultiLang";
import { WorksEverywhere } from "@/components/sections/cloud-api/Works";
import { Footer } from "@/components/layout/Footer";

export default function CloudApiPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <MultiLang />
      <WorksEverywhere />
      <Footer />
    </>
  );
}