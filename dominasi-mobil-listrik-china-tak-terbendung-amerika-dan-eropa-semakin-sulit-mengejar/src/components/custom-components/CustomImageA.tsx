"use client";

import { baseUrl } from "@/constants/meta";
import { motion, type Variants, MotionConfig, useInView } from "framer-motion";
import NumberFlow, { useCanAnimate } from '@number-flow/react'
import { useEffect, useRef, useState } from "react";
export function CustomImageA() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const canAnimate = useCanAnimate()
  const problems = [
    'Pemotongan biaya makanan perporsi dari Rp15 ribu menjadi Rp10 ribu',
    'Keracunan massal di Sukoharjo',
    'Penemuan lauk daging ayam mentah di Kupang',
    'Aksi penolakan di Papua Tengah',
    'Wacana penggunaan susu ikan',
  ]
  return (
    <div ref={ref} className="relative overflow-clip font-sora bg-no-repeat bg-cover bg-top" style={{ backgroundColor: "#e5e5ec" }}>
      {/* <div className="absolute left-0 w-full bottom-0 h-[20%] z-0"></div> */}
      <div className="relative z-10 pt-[3rem] xl:pt-[5rem]">
        <div className="max-w-4xl mx-auto ">
          <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className="font-sora w-full px-4 lg:px-0 text-4xl md:text-5xl xl:text-6xl font-bold !leading-tight tracking-wide text-[#0f36d5] text-start">Pertumbuhan Industri Kendaraan Listrik China Kian Tak Terbendung
          </motion.h4>
          <p className="px-4 lg:px-0 text-2xl md:text-3xl xl:text-4xl font-bold font-sora py-2">Dominasi Pasar dan Trajektori Pertumbuhan</p>
          <p className="px-4 lg:px-0 py-8 text-lg md:text-xl xl:text-2xl font-sora xl:max-w-[80%]">China telah melesat menjadi pemimpin global yang tak terbantahkan di industri kendaraan listrik</p>
          <div className="w-full relative flex flex-row-reverse">
            <img src={`${baseUrl}/assets/1.1.png`} className="h-full w-[70%] md:w-[60%] ml-auto z-10 relative" />
            <div className="absolute bg-[#0f36d5] rounded-tl-[4rem] md:rounded-tl-[5rem] rounded-bl-md md:right-[10%] left-0 top-[25%] p-7 md:p-12">
              <div className="absolute block md:hidden bg-gradient-to-r from-[#0f0fd5] z-40 w-full left-0 rounded-tl-[4rem] md:rounded-tl-[5rem] top-0 h-full"></div>
              <div className="w-[80%] xs:w-[50%] sm:w-[40%] font-sora text-white text-xl font-semibold space-y-2 z-40 relative">
                <div>pada 2024</div>
                <div className="text-[5rem] xs:text-[6rem] w-[80%] md:w-full leading-[0.9] font-bold text-[#ffe354] relative">27%</div>
                <p>kendaraan listrik baterai (BEV) saja menguasai pasar otomotif domestik</p>
              </div>
            </div>
          </div>
          <div className="w-full relative py-16 z-10 xl:z-0">
            <div className="flex md:flex-row flex-col md:items-start items-end">
              <div className="flex-1 font-sora text-[#272e3f] text-xl space-y-2 px-6 lg:px-10 py-1">
                <p>Lebih mengesankan lagi,
                  jika kita melihat keseluruhan penjualan kendaraan listrik, termasuk hybrid plug-in (PHEV), merek-merek China </p>
              </div>
              <div className="flex-1 font-sora text-[#272e3f] text-xl font-semibold px-6 lg:px-0 py-8 md:py-0 text-right md:text-left">
                <div>Menguasai</div>
                <p className="text-[5rem] xs:text-[7rem] xl:text-[8rem] text-[#0f36d5] font-bold leading-[0.9]">62%</p>
                <p>Pangsa Pasar global</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center z-0 xl:z-0">
          <img src={`${baseUrl}/assets/1.0.png`} className="bottom-0 max-w-4xl -mt-[20rem] xs:-mt-[25rem] sm:-mt-[30rem] xl:-mt-[40rem] h-full w-full mx-auto relative z-10" />
          <img src={`${baseUrl}/assets/1.0.png`} className="bottom-[-5rem] scale-[1.3] mx-auto absolute z-0 blur-3xl" />
          <img src={`${baseUrl}/assets/footer.png`} className="z-50 absolute max-w-4xl hidden sm:block bottom-0 w-full mx-auto" />
        </div>
      </div>

    </div>
  );

}
