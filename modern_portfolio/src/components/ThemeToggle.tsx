"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { unlock } from "@/lib/game";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => {
        setTheme(dark ? "light" : "dark");
        unlock("theme");
      }}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-dim transition hover:border-accent hover:text-ink"
    >
      {mounted ? dark ? <Sun size={16} /> : <Moon size={16} /> : <span className="h-4 w-4" />}
    </button>
  );
}
