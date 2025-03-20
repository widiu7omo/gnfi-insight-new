"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageC() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pb-12 pt-16 md:pb-20 md:pt-20"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.6.png)` }}
      >
        <div className="mx-auto mb-12 max-w-4xl items-center px-4 md:mb-20 lg:px-0">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 text-center font-sora text-[1.75rem] font-bold leading-none text-white md:mb-8 md:text-[48px] lg:text-[70px]"
          >
            SBFP, Program Makan <br />
            Gratis di Filipina
          </motion.h3>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="mx-auto mb-4 w-full max-w-2xl text-center font-sora text-xl text-white md:mb-6 md:text-4xl"
          >
            Mulai dijalankan pada 1997 oleh Departemen Pendidikan Filipina
          </motion.p>
        </div>
        <div className="relative mx-auto flex w-full items-center px-4 md:max-w-4xl lg:px-0">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/3.1.png`}
            alt="Makan gratis"
            className="relative z-10 -mb-[4rem] h-auto w-2/3 md:-mb-[8rem] md:ml-8"
          />
          <div className="absolute right-4 top-2 z-20 w-[38%] justify-end rounded-xl bg-white p-4 drop-shadow-2xl md:right-20 md:top-8 md:w-[28%] md:p-6">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-xs text-gray-700 md:text-xl"
            >
              Awalnya bernama Breakfast Feeding Program (BFP) yang menyediakan
              sarapan, lalu berganti nama dan tak melulu hanya memberi makanan
              pada pagi hari.
            </motion.p>
          </div>
        </div>
      </div>
      <div
        className="relative flex h-full w-full justify-center bg-cover bg-center py-[7rem] text-center md:py-48"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.2.png)` }}
      >
        <div className="z-10 mx-auto justify-center md:max-w-4xl">
          <div className="mx-auto flex w-full items-center justify-center space-x-4 md:max-w-2xl md:space-x-8 lg:space-x-12">
            <div className="relative h-[28rem] w-1/2 justify-center rounded-xl bg-[#009990] px-4 pb-[16rem] pt-28 text-center md:h-[50rem] md:pb-[20rem] md:pt-[10rem]">
              <div className="relative flex w-full justify-center">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`${baseUrl}/assets/3.3.png`}
                  alt="Makan gratis"
                  className="absolute -top-40 z-50 h-auto w-2/3 md:top-[-14rem]"
                />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="mx-auto max-w-xs font-sora text-sm text-white md:text-2xl"
              >
                Untuk tahun 2025, pemerintah menganggarkan dana 11,7 miliar peso
                guna membiayai SBFP.
              </motion.p>
            </div>
            <div className="relative h-[28rem] w-1/2 justify-center rounded-xl bg-[#003092] px-4 pb-[12rem] pt-28 text-center md:h-[50rem] md:pb-[20rem] md:pt-[10rem]">
              <div className="relative flex w-full justify-center">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`${baseUrl}/assets/3.4.png`}
                  alt="Makan gratis"
                  className="absolute -top-32 z-50 h-auto w-2/3 md:top-[-13rem]"
                />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto max-w-xs font-sora text-sm text-white md:text-2xl"
              >
                Sasaran penerima manfaatnya sebesar{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1.2 }}
                  transition={{
                    duration: 0.8,
                    ease: "backOut",
                    delay: 0.4,
                  }}
                  className="text-xl font-extrabold text-[#FFB433] md:text-4xl"
                >
                  3.398.541
                </motion.span>
                <br />{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.6,
                  }}
                  className="text-base font-bold md:text-3xl"
                >
                  anak pada 2025
                </motion.span>
              </motion.p>
            </div>
          </div>
        </div>
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          src={`${baseUrl}/assets/3.5.png`}
          alt="Makan gratis"
          className="absolute bottom-0 z-20 w-full md:max-w-4xl"
        />
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
