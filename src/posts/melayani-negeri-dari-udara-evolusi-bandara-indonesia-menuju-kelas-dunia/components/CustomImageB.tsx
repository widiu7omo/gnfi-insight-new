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

export function CustomImageB() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 h-80 bg-linear-to-b from-[#98cae6] z-10"></div>
      <div
        className="relative w-full justify-center bg-cover bg-bottom pt-16 pb-0 md:pt-24"
        style={{ backgroundImage: `url(/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.0.png)` }}
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4 z-20">
          <motion.h2
            className="font-sora text-[#151516] font-bold text-[32px] md:text-[46px] md:leading-14 pr-0 lg:pr-[50%]"
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
            Bandara Indonesia di Mata Dunia
          </motion.h2>
          <motion.p
            className="mt-2 md:mt-6 font-sora text-[#151516] text-xl md:text-[28px] md:leading-10 lg:pr-[40%]"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Transformasi bandara Indonesia makin diakui global. Soekarno-Hatta naik peringkat di Skytrax World Airports Awards:
          </motion.p>
          <div className="relative w-full md:mt-0 mt-8">
            <motion.img
              src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.1.png`}
              alt="Bandara"
              className="mx-auto w-full md:mt-8 lg:mt-0 md:mb-8 lg:mb-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.5.png`}
              alt="Chart 2023"
              className="absolute top-[20%] left-[30%] w-1/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.6.png`}
              alt="Chart 2024"
              className="absolute top-[5%] left-[45%] w-[22%]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.7.png`}
              alt="Chart 2025"
              className="absolute -top-[10%] right-[14%] w-1/4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="hidden md:block absolute z-10 bottom-[10%] left-1/2 -translate-x-1/2 w-full md:w-[40%] md:left-auto md:right-0 md:translate-x-0">
              <div className="relative rounded-xl shadow-lg">
                <motion.img
                  src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.2.png`}
                  alt="Bandara"
                  className="w-full rounded-t-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.img
                  src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.3.png`}
                  alt="Badge"
                  className="absolute z-20 md:bottom-[45%] lg:bottom-[35%] -left-[12%] -translate-x-[30%] translate-y-1/2 w-1/3 md:w-1/4"
                  initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: "spring", delay: 0.1, stiffness: 60 }} viewport={{ once: true }}
                />
                <motion.div
                  className="bg-[#C2DAFF] py-8 px-6 rounded-b-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <p className="text-[#151515] font-sora text-base md:text-lg lg:text-xl">
                    Kini Soekarno-Hatta berstatus 4-Star Airport, sejajar dengan Changi & Incheon
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="md:hidden relative rounded-xl shadow-lg mx-[10%] my-8">
            <motion.img
              src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.2.png`}
              alt="Overlay"
              className="w-full rounded-t-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.3.png`}
              alt="Badge"
              className="absolute z-20 bottom-[40%] -left-[10%] -translate-x-[30%] translate-y-1/2 w-1/5 md:w-1/4"
              initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: "spring", delay: 0.2, stiffness: 60 }} viewport={{ once: true }}
            />
            <motion.div className="bg-[#C2DAFF] px-6 py-4 lg:p-6 rounded-b-xl" initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}>
              <p className="text-[#151515] font-sora text-lg lg:text-xl">
                Kini Soekarno-Hatta berstatus 4-Star Airport, sejajar dengan Changi & Incheon
              </p>
            </motion.div>
          </div>
        </div>
        <div className="bg-[#0D4485] w-full py-10 md:py-20 md:pb-44 rounded-t-[3rem] md:rounded-t-[5rem]">
          <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4 flex flex-col justify-center">
            <motion.p
              className="font-sora self-center bg-[#D1A42F] px-8 py-2 text-base md:text-xl rounded-full text-[#151516] mb-4 md:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 12 }}
              viewport={{ once: true }}
            >
              Target berikutnya:
            </motion.p>
            <div className="flex space-x-4 md:space-x-8 items-center md:border-2 md:border-[#D1A42F] md:rounded-full pl-0 py-0 pr-4 md:pr-8">
              <motion.img
                src={`/assets/melayani-negeri-dari-udara-evolusi-bandara-indonesia-menuju-kelas-dunia/2.4.png`}
                alt="Badge"
                className="basis-1/3 max-w-[100px] md:max-w-[180px] shrink-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              />
              <div className="flex flex-col md:flex-row md:items-center">
                <motion.p className="font-sora font-semibold md:w-[50%] text-white text-xl md:text-3xl" initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}>5-Star <span className="hidden md:inline"><br /></span>
                  <span className="inline md:hidden"> </span>Airport 2026</motion.p>
                <motion.p
                  className="text-white text-lg md:text-2xl md:w-[68%]"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Soekarno-Hatta berambisi berdiri sejajar dengan hub global seperti Changi, Hamad, dan Icheon
                </motion.p>
              </div>
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
