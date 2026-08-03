"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { navLinks, navCta } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface-soft/[.82] backdrop-blur-md backdrop-saturate-[1.6]">
      <Container>
        <nav aria-label="Primary" className="flex h-[66px] items-center justify-between gap-6">
          <Logo />

          <ul className="hidden items-center gap-[1.55rem] min-[901px]:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative py-[0.3rem] font-mono text-[0.82rem] tracking-[0.02em] transition-colors after:absolute after:inset-x-0 after:-bottom-[3px] after:h-0.5 after:rounded-full after:content-['']",
                      isActive
                        ? "text-teal-600 after:bg-teal-500"
                        : "text-ink-soft after:bg-transparent hover:text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button href={navCta.href} className="hidden min-[901px]:inline-flex">
              {navCta.label}
            </Button>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink min-[901px]:hidden"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </Container>

      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
}