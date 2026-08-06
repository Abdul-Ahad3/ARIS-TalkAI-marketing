import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-surface-soft pb-4 pt-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 85% -10%, rgb(55 203 220 / 0.22), transparent 55%), radial-gradient(80% 60% at -5% 10%, rgb(11 162 184 / 0.10), transparent 60%)",
        }}
      />
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