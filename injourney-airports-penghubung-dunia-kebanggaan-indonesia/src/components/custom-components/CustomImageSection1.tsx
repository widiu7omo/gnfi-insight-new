"use client";

import { baseUrl } from "@/constants/meta";
import { motion, type Variants } from "framer-motion";

export function CustomImageSection1() {
  const timelines = [
    {
      year: 1962,
      desc: "PT Angkasa Pura I didirikan dengan nama PN Angkasa Pura Kemayorandan pengambilan bagasi yang lebih cepat"
    },
    {
      year: 1984,
      desc: "PT Angkasa Pura II didirikan dengan nama Perum Bandar Udara Jakarta Cengkareng"
    },
    {
      year: "28 Desember 2023",
      desc: "PT Angkasa Pura II didirikan dengan nama Perum Bandar Udara Jakarta Cengkareng "
    },
    {
      year: "9 September 2024",
      desc: "Acara peresmian PT Angkasa Pura Indonesia dihelat, menandai tuntasnya proses merger"
    },
  ]

  return (
    <div className="!bg-[#f7f7f7] bg-inherit sm:bg-contain bg-no-repeat" style={{ backgroundImage: `url("${baseUrl}/assets/pattern-logo.svg")` }}>
      <div className="relative flex items-center justify-center flex-col ">
        <div className="h-[25rem] bg-gradient-radial from-[#f7f7f7] from-[20%] absolute w-full max-w-7xl top-0" />
        <div className="h-[25rem] bg-gradient-to-t from-[#f7f7f7] absolute w-full top-0" />
        <div className="flex flex-col items-center justify-end h-[25rem] max-w-7xl mx-auto relative pb-8">
          <div className="flex flex-col items-center space-y-4 ">
            <img src={`${baseUrl}/assets/1.1.png`} alt="In Journey" className="w-fit" />
            <div className="font-sora text-3xl xl:text-6xl font-semibold text-center">
              InJourney Airports, Sang Penerus PT Angkasa Pura I dan II
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <div className="flex flex-col md:flex-row items-stretch h-full max-w-7xl mx-auto relative z-10 px-8 sm:px-16 xl:px-0">
            <div className="flex-1 py-8 xl:py-16 relative">
              <div className="absolute border-4 top-0 xl:top-[4.6rem] bottom-[0rem] left-[-4%] sm:left-[-6%] xl:left-[-10%] border-l border-[#4dc1c6]" />
              <ul className="space-y-8 pr-10">
                {timelines.map((item) =>
                (<li key={item.year} className="space-y-1">
                  <div className="relative">
                    <div className="absolute left-[-4%] sm:left-[-6%] xl:left-[-10%] top-[25%]">
                      <div className="w-0 h-0 
                      border-t-[5px]
                      border-l-[15px]
                      border-b-[5px]
                      xl:border-t-[10px]
                      xl:border-l-[25px]
                      xl:border-b-[10px]
                      border-t-transparent 
                    border-l-[#4dc1c6]
                      border-b-transparent" />
                    </div>
                    <div className="text-xl sm:text-2xl xl:text-4xl font-sora text-[#f9af3f] font-medium">{item.year}</div>
                  </div>
                  <div className="font-sora sm:text-xl xl:text-3xl text-white">
                    {item.desc}
                  </div>
                </li>)
                )}
              </ul>
            </div>
            <div className="flex-1 my-auto w-full flex justify-center">
              <div className="h-full w-full flex flex-col items-stretch justify-end space-y-8 flex-1">
                <div className="flex-grow">
                  <img src={`${baseUrl}/assets/1.2.png`} alt="Map In Journey" className="" />
                  <div className="px-4 py-6 xl:py-12 xl:px-12 space-y-6 text-white">
                    <div className="font-sora font-medium sm:text-2xl xl:text-4xl tracking-wide leading-snug">
                      InJourney Airports
                      kini menjadi operator
                      bandara terbesar
                      kelima di dunia.
                    </div>
                    <img src={`${baseUrl}/assets/1.7.png`} alt="Dots" />
                    <div className="font-sora font-medium sm:text-xl xl:text-3xl text-white leading-normal">
                      Dengan 37
                      bandara yang dikelola,
                      penumpangnya diproyeksikan
                      akan mencapai 170 juta
                      pada akhir tahun nanti
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row absolute top-0 bottom-0 left-0 right-0">
            <div className="xl:flex-1 xl:bg-[#3f3f41]" />
            <div className="flex-1 bg-no-repeat bg-cover bg-right" style={{ backgroundImage: `url(${baseUrl}/assets/1.0.jpg)` }}>
              <div className="bg-gradient-to-r bg-black/30 xl:bg-transparent xl:bg-gradient-to-tr from-black/80 sm:from-black/70 sm:to-[90%] w-full h-full " />
            </div>
          </div>
        </div>
        <div className="bg-[#4dc1c6] w-full overflow-clip">
          <div className="w-full relative flex flex-col-reverse lg:flex-row max-w-7xl mx-auto items-center">
            <div className="flex-1 relative">
              <img src={`${baseUrl}/assets/1.5.png`} alt="Airport" className="absolute top-0" />
              <img src={`${baseUrl}/assets/1.6.png`} alt="Cloud" className="absolute top-0 left-10" />
              <img src={`${baseUrl}/assets/1.3.png`} alt="Logo InJourney" className="absolute top-[5%]" />
              <img src={`${baseUrl}/assets/1.4.png`} alt="Dony Oskaria" className="relative max-w-[80%] start-8" />
            </div>
            <div className="flex-1 py-6">
              <div className="px-12 py-16 space-y-4">
                <div className="font-sora font-medium text-xl sm:text-2xl xl:text-3xl text-gray-700 leading-normal">“Merger ini berjalan lancar
                  sesuai dengan tujuan pemerintah untuk meningkatkan sektor aviasi dan kebandarudaraan Indonesia menjadi 5 top global airports
                  operator. Terlebih merger ini sudah masuk dalam Program Strategis Nasional yang telah disetujui oleh pemerintah,”
                </div>
                <div className="text-lg xl:text-2xl text-gray-700"><span className="font-bold text-xl xl:text-3xl font-sora text-gray-800">Dony Oskaria</span>,<br />
                  eks Direktur Utama InJourney,
                  kini Wakil Menteri BUMN </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center bg-[#ec6a56] -mt-[4rem] ">
            <div className="max-w-7xl mx-auto">
              <img src={`${baseUrl}/assets/footer.png`} alt="Footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
