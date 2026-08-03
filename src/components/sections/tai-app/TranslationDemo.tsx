import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { demoList } from "@/data/app-demo-list";

export function TranslationDemo() {
  return (
    <section id="translation-demo" className="bg-ink py-section">
      <Container>
        <SectionHeading 
          className="text-white"
          align="left" 
          eyebrow="How a call works" 
          title="Cloud AI, tuned for a live conversation." 
          description="When you are connected, the app runs the same four steps in the cloud for maximum quality and reach, then plays the result back in a natural voice, all within one to two and a half seconds."
        />

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {demoList.map(({ eyebrow, title, description }) => (
          <div
            key={title}
            className="rounded-lg bg-ink-soft/45 p-7 shadow-card "
          >    
            <p className="text-sm font-semibold text-teal-500">{eyebrow}</p>
            <h3 className="mt-2 text-white text-lg font-medium text-ink">{title}</h3>
            <p className="mt-2 text-white text-sm leading-relaxed text-ink-soft">{description}</p>
          </div>
          ))}
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <span className="rounded-full bg-teal-400/20 px-4 py-2 font-mono text-sm text-white">
            WebRTC calls · Cloudflare TURN
          </span>
          <span className="rounded-full bg-teal-400/20 px-4 py-2 font-mono text-sm text-white">
            React Native · iOS & Android
          </span>
          <span className="rounded-full bg-teal-400/20 px-4 py-2 font-mono text-sm text-white">
            Encrypted in transit · Supabase
          </span>
        </div>

        <p className="text-ink-soft">
          The same engine that runs offline on Embedded Edition. On the app, it runs in the cloud for broader language support.
        </p>

      </Container>
    </section>
  );
}