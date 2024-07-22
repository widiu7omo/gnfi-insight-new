"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionFourCustomImage() {
  return (
    <section className="bg-cover relative xl:bg-[center_top_-30rem]" style={{ backgroundImage: `url(${baseUrl}/assets/bg.png)` }}>
      <div className="absolute bg-gradient-to-b from-black/20 to-[#FAFAFA] z-0 left-0 right-0 top-0 bottom-0" />
      <div className="max-w-4xl mx-auto pt-0 xl:pt-6 z-20 relative">
        <div className="max-w-4xl mx-auto h-[500px]">
          <div className="relative flex items-center justify-center">
            <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} src={`${baseUrl}/assets/10.1.png`} alt="Eclipse" className="absolute" />
            <motion.img initial={{ opacity: 0, x: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.9 }} src={`${baseUrl}/assets/10.2.png`} alt="Susu" className="absolute z-10" />
            <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.6 }} src={`${baseUrl}/assets/10.3.png`} alt="Info" className="absolute" />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-center justify-center">
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} src={`${baseUrl}/assets/9.7.png`} alt="Eclipse" className="absolute" />
          <motion.img initial={{ opacity: 0, y: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} src={`${baseUrl}/assets/9.4.png`} alt="Sapi" className="absolute" />
          <motion.img initial={{ opacity: 0, x: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.6 }} src={`${baseUrl}/assets/9.5.png`} alt="Perah" className="absolute" />
          <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 3.2 }} src={`${baseUrl}/assets/9.6.png`} alt="Info" className="absolute" />
        </div>
      </div>
    </section>
  );
}
