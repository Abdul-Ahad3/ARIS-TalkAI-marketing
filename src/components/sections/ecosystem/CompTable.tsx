import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonRows } from "@/data/eco-comparison";

export function ComparisonTable() {
  return (
    <section className="bg-surface py-section">
      <Container size="narrow">
        <SectionHeading align="center" eyebrow="Choosing Between Them" title="Not which is better. Which fits the moment." />

        <div className="mt-16 overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink-muted" />
                <th scope="col" className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink-muted">Embedded Edition</th>
                <th scope="col" className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink-muted">TalkAI App</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <th scope="row" className="px-6 py-4 font-medium text-ink">{row.label}</th>
                  <td className="px-6 py-4 text-ink-soft">{row.embedded}</td>
                  <td className="px-6 py-4 text-ink-soft">{row.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}