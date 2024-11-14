"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageSection5() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-cover">
      <div className="relative w-full">
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          src={`${baseUrl}/assets/5.1.png`}
          alt="Airport"
          className="z-0 object-cover w-full h-auto"
        />
        <div className="absolute inset-0 z-10 bg-white bg-opacity-60" />
        <div className="absolute top-0 z-10 flex justify-start w-full pt-12 transform md:bottom-auto">
          <div className="flex flex-col items-start w-full px-4 mx-auto space-y-4 md:max-w-4xl md:space-y-8 md:px-10">
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 10, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="max-w-[80%] text-left text-xl font-extrabold text-[#131313] md:max-w-[50%] md:pt-6 md:text-6xl"
            >
              InJourney Airports di Kancah Internasional
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -10, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-2 max-w-[90%] text-left text-base font-semibold text-[#131313] md:max-w-lg md:text-2xl"
            >
              Peningkatan pelayanan dan kerja sama seluas-luasnya, itulah dua
              senjata InJourney Airports untuk berkibar sampai ke mancanegara
            </motion.p>
          </div>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center bg-gradient-to-r from-[#0c9fad] to-[#066e74] pt-4 md:pt-20">
        <div className="relative flex justify-between w-full px-4 mx-auto md:max-w-4xl md:space-x-4 md:px-10">
          <div className="relative z-40 w-1/2 my-auto text-white space-y-4 md:mb-48 md:max-w-md">
            <p className="text-base font-semibold leading-relaxed text-left md:text-xl">
              <span className="text-2xl font-bold text-[#131313]">"</span>
              Kami mengubah pendekatan dari yang berfokus pada operasional
              menjadi
              <span className="italic"> customer-oriented</span>, sehingga
              bandara bisa lebih proaktif dalam melayani pengguna. Perubahan
              mindset ini akan membuat kami lebih siap bersaing di pasar
              internasional.
              <span className="text-2xl font-bold leading-none text-[#131313]">
                "
              </span>
            </p>
            <div className="mt-12 bg-[#0c9fad] px-4 py-4">
              <p className="text-base font-semibold text-white md:text-base md:font-bold">
                Pgs. Corporate Secretary Group Head InJourney Airports, Arie
                Ahsanurrohim
              </p>
            </div>
          </div>
          <div className="w-full overflow-hidden md:w-1/2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              src={`${baseUrl}/assets/5.2.png`}
              alt="Airport"
              className="absolute bottom-0 z-20 h-auto -right-[2rem] md:right-0 overflow-hidden object-cover md:max-w-7xl"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center w-full">
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          src={`${baseUrl}/assets/5.4.png`}
          alt="Airport2"
          className="z-10 min-h-[36rem] w-auto object-cover lg:h-auto lg:w-full"
        />
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          src={`${baseUrl}/assets/5.3.png`}
          alt="Hand"
          className="absolute -top-[8rem] z-30 h-auto w-full object-cover md:-top-[18rem]"
        />
        <div className="absolute inset-0 z-30 flex items-center justify-center px-4">
          <div className="flex flex-col w-full space-y-12 md:max-w-4xl md:px-10 lg:space-y-8">
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="w-full mx-auto text-base font-semibold text-center text-white md:px-15 md:mt-4 md:max-w-lg md:text-2xl md:font-bold"
            >
              {"Sebagian inisiatif kerja sama internasional yang telah ditempuh InJourney Airports"
                .split("")
                .map((char, index) => (
                  <span key={index} className="bg-[#ee6a57]">
                    {char}
                  </span>
                ))}
            </motion.p>
            <div className="items-stretch min-h-full grid grid-cols-2 gap-4 md:gap-16">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 0, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="relative flex flex-col justify-start rounded-xl bg-[#ee6a57] px-2 py-2 md:px-4 md:py-4"
              >
                <div className="absolute flex items-center justify-center w-5 h-5 bg-white rounded-full -left-2 -top-2 md:h-8 md:w-8">
                  <svg
                    className="h-3 w-3 text-[#316704] md:h-5 md:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base text-white md:text-2xl">
                  Kolaborasi dengan Incheon International Airport Corporation
                  (IIAC) untuk mengelola Bandara Kualanamu dan Hang Nadim
                  sebagai hub internasional baru
                </p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 0, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="relative flex flex-col justify-start rounded-xl bg-[#ee6a57] px-2 py-2 md:px-4 md:py-4"
              >
                <div className="absolute flex items-center justify-center w-5 h-5 bg-white rounded-full -left-2 -top-2 md:h-8 md:w-8">
                  <svg
                    className="h-3 w-3 text-[#316704] md:h-5 md:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base text-white md:text-2xl">
                  Menandatangani MoU dengan IIAC untuk menjajaki peluang
                  pengelolaan bandara di Kuwait, Uzbekistan, dan Filipina
                </p>
              </motion.div>
            </div>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="w-full mx-auto text-base text-center text-white md:px-15 md:mt-4 md:max-w-3xl md:text-2xl"
            >
              Dengan langkah-langkah ini, InJourney Airports punya target
              menjadi operator bandara terbesar kedua di dunia pada 2045
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
