import { Handshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { partnershipCopy } from "@/data/about-partner";

export function Partnership() {
  return (
    <section className="bg-surface-soft py-section">
      <Container size="narrow">
        <div className="rounded-2xl bg-surface p-10 text-center shadow-card sm:p-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
            <Handshake size={22} className="text-teal-600" />
          </div>
          <p className="mt-6 font-mono text-eyebrow uppercase text-teal-600">{partnershipCopy.eyebrow}</p>
          <h2 className="mt-3 text-title text-balance text-ink">{partnershipCopy.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{partnershipCopy.description}</p>
        </div>
      </Container>
    </section>
  );
}