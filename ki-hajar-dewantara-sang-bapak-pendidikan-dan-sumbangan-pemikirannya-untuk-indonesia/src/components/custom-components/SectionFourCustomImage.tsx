"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useScroll, useTransform } from "framer-motion";

export function SectionFourCustomImage() {
  return (
    <section>
      <div className="relative flex flex-col items-center">
        <motion.img initial={{ opacity: 0, y: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} src={`${baseUrl}/assets/elipse-atas.png`} alt="elipse-atas" className="w-full h-full" />
        <motion.img initial={{ opacity: 0, x: -10 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} src={`${baseUrl}/assets/quote.png`} alt="quote" className="absolute top-0" />
        <motion.img initial={{ opacity: 0, x: 10 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }} src={`${baseUrl}/assets/quote-description.png`} alt="quote" className="absolute top-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} src={`${baseUrl}/assets/quote-ki-hajar.png`} alt="quote" className="absolute top-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} src={`${baseUrl}/assets/elipse-bawah.png`} alt="elipse-bawah" className="w-full h-full" />
      </div>
    </section>
  );
}
