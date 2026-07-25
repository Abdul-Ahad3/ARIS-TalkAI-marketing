"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, navCta } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      id="mobile-menu"
      className={cn(
        "grid border-t border-line bg-surface transition-all duration-300 ease-premium md:hidden",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 border-t-0"
      )}
    >
      <nav aria-label="Mobile" className="overflow-hidden">
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-2 py-3 text-base font-medium",
                  isActive
                    ? "bg-surface-muted text-ink"
                    : "text-ink-soft hover:bg-surface-muted hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href={navCta.href} className="mt-2 w-full">
            {navCta.label}
          </Button>
        </Container>
      </nav>
    </div>
  );
}