import { motion } from 'motion/react'
export function SectionJokowiVPrabowo() {
  let indexImage = 0
  const containerAnimate = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
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
  return (
    <div className="flex flex-row items-start justify-center w-full h-[430px] min-[375px]:h-[540px] min-[425px]:h-[580px] min-[768px]:h-[1070px] min-[1024px]:h-[1400px] min-[1440px]:h-[1030px] min-[1920px]:h-[1300px] min-[2560px]:h-[1800px] bg-[#1D1D1D] relative">
      <motion.div
        viewport={{ once: true }}
        className="w-full h-full"
        initial="hidden"
        whileInView="visible"
        variants={containerAnimate}
      >
        {new Array(9).fill(0).map((_, i) => {
          indexImage++
          return (
            <motion.img
              viewport={{ once: true }}
              variants={item}
              key={`${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                i
                }`}
              className="absolute z-20 xl:w-[50%] left-0 xl:left-[25%]"
              src={`/assets/pemilu-dan-dinamikanya-dari-masa-ke-masa/jokowivprabowo/${indexImage}.png`}
              alt={indexImage.toString()}
            />
          )
        })}
      </motion.div>
    </div>
  )
}
