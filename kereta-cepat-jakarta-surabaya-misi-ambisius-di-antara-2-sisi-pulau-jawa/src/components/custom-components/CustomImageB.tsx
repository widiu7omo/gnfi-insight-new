"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef, ReactNode } from "react";

export function CustomImageB() {

  // Component for displaying vehicle transportation options with responsive design
  function VehicleItem({ name, time, price, image }: { name: string, time: string, price: string, image: string }): ReactNode {
    return <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
      <img src={baseUrl + '/assets/' + image} alt={name} className="w-full sm:w-[30%] lg:w-[25%] object-contain" />
      <div className="flex flex-col items-start space-y-2">
        <div className="text-lg sm:text-xl lg:text-2xl font-semibold">{name}</div>
        <div className="flex items-center space-x-2">
          <img src={baseUrl + '/assets/clock.svg'} alt="Clock Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
          <div className="text-sm sm:text-lg lg:text-xl font-medium">{time}</div>
        </div>
        <div className="flex items-center space-x-2">
          <img src={baseUrl + '/assets/wallet.svg'} alt="Wallet Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
          <div className="text-sm sm:text-lg lg:text-xl font-medium">{price}</div>
        </div>
      </div>
    </div>
  }

  return (
    <motion.div
      className="relative flex flex-col font-sora items-center overflow-hidden bg-cover bg-[#f0eada] pb-0 py-10 md:py-20"
    >
      <div className="absolute rounded-full top-[50%] h-full w-full bg-[#7b090a]"></div>
      <div className="max-w-4xl mx-auto md:pb-12 px-4">
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#ad1618] pb-12 sm:pb-16 lg:pb-20">Jakarta-Surabaya,
          Bisa Ditempuh Pakai Apa?
        </div>
        <img src={`${baseUrl}/assets/2.1.png`} alt="Java" className="relative z-10 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mx-0 sm:mx-8 lg:mx-16 -mt-12 sm:-mt-16 lg:-mt-20">
          <div className="md:col-span-2 bg-white shadow-xl shadow-black/5 rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pt-8 sm:pt-10 relative">
            <div className="absolute top-[-1.5rem] left-[0] px-4 sm:px-6 tracking-wide py-2 text-lg sm:text-xl font-bold text-white bg-red-600 rounded-2xl border-4 border-white">Via Darat</div>
            <VehicleItem name="Kendaraan Pribadi" image='2.2.png' time="10-12 jam" price="Rp 1,2-1,3 juta (estimasi)" />
            <VehicleItem name="Bus" image="2.3.png" time="10-12 jam" price="Rp 280 ribu - Rp 625 ribu" />
            <VehicleItem name="Kereta" image="2.4.png" time="7 jam 45 menit - 12 jam 8 menit" price="Rp 104 ribu - Rp 2 jutaan" />
          </div>
          <div className="bg-white mt-4 sm:mt-6 shadow-xl shadow-black/5 rounded-2xl space-y-4 sm:space-y-6 pt-8 sm:pt-10 relative">
            <div className="absolute top-[-1.5rem] left-[0] px-4 sm:px-6 tracking-wide py-2 text-lg sm:text-xl font-bold text-white bg-[#102e50] rounded-2xl border-4 border-white">Via Udara</div>
            <img src={`${baseUrl}/assets/2.5.png`} alt="Plane" className="scale-90 sm:scale-100 lg:scale-110 w-full object-contain" />
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <img src={baseUrl + '/assets/clock.svg'} alt="Clock Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">1.5 jam</div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={baseUrl + '/assets/wallet.svg'} alt="Wallet Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">Mulai Rp967 ribu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-4 sm:mt-6 shadow-xl shadow-black/5 rounded-2xl pt-[0.5rem] relative">
            <div className="absolute z-10 top-[-1.5rem] left-[0] px-4 sm:px-6 tracking-wide py-2 text-lg sm:text-xl font-bold text-white bg-[#56b4ba] rounded-2xl border-4 border-white">Via Laut</div>
            <img src={`${baseUrl}/assets/2.6.png`} alt="Ship" className="scale-90 sm:scale-100 lg:scale-110 w-full object-contain" />
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <img src={baseUrl + '/assets/clock.svg'} alt="Clock Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">1 hari</div>
                </div>
                <div className="flex items-start space-x-2">
                  <img src={baseUrl + '/assets/wallet.svg'} alt="Wallet Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-sm sm:text-lg lg:text-xl font-medium">
                    Rp 300 ribuan <br />
                    <small className="text-xs sm:text-sm lg:text-base font-normal">(kapal Pelni kelas ekonomi)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 hidden md:block pt-10 z-50 mx-auto max-w-4xl"
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
