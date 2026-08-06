import type { NavLink } from "@/types/navigation";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Embedded", href: "/embedded" },
  { label: "App", href: "/tai-app" },
  { label: "Cloud & API", href: "/cloud-api" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
];

export const navCta: NavLink = { label: "Request Demo", href: "/contact" };