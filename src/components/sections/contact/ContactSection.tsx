import { Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <ContactForm />

          <div>
            <div  className="space-y-4 rounded-2xl bg-surface p-6 m-5 shadow-card hover:shadow-premium">
              <p className="mt-1 text-sm font-medium text-eyerow text-teal-500">Email Us</p>
              <p className="mt-1 text-sm text-teal-400">mhtechfusion@gmail.com</p>
              <p>For demos, deployments and partnerships.</p>
            </div>
            <div  className="space-y-4 rounded-2xl bg-surface p-6 m-5 shadow-card hover:shadow-premium">
              <p className="mt-1 text-sm font-medium text-eyerow text-teal-500">Response Time</p>
              <p className="mt-1 text-sm text-ink-soft">We typically reply within 1–2 business days.</p>
            </div>
            <div  className="space-y-1 rounded-2xl grid sm:grid-cols-2 lg:grid-cols-1 bg-surface p-6 m-5 shadow-card hover:shadow-premium">
              <p className="mt-1 text-sm font-medium text-eyerow text-teal-500">Explore First</p>
              <a href="/embedded" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition-colors hover:text-teal-400">Embedded Edition <ArrowRight size={16}/> </a>
              <a href="/tai-app" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition-colors hover:text-teal-400">TalkAI App <ArrowRight size={16}/> </a>
              <a href="/technology" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition-colors hover:text-teal-400">The Technology <ArrowRight size={16}/> </a>
            </div>
            <div  className="space-y-4 rounded-2xl bg-ink p-6 m-5 shadow-card hover:shadow-premium">
              <p className="mt-1 text-sm font-medium text-eyerow text-teal-500">Offline demo</p>
              <p className="mt-1 text-sm text-ink-muted">Embedded Edition can be demonstrated with no internet connection in the room.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}