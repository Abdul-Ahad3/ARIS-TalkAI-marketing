import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/about/Hero";
import { Mission } from "@/components/sections/about/Mission";
import { Values } from "@/components/sections/about/Values";
import { Partnership } from "@/components/sections/about/Partnership";
import { CTA } from "@/components/sections/about/CTA";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Mission />
      <Values />
      <Partnership />
      <CTA />
      <Footer />
    </>
  );
}