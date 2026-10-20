import type { L } from "./site";

export interface Achievement {
  id: string;
  xp: number;
  title: L;
  desc: L;
  hidden?: boolean;
}

export const achievements: Achievement[] = [
  { id: "seen-seshat", xp: 10, title: { en: "Meet Seshat", fr: "Rencontre avec Seshat" }, desc: { en: "Discover the flagship project.", fr: "Découvrir le projet phare." } },
  { id: "seen-experience", xp: 10, title: { en: "Career path", fr: "Le parcours" }, desc: { en: "Read the experience timeline.", fr: "Lire le parcours professionnel." } },
  { id: "seen-projects", xp: 10, title: { en: "Showroom", fr: "Showroom" }, desc: { en: "Browse the selected work.", fr: "Parcourir les projets." } },
  { id: "seen-skills", xp: 10, title: { en: "Toolbox", fr: "Boîte à outils" }, desc: { en: "Check the skills.", fr: "Consulter les compétences." } },
  { id: "seen-journey", xp: 10, title: { en: "Roots", fr: "Racines" }, desc: { en: "Follow the journey from Cotonou.", fr: "Suivre le trajet depuis Cotonou." } },
  { id: "seen-contact", xp: 10, title: { en: "Last stop", fr: "Terminus" }, desc: { en: "Reach the contact section.", fr: "Atteindre la section contact." } },
  { id: "lang", xp: 10, title: { en: "Polyglot", fr: "Polyglotte" }, desc: { en: "Switch the language.", fr: "Changer de langue." } },
  { id: "theme", xp: 10, title: { en: "Night owl", fr: "Oiseau de nuit" }, desc: { en: "Switch the theme.", fr: "Changer de thème." } },
  { id: "inspect", xp: 15, title: { en: "Skill inspector", fr: "Inspecteur de compétences" }, desc: { en: "Inspect five skills to see where they were used.", fr: "Inspecter cinq compétences pour voir où elles ont servi." } },
  { id: "chat", xp: 15, title: { en: "Say hello", fr: "Dire bonjour" }, desc: { en: "Open a chat with Lys.", fr: "Ouvrir le chat avec Lys." } },
  { id: "repo", xp: 15, title: { en: "Code reader", fr: "Lecteur de code" }, desc: { en: "Open a project on GitHub.", fr: "Ouvrir un projet sur GitHub." } },
  { id: "cv", xp: 20, title: { en: "Résumé hunter", fr: "Chasseur de CV" }, desc: { en: "Download a résumé.", fr: "Télécharger un CV." } },
  { id: "message", xp: 30, title: { en: "Reached out", fr: "Premier contact" }, desc: { en: "Send a message. The best quest.", fr: "Envoyer un message. La meilleure quête." } },
  { id: "logo", xp: 20, hidden: true, title: { en: "Curious mind", fr: "Esprit curieux" }, desc: { en: "Click the logo five times.", fr: "Cliquer cinq fois sur le logo." } },
  { id: "konami", xp: 50, hidden: true, title: { en: "Old school", fr: "Old school" }, desc: { en: "Enter the Konami code.", fr: "Entrer le Konami code." } },
];

export const levels: { xp: number; name: L }[] = [
  { xp: 0, name: { en: "Visitor", fr: "Visiteur" } },
  { xp: 30, name: { en: "Curious", fr: "Curieux" } },
  { xp: 80, name: { en: "Explorer", fr: "Explorateur" } },
  { xp: 140, name: { en: "Insider", fr: "Initié" } },
  { xp: 225, name: { en: "Legend", fr: "Légende" } },
];

export const gameUi = {
  title: { en: "Quest log", fr: "Journal de quêtes" } as L,
  hint: { en: "Explore the site, collect XP.", fr: "Explorez le site, gagnez de l'XP." } as L,
  unlocked: { en: "Achievement unlocked", fr: "Succès débloqué" } as L,
  hidden: { en: "Hidden achievement", fr: "Succès caché" } as L,
  levelUp: { en: "Level up", fr: "Niveau supérieur" } as L,
  max: { en: "Max level. Now let's talk.", fr: "Niveau maximum. Parlons-nous maintenant." } as L,
  open: { en: "Open quest log", fr: "Ouvrir le journal de quêtes" } as L,
  close: { en: "Close", fr: "Fermer" } as L,
  reset: { en: "Reset progress", fr: "Réinitialiser" } as L,
};

export const totalXp = (ids: string[]) => achievements.filter((a) => ids.includes(a.id)).reduce((n, a) => n + a.xp, 0);

export function levelOf(xp: number) {
  let idx = 0;
  levels.forEach((l, i) => {
    if (xp >= l.xp) idx = i;
  });
  const next = levels[idx + 1];
  return { idx, level: levels[idx], next, progress: next ? (xp - levels[idx].xp) / (next.xp - levels[idx].xp) : 1 };
}
