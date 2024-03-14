'use client'
import { motion } from 'framer-motion'
export default function SectionPresidentDirect() {
  return (
    <div className="w-full mx-auto bg-[#F6F0E2] flex items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center space-y-4 max-w-full lg:max-w-7xl">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-bold text-2xl md:text:3xl lg:text-4xl xl:text-5xl text-center my-6 max-w-[80%] leading-snug mx-auto"
        >
          Pemilu 2004, Saat Presiden Dipilih Langsung
        </motion.h2>
        <div className="px-4 xl:px-0">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full xl:w-[1000px] border-8 shadow rounded-xl border-[#fffaf0]"
            src="pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/Wikimedia_Commons_(3).jpg"
            alt="Surat Suara"
          />
        </div>
      </div>
    </div>
  )
}
