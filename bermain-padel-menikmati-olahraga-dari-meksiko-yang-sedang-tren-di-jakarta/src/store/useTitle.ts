import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const titleAtom = atomWithStorage('title', 'Judul Artikel')
export const useTitle = () => useAtom(titleAtom)

const seoTitleAtom = atomWithStorage('seo-title', 'Meta Judul')
export const useSeoTitle = () => useAtom(seoTitleAtom)

const seoDescAtom = atomWithStorage('seo-desc', 'Meta Deskripsi')
export const useSeoDesc = () => useAtom(seoDescAtom)

const seoImageAtom = atomWithStorage<string | null>('seo-image', null)
export const useSeoImage = () => useAtom(seoImageAtom)
