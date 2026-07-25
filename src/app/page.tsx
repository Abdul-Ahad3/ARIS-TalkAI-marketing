import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { NavBar } from "@/components/layout/NavBar"
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}
