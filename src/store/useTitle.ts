import { atom, useAtom } from 'jotai'

// In-memory only - no automatic persistence
const titleAtom = atom<string>('Judul Artikel')
export const useTitle = () => useAtom(titleAtom)

const seoTitleAtom = atom<string>('Meta Judul')
export const useSeoTitle = () => useAtom(seoTitleAtom)

const seoDescAtom = atom<string>('Meta Deskripsi')
export const useSeoDesc = () => useAtom(seoDescAtom)

const seoImageAtom = atom<string | null>(null)
export const useSeoImage = () => useAtom(seoImageAtom)

const publishedAtAtom = atom<string>(new Date().toISOString())
export const usePublishedAt = () => useAtom(publishedAtAtom)

