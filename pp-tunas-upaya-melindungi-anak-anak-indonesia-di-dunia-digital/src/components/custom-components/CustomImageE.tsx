"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function CustomImageE() {
  const heroRef = useRef(null);
  const questionRef = useRef(null);

  const questionInView = useInView(questionRef, { once: true });

  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Namun, sebatas jalur apakah sudah cukup memberi kepuasan bagi pesepeda di Indonesia?";

  useEffect(() => {
    if (questionInView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [questionInView]);

  return (
    <motion.div
      className="relative flex flex-col items-center overflow-hidden font-sora bg-no-repeat bg-[center_top_20%] bg-cover" style={{ backgroundImage: `url(${baseUrl + '/assets/5.1.jpg'})` }}
    >
      <div className="absolute top-0 h-[10rem] w-full bg-gradient-to-b from-[#efefe8]"></div>

      <div className="mx-auto max-w-4xl py-12 relative">
        <div className="space-y-4 px-4 lg:px-0">
          <div className="font-bold text-2xl sm:text-3xl lg:text-4xl">Pada dasarnya, internet bermanfaat untuk anak</div>
          <div className="font-bold text-4xl sm:text-5xl lg:text-7xl">Namun, harus ada pendampingan orang tua</div>
          <div className="h-[60rem] md:h-[70rem] lg:h-[80rem]" />
        </div>
        <div className="space-y-20 px-4 lg:px-0">
          <div className="text-center font-bold text-2xl lg:text-3xl">Peran orang tua saat anak berinternet:</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-6 lg:gap-6">
            <div className="bg-[#eae9e7] p-6 rounded-xl shadow-xl flex flex-col justify-start items-center relative">
              <img src={baseUrl + '/assets/5.2.png'} alt="" className="max-h-[10rem] w-fit absolute top-[-4rem]" />
              <div className="text-base sm:text-xl lg:text-2xl font-medium sm:font-bold text-center text-neutral-700 pt-[5rem]">Pembatasan waktu, durasi dan konten</div>
            </div>
            <div className="bg-[#eae9e7] p-6 rounded-xl shadow-xl flex flex-col justify-start items-center relative">
              <img src={baseUrl + '/assets/5.3.png'} alt="" className="max-h-[10rem] w-fit absolute top-[-4rem]" />
              <div className="text-sm sm:text-lg lg:text-xl font-medium sm:font-bold text-center text-neutral-700 pt-[5rem]">Mengikutsertakan anak dalam menyusun aturan dan batasan</div>
            </div>
            <div className="bg-[#eae9e7] p-6 rounded-xl shadow-xl flex flex-col justify-start items-center relative">
              <img src={baseUrl + '/assets/5.4.png'} alt="" className="max-h-[10rem] w-fit absolute top-[-4rem]" />
              <div className="text-base sm:text-xl lg:text-2xl font-medium sm:font-bold text-center text-neutral-700 pt-[5rem]">Konsisten menerapkan aturan</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-4xl mx-auto">
          <img src={baseUrl + '/assets/5.5.png'} alt="Family" className="" />
        </div>
        <div className="bg-[#776a62] relative z-10 -mt-[5%] w-full">
          <div className="max-w-4xl px-0 pt-10 pb-6 sm:pb-24 mx-auto text-white text-base sm:text-lg lg:text-2xl leading-relaxed">
            <div className="px-4 lg:px-0">
              "Memang tidak mudah menerapkan aturan-aturan tersebut, tetapi yang jelas apabila orang tua juga aware dengan dampak negatif dari penyalahgunaan internet pada anak, menyebabkan implementasinya akan jauh lebih mudah. Karena orang tua aware, anak lambat laun juga muncul kesadaran dalam dirinya. Tidak pure rasa takut, tetapi lebih ke arah kesadaran."</div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </motion.div>
    </motion.div>
  );
}
