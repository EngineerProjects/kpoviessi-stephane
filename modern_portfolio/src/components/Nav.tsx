"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  const link = (id: string) => cn("text-sm transition-colors", active === id ? "text-ink" : "text-dim hover:text-ink");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" onClick={onLogo} className="flex items-center gap-2.5 font-medium tracking-tight" aria-label={person.name}>
          <Image src="/logos/kpo-mark-light.svg" alt="" width={34} height={34} className="dark:hidden" />
          <Image src="/logos/kpo-mark-dark.svg" alt="" width={34} height={34} className="hidden dark:block" />
          <span className="hidden sm:inline">Stéphane Kpoviessi</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={link(n.id)}>
              {t(n.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-line p-0.5 font-mono text-[11px]" role="group" aria-label="Language">
            {(["en", "fr"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  setLang(l);
                  if (l !== lang) unlock("lang");
                }}
                aria-pressed={lang === l}
                className={cn("rounded-full px-2.5 py-1 uppercase transition", lang === l ? "bg-ink text-bg" : "text-dim hover:text-ink")}
              >
                {l}
              </button>
            ))}
          </div>
          <ThemeToggle />
          <a href="#contact" className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition hover:opacity-90 lg:inline-block">
            {t(ui.cta.contact)}
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-dim md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t(ui.nav.menu)}
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-5 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-base text-dim hover:bg-surface hover:text-ink">
                  {t(n.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
