import { Item } from "@/components/generator/block-sortable";
import { atom, useAtom } from "jotai";

const cards = atom<Item[]>([]);
export const useCards = () => useAtom(cards);
