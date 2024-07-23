"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionFourCustomImage() {
  return (
    <section>
      <div className="relative w-full">
        <img src={`${baseUrl}/assets/bg.png`} width={1079} height={601} alt="Background Cows" className="w-full h-full object-cover object-center" />
        <div className="absolute bg-gradient-to-b from-black/10 to-[#FAFAFA] z-0 left-0 right-0 top-0 bottom-0" />
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="w-full sm:max-w-5xl text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Produksi vs Konsumsi <br /> Susu Indonesia
        </motion.h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center mx-auto max-w-6xl">
        <div className="w-full">
          <div className="relative flex items-center justify-center">
            <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} src={`${baseUrl}/assets/10.1.png`} alt="Eclipse" className="" />
            <motion.img initial={{ opacity: 0, x: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.9 }} src={`${baseUrl}/assets/10.2.png`} alt="Susu" className="absolute z-10" />
            <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.6 }} src={`${baseUrl}/assets/10.3.png`} alt="Info" className="absolute" />
            <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} src={`${baseUrl}/assets/9.7.png`} alt="Eclipse" className="absolute" />
            <motion.img initial={{ opacity: 0, y: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} src={`${baseUrl}/assets/9.4.png`} alt="Sapi" className="absolute" />
            <motion.img initial={{ opacity: 0, x: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.6 }} src={`${baseUrl}/assets/9.5.png`} alt="Perah" className="absolute" />
            <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 3.2 }} src={`${baseUrl}/assets/9.6.png`} alt="Info" className="absolute" />
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} src={`${baseUrl}/assets/11.1.png`} alt="Background" className="" />
        <motion.img initial={{ opacity: 0, y: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} src={`${baseUrl}/assets/11.2.png`} alt="Submer" className="absolute" />
        <motion.img initial={{ opacity: 0, x: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} src={`${baseUrl}/assets/11.3.png`} alt="Chart" className="absolute" />
        <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2 }} src={`${baseUrl}/assets/11.4.png`} alt="Wilayah" className="absolute" />
      </div>
    </section>
  );
}
