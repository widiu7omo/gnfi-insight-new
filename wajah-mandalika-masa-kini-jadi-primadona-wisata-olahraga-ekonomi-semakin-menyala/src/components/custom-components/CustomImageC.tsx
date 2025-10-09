"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const DATA = [
  { label: "Lombok Tengah 2024", value: 338.29, color: "#F38989" },
  { label: "NTB 2025", value: 1490, color: "#45D80B" },
  { label: "Lombok Tengah 2024", value: 3138, color: "#F38989" },
  { label: "NTB 2025", value: 13769, color: "#45D80B" },
];
const MAX = 20000;

const DATAHOTEL = [
  { label: "Lombok Tengah 2024", value: 24651, valueBar: 64000, color: "#2B293F" },
  { label: "NTB 2025", value: 74071, valueBar: 78071, color: "#C2272F" },
  { label: "Lombok Tengah 2024", value: 24799, valueBar: 64200, color: "#2B293F" },
  { label: "NTB 2025", value: 66869, valueBar: 71869, color: "#C2272F" },
];
const MAXHOTEL = 74000;

export function CustomImageC() {
  const [barHeight, setBarHeight] = useState(550);
  useEffect(() => {
  const handleResize = () => {
    setBarHeight(window.innerWidth < 768 ? 350 : 550);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 h-[20rem] bg-gradient-to-b from-[#31124B] z-10"></div>
      <div
        className="relative w-full justify-center bg-cover bg-center pb-12 pt-16 md:pb-[8rem] md:pt-24 xl:pb-[12rem]"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.4.png)` }}
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4">
          <div className="relative flex flex-col md:flex-row">
            <div className="relative z-10">
              <motion.h2
                className="w-full md:w-[90%] font-sora text-[#45D80B] font-bold text-[32px] md:text-[46px] lg:text-6xl md:leading-[3.5rem] lg:leading-[4.5rem]"
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
                Sirkuit Mandalika Dibangun, Wisatawan Datang Berduyun-duyun
              </motion.h2>
              <motion.p
                className="mt-8 md:mt-12 font-sora text-white text-xl md:text-[32px] md:leading-[2.5rem] lg:leading-[3rem]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                Data membuktikan, hadirnya Sirkuit Mandalika diikuti oleh naiknya perjalanan wisatawan ke Lombok Tengah dan NTB, begitu pula dengan tingkat okupansi hotelnya.           </motion.p>
            </div>
          </div>

          <div className="bg-[#31124B] rounded-3xl py-4 px-4 md:py-8 md:px-8 space-y-4 md:space-y-8 my-10">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center w-1/3 md:space-x-4">
                <motion.img
                  src={`${baseUrl}/assets/3.1.png`}
                  alt="Lombok tengah"
                  className="w-10 md:w-20 h-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-white font-sora font-semibold ml-1 md:ml-0 text-sm md:text-2xl lg:text-3xl w-[40%]"
                >
                  Lombok <br /> Tengah
                </motion.p>
              </div>
              <div className="flex flex-col w-2/3 ml-3 md:ml-0">
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
                      className="ml-1 md:ml-4 text-base md:text-3xl font-sora font-bold"
                      style={{ color: d.color }}
                    >
                      {d.value.toLocaleString('id-ID')}
                    </motion.span>

                    {i === 0 && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="ml-2 md:ml-4 text-[8px] md:text-xl font-sora font-normal text-white"
                      >
                        Jumlah perjalanan (Ribu)
                      </motion.span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center w-1/3 md:space-x-4">
                <motion.img
                  src={`${baseUrl}/assets/3.2.png`}
                  alt="NTB"
                  className="w-10 md:w-20 h-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-white font-sora font-semibold ml-1 md:ml-0 text-sm md:text-2xl lg:text-3xl w-[40%]"
                >
                  NTB
                </motion.p>              </div>
              <div className="flex flex-col w-2/3 ml-2 md:ml-0">
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
                      className="ml-1 md:ml-4 text-base md:text-3xl font-sora font-bold"
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
              2021 (Sebelum Sirkuit Mandalika)
              <span className="inline-block w-4 h-2 md:w-6 md:h-4 bg-[#F38989] mx-2 align-middle"></span>
              2024 (Sesudah Sirkuit Mandalika)
              <span className="inline-block w-4 h-2 md:w-6 md:h-4 bg-[#45D80B] mx-2 align-middle"></span>
              <br />
              Sumber: BPS
            </motion.p>
          </div>

          <div className="relative w-full mx-auto bg-[#C44E5E] rounded-3xl z-20">
            <motion.table
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full border-collapse overflow-hidden rounded-3xl shadow-lg"
            >
              <thead className="bg-[#452C53] text-white">
                <tr>
                  <th className="py-1 px-2 md:py-3 md:px-4 text-left text-[#45D80B] text-base md:text-xl md:pl-24 border-r text-center md:text-left">
                    Tahun
                  </th>
                  <th className="py-1 px-2 md:py-3 md:px-4 text-left text-[#45D80B] text-base md:text-xl border-r text-center">
                    Hotel Berbintang (%)
                  </th>
                  <th className="py-1 px-2 md:py-3 md:px-4 text-left text-[#45D80B] text-base md:text-xl md:pr-24 text-center md:text-left">
                    Hotel Non Berbintang (%)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#C44E5E]">
                <tr>
                  <td className="py-1 px-2 md:py-3 md:px-4 border-t font-sora font-bold md:pl-24 border-r text-white text-center text-sm md:text-base">
                    2021
                  </td>
                  <td className="py-1 px-2 md:py-3 md:px-4 border-t font-sora font-bold border-r text-white text-center text-sm md:text-base">
                    33,51
                  </td>
                  <td className="py-1 px-2 md:py-3 md:px-4 border-t font-sora font-bold md:pr-24 text-white text-center text-sm md:text-base">
                    14,61
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-2 md:py-3 md:px-4 border-t font-sora font-bold md:pl-24 border-r text-white text-center text-sm md:text-base">
                    2024
                  </td>
                  <td className="py-1 px-2 md:py-3 md:px-4 border-t font-sora font-bold border-r text-white text-center text-sm md:text-base">
                    40,39
                  </td>
                  <td className="py-1 px-2 md:py-3 md:px-4 border-t font-sora font-bold md:pr-24 text-white text-center text-sm md:text-base">
                    28,16
                  </td>
                </tr>
              </tbody>
            </motion.table>
            <div className="relative px-2 md:px-24 mt-4 md:mt-12 flex flex-row justify-center">
              <div className="w-1/2 ">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="font-sora font-bold text-[#45D80B] text-base md:text-xl text-center"
                >
                  Tamu yang Menginap <br />di Hotel Bintang (2024)
                </motion.p>
                <div className="flex space-x-2 md:space-x-6 items-end justify-center h-[25rem] md:h-[40rem] mt-4">
                  {DATAHOTEL.slice(0, 2).map((d, i) => {
                    const heightPx = (d.valueBar / MAXHOTEL) * barHeight;
                    return (
                      <div key={i} className="flex flex-col items-center">
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                          viewport={{ once: true, amount: 0.4 }}
                          className="mb-2 text-base md:text-2xl font-bold font-sora text-white"
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
                  className="font-sora font-bold text-[#45D80B] text-base md:text-xl text-center"
                >
                  Tamu yang Menginap <br />di Hotel Non Bintang (2024)
                </motion.p>
                <div className="flex space-x-2 md:space-x-6 items-end justify-center h-[25rem] md:h-[40rem] mt-4">
                  {DATAHOTEL.slice(2, 4).map((d, i) => {
                    const heightPx = (d.valueBar / MAXHOTEL) * barHeight;
                    return (
                      <div key={i} className="flex flex-col items-center">
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                          viewport={{ once: true, amount: 0.4 }}
                          className="mb-2 text-base md:text-2xl font-bold font-sora text-white"
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
              <motion.img
                src={`${baseUrl}/assets/3.3.png`}
                alt="People"
                className="absolute bottom-0 w-[90%] h-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[20rem] w-full bg-gradient-to-t from-[#964666] z-10"></div>
      <div className="absolute bottom-16 z-40 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto max-w-xl w-full hidden sm:block"
        />
      </div>
    </div>
  );
}
