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
    <div className="relative flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#8d182c] to-[90%] to-[#e5024b] pt-12">
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
            className="absolute inset-0 z-20 bg-gradient-to-t from-[#e5024b] from-[50%] md:from-[20%] md:to-[80%]"
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
              className="scale-[.3] xs:scale-[.35] sm:scale-[.5] md:scale-[.7] lg:mr-[4rem] lg:scale-[1] xl:scale-125 opacity-30 sm:opacity-100"
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
              className="grid grid-cols-1 gap-x-4 gap-y-4 sm:gap-x-8"
              variants={fadeUp}
            >
              <motion.div
                className="flex-1 px-4 py-2 sm:px-6 md:px-8"
                variants={slideFromLeft}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#e5024b] rounded-full p-2 lg:p-3 text-white">
                    <svg className="size-8 lg:size-12" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M9,15c-2.67,0-8,1.34-8,4v2h16v-2C17,16.34,11.67,15,9,15z M3,19c0.22-0.72,3.31-2,6-2c2.7,0,5.8,1.29,6,2H3z"></path><path d="M4.74,9H5c0,2.21,1.79,4,4,4s4-1.79,4-4h0.26c0.27,0,0.49-0.22,0.49-0.49V8.49c0-0.27-0.22-0.49-0.49-0.49H13 c0-1.48-0.81-2.75-2-3.45V5.5C11,5.78,10.78,6,10.5,6S10,5.78,10,5.5V4.14C9.68,4.06,9.35,4,9,4S8.32,4.06,8,4.14V5.5 C8,5.78,7.78,6,7.5,6S7,5.78,7,5.5V4.55C5.81,5.25,5,6.52,5,8H4.74C4.47,8,4.25,8.22,4.25,8.49v0.03C4.25,8.78,4.47,9,4.74,9z M11,9c0,1.1-0.9,2-2,2s-2-0.9-2-2H11z"></path><path d="M21.98,6.23l0.93-0.83l-0.75-1.3l-1.19,0.39c-0.14-0.11-0.3-0.2-0.47-0.27L20.25,3h-1.5L18.5,4.22 c-0.17,0.07-0.33,0.16-0.48,0.27L16.84,4.1l-0.75,1.3l0.93,0.83C17,6.4,17,6.58,17.02,6.75L16.09,7.6l0.75,1.3l1.2-0.38 c0.13,0.1,0.28,0.18,0.43,0.25L18.75,10h1.5l0.27-1.22c0.16-0.07,0.3-0.15,0.44-0.25l1.19,0.38l0.75-1.3l-0.93-0.85 C22,6.57,21.99,6.4,21.98,6.23z M19.5,7.75c-0.69,0-1.25-0.56-1.25-1.25s0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25 S20.19,7.75,19.5,7.75z"></path><path d="M19.4,10.79l-0.85,0.28c-0.1-0.08-0.21-0.14-0.33-0.19L18.04,10h-1.07l-0.18,0.87c-0.12,0.05-0.24,0.12-0.34,0.19 l-0.84-0.28l-0.54,0.93l0.66,0.59c-0.01,0.13-0.01,0.25,0,0.37l-0.66,0.61l0.54,0.93l0.86-0.27c0.1,0.07,0.2,0.13,0.31,0.18 L16.96,15h1.07l0.19-0.87c0.11-0.05,0.22-0.11,0.32-0.18l0.85,0.27l0.54-0.93l-0.66-0.61c0.01-0.13,0.01-0.25,0-0.37l0.66-0.59 L19.4,10.79z M17.5,13.39c-0.49,0-0.89-0.4-0.89-0.89c0-0.49,0.4-0.89,0.89-0.89s0.89,0.4,0.89,0.89 C18.39,12.99,17.99,13.39,17.5,13.39z"></path></g></g></svg>
                  </div>
                  <p className="max-w-[80%] text-xs font-medium text-white sm:max-w-[70%] sm:text-sm md:max-w-full md:text-lg lg:text-xl xl:text-2xl">
                  Dikembangkan <br /> & dikelola oleh Indonesian Tourism
                  Development Corporation (ITDC)
                </p>
                </div>
              </motion.div>
              <motion.div
                className="flex-1 flex flex-row items-center px-4 py-2 text-xs font-medium text-white sm:px-6 sm:text-sm md:px-8 md:text-lg lg:text-xl xl:text-2xl"
                variants={slideFromRight}
              >
                <div className="flex flex-1 items-center space-x-4">
                  <div className="bg-[#e5024b] rounded-full p-2 lg:p-3 text-white">
                    <svg className="size-8 lg:size-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                    </svg>
                  </div>
                <p>
                  Diluncurkan <br />
                  12 Desember 2015
                  </p>
                </div>
                <div className="flex flex-1 items-center space-x-4">
                  <div className="bg-[#e5024b] rounded-full p-2 lg:p-3  text-white">
                    <svg className="size-8 lg:size-12" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,0,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V17A1,1,0,0,0,21,16Zm.92-13.38a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z">
                      </path>
                    </svg>
                  </div>
                <p>
                  Memiliki luas <br />
                  1.035 hektar
                </p>
                </div>
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
                <p className="text-lg font-bold text-[#fceb11] sm:text-xl md:text-2xl lg:text-3xl">
                  Investasi sebesar
                </p>
                <p className="text-2xl font-bold text-[#fceb11] sm:text-3xl md:text-4xl lg:text-5xl">
                  Rp 28,63 triliun
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                  pada 2030 diproyeksikan akan ditarik oleh KEK Mandalika
                </p>
              </motion.div>
              <motion.div className="flex-1 space-y-2" variants={slideFromRight}>
                <p className="text-lg font-bold text-[#fceb11] sm:text-xl md:text-2xl lg:text-3xl">
                  Sebanyak
                </p>
                <p className="text-2xl font-bold text-[#fceb11] sm:text-3xl md:text-4xl lg:text-5xl">
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
            className="z-40 mx-auto w-full max-w-xl hidden sm:block"
            variants={subtleScale}
          />
        </motion.div>
      </div>
    </div>
  );
}
