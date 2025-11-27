import { motion } from "motion/react";

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pt-6 md:pt-20 lg:py-32 lg:pb-4"
        style={{ backgroundImage: `url(/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/4.1.png)` }}
      >
        <div className="absolute top-0 h-[20%] w-full bg-linear-to-b from-[#001c38]" />
        <div className="mx-auto flex flex-col justify-center">
          <div className="z-10 mx-auto mb-12 max-w-4xl md:mb-0">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center font-sora text-[1.75rem] font-bold leading-normal text-white md:pb-10 md:pl-[30%] md:text-left md:text-[48px] lg:text-[64px]"
            >
              Main Padel, <br /> Nggak Pake Ribet!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-14 mt-4 text-center font-sora text-lg font-bold text-white md:mb-0 md:mt-0 md:pb-0 md:pl-[30%] md:text-left md:text-xl lg:pb-10 lg:text-3xl"
            >
              Main Padel tidak membutuhkan banyak peralatan. Hanya butuh 3 benda
              ini:
            </motion.p>
          </div>

          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/4.2.png`}
            alt="Yellow Background"
            className="z-20 mx-auto min-h-80 w-full max-w-4xl object-cover md:h-full lg:max-h-[80%]"
          />
          <div className="relative z-30 flex flex-col items-center">
            <div className="-ml-[62%] -mt-[88%] h-40 border-l-4 border-dashed border-white md:-ml-[60%] md:-mt-[90%] md:h-72 lg:-ml-152 lg:-mt-200 lg:h-88" />
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="-ml-[50%] rounded-full bg-white px-2 md:-ml-[45%] md:-mt-4 md:px-4 lg:-ml-120"
            >
              <p className="font-sora text-base font-semibold text-[#01343B] md:text-4xl">
                Raket
              </p>
            </motion.div>
          </div>

          <div className="relative mx-auto flex items-center">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.6.png`}
              alt="Bola"
              className="z-20 -mt-212 h-8 w-8 md:-mt-360 md:h-16 md:w-16 lg:-mt-392"
            />
            <div className="z-0 -mt-212 h-1 w-28 border-t-4 border-dashed border-white md:-mt-360 md:w-56 lg:-mt-392" />
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="-mt-212 rounded-full bg-white px-2 py-2 md:-mt-360 md:px-4 lg:-mt-392"
            >
              <p className="font-sora text-base font-semibold text-[#01343B] md:text-4xl">
                Bola
              </p>
            </motion.div>
          </div>

          <div className="relative z-30 flex flex-col items-center">
            <div className="-mt-32 h-16 border-l-4 border-dashed border-white md:-mt-64" />
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="-mt-2 ml-24 rounded-full bg-white px-2 md:ml-48 md:px-4"
            >
              <p className="font-sora text-base font-semibold text-[#01343B] md:text-4xl">
                Lapangan
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative mt-20 flex w-full flex-col-reverse justify-center bg-[#0F2A26] bg-cover bg-center px-0 text-center md:mt-0 md:flex-row">
          <div className="relative w-full md:w-1/2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/4.6.png`}
              alt="bg"
              className="h-60 w-full object-cover md:h-56 lg:h-80"
            />

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 flex h-full w-full items-center justify-end px-4 lg:px-0"
            >
              <div className="max-w-[500px] space-y-4 text-left">
                <motion.p className="font-sera text-xl text-white drop-shadow-lg md:text-2xl lg:text-3xl">
                  Tidak harus punya sendiri, ketiganya tinggal disewa
                </motion.p>
                <motion.p className="font-sera text-xl text-white drop-shadow-lg md:text-2xl lg:text-3xl">
                  <i>Outfit-nya?</i> Pakaian dan sepatu olahraga sudah cukup
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="relative w-full md:w-1/2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/4.3.png`}
              alt="Lapangan"
              className="h-40 w-full object-cover md:h-56 lg:h-80"
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/4.4.png`}
              alt="Orang"
              className="absolute bottom-4 left-0 z-20 w-full max-w-[324px] object-cover md:bottom-4 md:max-w-[600px] xl:bottom-4 xl:max-w-[420px]"
            />
            <div className="absolute bottom-0 left-0 h-[30%] w-full bg-linear-to-t from-[#0F2A26] md:hidden" />
            <div className="absolute right-0 top-0 hidden h-full w-[30%] bg-linear-to-l from-[#0F2A26] to-transparent md:block" />{" "}
          </div>
        </div>

        <div className="z-10 relative mx-auto max-w-2xl px-4 py-10 md:pb-32 md:pt-20 lg:px-0">
          <div className="flex items-center rounded-[4rem] bg-[#01343B] px-6 py-4 md:px-8">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/3.5.png`}
              alt="bg"
              className="h-24 w-24 object-cover md:h-32 md:w-32"
            />

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
              className="ml-4 flex-1 md:ml-8"
            >
              <p className="font-sora text-lg font-semibold leading-8 text-white md:text-[1.4rem] md:font-bold">
                "Dari orang yang mau tampil stylish sampai yang nggak mikir
                outfit bisa main."
                <span className="font-normal"> Erik Fatono</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[20%] w-full bg-linear-to-t from-[#125788]" />

      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
