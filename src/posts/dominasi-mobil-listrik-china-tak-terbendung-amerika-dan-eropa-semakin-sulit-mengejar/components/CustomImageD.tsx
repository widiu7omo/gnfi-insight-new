import { motion } from "motion/react";

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="h-20 w-full bg-[#0D0F12] md:h-40 lg:h-80" />
      <div
        className="relative w-full justify-center bg-cover bg-center pb-20 pt-16 md:pt-20 lg:pb-64"
        style={{ backgroundImage: `url(/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/4.1.jpg)` }}
      >
        <div className="absolute left-0 top-0 h-[30%] w-full bg-linear-to-b from-[#0D0F12]" />
        <div className="z-1 relative mx-auto mb-12 max-w-4xl items-center px-4 md:mb-20 lg:px-0">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="-mt-[20%] mb-6 text-center font-sora text-[1.75rem] font-bold text-white md:mb-8 md:text-[48px] md:leading-none lg:-mt-[35%] lg:mb-12 lg:text-[70px]"
          >
            Tantangan Eropa <br />
            yang Semakin Berat
          </motion.h3>
        </div>
        <div className="relative mx-auto w-full px-4 md:max-w-4xl lg:px-0">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/4.2.png`}
            alt="Mobil Biru"
            className="absolute right-0 top-[15%] z-10 hidden h-auto w-full object-contain md:block md:w-[70%]"
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/4.2.png`}
            alt="Mobil Biru"
            className="z-10 h-auto w-full object-contain md:hidden"
          />

          <div className="relative z-20 flex w-full items-start gap-4 md:w-[40%]">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/4.6.png`}
              alt="Arrow"
              className="h-auto w-8 object-contain md:w-16"
            />
            <div className="flex flex-col">
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-4 text-xl font-bold text-white md:text-2xl lg:mb-8 lg:text-4xl"
              >
                Penjualan yang Menurun dan Perubahan Sentimen Konsumen
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-base text-white md:text-xl"
              >
                Pasar mobil listrik Eropa, setelah beberapa tahun pertumbuhan
                yang menjanjikan, mengalami sedikit guncangan, di tahun 2024
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative w-full justify-center bg-cover bg-center pb-10 md:pb-20"
        style={{ backgroundImage: `url(/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/4.7.png)` }}
      >
        <div className="relative mx-auto max-w-4xl items-center justify-center space-x-0 md:flex-row md:space-x-12 md:px-0">
          <div className="flex flex-col gap-x-0 md:flex-row md:gap-x-0 lg:gap-x-0">
            <div className="flex w-full flex-col px-4 md:px-0">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/4.3.png`}
                alt="Mobil"
                className="z-30 -mt-[10%] ml-0 h-auto w-full object-contain md:ml-0 lg:-mt-[20%]"
              />
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/4.5.png`}
                alt="orang"
                className="z-30 mb-8 ml-0 mt-[10%] h-auto w-[45%] object-contain md:mb-0 md:ml-12 md:mt-[20%] md:w-[60%] lg:ml-12 lg:mt-[10%] lg:pl-0"
              />
            </div>
            <div className="ld:pr-0 flex w-full flex-col px-4 md:w-full md:items-end lg:pr-4 relative">
              <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/4.4.png`}
                  alt="Orang"
                className="absolute -top-42 sm:top-[-260px] md:top-[-210px] right-10 z-10 h-auto w-[40%] object-contain md:w-[60%]"
                />
              <div className=" z-40 ml-0 w-full rounded-2xl bg-[#10122B] px-6 py-4 font-bold text-white lg:px-8">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-lg font-bold md:text-2xl lg:text-4xl font-sans"
                >
                  Penjualan secara keseluruhan turun sekitar
                </motion.p>
                <motion.div
                  className="flex justify-center md:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="text-[4rem] text-[#B83049] md:text-[6rem]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    viewport={{ once: true }}
                  >
                    3%
                  </motion.p>
                  <img
                    src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/4.6.png`}
                    alt="Arrow"
                    style={{ transform: "scaleX(-1)" }}
                    className="-mt-[14%] h-auto w-8 object-contain md:w-12"
                  />
                </motion.div>
                <motion.p
                  className="text-base font-normal md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  dengan jumlah total registrasi sekitar EV sedikit di atas 2,96
                  juta unit - <strong>penurunan 1,8%</strong> dibandingkan tahun
                  2023
                </motion.p>
              </div>
              <motion.div
                className="z-40 ml-0 mt-4 w-full rounded-2xl bg-[#08091B] px-6 py-4 font-bold text-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-base font-normal md:text-xl">
                  Angka ini menunjukkan potensi{" "}
                  <strong>perlambatan pertumbuhan</strong>, bahkan stagnasi, di
                  pasar yang sebelumnya menunjukkan perkembangan positif
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
