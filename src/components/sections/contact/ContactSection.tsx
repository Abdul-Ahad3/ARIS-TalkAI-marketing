import { Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="bg-surface-soft py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <ContactForm />

          <div className="space-y-8 rounded-2xl bg-surface p-8 shadow-card">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                <Mail size={18} className="text-teal-600" />
              </div>
              <p className="mt-4 text-sm font-medium text-ink">Email Us</p>
              <p className="mt-1 text-sm text-ink-soft">hello@aristalkai.com</p>
            </div>
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                <Clock size={18} className="text-teal-600" />
              </div>
              <p className="mt-4 text-sm font-medium text-ink">Response Time</p>
              <p className="mt-1 text-sm text-ink-soft">We typically reply within 1–2 business days.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}