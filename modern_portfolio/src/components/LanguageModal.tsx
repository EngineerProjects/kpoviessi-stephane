"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageModal() {
  const { hasChosen, setLanguage } = useLanguage();

  return (
    <AnimatePresence>
      {!hasChosen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-bg-main/85 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.05 }}
            className="relative w-full max-w-sm border border-border-main bg-bg-card/98 backdrop-blur-xl p-8 shadow-2xl"
          >
            {/* Corner brackets */}
            <div className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-accent" />
            <div className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-accent" />
            <div className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-accent" />
            <div className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-accent" />

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border border-accent/30 bg-accent-soft flex items-center justify-center text-accent shrink-0">
                <Globe size={16} />
              </div>
              <div>
                <p className="text-[9px] font-mono font-bold text-accent uppercase tracking-[0.22em] leading-tight">
                  LANGUAGE SELECTION
                </p>
                <p className="text-[8px] font-mono text-text-dim/70 tracking-wider mt-0.5">
                  CHOIX DE LANGUE // INIT
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-border-main/60 mb-6" />

            <p className="text-sm font-medium text-text-dim leading-relaxed mb-6">
              Choose your language to continue.
              <br />
              <span className="opacity-60 text-xs">Choisissez votre langue pour continuer.</span>
            </p>

            {/* Language buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setLanguage("en")}
                className="group relative flex flex-col items-center gap-2.5 py-6 px-4 border border-border-main bg-bg-main/40 hover:border-accent/60 hover:bg-accent-soft transition-all duration-250 overflow-hidden"
              >
                <span className="relative z-10 text-3xl font-display font-extrabold text-text-main group-hover:text-accent transition-colors tracking-tighter leading-none">
                  EN
                </span>
                <span className="relative z-10 text-[9px] font-mono text-text-dim uppercase tracking-widest">
                  English
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              <button
                onClick={() => setLanguage("fr")}
                className="group relative flex flex-col items-center gap-2.5 py-6 px-4 border border-border-main bg-bg-main/40 hover:border-accent/60 hover:bg-accent-soft transition-all duration-250 overflow-hidden"
              >
                <span className="relative z-10 text-3xl font-display font-extrabold text-text-main group-hover:text-accent transition-colors tracking-tighter leading-none">
                  FR
                </span>
                <span className="relative z-10 text-[9px] font-mono text-text-dim uppercase tracking-widest">
                  Français
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>

            <p className="text-[8px] font-mono text-text-dim/40 text-center mt-5 tracking-wider uppercase">
              Your preference will be saved // Votre choix sera mémorisé
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
