import { Item } from "@/components/generator/block-sortable";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const cards = atomWithStorage<Item[]>('cards', []);
export const useCards = () => useAtom(cards);
