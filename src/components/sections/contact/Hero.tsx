import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-surface-soft pb-4 pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-left">
          <p className="mb-4 font-mono text-eyebrow uppercase text-teal-600">Contact</p>
          <h1 className="text-title text-balance text-ink">Let's talk.</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Whether you are exploring a demo, planning an enterprise deployment,
            or just have a question, we would like to hear from you.
          </p>
        </div>
      </Container>
    </section>
  );
}