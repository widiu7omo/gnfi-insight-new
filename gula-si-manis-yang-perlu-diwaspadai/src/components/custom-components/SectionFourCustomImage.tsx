"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useScroll, useTransform } from "framer-motion";

export function SectionFourCustomImage() {
  return (
    <section className="h-[1350px] sm:h-[2200px] relative">
      <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${baseUrl}/assets/header-image.png)` }}>
        <motion.p initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl font-bold text-center lg:text-4xl xl:text-5xl">
          Hati-hati, <br /> Jangan Berlebihan <br /> Mengonsumsi Gula!
        </motion.p>
      </div>
      <div className="mt-14 flex flex-col gap-4 sm:gap-10">
        <motion.p initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-center text-lg sm:text-xl font-semibold px-5 sm:max-w-xl sm:mx-auto">
          Konsumsi gula berlebih dapat menimbulkan penyakit, salah satunya diabetes. Oleh karena itu, asupannya harus dibatasi
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-center text-base sm:text-lg font-medium">
          Rekomendasi asupan gula harian:
        </motion.p>
      </div>
      <div className="relative flex items-center justify-center w-full mx-auto">
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} src={`${baseUrl}/assets/kids.png`} alt="kids" className="absolute top-0 z-10" />
        <motion.img initial={{ opacity: 0, y: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} src={`${baseUrl}/assets/background.png`} alt="background" className="absolute top-0" />
        <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} src={`${baseUrl}/assets/anak.png`} alt="anak" className="absolute top-0" />
        <motion.img initial={{ opacity: 0, x: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} src={`${baseUrl}/assets/dewasa.png`} alt="dewasa" className="absolute top-0" />
        <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} src={`${baseUrl}/assets/layer11.png`} alt="layer11" className="absolute top-0 z-20" />
        <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }} src={`${baseUrl}/assets/layer13.png`} alt="layer13" className="absolute top-0 z-20" />
        <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2 }} src={`${baseUrl}/assets/layer15.png`} alt="layer15" className="absolute top-0 z-20" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} src={`${baseUrl}/assets/description.png`} alt="description" className="absolute -top-6 z-10" />
        <motion.img initial={{ opacity: 0, x: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.4 }} src={`${baseUrl}/assets/blood.png`} alt="blood" className="absolute top-0 z-20" />
      </div>
      <div className="flex items-center justify-center w-full mx-auto">
        <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }} src={`${baseUrl}/assets/doctor_bg.png`} alt="doctor_bg" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} src={`${baseUrl}/assets/doctor_quote.png`} alt="doctor_quote" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2 }} src={`${baseUrl}/assets/quote_top.png`} alt="quote_top" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, x: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.2 }} src={`${baseUrl}/assets/quote_bottom.png`} alt="quote_bottom" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 2.9 }} src={`${baseUrl}/assets/doctor.png`} alt="doctor" className="absolute bottom-0" />
      </div>
    </section>
  );
}
