"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute h-[20%] w-full left-0 z-10 top-0 bg-gradient-to-b from-[#942238]"></div>
      <div
        className="relative flex h-full w-full flex-col justify-center bg-cover bg-center pb-12 text-center md:pb-32"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.0.png)` }}
      >
        <div className="relative w-full">
          <img
            src={`${baseUrl}/assets/3.1.png`}
            alt="Header"
            className="relative z-0 min-h-[9.375rem] w-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto -mt-[55%] w-full px-4 md:max-w-4xl md:px-0 lg:-mt-[55%]">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="mb-2 text-center font-sora text-2xl font-bold text-white md:mb-6 md:text-[2.75rem] lg:text-[3.375rem]"
          >
            Merek-Merek
          </motion.h3>
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="mb-4 text-center font-sora text-2xl font-bold text-white md:mb-8 md:text-[2.75rem] lg:text-[3.375rem]"
          >
            Sepatu Lari Lokal:
          </motion.h3>
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="mb-4 rounded-xl text-center font-sora text-2xl font-bold text-white md:mb-12 md:text-5xl lg:text-6xl"
          >
            <span className="inline-block rounded-xl bg-[#2643A3] px-4 py-1">
              Bagus dan Terjangkau!
            </span>
          </motion.h3>
          <div className="ml-auto w-full md:w-1/2">
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="mb-4 px-4 text-center font-sora text-base md:text-left md:text-2xl lg:px-0 lg:text-white"
            >
              Kawan GNFI punya banyak pilihan sepatu lari, termasuk merek lokal
              yang tak kalah ciamik dari merek luar negeri!
            </motion.p>
          </div>
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/3.2.png`}
            alt="910 Nineten"
            className="z-10 mr-auto mt-0 h-auto w-2/3 px-4 md:-mt-[10%] lg:px-0"
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/3.3.png`}
            alt="Ortu Seigth"
            className="z-30 -mt-[10%] ml-auto h-auto w-2/3 px-4 lg:px-0"
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/3.4.png`}
            alt="Mills"
            className="z-50 -mt-0 mr-auto h-auto w-1/2"
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/3.5.png`}
            alt="SPECS"
            className="z-40 -mt-[25%] ml-[43%] h-auto w-1/2"
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/3.6.png`}
            alt="Eagle"
            className="z-60 -mt-[10%] ml-[20%] h-auto w-1/2"
          />
        </div>
      </div>
    </div>
  );
}
