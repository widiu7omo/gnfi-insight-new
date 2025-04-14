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
    <div ref={ref} className="relative overflow-clip font-sora py-14 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${baseUrl}/assets/1.0.2.png)`, backgroundColor: 'black' }}>
      <div className="absolute left-0 w-full bottom-0 h-[20%] z-0 bg-gradient-to-t from-black"></div>
      <div className="absolute left-0 w-full top-0 h-full bg-black/30 z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10 pt-0 lg:pt-[6rem] pb-20">
        <div className="xl:h-[60rem]"></div>
        <div className="flex flex-col-reverse xl:flex-row">
          <div className="flex-1 px-4 xl:px-0 space-y-4 xl:space-y-0 py-4 xl:py-0">
            <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
              className="font-sora w-full text-4xl md:text-6xl xl:text-7xl font-bold !leading-tight tracking-wide text-white text-left">
              Asal
              Muasal
              Soto
            </motion.h4>
            <div>
              <div className="flex items-center gap-2">
                <img src={`${baseUrl}/assets/1.2.png`} alt="" className="size-16" />
                <p className="font-sora text-lg xl:text-2xl text-white">Menurut
                  Aji K. Bromokusumo</p>
              </div>
              <p className="text-white text-2xl font-sora">Orang-orang Belanda dan
                Tiongkok yang kampung halamannya negara empat musim biasa menyantap makanan berwujud sup untuk menghangatkan
                tubuh. Dari situ, kuliner kuah-kuahan pun hadir di nusantara</p>
            </div>
          </div>
          <div className="flex-1">
            <img src={`${baseUrl}/assets/1.1.png`} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <img src={`${baseUrl}/assets/1.3.1.png`} alt="" className="max-w-7xl" />
        <div className="absolute top-[10%] xl:top-[15%] max-w-4xl flex flex-col px-4 xl:px-0 xl:flex-row space-x-0 xl:space-x-8">
          <div className="flex-1 space-y-8">
            <div className="font-sora text-3xl xl:text-5xl font-bold max-w-full xl:max-w-[90%] leading-tight">
              Lalu bagaimana bisa namanya jadi <span className="rounded-xl px-2 py-0 bg-[#e19958]">soto?</span>
            </div>
            <img src={`${baseUrl}/assets/1.5.png`} alt="" className="" />
          </div>
          <div className="flex-1 flex flex-col space-y-4 xl:space-y-7">
            <div className="text-2xl xl:text-3xl font-sora font-semibold pt-4 text-center xl:text-left xl:pl-24">Ada dua pendapat</div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center xl:space-x-4 space-y-1 xl:space-y-0">
              <img src={`${baseUrl}/assets/1.3.png`} alt="" className="size-16 xl:size-20" />
              <div className="min-h-2 hidden xl:block min-w-2 bg-orange-500 rounded-full" />
              <p className="font-sora text-lg bg-[#e19958] xl:bg-transparent rounded-xl p-2 xl:p-0">Pakar Kajian Asia terkemuka, Denys Lombard, menyebut nama soto berasal dari alias <i>cao du</i>, atau dalam dialek Hokki</p>
            </div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center xl:space-x-4 space-y-1 xl:space-y-0">
              <img src={`${baseUrl}/assets/1.4.png`} alt="" className="size-16 xl:size-20" />
              <div className="min-h-2 hidden xl:block min-w-2 bg-orange-500 rounded-full" />
              <p className="font-sora text-lg bg-[#e19958] xl:bg-transparent rounded-xl p-2 xl:p-0">Russel Jones dalam <b>Loanwords in Indonesian-Malay</b> berpendapat soto berasal dari alias <i>shao du</i> yang dibaca <i>sio to</i> dengan dialek Hokkien</p>
            </div>
          </div>

        </div>
      </div>
      <img src={`${baseUrl}/assets/footer.png`} className="z-50 hidden sm:block relative bottom-0 h-full w-fit mx-auto" />
    </div >
  );

}
