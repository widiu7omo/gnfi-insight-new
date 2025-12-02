import { motion } from 'motion/react'
export function SectionFirstPemilu() {
  return (
    <div className="w-full">
      <div
        className="bg-cover! flex items-center justify-center py-28"
        style={{
          background:
            `url("/assets/pemilu-dan-dinamikanya-dari-masa-ke-masa/first-pemilu-bg.png")`,
        }}
      >
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -20 }}
          className="font-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-snug h-fit px-6 lg:px-0"
        >
          Pemilu 1955, <br />
          <span>Pemilu “Resmi” Pertama Indonesia</span>
        </motion.h2>
      </div>
    </div>
  )
}
