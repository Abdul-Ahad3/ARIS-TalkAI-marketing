import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { NavBar } from "@/components/layout/NavBar"
import { Footer } from "@/components/layout/Footer";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Features } from "@/components/sections/Features";
import { Industries } from "@/components/sections/Industries";

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
      <Footer />
    </>
  );
}
