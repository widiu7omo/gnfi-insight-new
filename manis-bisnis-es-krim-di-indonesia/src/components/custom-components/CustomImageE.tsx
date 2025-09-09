"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";

export function CustomImageE() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-[#8C2327] bg-center pt-16 md:pt-24"
      >
        <div className="flex justify-center">
          <img
            src={`${baseUrl}/assets/5.1.png`}
            alt="Hero Image"
            className="z-0 absolute max-w-4xl w-full object-contain"
          />
        </div>
        <div className="z-10 relative mx-auto max-w-4xl items-center px-4 lg:px-0">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-2/3 text-left font-sora text-[2rem] font-bold leading-normal text-white md:w-2/3 md:text-[3rem] lg:text-[5rem]"
          >
            Proyeksi <br />Es Krim di<br /> Indonesia
          </motion.h3>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="mb-2 mt-4 w-1/2 max-w-2xl text-left font-sora text-base text-white md:mt-32 lg:mt-48 md:w-2/5 md:text-3xl"
          >
            Menurut laporan Research and Markets (2025), nilai pasar es krim Indonesia pada tahun 2024 diperkirakan mencapai
          </motion.p>
          <motion.h4
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-2/3 text-left font-sora text-[1.5rem] font-semibold text-white md:w-2/3 md:text-[48px] lg:text-[64px]"
          >
            US$1,015 <br />miliar
          </motion.h4>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="mb-8 w-full max-w-3xl text-left font-sora text-base font-semibold text-white md:mb-32 lg:mb-12 md:w-1/2 md:text-3xl"
          >
            (sekitar Rp16 triliun).
          </motion.p>
          <motion.div
            className="ml-auto items-center bg-[#C50007] py-2 lg:py-4 md:w-[50%] rounded-[2rem] lg:rounded-[3rem]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <p className="text-base text-white lg:text-3xl p-4 lg:p-8 pb-[5rem] lg:pb-[9.5rem]">
              Angka itu diproyeksikan melonjak menjadi US$1,628 miliar pada 2033,
              dengan laju pertumbuhan rata-rata (CAGR) sekitar
            </p>
          </motion.div>

          <div className="ml-auto items-center md:w-[50%]">
            <motion.div
              className="bg-white p-4 lg:p-8 text-black rounded-[1.5rem] lg:rounded-[3rem] -top-14 relative text-[1.5rem] lg:text-6xl font-extrabold text-[#C50007] lg:-top-32 lg:p-12 lg:text-[5rem] lg:text-[4rem] font-bold"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "backOut" }}
            >
              <p>
                5,4%
                <span className="inline lg:hidden"> per tahun.</span>
                <span className="hidden lg:inline">
                  <br />
                  per tahun.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative -mt-20 lg:-mt-44 w-full bg-[#F0E4E8] rounded-t-[7rem] px-4 pt-12 md:pt-10 lg:pt-24">
        <div className="mx-auto max-w-4xl flex text-black text-left font-sora text-lg md:text-2xl space-y-0 md:space-y-12">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/5.2.png`}
            alt="Es Krim"
            className="relative z-10 object-contain lg:h-auto w-1/3 md:w-2/5 pr-8 -ml-4 lg:-ml-8 mt-0 md:-mt-[10rem] lg:-mt-[20rem]"
          />
          <motion.p className="relative -top-[5%] md:-top-[4rem] lg:-top-[6rem] md:ml-10 pt-4 md:pt-10 text-base md:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            Artinya, dalam waktu kurang dari 10 tahun, pasar es krim Indonesia bisa
            membesar hampir dua kali lipat.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl">
          <img
            src={`${baseUrl}/assets/footer.png`}
            className="mx-auto hidden w-full invert sm:block"
            alt="Footer"
          />
        </div>
      </div>
    </div>
  );
}
