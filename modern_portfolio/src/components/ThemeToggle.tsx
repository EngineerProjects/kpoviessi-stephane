"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ui } from "@/data/site";
import { useLang } from "@/lib/i18n";

export default function ThemeToggle() {
  const { t } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={t(ui.theme.toggle)}
      title={t(ui.theme.toggle)}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
    >
      <span className="relative block h-4 w-4" aria-hidden>
        <Sun
          size={16}
          className="absolute inset-0 transition-all duration-300 ease-out dark:rotate-90 dark:scale-50 dark:opacity-0"
        />
        <Moon
          size={16}
          className="absolute inset-0 rotate-90 scale-50 opacity-0 transition-all duration-300 ease-out dark:rotate-0 dark:scale-100 dark:opacity-100"
        />
      </span>
    </button>
  );
}
