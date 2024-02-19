"use client";
import { motion } from "framer-motion";
import CaptionFromWill from "./caption-from-will";
const containerAnimate = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function SectionTimelineGolkar() {
  let indexImage = 2;

  return (
    <>
      <div className="flex flex-row items-start justify-center w-full h-[600px] xl:h-[800px]">
        <motion.div
          viewport={{ once: true }}
          className="relative w-full h-[635px]"
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
            className="absolute z-10 left-[49.50%] lg:left-[49.76%] h-full top-[8%] lg:top-[230px] w-[2px] bg-black"
          />
          {new Array(8).fill(0).map((_, i) => {
            indexImage++;
            return (
              <motion.img
                viewport={{ once: true }}
                variants={item}
                key={`${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  i
                }`}
                className={`absolute ${
                  indexImage === 3 ? "z-30" : "z-20"
                } xl:w-[50%] left-0 xl:left-[25%] -top-[230px] `}
                src={`pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/golkar/${indexImage}.png`}
                alt={indexImage.toString()}
              />
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
