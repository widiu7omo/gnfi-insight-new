import type { Item } from "@/components/generator/blocks";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const cards = atomWithStorage<Item[]>("cards", []);
export const useCards = () => useAtom(cards);
