import { atom, useAtom } from "jotai";

export type FileExtended = File & {
  preview: string;
};
const filesAtom = atom<FileExtended[]>([]);
export const useFiles = () => useAtom(filesAtom);
