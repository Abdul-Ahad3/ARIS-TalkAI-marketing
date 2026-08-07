"use client";

import { useEffect, useState } from "react";

const LANGUAGE_PAIRS = [
  "EN ⇄ FR",
  "FR ⇄ EN",
  "EN ⇄ ES",
  "ES ⇄ EN",
  "EN ⇄ DE",
  "DE ⇄ EN",
  "EN ⇄ AR",
  "AR ⇄ EN",
  "EN ⇄ UR",
  "UR ⇄ EN",
  "EN ⇄ HI",
  "HI ⇄ EN",
  "EN ⇄ JA",
  "JA ⇄ EN",
  "EN ⇄ ZH",
  "ZH ⇄ EN",
];

export function AnimatedLangDisplay() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setReducedMotion(media.matches);

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % LANGUAGE_PAIRS.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div
      className="relative mt-4 h-8 overflow-hidden font-mono text-2xl text-white"
      aria-live="polite"
    >
      {LANGUAGE_PAIRS.map((pair, i) => (
        <span
          key={pair}
          className={`absolute inset-0 flex items-center transition-all duration-700 ease-out ${
            i === index
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0"
          }`}
        >
          {pair}
        </span>
      ))}
    </div>
  );
}