"use client";
import { baseUrl } from "@/constants/meta";
import { useCanAnimate } from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export function CustomImageB() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <div className="relative flex flex-col items-center overflow-hidden ">
      <div
        className="relative flex h-full w-full justify-center bg-cover bg-no-repeat text-center pt-10 xl:pt-32 bg-[center_top_-5rem] xl:bg-[center_top_-20rem]"
        style={{ backgroundImage: `url(${baseUrl}/assets/2.0.1.png)` }}
      >
        <div className="absolute w-full h-[50%] bg-gradient-to-b from-[#f0eff0] top-0" />
        <div className="z-10 w-full">
          <div className="max-w-4xl mx-auto relative space-y-6 inset-x-0 z-10 mb-4 text-center font-sora text-neutral-950 flex flex-col justify-center items-center">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="px-4 py-2 rounded-xl break-words w-fit text-3xl md:text-7xl font-bold">
              Bukan Sekadar Kuliner Kuah-kuahan Biasa
            </motion.h3>
            <motion.p className="text-xl xl:text-3xl xl:px-3 px-2">
              Soto sendiri pada dasarnya menggunakan bumbu utama sederhana. Akan tetapi, ketika memasuki wilayah-wilayah Indonesia, soto menjadi kaya dengan bumbu seperti:
            </motion.p>
          </div>
          <div className="h-[50rem] xl:h-[70rem] relative flex flex-col items-center justify-center max-w-4xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01], delay: 0 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/2.1.png`} alt="Daun Jeruk" className="absolute w-[20%] sm:w-[15%] xl:w-auto top-[1%] xl:top-0" />
            <motion.img
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01], delay: .2 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/2.2.png`} alt="Kunyit" className="absolute w-[40%] sm:w-[30%] xl:w-auto top-[12%] xl:top-[20%] left-4 sm:left-[10%] xl:left-[-4rem]" />
            <motion.img
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01], delay: .4 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/2.3.png`} alt="Lengkuas" className="absolute w-[40%] sm:w-[30%] xl:w-auto top-[18%] xl:top-[30%] right-[10%] sm:right-[20%] xl:right-5" />
            <motion.img
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: .6, ease: [0, 0.71, 0.2, 1.01], delay: .6 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/2.4.png`} alt="Kencur" className="absolute w-[40%] sm:w-[30%] xl:w-auto xl:bottom-[20%] xl:top-auto sm:top-[30%] top-[25%] left-4 sm:left-[15%] xl:left-0" />
            <motion.img
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: .4, ease: [0, 0.71, 0.2, 1.01], delay: .8 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/2.5.png`} alt="Rempah Lain" className="absolute w-[40%] sm:w-[30%] xl:w-auto xl:bottom-[25%] xl:top-auto sm:top-[40%] top-[32%] sm:right-[10%] xl:right-0 right-4" />
          </div>
          <div className="flex flex-col max-w-7xl mx-auto z-10 relative">
            <div className="xl:h-[20rem]" />
            <div className="relative flex flex-col-reverse md:items-center justify-center">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.6 }}
                src={`${baseUrl}/assets/2.6.png`} className="w-full" alt="Chef" />
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="md:absolute top-[23%] max-w-sm px-4 xl:px-0">
                <div className="absolute top-1 max-w-sm left-[-20px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-orange-500" />
                <p

                  className="text-left font-sora text-black md:text-white font-medium text-lg xl:text-2xl relative">Pakar kuliner nusantara, <br />
                  <b>William Wongso</b> mengatakan jika
                  menyebut soto wajib menambahkan
                  asal daerahnya, misalnya: soto Kudus,
                  soto Banjar, soto Betawi, dan masih
                  banyak lagi</p>
              </motion.div>
            </div>
            <img src={`${baseUrl}/assets/footer.png`} className="z-50 absolute hidden sm:block bottom-0 h-fit w-fit mx-auto" alt="Footer" />
          </div>
        </div>
      </div>
    </div>
  );
}
