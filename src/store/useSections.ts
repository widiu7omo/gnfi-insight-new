import { DraggableItem } from "@/components/generator/types"
import { atom, useAtom } from "jotai"


const sectionItems = atom<DraggableItem[]>([])

export function useSections() {
    return useAtom(sectionItems)
} 