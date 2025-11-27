"use client";
import { motion, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";

export function CustomImageB() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const brandsRef = useRef(null);
  const questionRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const cardInView = useInView(cardRef, { once: true, amount: 0.2 });
  const brandsInView = useInView(brandsRef, { once: true, amount: 0.2 });
  const questionInView = useInView(questionRef, { once: true, amount: 0.2 });

  // Animation variants for reusable animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="relative flex flex-col font-sora items-center overflow-hidden bg-cover"
    >
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#070419]" />
      <motion.div
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInLeft}
        className="absolute size-240 blur-[10rem] bottom-80 bg-linear-to-b to-40% from-purple-600 to-pink-600 rounded-full right-20"
      />
      <motion.div
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInLeft}
        className="absolute size-200 blur-[8rem] bottom-80 bg-red-600 rounded-full right-20"
      />
      <motion.div
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInLeft}
        className="absolute size-160 blur-3xl bottom-80 bg-linear-to-b from-red-600 to-yellow-600 rounded-full right-80"
      />
      <div className="relative noise2 w-full">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={heroRef}
            className="w-full flex items-center justify-end relative"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.img
              src={'/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/2.1.png'}
              alt="Child with Phone"
              className=""
              variants={fadeInRight}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <motion.div
              className="absolute w-3/4 lg:w-1/2 left-0 top-4 sm:top-20 px-4 lg:px-0"
              variants={fadeInLeft}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#ffc600]"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Beragam Bahaya
                Mengintai Anak
                di Ruang Digital
              </motion.div>
              <motion.div
                className="text-lg sm:text-xl lg:text-2xl text-white font-medium mt-10"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Anak-anak harus dilindungi di ruang digital. Sebab, ada banyak bahaya yang mengintai
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto -mt-24 relative mb-0 md:mb-20 lg:mb-28">
          {/* Mobile */}
          <motion.div
            ref={cardRef}
            className="lg:hidden flex flex-col items-center justify-center mt-10 gap-12"
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col md:flex-row w-full"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <motion.div
                className="space-y-4 flex flex-col p-8 bg-black/20 backdrop-blur-xl relative w-full hover:bg-black/30 transition-all duration-300"
                whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <motion.div
                  className="absolute right-0 bottom-0 flex items-center justify-center z-10 w-60 md:w-[16rem]"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img src={'/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/2.2.png'} alt="" className="w-full " />
                  <div className="text-4xl font-bold absolute text-white text-center">5.5jt +</div>
                </motion.div>
                <motion.div variants={fadeInLeft} transition={{ duration: 0.5, delay: 0.3 }}>
                  <div className="text-3xl w-[50%] md:w-auto font-bold text-[#ffc600] mt-4 relative z-10">
                    Pornografi anak
                  </div>
                  <div className="text-white w-[60%] md:w-[70%] text-base md:text-2xl font-medium relative z-10">
                    Lebih dari
                    5,5 juta kasus di Indonesia dalam 4 tahun terakhir
                  </div>
                  <div className="text-white">(data NCMEC)</div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col md:flex-row w-full"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <motion.div
                className="space-y-4 p-8 bg-black/20 backdrop-blur-xl relative w-full hover:bg-black/30 transition-all duration-300"
                whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <motion.div
                  className="absolute right-0 bottom-0 flex items-center justify-center z-10 w-60 md:w-[16rem]"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <img src={'/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/2.3.png'} alt="" className="w-full " />
                  <div className="text-4xl font-bold absolute text-white text-center">48%</div>
                  <div className="bg-linear-to-t to-50% from-black absolute left-0 right-0 bottom-0 top-0"></div>
                </motion.div>
                <motion.div variants={fadeInLeft} transition={{ duration: 0.5, delay: 0.5 }}>
                  <div className="text-3xl w-[50%] md:w-auto font-bold text-[#ffc600] mt-4 relative z-10">
                    Perundungan daring
                  </div>
                  <div className="text-white w-[60%] md:w-[70%] text-base md:text-2xl font-medium relative z-10">
                    anak-anak di Indonesia pernah mengalami
                  </div>
                  <div className="text-white">(data NCMEC)</div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col md:flex-row w-full"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <motion.div
                className="space-y-4 p-8 bg-black/20 backdrop-blur-xl relative w-full hover:bg-black/30 transition-all duration-300"
                whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <motion.div
                  className="absolute right-0 bottom-0 flex items-center justify-center z-10 w-60 md:w-[16rem]"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <img src={'/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/2.4.png'} alt="" className="w-full " />
                  <div className="bg-linear-to-t to-80% from-black/50 absolute left-0 right-0 bottom-0 top-0"></div>
                  <div className="text-4xl font-bold absolute text-white text-center pt-20">80rb</div>
                </motion.div>
                <motion.div variants={fadeInLeft} transition={{ duration: 0.5, delay: 0.7 }}>
                  <div className="text-3xl w-[50%] md:w-auto font-bold text-[#ffc600] mt-4 relative z-10">
                    Judi online
                  </div>
                  <div className="text-white w-[60%] md:w-[70%] text-base md:text-2xl font-medium relative z-10">
                    anak usia di bawah 10 tahun terpapar judi online
                  </div>
                  <div className="text-white">(data NCMEC)</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Desktop */}
          <motion.div
            ref={brandsRef}
            className="lg:grid hidden grid-cols-3 gap-6 h-full"
            initial="hidden"
            animate={brandsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col relative bg-black/20 backdrop-blur-xl hover:bg-black/30 transition-all duration-300"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <motion.div
                className="space-y-4 h-full "
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="w-full -mt-28 relative"
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img src={'/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/2.2.png'} alt="" className="object-fit" />
                  <motion.div
                    className="w-full h-full absolute bottom-4 flex items-end justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="text-4xl font-bold text-white text-center">5.5jt +</div>
                  </motion.div>
                </motion.div>
                <div className="px-10">
                  <motion.div
                    className="text-3xl font-bold text-[#ffc600] mt-4"
                    variants={fadeInLeft}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Pornografi anak
                  </motion.div>
                  <motion.div
                    className="text-white text-2xl font-medium pt-2"
                    variants={fadeInLeft}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Lebih dari
                    5,5 juta kasus di Indonesia dalam 4 tahun terakhir
                  </motion.div>
                  <motion.div
                    className="text-white pt-20 pb-6"
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    (data NCMEC)
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex h-full flex-col relative bg-black/20 backdrop-blur-xl hover:bg-black/30 transition-all duration-300"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <motion.div
                className="space-y-4 h-full "
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  className="w-full -mt-28 relative"
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <img src={'/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/2.3.png'} alt="" className="object-fit" />
                  <motion.div
                    className="w-full h-full absolute bottom-4 flex items-end justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <div className="text-4xl font-bold text-white text-center">48%</div>
                  </motion.div>
                </motion.div>
                <div className="px-10">
                  <motion.div
                    className="text-3xl font-bold text-[#ffc600] mt-4"
                    variants={fadeInLeft}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Perundungan daring
                  </motion.div>
                  <motion.div
                    className="text-white text-2xl font-medium pt-2"
                    variants={fadeInLeft}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    anak-anak di Indonesia pernah mengalami
                  </motion.div>
                  <motion.div
                    className="text-white pt-20 pb-6"
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    (data NCMEC)
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col relative bg-black/20 backdrop-blur-xl hover:bg-black/30 transition-all duration-300"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
            >

              <motion.div
                className="space-y-4 h-full"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  className="w-full -mt-28 relative"
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <img src={'/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/2.4.png'} alt="" className="object-fit" />
                  <motion.div
                    className="w-full h-full absolute bottom-4 flex items-end justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <div className="text-4xl font-bold text-white text-center">80rb</div>
                  </motion.div>
                </motion.div>
                <div className="px-10">
                  <motion.div
                    className="text-3xl font-bold text-[#ffc600] mt-4"
                    variants={fadeInLeft}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    Judi online
                  </motion.div>
                  <motion.div
                    className="text-white text-2xl font-medium pt-10"
                    variants={fadeInLeft}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    anak usia di bawah 10 tahun terpapar judi online
                  </motion.div>
                  <motion.div
                    className="text-white pt-20 pb-6"
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    (data Kemkomdigi)
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={questionRef}
        className="absolute bottom-0 pt-10 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={questionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <motion.img
          src={`/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
          initial={{ filter: "blur(4px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
}
