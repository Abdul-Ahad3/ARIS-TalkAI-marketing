"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const interests = [
  "General Inquiry",
  "Embedded Edition Demo",
  "TalkAI App Demo",
  "Enterprise Partnership",
];

const inputStyles = "w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  // TODO: wire to a real endpoint (API route + email service) once available.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-surface-soft p-10 text-center shadow-card">
        <h3 className="text-lg font-medium text-ink">Message sent.</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">Name</label>
          <input id="name" name="name" type="text" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">Email</label>
          <input id="email" name="email" type="email" required className={inputStyles} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink">
            Company <span className="text-ink-muted">(optional)</span>
          </label>
          <input id="company" name="company" type="text" className={inputStyles} />
        </div>
        <div>
          <label htmlFor="interest" className="mb-2 block text-sm font-medium text-ink">I'm interested in</label>
          <select id="interest" name="interest" required className={inputStyles}>
            {interests.map((interest) => (
              <option key={interest} value={interest}>{interest}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">Message</label>
        <textarea id="message" name="message" required rows={5} className={inputStyles} />
      </div>

      <Button type="submit" size="lg" loading={status === "loading"} className="mt-2 justify-self-start">
        Send Message
      </Button>
    </form>
  );
}