import Image from "next/image";
import { Hero } from "@/components/sections/home/Hero";
import { NavBar } from "@/components/layout/NavBar"
import { Footer } from "@/components/layout/Footer";
import { Problem } from "@/components/sections/home/Problem";
import { Solution } from "@/components/sections/home/Solution";
import { Ecosystem } from "@/components/sections/home/Ecosystem";
import { Features } from "@/components/sections/home/Features";
import { Industries } from "@/components/sections/home/Industries";
import { TechnologyPreview } from "@/components/sections/home/TechPreview";
import { CTA } from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Problem />
      <Solution />
      <Ecosystem />
      <Features />
      <Industries />
      <TechnologyPreview />
      <CTA />
      <Footer />
    </>
  );
}
