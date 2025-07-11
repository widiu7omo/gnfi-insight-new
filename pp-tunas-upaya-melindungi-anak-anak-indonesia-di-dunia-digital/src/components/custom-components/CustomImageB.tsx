"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export function CustomImageB() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const brandsRef = useRef(null);
  const questionRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const cardInView = useInView(cardRef, { once: true });
  const brandsInView = useInView(brandsRef, { once: true });
  const questionInView = useInView(questionRef, { once: true });

  return (
    <motion.div
      className="relative flex flex-col font-sora items-center overflow-hidden bg-cover"
    >
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#070419]" />
      <div className="absolute size-[60rem] blur-[10rem] bottom-[20rem] bg-gradient-to-b to-[40%] from-purple-600 to-pink-600 rounded-full right-20" />
      <div className="absolute size-[50rem] blur-[8rem] bottom-[20rem] bg-red-600 rounded-full right-20" />
      <div className="absolute size-[40rem] blur-[4rem] bottom-[20rem]  bg-gradient-to-b from-red-600 to-yellow-600 rounded-full right-[20rem]" />
      <div className="relative noise2 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="w-full flex items-center justify-end relative">
            <img src={baseUrl + '/assets/2.1.png'} alt="Child with Phone" className="" />
            <div className="absolute w-3/4 lg:w-1/2 left-0 top-4 sm:top-20 px-4 lg:px-0">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#ffc600]">
                Beragam Bahaya
                Mengintai Anak
                di Ruang Digital
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl text-white font-medium mt-10">
                Anak-anak harus dilindungi di ruang digital. Sebab, ada banyak bahaya yang mengintai
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto -mt-[6rem] relative mb-28">
          <div className="lg:hidden flex flex-col items-center justify-center mt-10 gap-12">
            <div className="flex flex-col md:flex-row w-full">
              <div className="space-y-4 flex flex-col p-8 bg-black/20 backdrop-blur-xl relative w-full">
                <div className="absolute right-0 bottom-0 z-10 w-[15rem] md:w-[16rem]">
                  <img src={baseUrl + '/assets/2.2.png'} alt="" className="w-full " />
                </div>
                <div>
                  <div className="text-3xl w-[50%] md:w-auto font-bold text-[#ffc600] mt-4 relative z-10">
                    Pornografi anak
                  </div>
                  <div className="text-white w-[60%] md:w-[70%] text-base md:text-2xl font-medium relative z-10">
                    Lebih dari
                    5,5 juta kasus di Indonesia dalam 4 tahun terakhir
                  </div>
                  <div className="text-white">(data NCMEC)</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full">
              <div className="space-y-4 p-8 bg-black/20 backdrop-blur-xl relative w-full">
                <div className="absolute right-0 bottom-0 z-10 w-[15rem] md:w-[16rem]">
                  <img src={baseUrl + '/assets/2.3.png'} alt="" className="w-full " />
                  <div className="bg-gradient-to-t to-[50%] from-black absolute left-0 right-0 bottom-0 top-0"></div>
                </div>
                <div className="text-3xl w-[50%] md:w-auto font-bold text-[#ffc600] mt-4 relative z-10">
                  Perundungan daring
                </div>
                <div className="text-white w-[60%] md:w-[70%] text-base md:text-2xl font-medium relative z-10">
                  anak-anak di Indonesia pernah mengalami
                </div>
                <div className="text-white">(data NCMEC)</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full">
              <div className="space-y-4 p-8 bg-black/20 backdrop-blur-xl relative w-full">
                <div className="absolute right-0 bottom-0 z-10 w-[15rem] md:w-[16rem]">
                  <img src={baseUrl + '/assets/2.4.png'} alt="" className="w-full " />
                  {/* <div className="bg-gradient-to-t to-[50%] from-black absolute left-0 right-0 bottom-0 top-0"></div> */}
                </div>
                <div className="text-3xl w-[50%] md:w-auto font-bold text-[#ffc600] mt-4 relative z-10">
                  Judi online
                </div>
                <div className="text-white w-[60%] md:w-[70%] text-base md:text-2xl font-medium relative z-10">
                  anak usia di bawah 10 tahun terpapar judi online
                </div>
                <div className="text-white">(data NCMEC)</div>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden items-start gap-6">
            <div className="flex-1 flex flex-col items-start relative">
              <div className="absolute z-10 left-0 w-full top-[-7rem]">
                <img src={baseUrl + '/assets/2.2.png'} alt="" className="h-full" />
                <div className="w-full h-full absolute bottom-4 flex items-end justify-center">
                  <div className="text-4xl font-bold text-white text-center">5.5jt +</div>
                </div>
              </div>
              <div className="space-y-4 px-10 bg-black/20 backdrop-blur-xl h-[38rem]">
                <div className="h-[17rem]"></div>
                <div className="text-3xl font-bold text-[#ffc600] mt-4">
                  Pornografi anak
                </div>
                <div className="text-white text-2xl font-medium">
                  Lebih dari
                  5,5 juta kasus di Indonesia dalam 4 tahun terakhir
                </div>
                <div className="text-white absolute bottom-6">(data NCMEC)</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start relative">
              <div className="absolute z-10 left-0 w-full top-[-7rem]">
                <img src={baseUrl + '/assets/2.3.png'} alt="" className="h-full" />
                <div className="w-full h-full absolute bottom-4 flex items-end justify-center">
                  <div className="text-4xl font-bold text-white text-center">48%</div>
                </div>
              </div>
              <div className="space-y-4 px-10 bg-black/20 backdrop-blur-xl h-[38rem]">
                <div className="h-[17rem]"></div>
                <div className="text-3xl font-bold text-[#ffc600] mt-4">
                  Perundungan daring
                </div>
                <div className="text-white text-2xl font-medium">
                  anak-anak di Indonesia pernah mengalami
                </div>
                <div className="text-white absolute bottom-6">(data NCMEC)</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start relative">
              <div className="absolute z-10 left-0 w-full top-[-7rem]">
                <img src={baseUrl + '/assets/2.4.png'} alt="" className="h-full" />
                <div className="w-full h-full absolute bottom-4 flex items-end justify-center">
                  <div className="text-4xl font-bold text-white text-center">80rb</div>
                </div>
              </div>
              <div className="space-y-4 px-10 bg-black/20 backdrop-blur-xl h-[38rem]">
                <div className="h-[17rem]"></div>
                <div className="text-3xl font-bold text-[#ffc600] mt-4">
                  Judi online
                </div>
                <div className="text-white text-2xl font-medium pt-8">
                  anak usia di bawah 10 tahun terpapar judi online
                </div>
                <div className="text-white absolute bottom-6">(data Kemkomdigi)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 pt-10 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </motion.div>
    </motion.div>
  );
}
