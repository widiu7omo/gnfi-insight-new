"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CustomImagePeloporMusik() {
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
    <div className="flex flex-col bg-[#fffcf3] overflow-clip " ref={ref}>
      <div className="flex flex-col z-10 relative bg-cover bg-[center_top] bg-no-repeat" style={{ backgroundImage: `url('${baseUrl}/assets/2.0.png')` }}>
        {/* <img src={`${baseUrl}/assets/2.1.png`} alt="" className="top-0 left-0 right-0 w-full absolute" /> */}
        <div className="w-full absolute h-[80px] bg-gradient-to-b from-[#ed8b37]" />
        <div className="flex justify-center flex-col max-w-4xl mx-auto relative mt-[10rem]">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/2.4.png`} alt="" className="top-0 hidden sm:block relative" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/2.3.png`} alt="" className="top-0 absolute z-10" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/2.2.png`} alt="" className="top-20 absolute z-10" />
        </div>
        <div className="bg-[center_top_0rem] bg-no-repeat w-full bg-cover" style={{ backgroundImage: `url('${baseUrl}/assets/2.1.png')` }}>
          <div className="flex justify-center flex-col max-w-4xl mx-auto relative mt-[-20rem]">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/2.8.png`} alt="" className="top-0" />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/2.6.png`} alt="" className="top-0 absolute" />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/2.7.png`} alt="" className="top-0 absolute" />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/2.5.png`} alt="" className="top-0 absolute" />
          </div>
          <div className="flex justify-center flex-col max-w-4xl mx-auto relative mt-[0rem] px-14 space-y-8">
            <motion.p className="text-4xl max-w-[50%] font-semibold text-white">
              Dangdut perlahan mulai tumbuh subur
            </motion.p>
            <ul className="flex space-x-8 text-white text-xl font-medium list-disc marker:text-[#ed8b37] px-4">
              <li>
                <p>Ditambah lagi dengan pencampuran beberapa etnik Indonesia, seperti Jawa, Minangkabau, dan Tapanuli</p>
              </li>
              <li>
                <p>Adanya percampuran tersebut membuat semakin meluasnya jenis dan bentuk musik dangdut itu sendiri</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img src={`${baseUrl}/assets/2.9.png`} alt="Stage Dangdut" className="w-full" />
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              src={`${baseUrl}/assets/1.6.png`}
              className="absolute bottom-0 max-w-full z-20 md:max-w-4xl mx-0 md:mx-auto left-0 right-0 hidden sm:block"
              alt="Sub Title"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
