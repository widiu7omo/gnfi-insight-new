import { Item } from "@/components/generator/block-sortable";
import { atom, useAtom } from "jotai";

const cards = atom<Item[]>([
  {
    id: 1,
    text: "Write a cool JS library",
  },
  {
    id: 2,
    text: "Make it generic enough",
  },
  {
    id: 3,
    text: "Write README",
  },
]);
export const useCards = () => useAtom(cards);
