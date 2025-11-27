"use client";

import { motion } from "motion/react";

export function CustomImageMerebutHati() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-cover">
      <motion.div
        className="w-full bg-linear-to-b from-white via-[#8a201d] via-[#d6615a] via-[#ffffff] via-50% via-70% to-[#3b1312] pt-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative z-10 mx-auto flex max-w-4xl items-start justify-center px-4 md:px-10"
          variants={fadeInUp}
        >
          <div className="relative w-full bg-size-[cover,contain] bg-position-[center_top] bg-no-repeat bg-blend-multiply xl:bg-size-[cover,auto]">
            <motion.p
              className="px-4 pt-6 text-center text-xl font-extrabold text-black md:px-10 md:text-4xl"
              variants={fadeInUp}
            >
              Mobil China <br /> juga Merambah Dunia
            </motion.p>
            <motion.img
              src={`/assets/wara-wiri-mobil-china-di-indonesia/4.1.png`}
              alt="Banner"
              className="mt-3 h-auto w-full sm:mt-12 mb-0 sm:mb-6 sm:w-auto"
              variants={fadeInUp}
            />
            <div className="flex flex-row">
              <motion.div className="space-y-2 sm:space-y-8" variants={fadeInUp}>
                <p className="text-left text-sm text-black sm:text-2xl">
                  Buktinya, China menjadi negara{" "}
                  <strong>pengekspor mobil terbesar dunia pada 2023</strong>
                </p>
                <div>
                  <p className="text-xl font-extrabold text-[#DF3E27] md:text-4xl">
                    4,91 juta mobil
                  </p>
                  <div className="mt-0 inline-block rounded-br-3xl bg-[#DF3E27] py-0.5 pl-0.5 pr-3 sm:mt-1 sm:py-1 sm:pl-1 sm:pr-4">
                    <p className="text-[10px] text-white sm:text-base">
                      diekspor sepanjang 2023
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-[#DF3E27] md:text-4xl">
                    meningkat 58%
                  </p>
                  <div className="mt-0 inline-block rounded-br-3xl bg-[#DF3E27] py-0.5 pl-0.5 pr-3 sm:mt-1 sm:py-1 sm:pl-1 sm:pr-4">
                    <p className="text-[10px] text-white sm:text-base">
                      dibandingkan tahun sebelumnya
                    </p>
                  </div>
                </div>
                <p className="text-sm text-black sm:text-2xl">
                  China berhasil menggeser
                  <br />
                  dominasi Jepang sebagai rajanya
                  <br />
                  eksportir mobil
                </p>
              </motion.div>
              <motion.img
                src={`/assets/wara-wiri-mobil-china-di-indonesia/4.8.png`}
                alt="Banner"
                className="mt-8 h-auto max-w-36 sm:mt-10 sm:w-auto sm:max-w-xs"
                variants={fadeInUp}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="w-full bg-[#470103] pb-8">
        <motion.div
          className="relative z-20 mx-auto flex max-w-4xl px-4 md:px-10"
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          viewport={{ once: true }}
        >
          <motion.img
            src={`/assets/wara-wiri-mobil-china-di-indonesia/4.6.png`}
            alt="Banner"
            className="z-15 absolute -mt-20 h-auto w-full sm:-mt-72 sm:w-auto"
            variants={fadeInUp}
          />
          <motion.img
            src={`/assets/wara-wiri-mobil-china-di-indonesia/4.7.png`}
            alt="Banner"
            className="z-20 -mt-20 h-auto w-full sm:-mt-72 sm:w-auto"
            variants={fadeInUp}
          />
        </motion.div>
      </div>
    </section>
  );
}
