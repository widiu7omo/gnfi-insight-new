"use client";

import { baseUrl } from "@/constants/meta";
import { motion, type Variants } from "framer-motion";

export function CustomImageSection1() {
  const variants: Variants = {
    pOpen: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: { duration: .4, delay: 0.2 },
    },
    pClose: {
      opacity: 0,
      y: -20,
      x: -20,
      rotate: 1,
      transition: { duration: 1 },
    },
  };
  const flagVariant: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 0.3 },
    },
    close: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };
  const paragraphVariant: Variants = {
    open: {
      opacity: 1,
      y: 20
    },
    close: {
      opacity: 0,
      y: 0
    }
  };

  const carsVariant: Variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
        duration: 3
      }
    },
    close: {
      opacity: 0
    }
  }

  const carVariant: Variants = {
    open: {
      opacity: 1,
      y: 20,
      transition: {
        duration: .5
      }
    },
    close: {
      opacity: 0,
      y: 0
    }
  }
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
    <div className="bg-[#f7f7f7] bg-contain bg-no-repeat" style={{ backgroundImage: `url("${baseUrl}/assets/pattern-logo.svg")` }}>
      <div className="relative flex items-center justify-center flex-col ">
        <div className="h-[25rem] bg-gradient-radial from-[#f7f7f7] from-[20%] absolute w-full max-w-7xl top-0" />
        <div className="h-[25rem] bg-gradient-to-t from-[#f7f7f7] absolute w-full top-0" />
        <div className="flex flex-col items-center justify-end h-[25rem] max-w-7xl mx-auto relative pb-8">
          <div className="flex flex-col items-center space-y-4 ">
            <img src={`${baseUrl}/assets/1.1.png`} alt="In Journey" className="w-fit" />
            <p className="font-sora text-3xl xl:text-6xl font-semibold text-center">
              InJourney Airports, Sang Penerus PT Angkasa Pura I dan II
            </p>
          </div>
        </div>
        <div className=" w-full relative">
          <div className="flex max-w-7xl mx-auto relative z-10">
            <div className="flex-1 py-16 relative">
              <div className="absolute border-4 top-[4.6rem] bottom-[0rem] left-[-10%]  border-l border-[#4dc1c6]" />
              <ul className="space-y-8 pr-10">
                {timelines.map((item) =>
                (<li key={item.year} className="space-y-1">
                  <div className="relative">
                    <div className="absolute left-[-10%] top-[25%]">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[25px] border-l-[#4dc1c6] border-b-[10px] border-b-transparent" />
                    </div>
                    <p className="text-4xl font-sora text-[#f9af3f] font-medium">{item.year}</p>
                  </div>
                  <p className="font-sora text-3xl text-white">
                    {item.desc}
                  </p>
                </li>)
                )}
              </ul>
            </div>
            <div className="flex-1 h-full w-full">
              <div className="h-[50rem] w-full flex flex-col items-center justify-end space-y-8">
                <img src={`${baseUrl}/assets/1.2.png`} alt="Map In Journey" className="" />
                <div className="px-12 space-y-6 text-white">
                  <div className="font-sora font-medium text-4xl tracking-wide leading-snug">
                    InJourney Airports
                    kini menjadi operator
                    bandara terbesar
                    kelima di dunia.
                  </div>
                  <img src={`${baseUrl}/assets/1.7.png`} alt="Dots" />
                  <div className="font-sora font-medium text-3xl text-white leading-normal">
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
          <div className="flex flex-row absolute top-0 bottom-0 left-0 right-0">
            <div className="flex-1 bg-[#3f3f41]" />
            <div className="flex-1 bg-no-repeat bg-cover bg-right" style={{ backgroundImage: `url(${baseUrl}/assets/1.0.jpg)` }}>
              <div className="bg-gradient-to-tr from-black/70 to-[90%] w-full h-full" />
            </div>
          </div>
        </div>
        <div className="bg-[#4dc1c6] w-full overflow-clip">
          <div className="w-full relative flex max-w-7xl mx-auto items-end">
            <div className="flex-1 relative">
              <img src={`${baseUrl}/assets/1.5.png`} alt="Airport" className="absolute bottom-0" />
              <img src={`${baseUrl}/assets/1.6.png`} alt="Cloud" className="absolute top-0" />
              <img src={`${baseUrl}/assets/1.3.png`} alt="Logo InJourney" className="absolute top-[5%]" />
              <img src={`${baseUrl}/assets/1.4.png`} alt="Dony Oskaria" className="relative max-w-[80%]" />

            </div>
            <div className="flex-1 py-6">
              <div className="px-12 py-16 space-y-4">
                <p className="font-sora font-medium text-3xl text-gray-700 leading-normal">“Merger ini berjalan lancar
                  sesuai dengan tujuan pemerintah untuk meningkatkan sektor aviasi dan kebandarudaraan Indonesia menjadi 5 top global airports
                  operator. Terlebih merger ini sudah masuk dalam Program Strategis Nasional yang telah disetujui oleh pemerintah,”
                </p>
                <p className="text-2xl text-gray-700"><span className="font-bold text-3xl font-sora text-gray-800">Dony Oskaria</span>,<br />
                  eks Direktur Utama InJourney,
                  kini Wakil Menteri BUMN </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
