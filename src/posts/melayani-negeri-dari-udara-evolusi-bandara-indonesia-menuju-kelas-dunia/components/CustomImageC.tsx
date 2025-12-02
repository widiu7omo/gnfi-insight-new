import { motion, Variants } from "motion/react";

const textVariant: Variants = {
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

export function CustomImageC() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="bg-[#FBFBFB] w-full pt-20 pb-6 md:pt-24 md:pb-8 relative">
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4">
          <div className="relative flex flex-col md:flex-row">
            <div className="w-full md:w-[58%] relative z-10">
              <motion.h2
                className="font-sora text-[#3B3A3C] font-bold text-[32px] md:text-[46px] md:leading-14"
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
                Pertumbuhan Penumpang & Dampak Ekonomi
              </motion.h2>
              <motion.p
                className="mt-2 md:mt-6 font-sora text-[#5F6F94] text-xl md:text-[28px] md:leading-10"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                Jumlah penumpang udara melonjak drastis dalam dua dekade terakhir
              </motion.p>
            </div>
            <motion.img
              src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/3.1.png`}
              alt="Pesawat"
              className="absolute -top-[30%] hidden md:block md:top-0 right-0 w-[150px] md:w-[360px] lg:w-[460px] z-20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex md:flex-row flex-col md:mt-24 md:space-x-8">
            <div className="relative inline-block w-full md:w-[70%] mt-[26%] md:mt-4 lg:mt-0">
              <motion.img
                src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/3.2.png`}
                alt="Bar chart"
                className="w-full h-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.div className="absolute bottom-[32%] md:bottom-[30%] -left-2 md:left-0 lg:left-[2%]"
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.2 }}
                viewport={{ once: true }}>
                <div className="bg-[#124B94] font-sora text-white text-center rounded-lg px-4 py-2 md:px-5 md:py-4 text-sm md:text-lg shadow-lg">
                  <span className="text-lg md:text-2xl lg:text-3xl font-bold">8</span> <span className="font-bold">Juta</span>
                </div>
                <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-0 h-0
  border-l-8 border-r-8 border-t-30 
  border-l-transparent border-r-transparent border-t-[#124B94]">
                </div>
              </motion.div>
              <motion.div className="absolute -top-2 md:top-[4%] lg:top-[6%] left-[20%] md:left-[18%] lg:left-[20%]" initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.2 }}
                viewport={{ once: true }}>
                <div className="bg-[#124B94] font-sora text-white text-center font-bold rounded-lg px-4 md:px-7 py-1 text-sm md:text-lg shadow-lg">
                  <span className="text-lg md:text-2xl lg:text-3xl">94,5</span> <br /> Juta
                </div>
                <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-0 h-0
  border-l-8 border-r-8 border-t-30 
  border-l-transparent border-r-transparent border-t-[#124B94]">
                </div>
              </motion.div>
              <motion.div className="absolute -top-[20%] md:-top-[14%] left-[38%] md:left-[40%]" initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.2 }}
                viewport={{ once: true }}>
                <div className="bg-[#124B94] font-sora text-white text-center font-bold rounded-lg px-7 py-1 text-sm md:text-lg shadow-lg">
                  <span className="text-lg md:text-2xl lg:text-3xl">110</span> <br /> Juta
                </div>
                <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-0 h-0
  border-l-8 border-r-8 border-t-30 
  border-l-transparent border-r-transparent border-t-[#124B94]">
                </div>
              </motion.div>
              <motion.div className="absolute top-[28%] lg:top-[32%] left-[56%] lg:left-[59%]" initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.2 }}
                viewport={{ once: true }}>
                <div className="bg-[#124B94] font-sora text-white text-center rounded-lg px-2 md:px-5 py-1 text-sm md:text-lg shadow-lg">
                  <span className="text-lg md:text-2xl lg:text-3xl font-bold">36</span> <span className="font-bold">Juta</span><br /> (Pandemi)
                </div>
                <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-0 h-0
  border-l-8 border-r-8 border-t-30 
  border-l-transparent border-r-transparent border-t-[#124B94]">
                </div>
              </motion.div>
              <motion.div className="absolute top-[6%] md:top-9 lg:top-14 right-0 md:left-[80%]" initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.2 }}
                viewport={{ once: true }}>
                <div className="bg-[#124B94] font-sora text-white text-center rounded-lg px-1.5 md:px-4 py-1 text-sm md:text-lg shadow-lg">
                  Pulih ke<br /> <span className="text-lg md:text-2xl lg:text-3xl font-bold">77</span> <span className="font-bold text-sm md:text-lg">Juta</span>
                </div>
                <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-0 h-0
  border-l-8 border-r-8 border-t-30 
  border-l-transparent border-r-transparent border-t-[#124B94]">
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-[30%] text-center">
              {/* Card atas */}
              <motion.div
                className="bg-[#33D4FE] rounded-t-3xl p-4 pb-10 md:pt-8 lg:pb-14 lg:px-6 lg:pt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 70,
                }}
                viewport={{ once: true }}
              >
                <p className="text-[#5F6F94] text-xl lg:text-[28px]">Proyeksi IATA:</p>
                <p className="text-[#001123] font-bold text-4xl lg:text-5xl mt-2 md:mt-3">270 Juta</p>
              </motion.div>

              {/* Card bawah */}
              <motion.div
                className="bg-[#036ADB] rounded-3xl -mt-8 p-4 md:py-8 md:px-2 lg:py-14"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.9,
                  type: "spring",
                  stiffness: 60,
                  delay: 0.2,
                }}
                viewport={{ once: true }}
              >
                <p className="text-white text-xl lg:text-[28px] leading-10">
                  penumpang /tahun pada 2034
                </p>
                <p className="text-[#FFD800] font-bold text-xl md:text-2xl lg:text-3xl">posisi</p>
                <p className="text-[#FFD800] font-bold text-4xl lg:text-5xl">6 dunia</p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
      <div
        className="z-20 relative w-full justify-center bg-no-repeat bg-top bg-cover min-h-[800px] pt-16 pb-0 md:pt-24"
        style={{ backgroundImage: `url(/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/3.0.png)` }}
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4 justify-center">
          <motion.p
            className="text-center text-white font-black text-3xl md:text-3xl xl:text-5xl mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 70,
              delay: 0.2
            }}
            viewport={{ once: true }}
          >
            Dampak ekonomi:
          </motion.p>
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-8 mt-24 md:pb-20 pb-0 mb-20">
            <div className="bg-[#073B7D] px-4 py-6 w-full md:w-1/3 rounded-3xl text-center md:text-left">
              <motion.img
                src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/3.3.png`}
                alt="Bar chart"
                className="w-[60%] md:w-full h-auto -mt-12 mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.p className="text-white font-bold text-2xl md:text-3xl px-4 mt-8 font-sora" variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}>Pariwisata Tumbuh </motion.p>
              <motion.p className="text-[#FFD800] text-5xl md:text-7xl font-bold font-sora px-4" variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}>80%</motion.p>
              <motion.p className="text-white text-lg md:text-2xl px-4 font-sora" variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}>turis asing via Bali & Jakarta</motion.p>
            </div>
            <div className="bg-[#073B7D] px-4 py-6 w-full md:w-1/3 rounded-3xl">
              <motion.img
                src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/3.4.png`}
                alt="Bar chart"
                className="w-[60%] md:w-full h-auto -mt-8 mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.25 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.p className="text-white text-2xl md:text-3xl font-sora mt-10" variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}>UMKM lokal hidup lewat kios di terminal</motion.p>
            </div>
            <div className="bg-[#073B7D] px-4 py-6 w-full md:w-1/3 rounded-3xl">
              <motion.img
                src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/3.5.png`}
                alt="Bar chart"
                className="w-[60%] md:w-full h-auto -mt-8 mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.p className="text-white font-semibold text-2xl md:text-4xl mt-8 px-4" variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}>Logistik lebih cepat:</motion.p>
              <motion.p className="text-white text-xl md:text-[22px] px-4" variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}>Harga semen Papua turun, akses medis Maluku lebih mudah</motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
