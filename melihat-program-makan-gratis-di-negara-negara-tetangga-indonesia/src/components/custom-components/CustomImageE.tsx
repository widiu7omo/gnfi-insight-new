"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

const KAMBOJA = [
  "Program makan gratis di Kamboja mulai dijalankan pada 1999 oleh World Food Programme (WFP)",
  "Sejak 2019, Pemerintah Kamboja mulai mengambil alih program secara bertahap, namun WFP tetap memberikan dukungan",
  "Kamboja berkomitmen untuk menggunakan bahan pangan lokal dalam penyediaan makanan gratis guna mendorong produktivitas pertanian, menyerap tenaga kerja, dan menaikkan pendapatan masyarakat",
  "Pemerintah Kamboja klaim 280 ribu siswa telah merasakan manfaat program pada 2022",
];

const LAOS = [
  "Makan gratis di Laos dimulai pada 2002 oleh WFP. Pada 2010, pemerintah meluncurkan Laos National School Meals Program (LNMP) yang didanai World Bank",
  "Pemerintah semakin berperan. Pada 2020, anggaran dalam negeri mulai dialokasikan untuk kelangsungan program",
  "Per September 2024, LNMP disebut telah menjangkau 250 ribu anak, 25 persen dari seluruh siswa sekolah dasar di Laos",
];

export function CustomImageE() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative flex h-full w-full flex-col justify-center bg-cover bg-no-repeat pb-[80px] pt-[64px] text-center md:pb-0 md:pt-20"
        style={{ backgroundImage: `url(${baseUrl}/assets/5.1.png)` }}
      >
        <div className="absolute bg-gradient-to-b from-[#eaeaec] top-0 left-0 h-[30%] w-full" />

        <div className="relative mx-auto w-full px-4 md:max-w-4xl lg:px-0">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 text-center font-sora text-[1.75rem] font-bold leading-none text-[#008E86] md:mb-8 md:text-[48px] lg:text-[70px]"
          >
            Semangat Kemandirian <br />
            dalam Makan Gratis di Laos dan Kamboja
          </motion.h3>
          <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8">
            <div className="w-full md:w-1/2">
              <div className="flex w-1/2 items-center pl-[5%]">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white md:h-28 md:w-28">
                    <motion.img
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "backOut" }}
                      src={`${baseUrl}/assets/5.2.png`}
                      alt="Bendera Kamboja"
                      className="z-20 h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="z-10 -ml-12 flex min-w-[13.75rem] justify-center rounded-full bg-[#003092] py-2 md:min-w-[15.625rem] md:py-4">
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-sora text-[1.375rem] font-bold text-white md:text-2xl"
                  >
                    Kamboja
                  </motion.p>
                </div>
              </div>
              <div className="relative -mt-10 h-[63.75rem] w-full rounded-3xl bg-[#B8CFFE] px-4 pt-16 md:-mt-14 md:h-[75rem] md:px-6 md:pt-20">
                <motion.div
                  className="space-y-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.55,
                      },
                    },
                  }}
                >
                  {KAMBOJA.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -40, scale: 0.9 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          transition: { duration: 0.8, ease: "backOut" },
                        },
                      }}
                      className="flex space-x-2"
                    >
                      <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-[#003092] align-baseline" />
                      <p className="text-left font-sora text-xl text-[#2A3335] md:text-2xl">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`${baseUrl}/assets/5.5.png`}
                  alt="Anak Makan"
                  className="absolute bottom-0 right-0 z-10 w-full md:left-10 md:hidden"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex w-1/2 items-center pl-[5%]">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white md:h-28 md:w-28">
                    <motion.img
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "backOut" }}
                      src={`${baseUrl}/assets/5.3.png`}
                      alt="Bendera Laos"
                      className="z-20 h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="z-10 -ml-12 flex min-w-[13.75rem] justify-center rounded-full bg-[#008E86] py-2 md:min-w-[15.625rem] md:py-4">
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-sora text-[1.375rem] font-bold text-white md:text-2xl"
                  >
                    Laos
                  </motion.p>
                </div>
              </div>
              <div className="relative -mt-10 h-[56.25rem] w-full rounded-3xl bg-[#8EDFE4] px-4 pb-20 pt-16 md:-mt-14 md:h-[75rem] md:px-6 md:pt-20">
                <motion.div
                  className="space-y-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.55,
                      },
                    },
                  }}
                >
                  {LAOS.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -40, scale: 0.9 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          transition: { duration: 0.8, ease: "backOut" },
                        },
                      }}
                      className="flex space-x-2"
                    >
                      <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-[#008E86] align-baseline" />
                      <p className="text-left font-sora text-xl text-[#2A3335] md:text-2xl">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`${baseUrl}/assets/5.4.png`}
                  alt="Anak Makan"
                  className="absolute bottom-0 right-0 z-10 w-full md:left-10"
                />
              </div>
            </div>
          </div>
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/5.5.png`}
            alt="Anak Makan"
            className="absolute left-0 z-10 z-20 hidden max-w-4xl bottom-0 md:block md:max-h-[18.75rem] md:w-auto lg:max-h-[21.875rem]"
          />
          <img
            src={`${baseUrl}/assets/footer.png`}
            className="relative z-50 mx-auto hidden w-full sm:block bottom-0"
          />

        </div>
        <div className="absolute bg-gradient-to-t from-[#eaeaec] bottom-0 left-0 h-[30%] w-full" />
      </div>
    </div>
  );
}
