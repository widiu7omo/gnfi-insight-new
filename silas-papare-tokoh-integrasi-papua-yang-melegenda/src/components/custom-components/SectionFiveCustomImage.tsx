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
              initial={{ opacity: 0, y: -10 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: .5 }}
              src={`${baseUrl}/assets/4.1.png`}
              alt="quote utama ki hajar dewantara"
              className="top-0 z-10"
            />
            <motion.img
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: .5 }}
              src={`${baseUrl}/assets/4.2.png`}
              alt="quote penjelasan dari ki hajar dewantara"
              className="absolute top-0 z-10"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .9 }}
              src={`${baseUrl}/assets/4.3.png`}
              alt="quote ki hajar dewantara"
              className="absolute top-0 z-10"
            />
            <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .8 }} src={`${baseUrl}/assets/4.4.png`} alt="quote atas" className="absolute top-0 z-10" />
            <motion.img initial={{ opacity: 0, x: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: .7 }} src={`${baseUrl}/assets/4.5.png`} alt="quote bawah" className="absolute top-0 z-10" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            src={`${baseUrl}/assets/4.10.png`}
            alt="pelajar berpakaian kebaya"
            className="absolute bottom-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            src={`${baseUrl}/assets/4.9.png`}
            alt="pelajar memakai toga"
            className="absolute bottom-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            src={`${baseUrl}/assets/4.8.png`}
            alt="pelajar memakai jilbab"
            className="absolute bottom-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            src={`${baseUrl}/assets/4.7.png`}
            alt="pelajar memakai jaket"
            className="absolute bottom-0 z-10"
          />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .8 }} src={`${baseUrl}/assets/4.6.png`} alt="pelajar sma, smp, dan sd" className="top-0 z-10" />
        </div>
      </div>
      <div className="flex items-center justify-center absolute bottom-0 w-full">
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.9 }}
          src={`${baseUrl}/assets/4.11.png`}
          alt="bendera kanan atas"
          className="absolute w-full bottom-0 left-0 right-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          src={`${baseUrl}/assets/4.12.png`}
          alt="bendera-kiri-tengah"
          className="absolute w-full bottom-0 left-0 right-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.3 }}
          src={`${baseUrl}/assets/4.13.png`}
          alt="bendera-kanan-tengah"
          className="absolute w-full bottom-0 left-0 right-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 }}
          src={`${baseUrl}/assets/4.14.png`}
          alt="bendera-kiri-bawah"
          className="absolute w-full bottom-0 left-0 right-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.9 }}
          src={`${baseUrl}/assets/4.15.png`}
          alt="bendera-kanan-bawah-pojok"
          className="absolute w-full bottom-0 left-0 right-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9 }}
          src={`${baseUrl}/assets/4.16.png`} alt="elipse-atas" className="absolute w-full bottom-0 left-0 right-0 z-10 max-w-4xl mx-auto" />
      </div>

    </section>
  );
}
