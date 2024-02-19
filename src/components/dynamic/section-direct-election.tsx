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
    <div className="flex flex-row items-start justify-center w-full h-[630px] xl:h-[1470px] bg-orange-950 relative">
      <motion.div
        viewport={{ once: true }}
        className="w-full h-full"
        initial="hidden"
        whileInView="visible"
        variants={containerAnimate}
      >
        {new Array(10).fill(0).map((_, i) => {
          indexImage++;
          return (
            <motion.img
              viewport={{ once: true }}
              variants={item}
              key={`${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                i
              }`}
              className="absolute z-20 xl:w-[50%] left-0 xl:left-[25%]"
              src={`pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/election2004/${indexImage}.png`}
              alt={indexImage.toString()}
            />
          );
        })}
        <div className="h-[50px] z-20 bg-orange-950 w-full absolute bottom-0" />
      </motion.div>
    </div>
  );
}
