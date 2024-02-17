"use client";
import { motion } from "framer-motion";
export default function SectionDirectElection() {
  let indexImage = 0;
  const containerAnimate = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
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
  return (
    <div className="flex flex-row items-start justify-center w-full h-[1300px] bg-[#1D1D1D] relative">
      <motion.div
        className="w-full h-full"
        initial="hidden"
        whileInView="visible"
        variants={containerAnimate}
      >
        {new Array(9).fill(0).map((_, i) => {
          indexImage++;
          return (
            <motion.img
              variants={item}
              key={`${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                i
              }`}
              className="absolute z-20 w-[50%] left-[25%]"
              src={`pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/jokowivprabowo/${indexImage}.png`}
              alt={indexImage.toString()}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
