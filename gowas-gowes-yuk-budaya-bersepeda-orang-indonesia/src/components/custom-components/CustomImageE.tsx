"use client";
import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion } from "framer-motion";

export function CustomImageE() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden font-sora">
      <div
        className="relative w-full justify-center bg-cover bg-[center_40%] pt-6 md:pt-20 lg:py-32 lg:pb-4"
        style={{ backgroundImage: `url(${baseUrl}/assets/5.1.1.jpg)` }}
      >
        <div className="absolute inset-0 backdrop-grayscale bg-white/0" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <div className="text-6xl font-bold text-center leading-tight">Perhatian pemerintah
            memfasilitasi pesepeda
            Indonesia, sudah ke arah
            yang <span className="text-[#ffbc25] text-stroke">benar?</span></div>
          <div className="text-2xl text-left max-w-[85%] mx-auto leading-relaxed">
            Dalam beberapa tahun terakhir, pemerintah Indonesia tampak memberi perhatian kepada pesepeda. Serangkaian <b>infrastruktur</b> berupa jalur sepeda dibuat di beberapa kota agar pesepeda lebih nyaman berkendara.
          </div>
          <img src={baseUrl + '/assets/5.2.png'} alt="Man with bike" className="opacity-0 max-h-[90rem]" />
          <div className="absolute bottom-[25rem] flex items-center justify-center w-full">
            <div className="max-w-[85%] mx-auto">
              <p className="bg-yellow-400 inline text-black font-bold text-4xl text-center leading-relaxed px-1 box-decoration-clone">
                Namun, sebatas jalur apakah sudah cukup memberi kepuasan bagi pesepeda di Indonesia?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 h-[10%] w-full bg-gradient-to-b from-[#e5e5e5]" />
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
