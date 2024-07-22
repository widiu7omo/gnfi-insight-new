"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionFourCustomImage() {
  return (
    <section className="bg-cover relative xl:bg-[center_top_-30rem]" style={{ backgroundImage: `url(${baseUrl}/assets/bg.png)` }}>
      <div className="absolute bg-gradient-to-b from-black/20 to-[#FAFAFA] z-0 left-0 right-0 top-0 bottom-0" />
      <div className="max-w-4xl mx-auto pt-0 xl:pt-6 z-20 relative">
        <div className="max-w-4xl mx-auto relative h-[500px]">
          <div className="relative flex items-center justify-center">
            <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} src={`${baseUrl}/assets/9.2.png`} alt="Info" className="absolute top-0 ml-48" />
            <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} src={`${baseUrl}/assets/9.3.png`} alt="Susu" className="absolute top-0" />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto relative h-[500px]">
        <div className="relative flex items-center justify-center">
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} src={`${baseUrl}/assets/9.7.png`} alt="Sapi" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} src={`${baseUrl}/assets/9.4.png`} alt="Sapi" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} src={`${baseUrl}/assets/9.5.png`} alt="Perah" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} src={`${baseUrl}/assets/9.6.png`} alt="Info" className="absolute" />
        </div>
      </div>
    </section>
  );
}
