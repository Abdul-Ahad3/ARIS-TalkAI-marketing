import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/technology/Hero";
import { ProcessDiagram } from "@/components/sections/technology/ProcessDiagram";
import { TechnologyGlossary } from "@/components/sections/technology/TechGlossary";
import { CTA } from "@/components/sections/technology/CTA";
import { Footer } from "@/components/layout/Footer";

export default function TechnologyPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProcessDiagram />
      <TechnologyGlossary />
      <CTA />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Technology",
};