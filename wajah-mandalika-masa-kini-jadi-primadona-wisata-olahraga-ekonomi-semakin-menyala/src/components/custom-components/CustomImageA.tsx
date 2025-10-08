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

export function CustomImageA() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-[#8d182c]">
      <div className="relative w-full">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <motion.h2
            className="mb-6 font-sora text-[28px] font-bold leading-tight text-[#fff400] md:mb-12 md:text-[48px] md:leading-[3.5rem]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Transformasi Mandalika: <br />
            Setitik Surga yang Jadi Primadona Wisata Indonesia
          </motion.h2>
        </div>
        <div className="relative mx-auto flex h-fit w-full max-w-4xl flex-col-reverse items-center px-6 md:flex-row md:items-center md:px-8 lg:px-0">
          <div className="absolute inset-x-6 bottom-[-20px] top-[266px] h-fit rounded-3xl bg-white md:inset-0 md:left-8 md:mr-[40%] md:h-auto lg:left-0">
            <motion.p
              className="block p-8 font-sora text-lg font-semibold leading-[1.6] text-[#3b3a3c] md:hidden md:text-2xl md:leading-[2.5rem]"
              variants={fadeUp}
            >
              Sejak era kolonial Belanda, Pulau Lombok tempat Mandalika berada
              sudah menjadi destinasi wisata.
            </motion.p>
          </div>
          <div className="z-10 hidden h-full w-full flex-1 items-center px-6 md:ml-12 md:flex md:px-0">
            <motion.p
              className="font-sora text-lg font-semibold leading-[1.6] text-[#3b3a3c] md:text-2xl md:leading-[2.5rem]"
              variants={fadeUp}
            >
              Sejak era kolonial Belanda, Pulau Lombok tempat Mandalika berada
              sudah menjadi destinasi wisata.
            </motion.p>
          </div>
          <motion.div
            className="mb-[200px] flex w-full flex-1 justify-center md:mb-0 md:justify-end"
            variants={fadeUp}
          >
            <motion.img
              src={`${baseUrl}/assets/1.1.jpg`}
              alt="Landing Plane"
              className="h-auto w-full max-w-full rounded-3xl object-cover md:rounded-none md:rounded-r-3xl"
              variants={subtleScale}
            />
          </motion.div>
        </div>
        <div className="relative mx-auto flex h-fit w-full max-w-4xl flex-col-reverse items-center px-6 md:flex-row md:items-center md:px-8 lg:px-0">
          <motion.div
            className="relative flex flex-col items-center gap-6 rounded-3xl p-6 sm:p-8 md:flex-row md:items-center md:gap-12 md:p-10"
            variants={staggered}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={`${baseUrl}/assets/1.2.png`}
              alt="Serat Centhini"
              className="relative z-30 w-[200px]"
              variants={subtleScale}
            />
            <motion.p
              className="flex-1 text-center font-sora text-base leading-relaxed text-white sm:text-lg md:text-left md:text-2xl"
              variants={fadeUp}
            >
              Geliat pariwisatanya semakin bergairah sejak pemerintah
              meluncurkan Kawasan Ekonomi Khusus (KEK) pariwisata Mandalika di
              Lombok Tengah.
            </motion.p>
          </motion.div>
        </div>
        <div className="relative mx-auto flex max-w-full items-start justify-center font-sora">
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black from-[20%]"></div>
          <img
            src={`${baseUrl}/assets/1.3.png`}
            alt="Sun"
            className="absolute -z-0 mt-[-5rem] scale-[.4] xs:mt-[-4rem] xs:scale-[.4] sm:mt-[0] sm:scale-[.7] md:mt-[1rem] md:scale-[1] lg:mr-[4rem] lg:mt-[8%] lg:scale-125 xl:mt-[10%]"
          />
          <img
            src={`${baseUrl}/assets/1.4.png`}
            alt="Scenary"
            className="relative z-10 w-full object-cover"
          />
          <div className="absolute inset-0 z-20 mx-auto flex max-w-4xl flex-col justify-end">
            <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
              <div className="flex-1 border-l-4 px-8 py-2">
                <p className="max-w-[50%] text-sm font-medium text-[#fff400] md:max-w-full md:text-2xl">
                  Dikembangkan <br /> & dikelola oleh Indonesian Tourism
                  Development Corporation (ITDC)
                </p>
              </div>
              <div className="flex-1 space-y-4 border-l-4 px-8 py-2 text-sm font-medium text-[#fff400] md:text-2xl">
                <p>
                  Diluncurkan <br />
                  12 Desember 2015
                </p>
                <p>
                  Memiliki luas <br />
                  1.035 hektar
                </p>
              </div>
            </div>
            <div className="pt-12">
              <img src={`${baseUrl}/assets/1.5.png`} alt="Ocean" />
            </div>
            <div className="flex space-x-7 pb-8 pt-12 text-white">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-[#fbd691]">
                  Investasi sebesar
                </p>
                <p className="text-5xl font-bold text-[#fbd691]">
                  Rp 28,63 triliun
                </p>
                <p className="text-xl">
                  pada 2030 diproyeksikan akan ditarik oleh KEK Mandalika
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-[#fbd691]">Sebanyak</p>
                <p className="text-5xl font-bold text-[#fbd691]">587 ribu</p>
                <p className="text-xl">
                  tenaga kerja diproyeksikan akan diserap hingga 2025
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-start justify-center bg-black p-16 pb-10">
          <img
            src={`${baseUrl}/assets/footer.png`}
            className="z-50 mx-auto hidden w-full max-w-xl sm:block"
          />
        </div>
      </div>
    </div>
  );
}
