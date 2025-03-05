"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative flex h-full w-full justify-center bg-cover bg-center py-12 text-center md:py-32"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.10.png)` }}
      >
        <div className="z-10 mx-auto flex w-full max-w-4xl items-center px-4 lg:px-0">
          <div className="w-full md:w-1/2">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="relative z-10 mb-2 w-full text-center font-sora text-3xl font-bold text-[#FB4E00] md:text-left md:text-6xl"
            >
              Tips Lari
            </motion.h3>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="relative z-10 mb-8 w-full text-center font-sora text-3xl font-bold text-[#FB4E00] md:mb-12 md:text-left md:text-6xl"
            >
              Bagi Pemula
            </motion.h3>

            <div className="flex items-center">
              <div className="relative">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#062788]">
                  <motion.img
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    src={`${baseUrl}/assets/4.1.png`}
                    alt="Lari"
                    className="absolute top-[-10px] z-10 h-auto w-40 -translate-x-1/2 transform"
                  />
                </div>
              </div>

              <div className="-ml-6 flex-1 bg-[#062788] px-6 py-4">
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="font-sora text-lg font-bold text-white md:text-2xl"
                >
                  Mulai aja dulu!
                </motion.p>
              </div>
            </div>

            <div className="relative mt-8 flex items-center justify-between md:mt-12">
              <div className="relative flex-1 bg-[#062788] py-3 pl-6">
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-left font-sora text-lg font-bold text-white md:text-2xl"
                >
                  Rutinkan sampai <br /> jadi rutinitas
                </motion.p>
              </div>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/4.2.png`}
                alt="Kalendar"
                className="absolute -right-[8%] z-10 h-auto w-28 md:-right-10 md:w-40"
              />
            </div>

            <div className="mt-8 flex items-center md:mt-12">
              <div className="relative">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#062788]">
                  <motion.img
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    src={`${baseUrl}/assets/4.3.png`}
                    alt="Medali"
                    className="absolute z-10 h-auto w-20 -translate-x-1/2 transform md:top-[-32px] md:w-40"
                  />
                </div>
              </div>

              <div className="-ml-6 flex-1 bg-[#062788] px-6 py-4">
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="font-sora text-lg font-bold text-white md:text-2xl"
                >
                  Tentukan tujuan
                </motion.p>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="-mt-[6%] ml-[40%] text-left font-sora text-lg text-[#062788] md:-mt-[4%] md:ml-[35%] md:text-2xl"
            >
              Sekedar sehat atau <br /> ingin ikut lomba?
            </motion.p>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#FB4E00] pb-12 pt-28 md:pb-20 md:pt-20">
        <div className="z-10 mx-auto mb-12 flex w-full max-w-4xl items-center px-4 md:mb-20 lg:px-0">
          <div className="w-full md:w-1/2">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="relative z-10 mb-2 w-full text-left font-sora text-3xl font-bold text-white md:text-6xl"
            >
              Ingin Lari
            </motion.h3>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="relative z-10 mb-4 w-full text-left font-sora text-3xl font-bold text-white md:mb-6 md:text-6xl"
            >
              Aman?
            </motion.h3>
            <p className="font-sora text-xl font-bold text-white md:text-2xl">
              Wajib Perhatikan Hal Ini!
            </p>
          </div>
          <div className="relative w-full md:w-1/2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
              src={`${baseUrl}/assets/4.4.png`}
              alt="Lari"
              className="absolute -bottom-20 right-0 z-10 h-auto max-w-[70%] md:-bottom-14 md:max-w-[90%]"
            />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center items-stretch space-x-0 px-4 md:flex-row md:space-x-8 lg:px-0">
          <div className="relative flex hidden w-1/3 justify-center rounded-xl bg-[#062788] p-4 md:flex">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/4.5.png`}
              alt="Lari"
              className="absolute left-0 top-[-10px] z-10 h-auto w-full"
            />
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute bottom-4 text-center text-xl text-white md:text-2xl"
            >
              Pilih sepatu <br /> yang nyaman
            </motion.p>
          </div>

          <div className="mb-4 w-full md:hidden">
            <div className="relative flex min-h-[8rem] w-full justify-between rounded-xl bg-[#062788] p-4">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="relative flex w-1/2 items-center pr-4 text-left text-xl text-white md:pr-20 md:text-2xl"
              >
                Pilih sepatu <br /> yang nyaman
              </motion.p>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/4.5.png`}
                alt="Lari"
                className="absolute -top-4 right-0 z-20 h-auto w-[40%]"
              />
            </div>
          </div>

          <div className="w-full space-y-4 md:w-2/3 md:space-y-8">
            <div className="relative flex min-h-[8rem] w-full flex-row-reverse justify-between rounded-xl bg-[#062788] p-4">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/4.6.png`}
                alt="Bulan"
                className="absolute -top-2 left-4 z-20 h-auto w-1/3 md:-top-4 lg:-top-12"
              />
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="relative flex w-1/2 items-center pr-4 text-left text-xl text-white md:pr-20 md:text-2xl"
              >
                Hindari pakaian warna gelap saat berlari di malam hari
              </motion.p>
            </div>

            <div className="relative flex min-h-[8rem] w-full justify-between rounded-xl bg-[#062788] p-4">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="relative flex w-1/2 items-center pr-4 text-left text-xl text-white md:pr-20 md:text-2xl"
              >
                Jangan lupa topi dan sunscreen saat siang hari
              </motion.p>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/4.7.png`}
                alt="Matahari"
                className="absolute -top-3 right-0 z-20 h-auto w-1/3 md:-top-4 lg:-bottom-4 lg:-top-7"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4 flex w-full max-w-4xl flex-col items-stretch space-x-0 space-y-4 px-4 md:mt-8 md:flex-row md:space-x-8 md:space-y-0 lg:px-0">
          <div className="relative flex h-auto w-full rounded-xl bg-[#062788] md:w-1/2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/4.9.png`}
              alt="Lari"
              className="left-0 top-0 h-full w-3/5 rounded-l-xl object-cover"
            />
            <div className="relative z-10 flex w-2/5 items-center justify-center px-4">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="font-sora text-xl text-white md:text-2xl"
              >
                Larilah di trotoar. <br /> Jika tidak ada, upayakan lari di
                jalan sambil melawan arus{" "}
              </motion.p>
            </div>
          </div>

          <div className="relative flex min-h-[8rem] w-full rounded-xl bg-[#062788] md:w-1/2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/4.8.png`}
              alt="Tangan"
              className="absolute bottom-0 left-0 h-auto w-1/4 object-contain pr-0 md:w-2/3 md:pr-4"
            />
            <div className="relative ml-auto flex w-2/3 items-center justify-center pr-4 md:w-1/3">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="font-sora text-xl text-white md:text-2xl"
              >
                Beri sinyal saat akan berbelok
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
