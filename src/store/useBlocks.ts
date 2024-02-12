import { BlockType } from "@/data/types"
import { atom, useAtom } from "jotai"

const blocks = atom<BlockType[]>([])

export const useBlocks = useAtom(blocks)