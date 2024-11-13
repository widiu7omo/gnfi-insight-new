"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageSection2() {
  const simpleFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-cover bg-[#eee9dd]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col items-center space-y-2 text-[#064038] py-2 md:py-12">
            <div className="text-2xl sm:text-3xl xl:text-5xl font-sora font-semibold tracking-[.03em] text-center">Jurus InJourney Airports</div>
            <div className="text-xl sm:text-2xl xl:text-4xl font-sora font-semibold tracking-[.04em] text-center">untuk Hadapi Perkembangan Zaman</div>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center">
            <div className="md:w-1/2 lg:w-1/2 xl:w-1/3 sm:max-w-[68%] lg:max-w-full text-white bg-[#064038] p-6 pb-10 lg:p-10 rounded-xl space-y-6 h-fit relative mx-4 lg:mx-0 lg:left-[9rem]">
              <p className="font-sora text-lg lg:text-xl font-medium">Dituntut beradaptasi dengan zaman, InJourney Airports melakukan transformasi di sektor pengelolaan bandara yang meliputi tiga hal berikut:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-6">
                  <img src={`${baseUrl}/assets/2.2.png`} alt="" className="size-[35px] pt-1" />
                  <div className="font-sora text-lg lg:text-xl">Peningkatan kualitas infrastruktur bandara</div>
                </li>
                <li className="flex items-start space-x-6">
                  <img src={`${baseUrl}/assets/2.3.png`} alt="" className="size-[35px] pt-1" />
                  <div className="font-sora text-lg lg:text-xl">Manajemen operasional berbasis ekosistem</div>
                </li>
                <li className="flex items-start space-x-6">
                  <img src={`${baseUrl}/assets/2.4.png`} alt="" className="size-[35px] pt-1" />
                  <div className="font-sora text-lg lg:text-xl">Peningkatan kualitas Sumber Daya Manusia (SDM) berbasis customer centric yang berstandar global</div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/9 -mt-10 xl:mt-0 z-10 lg:z-[-1]">
              <img src={`${baseUrl}/assets/2.1.svg`} alt="Airport" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <img src={`${baseUrl}/assets/2.0.jpg`} alt="Background Airport" className="absolute bottom-0 w-full" />
        <div className="absolute bottom-0 top-0 sm:top-[4rem] md:top-0 w-full bg-gradient-to-b from-[#eee9dd] to-[80%] h-full" />
        <div className="max-w-4xl mx-auto space-y-8 pt-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="text-xl md:text-2xl text-[#064038] font-sora tracking-wide text-center max-w-[80%]">
              Beberapa cara InJourney Airports untuk menjalankan transformasi tersebut:
            </div>
          </div>
          <div className="flex flex-col pb-8 px-4 sm:px-6 lg:px-0">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row space-x-4 bg-[#064038] h-fit md:h-[200px] overflow-hidden rounded-2xl ring-4 md:ring-8 ring-gray-50 shadow-md">
                <div className="relative w-full md:w-[350px]">
                  <img src={`${baseUrl}/assets/2.6.png`} alt="How 1" className="w-full object-cover" />
                  <div className="rounded-xl absolute text-xl font-semibold text-[#064038] px-4 py-1 bg-[#adbf52] top-1 left-1">Fisik</div>
                </div>
                <div className="flex-1 text-xl md:text-2xl font-medium text-white py-4 md:py-8 px-2 md:px-6">
                  Beautifikasi terminal,  peningkatan kapasitas penumpang
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-x-4 bg-[#064038] h-fit overflow-clip rounded-2xl ring-4 md:ring-8 ring-gray-50 shadow-md">
                <div className="relative w-full md:w-[350px]">
                  <img src={`${baseUrl}/assets/2.7.png`} alt="How 2" className="w-full object-cover" />
                  <div className="rounded-xl absolute text-xl font-semibold text-[#064038] px-4 py-1 bg-[#adbf52] top-1 left-1">Non Fisik</div>
                </div>
                <div className="flex-1 text-xl md:text-2xl font-medium text-white py-4 xl:py-8 px-2 xl:px-6">
                  Pembekalan General Manager bandara lewat GM Airport Academy dan Immersion Program GM Airport Academy, pelatihan hospitality, customer service and experience, dan lainnya untuk staf di level teknis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}