"use client";

import { motion } from "motion/react";

export function CustomImageMenantiTremLagi() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative flex h-screen w-full justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: `url(/assets/trem-mrt-lrt-transportasi-rel-masa-depan-indonesia/5.1.png)` }}
      >
        <div className="relative z-20 mx-auto mt-[20%] max-w-4xl text-white md:mt-[10%]">
          <motion.p
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold text-black md:text-6xl"
          >
            Menanti Trem Lagi
          </motion.p>

          <motion.p
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 max-w-2xl text-xl font-bold text-black md:text-3xl"
          >
            Sudah lama sejak trem digadang-gadang akan dihidupkan lagi
          </motion.p>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#2e469f] md:px-0 md:py-0">
        <div className="relative z-20 flex w-full max-w-4xl items-center justify-center space-x-2 px-2 py-4 md:px-8">
          <div className="w-1/2 justify-center">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              src={`/assets/trem-mrt-lrt-transportasi-rel-masa-depan-indonesia/5.2.png`}
              alt="Title"
              className="z-20 -mt-14 h-auto w-[90%] max-w-sm md:-mt-18 md:pb-4"
            />
          </div>
          <div className="w-1/2 flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base text-white md:text-2xl"
            >
              Kabarnya, Kota Bogor siap mengoperasikan trem yang "tidak seperti"
              trem yang sudah banyak orang kenal
            </motion.p>
          </div>
        </div>
        <div className="relative w-full">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            src={`/assets/trem-mrt-lrt-transportasi-rel-masa-depan-indonesia/5.3.png`}
            alt="Title"
            className="z-20 h-auto w-full"
          />
          <div className="absolute left-1/2 top-20 flex w-full max-w-4xl -translate-x-1/2 justify-start">
            <div className="w-1/2 bg-[#d62e31] p-2 text-base text-white md:p-8 md:pl-20 md:text-2xl">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-2 md:mb-4"
              >
                Trem itu adalah trem otonom, yang sebelumnya sudah dioperasikan
                di Ibu Kota Nusantara (IKN)
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[10%] bg-linear-to-t from-[#a59477] left-0 right-0 bottom-0 z-10" />
    </section>
  );
}
