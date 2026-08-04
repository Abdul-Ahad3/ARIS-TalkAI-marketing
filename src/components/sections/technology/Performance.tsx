import { SplitFeatureSection } from "@/components/shared/SplitFeature"
import { techPerformance } from "@/data/tech-performance"

export function Performance (){
    return(
        <SplitFeatureSection 
        className="bg-ink text-white"
        eyebrow="Performance"
        title="Kept as close to instant as the physics allow."
        description="Latency is the gap between speaking and being understood. We hold it low on both paths, and we measure it on every run."
        position="bottom"
        visual= {
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {techPerformance.map(({ title, description }) => (
                <div
                    key={title}
                    className="rounded-lg bg-ink-soft/45 p-7 shadow-card "
                >
                    <h3 className="mt-2 text-3xl font-medium text-white">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white">{description}</p>
                </div>
                ))}
            </div>
        }
        />
    )
}