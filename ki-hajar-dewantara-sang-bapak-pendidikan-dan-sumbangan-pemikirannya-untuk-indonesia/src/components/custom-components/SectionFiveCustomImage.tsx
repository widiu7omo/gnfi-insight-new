"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionFiveCustomImage() {
  return (
    <section className="relative flex flex-col items-center bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${baseUrl}/assets/4.0.png)` }}>
      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, x: -10 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              src={`${baseUrl}/assets/4.1.png`}
              alt="quote utama ki hajar dewantara"
              className="top-0 z-10"
            />
            <motion.img
              initial={{ opacity: 0, x: 10 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              src={`${baseUrl}/assets/4.2.png`}
              alt="quote penjelasan dari ki hajar dewantara"
              className="absolute top-0 z-10"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
              src={`${baseUrl}/assets/4.3.png`}
              alt="quote ki hajar dewantara"
              className="absolute top-0 z-10"
            />
            <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} src={`${baseUrl}/assets/4.4.png`} alt="quote atas" className="absolute top-0 z-10" />
            <motion.img initial={{ opacity: 0, x: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} src={`${baseUrl}/assets/4.5.png`} alt="quote bawah" className="absolute top-0 z-10" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={`${baseUrl}/assets/4.10.png`} alt="elipse-atas" className="absolute bottom-0 z-10" />
          <img src={`${baseUrl}/assets/4.9.png`} alt="elipse-atas" className="absolute bottom-0 z-10" />
          <img src={`${baseUrl}/assets/4.8.png`} alt="elipse-atas" className="absolute bottom-0 z-10" />
          <img src={`${baseUrl}/assets/4.7.png`} alt="elipse-atas" className="absolute bottom-0 z-10" />
          <img src={`${baseUrl}/assets/4.6.png`} alt="elipse-atas" className="top-0 z-10" />
        </div>
      </div>
      <div className="flex items-center justify-center absolute bottom-0 w-full">
        <img src={`${baseUrl}/assets/4.11.png`} alt="elipse-atas" className="absolute w-full bottom-0 left-0 right-0 z-10" />
        <img src={`${baseUrl}/assets/4.12.png`} alt="elipse-atas" className="absolute w-full bottom-0 left-0 right-0 z-10" />
        <img src={`${baseUrl}/assets/4.13.png`} alt="elipse-atas" className="absolute w-full bottom-0 left-0 right-0 z-10" />
        <img src={`${baseUrl}/assets/4.14.png`} alt="elipse-atas" className="absolute w-full bottom-0 left-0 right-0 z-10" />
        <img src={`${baseUrl}/assets/4.15.png`} alt="elipse-atas" className="absolute w-full bottom-0 left-0 right-0 z-10" />
      </div>
    </section>
  );
}
