"use client";
import { motion } from "motion/react";

export function CustomImageSampahDariRumah() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute bg-linear-to-b from-[#0E4029] top-0 w-full h-[10%] z-10" />
      <div
        className="relative flex h-full w-full flex-col justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: `url(/assets/mengurai-masalah-sampah-dan-langkah-untuk-mengatasinya/3.2.png)` }}
      >
        <div className="relative w-full">
          <img
            src={`/assets/mengurai-masalah-sampah-dan-langkah-untuk-mengatasinya/3.1.png`}
            alt="Header"
            className="top-0 z-10 max-h-80 min-h-37.5 w-full object-cover"
          />
          <div className="absolute left-1/2 top-[10%] z-20 w-full max-w-4xl -translate-x-1/2 lg:top-[20%]">
            <div className="flex items-center justify-between px-4 lg:px-0">
              <div className="text-left md:space-y-4">
                <motion.h3
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0, duration: 0.6 }}
                  className="text-left font-sora text-lg font-bold text-white md:text-4xl md:font-extrabold lg:text-5xl"
                >
                  Mengolah Sampah <br />
                  dari Rumah
                </motion.h3>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="inline-block whitespace-nowrap rounded-xl bg-[#D6D63A] px-1 py-1 text-left font-sora text-[14px] font-semibold text-[#104A34] md:px-2 md:py-2 md:text-3xl"
                >
                  Bagaimana Caranya?
                </motion.p>
              </div>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`/assets/mengurai-masalah-sampah-dan-langkah-untuk-mengatasinya/3.3.png`}
                alt="Sampah"
                className="lg:w-[40%] h-auto w-[30%] md:w-[35%]"
              />
            </div>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-2 mt-[3%] px-4 py-2 text-center font-sora text-base font-semibold text-[#123524] md:text-4xl lg:mt-[5%]"
            >
              Masyarakat dapat mengolah sampah <br /> di rumah berdasarkan
              kategorinya:
            </motion.p>
          </div>
        </div>
        <div className="relative z-20 mx-auto mt-[10%] w-full max-w-4xl">
          <div className="flex flex-row items-center justify-center gap-x-4 px-4 md:gap-x-6 lg:px-0">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              src={`/assets/mengurai-masalah-sampah-dan-langkah-untuk-mengatasinya/3.4.png`}
              alt="Sampah organik"
              className="my-2 h-auto w-[23%] object-contain md:my-4"
            />
            <div className="space-y-1 md:space-y-6">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-left font-sora text-lg font-semibold text-[#123524] md:text-[2.4rem] lg:text-5xl"
              >
                Sampah organik
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-left font-sora text-base font-medium text-[#3E7B27] md:text-3xl md:font-semibold"
              >
                Contohnya daun kering dan sisa makanan
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-left font-sora text-base md:text-3xl text-black"
              >
                Tidak perlu pengolahan khusus, namun juga dapat dijadikan kompos
              </motion.p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-x-4 px-4 md:gap-x-6 lg:px-0">
            <div className="space-y-1 md:space-y-6">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-left font-sora text-lg font-semibold text-[#123524] md:text-[2.4rem] lg:text-5xl"
              >
                Sampah plastik dan kardus
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-left font-sora text-base md:text-3xl text-black"
              >
                Sampah jenis ini dapat dikumpulkan sesuai jenisnya, lalu dijual
              </motion.p>
            </div>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              src={`/assets/mengurai-masalah-sampah-dan-langkah-untuk-mengatasinya/3.5.png`}
              alt=" Sampah plastik dan kardus"
              className="my-2 h-auto w-[23%] object-contain md:my-4"
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-4 px-4 md:space-x-6 lg:px-0">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              src={`/assets/mengurai-masalah-sampah-dan-langkah-untuk-mengatasinya/3.6.png`}
              alt="Sampah lainnya"
              className="my-2 h-auto w-[23%] object-contain md:my-4"
            />
            <div className="space-y-1 md:space-y-6">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-left font-sora text-lg font-semibold text-[#123524] md:text-[2.4rem] lg:text-5xl"
              >
                Sampah lainnya
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-left font-sora text-base md:text-3xl text-black"
              >
                Sampah seperti minyak jelantah juga bisa dikumpulkan, lalu
                dijual atau diolah. Salah satu tempat yang bisa menampung minyak
                jelantah adalah SPBU Pertamina{" "}
              </motion.p>
            </div>
          </div>
        </div>
        <div className="relative bottom-0">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            src={`/assets/mengurai-masalah-sampah-dan-langkah-untuk-mengatasinya/3.7.png`}
            alt="footer"
            className="top-0 z-10 min-h-112 w-full object-cover md:min-h-128 lg:max-h-[10%]"
          />
          <div className="absolute inset-0 z-20 mx-auto flex max-w-4xl flex-row items-end justify-between px-4">
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="md: mb-[10%] mb-[6%] w-[60%] text-left font-sora text-base font-normal text-[#D6D63A] md:text-3xl md:font-semibold lg:mb-[12%]"
            >
              Pengelolaan sampah dari tingkat rumah tangga akan mencegah
              kerusakan lingkungan. Pengelolaan sampah yang baik ini akan
              mengurangi kemungkinan adanya kerusakan lingkungan yang lebih
              lanjut, khususnya laut
            </motion.p>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={`/assets/mengurai-masalah-sampah-dan-langkah-untuk-mengatasinya/3.8.png`}
              alt="Sampah"
              className="mr-0 h-auto w-[50%] object-contain lg:mr-[-10%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
