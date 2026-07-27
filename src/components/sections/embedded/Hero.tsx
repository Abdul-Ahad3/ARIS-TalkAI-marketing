import { ArrowRight, WifiOff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute -right-20 -top-40 h-[36rem] w-[36rem] rounded-full bg-teal-500/10 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 font-mono text-eyebrow uppercase text-teal-400">
            <WifiOff size={14} />
            Embedded Edition
          </p>
          <h1 className="text-display text-balance">
            Private conversation. <span className="text-gradient-teal">Zero connection.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            A dedicated device that listens, understands, and speaks — entirely
            on its own, with nothing ever sent to the cloud.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="secondary">Request Demo</Button>
            <Button
              href="#hardware-specs"
              size="lg"
              variant="ghost"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              View Hardware Specs
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}