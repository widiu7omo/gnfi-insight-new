"use client";
import { motion, useScroll, useTransform } from "motion/react";

export function SectionFourCustomImage() {
  return (
    <div className="relative w-full bg-cover" style={{ backgroundImage: `url(/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.1.png)` }}>
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-center justify-center">
          {/* <div className="absolute bg-gradient-to-t from-[#04070B] z-0 left-0 right-0 top-[20%] bottom-0" /> */}
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.2.png`} className="" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.3.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, }} viewport={{ once: true }} whileInView={{ opacity: 1, }} transition={{ delay: 1.2, duration: .5 }} src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.6.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.4.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.5.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.7.png`} className="absolute" alt="Title" />
        </div>
        <div className="relative flex items-center justify-center">
          {/* <div className="absolute bg-gradient-to-t from-[#04070B] z-0 left-0 right-0 top-[20%] bottom-0" /> */}
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.8.png`} className="" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.9.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, x: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: .6 }} src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/4.10.png`} className="absolute" alt="Title" />
        </div>
      </div>
      <div className="bg-linear-to-b top-0 from-90% from-white/0 to-[#B7C0C8] absolute bottom-0 left-0 right-0" />
    </div>
  );
}
