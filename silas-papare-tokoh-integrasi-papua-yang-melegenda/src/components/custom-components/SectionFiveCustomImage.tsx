"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionFiveCustomImage() {
  return (
    <section className="relative flex flex-col items-center bg-cover bg-top bg-no-repeat w-full h-[932px] md:h-[1920px]" style={{ backgroundImage: `url(${baseUrl}/assets/5.0.png)` }}>
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-10">
        <div className="relative">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil aut nam error perferendis distinctio maxime veniam culpa libero officia nulla, molestiae nisi quae modi repellat aliquam aliquid recusandae! Modi?
          <motion.img initial={{ opacity: 0, x: -20 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} src={`${baseUrl}/assets/5.1.png`} alt="background" className="absolute top-0 left-0 z-20" />
          <motion.img
            initial={{ opacity: 0, x: -10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 1 }}
            src={`${baseUrl}/assets/5.2.png`}
            alt="title"
            className="absolute top-0 left-0 z-20"
          />
          <motion.img
            initial={{ opacity: 0, x: 10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            src={`${baseUrl}/assets/5.3.png`}
            alt="foto"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: 10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            src={`${baseUrl}/assets/5.5.png`}
            alt="jasa-jasa"
            className="absolute top-0 right-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: -10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            src={`${baseUrl}/assets/5.6.png`}
            alt="KRI Silas"
            className="absolute top-0 left-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: 10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            src={`${baseUrl}/assets/5.7.png`}
            alt="Text KRI Silas"
            className="absolute top-0 right-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: -10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            src={`${baseUrl}/assets/5.8.png`}
            alt="Lapangan Udara Silas"
            className="absolute top-0 left-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: 10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 1.2 }}
            src={`${baseUrl}/assets/5.9.png`}
            alt="Text Lapangan Udara Silas"
            className="absolute top-0 right-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: -10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 1.5 }}
            src={`${baseUrl}/assets/5.10.png`}
            alt="Monumen Silas"
            className="absolute top-0 left-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: 10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 1.9 }}
            src={`${baseUrl}/assets/5.11.png`}
            alt="Text Monumen Silas"
            className="absolute top-0 right-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: -10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9, duration: 2 }}
            src={`${baseUrl}/assets/5.12.png`}
            alt="STISIPOL Silas"
            className="absolute top-0 left-0 z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: 10 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 2.2 }}
            src={`${baseUrl}/assets/5.13.png`}
            alt="Text STISIPOL Silas"
            className="absolute top-0 right-0 z-10"
          />
        </div>
      </div>
      <motion.img initial={{ opacity: 0, y: 10 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} src={`${baseUrl}/assets/footer.png`} alt="footer" className="absolute bottom-0 z-50" />
    </section>
  );
}
