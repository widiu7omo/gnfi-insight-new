import { atom, useAtom } from 'jotai'

export type FileExtended = {
  preview: string
  name: string
}

// In-memory only - no automatic persistence
const filesAtom = atom<Record<string, { [key: string]: FileExtended }>>({})
export const useFiles = () => useAtom(filesAtom)
