"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const subtleScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggered = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};


export function CustomImageA() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-[#bec6c9]">
      <div className="relative w-full pt-16 pb-10 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <motion.h2
            className="mb-6 font-sora text-[28px] font-bold text-[#3b3a3c] leading-tight md:mb-12 md:text-[54px] md:leading-[3.5rem]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Masa Awal & Perkembangan <br />
            Bandara di Indonesia
          </motion.h2>
        </div>
        <motion.div
          className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 md:flex-row md:items-end md:gap-12 md:px-8 lg:px-0"
          variants={staggered}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="z-0 flex w-full flex-1 flex-col">
            <motion.p
              className="mb-4 font-sora text-xl font-semibold leading-[1.4] text-[#3b3a3c] md:mb-6 md:text-[34px] md:leading-[2.5rem]"
              variants={fadeUp}
            >
              Di awal 2000-an, Indonesia <br />
              baru memiliki sekitar
            </motion.p>
            <motion.p
              className="font-sora text-6xl font-black tracking-tight text-[#ed514c] sm:text-7xl md:text-8xl"
              variants={fadeUp}
            >
              170-180
              <br />
              bandara
            </motion.p>
            <motion.p
              className="mt-4 font-sora text-lg font-semibold leading-[1.6] text-[#3b3a3c] md:text-2xl md:leading-[2.5rem]"
              variants={fadeUp}
            >
              sebagian besar berupa bandara kecil perintis tanpa fasilitas modern
            </motion.p>
          </div>
          <motion.div className="flex w-full flex-1 justify-center md:justify-end" variants={fadeUp}>
            <motion.img
              src={`${baseUrl}/assets/1.1.png`}
              alt="Landing Plane"
              className="h-auto w-full max-w-md rounded-t-3xl md:max-w-none"
              variants={subtleScale}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="relative w-full rounded-t-full bg-[#37586e] pb-10 pt-0 md:rounded-t-[16rem] md:pb-24">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-12 md:px-8 lg:px-0">
          <div className="rounded-[3rem] bg-[#ffc637] px-4 py-10 sm:px-8 md:rounded-[4rem] md:px-12">
            <motion.div
              className="relative flex flex-col gap-6 rounded-3xl bg-[#ed514c] p-6 sm:p-8 md:flex-row md:items-center md:gap-12 md:p-10 lg:pl-[13rem]"
              variants={staggered}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.img
                src={`${baseUrl}/assets/1.2.png`}
                alt="Serat Centhini"
                className="relative z-30 -mt-14 h-auto w-40 self-center sm:-mt-20 sm:w-48 md:absolute md:-bottom-6 md:-left-24 md:mt-0 md:w-[20rem]"
                variants={subtleScale}
              />
              <motion.p
                className="font-sora text-center text-base text-white leading-relaxed sm:text-lg md:text-2xl md:text-left"
                variants={fadeUp}
              >
                Mobilitas masyarakat luar Jawa masih sangat bergantung pada kapal laut
              </motion.p>
            </motion.div>
            <motion.div
              className="mt-10 flex flex-col items-center gap-6 text-center text-[#37586e] sm:text-left md:flex-row md:items-start md:justify-between"
              variants={staggered}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                className="font-sora text-6xl font-bold leading-none sm:text-7xl md:text-[9rem]"
                variants={subtleScale}
              >
                2025
              </motion.span>
              <motion.span
                className="max-w-xl font-sora text-lg md:text-xl"
                variants={fadeUp}
              >
                Jumlah bandara tembus 300+ unit di masa pembangunan Presiden Susilo Bambang Yudhoyono dan berlanjut di era Joko Widodo
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <motion.p
            className="font-sora text-lg font-medium text-white md:w-2/3 md:text-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Bandara baru di wilayah terluar dan perbatasan menjadi prioritas:
          </motion.p>
          <div className="relative">
            <img src={`${baseUrl}/assets/1.5.png`} alt="Map IDN" className="mt-24 opacity-60" />
            <img src={`${baseUrl}/assets/1.6.png`} alt="Pin Letung" className="absolute inset-0" />
            <img src={`${baseUrl}/assets/1.7.png`} alt="Pin Miangas" className="absolute inset-0" />
            <img src={`${baseUrl}/assets/1.8.png`} alt="Pin Koroway" className="absolute inset-0" />

            <div className="md:flex hidden absolute top-[0%] left-[20.5%] gap-2 flex-col">
              <div className="text-white font-sora flex flex-col">
                <p className="text-2xl font-medium">Letung & Tambelan</p>
                <p className="text-sm font-medium">Kepulauan Riau</p>
              </div>
            </div>
            <div className="md:flex hidden absolute top-[2%] right-[17.5%] gap-5">
              <div className="text-white font-sora">
                <p className="text-2xl font-medium">Miangas</p>
                <p className="text-sm font-medium">Sulawesi Utara</p>
              </div>
            </div>
            <div className="md:flex hidden absolute top-[39%] right-[0%] items-end flex-col">
              <div className="text-white font-sora flex flex-col items-end mb-2">
                <p className="text-2xl font-medium">Koroway Batu</p>
                <p className="text-sm font-medium">Papua</p>
              </div>
            </div>
          </div>
          <motion.ul
            className="mt-10 grid gap-6 text-white md:hidden"
            variants={staggered}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <li className="flex flex-col rounded-2xl bg-white/10 p-4">
              <span className="font-sora text-xl font-semibold">Letung & Tambelan</span>
              <span className="font-sora text-sm">Kepulauan Riau</span>
            </li>
            <li className="flex flex-col rounded-2xl bg-white/10 p-4">
              <span className="font-sora text-xl font-semibold">Miangas</span>
              <span className="font-sora text-sm">Sulawesi Utara</span>
            </li>
            <li className="flex flex-col rounded-2xl bg-white/10 p-4">
              <span className="font-sora text-xl font-semibold">Koroway Batu</span>
              <span className="font-sora text-sm">Papua</span>
            </li>
          </motion.ul>
          <div className="relative font-sora py-12">
            <motion.p
              className="uppercase text-sm font-semibold tracking-widest text-white md:text-base"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              megaproyek bandara skala besar juga muncul:
            </motion.p>
            <motion.ul
              className="mt-6 space-y-4 text-white"
              variants={staggered}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.li className="flex items-center gap-4 rounded-2xl bg-white/10 p-4" variants={fadeUp}>
                <img src={baseUrl + "/assets/1.4.png"} alt="Ikon Bandara" className="h-12 w-12" />
                <div>
                  <p className="text-2xl font-medium md:text-3xl">Yogyakarta International Airport (YIA)</p>
                  <p className="text-base md:text-xl">(2019) kapasitas 20 juta penumpang /tahun</p>
                </div>
              </motion.li>
              <motion.li className="flex items-center gap-4 rounded-2xl bg-white/10 p-4" variants={fadeUp}>
                <img src={baseUrl + "/assets/1.4.png"} alt="Ikon Bandara" className="h-12 w-12" />
                <div>
                  <p className="text-2xl font-medium md:text-3xl">Kertajati International Airport</p>
                  <p className="text-base md:text-xl">(2018) hub baru Jawa Barat</p>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
