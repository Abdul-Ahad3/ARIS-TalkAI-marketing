import { ArrowRightLeft, Languages, Mic } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const conversation = [
  {
    language: "English",
    message: "Let's begin today's meeting.",
    align: "left",
  },
  {
    language: "Español",
    message: "Comencemos la reunión de hoy.",
    align: "right",
  },
  {
    language: "Deutsch",
    message: "Beginnen wir mit dem heutigen Meeting.",
    align: "left",
  },
];

export function MultiLang() {
  return (
    <section className="py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Content */}

          <div>
            <SectionHeading
              eyebrow="Communication Without Barriers"
              title="Speak Every Language Instantly"
              description="Break language barriers in live conversations. The ARIS Real-Time Translation platform listens to live audio, translates it with minimal latency, and delivers natural speech so every participant can continue speaking their own language."
            />

            <div className="mt-10 space-y-5">
              <Feature
                icon={<Mic size={18} />}
                title="Natural conversations"
                text="Everyone continues speaking normally without changing their workflow."
              />

              <Feature
                icon={<ArrowRightLeft size={18} />}
                title="Live multilingual communication"
                text="Translation happens while the conversation continues, creating a seamless experience."
              />

              <Feature
                icon={<Languages size={18} />}
                title="Designed for global collaboration"
                text="From business meetings to family conversations, every participant hears the discussion in their preferred language."
              />
            </div>
          </div>

          {/* Visual */}

          <div className="relative">
            <div className="rounded-[2rem] border border-line bg-surface p-8 shadow-premium">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600">
                  Live Conversation
                </span>

                <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-600">
                  Real-Time
                </span>
              </div>

              <div className="space-y-6">
                {conversation.map((item) => (
                  <div
                    key={item.language}
                    className={`flex ${
                      item.align === "right"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div className="max-w-xs rounded-3xl border border-line bg-background px-5 py-4">
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-teal-600">
                        {item.language}
                      </p>

                      <p className="text-sm leading-relaxed text-ink">
                        {item.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-teal-500/5 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-ink">
                    Everyone understands.
                  </span>

                  <span className="font-mono text-sm text-teal-600">
                    RTT API
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal-400/15 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-ink">
          {title}
        </h3>

        <p className="mt-2 leading-relaxed text-ink-soft">
          {text}
        </p>
      </div>
    </div>
  );
}