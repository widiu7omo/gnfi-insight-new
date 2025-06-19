"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export function CustomImageB() {

  return (
    <div className="relative flex flex-col font-sora items-center overflow-hidden bg-cover" style={{ backgroundImage: `url(${baseUrl}/assets/2.1.png)` }}>
      <div className="w-full max-w-4xl mx-auto h-fit relative">
        <div className="pt-20 flex relative">
          <img src={baseUrl + '/assets/2.2.png'} alt="Girl on bike" />
          <div className="absolute lg:w-[60%] right-0 top-[20%]">
            <h6 className="text-[3.6rem] leading-[4rem] text-white font-bold">Geliat industri sepeda Indonesia</h6>
            <p className="text-white text-2xl font-medium mt-4 leading-normal tracking-wide">
              Sepeda buatan Indonesia memikat hati penghobi gowes dalam maupun luar negeri.
            </p>
          </div>
        </div>
        <div className="bg-[#0f4a8c] rounded-lg p-8 max-w-4xl mx-auto absolute -bottom-28 z-10">
          <p className="text-3xl text-center leading-snug tracking-wide text-white">Tak hanya soal desain, tapi beberapa jenama antara lain seperti Polygon, Element, Pacific memiliki kualitas komponen berstandar internasional. </p>
        </div>
      </div>
      <div className="bg-white noise2 w-full flex flex-col items-center justify-center py-32 relative z-0 space-y-10">
        <div className="z-50 relative">
          <img src={baseUrl + '/assets/2.3.png'} alt="Polygon" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={baseUrl + '/assets/2.4.png'} alt="Element" />
          </div>
          <div>
            <img src={baseUrl + '/assets/2.5.png'} alt="Pacific" />
          </div>
        </div>
        <div className="text-center py-10 pb-6">
          <p className="text-4xl font-bold text-[#0f4a8c]">Mana favorit kalian?</p>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full invert sm:block"
        />
      </div>
    </div>
  );
}
