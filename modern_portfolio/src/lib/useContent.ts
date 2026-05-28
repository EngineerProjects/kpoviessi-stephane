import { useLanguage } from "@/lib/LanguageContext";
import * as EN from "@/data/content";
import * as FR from "@/data/content.fr";

/**
 * Returns the correct content set based on the active language.
 * All components should import their data through this hook
 * instead of importing directly from content.ts.
 */
export function useContent() {
  const { language } = useLanguage();
  return language === "fr" ? FR : EN;
}
