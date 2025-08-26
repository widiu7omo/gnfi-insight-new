"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function CustomImageE() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const questionRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const titleInView = useInView(titleRef, { once: true });
  const subtitleInView = useInView(subtitleRef, { once: true });

  return (
    <motion.div
      className="relative flex flex-col noise2 items-center overflow-hidden font-sora bg-no-repeat bg-[center_top_0%] bg-cover"
      style={{ backgroundImage: `url(${baseUrl + '/assets/4.1.png'})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        ref={heroRef}
        className="mx-auto max-w-4xl w-full py-12 relative mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="space-y-4 px-4 lg:px-0 w-full">
          <motion.div
            ref={titleRef}
            className="font-bold text-white text-4xl sm:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Kereta Cepat <br />
            Jakarta-Surabaya,
          </motion.div>
          <motion.div
            ref={subtitleRef}
            className="font-bold px-3 py-1 bg-white w-fit text-2xl sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Mimpi Indonesia sejak Lama
          </motion.div>
          <div className="md:h-[20rem]" />
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row md:items-end bg-[#93010d] w-full rounded-t-md md:rounded-t-[2.5rem] relative">
              <motion.img
                src={baseUrl + '/assets/4.2.png'}
                alt="SBY"
                className="w-auto h-[7rem] md:h-auto md:w-1/2 right-0 md:right-auto left-auto md:left-0 bottom-0 absolute"
                initial={{ opacity: 0, x: -20 }}
                animate={subtitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              />
              <div className="w-full md:w-1/2" />
              <motion.div
                className="md:px-0 px-4 text-white text-xl md:text-2xl font-bold flex-1 pt-4 md:pt-10 xs:pb-20 pb-28"
                initial={{ opacity: 0, y: 10 }}
                animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              >
                Mulai direncanakan pada era Presiden SBY
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end bg-[#202020] px-4 md:px-8 relative">
              <motion.div
                className="text-white text-xl md:text-2xl flex-1 py-4 md:py-8 !pb-16"
                initial={{ opacity: 0, y: 10 }}
                animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <div className="font-bold">Perencanaan berlanjut hingga era Presiden Jokowi,</div>
                <div className="mt-2 font-base md:text-2xl text-base sm:pr-0 pr-20">tetapi Jepang mundur dari proyek</div>
              </motion.div>
              <motion.img
                src={baseUrl + '/assets/4.3.png'}
                alt="Jokowi"
                className="w-auto h-[7rem] md:h-auto md:w-[30%] right-0 absolute bottom-0"
                initial={{ opacity: 0, x: 20 }}
                animate={subtitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              />
              <div className="w-[35%] md:w-[30%]" />
            </div>
            <div className="flex flex-col md:flex-row md:items-end bg-[#dfdfdf] px-4 md:px-8 rounded-b-md md:rounded-b-[2.5rem] overflow-clip md:overflow-visible relative">
              <motion.img
                src={baseUrl + '/assets/4.4.png'}
                alt="Prabowo"
                className="xs:w-[35%] sm:w-[50%] hidden xs:block sm:top-20 md:top-auto bottom-0 sm:bottom-auto md:bottom-0 left-0 absolute md:rounded-bl-[2.5rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              />
              <div className="w-[50%]" />
              <motion.div
                className="text-[#202020] text-xl md:text-2xl flex-1 py-4 md:py-8 sm:pb-20"
                initial={{ opacity: 0, y: 10 }}
                animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              >
                <div className="font-bold">Diminta oleh Presiden Prabowo agar diwujudkan</div>
                <motion.div
                  className="mt-8 flex space-x-4 sm:pt-[3rem] md:ml-0 xs:ml-[35%] ml-0"
                  initial={{ opacity: 0, y: 15 }}
                  animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                >
                  <div className="font-sora text-[#d70011] text-8xl font-bold">&ldquo;</div>
                  <div>
                    <div className="text-xl md:text-3xl font-base">Presiden Prabowo Subianto telah memberikan instruksi yang tegas untuk memperluas jalur kereta cepat Jakarta, Bandung hingga Surabaya,</div>
                    <div className="py-[2rem] relative">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                      >
                        <div className="text-sm sm:text-base font-bold">
                          Agus Harimurti Yudhoyono (AHY)
                        </div>
                        <div className="font-normal text-xs sm:text-base pt-2">Menteri Koordinator Bidang Infrastruktur
                          dan Pembangunan Kewilayahan
                        </div>
                      </motion.div>
                      <motion.img
                        src={baseUrl + '/assets/4.5.png'}
                        alt="AHY"
                        className="absolute left-[-4.5rem] top-[0.5rem] sm:left-[-5rem] md:left-[-9rem] sm:top-[1rem] md:top-[-1.5rem] w-[25%] sm:w-[20%] md:w-[40%]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={subtitleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <motion.img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
