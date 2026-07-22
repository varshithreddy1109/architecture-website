import Link from "next/link";
import { navLinks } from "@/data/navLinks";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V10M11.5 12.8c0-1.5 1-2.8 2.7-2.8 1.6 0 2.3 1.1 2.3 2.8v3.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9.5 17c1-3 1.5-5 1.5-6.6a2 2 0 1 1 4 .1c0 1.2-.8 3-1.6 3.9-.6.7 0 1.9 1.2 1.9 1.9 0 3.1-2 3.1-4.6 0-2.4-1.9-4.5-4.9-4.5-3.3 0-5.3 2.2-5.3 4.9 0 1 .3 1.7.8 2.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-studio py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {/* Brand + address */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <span className="font-display text-xl font-semibold">
              Aravind &amp; Larsen<span className="text-brass">.</span>
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-stone">
              A studio practising architecture, interiors, and masterplanning
              across India — grounded in place, material, and climate.
            </p>
            <address className="not-italic text-sm leading-relaxed text-stone">
              Level 4, Fenwick House<br />
              14 Residency Road, Bengaluru 560025<br />
              India
            </address>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col gap-4">
            <span className="label-tag text-brass-light">Sitemap</span>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone transition-colors duration-300 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/admin/login"
                  className="text-sm text-stone transition-colors duration-300 hover:text-paper"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + social */}
          <div className="flex flex-col gap-4">
            <span className="label-tag text-brass-light">Contact</span>
            <ul className="flex flex-col gap-3 text-sm text-stone">
              <li>
                <a href="mailto:studio@aravindlarsen.com" className="transition-colors duration-300 hover:text-paper">
                  studio@aravindlarsen.com
                </a>
              </li>
              <li>
                <a href="tel:+918041234567" className="transition-colors duration-300 hover:text-paper">
                  +91 80 4123 4567
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-stone transition-colors duration-300 hover:border-brass hover:text-brass-light"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-stone/70">
            © {year} Aravind &amp; Larsen Architecture Studio. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-wide text-stone/70">
            Reg. No. AL-ARCH-000000 &nbsp;/&nbsp; Prototype build
          </p>
        </div>
      </div>
    </footer>
  );
}
