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
  {
    label: "Lombok Tengah 2024",
    value: 24651,
    valueBar: 64000,
    color: "#2B293F",
  },
  { label: "NTB 2025", value: 74071, valueBar: 78071, color: "#C2272F" },
  {
    label: "Lombok Tengah 2024",
    value: 24799,
    valueBar: 64200,
    color: "#2B293F",
  },
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
      <div className="absolute inset-0 z-10 h-[20rem] bg-gradient-to-b from-[#31124B]"></div>
      <div
        className="relative w-full justify-center bg-cover bg-center pb-12 pt-16 md:pb-[8rem] md:pt-24 xl:pb-[12rem]"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.4.png)` }}
      >
        <div className="relative mx-auto max-w-4xl px-4 md:px-8 lg:px-0">
          <div className="relative flex flex-col md:flex-row">
            <div className="relative z-10">
              <motion.h2
                className="w-full font-sora text-[32px] font-bold text-[#45D80B] md:text-[43px] md:leading-[3.5rem] lg:text-[3.2rem] lg:leading-[4.5rem]"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
              >
                Sirkuit Mandalika Dibangun, Wisatawan Datang Berduyun-duyun
              </motion.h2>
              <motion.p
                className="mt-8 font-sora text-xl text-white md:mt-12 md:text-[1.7rem] md:leading-[2.5rem] lg:leading-[2.5rem]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                Data membuktikan, hadirnya Sirkuit Mandalika diikuti oleh
                naiknya perjalanan wisatawan ke Lombok Tengah dan NTB, begitu
                pula dengan tingkat okupansi hotelnya.{" "}
              </motion.p>
            </div>
          </div>

          <div className="my-10 space-y-4 rounded-3xl bg-[#31124B] px-4 py-4 md:space-y-8 md:px-8 md:py-8">
            <div className="flex flex-row items-center">
              <div className="flex w-1/3 flex-row items-center md:space-x-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="ml-1 font-sora text-sm font-semibold text-white md:ml-0 md:text-2xl lg:text-3xl"
                >
                  Kab. Lombok <br /> Tengah
                </motion.p>
              </div>
              <div className="ml-3 flex w-2/3 flex-col md:ml-0">
                {DATA.slice(0, 2).map((d, i, arr) => (
                  <div
                    key={i}
                    className={`flex items-center ${i !== arr.length - 1 ? "mb-1 md:mb-3" : ""}`}
                  >
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
                      className="ml-1 font-sora text-base font-bold md:ml-4 md:text-3xl"
                      style={{ color: d.color }}
                    >
                      {d.value.toLocaleString("id-ID")}
                    </motion.span>

                    {i === 0 && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="ml-2 font-sora text-[8px] font-normal text-white md:ml-4 md:text-xl"
                      >
                        Jumlah perjalanan (Ribu)
                      </motion.span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex w-1/3 flex-row items-center md:space-x-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="ml-1 font-sora text-sm font-semibold text-white md:ml-0 md:text-2xl lg:text-3xl"
                >
                  Prov. NTB
                </motion.p>{" "}
              </div>
              <div className="ml-2 flex w-2/3 flex-col md:ml-0">
                {DATA.slice(2, 4).map((d, i, arr) => (
                  <div
                    key={i}
                    className={`flex items-center ${i !== arr.length - 1 ? "mb-1 md:mb-3" : ""}`}
                  >
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
                      className="ml-1 font-sora text-base font-bold md:ml-4 md:text-3xl"
                      style={{ color: d.color }}
                    >
                      {d.value.toLocaleString("id-ID")}
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
              className="font-sora text-[9px] text-white md:text-lg"
            >
              <span className="mx-2 inline-block h-2 w-4 bg-[#F38989] align-middle md:h-4 md:w-6"></span>
              2021 (Sebelum Sirkuit Mandalika)
              <span className="mx-2 inline-block h-2 w-4 bg-[#45D80B] align-middle md:h-4 md:w-6"></span>
              2024 (Sesudah Sirkuit Mandalika)
              <br />
              <br />
              <span className="block text-center text-[9px] lg:!text-sm">
                Sumber: BPS (Badan Pusat Statistik) NTB & Lombok Tengah
              </span>
            </motion.p>
          </div>

          <div className="relative z-20 mx-auto w-full rounded-3xl bg-[#C44E5E]">
            <section className="mx-auto max-w-7xl px-6 py-6">
              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-3xl bg-[#31124b]/80 p-7 text-white shadow-lg md:p-9">
                  <header className="mb-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-neutral-100/70">
                      Tahun
                    </p>
                    <h2 className="text-2xl font-extrabold md:text-3xl">
                      2021
                    </h2>
                  </header>

                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">Hotel Berbintang</p>
                        <span className="text-lg font-bold">33,51%</span>
                      </div>
                      <div className="mt-2 h-3 w-full bg-white/20">
                        <div
                          className="h-3 bg-[#44d90c]"
                          style={{ width: "33.51%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">Hotel Non Berbintang</p>
                        <span className="text-lg font-bold">14,61%</span>
                      </div>
                      <div className="mt-2 h-3 w-full bg-white/20">
                        <div
                          className="h-3 bg-[#f38989]"
                          style={{ width: "14.61%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="rounded-3xl bg-[#31124b]/80 p-7 text-white shadow-lg md:p-9">
                  <header className="mb-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-neutral-100/70">
                      Tahun
                    </p>
                    <h2 className="text-2xl font-extrabold md:text-3xl">
                      2024
                    </h2>
                  </header>

                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">Hotel Berbintang</p>
                        <span className="text-lg font-bold">40,39%</span>
                      </div>
                      <div className="mt-2 h-3 w-full bg-white/20">
                        <div
                          className="h-3 bg-[#44d90c]"
                          style={{ width: "40.39%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">Hotel Non Berbintang</p>
                        <span className="text-lg font-bold">28,16%</span>
                      </div>
                      <div className="mt-2 h-3 w-full bg-white/20">
                        <div
                          className="h-3 bg-[#f38989]"
                          style={{ width: "28.16%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="rounded-3xl bg-[#31124b]/80 p-7 text-white shadow-lg md:col-span-2 md:p-9">
                  <header className="mb-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-neutral-100/70">
                      Ringkasan
                    </p>
                    <h2 className="text-2xl font-extrabold md:text-3xl">
                      Perubahan 2021 → 2024
                    </h2>
                  </header>

                  <ul className="space-y-4 text-base leading-relaxed">
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-3 w-3 rounded-full bg-[#44d90c]"></span>
                      <div>
                        <p className="font-semibold">Hotel Berbintang</p>
                        <p className="font-light">
                          Naik <span className="font-bold">+6,88 poin</span>{" "}
                          (dari 33,51% → 40,39%) ≈
                          <span className="font-bold">+20,53%</span> relatif.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-3 w-3 rounded-full bg-[#f38989]"></span>
                      <div>
                        <p className="font-semibold">Hotel Non Berbintang</p>
                        <p className="font-light">
                          Naik <span className="font-bold">+13,55 poin</span>{" "}
                          (dari 14,61% → 28,16%) ≈
                          <span className="font-bold">+92,74%</span> relatif.
                        </p>
                      </div>
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            <div className="relative mt-4 flex flex-row justify-center px-2 md:mt-12 md:px-24">
              <div className="w-1/2">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center font-sora text-base font-bold text-[#45D80B] md:text-xl"
                >
                  Tamu yang Menginap <br />
                  di Hotel Bintang (2024)
                </motion.p>
                <div className="mt-4 flex h-[25rem] items-end justify-center space-x-2 md:h-[40rem] md:space-x-6">
                  {DATAHOTEL.slice(0, 2).map((d, i) => {
                    const heightPx = (d.valueBar / MAXHOTEL) * barHeight;
                    return (
                      <div key={i} className="flex flex-col items-center">
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                          viewport={{ once: true, amount: 0.4 }}
                          className="mb-2 font-sora text-base font-bold text-white md:text-2xl"
                        >
                          {d.value.toLocaleString("id-ID")}
                        </motion.span>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: heightPx, opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.2,
                            ease: "easeOut",
                          }}
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
                  className="text-center font-sora text-base font-bold text-[#45D80B] md:text-xl"
                >
                  Tamu yang Menginap <br />
                  di Hotel Non Bintang (2024)
                </motion.p>
                <div className="mt-4 flex h-[25rem] items-end justify-center space-x-2 md:h-[40rem] md:space-x-6">
                  {DATAHOTEL.slice(2, 4).map((d, i) => {
                    const heightPx = (d.valueBar / MAXHOTEL) * barHeight;
                    return (
                      <div key={i} className="flex flex-col items-center">
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                          viewport={{ once: true, amount: 0.4 }}
                          className="mb-2 font-sora text-base font-bold text-white md:text-2xl"
                        >
                          {d.value.toLocaleString("id-ID")}
                        </motion.span>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: heightPx, opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.2,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true, amount: 0.4 }}
                          style={{ backgroundColor: d.color }}
                          className="w-8 md:w-16"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="absolute bottom-0">
                <motion.img
                  src={`${baseUrl}/assets/3.3.png`}
                  alt="People"
                  className="w-[90%] h-auto mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <div className="mt-8 text-sm lg:text-base items-center font-medium absolute bottom-0 w-full bg-white/70 backdrop-blur-xl inset-x-0 rounded-b-3xl py-4 flex justify-center">
                  <span className="inline-block w-4 h-2 md:w-6 md:h-4 bg-[#2c2940] mx-2 align-middle"></span>
                  Tamu Asing
                  <span className="inline-block w-4 h-2 md:w-6 md:h-4 bg-[#c2272f] ml-6 mx-2 align-middle"></span>
                  Tamu Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-10 h-[20rem] w-full bg-gradient-to-t from-[#964666]"></div>
      <div className="absolute bottom-16 z-40 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full max-w-xl sm:block"
        />
      </div>
    </div>
  );
}
