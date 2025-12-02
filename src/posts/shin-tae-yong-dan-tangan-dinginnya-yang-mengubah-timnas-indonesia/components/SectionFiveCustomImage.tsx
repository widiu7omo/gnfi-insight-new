"use client";

import { motion } from "motion/react";

export function SectionFiveCustomImage() {
  return (<div style={{ backgroundImage: `url(/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.1.png)` }} className="bg-cover">
    <div className="max-w-4xl mx-auto relative" >
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: .2, duration: .6, ease: "easeOut" }}
          src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.2.png`}
          alt="Eclipse"
          className=""
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .8, duration: .6, ease: "easeOut" }}
          src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.4.png`}
          alt="Susu"
          className="absolute"
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: .9, duration: .5, ease: "easeOut" }}
          src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.5.png`}
          alt="Eclipse"
          className="absolute"
        />
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: .4, duration: .4, ease: "easeOut" }}
          src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.3.png`}
          alt="Eclipse"
          className="absolute"
        />
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: .6, duration: .6, ease: "easeOut" }}
          src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.8.png`}
          alt="Eclipse"
          className="absolute"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .8, duration: .8, ease: "easeOut" }}
          src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.7.png`}
          alt="Eclipse"
          className="absolute"
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: .4, duration: .4, ease: "easeOut" }}
          src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.6.png`}
          alt="Eclipse"
          className="absolute"
        />
      </div>
    </div>
    <div className="max-w-4xl mx-auto relative" >
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: .8, duration: .6, ease: "easeOut" }}
          src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.9.png`}
          alt="Eclipse"
          className=""
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0, duration: .3, ease: "easeOut" }}
          src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.10.png`}
          alt="Eclipse"
          className="absolute"
        />
      </div>
    </div>
  </div>
  );
}
