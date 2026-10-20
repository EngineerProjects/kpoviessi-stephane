"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownToLine, ChevronDown, FileText } from "lucide-react";
import { contact, ui, type Lang } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { unlock } from "@/lib/game";
import { cn } from "@/lib/utils";

export default function CvMenu() {
  const { lang: siteLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [pick, setPick] = useState<Lang | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const lang = pick ?? siteLang;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-6 py-3 text-sm font-medium transition hover:border-accent"
      >
        <ArrowDownToLine size={16} />
        {t(ui.cta.cv)}
        <ChevronDown size={15} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute left-0 top-full z-40 mt-2 w-[min(22rem,calc(100vw-2.5rem))] origin-top-left overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3 border-b border-line p-4">
              <div>
                <p className="font-medium">{t(contact.resumes.title)}</p>
                <p className="mt-0.5 text-xs leading-snug text-dim">{t(contact.resumes.hint)}</p>
              </div>
              <div className="flex shrink-0 rounded-full border border-line p-0.5 font-mono text-[11px]" role="group" aria-label="Language">
                {(["en", "fr"] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    aria-pressed={lang === l}
                    onClick={() => setPick(l)}
                    className={cn("rounded-full px-2.5 py-1 uppercase transition", lang === l ? "bg-ink text-bg" : "text-dim hover:text-ink")}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <ul className="p-2">
              {contact.resumes.items.map((r) => (
                <li key={r.en}>
                  <a
                    role="menuitem"
                    href={r[lang]}
                    download
                    onClick={() => {
                      unlock("cv");
                      setOpen(false);
                    }}
                    className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-accent-soft"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-bg text-dim transition group-hover:bg-accent group-hover:text-accent-ink">
                      <FileText size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium leading-tight">{t(r.name)}</span>
                      <span className="block text-xs text-dim">{t(r.tag)}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-dim group-hover:text-accent">
                      PDF · {lang.toUpperCase()} <ArrowDownToLine size={13} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
