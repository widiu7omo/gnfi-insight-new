import { DraggableItem } from "@/types";
import { atom, useAtom } from "jotai";

// In-memory only - no automatic persistence
const sectionItems = atom<DraggableItem[]>([]);

export function useSections() {
  return useAtom(sectionItems);
}

const sectionClassAtom = atom<Record<string, string>>({});
export const useSectionClassName = () => useAtom(sectionClassAtom);

const activeSectionAtom = atom<string>('');
export const useActiveSection = () => useAtom(activeSectionAtom);

// Loading state for sections and blocks initialization
const loadingStateAtom = atom<boolean>(true);
export const useLoadingState = () => useAtom(loadingStateAtom);