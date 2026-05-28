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

  if (!mounted) return <div className="p-2 w-10 h-10" />;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-xl glass hover:bg-accent/10 transition-colors group overflow-hidden"
      aria-label="Changer de thème"
    >
      <div className="relative z-10">
        {theme === "dark" ? (
          <Sun size={20} className="text-accent transition-transform duration-500 rotate-0" />
        ) : (
          <Moon size={20} className="text-accent transition-transform duration-500 rotate-0" />
        )}
      </div>
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}
