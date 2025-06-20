'use client'
import { useNavigation } from '@/store/useNavigation'
import { motion } from 'framer-motion'
import { ListMinusIcon, MoveLeftIcon } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
export default function Toc() {
  const [navigation, setNavigation] = useNavigation()
  const toggleNavHandler = () => {
    setNavigation((prev) => ({ ...prev, show: !prev.show }))
  }
  const [currentHash, setCurrentHash] = useState('')
  const isShow = navigation.show
  useEffect(() => {
    const onHashChanged = () => {
      if (window.innerWidth <= 768) {
        toggleNavHandler()
      }
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', onHashChanged)

    return () => {
      window.removeEventListener('hashchange', onHashChanged)
    }
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  }, [toggleNavHandler])
  const isSelected = useCallback(
    (selectedHash: string) => {
      return currentHash === selectedHash
    },
    [currentHash]
  )
  return (
    <>
      <motion.div
        data-show={isShow}
        layout
        className="bg-white w-full -left-[100vw] lg:w-[400px] lg:-left-[400px] data-[show=true]:left-0 top-0 h-screen fixed z-[60] px-7 py-10 space-y-8"
      >
        <motion.div className="text-3xl text-gray-800 font-semibold flex flex-row-reverse justify-between items-center">
          <span>Table of Content</span>
          <button type="button" onClick={toggleNavHandler}>
            {isShow ? <MoveLeftIcon /> : <ListMinusIcon />}
          </button>
        </motion.div>
        <ul className="leading-8 text-gray-600 text-lg space-y-4">
          <li
            data-active={isSelected('#section-1')}
            className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
          >
            <a href="#section-1">
              Gowas-Gowes, Yuk! Budaya Bersepeda Orang Indonesia
            </a>
          </li>
          <li
            data-active={isSelected('#section-2')}
            className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
          >
            <a href="#section-2">
              Masuk Hindia Belanda
            </a>
          </li>
          <li
            data-active={isSelected('#section-3')}
            className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
          >
            <a href="#section-3">
              Simbol Kemapanan
            </a>
          </li>
          <li
            data-active={isSelected('#section-4')}
            className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
          >
            <a href="#section-4">
              Tokoh yang Gemar Bersepeda
            </a>
          </li>
          <li
            data-active={isSelected('#section-5')}
            className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
          >
            <a href="#section-5">
              Geliat Industri Sepeda Indonesia
            </a>
          </li>
          <li
            data-active={isSelected('#section-6')}
            className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
          >
            <a href="#section-6">
              Setor Muka Sepeda Indonesia di Ajang Dunia
            </a>
          </li>
          <li
            data-active={isSelected('#section-7')}
            className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
          >
            <a href="#section-7">
              Boom Sepeda saat Pandemi
            </a>
          </li>
          <li
            data-active={isSelected('#section-8')}
            className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
          >
            <a href="#section-8">
              Demi Hobi, Kompetisi, Profesi, Lingkungan, dan Kepariwisataan
            </a>
          </li>
          <li
            data-active={isSelected('#section-9')}
            className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
          >
            <a href="#section-9">
              Perhatian Pemerintah terhadap Pesepeda, Sudah Cukup?
            </a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        layout
        onClick={toggleNavHandler}
        data-show={isShow}
        className="top-0 bottom-0 left-0 right-0 bg-black/60 transition-all z-[55] absolute data-[show=true]:visible invisible"
      />
    </>
  )
}
