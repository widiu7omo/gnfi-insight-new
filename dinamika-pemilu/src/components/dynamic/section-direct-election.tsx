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
    <div className="flex flex-row items-start justify-center w-full h-[530px] min-[375px]:h-[610px] min-[390px]:h-[630px] min-[425px]:h-[680px] min-[768px]:h-[1200px] min-[820px]:h-[1280px] min-[1024px]:h-[1580px] min-[1440px]:h-[1130px] min-[1920px]:h-[1480px] min-[2560px]:h-[1970px] bg-orange-950 relative">
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
      </motion.div>
    </div>
  );
}
