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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function CustomImageE() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="bg-[#1C5396] w-full pt-20 pb-6 md:pt-24 md:pb-8 relative">
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4 mb-[24rem] md:mb-[8rem]">
          <div className="relative">
            <div className="w-full relative z-10">
              <motion.h2
                className="font-sora text-[#FFC637] font-bold w-full text-[32px] md:text-8xl md:leading-[6.5rem]"
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
                Daya Beli & Harga Tiket Pesawat
              </motion.h2>
              <motion.p
                className="mt-2 md:mt-6 font-sora text-white w-full md:w-[70%] text-xl md:text-[28px] md:leading-[2.5rem]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                Infrastruktur bandara semakin modern, tetapi harga tiket domestik tetap relatif mahal bagi sebagian kalangan
              </motion.p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <motion.img
            src={`${baseUrl}/assets/4.1.png`}
            alt="Airport"
            className="w-full h-auto mt-18 lg:-mt-12 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute md:mt-0 -mt-[20rem] inset-0 lg:px-0 md:px-8 px-4 flex md:flex-row flex-col mx-auto max-w-4xl md:space-x-8 md:space-y-12 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="bg-gradient-to-b from-[#EC514C] via-[#EC514C]/70 to-transparent px-5 pt-4 w-full md:w-1/3"
              variants={itemVariants}
            >
              <p className="font-sora text-lg md:text-2xl text-white">
                Jakarta-Surabaya kadang setara tiket Jakarta-Singapura
              </p>
            </motion.div>

            <motion.div
              className="relative pl-2 w-full md:w-1/3"
              variants={itemVariants}
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#EC514C] to-transparent"></div>
              <p className="text-white text-lg md:text-2xl">
                Penyebab: <br />
                harga avtur tinggi, maskapai terbatas, persaingan minim
              </p>
            </motion.div>

            <motion.div
              className="relative pl-2 w-full md:w-1/3"
              variants={itemVariants}
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#EC514C] to-transparent"></div>
              <p className="text-white text-lg md:text-2xl">
                Banyak warga menengah bawah tetap pilih bus, kereta, atau mobil pribadi
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#EC514C] w-full pt-20 pb-6 md:pt-24 md:pb-8 relative">
        <div className="relative w-full">
          <motion.img
            src={`${baseUrl}/assets/4.2.png`}
            alt="Airport"
            className="w-full h-auto md:-mt-12 mx-auto mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 flex flex-row mx-auto md:mt-0 -mt-28 max-w-4xl md:space-x-8 md:space-y-12 space-y-4 px-4 md:px-8 lg:px-0">
            <div className="w-1/2">
              <p></p>
            </div>
            <motion.div
              className="relative pl-0 md:pl-2 w-1/2 space-y-4 md:space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.4 },
                },
              }}
            >
              <motion.p
                className="text-white text-base md:text-2xl lg:text-4xl pl-0 lg:pl-10 font-sora"
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                Ironisnya, tiket promo internasional justru sering lebih murah
                dibandingkan rute domestik
              </motion.p>

              <motion.p
                className="text-white text-base md:text-2xl lg:text-4xl pl-0 lg:pl-10 font-sora"
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                Bandara berkelas dunia memang hadir, tapi belum sepenuhnya inklusif
                bagi semua kalangan
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
