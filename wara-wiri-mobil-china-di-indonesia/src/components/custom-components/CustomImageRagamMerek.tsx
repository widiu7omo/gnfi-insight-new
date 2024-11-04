"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageRagamMerek() {
  const variants = {
    pOpen: {
      opacity: 1, y: 0, transition: {
        staggerChildren: 0.2,
      },
    },
    pClose: { opacity: 0, y: 5 },
  }
  const childVariants = {
    pOpen: {
      opacity: 1, x: 0, transition: { duration: .3 }
    },
    pClose: { opacity: 0, x: -5, transition: { duration: .3 } },
  }

  return (<div className="relative">
    <section id="section-1" className="bg-[#3b1312] -mt-1 overflow-clip space-y-14 pb-10">
      <div className="relative flex items-start justify-center max-w-4xl mx-auto z-10">
        <div
          className="w-full bg-no-repeat bg-[cover,contain] xl:bg-[cover,auto] bg-[center_top] relative bg-blend-multiply"
        >
          <p className="text-center md:text-4xl text-xl text-white font-extrabold px-4 md:px-10 pt-6">Sejak kapan gelombang
            mobil China menyerbu Indonesia?</p>
          <img src={`${baseUrl}/assets/1.0.png`} alt="Car Wuling" className="z-50 relative" />
          <div className="flex flex-col sm:flex-row space-x-0 md:space-x-8 md:px-10">
            <div className="flex-1 px-4 md:px-0 flex flex-col items-center sm:items-start">
              <img src={`${baseUrl}/assets/1.2.png`} alt="Wuling Logo" />
              <p className="text-lg sm:text-2xl font-bold text-[#f19445]">Wuling adalah pionirnya. </p>
              <p className="text-base sm:text-xl font-medium text-white text-center sm:text-start">Mereka hadir sejak 2017 dan berhasil masuk ke deretan
                10 besar mobil terlaris
                di Indonesia hanya dalam
                waktu tujuh tahun</p>
            </div>
            <div className="flex-1 pt-[2rem] sm:pt-[6.2rem] px-4 md:px-0 flex flex-col items-center sm:items-start">
              <img src={`${baseUrl}/assets/1.3.png`} alt="Chery Logo" />
              <p className="text-base sm:text-xl font-medium text-white text-center sm:text-start">Sebelumnya Chery juga pernah hadir di Indonesia,
                namun hengkang pada 2013 karena penjualannya
                terus melandai</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 max-w-4xl mx-auto z-20 relative">
        <p className="text-center text-3xl text-white font-extrabold px-4 md:px-0">Kini, semakin banyak produsen mobil China
          yang masuk ke Indonesia:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute rounded-full right-[15%] size-[10rem] bg-[#63302f] shadow-lg" />
            <img src={`${baseUrl}/assets/1.4.png`} alt="Velos" className="relative" />
            <p className="text-white absolute bottom-[5%] font-medium text-xl">Wuling</p>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute rounded-full right-[15%] size-[10rem] bg-[#63302f] shadow-lg" />
            <img src={`${baseUrl}/assets/1.5.png`} alt="Velos" className="relative" />
            <p className="text-white absolute bottom-[5%] font-medium text-xl">Chery</p>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute rounded-full right-[15%] size-[10rem] bg-[#63302f] shadow-lg" />
            <img src={`${baseUrl}/assets/1.6.png`} alt="Velos" className="relative" />
            <p className="text-white absolute bottom-[-5%] font-medium text-xl text-center">Great Wall Motor <br />(GWM)</p>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute rounded-full right-[15%] size-[10rem] bg-[#63302f] shadow-lg" />
            <img src={`${baseUrl}/assets/1.7.png`} alt="Velos" className="relative" />
            <p className="text-white absolute bottom-[-5%] font-medium text-xl text-center">Build Your Dream <br />(BYD)</p>
          </div>
        </div>
      </div>
    </section>
    <div className="absolute top-[-5rem] right-[-20%] h-[40rem] w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#b22025] from-0% to-[#3b1312] to-70% z-0" />
    <div className="relative z-0 hidden md:block">
      <div className="absolute bottom-[35rem] h-[20rem] w-full bg-gradient-to-b from-[#8a201d] from-0% to-[#3b1312] to-70% z-10" />
      <div className="absolute bottom-[35rem] h-[20rem] w-full bg-gradient-to-l from-[#3b1312]/0 from-0% to-[130%] to-[#3b1312] z-10" />
    </div>
  </div>
  );
}
