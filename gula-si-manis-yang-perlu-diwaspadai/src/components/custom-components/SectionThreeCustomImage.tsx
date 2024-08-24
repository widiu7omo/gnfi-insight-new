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
    <div className="flex flex-col" ref={ref}>
      <div className="flex items-center z-10 relative justify-center bg-cover bg-[center_bottom] bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.3) 0%,rgba(0,0,0,1) 120% ),url('${baseUrl}/assets/3.0.jpg')` }}>
        <div className="justify-center max-w-7xl mx-auto ">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/3.1.png`} alt="" className=" top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/3.2.png`} alt="" className="absolute top-0" />
        </div>
      </div>
      <div className="bg-white relative flex items-center justify-center">
        <div className="max-w-7xl absolute mx-auto top-0 bottom-0 left-0 right-0 w-full">
          <motion.img src={`${baseUrl}/assets/sugar-md.png`} alt="Sugar Md" className="absolute size-10 sm:size-28 top-[20%] left-0" style={{ filter: blur, rotate: rotation }} />
          <motion.img src={`${baseUrl}/assets/sugar-md.png`} alt="Sugar Md" className="absolute size-10 sm:size-28 bottom-[20%] right-0 rotate-12" style={{ filter: blurSugarLg, scale: scaleSugarLg }} />
          <motion.img src={`${baseUrl}/assets/sugar-sm.png`} alt="Sugar Sm" className="absolute size-10 sm:size-20 top-[50%] right-0" style={{ rotate: rotation, scale: scale }} />
          <motion.img src={`${baseUrl}/assets/sugar-sm.png`} alt="Sugar Sm" className="absolute size-10 sm:size-28 scale-125 bottom-[40%] left-0" style={{ y: positionY }} />
          <motion.img src={`${baseUrl}/assets/sugar-sm.png`} alt="Sugar Sm" className="absolute size-10 sm:size-28 bottom-[35%] left-0" style={{ filter: blur }} />
        </div>
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
          src={`${baseUrl}/assets/3.0.1.png`} alt="" className="object-center" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.2 }}
          src={`${baseUrl}/assets/3.3.png`} alt="" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.3 }}
          src={`${baseUrl}/assets/3.4.png`} alt="" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
          src={`${baseUrl}/assets/3.5.png`} alt="" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.5 }}
          src={`${baseUrl}/assets/3.6.png`} alt="" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.6 }}
          src={`${baseUrl}/assets/3.7.png`} alt="" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.7 }}
          src={`${baseUrl}/assets/3.8.png`} alt="" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.8 }}
          src={`${baseUrl}/assets/3.9.png`} alt="" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.9 }}
          src={`${baseUrl}/assets/3.10.png`} alt="" className="absolute bottom-0" />
        <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 1 }}
          src={`${baseUrl}/assets/3.11.png`} alt="" className="absolute bottom-0" />
        <div className="bg-gradient-to-b from-white/0 to-white absolute top-[90%] bottom-0 left-0 right-0" />
      </div>
    </div>
  );
}
