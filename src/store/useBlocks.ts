import type { BlockType } from "@/types";
import { atom, useAtom } from "jotai";

// In-memory only - no automatic persistence
const blocksAtom = atom<Record<string, BlockType[]>>({});

export const useBlocks = () => useAtom(blocksAtom);
