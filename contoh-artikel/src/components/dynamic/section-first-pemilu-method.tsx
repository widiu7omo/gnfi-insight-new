'use client'
import { Signika } from 'next/font/google'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'
const signikaFont = Signika({ weight: '400', subsets: ['latin'] })
export default function FirstElectionMethod() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })
  useEffect(() => {
    if (isInView) {
      animate(
        'p',
        { opacity: 1, y: 0 },
        { delay: stagger(0.1, { startDelay: 0.15 }), duration: 0.3 }
      )
    } else {
      animate('p', { opacity: 0, y: 20 })
    }
  }, [isInView, animate])
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-x-8 xl:items-start">
      <motion.img
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        src="pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/Wikimedia_Commons.jpg"
        className="border-8 border-white shadow-2xl"
        alt="Sistem pemilihan pada pemilu 1995"
      />
      <motion.div
        ref={scope}
        className=" !text-neutral-800 prose text-left z-20 py-4 text-lg"
        style={{ ...signikaFont.style }}
      >
        <p>
          Sistem pemilihan yang digunakan pada Pemilu 1955 adalah sistem
          pemilihan proporsional tertutup atau dikenal sebagai sistem berimbang.
          Dalam sistem ini, pemilih memiliki opsi untuk memberikan suara kepada
          calon individual dan juga dapat memberikan suara kepada parpol yang
          ikut serta dalam pemilihan.
        </p>
        <p>
          Suara yang diberikan kepada calon akan dianggap sebagai dukungan
          langsung untuk calon tersebut, sedangkan suara yang diberikan kepada
          parpol akan didistribusikan kepada calon sesuai dengan nomor urutnya.
        </p>
        <p>
          Seseorang juga dapat menjadi kandidat independen tanpa melibatkan diri
          dalam parpol tertentu. Penentuan kandidat terpilih dilakukan
          berdasarkan suara yang diterima, sesuai dengan Pembagian Nomor Pemilih
          Daftar (BPPD).
        </p>
      </motion.div>
    </div>
  )
}
