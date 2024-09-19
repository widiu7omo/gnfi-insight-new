import { atom, useAtom } from "jotai";

const activeSlide = atom<number>(0);
export const useActiveSlide = () => useAtom(activeSlide);
