export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: "Products",
    links: [
      { label: "Embedded Edition", href: "/embedded" },
      { label: "TalkAI App", href: "/tai-app" },
      { label: "Cloud & API", href: "/cloud-api" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Technology", href: "/technology" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Twitter", href: "#", },
  { label: "LinkedIn", href: "#",  },
  { label: "Instagram", href: "#", },
];

export const partnershipNote = "In partnership with MHTechFusion";