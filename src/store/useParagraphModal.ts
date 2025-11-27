import { atom, useAtom } from "jotai";

const paragraphModalAtom = atom<boolean>(false)
export const useParagraphModal = () => useAtom(paragraphModalAtom)