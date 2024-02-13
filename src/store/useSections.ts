import { DraggableItem } from "@/components/generator/types"
import { atom, useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"


const sectionItems = atomWithStorage<DraggableItem[]>('sections', [])

export function useSections() {
    return useAtom(sectionItems)
} 