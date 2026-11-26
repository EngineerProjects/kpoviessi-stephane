"use client";

import Image from "next/image";
import { footer, person } from "@/data/site";
import { useLang } from "@/lib/i18n";

const links = [
  { label: "GitHub", href: person.github },
  { label: "LinkedIn", href: person.linkedin },
  { label: "Email", href: `mailto:${person.email}` },
  { label: "Seshat", href: person.seshat },
  { label: "Blog", href: "https://seshat-ai.com/blog" },
];

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-8 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/logos/kpo-mark-light.svg" alt="" width={18} height={18} className="dark:hidden" />
            <Image src="/logos/kpo-mark-dark.svg" alt="" width={18} height={18} className="hidden dark:block" />
            <p className="text-[12.5px] text-ink-2">
              © {new Date().getFullYear()} {person.name}
            </p>
          </div>
          <nav aria-label="Social" className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-3 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-6 border-t border-line pt-4 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-3">
          {t(footer.built)}
        </p>
      </div>
    </footer>
  );
}
