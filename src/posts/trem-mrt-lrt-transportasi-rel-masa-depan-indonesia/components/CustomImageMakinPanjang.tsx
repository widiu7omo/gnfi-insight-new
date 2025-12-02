"use client";
import { motion } from "motion/react";

export function CustomImageMakinPanjang() {
  const simpleFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-cover">
      <div className="bg-linear-to-b from-black absolute left-0 right-0 top-0 bottom-0" />
      <div
        className="relative flex h-screen w-full justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: `url(/assets/trem-mrt-lrt-transportasi-rel-masa-depan-indonesia/4.1.png)` }}
      >
        <div className="bg-linear-to-b from-[#abd4f7] absolute left-0 right-0 top-0 h-[50%]" />
        <div className="relative z-20 mx-auto my-auto max-w-4xl text-white lg:mt-[10%]">
          <motion.p
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl font-extrabold text-black md:text-6xl"
          >
            Makin <span className="text-[#2e469f]">Panjang</span>
            <br />
            Makin <span className="text-[#d62e31]">Berkembang</span>
          </motion.p>

          <motion.p
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-xl font-bold text-black md:text-4xl"
          >
            Di Kota Jakarta, MRT & LRT
            <br /> tengah diperpanjang rutenya
          </motion.p>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center bg-[#2e469f] px-2 py-16 md:px-0 md:py-20">
        <div className="relative z-20 flex w-full max-w-4xl items-center justify-center space-x-2 px-0 md:px-8">
          <div className="flex w-1/2 justify-center">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              src={`/assets/trem-mrt-lrt-transportasi-rel-masa-depan-indonesia/4.2.png`}
              alt="Title"
              className="h-auto w-full max-w-sm"
            />
          </div>
          <div className="flex w-1/2 flex-col items-start">
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              src={`/assets/trem-mrt-lrt-transportasi-rel-masa-depan-indonesia/4.3.png`}
              alt="Title"
              className="mb-4 h-12 w-auto max-w-sm md:h-24"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base text-white md:text-3xl"
            >
              Untuk MRT nantinya <br /> penumpang bisa menikmati <br />
              layanan hingga wilayah
              <br />
              <span className="rounded-3xl border border-white px-2">
                Glodok dan Kota Tua
              </span>
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center bg-[#d62e31] px-2 py-16 md:px-0 md:py-20">
        <div className="relative z-20 flex w-full max-w-4xl items-center justify-center space-x-2 px-0 md:px-8">
          <div className="flex w-1/2 justify-center">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              src={`/assets/trem-mrt-lrt-transportasi-rel-masa-depan-indonesia/4.5.png`}
              alt="Title"
              className="h-auto w-[90%] max-w-sm"
            />
          </div>
          <div className="flex w-1/2 flex-col items-start">
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              src={`/assets/trem-mrt-lrt-transportasi-rel-masa-depan-indonesia/4.4.png`}
              alt="Title"
              className="mb-4 h-12 w-auto max-w-sm md:h-24"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base text-white md:text-3xl"
            >
              Sementara LRT rute, <br /> barunya akan mencapai
              <br />
              daerah{" "}
              <span className="rounded-3xl border border-white px-2">
                Manggarai
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
