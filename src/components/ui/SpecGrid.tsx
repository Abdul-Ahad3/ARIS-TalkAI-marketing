import { SpecItem } from "@/types/embedded-hardware";

interface SpecGridProps {
  specs: SpecItem[];
}

export function SpecGrid({ specs }: SpecGridProps) {
  return (
    <div className="rounded-lg bg-white px-6 py-12 md:px-12">
      <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/10">
        {specs.map((spec) => (
          <div key={spec.label} className="px-4 text-left">
            <p className="font-mono text-2xl font-medium text-ink md:text-3xl">
              {spec.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-ink">
              {spec.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}