import { motion } from "motion/react";

export default function Infographic3() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-[#F25513]">
      {/* <div className="absolute h-30 bg-linear-to-b from-[#f6f0fa] z-20 w-full inset-x-0 top-0"></div>
      <div className="absolute h-30 bg-linear-to-t from-[#d9dcf2] z-40 w-full inset-x-0 bottom-0"></div> */}
      <div className="relative w-full bg-[#000E4F] rounded-bl-[4rem] md:rounded-bl-[8rem] lg:rounded-bl-[10rem]">
        <div
          className="relative w-full justify-center lg:px-0 px-4"
        >
          <div className="relative mx-auto max-w-4xl pt-12 md:pt-20 lg:pt-24 md:pb-12 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2 className="font-sora text-white font-bold text-3xl pl-[8%] lg:pl-[4%] xl:pl-0 md:text-[52px] mb-6 lg:mb-6 md:!leading-tight leading-snug w-[80%] w-full">
                Peran Penting Ekonomi Kreatif untuk Indonesia
              </motion.h2>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#000E4F] rounded-tl-[4rem] md:rounded-tl-[8rem] lg:rounded-tl-[10rem] rounded-br-[4rem] md:rounded-br-[8rem] lg:rounded-br-[10rem]">
        <div
          className="relative w-full justify-center lg:px-0 px-4"
        >
          <div className="relative mx-auto max-w-4xl pt-12 md:pt-35">
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: -30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-[30%] h-auto z-0"
            >
              <img
                src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.9.png"
                alt="star"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="relative bg-white rounded-bl-[4rem] md:rounded-bl-[6rem] lg:rounded-bl-[8rem] pt-6 md:pt-12">
              <div className="flex flex-col md:flex-row-reverse">
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative w-full flex md:w-3/5"
                >
                  <img
                    src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.2.png"
                    alt="wanita"
                    className="hidden md:block absolute bottom-0 w-[65%] -left-4"
                  />

                  <img
                    src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.2.png"
                    alt="wanita"
                    className="w-[65%] -mt-[30%] md:hidden"
                  />
                  <motion.img
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.1.png"
                    alt="pria"
                    className="absolute bottom-0 right-0 w-[54%]"
                  />
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.3.png"
                    alt="chart"
                    className="absolute bottom-6 left-0 w-[50%]"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.4.png"
                    alt="sandal"
                    className="absolute -bottom-[20%] left-[10%] w-[40%]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full md:w-[50%] pb-6 md:pb-12 pl-6 md:pl-12 pt-14 md:pt-0"
                >
                  <p className="font-sora text-[#000E4F] text-xl md:text-3xl lg:text-4xl font-bold">
                    Kontribusi dalam PDB nasional
                  </p>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-sora text-[#FF4C0E] font-extrabold text-4xl md:text-6xl lg:text-[7.5rem]"
                  >
                    5,69%
                  </motion.p>
                  <p className="font-sora text-base md:text-2xl text-[#222222]">
                    Semester I 2025
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="flex -mt-6">
              <motion.img
                initial={{ opacity: 0, rotate: -10, x: -40 }}
                whileInView={{ opacity: 1, rotate: 0, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.5.png"
                alt="kursi"
                className="w-[35%] h-auto z-0"
              />
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col my-auto"
              >
                <p className="font-sora text-white text-xl md:text-3xl lg:text-4xl font-bold mt-4 md:mt-0">
                  Penyerapan tenaga kerja
                </p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="font-sora text-[#FF4C0E] font-extrabold text-4xl md:text-5xl lg:text-[6rem]"
                >
                  27,40 juta
                </motion.p>
                <p className="font-sora text-base md:text-2xl text-white">
                  orang tenaga kerja (2025)
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#000e4f] rounded-tr-[4rem] md:rounded-tr-[8rem] lg:rounded-tr-[10rem]">
        <div className="max-w-4xl px-4 lg:px-0 mx-auto">
          <div className="flex flex-col md:flex-row space-y-32 md:space-y-0 md:space-x-6 lg:space-x-12 mb-12 md:mb-20 mt-12 md:mt-20">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative bg-[#FF4C0E] rounded-2xl"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.7, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.6.png"
                alt="warung"
                className="w-full h-auto -mt-[23%] lg:-mt-[26%]"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mt-6 mb-6 lg:mb-0 lg:mt-10"
              >
                <p className="font-sora text-white text-base md:text-2xl">Naik dari</p>
                <p className="font-sora text-white font-extrabold text-2xl md:text-3xl">26,48 juta</p>
                <p className="font-sora text-white text-base md:text-2xl">pada 2024</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative bg-[#FF4C0E] rounded-2xl"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.7, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                viewport={{ once: true }}
                src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.7.png"
                alt="kantin"
                className="w-full h-auto -mt-[28%]"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                viewport={{ once: true }}
                className="text-left px-12 py-6"
              >
                <p className="font-sora font-extrabold text-white text-2xl md:text-3xl">18,70%</p>
                <p className="font-sora text-white text-base md:text-2xl md:w-full lg:w-[70%]">
                  dari total tenaga kerja nasional
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/3.8.png"
          alt="bg-bottom"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-6 z-40 mx-auto mt-10 md:mt-28">
        <img
          src={'/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/footer.png'}
          className="z-50 mx-auto hidden w-full max-w-4xl sm:block"
        />
      </div>
    </div>
  );
}