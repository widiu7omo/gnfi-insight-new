"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function SectionThreeCustomImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(5px)"])
  const blurSugarLg = useTransform(scrollYProgress, [.5, 1], ["blur(0px)", "blur(3px)"])
  const scaleSugarLg = useTransform(scrollYProgress, [0, 1], [.8, 2])
  const positionY = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const rotation = useTransform(scrollYProgress, [0, 1], ['0deg', '45deg']);
  scrollYProgress.on('change', () => {
    console.log(blur.get())
  })
  return (
    <div className="flex flex-col bg-[hsl(30,40%,90%)]" ref={ref}>
      <div className="flex flex-col z-10 relative bg-cover bg-[center_top] bg-no-repeat" style={{ backgroundImage: `url('${baseUrl}/assets/2.0.png')` }}>
        <div className="flex justify-center max-w-4xl mx-auto relative lg:mt-[27rem]">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/2.1.png`} alt="" className="top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.2.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.3.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.4.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.5.png`} alt="" className="absolute top-0" />
        </div>
        <div className="flex justify-center max-w-4xl mx-auto relative">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/2.6.png`} alt="" className="top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.7.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.8.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.9.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.10.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.11.png`} alt="" className="absolute top-0" />
          <div className="absolute bottom-[-1rem]">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
              src={`${baseUrl}/assets/2.12.png`} alt="Footer" className="invert" />
          </div>
        </div>
      </div>
    </div>
  );
}
