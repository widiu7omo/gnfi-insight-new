import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type FileExtended = {
  preview: string;
  name: string;
};
const filesAtom = atomWithStorage<Record<string, FileExtended[]>>('files', {});
export const useFiles = () => useAtom(filesAtom);
