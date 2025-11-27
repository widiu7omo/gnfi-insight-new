"use client";

import { motion, type Variants } from "motion/react";

export function CustomImageRagamMerek() {
  const variants: Variants = {
    pOpen: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: { duration: .4, delay: 0.2 },
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
      y: 20
    },
    close: {
      opacity: 0,
      y: 0
    }
  };

  const carsVariant: Variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
        duration: 3
      }
    },
    close: {
      opacity: 0
    }
  }

  const carVariant: Variants = {
    open: {
      opacity: 1,
      y: 20, transition: {
        duration: .5
      }
    },
    close: {
      opacity: 0,
      y: 0
    }
  }

  return (
    <div className="relative">
      <section
        id="section-1"
        className="bg-[#3b1312] -mt-1 overflow-clip space-y-14 pb-10"
      >
        <div className="relative flex items-start justify-center max-w-4xl mx-auto z-10">
          <div className="w-full bg-no-repeat bg-size-[cover,contain] xl:bg-size-[cover,auto] bg-position-[center_top] relative bg-blend-multiply">
            <motion.p viewport={{ once: true }} className="text-center md:text-4xl text-xl text-white font-extrabold px-4 md:px-10 pt-6" variants={paragraphVariant} initial="close" whileInView="open">
              Sejak kapan gelombang mobil China menyerbu Indonesia?
            </motion.p>
            <div className="relative flex items-center justify-center">
              <motion.img viewport={{ once: true }}
                variants={variants}
                initial="pClose"
                whileInView="pOpen"
                style={{ originX: 2, originY: 0 }}
                src={`/assets/wara-wiri-mobil-china-di-indonesia/1.0.png`}
                alt="Car Wuling"
                className="z-50 relative"
              />
              <motion.img viewport={{ once: true }}
                variants={flagVariant}
                initial="close"
                whileInView="open"
                src={`/assets/wara-wiri-mobil-china-di-indonesia/1.1.png`}
                alt="Flag"
                className="absolute"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 md:space-x-8 px-0 md:px-4 w-full">
              <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex-1 flex flex-col items-center sm:items-start">
                <motion.img viewport={{ once: true }} initial={{ opacity: 0, x: 0 }} transition={{ delay: .2 }} whileInView={{ opacity: 1, x: 20 }} src={`/assets/wara-wiri-mobil-china-di-indonesia/1.2.png`} alt="Wuling Logo" />
                <p className="text-lg sm:text-2xl font-bold text-[#f19445]">
                  Wuling adalah pionirnya.{" "}
                </p>
                <p className="text-base sm:text-xl font-medium text-white text-center sm:text-start">
                  Mereka hadir sejak 2017 dan berhasil masuk ke deretan 10 besar
                  mobil terlaris di Indonesia hanya dalam waktu tujuh tahun
                </p>
              </motion.div>
              <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .1 }} className="flex-1 pt-8 sm:pt-[6.2rem] flex flex-col items-center sm:items-start">
                <motion.img viewport={{ once: true }} initial={{ opacity: 0, x: 20 }} transition={{ delay: .2 }} whileInView={{ opacity: 1, x: 0 }} src={`/assets/wara-wiri-mobil-china-di-indonesia/1.3.png`} alt="Chery Logo" />
                <p className="text-base sm:text-xl font-medium text-white text-center sm:text-start">
                  Sebelumnya Chery juga pernah hadir di Indonesia, namun
                  hengkang pada 2013 karena penjualannya terus melandai
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto z-20 relative">
          <motion.p viewport={{ once: true }} className="text-center text-3xl text-white font-extrabold px-4 md:px-0" variants={paragraphVariant} initial="close" whileInView="open">
            Kini, semakin banyak produsen mobil China yang masuk ke Indonesia:
          </motion.p>
          <motion.div viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4" variants={carsVariant} initial="close" whileInView="open">
            <motion.div viewport={{ once: true }} className="relative flex items-center justify-center" variants={carVariant}>
              <div className="absolute rounded-full right-[15%] size-40 bg-[#63302f] shadow-lg" />
              <img
                src={`/assets/wara-wiri-mobil-china-di-indonesia/1.4.png`}
                alt="Velos"
                className="relative"
              />
              <p className="text-white absolute bottom-[5%] font-medium text-xl">
                Wuling
              </p>
            </motion.div>
            <motion.div viewport={{ once: true }} className="relative flex items-center justify-center" variants={carVariant}>
              <div className="absolute rounded-full right-[15%] size-40 bg-[#63302f] shadow-lg" />
              <img
                src={`/assets/wara-wiri-mobil-china-di-indonesia/1.5.png`}
                alt="Velos"
                className="relative"
              />
              <p className="text-white absolute bottom-[5%] font-medium text-xl">
                Chery
              </p>
            </motion.div>
            <motion.div viewport={{ once: true }} className="relative flex items-center justify-center" variants={carVariant}>
              <div className="absolute rounded-full right-[15%] size-40 bg-[#63302f] shadow-lg" />
              <img
                src={`/assets/wara-wiri-mobil-china-di-indonesia/1.6.png`}
                alt="Velos"
                className="relative"
              />
              <p className="text-white absolute bottom-[-5%] font-medium text-xl text-center">
                Great Wall Motor <br />
                (GWM)
              </p>
            </motion.div>
            <motion.div viewport={{ once: true }} className="relative flex items-center justify-center" variants={carVariant}>
              <div className="absolute rounded-full right-[15%] size-40 bg-[#63302f] shadow-lg" />
              <img
                src={`/assets/wara-wiri-mobil-china-di-indonesia/1.7.png`}
                alt="Velos"
                className="relative"
              />
              <p className="text-white absolute bottom-[-5%] font-medium text-xl text-center">
                Build Your Dream <br />
                (BYD)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="absolute -top-20 right-[-20%] h-160 w-full bg-[radial-gradient(ellipse_at_right,var(--tw-gradient-stops))] from-[#b22025] from-0% to-[#3b1312] to-70% z-0" />
      <div className="relative z-0 hidden md:block">
        <div className="absolute bottom-140 h-80 w-full bg-linear-to-b from-[#8a201d] from-0% to-[#3b1312] to-70% z-10" />
        <div className="absolute bottom-140 h-80 w-full bg-linear-to-l from-[#3b1312]/0 from-0% to-130% to-[#3b1312] z-10" />
      </div>
    </div>
  );
}
