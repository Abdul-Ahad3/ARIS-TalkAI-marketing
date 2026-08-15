import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonRows } from "@/data/eco-comparison";

export function ComparisonTable() {
  return (
    <section id="compare" className="bg-surface-soft py-section">
      <Container>
        <SectionHeading align="left" eyebrow="Choosing Between Them" title="Not which is better. Which fits the moment." />

        <div className="mt-[2rem] overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-surface-soft">
                <th scope="col" className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink-muted">Aspect</th>
                <th scope="col" className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink-muted">Embedded Edition</th>
                <th scope="col" className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink-muted">TalkAI App</th>
                <th scope="col" className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink-muted">Cloud & API</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="bg-surface border-b border-line last:border-0">
                  <th scope="row" className="px-6 py-4 font-medium text-ink">{row.label}</th>
                  <td className="px-6 py-4 text-ink-soft">{row.embedded}</td>
                  <td className="px-6 py-4 text-ink-soft">{row.mobile}</td>
                  <td className="px-6 py-4 text-ink-soft">{row.capi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}