"use client";

import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";

export function CustomImageC() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-[#F5FAE1] pb-0 pt-16 md:pt-24 xl:pt-24"
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4">
          <motion.h2
            className="w-[75%] lg:w-full font-sora text-[#8C1007] font-bold text-3xl md:text-7xl mb-24 lg:mb-10 pr-0 lg:pr-[30%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Jamu <br />Paling Populer di Indonesia
          </motion.h2>
        </div>
        <div className="relative w-full justify-center bg-[#3E0703] pt-16 md:pt-24 pb-12 md:pb-[8rem] xl:pb-24 mt-[20%] rounded-t-full">
          <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4 pt-14 md:pt-16 lg:pt-20">
            <motion.img
              src={`${baseUrl}/assets/3.2.png`}
              alt="Galian Singset"
              className="mx-auto w-[60%] -mt-[50%] md:-mt-[40%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute z-40 bg-[#FE8F00] px-4 md:px-0 md:w-52 py-1 rounded-full inline-block ml-[20%] md:ml-[28%] -mt-[65%] md:-mt-[70%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.7,
              }}
              viewport={{ once: true }}
            >
              <p className="text-[#3E0703] font-sora font-semibold text-base md:text-2xl text-center">
                Galian Singset
              </p>
            </motion.div>

            <motion.img
              src={`${baseUrl}/assets/3.1.png`}
              alt="Beras Kencur"
              className="mx-auto w-[30%] z-10 mr-0 -mt-[110%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
            />
            <motion.div className="absolute z-40 bg-[#FE8F00] px-4 md:px-0 md:w-52 py-1 rounded-full inline-block ml-[66%] -mt-[65%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.7,
              }}
              viewport={{ once: true }}>
              <p className="text-[#3E0703] font-sora font-semibold text-base md:text-2xl text-center">Beras Kencur</p>
            </motion.div>
            <motion.img
              src={`${baseUrl}/assets/3.3.png`}
              alt="Kunci Sirih"
              className="mx-auto w-[30%] z-10 ml-[7%] -mt-[40%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
            />
            <motion.div className="absolute z-40 bg-[#FE8F00] px-4 md:px-0 md:w-52 py-1 rounded-full inline-block ml-[10%] -mt-[42%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.7,
              }}
              viewport={{ once: true }}>

              <p className="text-[#3E0703] font-sora font-semibold text-base md:text-2xl text-center">Kunci Sirih</p>
            </motion.div>
            <motion.img
              src={`${baseUrl}/assets/3.4.png`}
              alt="Kunyit Asam"
              className="mx-auto w-[30%] z-10 mr-[15%] -mt-[5%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
            />
            <motion.div className="absolute z-40 bg-[#FE8F00] px-4 md:px-0 md:w-52 py-1 rounded-full inline-block mr-[15%] -mt-[17%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.7,
              }}
              viewport={{ once: true }}>
              <p className="text-[#3E0703] font-sora font-semibold text-base md:text-2xl text-center">Kunyit Asam</p>
            </motion.div>
            <motion.img
              src={`${baseUrl}/assets/3.5.png`}
              alt="Kudu Laos"
              className="mx-auto w-[30%] z-20 ml-[10%] -mt-[25%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1.8 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
            />
            <motion.div className="absolute z-40 bg-[#FE8F00] px-4 md:px-0 md:w-52 py-1 rounded-full inline-block ml-[72%] -mt-[30%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.7,
              }}
              viewport={{ once: true }}>
              <p className="text-[#3E0703] font-sora font-semibold text-base md:text-2xl text-center">Kudu Laos</p>
            </motion.div>
            <motion.img
              src={`${baseUrl}/assets/3.8.png`}
              alt="Pahitan"
              className="mx-auto w-[30%] mt-[5%] z-10 mr-[15%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
            />
            <motion.div className="absolute z-40 bg-[#FE8F00] px-4 md:px-0 md:w-52 py-1 rounded-full inline-block -mt-[2%] ml-[66%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.7,
              }}
              viewport={{ once: true }}>
              <p className="text-[#3E0703] font-sora font-semibold text-base md:text-2xl text-center">Pahitan</p>
            </motion.div>
            <motion.img
              src={`${baseUrl}/assets/3.7.png`}
              alt="Jamu Cekok"
              className="mx-auto w-[30%] z-30 ml-[30%] -mt-[25%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
            />
            <motion.div className="absolute z-40 bg-[#FE8F00] px-4 md:px-0 md:w-52 py-1 rounded-full inline-block -mt-[2%] ml-[35%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.7,
              }}
              viewport={{ once: true }}>
              <p className="text-[#3E0703] font-sora font-semibold text-base md:text-2xl text-center">Jamu Cekok</p>
            </motion.div>
            <motion.img
              src={`${baseUrl}/assets/3.6.png`}
              alt="Sinom"
              className="mx-auto w-[30%] z-40 ml-[2%] -mt-[30%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
            />
            <motion.div className="absolute z-40 bg-[#FE8F00] px-4 md:px-0 md:w-52 py-1 rounded-full inline-block -mt-[6%] ml-[12%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.7,
              }}
              viewport={{ once: true }}>
              <p className="text-[#3E0703] font-sora font-semibold text-base md:text-2xl text-center">Sinom</p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl">
            <img
              src={`${baseUrl}/assets/footer.png`}
              className="mx-auto hidden w-full sm:block"
              alt="Footer"
            />
          </div>
        </div>
      </div>


    </div >
  );
}
