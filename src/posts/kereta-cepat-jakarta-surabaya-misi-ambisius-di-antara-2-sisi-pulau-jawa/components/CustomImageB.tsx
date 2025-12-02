import { motion, useInView } from "motion/react";
import { useState, useEffect, useRef, ReactNode } from "react";

export function CustomImageB() {
  // Refs for scroll animations
  const titleRef = useRef(null);
  const mapRef = useRef(null);
  const landRef = useRef(null);
  const airRef = useRef(null);
  const seaRef = useRef(null);

  // InView states for animations
  const titleInView = useInView(titleRef, { once: true });
  const mapInView = useInView(mapRef, { once: true });
  const landInView = useInView(landRef, { once: true });
  const airInView = useInView(airRef, { once: true });
  const seaInView = useInView(seaRef, { once: true });

  // Component for displaying vehicle transportation options with responsive design

  return (
    <motion.div
      className="relative flex flex-col font-sora items-center overflow-hidden bg-cover bg-[#f0eada] pb-0 py-10 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute rounded-full top-[50%] h-full w-full bg-[#7b090a]"></div>
      <div className="max-w-4xl mx-auto md:pb-12 px-4">
        <motion.div
          ref={titleRef}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#ad1618] pb-12 sm:pb-16 lg:pb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Jakarta-Surabaya, Bisa Ditempuh Pakai Apa?
        </motion.div>
        <motion.img
          ref={mapRef}
          src={`/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/2.1.png`}
          alt="Java"
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mx-0 sm:mx-8 lg:mx-16 -mt-12 sm:-mt-16 lg:-mt-20"
          initial={{ opacity: 0 }}
          animate={mapInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            ref={landRef}
            className="md:col-span-2 bg-white shadow-xl shadow-black/5 rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pt-8 sm:pt-10 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={landInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -top-6 left-0 px-4 sm:px-6 tracking-wide py-2 text-lg sm:text-xl font-bold text-white bg-red-600 rounded-2xl border-4 border-white"
              initial={{ opacity: 0, x: -20 }}
              animate={landInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Via Darat
            </motion.div>
            { /* Kendaraan Pribadi */}
            <motion.div
              className="flex flex-col text-black sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src={`/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/2.2.png`}
                alt="Kendaraan Pribadi"
                className="w-full sm:w-[30%] lg:w-[25%] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
              <motion.div
                className="flex flex-col items-start space-y-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold">Kendaraan Pribadi</div>
                <div className="flex items-center space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/clock.svg'} alt="Clock Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">10-12 jam</div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/wallet.svg'} alt="Wallet Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">Rp 1,2-1,3 juta (estimasi)</div>
                </div>
              </motion.div>
            </motion.div>
            {/* Bus */}
            <motion.div
              className="flex flex-col text-black sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src={`/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/2.3.png`}
                alt="Bus"
                className="w-full sm:w-[30%] lg:w-[25%] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
              <motion.div
                className="flex flex-col items-start space-y-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold">Bus</div>
                <div className="flex items-center space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/clock.svg'} alt="Clock Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">10-12 jam</div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/wallet.svg'} alt="Wallet Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">Rp 280 ribu - Rp 625 ribu</div>
                </div>
              </motion.div>
            </motion.div>
            {/* Kereta */}
            <motion.div
              className="flex flex-col text-black sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src={`/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/2.4.png`}
                alt="Kereta"
                className="w-full sm:w-[30%] lg:w-[25%] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
              <motion.div
                className="flex flex-col items-start space-y-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold">Kereta</div>
                <div className="flex items-center space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/clock.svg'} alt="Clock Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">7 jam 45 menit - 12 jam 8 menit</div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/wallet.svg'} alt="Wallet Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">Rp 104 ribu - Rp 2 jutaan</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            ref={airRef}
            className="bg-white mt-4 sm:mt-6 shadow-xl shadow-black/5 rounded-2xl space-y-4 sm:space-y-6 pt-8 sm:pt-10 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={airInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -top-6 left-0 px-4 sm:px-6 tracking-wide py-2 text-lg sm:text-xl font-bold text-white bg-[#102e50] rounded-2xl border-4 border-white"
              initial={{ opacity: 0, x: -20 }}
              animate={airInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Via Udara
            </motion.div>
            <motion.img
              src={`/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/2.5.png`}
              alt="Plane"
              className="scale-90 sm:scale-100 lg:scale-110 w-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={airInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            />
            <motion.div
              className="p-4 sm:p-6 lg:p-8 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={airInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/clock.svg'} alt="Clock Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">1.5 jam</div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/wallet.svg'} alt="Wallet Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">Mulai Rp967 ribu</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            ref={seaRef}
            className="bg-white mt-4 sm:mt-6 shadow-xl shadow-black/5 rounded-2xl pt-2 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={seaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="absolute z-10 -top-6 left-0 px-4 sm:px-6 tracking-wide py-2 text-lg sm:text-xl font-bold text-white bg-[#56b4ba] rounded-2xl border-4 border-white"
              initial={{ opacity: 0, x: -20 }}
              animate={seaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              Via Laut
            </motion.div>
            <motion.img
              src={`/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/2.6.png`}
              alt="Ship"
              className="scale-90 sm:scale-100 lg:scale-110 w-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={seaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            />
            <motion.div
              className="p-4 sm:p-6 lg:p-8 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={seaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/clock.svg'} alt="Clock Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">1 hari</div>
                </div>
                <div className="flex items-start space-x-2">
                  <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/wallet.svg'} alt="Wallet Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">
                    Rp 300 ribuan <br />
                    <small className="text-xs sm:text-sm lg:text-base font-normal">(kapal Pelni kelas ekonomi)</small>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 hidden md:block pt-10 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <motion.img
          src={`/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
          initial={{ filter: "blur(4px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
        ></motion.img>
      </motion.div>
    </motion.div>
  );
}
