import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CtaBannerProps {
  align?: "left" | "center";
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  align,
  eyebrow,
  title,
  description,
  primaryLabel = "Request Demo",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br rounded-2xl from-ink via-ink2 to-teal-700 py-section">
      <div className="pointer-events-none absolute -bottom-32 -left-32  rounded-full bg-teal-400/20 blur-3xl" />
      <Container>
        <SectionHeading className="text-white"
          align={align}
          eyebrow={eyebrow}
          title={title}
          description={description}
          color="white"
        />
        <div className="relative mx-auto max-w-2xl text-left">
          <div className="mt-10 flex flex-wrap items-left justify-left gap-4">
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