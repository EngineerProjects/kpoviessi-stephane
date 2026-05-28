"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-2 w-8 h-8 border border-border-main/50 rounded" />;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-1.5 border border-border-main/50 rounded bg-bg-main hover:border-accent/40 hover:bg-accent-soft transition-all duration-200 group overflow-hidden cursor-pointer"
      aria-label="Toggle Theme Mode"
    >
      <div className="relative z-10 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun size={14} className="text-accent transition-transform duration-500 hover:rotate-45" />
        ) : (
          <Moon size={14} className="text-accent transition-transform duration-500 hover:-rotate-12" />
        )}
      </div>
    </motion.button>
  );
}
