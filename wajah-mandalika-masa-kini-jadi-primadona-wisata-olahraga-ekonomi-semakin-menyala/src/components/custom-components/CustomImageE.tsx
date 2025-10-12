"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageE() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="z-20 relative w-full justify-center bg-no-repeat bg-top bg-cover bg-[#FF9C24]"
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 pl-4 justify-center flex md:flex-row-reverse flex-col-reverse pt-12 md:pt-24">
          <motion.div
            className="w-full mb-4 md:mb-8 mt-0 md:mt-16 flex flex-col"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.1
            }}
            viewport={{ once: true }}
          >
            <motion.p
              className="font-sora text-black text-lg md:text-3xl"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 60,
                damping: 10,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              "MotoGP bukan hanya tentang balapan, tetapi juga tentang warisan berharga bagi Indonesia yang memberi manfaat
              nyata bagi olahraga, pariwisata, dan kebanggaan nasional,"
            </motion.p>
            <motion.p
              className="text-2xl md:text-4xl font-bold text-black mt-10 font-sora"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 60,
                damping: 10,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              Erick Thohir
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl font-semibold text-black font-sora mb-0 md:mb-7"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 60,
                damping: 10,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              Menteri Pemuda dan Olahraga RI
            </motion.p>
          </motion.div>
          <motion.div className="w-full relative">
            <motion.img
              src={`${baseUrl}/assets/5.1.1.png`}
              alt="Erick Thohir"
              className="md:absolute mr-auto md:mr-0 mt-12 md:mt-0 bottom-0 md:-bottom-1 md:left-6 xl:h-full md:w-[80%] xl:w-auto w-[65%] h-auto z-0 md:z-20"
              initial={{ opacity: 0, y: 50, scale: 1 }}
              whileInView={{ opacity: 0.8, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 15, duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
      <div
        className="z-20 relative w-full justify-center bg-no-repeat bg-top bg-cover xl:pb-[6rem]"
        style={{ backgroundImage: `url(${baseUrl}/assets/5.2.png)` }}
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 pl-4 justify-center flex md:flex-row flex-col pt-12 md:pt-24">
          <motion.div
            className="w-full mb-4 md:mb-24 flex flex-col"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.1
            }}
            viewport={{ once: true }}
          >
            <motion.p
              className="font-sora text-white text-lg md:text-3xl"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 60,
                damping: 10,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              "MotoGP di seluruh dunia memiliki fanbase yang luar biasa, disiarkan di kurang lebih 200 negara dengan <i>viewers</i>{" "}
              hampir 700 juta pasang mata. Jadi nilainya untuk <span className='italic'>exposure</span> sangat luar biasa,"
            </motion.p>
            <motion.p
              className="text-2xl md:text-4xl font-bold text-[#FED65C] mt-10 font-sora"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 60,
                damping: 10,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              Maya Watono
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl font-semibold text-[#FED65C] font-sora mb-0 md:mb-7"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 60,
                damping: 10,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              Direktur Utama InJourney
            </motion.p>
          </motion.div>
          <motion.div className="w-full relative">
            <motion.img
              src={`${baseUrl}/assets/5.3.png`}
              alt="Direktur Utama InJourney"
              className="md:absolute ml-auto md:ml-0 mt-12 md:mt-0 bottom-0 md:-bottom-1 md:right-0 xl:h-full md:w-[80%] xl:w-auto w-[65%] h-auto z-0 md:z-20"
              initial={{ opacity: 0, y: 50, scale: 1 }}
              whileInView={{ opacity: 0.8, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 15, duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-4 z-40 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto max-w-xl w-full hidden sm:block"
        />
      </div>
    </div>
  );
}
