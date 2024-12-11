"use client";

import { baseUrl } from "@/constants/meta";
import { motion, type Variants } from "framer-motion";

export function CustomImageMRTdanLRT() {
  const variants: Variants = {
    pOpen: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: { duration: 0.4, delay: 0.2 },
    },
    pClose: {
      opacity: 0,
      y: -20,
      x: -20,
      rotate: 1,
      transition: { duration: 1 },
    },
  };
  const flagVariant: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 0.3 },
    },
    close: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };
  const paragraphVariant: Variants = {
    open: {
      opacity: 1,
      y: 20,
    },
    close: {
      opacity: 0,
      y: 0,
    },
  };

  const carsVariant: Variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
        duration: 3,
      },
    },
    close: {
      opacity: 0,
    },
  };

  const carVariant: Variants = {
    open: {
      opacity: 1,
      y: 20,
      transition: {
        duration: 0.5,
      },
    },
    close: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-[#cecfc1] pt-8 md:px-0">
      <div className="relative flex w-full items-start bg-[#cecfc1] md:justify-center xl:pb-8">
        <div className="hidden w-full max-w-4xl items-start md:flex">
          <div className="mb-4 pl-4 md:pr-12 lg:mt-20 lg:pl-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: .3 }}
              className="mb-4 text-2xl font-extrabold text-[#420913] md:text-6xl"
            >
              MRT dan LRT
            </motion.p>
            <ul className="list-none space-y-4 p-0">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: .4 }}
                className="flex text-base md:text-xl"
              >
                <span className="text-[#973131]">&#9658;</span>
                <span className="ml-2 text-black">
                  Setelah trem punah dari jalan-jalan kota, era bus diesel pun
                  hadir.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: .4 }}
                className="flex text-base md:text-xl"
              >
                <span className="text-[#973131]">&#9658;</span>
                <span className="ml-2 text-black">
                  Seiring waktu pemerintah menilai transportasi rel lebih
                  efektif dan tidak menyumbang polusi seperti transportasi umum
                  seperti bus.
                </span>
              </motion.li>
            </ul>
          </div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: .6 }}
            src={`${baseUrl}/assets/3.1.png`}
            alt="Kereta MRT"
            className="h-full w-1/2 self-end object-cover"
          />
        </div>
        <div className="block md:hidden max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duratio: .3 }}
            className="mb-4  px-4 md:px-0 text-left text-5xl font-extrabold text-[#420913] md:text-6xl"
          >
            MRT dan LRT
          </motion.p>
          <div className="space-y-4 px-4">
            <ul className="list-none space-y-4 p-0">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: .4 }}
                className="flex text-base md:text-xl pr-4"
              >
                <span className="text-[#973131]">&#9658;</span>
                <span className="ml-2 text-neutral-800 text-base xs:text-xl sm:text-2xl font-medium">
                  Setelah trem punah dari jalan-jalan kota, era bus diesel pun
                  hadir.
                </span>
              </motion.li>
            </ul>
            <div className="flex">
              <ul>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: .4 }}
                  className="flex text-base md:text-xl"
                >
                  <span className="text-[#973131]">&#9658;</span>
                  <span className="ml-2 text-neutral-800 text-base xs:text-xl sm:text-2xl font-medium">
                    Seiring waktu pemerintah menilai transportasi rel lebih
                    efektif dan tidak menyumbang polusi seperti transportasi umum
                    seperti bus.
                  </span>
                </motion.li>
              </ul>
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: .6 }}
                src={`${baseUrl}/assets/3.1.png`}
                alt="Kereta MRT"
                className="h-full w-1/2 self-end object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mt-4 md:mt-0">
        <div className="mx-auto flex max-w-4xl bg-[#8a1b2f] p-4 md:p-8">
          <ul className="w-1/2 md:w-auto list-none space-y-4 p-0 md:pr-20">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: .4 }}
              className="flex text-base md:text-xl"
            >
              <span className="text-[#faffbc]">&#9658;</span>
              <span className="ml-2 text-white">
                Maka dari itu, dihadirkanlah MRT dan LRT di Jakarta pada 2019.
              </span>
            </motion.li>
          </ul>
          <ul className="w-1/2 md:w-auto list-none space-y-4 p-0 md:pr-20">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: .4 }}
              className="flex text-base md:text-xl"
            >
              <span className="text-[#faffbc]">&#9658;</span>
              <span className="ml-2 text-white">
                Khusus untuk LRT, Kota Palembang, Sumatra Selatan malahan lebih
                dulu beroperasi dibandingkan Jakarta yakni pada 2018.
              </span>
            </motion.li>
          </ul>
        </div>
      </div>
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: .6 }}
        src={`${baseUrl}/assets/3.2.png`}
        alt="Title"
        className="z-20 -mt-20 h-auto w-full lg:-mt-20 xl:-mt-44"
      />
    </section>
  );
}
