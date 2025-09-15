"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pb-12 pt-16 md:pb-[8rem] md:pt-24 xl:pb-24"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.1.png)` }}
      >
        <div className="space-y-10 md:space-y-24 pb-10 md:pb-10">
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center text-5xl md:text-9xl font-black text-white px-4 md:px-0"
            >
              Ice Cream <br /> War!
            </motion.h3>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="text-center"
            >
              <p className="bg-[#0006FF] text-white text-lg md:text-3xl mx-auto font-bold inline-block px-4 py-2">
                Persaingan Produk Lokal Vs Impor
              </p>          
            </motion.div>
          </div>
          <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4 space-y-16 md:space-y-32 pt-1 md:pt-12">
            <div className="flex w-full flex-row text-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="ml-20 relative w-full flex flex-col justify-center text-left text-white bg-[#E35AA7] rounded-3xl pl-14 md:pl-[22rem] pr-6 md:pr-14 py-8 md:py-12"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 text-white text-lg md:text-2xl"
                >
                  Produk es krim lokal ternyata belum mampu menggoyahkan posisi es krim keluaran perusahaan dari luar negeri yang sudah begitu kuat menancap bisnisnya di Indonesia sejak lama.
                </motion.p>
                <motion.img
                  src={`${baseUrl}/assets/4.2.png`}
                  alt="Overlay"
                  initial={{ scale: 0, rotate: -15, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-12 -left-24 md:-left-40 w-48 h-48 md:h-[34rem] md:w-[34rem] object-contain"
                />
              </motion.div>
            </div>
            <div className="flex w-full flex-row text-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="mr-20 relative w-full flex flex-col justify-center text-left text-white bg-[#E35AA7] rounded-3xl pr-12 md:pr-[22rem] pl-6 md:pl-14 py-8 md:py-12"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 text-white text-lg md:text-2xl"
                >
                  Meskipun begitu, sejumlah jenama lokal tetap bertahan di panasnya berebut pelanggan lewat makanan dingin ini, di antaranya ialah Campina, Diamond, dan sang legenda Woody.
                </motion.p>
                <motion.img
                  src={`${baseUrl}/assets/4.3.png`}
                  alt="Overlay"
                  initial={{ scale: 0, rotate: -15, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-12 -right-24 md:-right-40 w-48 h-48 md:h-[34rem] md:w-[34rem] object-contain"
                />
              </motion.div>
            </div>
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
