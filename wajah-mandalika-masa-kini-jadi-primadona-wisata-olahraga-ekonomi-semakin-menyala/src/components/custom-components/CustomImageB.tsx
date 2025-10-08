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
    <div className="relative flex flex-col items-center overflow-hidden bg-[#E5034B] pt-16 pb-0 md:pt-24">
      <div className="absolute inset-0 h-[20rem] bg-gradient-to-b from-[#E5034B] z-10"></div>
      <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4 z-20">
        <motion.h2
          className="font-sora text-[#FAD592] font-bold text-[32px] md:text-[46px] lg:text-6xl md:leading-[3.5rem] lg:leading-[4.5rem]"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 60,
            damping: 10,
            delay: 0.1
          }}
          viewport={{ once: true }}
        >
          Pertamina Mandalika International Street Circuit
        </motion.h2>
        <motion.p
          className="mt-8 md:mt-12 font-sora text-white text-xl md:text-4xl md:leading-[2.5rem] lg:leading-[3rem] lg:pr-[34%]"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Arena balap berkelas dunia yang mengubah wajah Mandalika secara drastis          </motion.p>
        <div className="relative w-full justify-center items-center relative md:mt-20 mt-4">
          <motion.img
            src={`${baseUrl}/assets/2.1.png`}
            alt="Sircuit"
            className="mx-auto w-[80%] md:w-[55%] lg:w-[65%] md:mt-8 lg:mt-0 md:mb-8 lg:mb-0 filter 
            drop-shadow-[0_0_80px_rgba(250,213,146,0.4)]
             drop-shadow-[0_0_140px_rgba(250,213,146,0.3)]
             drop-shadow-[0_0_200px_rgba(250,213,146,0.25)]
             drop-shadow-[0_0_300px_rgba(250,213,146,0.15)]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.img
            src={`${baseUrl}/assets/2.2.png`}
            alt="Motor"
            className="absolute w-[50%] md:w-[40%] lg:w-[50%] bottom-2 md:bottom-4 z-10 left-[20%]"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.img
            src={`${baseUrl}/assets/2.3.png`}
            alt="Bayangan"
            className="mx-auto w-[85%] md:w-[75%] lg:w-[80%] mt-4 md:mt-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div className="absolute top-[25%] md:top-[20%] w-[20%] left-[8%] lg:left-[5%] flex flex-col items-center justify-center text-center transform -translate-x-1/2">
            <motion.img
              src={`${baseUrl}/assets/2.4.png`}
              alt="Gunting"
              initial={{ opacity: 0, y: 40, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
              viewport={{ once: true }}
              className="block mx-auto w-[50%]"
            />
            <motion.p
              className="mt-2 text-center text-[#FAD592] font-semibold text-xs md:text-2xl font-sora"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.5 }}
              viewport={{ once: true }}
            >
              12 November 2021
            </motion.p>
          </div>

          <div className="absolute bottom-[10%] md:bottom-[30%] w-[25%] -right-[15%] lg:-right-[20%] flex flex-col items-center justify-center text-center transform -translate-x-1/2">
            <motion.img
              src={`${baseUrl}/assets/2.5.png`}
              alt="Map"
              initial={{ opacity: 0, y: 40, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
              viewport={{ once: true }}
              className="block mx-auto w-[25%]"
            />
            <motion.p
              className="mt-2 text-center text-[#FAD592] font-semibold text-xs md:text-2xl font-sora"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Desa Kuta, Lombok Tengah, Nusa Tenggara Barat
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-10 mb-8">
          <motion.div
            className="w-1/2 md:flex-1 bg-[#640D5E] py-4 rounded-xl text-center"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <p className="text-[#FAD592] font-bold text-2xl md:text-[44px] font-sora">4,31 km</p>
            <p className="text-white font-semibold text-base md:text-xl font-sora">Panjang lintasan</p>
          </motion.div>

          <motion.div
            className="w-1/2 md:flex-1 bg-[#640D5E] py-4 rounded-xl text-center"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
          >
            <p className="text-[#FAD592] font-bold text-2xl md:text-[44px] font-sora">723 m</p>
            <p className="text-white font-semibold text-base md:text-xl font-sora">Panjang trek lurus</p>
          </motion.div>

          <motion.div
            className="w-1/2 md:flex-1 bg-[#640D5E] py-4 rounded-xl text-center"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.4 }}
          >
            <p className="text-[#FAD592] font-bold text-2xl md:text-[44px] font-sora">15 m</p>
            <p className="text-white font-semibold text-base md:text-xl font-sora">Lebar sirkuit</p>
          </motion.div>
        </div>
        <motion.p
          className="text-center text-2xl md:text-3xl lg:text-5xl font-bold font-sora mb-2 text-[#FAD592]"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 15, duration: 1 }}
          viewport={{ once: true }}
        >
          17 Jumlah tikungan
        </motion.p>

        <motion.p
          className="text-center text-white font-bold font-sora mb-16 md:mb-48 text-base md:text-xl"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 16, duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          (11 ke kanan & 6 ke kiri)
        </motion.p>      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
