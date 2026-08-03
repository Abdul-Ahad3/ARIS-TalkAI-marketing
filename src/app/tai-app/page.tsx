import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/tai-app/Hero";
import { CallingExperience } from "@/components/sections/tai-app/CallExp";
import { Features } from "@/components/sections/tai-app/Features";
import { TranslationDemo } from "@/components/sections/tai-app/TranslationDemo";
import { CurrentSTanding } from "@/components/sections/tai-app/CurrentStanding";
import { CTA } from "@/components/sections/tai-app/CTA";
import { Footer } from "@/components/layout/Footer";

export default function TaiAppPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <CallingExperience />
      <Features />
      <TranslationDemo />
      <CurrentSTanding />
      <CTA />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "TalkAI App",
};