import { atom, useAtom } from "jotai";

const titleAtom = atom("Title here");
export const useTitle = () => useAtom(titleAtom);
