"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const subtleScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggered = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const slideFromBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function CustomImageA() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#8d182c] to-[90%] to-black pt-12">
      <div className="relative w-full">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <motion.h2
            className="mb-6 font-sora text-[24px] font-bold leading-tight text-[#fff400] sm:text-[28px] md:mb-12 md:text-[40px] md:leading-[3.5rem] lg:text-[48px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Transformasi Mandalika: <br />
            Setitik Surga yang Jadi Primadona Wisata Indonesia
          </motion.h2>
        </div>
        <motion.div
          className="relative mx-auto flex h-fit w-full max-w-4xl flex-col-reverse items-center px-4 sm:px-6 md:flex-row md:items-center md:px-8 lg:px-0"
          variants={staggered}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="absolute z-10 inset-x-4 bottom-[-20px] top-[240px] h-fit rounded-3xl bg-white sm:inset-x-6 sm:top-[266px] md:inset-0 md:left-8 md:mr-[40%] md:h-auto lg:left-0"
            variants={slideFromLeft}
          >
            <motion.p
              className="block relative z-40 p-6 font-sora text-base font-semibold leading-[1.6] text-[#3b3a3c] sm:p-8 sm:text-lg md:hidden md:text-2xl md:leading-[2.5rem]"
              variants={fadeUp}
            >
              Sejak era kolonial Belanda, Pulau Lombok tempat Mandalika berada
              sudah menjadi destinasi wisata.
            </motion.p>
          </motion.div>
          <motion.div
            className="hidden h-full w-full flex-1 items-center px-4 sm:px-6 md:ml-12 md:flex md:px-0"
            variants={slideFromLeft}
          >
            <motion.p
              className="font-sora relative z-40 text-base font-semibold leading-[1.6] text-[#3b3a3c] sm:text-lg md:text-xl md:leading-[2.5rem] lg:text-2xl"
              variants={fadeUp}
            >
              Sejak era kolonial Belanda, Pulau Lombok tempat Mandalika berada
              sudah menjadi destinasi wisata.
            </motion.p>
          </motion.div>
          <motion.div
            className="flex w-full flex-1 justify-center md:mb-0 md:justify-end"
            initial={{ x: -60, opacity: 0, z: -1 }}
            whileInView={{ x: 0, opacity: 1, z: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.img
              src={`${baseUrl}/assets/1.1.jpg`}
              alt="Land of Lombok"
              className="h-auto w-full max-w-full rounded-2xl object-cover sm:rounded-3xl md:rounded-none md:rounded-r-3xl"
              variants={subtleScale}
            />
          </motion.div>
        </motion.div>
        <div className="relative mx-auto flex h-fit w-full max-w-4xl flex-col-reverse items-center px-4 sm:px-6 md:flex-row md:items-center md:px-8 lg:px-0 mt-[8rem] md:mt-0">
          <motion.div
            className="relative mb-[5rem] mt-[5rem] xs:mt-0 flex flex-col items-center gap-4 rounded-3xl p-4 sm:gap-6 sm:p-6 md:flex-row md:items-center md:gap-8 md:p-10 lg:gap-12"
            variants={staggered}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={`${baseUrl}/assets/1.2.png`}
              alt="Logo Lombok Tengah"
              className="relative z-30 w-[130px] sm:w-[180px] md:w-[200px]"
              variants={subtleScale}
            />
            <motion.p
              className="flex-1 text-center font-sora text-sm leading-relaxed text-white sm:text-base md:text-left md:text-lg lg:text-xl xl:text-2xl"
              variants={fadeUp}
            >
              Geliat pariwisatanya semakin bergairah sejak pemerintah
              meluncurkan Kawasan Ekonomi Khusus (KEK) pariwisata Mandalika di
              Lombok Tengah.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className="relative mx-auto flex flex-col lg:flex-row max-w-full items-center lg:items-start lg:justify-center font-sora"
          variants={staggered}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 z-20 bg-gradient-to-t from-black from-[50%] md:from-[20%]"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.7 } } }}
          ></motion.div>
          <motion.div className="absolute -z-0 mt-[-6rem] xs:mt-[-5rem] lg:mt-[8%] xl:mt-[10%] sm:mt-[-2rem] md:mt-[0] "
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            viewport={{ once: true, amount: 0.4 }}
          >
          <img
            src={`${baseUrl}/assets/1.3.png`}
            alt="Sun"
              className="scale-[.3] xs:scale-[.35] sm:scale-[.5] md:scale-[.7] lg:mr-[4rem] lg:scale-[1] xl:scale-125"
            />
          </motion.div>
          <motion.img
            src={`${baseUrl}/assets/1.4.png`}
            alt="Scenery"
            className="relative z-10 w-full object-cover"
            variants={slideFromBottom}
          />
          <motion.div
            className="lg:absolute -mt-[15rem] lg:mt-0 md:inset-0 z-20 mx-auto flex max-w-4xl flex-col justify-end px-4 sm:px-6"
            variants={staggered}
          >
            <motion.div
              className="grid grid-cols-1 gap-x-4 gap-y-4 sm:gap-x-8 md:grid-cols-2"
              variants={fadeUp}
            >
              <motion.div
                className="flex-1 border-l-4 px-4 py-2 sm:px-6 md:px-8"
                variants={slideFromLeft}
              >
                <p className="max-w-[80%] text-xs font-medium text-[#fff400] sm:max-w-[70%] sm:text-sm md:max-w-full md:text-lg lg:text-xl xl:text-2xl">
                  Dikembangkan <br /> & dikelola oleh Indonesian Tourism
                  Development Corporation (ITDC)
                </p>
              </motion.div>
              <motion.div
                className="flex-1 space-y-2 border-l-4 px-4 py-2 text-xs font-medium text-[#fff400] sm:space-y-3 sm:px-6 sm:text-sm md:space-y-4 md:px-8 md:text-lg lg:text-xl xl:text-2xl"
                variants={slideFromRight}
              >
                <p>
                  Diluncurkan <br />
                  12 Desember 2015
                </p>
                <p>
                  Memiliki luas <br />
                  1.035 hektar
                </p>
              </motion.div>
            </motion.div>
            <motion.div className="pt-8 sm:pt-12" variants={fadeUp}>
              <motion.img
                src={`${baseUrl}/assets/1.5.png`}
                alt="Ocean"
                className="w-full"
                variants={subtleScale}
              />
            </motion.div>
            <motion.div
              className="flex flex-col space-y-6 pb-8 pt-8 text-white sm:flex-row sm:space-x-4 sm:space-y-0 sm:pt-12 md:space-x-7"
              variants={fadeUp}
            >
              <motion.div className="flex-1 space-y-2" variants={slideFromLeft}>
                <p className="text-lg font-bold text-[#fbd691] sm:text-xl md:text-2xl lg:text-3xl">
                  Investasi sebesar
                </p>
                <p className="text-2xl font-bold text-[#fbd691] sm:text-3xl md:text-4xl lg:text-5xl">
                  Rp 28,63 triliun
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                  pada 2030 diproyeksikan akan ditarik oleh KEK Mandalika
                </p>
              </motion.div>
              <motion.div className="flex-1 space-y-2" variants={slideFromRight}>
                <p className="text-lg font-bold text-[#fbd691] sm:text-xl md:text-2xl lg:text-3xl">
                  Sebanyak
                </p>
                <p className="text-2xl font-bold text-[#fbd691] sm:text-3xl md:text-4xl lg:text-5xl">
                  587 ribu
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                  tenaga kerja diproyeksikan akan diserap hingga 2025
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative bottom-12 flex items-start justify-center p-8 pb-6 sm:p-12 sm:pb-8 md:p-16 md:pb-10"
          variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.7 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={`${baseUrl}/assets/footer.png`}
            className="z-40 mx-auto w-full max-w-xl"
            variants={subtleScale}
          />
        </motion.div>
      </div>
    </div>
  );
}
