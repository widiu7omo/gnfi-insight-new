"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageBangSampah() {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative flex h-full w-full flex-col justify-center bg-cover bg-center pt-12 text-center md:pt-24"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.2.png)` }}
      >
        <div className="z-20 mx-auto mb-3 w-full space-y-2 px-4 md:mb-8 md:max-w-5xl md:space-y-6 lg:px-0">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="w-full text-center font-sora text-2xl font-bold text-[#104A34] md:text-4xl md:font-extrabold lg:text-5xl"
          >
            Bank Sampah <br /> Mandiri Cilacap
          </motion.h3>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mx-auto mb-0 w-full py-2 text-center font-sora text-lg font-semibold text-[#123524] md:w-[60%] md:text-4xl lg:pb-8"
          >
            Inisiatif cemerlang di tengah peliknya masalah persampahan
          </motion.p>
        </div>
        <div className="h-full w-full md:bg-[#104A34] md:mt-0 md:py-0 lg:px-0 md:px-4 lg:px-0">
          <div className="overflow-hidden md:overflow-visible z-20 mx-auto flex flex-col space-y-8 md:max-w-4xl md:flex-row md:items-center md:space-x-8 md:space-y-0">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/4.1.png`}
              alt="Poster"
              className="-mb-8 mt-4 w-full object-contain md:mb-0 md:-mt-8 md:w-2/5"
            />
            <div className="w-full space-y-2 md:w-3/5 md:space-y-6 bg-[#104A34] py-12 md:py-0 ">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="px-4 md:px-0 text-left font-sora text-lg font-bold text-white md:mr-auto md:text-2xl lg:py-4 w-full lg:w-[90%]"
              >
                Didirikan oleh M. Nurhidayat pada tahun 2011 lalu
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="px-4 md:px-0 text-left font-sora text-lg text-white md:ml-auto md:text-2xl lg:py-4"
              >
                Awalnya, ia hanya mengajak teman tetangga untuk mengenalkan bank
                sampah di wilayahnya
              </motion.p>
            </div>
          </div>
        </div>
        <div className="z-20 my-4 flex flex-col items-center px-4 md:mx-auto md:max-w-4xl md:flex-row lg:px-0">
          <div className="my-8 w-full space-y-2 md:my-12 md:w-1/2 md:space-y-6">
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="px-4 text-left font-sora text-lg font-bold text-[#104A34] md:px-0 md:text-2xl"
            >
              Mulai menerima sampah dari masyarakat pada Agustus 2012
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="px-4 text-left font-sora text-lg md:px-0 md:text-2xl"
            >
              Sampah dipilah untuk memisahkan mana yang akan diolah, serta mana
              yang dijual
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="px-4 text-left font-sora text-lg md:px-0 md:text-2xl"
            >
              Bank Sampah Mandiri Cilacap turut memberi edukasi dan
              memperkenalkan konsep pengelolaan sampah yang baik ke masyarakat.
              Salah satunya lewat sekolah lingkungan yang yang bernama Akademi
              Jejak Jelantah
            </motion.p>
          </div>
          <div className="relative mx-auto my-0 flex w-full justify-center md:w-1/2">
            <div className="my-24 flex aspect-square w-[80%] items-center justify-center rounded-full bg-[#D6D63A] md:my-0 md:w-full">
              <div className="absolute top-0 z-20 mx-auto flex flex-col items-center justify-center md:-top-36">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  src={`${baseUrl}/assets/4.2.png`}
                  alt="Dokumentasi kegiatan"
                  className="w-[70%] object-contain md:w-[85%]"
                />
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  src={`${baseUrl}/assets/4.3.png`}
                  alt="Dokumentasi kegiatan"
                  className="w-[70%] object-contain pb-20 md:w-[85%]"
                />
              </div>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={`${baseUrl}/assets/4.7.png`}
                alt="Sampah"
                className="absolute left-1/2 top-1/4 z-50 w-[40%] -translate-x-1/2 -translate-y-1/2 transform object-contain md:w-[45%]"
              />
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-[#D6D63A]">
          <div className="relative z-20 mx-auto flex flex-col md:max-w-4xl md:flex-row">
            <div className="relative w-full md:w-[55%]">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                src={`${baseUrl}/assets/4.5.png`}
                alt="Pengolahan sampah"
                className="h-full w-full object-cover"
              />
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                src={`${baseUrl}/assets/4.6.png`}
                alt="Pengolahan sampah"
                className="z-100 absolute -bottom-8 right-4 w-[40%] object-contain"
              />
            </div>
            <div className="w-full px-4 text-left md:w-[45%] md:px-0">
              <div className="-rotate-[0.025rad]">
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="z-50 -mt-[10%] inline-block whitespace-nowrap bg-[#104A34] px-4 py-2 font-sora text-lg font-semibold text-white md:text-3xl"
                >
                  HASILNYA
                </motion.p>
              </div>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="ml-0 mt-2 pb-4 text-left font-sora text-lg text-[#104A34] md:ml-6 md:mt-4 md:text-2xl"
              >
                masalah sampah tertangani dan ada beragam produk yang
                dihasilkan, mulai dari biodiesel dari minyak jelantah, hingga
                kerajinan dari plastik dan kardus
              </motion.p>
            </div>
          </div>
        </div>
        <div
          className="h-full w-full bg-cover bg-center py-4 md:py-12"
          style={{ backgroundImage: `url(${baseUrl}/assets/4.8.png)` }}
        >
          <div className="z-30 mx-auto flex w-full max-w-full flex-col px-4 md:max-w-4xl md:flex-row md:px-0">
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col justify-center w-full bg-[#D6D63A] px-4 py-2 text-left font-sora text-lg font-semibold text-[#104A34] md:w-1/2 md:text-2xl"
            >
              Pada 2024, <br />
              <span className="font-normal">
                Bank Sampah Mandiri Cilacap berhasil meraih penghargaan dari
                Kementerian Lingkungan Hidup dan Kehutanan (KLKH) pada Juli 2024
                lalu
              </span>
            </motion.p>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
              src={`${baseUrl}/assets/4.9.png`}
              alt="Foto bersama"
              className="w-full object-contain md:w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
