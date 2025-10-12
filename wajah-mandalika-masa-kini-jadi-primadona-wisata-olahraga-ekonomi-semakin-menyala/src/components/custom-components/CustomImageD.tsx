"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 60,
      damping: 10,
      delay: i * 0.2,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DATA = [
  { label: "PDRB NTB", value: 133614, color: "#F38989" },
  { label: "PDRB NTB", value: 166395, color: "#45D90B" },
  { label: "PDRB Kab.Lombok Tengah", value: 16667, color: "#F38989" },
  { label: "PDRB Kab.Lombok Tengah", value: 21251, color: "#45D90B" },
];
const MAX = 240000;

const DATAMISKIN = [
  { label: "NTB", value: 13.97, color: "#F38989" },
  { label: "NTB", value: 12.91, color: "#45D90B" },
  { label: "Lombok Tengah", value: 13.44, color: "#F38989" },
  { label: "Lombok Tengah", value: 12.07, color: "#45D90B" },
];
const MAXMISKIN = 18;

const DATAINVESTASI = [
  { label: "NTB", value: 25.39, color: "#F38989" },
  { label: "NTB", value: 45.76, color: "#45D90B" },
  { label: "Lombok Tengah", value: 413.5, color: "#F38989" },
  { label: "Lombok Tengah", value: 675, color: "#45D90B" },
];
const MAXINVESTASI = 675;

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 h-[20rem] bg-gradient-to-b from-[#964666] z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-[20rem] bg-gradient-to-t from-[#f67384] z-10"></div>
      <div
        className="relative w-full justify-center bg-cover bg-center pb-12 pt-16 md:pb-[8rem] md:pt-24 xl:pb-[10rem]"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.1.jpg)` }}
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4">
          <div className="w-full relative z-10">
            <motion.h2
              className="font-sora text-[#FBD690] font-bold w-full text-center text-[32px] md:text-[43px] lg:text-[3.2rem] md:leading-[3.5rem]"
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
              Bukan Cuma Pebalap <br />Ekonomi NTB Juga Ikut "Ngacir" <br />di Sirkuit Mandalika!
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 font-sora text-center mx-auto text-white w-full w-[78%] text-xl md:text-[1.7rem] md:leading-[2.5rem]"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Naiknya kunjungan wisatawan setelah adanya Sirkuit Mandalika membawa dampak ekonomi bagi NTB dan Lombok Tengah. Ini terlihat dari membaiknya angka PDRB, nilai investasi, serta tingkat kemiskinan
            </motion.p>
          </div>
          <div className="bg-[#F76767] rounded-t-3xl mt-10">
            <motion.p
              className="text-white text-center font-bold text-xl md:text-[28px] font-sora py-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              PDRB NTB & LOMBOK TENGAH <br />2020 VS 2030
            </motion.p>
          </div>
          <div className="bg-[#2B293F] rounded-b-3xl py-4 px-4 md:py-8 md:px-8 space-y-4 md:space-y-8 mb-10">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center w-2/5 md:w-1/3 space-x-0 md:space-x-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-white flex-grow font-sora font-semibold text-xs md:text-2xl lg:text-3xl w-[40%]"
                >
                  PDRB Prov. NTB
                </motion.p>
              </div>
              <div className="flex flex-col w-3/5 md:w-2/3">
                {DATA.slice(0, 2).map((d, i, arr) => (
                  <div key={i} className={`flex items-center ${i !== arr.length - 1 ? 'mb-1 md:mb-3' : ''}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(d.value / MAX) * 100}%` }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                      style={{ backgroundColor: d.color }}
                      className="h-5 md:h-10"
                      viewport={{ once: true, amount: 0.5 }}
                    />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.3 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="ml-1 md:ml-4 text-sm md:text-3xl font-sora font-bold"
                      style={{ color: d.color }}
                    >
                      {i === 0 ? `Rp${d.value.toLocaleString('id-ID')} M` : d.value.toLocaleString('id-ID')}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center w-2/5 md:w-1/3 space-x-0 md:space-x-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-white flex-grow font-sora font-semibold text-xs md:text-2xl lg:text-3xl w-[40%]"
                >
                  PDRB Kab. Lombok Tengah
                </motion.p>
              </div>
              <div className="flex flex-col w-3/5 md:w-2/3">
                {DATA.slice(2, 4).map((d, i, arr) => (
                  <div key={i} className={`flex items-center ${i !== arr.length - 1 ? 'mb-1 md:mb-3' : ''}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(d.value / MAX) * 100}%` }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                      style={{ backgroundColor: d.color }}
                      className="h-5 md:h-10"
                      viewport={{ once: true, amount: 0.5 }}
                    />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.3 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="ml-1 md:ml-4 text-sm md:text-3xl font-sora font-bold"
                      style={{ color: d.color }}
                    >
                      {d.value.toLocaleString('id-ID')}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-white font-sora text-[9px] md:text-lg"
            >
              <span className="inline-block w-4 h-2 md:w-6 md:h-4 bg-[#F38989] mx-2 align-middle"></span>
              2020 (Sebelum Sirkuit Mandalika)
              <span className="inline-block w-4 h-2 md:w-6 md:h-4 bg-[#45D80B] ml-4 mx-2 align-middle"></span>
              2023 (Sesudah Sirkuit Mandalika)
            </motion.p>
          </div>
          <div className="bg-[#FBD690] rounded-t-3xl mt-10">
            <motion.p
              className="text-[#010100] text-center font-bold text-xl md:text-[28px] font-sora py-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              INVESTASI DI NTB 2020 VS 2030
            </motion.p>
          </div>
          <div className="bg-[#47216A] rounded-b-3xl py-4 px-4 md:py-8 md:px-8 space-y-4 md:space-y-8 mb-10">
            <div className="flex flex-row items-center">
              <div className="w-1/2 ">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="font-sora font-bold text-white text-base md:text-xl text-center"
                >
                  Investasi Asing <br />($ miliar)
                </motion.p>
                <div className="flex space-x-2 md:space-x-6 items-end justify-center h-32 mt-4">
                  {DATAINVESTASI.slice(0, 2).map((d, i) => {
                    const heightPx = (d.value / MAXINVESTASI) * 100;
                    return (
                      <div key={i} className="flex flex-col items-center">
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                          viewport={{ once: true, amount: 0.4 }}
                          className="mb-2 text-base md:text-2xl font-bold font-sora" style={{ color: d.color }}
                        >
                          {d.value.toLocaleString('id-ID')}
                        </motion.span>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: heightPx, opacity: 1 }}
                          transition={{ duration: 0.8, delay: i * 0.2, ease: 'easeOut' }}
                          viewport={{ once: true, amount: 0.4 }}
                          style={{ backgroundColor: d.color }}
                          className="w-8 md:w-16"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-1/2">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="font-sora font-bold text-white text-base md:text-xl text-center"
                >
                  Investasi Dalam Negeri <br />(Rp triliun)
                </motion.p>
                <div className="flex space-x-2 md:space-x-6 items-end justify-center h-32 mt-4">
                  {DATAINVESTASI.slice(2, 4).map((d, i) => {
                    const heightPx = (d.value / MAXINVESTASI) * 100;
                    return (
                      <div key={i} className="flex flex-col items-center">
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                          viewport={{ once: true, amount: 0.4 }}
                          className="mb-2 text-base md:text-2xl font-bold font-sora" style={{ color: d.color }}
                        >
                          {d.value.toLocaleString('id-ID')}
                        </motion.span>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: heightPx, opacity: 1 }}
                          transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                          viewport={{ once: true, amount: 0.4 }}
                          style={{ backgroundColor: d.color }}
                          className="w-8 md:w-16"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-white font-sora text-[9px] md:text-lg text-center items-center flex justify-center"
            >
              <span className="inline-block w-4 h-2 md:w-10 md:h-4 bg-[#F38989] mx-2 align-middle"></span>
              2020
              <span className="inline-block w-4 h-2 md:w-10 md:h-4 bg-[#45D80B] ml-4 mx-2 align-middle"></span>
              2023
            </motion.p>
          </div>
          <div className="bg-[#2B293F] rounded-3xl py-4 px-4 md:py-6 md:px-8 space-y-4 md:space-y-8 mb-3 md:mb-10 relative z-10">
            <motion.p
              className="text-[#FBD690] text-center font-bold text-xl md:text-[28px] font-sora py-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              TINGKAT KEMISKINAN <br />DI NTB & LOMBOK TENGAH 2020 VS 2024
            </motion.p>
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center w-1/3 md:w-1/3 md:space-x-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-white flex-grow font-sora font-semibold ml-1 md:ml-0 text-sm md:text-2xl lg:text-3xl w-[40%]"
                >
                  Prov. NTB
                </motion.p>
              </div>
              <div className="flex flex-col w-2/3">
                {DATAMISKIN.slice(0, 2).map((d, i, arr) => (
                  <div key={i} className={`flex items-center ${i !== arr.length - 1 ? 'mb-1 md:mb-3' : ''}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(d.value / MAXMISKIN) * 100}%` }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                      style={{ backgroundColor: d.color }}
                      className="h-5 md:h-10"
                      viewport={{ once: true, amount: 0.5 }}
                    />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.3 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="ml-1 md:ml-4 text-base md:text-3xl font-sora font-bold"
                      style={{ color: d.color }}
                    >
                      {d.value.toLocaleString('id-ID')}%
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center w-1/3 md:space-x-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-white flex-grow font-sora font-semibold ml-1 md:ml-0 text-sm md:text-2xl lg:text-3xl w-[40%]"
                >
                  Kab. Lombok Tengah
                </motion.p>
              </div>
              <div className="flex flex-col w-2/3">
                {DATAMISKIN.slice(2, 4).map((d, i, arr) => (
                  <div key={i} className={`flex items-center ${i !== arr.length - 1 ? 'mb-1 md:mb-3' : ''}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(d.value / MAXMISKIN) * 100}%` }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                      style={{ backgroundColor: d.color }}
                      className="h-5 md:h-10"
                      viewport={{ once: true, amount: 0.5 }}
                    />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.3 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="ml-1 md:ml-4 text-base md:text-3xl font-sora font-bold"
                      style={{ color: d.color }}
                    >
                      {d.value.toLocaleString('id-ID')}%
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-white font-sora text-[9px] md:text-lg"
            >
              <span className="inline-block w-4 h-2 md:w-6 md:h-4 bg-[#F38989] mx-2 align-middle"></span>
              2020 (Sebelum Sirkuit Mandalika)
              <span className="inline-block w-4 h-2 md:w-6 md:h-4 bg-[#45D80B] ml-4 mx-2 align-middle"></span>
              2023 (Sesudah Sirkuit Mandalika)
            </motion.p>
          </div>
        </div>
        <motion.p
          className="text-center text-white md:text-xl text-base relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Sumber: BPS (Badan Pusat Statistik) NTB & Lombok Tengah
        </motion.p>
      </div>
      <div className="absolute bottom-20 z-40 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto max-w-xl w-full hidden sm:block"
        />
      </div>
    </div>
  );
}
