"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Check, Lock, Trophy, X } from "lucide-react";
import { achievements, gameUi } from "@/data/game";
import { dismissToast, resetGame, unlock, useGame } from "@/lib/game";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const SECTIONS = ["seshat", "experience", "projects", "skills", "journey", "contact"];
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const COLORS = ["#d97706", "#f59e0b", "#16a34a", "#a1a1aa", "#18181b"];

function Confetti({ burst }: { burst: number }) {
  const reduce = useReducedMotion();
  const pieces = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        x: ((Math.sin(i * 12.9898) * 43758.5453) % 1) * 460 - 230,
        y: -(160 + ((Math.cos(i * 78.233) * 12345.6789) % 1) * 220),
        r: (i * 47) % 360,
        c: COLORS[i % COLORS.length],
        s: 5 + (i % 3) * 1.5,
      })),
    [],
  );
  if (!burst || reduce) return null;
  return (
    <div key={burst} className="pointer-events-none fixed inset-x-0 top-1/2 z-[70] flex justify-center" aria-hidden>
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-[1px]"
          style={{ width: p.s, height: p.s * 0.55, background: p.c }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: p.x, y: [0, p.y, p.y + 400], opacity: [1, 1, 0], rotate: p.r * 3 }}
          transition={{ duration: 1.7, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function GameHud() {
  const { t } = useLang();
  const g = useGame();
  const [open, setOpen] = useState(false);

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
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-16 left-4 z-[65] flex w-[min(19rem,calc(100vw-2rem))] items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2.5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.5)]"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-surface-2 text-accent">
              <Trophy size={14} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">
                {g.toast.levelUp ? `${t(gameUi.levelUp)} · ${t(g.level.name)}` : t(gameUi.unlocked)}
              </p>
              <p className="truncate text-[13px] font-medium">{t(toastA.title)}</p>
            </div>
            <span className="font-mono text-[11.5px] text-accent">+{toastA.xp} XP</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t(gameUi.open)}
        aria-expanded={open}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-lg border border-line bg-surface/90 px-2 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-3 backdrop-blur transition-colors duration-200 hover:border-line-strong hover:text-ink"
      >
        <span className="grid h-5 w-5 place-items-center rounded border border-line text-[11.5px] text-ink-2">{g.idx + 1}</span>
        <span>{g.xp} XP</span>
        <span className="hidden h-0.5 w-8 overflow-hidden rounded-full bg-line sm:block">
          <motion.span className="block h-full rounded-full bg-accent" initial={false} animate={{ width: `${pct}%` }} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={t(gameUi.title)}
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.18 }}
            className="fixed bottom-14 left-3 z-50 flex max-h-[min(32rem,calc(100dvh-6rem))] w-[min(21rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] sm:left-4"
          >
            <div className="border-b border-line p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[14.5px] font-medium">{t(gameUi.title)}</p>
                  <p className="mt-0.5 text-[11.5px] text-ink-3">{t(gameUi.hint)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t(gameUi.close)}
                  className="grid h-7 w-7 place-items-center rounded-md text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  <X size={13} />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink-3">
                <span>
                  Lv {g.idx + 1} · {t(g.level.name)}
                </span>
                <span>{g.next ? `${g.xp} / ${g.next.xp} XP` : `${g.xp} XP`}</span>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={false}
                  animate={{ width: `${pct}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
              </div>
              {!g.next && (
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 block rounded-md bg-ink px-3 py-1.5 text-center text-[12.5px] font-medium text-bg"
                >
                  {t(gameUi.max)}
                </a>
              )}
            </div>

            <ul className="flex-1 divide-y divide-line overflow-y-auto">
              {achievements.map((a) => {
                const done = g.unlocked.includes(a.id);
                const secret = a.hidden && !done;
                return (
                  <li key={a.id} className={cn("flex items-center gap-3 px-4 py-2.5", !done && "opacity-60")}>
                    <span
                      className={cn(
                        "grid h-7 w-7 shrink-0 place-items-center rounded-md",
                        done ? "bg-leaf/10 text-leaf" : "bg-surface-2 text-ink-3",
                      )}
                    >
                      {done ? <Check size={12} strokeWidth={3} /> : <Lock size={11} />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12.5px] font-medium leading-tight">{secret ? "???" : t(a.title)}</p>
                      <p className="text-[11.5px] leading-snug text-ink-3">{secret ? t(gameUi.hidden) : t(a.desc)}</p>
                    </div>
                    <span className="font-mono text-[11.5px] text-ink-3">+{a.xp}</span>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={resetGame}
              className="border-t border-line px-4 py-2.5 text-left font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-3 transition-colors hover:text-ink"
            >
              {t(gameUi.reset)}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
