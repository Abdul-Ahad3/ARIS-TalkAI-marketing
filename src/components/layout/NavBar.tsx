import Link from "next/link";

import { navLinks } from "@/data/navigation";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
     
        <div className="flex h-16 items-center justify-between">
          {/* Logo placeholder — replace with next/image once brand assets are ready */}
          <Link
            href="/"
            aria-label="ARIS Talk AI — Home"
            className="text-xl font-bold tracking-tight"
          >
            ARIS Talk AI 
          </Link>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        
        </div>
      
    </header>
  );
}