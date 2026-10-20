"use client";

import { useSyncExternalStore } from "react";
import { achievements, levelOf, totalXp } from "@/data/game";

const KEY = "sk_game";

export interface GameState {
  unlocked: string[];
  /** Last unlocked achievement, with a nonce so the same toast can replay. */
  toast: { id: string; n: number; levelUp: boolean } | null;
  burst: number;
}

const SERVER: GameState = { unlocked: [], toast: null, burst: 0 };
let state: GameState = SERVER;
let loaded = false;
let nonce = 0;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    if (Array.isArray(raw)) state = { ...SERVER, unlocked: raw.filter((id) => achievements.some((a) => a.id === id)) };
  } catch {}
}

function commit(next: GameState) {
  state = next;
  listeners.forEach((cb) => cb());
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state.unlocked));
  } catch {}
}

export function unlock(id: string) {
  load();
  if (state.unlocked.includes(id) || !achievements.some((a) => a.id === id)) return;
  const before = levelOf(totalXp(state.unlocked)).idx;
  const unlocked = [...state.unlocked, id];
  const levelUp = levelOf(totalXp(unlocked)).idx > before;
  commit({ unlocked, toast: { id, n: ++nonce, levelUp }, burst: id === "konami" || levelUp ? state.burst + 1 : state.burst });
  persist();
}

export function resetGame() {
  load();
  commit({ unlocked: [], toast: null, burst: 0 });
  persist();
}

export function dismissToast() {
  if (state.toast) commit({ ...state, toast: null });
}

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};

export function useGame() {
  const s = useSyncExternalStore(
    subscribe,
    () => {
      load();
      return state;
    },
    () => SERVER,
  );
  const xp = totalXp(s.unlocked);
  return { ...s, xp, ...levelOf(xp) };
}
