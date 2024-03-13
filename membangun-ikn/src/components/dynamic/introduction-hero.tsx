'use client'
import { ChevronsDownIcon } from 'lucide-react'
import { motion } from 'framer-motion'
export default function IntroductionHero() {
  return (
    <div
      className="relative -top-[150px] -mb-[150px] h-screen w-full !bg-cover"
      style={{
        background: 'url(/assets/hero-bg.webp)',
      }}
    >
      <div className="absolute h-full w-full bg-gradient-to-b from-black/0 to-black/90">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-8 xl:px-0">
          <div className="flex flex-1 items-center justify-center">
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: -20 }}
              className="max-w-[80%] text-center text-3xl font-bold !leading-snug text-white lg:text-5xl xl:text-7xl"
            >
              Membangun IKN, Mewujudkan Wacana Lama Indonesia
            </motion.h1>
          </div>
          <div className="flex items-center justify-center">
            <ChevronsDownIcon size={40} className="animate-bounce text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
