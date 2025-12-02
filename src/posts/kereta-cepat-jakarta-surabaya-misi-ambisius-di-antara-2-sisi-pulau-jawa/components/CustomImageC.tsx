import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function CustomImageC() {
  // References for animation triggers
  const pinkSectionRef = useRef(null);
  const redSectionRef = useRef(null);
  const titleRef = useRef(null);

  // Check if elements are in view
  const isPinkSectionInView = useInView(pinkSectionRef, { once: true, amount: 0.3 });
  const isRedSectionInView = useInView(redSectionRef, { once: true, amount: 0.3 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      className="relative flex font-sora flex-col items-center overflow-hidden bg-position-[center_top_-75rem] md:bg-position-[center_top_-65rem] bg-linear-to-b from-black to-80% to-[#070419] bg-no-repeat md:pb-20 pt-4 md:pt-20"
      style={{ backgroundImage: `url("/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/3.1.jpg")` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute h-40 w-full top-0 bg-linear-to-b from-[#f6fafe]"></div>
      <div className="absolute h-120 z-0 w-full bottom-0 bg-linear-to-t from-[#353748]"></div>
      <div className="max-w-4xl mx-auto pb-0 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl text-black lg:text-5xl font-bold text-center pb-10 sm:pb-16 lg:pb-20 leading-tight! relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={isTitleInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Kereta Cepat Jakarta-Surabaya Calon Moda Transportasi <motion.span
            className="px-1 bg-[#fcd3d8] rounded-xl"
            initial={{ backgroundColor: "#ffffff" }}
            animate={isTitleInView ? { backgroundColor: "#fcd3d8" } : { backgroundColor: "#ffffff" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >Andalan Baru?</motion.span>
        </motion.div>
        <div className="h-80 sm:h-120 lg:h-160"></div>
        <motion.div
          ref={pinkSectionRef}
          className="bg-[#f9e2e1] rounded-t-4xl p-4 sm:p-8 lg:p-16 pb-8 sm:pb-12 lg:pb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isPinkSectionInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row relative">
            <div className="flex-1 lg:absolute lg:left-0 lg:w-1/2 mb-6 lg:mb-0">
              <div className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-medium">Jawa Timur adalah pasar potensial  bagi kereta cepat Jakarta-Surabaya. Tingginya arus mudik
                ke sana adalah salah satu buktinya</div>
            </div>
            <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-700 mb-4 lg:absolute lg:left-0 lg:bottom-0">Sumber: Kemenhub</div>
            <div className="lg:pl-28">
              <motion.img
                src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/3.2.png'}
                className="w-full max-w-md mx-auto lg:max-w-none"
                alt="Bar Chart"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isPinkSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={redSectionRef}
          className="bg-[#ffb1b6] rounded-4xl p-4 sm:p-8 lg:p-16 -mt-4 sm:-mt-6 lg:-mt-8 relative z-10"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={isRedSectionInView ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
        >
          <div className="flex flex-col lg:flex-row relative">
            <div className="flex-1 lg:absolute lg:left-0 lg:w-1/2 mb-6 lg:mb-0">
              <div className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-medium">Tak hanya mudik,
                masyarakat bisa pula menggunakan kereta cepat untuk keperluan bisnis dan wisata
                seperti halnya Whoosh</div>
            </div>
            <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-700 mb-4 lg:absolute lg:left-0 lg:bottom-20">Sumber: Populix</div>
            <div className="lg:pl-28">
              <motion.img
                src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/3.3.png'}
                className="pt-4 sm:pt-8 lg:pt-20 w-full max-w-md mx-auto lg:max-w-none"
                alt="Bar Chart"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isRedSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 hidden md:block pt-10 z-50 mx-auto max-w-4xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <motion.img
          src={`/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
          initial={{ filter: "blur(4px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
}
