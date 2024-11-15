"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageSection5() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-cover font-sora bg-[#e5e9ec]">
      <div className="relative w-full">
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          src={`${baseUrl}/assets/5.1.png`}
          alt="Airport"
          className="z-0 object-cover w-full h-full 2xl:!h-[60rem] object-center pb-[6rem] xs:pb-[3rem] sm:pb-[3rem] 2xl:pb-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b h-[30%] from-[#f9f9fa]" />
        <div className="absolute bottom-0 z-10 flex justify-start w-full transform pb-4 sm:pb-[4.5rem] lg:pb-4 2xl:pb-12">
          <div className="flex flex-col items-start w-full px-4 mx-auto space-y-4 md:max-w-4xl md:space-y-8 md:px-10">
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-[80%] text-left font-sora font-extrabold text-[#131313] md:max-w-[50%] md:pt-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              InJourney Airports di Kancah Internasional
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-2 max-w-[90%] text-left font-sora font-semibold text-[#131313] md:max-w-lg text-base sm:text-lg md:text-2xl"
            >
              Peningkatan pelayanan dan kerja sama seluas-luasnya, itulah dua
              senjata InJourney Airports untuk berkibar sampai ke mancanegara
            </motion.p>
          </div>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center bg-gradient-to-r from-[#0b8d98] to-[#0b8d98] pt-4 md:pt-20">
        <div className="relative flex flex-col sm:flex-row justify-between w-full px-4 mx-8 sm:mx-4 2xl:mx-auto md:max-w-4xl md:space-x-4 md:px-10">
          <div className="relative z-40 2xl:w-1/2 w-full xs:w-[70%] sm:w-full my-auto text-white space-y-4 md:mb-48 md:max-w-md">
            <div className="text-base sm:text-xl font-semibold leading-relaxed text-left md:text-lg">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                src={`${baseUrl}/assets/quote.png`} alt="Quote Start" className="size-8 absolute top-[-2%] left-[-3rem]" />
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Kami mengubah pendekatan dari yang berfokus pada operasional
                menjadi
                <span className="italic"> customer-oriented</span>, sehingga
                bandara bisa lebih proaktif dalam melayani pengguna. Perubahan
                mindset ini akan membuat kami lebih siap bersaing di pasar
                internasional.
              </motion.p>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                src={`${baseUrl}/assets/quote.png`} alt="Quote End" className="size-8 rotate-180 absolute bottom-[5rem] right-[-10%]" />
            </div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 w-[80%] xs:w-full bg-[#0c9fad] px-4 py-4 -ml-4">
              <p className="text-sm xs:text-base font-semibold text-white md:text-xl md:font-bold">
                Pgs. Corporate Secretary Group Head InJourney Airports, Arie
                Ahsanurrohim
              </p>
            </motion.div>
          </div>
          <div className="w-full overflow-hidden md:w-1/2 pt-[4rem] xs:pt-[2rem] sm:pt-0 z-50 xs:z-0">
            <div className="absolute bottom-0 z-20 h-auto w-[50%] sm:w-[53%] -right-[2rem] md:right-0 overflow-hidden object-cover md:max-w-7xl">
              <motion.img
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: "anticipate", delay: .3 }}
                viewport={{ once: true }}
                src={`${baseUrl}/assets/5.2.png`}
                alt="Pgs. Corporate"
                className=""
              />
              <div className="absolute h-[40%] w-full bottom-0 bg-gradient-to-t from-[#0b8d98]" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full bg-bottom overflow-hidden" style={{ backgroundImage: `url(${baseUrl}/assets/5.4.png)` }}>
        <div className="h-[40%] bg-gradient-to-b from-[#0b8d98] to-black/0 from-[30%] absolute top-0 w-full z-10" />
        <div className="absolute top-[-15%] z-0 max-w-7xl mx-auto">
          <div className="relative">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              src={`${baseUrl}/assets/5.3.png`}
              alt="Hand"
              className=" h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="inset-0 z-30 flex items-center justify-center px-4 pb-[10rem]">
          <div className="flex flex-col w-full space-y-12 md:max-w-4xl md:px-10 lg:space-y-[4rem]">
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full text-xl font-semibold text-center text-white mt-1 md:mt-4 sm:text-3xl md:font-bold "
            >
              <span className="bg-[#ee6a57] box-decoration-clone px-4">Sebagian inisiatif kerja sama internasional yang telah ditempuh InJourney Airports</span>
            </motion.p>
            <div className="items-stretch min-h-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-16 pt-[10rem] ">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative flex flex-col justify-start rounded-xl bg-[#ee6a57] p-4 sm:p-6 lg:p-8"
              >
                <div className="absolute flex items-center justify-center w-5 h-5 bg-white rounded-full -left-2 -top-2 md:h-8 md:w-8">
                  <svg aria-label="Check" role="img"
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
                <p className="text-base text-white sm:text-lg xl:text-2xl">
                  Kolaborasi dengan Incheon International Airport Corporation
                  (IIAC) untuk mengelola Bandara Kualanamu dan Hang Nadim
                  sebagai hub internasional baru
                </p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative flex flex-col justify-start rounded-xl bg-[#ee6a57] p-4 lg:p-8"
              >
                <div className="absolute flex items-center justify-center w-5 h-5 bg-white rounded-full -left-2 -top-2 md:h-8 md:w-8">
                  <svg aria-label="Check" role="img"
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
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-base text-white sm:text-lg xl:text-2xl">
                  Menandatangani MoU dengan IIAC untuk menjajaki peluang
                  pengelolaan bandara di Kuwait, Uzbekistan, dan Filipina
                </motion.p>
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
      <img src={`${baseUrl}/assets/footer.png`} alt="Footer" className="max-w-7xl mx-auto absolute bottom-0 z-20 w-full" />
    </div>
  );
}
