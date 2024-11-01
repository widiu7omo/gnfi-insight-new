"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CustomImageMobilChina() {
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
        <div className="w-full absolute h-[80px] bg-gradient-to-b from-[#ed8b37]" />
        <div className="flex justify-center flex-col max-w-4xl mx-auto relative mt-[5rem] lg:mt-[10rem]">
          <motion.img
            initial={{ opacity: 0, x: -10 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.4.png`} alt="" className="top-0 relative" />
          <div className="absolute right-0 top-[100%] xs:top-[50%] text-white text-base sm:text-xl font-semibold lg:px-0 px-4 xs:max-w-[50%] space-y-4">
            <motion.p initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.2 }}>Pada 1950-an musik India mulai merambah dan masuk dalam tubuh musik Melayu</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}>Pengaruh tersebut mulai terlihat dengan adanya syair pada lagu Boneka dari India ciptaan Husein Bawafie</motion.p>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`${baseUrl}/assets/2.3.png`} alt="" className="top-0 absolute z-10" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.2 }}
            src={`${baseUrl}/assets/2.2.png`} alt="" className="top-14 sm:top-20 absolute z-10" />
        </div>
        <div className="bg-[center_top_0rem] bg-no-repeat w-full bg-cover" style={{ backgroundImage: `url('${baseUrl}/assets/2.1.png')` }}>
          <div className="justify-center flex-col max-w-4xl mx-auto relative mt-[8rem] lg:mt-[-15rem]">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/2.8.png`} alt="" className="top-0 lg:block hidden" />
            <div className="absolute text-base sm:text-xl text-white font-semibold px-4 lg:px-0 lg:max-w-[50%] max-w-full xs:max-w-2xl mx-0 xs:mx-auto left-0 xs:left-auto right-0 bottom-[-2rem] xs:bottom-0 lg:bottom-[2rem]">
              <motion.p initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.2 }}>Lagu ini dinyanyikan oleh Ellya Khadam, yang digadang-gadang menjadi lagu dangdut pertama meskipun belum muncul istilah dangdut</motion.p>
            </div>
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/2.6.png`} alt="" className="top-0 pt-8 lg:pt-0 lg:absolute" />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/2.7.png`} alt="" className="top-0 absolute lg:block hidden" />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/2.5.png`} alt="" className="top-0 absolute" />
          </div>
          <div className="flex justify-center flex-col max-w-4xl mx-auto relative mt-[8rem] lg:mt-[0rem] px-4 lg:px-14 space-y-8">
            <motion.p className="text-2xl sm:text-4xl max-w-full lg:max-w-[50%] font-semibold text-white">
              Dangdut perlahan mulai tumbuh subur
            </motion.p>
            <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 text-white text-base lg:text-xl font-medium list-disc marker:text-[#ed8b37] px-4">
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
            <div className="bg-gradient-to-b from-white/0 to-[#180605] w-full h-[150px] absolute bottom-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
