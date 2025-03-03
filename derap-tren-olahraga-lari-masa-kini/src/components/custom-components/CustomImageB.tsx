"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageB() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative flex h-full w-full justify-center bg-cover bg-center text-center py-12 md:py-32"
        style={{ backgroundImage: `url(${baseUrl}/assets/2.1.png)` }}
      >
        <div className="absolute w-full h-[50%] bg-gradient-to-b from-[#D98452] top-0" />
        <div className="z-10 mx-auto">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="relative inset-x-0 z-10 mb-4 w-full text-center font-sora text-3xl font-bold text-white md:text-6xl"
          >
            Sebanyak apa sih, <br />
            sampah di Indonesia?
          </motion.h3>
          <div className="relative mx-auto flex w-full max-w-4xl">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/2.2.png`}
              alt="Sebanyak apa Sampah di Indonesia"
              className="z-5 h-screen w-full object-cover object-left md:-mt-[2rem] md:px-0 lg:ml-[20%] lg:h-auto lg:w-[80%]"
            />
            <div className="absolute left-0 top-4 z-10 md:top-[5.5rem]">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative mt-[30%] w-[50%] px-4 text-left font-sora text-base font-medium text-white md:mt-0 md:w-[40%] md:text-2xl md:font-semibold lg:px-0"
              >
                Menurut Sistem Informasi Pengelolaan Sampah Nasional (SIPNSN)
                Kementerian Lingkungan Hidup, volume sampah nasional mencapai
              </motion.p>
              <div className="absolute right-0 top-full mt-10 flex flex-col items-end justify-end px-4 md:mt-32 xl:px-24">
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="inline-block whitespace-nowrap bg-white px-4 py-2 font-sora text-2xl font-semibold text-black md:text-6xl"
                >
                  39,737,086.45 ton
                </motion.p>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="inline-block whitespace-nowrap bg-[#731C11] px-4 py-2 font-sora text-lg font-semibold text-white md:text-3xl"
                >
                  pada 2023
                </motion.p>
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0, duration: 0.5 }}
                  src={`${baseUrl}/assets/2.3.png`}
                  alt="Sebanyak apa Sampah di Indonesia"
                  className="my-2 h-auto w-[40%] object-contain md:my-4"
                />
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="inline-block w-[90%] max-w-full whitespace-normal break-words bg-[#D62E31] px-4 py-2 text-left font-sora text-base font-medium text-white md:w-[60%] md:px-6 md:py-4 md:text-xl md:font-semibold"
                >
                  Kota Jakarta Timur jadi "penyumbang" terbanyak dengan timbulan
                  sampah sebanyak
                </motion.p>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="w-[90%] bg-[#B91C1F] px-4 py-2 text-left font-sora text-xl font-medium text-white md:w-[60%] md:px-6 md:py-4 md:text-3xl md:font-semibold"
                >
                  851,613.56 ton
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-18 relative w-full bg-[#731C11] pb-12 pt-8 md:pb-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-2 px-4 py-2 text-center font-sora text-lg font-semibold text-white md:mb-8 md:text-2xl"
          >
            Sampah jenis apa <br /> yang paling banyak?
          </motion.p>
        </div>
        <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center space-y-4 xs:flex-row xs:space-x-8 xs:space-y-0">
          <div className="relative size-40 overflow-visible rounded-xl border border-white bg-[#A33F11]">
            <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-[#8A3108]"></div>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/2.4.svg`}
              alt="Sisa makanan"
              className="absolute inset-x-0 -top-1 z-20 mx-auto h-auto w-24"
            />
            <div className="absolute bottom-0 flex h-1/2 w-full flex-col items-center justify-center px-2">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-center font-sora text-lg leading-tight text-white"
              >
                sisa makanan
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-center font-sora text-lg font-semibold text-white md:text-xl"
              >
                39,7 <span className="text-lg font-normal">persen</span>
              </motion.p>
            </div>
          </div>
          <div className="relative size-40 overflow-visible rounded-xl border border-white bg-[#A33F11]">
            <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-[#8A3108]"></div>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/2.5.svg`}
              alt="plastik"
              className="absolute inset-x-0 -top-1 z-20 mx-auto h-auto w-10"
            />
            <div className="absolute bottom-0 flex h-1/2 w-full flex-col items-center justify-center px-2">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-center font-sora text-lg leading-tight text-white"
              >
                plastik
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-center font-sora text-lg font-semibold text-white md:text-xl"
              >
                19,21 <span className="text-lg font-normal">persen</span>
              </motion.p>
            </div>
          </div>
          <div className="relative size-40 overflow-visible rounded-xl border border-white bg-[#A33F11]">
            <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-[#8A3108]"></div>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/2.6.svg`}
              alt="kayu atau ranting"
              className="absolute inset-x-0 -top-1 z-20 mx-auto h-auto w-14"
            />
            <div className="absolute bottom-0 flex h-1/2 w-full flex-col items-center justify-center px-2">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-center font-sora text-lg leading-tight text-white"
              >
                kayu atau ranting
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-center font-sora text-lg font-semibold text-white md:text-xl"
              >
                12,06 <span className="text-lg font-normal">persen</span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
