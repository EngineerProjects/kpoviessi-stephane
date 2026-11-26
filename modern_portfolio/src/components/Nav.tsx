"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, ui, person } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { unlock } from "@/lib/game";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const clicks = useRef({ n: 0, t: 0 });

  const onLogo = () => {
    const now = Date.now();
    clicks.current = { n: now - clicks.current.t < 1200 ? clicks.current.n + 1 : 1, t: now };
    if (clicks.current.n >= 5) unlock("logo");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-[var(--nav)] backdrop-blur-xl transition-colors duration-300",
        scrolled || open ? "border-line" : "border-line/70",
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1180px] items-center gap-3 px-5 md:px-8">
        <a href="#top" onClick={onLogo} className="flex shrink-0 items-center gap-2.5" aria-label={person.name}>
          <Image src="/logos/kpo-mark-light.svg" alt="" width={24} height={24} priority className="dark:hidden" />
          <Image src="/logos/kpo-mark-dark.svg" alt="" width={24} height={24} priority className="hidden dark:block" />
          <span className="whitespace-nowrap text-[14.5px] font-medium tracking-tight">Stéphane Kpoviessi</span>
        </a>

        <nav className="mx-auto hidden items-center lg:flex" aria-label="Main">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? "true" : undefined}
              className={cn(
                "relative px-2.5 py-4 text-[14.5px] transition-colors duration-200",
                active === n.id ? "text-ink" : "text-ink-2 hover:text-ink",
              )}
            >
              {t(n.label)}
              {active === n.id && <span className="absolute inset-x-2.5 -bottom-px h-px bg-ink" aria-hidden />}
            </a>
          ))}
          <a
            href="https://seshat-ai.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 px-2.5 py-4 text-[14.5px] text-ink-2 transition-colors hover:text-ink"
          >
            {t(ui.cta.blog)}
            <ArrowUpRight size={12} aria-hidden />
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <div className="flex shrink-0 items-center gap-0.5 rounded-lg border border-line p-0.5 font-mono text-[11.5px]" role="group" aria-label="Language">
            {(["en", "fr"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  setLang(l);
                  if (l !== lang) unlock("lang");
                }}
                aria-pressed={lang === l}
                className={cn(
                  "rounded-md px-2 py-1 uppercase transition-colors",
                  lang === l ? "bg-ink text-bg" : "text-ink-3 hover:text-ink",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <ThemeToggle />

          <a
            href="#contact"
            className="hidden h-9 items-center rounded-lg bg-ink px-3.5 text-[14px] font-medium text-bg transition-colors hover:bg-ink/90 sm:inline-flex"
          >
            {t(ui.cta.contact)}
          </a>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink-2 transition-colors hover:text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t(ui.nav.close) : t(ui.nav.menu)}
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-bg lg:hidden" aria-label="Mobile">
          <ul className="mx-auto grid max-w-[1180px] gap-0.5 px-4 py-4 sm:grid-cols-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {t(n.label)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://seshat-ai.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-lg px-3 py-2.5 text-[15px] text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
              >
                {t(ui.cta.blog)} <ArrowUpRight size={14} aria-hidden />
              </a>
            </li>
          </ul>
          <div className="mx-auto max-w-[1180px] px-4 pb-4 sm:hidden">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex h-10 items-center justify-center rounded-lg bg-ink text-[14.5px] font-medium text-bg"
            >
              {t(ui.cta.contact)}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
