"use client";

import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function CustomImageC() {

  return (
    <motion.div
      className="relative flex font-sora flex-col items-center overflow-hidden bg-[center_top_-65rem] bg-gradient-to-b from-black to-[80%] to-[#070419] bg-no-repeat pb-20 pt-[5rem]"
      style={{ backgroundImage: `url("${baseUrl}/assets/3.1.jpg")` }}
    >
      <div className="max-w-4xl mx-auto pb-12">
        <div className="text-6xl font-bold text-center pb-20 leading-[1.25]">Kereta Cepat Jakarta-Surabaya Calon Moda Transportasi <span className="px-1 bg-[#fcd3d8] rounded-xl">Andalan Baru?</span>
        </div>
        <div className="h-[40rem]"></div>
        <div className="bg-[#f9e2e1] rounded-t-[2rem] p-16 pb-20">
          <div className="flex relative">
            <div className="flex-1 flex absolute left-0 w-1/2">
              <div className="text-2xl text-gray-900 font-medium">Jawa Timur adalah pasar potensial  bagi kereta cepat Jakarta-Surabaya. Tingginya arus mudik
                ke sana adalah salah satu buktinya</div>
            </div>
            <div className="absolute left-0 bottom-0 text-lg font-bold text-gray-700">Sumber: Kemenhub</div>
            <div className="pl-28">
              <img src={baseUrl + '/assets/3.2.png'} className="" alt="Bar Chart" />
            </div>
          </div>
        </div>
        <div className="bg-[#ffb1b6] rounded-[2rem] p-16 -mt-8">
          <div className="flex relative">
            <div className="flex-1 flex absolute left-0 w-1/2">
              <div className="text-2xl text-gray-900 font-medium">Tak hanya mudik,
                masyarakat bisa pula menggunakan kereta cepat untuk keperluan bisnis dan wisata
                seperti halnya Whoosh</div>
            </div>
            <div className="absolute left-0 bottom-20 text-lg font-bold text-gray-700">Sumber: Populix</div>
            <div className="pl-28">
              <img src={baseUrl + '/assets/3.3.png'} className="pt-20" alt="Bar Chart" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 pt-10 z-50 mx-auto max-w-4xl"
      >
        <motion.img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
          initial={{ filter: "blur(4px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>
    </motion.div>
  );
}
