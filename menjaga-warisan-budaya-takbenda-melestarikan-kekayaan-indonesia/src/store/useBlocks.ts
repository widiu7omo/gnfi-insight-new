import type { BlockType } from "@/data/types";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const blocks = atomWithStorage<Record<string, BlockType[]>>("blocks", {});
export const useBlocks = () => useAtom(blocks);
