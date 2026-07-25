import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, socialLinks, partnershipNote } from "@/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-soft">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            Communicate anywhere. Online or offline. One ecosystem, every conversation.
          </p>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-muted">
              {column.heading}
            </h3>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center gap-4 py-6 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} ARIS TalkAI. All rights reserved. {partnershipNote}.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
              >
                
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}