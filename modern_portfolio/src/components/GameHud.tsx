"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Lock, Trophy, X } from "lucide-react";
import { achievements, gameUi } from "@/data/game";
import { dismissToast, resetGame, unlock, useGame } from "@/lib/game";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const SECTIONS = ["seshat", "experience", "projects", "skills", "journey", "contact"];
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const COLORS = ["#f2a93b", "#c46f0a", "#3f7d4a", "#7cc58b", "#fbf6ee"];

function Confetti({ burst }: { burst: number }) {
  const reduce = useReducedMotion();
  const pieces = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        x: (Math.sin(i * 12.9898) * 43758.5453 % 1) * 520 - 260,
        y: -(180 + ((Math.cos(i * 78.233) * 12345.6789) % 1) * 240),
        r: (i * 47) % 360,
        c: COLORS[i % COLORS.length],
        s: 6 + (i % 4) * 2,
      })),
    [],
  );
  if (!burst || reduce) return null;
  return (
    <div key={burst} className="pointer-events-none fixed inset-x-0 top-1/2 z-[70] flex justify-center" aria-hidden>
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-[2px]"
          style={{ width: p.s, height: p.s * 0.6, background: p.c }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: p.x, y: [0, p.y, p.y + 420], opacity: [1, 1, 0], rotate: p.r * 3 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function GameHud() {
  const { t } = useLang();
  const g = useGame();
  const [open, setOpen] = useState(false);

  // Sections discovered as they cross the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && unlock(`seen-${e.target.id}`)),
      { rootMargin: "-40% 0px -40% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Konami code.
  useEffect(() => {
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      i = k === KONAMI[i] ? i + 1 : k === KONAMI[0] ? 1 : 0;
      if (i === KONAMI.length) {
        i = 0;
        unlock("konami");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!g.toast) return;
    const id = setTimeout(dismissToast, 4200);
    return () => clearTimeout(id);
  }, [g.toast]);

  const toastA = g.toast ? achievements.find((a) => a.id === g.toast!.id) : null;
  const pct = Math.round(g.progress * 100);

  return (
    <>
      <Confetti burst={g.burst} />

      <AnimatePresence>
        {toastA && g.toast && (
          <motion.div
            key={g.toast.n}
            role="status"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-24 left-1/2 z-[65] flex w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 items-center gap-3 rounded-2xl border border-accent/40 bg-surface p-3.5 shadow-2xl"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-ink">
              <Trophy size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="eyebrow text-accent">{g.toast.levelUp ? `${t(gameUi.levelUp)} · ${t(g.level.name)}` : t(gameUi.unlocked)}</p>
              <p className="truncate font-medium">{t(toastA.title)}</p>
            </div>
            <span className="font-mono text-sm text-accent">+{toastA.xp} XP</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t(gameUi.open)}
        aria-expanded={open}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-full border border-line bg-surface/90 py-2 pl-2 pr-4 shadow-lg backdrop-blur transition hover:border-accent"
      >
        <span className="relative grid h-9 w-9 place-items-center rounded-full font-mono text-xs font-semibold" style={{ background: `conic-gradient(var(--accent) ${pct * 3.6}deg, var(--line) 0)` }}>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-surface">{g.idx + 1}</span>
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-[11px] leading-tight text-dim">{t(g.level.name)}</span>
          <span className="block font-mono text-xs leading-tight">{g.xp} XP</span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={t(gameUi.title)}
            initial={{ opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="fixed bottom-20 left-3 z-50 flex max-h-[min(34rem,calc(100dvh-7rem))] w-[min(23rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl sm:left-5"
          >
            <div className="border-b border-line p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="display text-2xl">{t(gameUi.title)}</p>
                  <p className="text-xs text-dim">{t(gameUi.hint)}</p>
                </div>
                <button type="button" onClick={() => setOpen(false)} aria-label={t(gameUi.close)} className="grid h-8 w-8 place-items-center rounded-full text-dim hover:bg-bg hover:text-ink">
                  <X size={16} />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-xs">
                <span>
                  Lv {g.idx + 1} · {t(g.level.name)}
                </span>
                <span className="text-dim">{g.next ? `${g.xp} / ${g.next.xp} XP` : `${g.xp} XP`}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-sun to-accent" initial={false} animate={{ width: `${pct}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
              </div>
              {!g.next && (
                <a href="#contact" onClick={() => setOpen(false)} className="mt-3 block rounded-xl bg-accent px-3 py-2 text-center text-sm font-medium text-accent-ink">
                  {t(gameUi.max)}
                </a>
              )}
            </div>

            <ul className="flex-1 divide-y divide-line overflow-y-auto">
              {achievements.map((a) => {
                const done = g.unlocked.includes(a.id);
                const secret = a.hidden && !done;
                return (
                  <li key={a.id} className={cn("flex items-center gap-3 px-4 py-3", !done && "opacity-60")}>
                    <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", done ? "bg-leaf/15 text-leaf" : "bg-bg text-dim")}>
                      {done ? <Check size={15} strokeWidth={3} /> : <Lock size={14} />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium leading-tight">{secret ? "???" : t(a.title)}</p>
                      <p className="text-xs text-dim">{secret ? t(gameUi.hidden) : t(a.desc)}</p>
                    </div>
                    <span className="font-mono text-xs text-dim">+{a.xp}</span>
                  </li>
                );
              })}
            </ul>
            <button type="button" onClick={resetGame} className="border-t border-line px-4 py-2.5 text-left text-xs text-dim hover:text-ink">
              {t(gameUi.reset)}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
