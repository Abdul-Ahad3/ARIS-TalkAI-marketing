import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  title,
  description,
  primaryLabel = "Request Demo",
  primaryHref = "/contact",
  secondaryLabel = "Contact Sales",
  secondaryHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-800 to-ink py-section">
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-title text-balance text-white">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">{description}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref} size="lg" variant="secondary">{primaryLabel}</Button>
            <Button
              href={secondaryHref}
              size="lg"
              variant="ghost"
              className="border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}