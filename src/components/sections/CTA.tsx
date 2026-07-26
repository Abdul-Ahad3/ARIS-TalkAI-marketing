import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-800 to-ink py-section">
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-title text-balance text-white">
            Ready to communicate without barriers?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Whether you're outfitting a hospital floor or connecting with
            family across the world, ARIS is ready when you are.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="secondary">
              Request Demo
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="ghost"
              className="border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}