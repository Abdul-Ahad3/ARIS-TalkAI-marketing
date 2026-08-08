import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

export function DeviceProto() {
  return (
    <section className="relative overflow-hidden bg-ink py-section text-white">
        <Container className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="mx-auto max-w-2xl text-left py-50">
                <SectionHeading 
                    eyebrow="proven, not promised"
                    title="Already running on real hardware."
                    description="This is our working engineering prototype. The full offline pipeline already translates English to French on‑device, and every run saves the audio, text and measured latency as evidence. The next step is bringing it into a compact, dedicated device."
                />
                <div className="mt-6 flex flex-wrap gap-4">
                    <Badge variant="dark">ON-DEVICE STACK</Badge>
                    <Badge variant="dark">EN ⇄ FR validated</Badge>
                    <Badge variant="dark">NO INTERNET</Badge>
                </div>
            </div>
            <div className="mt-3 flex flex-col items-left text-left border-rounded border-ink/20 bg-ink/10 text-sm">
                <Image src="/images/proto/prototype.jpg" alt="Device Prototype" width={600} height={400} className="border-rounded-2xl"/>
                <p className="text-left text-teal-100">ENGINEERING PROTOTYPE · EDGE MODULE + DUAL MIC ARRAY + AMPLIFIED SPEAKER</p>
            </div>
        </Container>
    </section>
  );
}