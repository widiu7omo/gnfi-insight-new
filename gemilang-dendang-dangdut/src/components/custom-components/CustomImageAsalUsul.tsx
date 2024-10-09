"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageAsalUsul() {
  const variants = {
    pOpen: {
      opacity: 1, y: 0, transition: {
        staggerChildren: 0.2,
      },
    },
    pClose: { opacity: 0, y: 5 },
  }
  const childVariants = {
    pOpen: {
      opacity: 1, x: 0, transition: { duration: .3 }
    },
    pClose: { opacity: 0, x: -5, transition: { duration: .3 } },
  }
  const childLiVariants = {
    pOpen: {
      opacity: 1, x: 0, transition: { duration: .3 }
    },
    pClose: { opacity: 0, x: 20, transition: { duration: .3 } },
  }

  return (
    <section id="section-1" className="bg-[#fffcf3] -mt-1 overflow-clip ">
      <div className="relative flex items-start justify-center overflow-clip">
        <div
          className="w-full bg-no-repeat bg-[cover,contain] xl:bg-[cover,auto] bg-[center_top] relative bg-blend-multiply"
          style={{ backgroundImage: `url('${baseUrl}/assets/1.0.png')` }}
        >
          <div className="max-w-4xl mx-auto relative z-10 top-0 mb-[20rem]  sm:mb-0">
            <div className="space-y-0">
              <div className="relative flex flex-col items-center justify-center z-0">
                <div className="2xl:mt-[650px] xl:mt-[600px] lg:mt-[500px] md:mt-[600px] sm:mt-[350px] mt-[280px] relative z-10">
                  <motion.img
                    initial={{ opacity: 0, y: 5, x: 5 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    src={`${baseUrl}/assets/1.3.png`}
                    className="relative"
                    alt="Silas Papare"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    src={`${baseUrl}/assets/1.3.1.png`}
                    className="absolute top-0"
                    alt="Profil"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    src={`${baseUrl}/assets/1.3.2.png`}
                    className="absolute top-0"
                    alt="Title"
                  />
                </div>
                <div className="mt-[-80px] relative z-0">
                  <div className="relative opacity-0 sm:opacity-100">
                    <motion.img
                      initial={{
                        x: 40,
                        scaleY: 0.9,
                        scaleX: 0.9,
                        scaleZ: 0.9,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        scaleY: 1,
                        scaleX: 1,
                        scaleZ: 1,
                        opacity: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: 0, duration: 0.4 }}
                      src={`${baseUrl}/assets/1.4.png`}
                      className="top-0 "
                      alt="Paper Backgroud"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row absolute top-0 sm:top-[2rem]">
                    <motion.div
                      initial="pClose"
                      animate="pOpen"
                      variants={variants}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="flex-1 pl-[2rem] pt-[2rem] sm:pt-0">
                      <motion.p variants={childVariants} className="text-lg">Lahir:</motion.p>
                      <motion.p variants={childVariants} className="font-bold text-2xl">Serui, 18 Desember 1918</motion.p>
                      <motion.p variants={childVariants} className="text-lg">Wafat:</motion.p>
                      <motion.p variants={childVariants} className="font-bold text-2xl">7 Maret 1978</motion.p>
                      <motion.p variants={childVariants} className="text-lg">Orang Tua:</motion.p>
                      <motion.p variants={childVariants} className="font-bold text-2xl">Musa Papare &</motion.p>
                      <motion.p variants={childVariants} className="font-bold text-2xl">Dorkas Mangge</motion.p>
                      <motion.p variants={childVariants} className="text-lg">Istri:</motion.p>
                      <motion.p variants={childVariants} className="font-bold text-2xl">Regina Aibui</motion.p>
                    </motion.div>
                    <motion.ul
                      initial="pClose"
                      animate="pOpen"
                      variants={variants}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex-1 md:mt-14 mt-8 pl-[3rem] sm:pl-[6rem] xl:pl-[8rem] pr-[1.5rem] xl:pr-[3rem] list-disc marker:text-red-700 space-y-1.5 xl:space-y-6">
                      <motion.li variants={childLiVariants} className="text-base md:text-xl xl:text-2xl">Dikenal sebagai tokoh yang berperan penting dalam proses integrasi Papua ke dalam NKRI</motion.li>
                      <motion.li variants={childLiVariants} className="text-base md:text-xl xl:text-2xl">Dinobatkan sebagai Pahlawan Nasional oleh Presiden Suharto pada 14 September 1993.</motion.li>
                    </motion.ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[90%] from-transparent to-[#fffcf3]" />
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            src={`${baseUrl}/assets/1.6.png`}
            className="bottom-[-2rem] invert max-w-full md:max-w-4xl mx-0 md:mx-auto left-0 right-0 hidden sm:block"
            alt="Sub Title"
          />
        </div>
      </div>
    </section>
  );
}
