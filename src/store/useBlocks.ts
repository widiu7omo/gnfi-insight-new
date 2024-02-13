import { BlockType } from "@/data/types"
import { atom, useAtom } from "jotai"

const blocks = atom<Record<string, BlockType[]>>({})
export const useBlocks = () => useAtom(blocks);
