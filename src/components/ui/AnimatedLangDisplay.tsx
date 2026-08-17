"use client";

import { useEffect, useState } from "react";

interface LanguagePair {
  left: string;
  right: string;
}

const LANGUAGE_PAIRS: LanguagePair[] = [
  { left: "EN", right: "FR" },
  { left: "FR", right: "EN" },
  { left: "EN", right: "ES" },
  { left: "ES", right: "EN" },
  { left: "EN", right: "DE" },
  { left: "DE", right: "EN" },
  { left: "EN", right: "AR" },
  { left: "AR", right: "EN" },
  { left: "EN", right: "UR" },
  { left: "UR", right: "EN" },
  { left: "EN", right: "HI" },
  { left: "HI", right: "EN" },
  { left: "EN", right: "JA" },
  { left: "JA", right: "EN" },
  { left: "EN", right: "ZH" },
  { left: "ZH", right: "EN" },
];

function AnimatedSlot({
  values,
  index,
  direction,
}: {
  values: string[];
  index: number;
  direction: "toRight" | "toLeft";
}) {
  const restClass = direction === "toRight" ? "translate-x-3" : "-translate-x-3";

  return (
    <span className="relative inline-block h-8 w-[2.2ch] overflow-hidden align-middle">
      {values.map((value, i) => (
        <span
          key={value + i}
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
            i === index ? "translate-x-0 opacity-100" : `${restClass} opacity-0`
          }`}
        >
          {value}
        </span>
      ))}
    </span>
  );
}

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
    }, 900);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  const leftValues = LANGUAGE_PAIRS.map((pair) => pair.left);
  const rightValues = LANGUAGE_PAIRS.map((pair) => pair.right);
  const current = LANGUAGE_PAIRS[index];

  return (
    <div className="mt-4 flex items-center gap-3 font-mono text-2xl text-white">
      <AnimatedSlot values={leftValues} index={index} direction="toRight" />
      <span aria-hidden="true">⇄</span>
      <AnimatedSlot values={rightValues} index={index} direction="toLeft" />
      <span className="sr-only" aria-live="polite">
        {current.left} to {current.right}
      </span>
    </div>
  );
}