import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/contact/Hero";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <ContactSection />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Contact Us",
};