import { Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const benefits = [
  "First 500 users receive exclusive launch benefits.",
  "Unlock special discounts available after launch.",
  "Free registration with no payment required.",
];

export function EarlyAccess() {
  return (
    <section className="bg-gradient-to-br from-ink via-ink2 to-teal-700 py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-premium">
          <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center lg:p-16">
            <div className="max-w-2xl">
              <p className="font-mono text-eyebrow uppercase tracking-wider text-teal-600">
                Early Access
              </p>

              <h2 className="mt-4 text-display text-balance text-ink">
                Be among the first to experience ARIS.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Register today to secure your place in the first wave of ARIS
                users. Early members will receive launch benefits, exclusive
                post-launch discounts, and priority updates as the ecosystem
                expands. Registration is completely free.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  Join Early Access
                </Button>

                <Button href="/contact" size="lg" variant="ghost">
                  Request Demo
                </Button>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl bg-white border border-line p-7 shadow-card hover:bg-surface hover:border"
                >
                    <h3 className="mt-2 text-lg font-medium text-ink">{benefit}</h3>
                </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}