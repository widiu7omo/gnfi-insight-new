"use client";
import { motion } from "framer-motion";
export default function SectionHistoryFirstPemilu() {
  let indexImage = 2;
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
  return (
    <div className="flex flex-row items-start justify-center w-full h-[450px] xs:h-[700px] sm:h-[800px] md:h-[1200px] lg:h-[1100px] xl:h-[1200px]">
      <motion.div
        viewport={{ once: true }}
        className="relative w-full h-[390px] xs:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[785px]"
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
          className="absolute z-10 left-[49.50%] lg:left-[49.76%] h-full top-[0px] lg:top-[200px] w-[2px] bg-[#e36414]"
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
              className="absolute z-20 w-full xl:w-[50%] left-0 xl:left-[25%] -top-[100px] md:-top-[200px] "
              src={`pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/history/${indexImage}.png`}
              alt={indexImage.toString()}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
