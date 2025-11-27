import { motion } from "motion/react";

export function CustomImageC() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pb-24 pt-16 md:pb-56 md:pt-24 xl:pb-120"
        style={{ backgroundImage: `url(/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.0.jpg)` }}
      >
        <div className="absolute left-0 top-0 h-[30%] w-full bg-linear-to-b from-[#000000]" />
        <div className="z-1 relative mx-auto max-w-4xl items-center px-4 lg:px-0">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-2/3 text-left font-sora text-[2rem] font-bold leading-normal text-white md:w-2/3 md:text-[48px] lg:text-[64px]"
          >
            Demam Padel Melanda Jakarta
          </motion.h3>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="mb-8 mt-4 w-1/2 max-w-2xl text-left font-sora text-xl font-semibold text-white md:mb-12 md:mt-8 md:w-1/3 md:text-3xl"
          >
            Olahraga padel kini tengah <i>booming </i> <br />
            di Jakarta
          </motion.p>
          <div className="flex items-center bg-[#0F2A26] py-4 pr-4 md:w-[55%]">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.2.png`}
              alt="Lapanga"
              className="relative z-10 h-auto w-1/2 pr-8 md:-ml-8"
            />
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl text-white md:text-2xl"
            >
              Jumlah lapangannya saja diperkirakan mencapai <strong>200</strong>{" "}
              pada tahun 2025 ini
            </motion.p>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col justify-center bg-[#0F2A26] bg-cover bg-center px-0 text-center md:flex-row">
        <div className="relative w-full md:w-1/2">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.3.1.png`}
            alt="Lapangan"
            className="h-40 w-full object-cover md:h-56 lg:h-80"
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.3.2.png`}
            alt="Orang"
            className="absolute bottom-0 right-0 z-20 w-full max-w-[324px] object-cover md:bottom-4 md:max-w-[600px] xl:bottom-8 xl:max-w-[800px]"
          />
          <div className="absolute bottom-0 left-0 h-[30%] w-full bg-linear-to-t from-[#0F2A26] md:hidden" />
          <div className="absolute right-0 top-0 hidden h-full w-[30%] bg-linear-to-l from-[#0F2A26] to-transparent md:block" />{" "}
        </div>
        <div className="relative w-full md:w-1/2">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.3.0.png`}
            alt="bg"
            className="h-20 w-full object-cover md:h-56 lg:h-80"
          />
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute inset-0 mt-0 flex w-full items-center px-4 text-left md:max-w-[400px] lg:px-0"
          >
            <motion.p className="font-sera mx-auto mt-0 text-center text-xl font-bold text-white drop-shadow-lg md:mt-0 md:text-left md:text-3xl lg:text-5xl">
              Mengapa padel begitu diminati?
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div
        className="relative w-full justify-center bg-cover bg-center pb-10 pt-12 md:pb-40 md:pt-28"
        style={{ backgroundImage: `url(/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.4.jpg)` }}
      >
        {" "}
        <div className="z-1 relative z-10 mx-auto max-w-4xl items-center px-4 lg:px-10">
          <div className="mt-20 flex flex-col space-y-20 md:flex-row md:space-x-12 md:space-y-0">
            <div className="relative w-full rounded-2xl bg-[#053134] px-4 py-12 md:w-1/2 md:rounded-4xl md:px-8 md:py-14">
              <div className="text-white">
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="font-sora text-lg font-bold md:text-2xl"
                >
                  "Padel itu mengharuskan untuk ngumpul dan bertemu. Ibaratnya
                  kalau sehabis ngantor kita nongkrong, ini nongkrongnya sambil
                  olahraga. Sehat."
                </motion.p>

                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="mt-4 font-sora text-lg md:mt-10 md:text-xl"
                >
                  Founder & Owner Basic Padel Reserve, Erik Fatono
                </motion.p>
              </div>

              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.5.png`}
                alt="Foto"
                className="absolute -top-16 left-2 z-10 h-auto w-[23%] md:-top-24 md:w-1/3"
              />
            </div>

            <div className="relative w-full rounded-2xl bg-[#053134] px-4 py-12 md:w-1/2 md:rounded-4xl md:px-8 md:py-14">
              <div className="text-white">
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="font-sora text-lg font-bold md:text-2xl"
                >
                  "Tetapi kan padel ini juga dari sisi teknis nggak terlalu
                  demanding, yang kedua juga <i>entry barrier-</i>nya rendah
                  karena ketika kamu pengin coba padel, bisa datang ke
                  lapangan."
                </motion.p>

                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="mt-4 font-sora text-lg md:mt-10 md:text-xl"
                >
                  pegiat olahraga padel dari komunitas Sepadel, Hiro Wardhana
                </motion.p>
              </div>

              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.6.png`}
                alt="Bola"
                className="absolute -top-16 left-2 z-10 h-auto w-[23%] md:-top-24 md:w-1/3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 h-[20%] w-full bg-linear-to-t from-[#125788]" />

      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
