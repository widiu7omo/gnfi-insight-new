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
    <div className="relative flex flex-col items-start overflow-hidden">
      <div className="relative flex flex-col items-center w-full">
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          src={`${baseUrl}/assets/4.1.png`}
          alt="People"
          className="z-0 object-cover w-full"
        />
        <div className="absolute xl:top-[5%]">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 10, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mx-auto text-2xl font-extrabold text-center text-white md:px-15 lg:text-black lg:text-4xl xl:text-6xl font-sora leading-snug tracking-wider"
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
            className="object-contain w-full h-auto px-4 mx-auto my-4 md:my-8 md:max-w-4xl md:px-10"
          />
        </div>
        <div className="absolute lg:bottom-[10%] xl:top-[20%] z-10">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -10, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="max-w-md mx-auto text-base font-semibold leading-snug tracking-wide text-center text-white md:text-black md:max-w-xl lg:text-white xl:text-black lg:text-2xl xl:text-3xl"
          >
            InJourney Airports mendorong <br /> bandara untuk fokus kepada <br /> pelayanan kepada para penggunanya
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 0, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="max-w-md mx-auto text-base text-center md:px-15 md:mt-4 md:max-w-lg md:text-2xl lg:text-white xl:text-black"
          >
            Berbagai perbaikan pun dilakukan demi peningkatan pelayanan
          </motion.p>
        </div>
        <div className="block xl:hidden absolute bottom-0 w-full top-[5rem] bg-gradient-to-t from-black z-0" />
      </div>
      <div className="relative w-full">
        <div className="absolute inset-0 flex flex-col w-full h-full">
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
        <div className="relative bottom-0 z-30 flex w-full px-4 mx-auto md:max-w-4xl md:px-10">
          <div className="flex flex-col justify-start w-1/2 pb-8 md:pb-16">
            <motion.div
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={staggerChildren}
              className="-mt-[2rem] mb-4 ml-4 rounded-md bg-[#ee6a57] px-2 py-2 md:-mt-[4rem] md:mb-8 md:px-4 md:py-4"
            >
              <motion.p
                className="max-w-4xl text-base font-semibold text-white md:max-w-xs md:text-2xl font-sora"
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
              className="max-w-lg pl-5 text-sm text-left text-white list-disc font-sora"
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
          <div className="flex flex-col justify-center w-full px-4 mx-auto lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 md:max-w-4xl md:px-10">
            <div className="w-full lg:w-1/2 bg-gradient-to-t from-[#10a7b5] to-[#0f6e78] px-4 md:px-8 py-4 md:py-8 h-fit rounded-b-3xl">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -10, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-base text-white md:text-lg font-sora"
              >
                Berbagai fasilitas pendukung juga disediakan, mulai dari Self
                Bag Drop dan nantinya akan menyusul Automatic Tray Return
                System, juga tak ketinggalan detail-detail seperti penerangan
                dan suhu ruangan turut diperhatikan
              </motion.p>
            </div>
            <div className="w-full lg:w-1/2 rounded-b-3xl bg-gradient-to-t from-[#10a7b5] to-[#0f6e78] relative">
              <div className="absolute w-full top-0 bottom-0 z-40 bg-gradient-to-t from-[#10a7b5] via-[#0f6e78] to-[#0f6e78]/0 via-[80%] rounded-b-3xl" />
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 10, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                src={`${baseUrl}/assets/4.4.png`}
                alt="Direktur Utama Faik Fahmi"
                className="flex-end absolute top-[-50%] ml-auto lg:max-h-[20rem] h-full xl:h-auto w-[80%] object-bottom object-contain z-30"
              />
              <div className="pt-12 pb-8 relative z-40 px-4 md:px-8 ">
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 10, y: -10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-base text-white md:text-lg font-sora"
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
                  className="mt-4 text-base font-bold text-white md:text-lg font-sora"
                >
                  <span className="font-medium">Direktur Utama InJourney Airports,</span>
                  <br />
                  Faik Fahmi
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
