import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const perks = [
  "First 500 users get exclusive launch benefits",
  "Everyone who registers early gets a launch discount",
  "Registration is completely free — no card required",
];

const accessTiers = [
  {
    name: "Founding 500",
    badge: "First 500",
    stat: "20%",
    statLabel: "off at launch",
    perks: ["Priority onboarding", "Founding member status", "Direct line to our team"],
  },
  {
    name: "Early Access",
    badge: "After the first 500",
    stat: "10%",
    statLabel: "off at launch",
    perks: ["Early access to updates", "Launch-day discount", "First to know when we ship"],
  },
];

export function EarlyAccess() {
  return (
    <section className="bg-gradient-to-br from-ink via-ink2 to-teal-700 py-section justify-left items-left">
      <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <div>
          <SectionHeading
            className="text-white"
            align="left"
            eyebrow="Early Access"
            title="Be among the first to experience ARIS."
          />

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-left gap-x-8 gap-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-left gap-2 text-sm text-white">
                <Check size={16} className="shrink-0 text-white" />
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-left justify-left gap-4">
            <Button href="/contact" size="lg">Join Early Access</Button>
            <Button href="/contact" size="lg" className="bg-white text-ink">Request Demo</Button>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {accessTiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-line bg-surface-soft p-8 shadow-card">
              <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-teal-700">
                {tier.badge}
              </span>
              <h3 className="mt-4 text-lg font-medium text-ink">{tier.name}</h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-mono text-3xl font-semibold text-teal-600">{tier.stat}</span>
                <span className="text-sm text-ink-muted">{tier.statLabel}</span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check size={15} className="mt-0.5 shrink-0 text-teal-600" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
      </Container>
    </section>
  );
}