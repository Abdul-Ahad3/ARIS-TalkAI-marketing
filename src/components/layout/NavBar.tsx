"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks, navCta } from "@/data/navigation";
import { NAV_SCROLL_THRESHOLD } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > NAV_SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors bg-white duration-300 ease-premium",
        isScrolled || isMenuOpen
          ? "glass border-b border-line"
          : "border-b border-transparent"
      )}
    >
      <Container className="grid h-20 grid-cols-3 items-center">
        <Link href="/" aria-label="ARIS TalkAI home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden justify-center md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Button href={navCta.href} size="sm" className="hidden md:inline-flex">
            {navCta.label}
          </Button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span
              className={cn(
                "absolute h-0.5 w-5 bg-ink transition-all duration-300 ease-premium",
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-5 bg-ink transition-opacity duration-300 ease-premium",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-5 bg-ink transition-all duration-300 ease-premium",
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
}