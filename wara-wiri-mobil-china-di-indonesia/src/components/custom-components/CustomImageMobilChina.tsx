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
    <div className="flex flex-col bg-gradient-to-b from-[#531b1a] to-[#da472e] overflow-clip " ref={ref}>
      <div className="flex flex-col z-10 relative bg-cover bg-[center_top] bg-no-repeat items-center justify-center">
        <p className="text-center md:text-4xl text-2xl text-white font-extrabold px-4 md:px-15 pt-6">IIMS, Panggungnya <br />
          Mobil China untuk Unjuk Gigi</p>
        <img src={`${baseUrl}/assets/2.1.png`} alt="Pattern" className="absolute z-0 w-full" />
        <div className="max-w-4xl mx-auto mt-10 relative">
          <div className="relative z-10 flex items-center justify-center flex-col">
            <div className="h-[100px]" />
            <img src={`${baseUrl}/assets/2.5.png`} alt="China Flag" className="absolute" />
            <img src={`${baseUrl}/assets/2.3.png`} alt="Car 2" className="absolute" />
            <img src={`${baseUrl}/assets/2.4.png`} alt="Car 3" className="absolute" />
            <img src={`${baseUrl}/assets/2.2.png`} alt="Car 1" className="relative z-0" />
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex flex-col justify-center items-center z-0 overflow-hidden">
          <div className="bg-[#531a19] w-full h-[80px] absolute bottom-[0rem] z-10 left-0 right-0" />
          <img src={`${baseUrl}/assets/2.6.1.png`} alt="Stage" className="w-[80rem] min-w-[80rem] relative z-10" />
        </div>
      </div>
      <div className="bg-[#531a19] relative z-20 w-full py-6">
        <p className="text-white max-w-3xl mx-auto text-lg md:text-2xl text-center md:px-10 lg:px-0">
          Pameran otomotif Indonesia International Motor Show (IIMS) 2024 di Jakarta pada 15-25 Februari 2024 jadi panggung bagi berbagai produk otomotif mutakhir, tak terkecuali mobil China
        </p>
      </div>
      <div className="relative">
        <div className="py-10 relative z-20">
          <p className="text-white max-w-3xl mx-auto text-lg md:text-2xl text-center md:px-10 lg:px-0">Wuling, Chery, GWM, dan BYD tak ketinggalan hadir.
            Tak sekedar memamerkan produknya, mereka juga meraih
            sejumlah penghargaan bergengsi</p>
        </div>
        <div className="bg-[#a20624] space-y-6  relative z-20">
          <div className="max-w-4xl mx-auto w-full ">
            <div className="flex flex-col md:flex-row">
              <div className="relative flex items-center justify-center py-2">
                <img src={`${baseUrl}/assets/2.6.png`} alt="Car 4" />
                <img src={`${baseUrl}/assets/2.7.png`} alt="Car 5" className="absolute" />
              </div>
              <div className="bg-white md:rounded-ee-3xl ml-[-4%] p-4 flex items-center justify-center w-fit">
                <p className="text-lg font-medium md:text-2xl pl-[4%] md:pl-10 lg:pr-[10rem]">Wuling mendapat tiga penghargaan lewat Wuling Air EV dan Wuling Binguo EV</p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto w-full ">
            <div className="flex flex-col md:flex-row">
              <div className="relative flex items-center justify-center py-2">
                <img src={`${baseUrl}/assets/2.8.png`} alt="Car 4" />
                <img src={`${baseUrl}/assets/2.9.png`} alt="Car 5" className="absolute" />
              </div>
              <div className="bg-white md:rounded-ee-3xl ml-[-4%] p-4 flex items-center justify-center w-fit">
                <p className="text-lg font-medium md:text-2xl pl-[4%] md:pl-10 lg:pr-[10rem]">Dua mobil Chery, yakni Chery Omoda 5 GT dan Chery Omoda E5 meraih total tiga penghargaan</p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto w-full ">
            <div className="flex flex-col md:flex-row">
              <div className="relative flex items-center justify-center py-2">
                <img src={`${baseUrl}/assets/2.10.png`} alt="Car 4" />
                <img src={`${baseUrl}/assets/2.11.png`} alt="Car 5" className="absolute" />
              </div>
              <div className="bg-white md:rounded-ee-3xl ml-[-4%] p-4 flex items-center justify-center w-fit">
                <p className="text-lg font-medium md:text-2xl pl-[4%] md:pl-10 lg:pr-[10rem]">BYD meraih empat penghargaan. Atto3 dan Seal jadi dua produk penymbang penghargaan itu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-0 w-full h-full bg-gradient-to-t from-[#a20624] to-[#a20624]/0 from-[80%] absolute z-10" />
      </div>
    </div>
  );
}
