"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  term: string;
  summary: string;
  detail: string;
}

interface AccordionProps {
  items: AccordionItemData[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.term}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span>
                <span className="font-mono text-xs uppercase tracking-wider text-teal-600">{item.term}</span>
                <span className="mt-1 block text-base font-medium text-ink">{item.summary}</span>
              </span>
              <Plus size={18} className={cn("shrink-0 text-ink-muted transition-transform duration-300 ease-premium", isOpen && "rotate-45")} />
            </button>
            <div className={cn("grid transition-all duration-300 ease-premium", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}