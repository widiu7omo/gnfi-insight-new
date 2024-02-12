import { DraggableItem } from "@/components/generator/types"
import { atom, useAtom } from "jotai"


const draggableItems = atom<DraggableItem[]>([])

export function useDraggableItem() {
    return useAtom(draggableItems)
} 