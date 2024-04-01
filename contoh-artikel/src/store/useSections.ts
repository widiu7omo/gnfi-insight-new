import type { DraggableItem } from "@/components/generator/types";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const sectionItems = atomWithStorage<DraggableItem[]>("sections", []);

export function useSections() {
  return useAtom(sectionItems);
}

const sectionClassAtom = atomWithStorage<Record<string, string>>('sectionClassName', {});
export const useSectionClassName = () => useAtom(sectionClassAtom);

const activeSectionAtom = atomWithStorage<string>('expanded-section', '')
export const useActiveSection = () => useAtom(activeSectionAtom)