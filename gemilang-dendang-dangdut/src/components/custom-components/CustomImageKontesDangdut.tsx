"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageKontesDangdut() {
  return (
    <section id="section-1" className="bg-gradient-to-b from-[#989da1] -mt-1 overflow-clip pb-[4rem]">
      <div className="relative flex items-start justify-center overflow-clip flex-col">
        <div className="max-w-4xl mx-auto relative">
          <img src={`${baseUrl}/assets/4.0.png`} alt="Artist Dangdut Show" />
          <motion.img
            initial={{ opacity: 0, y: -20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.2 }}
            src={`${baseUrl}/assets/4.1.png`} alt="Copy Kontent Dangdut" className="absolute bottom-[45%]" />
          <div className="items-center justify-center hidden xs:flex">
            <div className="bg-[#e2c15c] rounded-lg p-8 absolute bottom-0 max-w-3xl ">
              <p className="text-base md:text-xl font-medium text-center">Kelas dangdut di masyarakat semakin tinggi seiring diterimanya genre musik ini di sejumlah stasiun televisi nasional.
                Beragam kontes pencarian bakat pun digelar pada awal 2000-an hingga kini yang menyedot perhatian publik dan sekaligus melahirkan bintang dangdut top.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col w-full space-y-4 py-12">
          <p className="text-4xl xl:text-5xl font-semibold text-[#9955a5]">Apa Saja?</p>
          <p className="text-lg xl:text-2xl tracking-wide text-gray-600">Berikut beberapa contohnya:</p>
        </div>
        <div className="max-w-4xl mx-auto relative space-y-8">
          <div className="flex flex-col xs:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: 0.2 }}
            >
              <img src={`${baseUrl}/assets/4.2.png`} alt="KDI" />
              <div>
                <p className="text-center font-semibold text-[#9955a5] text-2xl xl:text-3xl">Kontes Dangdut Indonesia</p>
                <p className="text-center text-base xl:text-xl tracking-wide text-gray-600">MNC TV (2004 - Sekarang)</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: 0.4 }}
            >
              <img src={`${baseUrl}/assets/4.3.png`} alt="KDI" />
              <div>
                <p className="text-center font-semibold text-[#9955a5] text-2xl xl:text-3xl">Kontes Dangdut Indonesia</p>
                <p className="text-center text-base xl:text-xl tracking-wide text-gray-600">MNC TV (2004 - Sekarang)</p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col xs:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: 0.6 }}
            >
              <img src={`${baseUrl}/assets/4.4.png`} alt="KDI" />
              <div>
                <p className="text-center font-semibold text-[#9955a5] text-2xl xl:text-3xl">Kontes Dangdut Indonesia</p>
                <p className="text-center text-base xl:text-xl tracking-wide text-gray-600">MNC TV (2004 - Sekarang)</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: 0.8 }}>
              <img src={`${baseUrl}/assets/4.5.png`} alt="KDI" />
              <div>
                <p className="text-center font-semibold text-[#9955a5] text-2xl xl:text-3xl">Kontes Dangdut Indonesia</p>
                <p className="text-center text-base xl:text-xl tracking-wide text-gray-600">MNC TV (2004 - Sekarang)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
