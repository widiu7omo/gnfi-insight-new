"use client";

import { baseUrl } from "@/constants/meta";
import { motion, stagger } from "framer-motion";

export function CustomImageSection4() {
  const staggerChildren = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 10,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="relative w-full">
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          src={`${baseUrl}/assets/4.1.png`}
          alt="People"
          className="z-0 h-auto w-full object-cover"
        />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10"/>
        <div className="absolute bottom-0 pb-12 lg:pb-0 lg:top-0 z-10 flex w-full justify-center md:top-24">
          <div className="flex w-full flex-col items-start px-4 md:max-w-4xl md:px-10">
            <div className="mx-auto">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 10, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="md:px-15 mx-auto pt-6 text-center text-2xl font-extrabold text-white lg:text-black md:pt-12 md:text-5xl"
              >
                Peningkatan Pelayanan
              </motion.p>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 10, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                src={`${baseUrl}/assets/4.2.png`}
                alt="Ala In Journey"
                className="mx-auto my-4 h-auto w-full object-contain px-4 md:my-8 md:max-w-4xl md:px-10"
              />
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -10, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="md:px-15 mx-auto max-w-md text-center text-base font-semibold text-black md:max-w-lg md:text-2xl"
              >
                {"InJourney Airports mendorong bandara untuk fokus kepada pelayanan kepada para penggunanya"
                  .split("")
                  .map((char, index) => (
                    <span
                      key={index}
                      className={`bg-white ${char === " " ? "bg-transparent" : ""}`}
                    >
                      {char}
                    </span>
                  ))}
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 0, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="md:px-15 mx-auto max-w-md text-center text-base text-black md:mt-4 md:max-w-lg md:text-2xl"
              >
                {"Berbagai perbaikan pun dilakukan demi peningkatan pelayanan"
                  .split("")
                  .map((char, index) => (
                    <span
                      key={index}
                      className={`bg-white ${char === " " ? "bg-transparent" : ""}`}
                    >
                      {char}
                    </span>
                  ))}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute inset-0 flex h-full w-full flex-col">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 10, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            src={`${baseUrl}/assets/4.3.png`}
            alt="People in Airport"
            className="z-20 h-[32rem] w-full object-cover md:h-[32rem]"
          />
        </div>
        <div className="relative bottom-0 z-30 mx-auto flex w-full px-4 md:max-w-4xl md:px-10">
          <div className="flex w-1/2 flex-col justify-start pb-8 md:pb-16">
            <motion.div
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={staggerChildren}
              className="-mt-[2rem] mb-4 ml-4 rounded-md bg-[#ee6a57] px-2 py-2 md:-mt-[4rem] md:mb-8 md:px-4 md:py-4"
            >
              <motion.p
                className="max-w-4xl md:max-w-xs text-base font-semibold text-white md:text-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Aspek pelayanan yang jadi perhatian InJourney Airports di
                antaranya
              </motion.p>
            </motion.div>
            <motion.ul
              viewport={{ once: true }}
              variants={staggerChildren}
              initial="close"
              whileInView="open"
              className="max-w-lg list-disc pl-5 text-left text-sm text-white"
            >
              <li className="mb-2 text-base marker:text-red-500 md:mb-4 md:text-xl">
                Proses pemeriksaan keamanan, pelaporan penumpang, dan
                pengambilan bagasi yang lebih cepat
              </li>
              <li className="text-base marker:text-red-500 md:text-xl">
                Pelayanan yang lebih ramah dari petugas
              </li>
            </motion.ul>
          </div>
          <div className="flex w-1/2 justify-end">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 10, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              src={`${baseUrl}/assets/4.4.png`}
              alt="Direktur Utama Faik Fahmi"
              className="flex-end absolute bottom-0 ml-auto h-auto w-[40%] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="relative z-30 w-full">
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -10, y: -10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          src={`${baseUrl}/assets/4.5.png`}
          alt="Koper"
          className="z-30 h-[32rem] w-full object-cover"
        />
        <div className="absolute inset-0 top-0">
          <div className="mx-auto flex flex-col lg:flex-row w-full justify-center space-y-4 lg:space-y-0 lg:space-x-4 px-4 md:max-w-4xl md:px-10">
            <div className="w-full lg:w-1/2 bg-[#0c9fad] px-4 py-4">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -10, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-base text-white md:text-lg"
              >
                Berbagai fasilitas pendukung juga disediakan, mulai dari Self
                Bag Drop dan nantinya akan menyusul Automatic Tray Return
                System, juga tak ketinggalan detail-detail seperti penerangan
                dan suhu ruangan turut diperhatikan
              </motion.p>
            </div>
            <div className="w-full lg:w-1/2 rounded-b-3xl bg-[#0c9fad] px-4 py-4">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 10, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-base text-white md:text-lg"
              >
                “Tujuan transformasi bandara yang sedang berjalan adalah untuk
                menciptakan pengalaman yang menyenangkan pada seluruh rangkaian
                perjalanan melalui perubahan mindset dan pola manajemen dalam
                memberikan pelayanan.”
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 0, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-4 text-base font-bold text-white md:text-lg"
              >
                Direktur Utama
                <br />
                InJourney Airports,
                <br />
                Faik Fahmi
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
