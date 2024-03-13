import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const titleAtom = atomWithStorage("title", "Title here");
export const useTitle = () => useAtom(titleAtom);
