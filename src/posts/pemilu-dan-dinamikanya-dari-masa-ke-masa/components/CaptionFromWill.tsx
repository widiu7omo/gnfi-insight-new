import { motion } from 'motion/react'
const containerAnimate = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
export function CaptionFromWill() {
  return (
    <div className="w-full h-fit pb-3 pt-32">
      <div className="pt-16 pb-8 bg-orange-500">
        <motion.div
          viewport={{ once: true }}
          className="flex space-x-4 xl:space-x-6 flex-row relative max-w-full xl:max-w-7xl mx-auto "
          variants={containerAnimate}
          initial="hidden"
          whileInView={'visible'}
        >
          <motion.img
            viewport={{ once: true }}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            src={`/assets/pemilu-dan-dinamikanya-dari-masa-ke-masa/golkar/will.png`}
            alt="Sir William"
            className="min-w-[250px] w-[250px] xl:w-full"
          />
          <span className="right-0 -top-20 z-10 absolute leading-3 font-bold text-[400px] rotate-180 text-orange-300/80">
            “
          </span>
          <motion.div
            viewport={{ once: true }}
            className="space-y-5 px-4 xl:px-0 z-20"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl lg:text-2xl xl:text-3xl text-white font-bold leading-8 xl:leading-9 ">
              "Selain trauma politik dan faktor ekonomi, kepatuhan dan ketakutan
              kepada penguasa adalah unsur terpenting di dalam kemenangan
              Golkar. Secara tidak langsung pengaruhnya masuk melalui
              pemimpin-pemimpin desa dan meresap di kalangan warga desa biasa"
            </p>
            <div className="flex flex-col xl:flex-row divide-y xl:divide-y-0 divide-x-0 xl:divide-x-2 divide-orange-200">
              <span className="font-bold text-lg text-orange-200 mr-0 xl:mr-3">
                R. William Liddle
              </span>
              <span className="text-base pl-0 xl:pl-3 text-orange-200">
                Pengamat politik dari Universitas Ohio
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
