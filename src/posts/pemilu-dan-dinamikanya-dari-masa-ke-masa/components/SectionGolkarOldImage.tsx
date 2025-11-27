import { motion } from 'motion/react'
export function SectionGolkarOldImage() {
  return (
    <div className="py-8 w-full max-w-7xl h-fit mx-auto">
      <div className=" z-10 flex items-center justify-center w-full ">
        <motion.img
          initial={{
            rotate: 0,
            opacity: 0,
            y: -10,
            scale: 0.8,
          }}
          viewport={{ once: true }}
          whileInView={{
            rotate: 1,
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{ delay: 0.3 }}
          className="px-16 w-full xl:h-[600px] rotate-1"
          src={`/assets/pemilu-dan-dinamikanya-dari-masa-ke-masa/arsip.jogjaprov.go.id.jpg`}
          alt="Jogja Arsip"
        />
      </div>
    </div>
  )
}
