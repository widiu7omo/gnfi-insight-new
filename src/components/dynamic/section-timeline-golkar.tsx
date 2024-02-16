"use client";
import { motion } from "framer-motion";
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
      <div className="flex flex-row items-start justify-center w-full h-[800px]">
        <motion.div
          className="relative w-full h-[635px]"
          initial="hidden"
          whileInView="visible"
          variants={containerAnimate}
        >
          <motion.div
            key={-1}
            variants={item}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            className="absolute z-10 left-[49.76%] h-full top-[230px] w-[2px] bg-black"
          />
          {new Array(8).fill(0).map((_, i) => {
            indexImage++;
            return (
              <motion.img
                variants={item}
                key={`${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  i
                }`}
                className={`absolute ${
                  indexImage === 3 ? "z-30" : "z-20"
                } w-[50%] left-[25%] -top-[230px] `}
                src={`pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/golkar/${indexImage}.png`}
                alt={indexImage.toString()}
              />
            );
          })}
        </motion.div>
      </div>
      <div className="w-full pt-[200px] h-fit pb-3">
        <div className="flex space-x-6 mx-auto relative pt-16 bg-orange-500 w-full">
          <div className="flex space-x-6 relative max-w-7xl mx-auto">
            <img
              src="pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/golkar/will.png"
              alt="Sir William"
            />
            <span className="right-0 -top-20 z-10 absolute leading-3 font-bold text-[400px] rotate-180 text-orange-300/80">
              “
            </span>
            <div className="z-20 space-y-5">
              <p className="text-3xl text-white font-bold leading-9 ">
                "Selain trauma politik dan faktor ekonomi, kepatuhan dan
                ketakutan kepada penguasa adalah unsur terpenting di dalam
                kemenangan Golkar. Secara tidak langsung pengaruhnya masuk
                melalui pemimpin-pemimpin desa dan meresap di kalangan warga
                desa biasa"
              </p>
              <div className="divide-x-2 divide-orange-200">
                <span className="font-bold text-lg text-orange-200 mr-3">
                  R. William Liddle
                </span>
                <span className="text-base pl-3 text-orange-200">
                  Pengamat politik dari Universitas Ohio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
