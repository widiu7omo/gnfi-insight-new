"use client";
import { motion } from "motion/react";

export function CustomImageMobilListrik() {
  const simpleFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-cover">
      <motion.div
        className="relative w-full bg-[#0A2456]"
        initial="hidden"
        whileInView="visible"
        variants={simpleFadeIn}
        viewport={{ once: true }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-start px-4">
          <motion.p
            className="pt-8 text-left text-lg font-bold leading-5 text-[#EBBF42] sm:text-4xl sm:leading-12"
            variants={simpleFadeIn}
          >
            Mobil Listrik Menjadi Senjata, <br />
            China Bertarung di Tengah <br />
            Dominasi Jepang
          </motion.p>
          <motion.p
            className="pb-8 z-0 mt-4 text-xs font-medium text-white sm:mt-14 sm:text-2xl"
            variants={simpleFadeIn}
          >
            Meski mobil
            <br /> China semakin
            <br /> marak di Indonesia, <br />
            merek Jepang <br />
            masih jadi <br />
            penguasa pasar
          </motion.p>
          <motion.div
            className="absolute left-0 -bottom-4 sm:-bottom-14 z-10 flex w-full justify-center"
            variants={simpleFadeIn}
          >
            <motion.img
              src={`/assets/wara-wiri-mobil-china-di-indonesia/3.5.png`}
              alt="Car Omoda"
              className="h-auto w-full sm:w-auto"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative w-full bg-[#6F0B0D] py-8"
        initial="hidden"
        whileInView="visible"
        variants={simpleFadeIn}
        viewport={{ once: true }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-start px-4">
          <motion.p className="text-xs font-medium text-white sm:text-2xl" variants={simpleFadeIn}>
            Berdasarkan data Gaikindo,
            <br /> terbukti bahwa angka penjualan
            <br /> mobil Jepang masih unggul jauh
            <br /> dibandingkan mobil China
          </motion.p>
          <div className="relative -mt-6 sm:-mt-16">
            <motion.img
              src={`/assets/wara-wiri-mobil-china-di-indonesia/3.7.png`}
              alt="Arrow"
              className="absolute left-0 top-0 z-40"
              variants={simpleFadeIn}
            />
            <motion.img
              src={`/assets/wara-wiri-mobil-china-di-indonesia/3.8.png`}
              alt="Arrow"
              className="relative left-0 top-0 z-40"
              variants={simpleFadeIn}
            />
            <motion.img
              src={`/assets/wara-wiri-mobil-china-di-indonesia/3.10.png`}
              alt="Circle"
              className="absolute left-0 top-0 z-30"
              variants={simpleFadeIn}
            />
            <motion.img
              src={`/assets/wara-wiri-mobil-china-di-indonesia/3.9.png`}
              alt="Car Air EV"
              className="absolute left-0 top-0 z-40"
              variants={simpleFadeIn}
            />
            <motion.img
              src={`/assets/wara-wiri-mobil-china-di-indonesia/3.11.png`}
              alt="Number"
              className="absolute left-0 top-0 z-20"
              variants={simpleFadeIn}
            />
            <motion.div
              className="absolute left-0 bottom-3 sm:bottom-10 z-10 w-full text-white italic"
              variants={simpleFadeIn}
            >
              <motion.p
                className="relative text-[8px] sm:text-xl"
                variants={simpleFadeIn}
              >
                *Data penjualan Januari-September 2024
              </motion.p>
              <motion.p
                className="relative text-[8px] sm:text-xl"
                variants={simpleFadeIn}
              >
                *Angka dalam unit
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}