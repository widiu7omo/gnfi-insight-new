"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 60,
      damping: 10,
      delay: i * 0.2,
    },
  }),
};

const boxVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export function CustomImageB() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-[#E5034B] pb-0 pt-16 md:pt-24">
      <div className="absolute inset-0 z-10 h-[20rem] bg-gradient-to-b from-[#E5034B]"></div>
      <div className="relative z-20 mx-auto max-w-4xl px-4 md:px-8 lg:px-0">
        <motion.h2
          className="font-sora text-[32px] md:text-[43px] lg:text-[3.1rem] text-center font-bold text-[#FAD592]  md:leading-[3.5rem]  lg:leading-[4rem]"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 60,
            damping: 10,
            delay: 0.1,
          }}
          viewport={{ once: true }}
        >
          Pertamina Mandalika <br />
          International Circuit
        </motion.h2>
        <motion.p
          className="mt-4 font-sora text-center text-white md:mt-8 text-xl md:text-3xl md:leading-[2.5rem] lg:leading-[2.5rem]"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Arena balap berkelas dunia yang mengubah wajah Mandalika secara
          drastis
        </motion.p>
        <div className="relative mt-4 w-full items-center justify-center md:mt-20  z-40">
          <div className="w-full mx-auto max-w-4xl flex flex-row space-x-8 items-start justify-center">
            <div className="flex flex-1 transform flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                className="rounded-full bg-[#640c5f] p-3">
                <img
                  src={`${baseUrl}/assets/flag.svg`}
                  alt="Flag"
                  className="mx-auto block size-20"
                />
              </motion.div>
              <motion.p
                className="mt-2 text-center font-sora text-xs font-semibold text-[#FAD592] md:text-2xl"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                  delay: 0.5,
                }}
                viewport={{ once: true }}
              >
                12 November 2021
              </motion.p>
            </div>
            <div className="flex flex-1 transform flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                className="rounded-full bg-[#640c5f] p-3">
                <img
                  src={`${baseUrl}/assets/location.svg`}
                  alt="Map"

                  className="mx-auto block size-20"
                />
              </motion.div>
              <motion.p
                className="mt-2 text-center font-sora text-xs font-semibold text-[#FAD592] md:text-2xl"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                  delay: 0.5,
                }}
                viewport={{ once: true }}
              >
                Desa Kuta, Lombok Tengah, Nusa Tenggara Barat
              </motion.p>
            </div>
          </div>
          <motion.img
            src={`${baseUrl}/assets/2.1.png`}
            alt="Sircuit"
            className="mx-auto max-w-[80%]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.img
            src={`${baseUrl}/assets/0.1.png`}
            alt="Motor"
            className="absolute bottom-2 left-[20%] z-10 w-[50%] md:bottom-4 md:w-[40%] lg:w-[50%]"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.img
            src={`${baseUrl}/assets/2.3.png`}
            alt="Bayangan"
            className="mx-auto mt-4 w-[85%] md:mt-6 md:w-[75%] lg:w-[80%]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
        <div className=" relative z-40">
          <div className="mb-20 mt-10 gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
              className="rounded-xl bg-[#640D5E] py-4 text-center md:flex-1 p-2 flex flex-col items-center justify-center"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
              <div className="flex-1 flex items-center justify-center">
                <img src={`${baseUrl}/assets/2.0.1.png`} alt="Mandalika Track" className="object-center" />
              </div>
              <p className="text-center font-sora text-2xl font-bold text-[#FAD592] md:text-3xl mt-2">
                4,31 km
              </p>
              <p className="font-sora text-base font-semibold text-white md:text-base">
                Panjang lintasan
              </p>
          </motion.div>

          <motion.div
              className="rounded-xl bg-[#640D5E] py-4 text-center md:flex-1 p-2 flex flex-col items-center justify-center"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: 0.2,
              }}
          >
              <div className="flex-1 flex items-center justify-center">
                <img src={`${baseUrl}/assets/2.0.2.png`} alt="Straight Mandalika Track" className="object-center" />
              </div>
              <p className="text-center font-sora text-2xl font-bold text-[#FAD592] md:text-3xl mt-2">
                723 m
              </p>
              <p className="font-sora text-base font-semibold text-white md:text-base">
                Panjang trek lurus
              </p>
          </motion.div>

          <motion.div
              className="rounded-xl bg-[#640D5E] py-4 text-center md:flex-1 p-2 flex flex-col items-center justify-center"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: 0.4,
              }}
          >
              <div className="flex-1 flex items-center justify-center">
                <img src={`${baseUrl}/assets/2.0.3.png`} alt="Straight Mandalika Track" className="object-center" />
              </div>
              <p className="text-center font-sora text-2xl font-bold text-[#FAD592] md:text-3xl mt-2">
                15 m
              </p>
              <p className="font-sora text-base font-semibold text-white md:text-base">
                Lebar sirkuit
              </p>
          </motion.div>
            <motion.div
              className="rounded-xl bg-[#640D5E] py-4 text-center md:flex-1 p-2 flex flex-col items-center justify-center"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: 0.6,
              }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img src={`${baseUrl}/assets/2.0.4.png`} alt="Straight Mandalika Track" className="object-center" />
              </div>
              <p className="text-center font-sora text-2xl font-bold text-[#FAD592] md:text-3xl mt-2">
                17 tikungan
              </p>
              <p className="font-sora text-base font-semibold text-white md:text-base">
                11 ke kanan & 6 ke kiri
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <img src={`${baseUrl}/assets/track2.png`} alt="Track Bg" className="rotate-[180deg] bottom-[-50rem] left-[-80dvh] z-0 absolute" /> */}
      <div className="absolute bottom-0 z-40 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full max-w-xl sm:block"
        />
      </div>
    </div>
  );
}
