"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageJadiWarisanDunia() {
  return (
    <section id="section-1" className="relative">
      <div className="relative">
        <div className="relative">
          <img src={`${baseUrl}/assets/7.0.png`} alt="people festival" className="w-full h-full relative inset-0 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <div className="bg-black w-full h-24 sm:h-80"></div>
        <div className="absolute m-auto top-0 bottom-0 left-0 right-0 flex items-center justify-center gap-5 sm:gap-20 md:gap-60">
          <motion.div
            initial={{ opacity: 0, y: 0, x: -5 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="flex flex-col text-3xl gap-2 md:text-8xl md:gap-4 lg:gap-5 lg:text-9xl font-semibold text-yellow-500"
          >
            <h2>Jadi</h2>
            <h2>Warisan</h2>
            <h2>Dunia</h2>
          </motion.div>
          <div className="flex flex-col text-sm sm:text-lg font-semibold md:gap-8 gap-2 lg:gap-10 max-w-md text-white leading-4 md:leading-5 lg:leading-9">
            <motion.p initial={{ opacity: 0, y: 0, x: 5 }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }}>
              Kuatnya pengaruh <br />
              dangdut di Indonesia, <br /> membuat beberapa <br /> orang menjadikannya <br /> sebuah brand untuk <br /> menarik konsumen.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 0, x: 5 }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1.3 }}>
              Tidak hanya di Indonesia, <br /> hal ini dilakukan <br /> beberapa orang <br /> ke pasar luar negeri.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={`${baseUrl}/assets/7.1.png`} alt="background image cafe dangdut" className="w-full" />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          src={`${baseUrl}/assets/7.2.png`}
          alt="pedangdut Fitri Carlina"
          className="absolute bottom-0 z-10 w-full"
        />
        <div className="absolute bottom-0 w-full">
          <div className="relative flex items-center justify-end sm:justify-center">
            <motion.img initial={{ opacity: 0, x: 5 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} src={`${baseUrl}/assets/7.3.png`} alt="background hitam" className="relative w-full" />
            <motion.p
              initial={{ opacity: 0, x: 5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-white absolute text-xs lg:max-w-xl w-4/6 lg:text-lg lg:font-semibold lg:tracking-widest z-10 leading-3 tracking-tight"
            >
              Hal ini dilihat dari bisnis Cafe Dangdut yang dibuka oleh penyanyi dangdut Fitri Carlina. Cafe yang menyajikan kopi asal Indonesia ini dibuka olehnya di New York Amerika Serikat.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${baseUrl}/assets/7.4.png)` }}>
        <img src={`${baseUrl}/assets/7.5.png`} alt="yellow background" className="w-full absolute bottom-0" />
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          src={`${baseUrl}/assets/7.6.png`}
          alt="rhoma irama"
          className="w-full absolute bottom-0"
        />
        <motion.img
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          src={`${baseUrl}/assets/7.7.png`}
          alt="sandiaga uno"
          className="w-full relative bottom-0"
        />
        <motion.img initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} src={`${baseUrl}/assets/7.8.png`} alt="footer" className="w-full absolute bottom-0" />
        <div className="absolute top-0 bottom-0 lg:w-1/3 flex items-center justify-center">
          <div className="max-w-6xl flex flex-col gap-4 sm:gap-24 lg:gap-48">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-white text-xs sm:text-xl font-semibold leading-4 md:leading-5 md:tracking-wider lg:leading-9 lg:tracking-widest pl-8 md:pl-12 lg:pl-20"
            >
              Dangdut memang <br /> sekarang bukan <br /> hanya milik <br /> Indonesia, tetapi <br /> juga sudah menjadi <br /> warisan dunia.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-xs sm:text-xl font-medium lg:font-semibold leading-3 lg:tracking-widest pl-8 md:pl-12 lg:pl-20 pt-1"
            >
              Hal ini terlihat dari upaya <br /> pemerintah mengusulkan <br /> dangdut sebagai warisan <br /> budaya tak benda Indonesia <br /> kepada UNESCO <br /> pada 2022 lalu.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
