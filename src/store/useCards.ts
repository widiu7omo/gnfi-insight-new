import type { Item } from "@/components/generator/blocks";
import { atom, useAtom } from "jotai";

// In-memory only - no automatic persistence
const cardsAtom = atom<Item[]>([]);

export const useCards = () => useAtom(cardsAtom);
