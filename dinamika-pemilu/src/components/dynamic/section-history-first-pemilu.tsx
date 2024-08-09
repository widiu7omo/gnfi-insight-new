'use client'
import { baseUrl } from '@/constants/meta'
import { motion } from 'framer-motion'
export default function SectionHistoryFirstPemilu() {
  let indexImage = 2
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
  return (
    <div className="flex flex-row items-start justify-center w-full h-[500px] xs:h-[700px] sm:h-[850px] md:h-[1000px] lg:h-[1400px] xl:h-[1600px]">
      <motion.div
        viewport={{ once: true }}
        className="relative w-full h-full max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={containerAnimate}
      >
        <motion.div
          key={-1}
          variants={item}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          className="absolute z-10 left-[49.50%] lg:left-[49.76%] h-[calc(100%-80px)] xs:h-[calc(100%-20px)] md:h-[calc(100%-200px)] top-[20px] xs:top-[100px] lg:top-[200px] w-[2px] bg-[#e36414]"
        />
        {new Array(8).fill(0).map((_, i) => {
          indexImage++
          return (
            <motion.img
              viewport={{ once: true }}
              variants={item}
              key={`${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                i
                }`}
              className="absolute z-20 w-full -top-[100px] xl:-top-[200px] max-w-full xl:max-w-7xl xl:mx-auto"
              src={`${baseUrl}/assets/history/${indexImage}.png`}
              alt={indexImage.toString()}
            />
          )
        })}
      </motion.div>
    </div>
  )
}
