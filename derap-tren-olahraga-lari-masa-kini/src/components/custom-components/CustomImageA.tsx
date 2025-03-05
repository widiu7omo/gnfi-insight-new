"use client";

import { baseUrl } from "@/constants/meta";
import { motion, type Variants, MotionConfig, useInView } from "framer-motion";
import NumberFlow, { useCanAnimate } from '@number-flow/react'
import { useEffect, useRef, useState } from "react";
export function CustomImageA() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const canAnimate = useCanAnimate()
  return (
    <div ref={ref} className="relative overflow-clip font-sora py-14 space-y-6 bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${baseUrl}/assets/1.0.jpg)`, backgroundColor: "#d0d1c3" }}>
      <div className="absolute left-0 w-full top-0 h-full bg-black/30 z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10 pt-0 lg:pt-[30rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
          <div className="xl:absolute left-0 top-8 pt-8 xl:pt-0">
            <motion.h4 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
              className="font-sora pl-0 sm:pl-8 xl:pl-0 text-center lg:text-left xl:w-[50%] w-full text-4xl md:text-6xl xl:text-7xl font-bold !leading-tight tracking-wide text-white">Manfaat Lari bagi Kesehatan
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .4, delay: .1 }}
              viewport={{ once: true }}
              className="font-sora text-xl pl-0 sm:pl-8 text-center lg:text-left xl:w-[50%] text-white pt-9 xl:pl-1">
              Rutin berlari punya banyak manfaat bagi kesehatan,
              di antaranya:
            </motion.p>
          </div>
          <div className="xl:col-start-2 flex justify-center" >
            <motion.img
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .3, delay: .2 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/1.1.png`} alt="Card 1" />
          </div>
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .3, delay: .3 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/1.2.png`} alt="Card 2" className="h-[calc(100%+10px)] -mt-[10px]" />
          </div>
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .3, delay: .4 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/1.3.png`} alt="Card 3" className="h-[100%]" />
          </div>
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .3, delay: .4 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/1.4.png`} alt="Card 4" className="h-[100%]" />
          </div>
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .3, delay: .5 }}
              viewport={{ once: true }}
              src={`${baseUrl}/assets/1.5.png`} alt="Card 5" className="h-[calc(100%+35px)] -mt-[35px]" />
          </div>
        </div>
      </div>
      <img src={`${baseUrl}/assets/footer.png`} className="z-50 hidden sm:block relative bottom-0 h-full w-fit mx-auto" />
    </div >
  );

}
