'use client'
import { motion } from 'framer-motion'
import CaptionFromWill from './caption-from-will'
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
export default function SectionTimelineGolkar() {
  let indexImage = 2

  return (
    <>
      <div className="flex flex-row items-start justify-center w-full h-[500px] xs:h-[700px] sm:h-[900px] md:h-[1000px] lg:h-[1200px] xl:h-[1200px]">
        <motion.div
          viewport={{ once: true }}
          className="relative w-full h-full max-w-7xl mx-auto flex justify-center"
          initial="hidden"
          whileInView="visible"
          variants={containerAnimate}
        >
          <motion.div
            viewport={{ once: true }}
            key={-1}
            variants={item}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            className="absolute z-10 left-[49.63%] h-[calc(100%-100px)] xs:h-[calc(100%-100px)] md:h-[calc(100%-200px)] xl:h-[calc(100%-200px)] top-[20px] xs:top-[100px] lg:top-[200px] w-[2px] bg-black"
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
                className={`absolute ${
                  indexImage === 3 ? 'z-30' : 'z-20'
                } -top-[100px] xl:-top-[300px] max-w-full xl:max-w-7xl xl:mx-auto`}
                src={`pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/golkar/${indexImage}.png`}
                alt={indexImage.toString()}
              />
            )
          })}
        </motion.div>
      </div>
    </>
  )
}
