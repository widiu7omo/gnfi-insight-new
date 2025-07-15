"use client";

import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function CustomImageC() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (statsInView) {
      let start = 0;
      const end = 156;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounter(end);
          clearInterval(timer);
        } else {
          setCounter(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [statsInView]);
  const flags: { flag: string; name: string, desc: string }[] = [
    { flag: baseUrl + '/assets/3.1.png', name: 'Amerika Serikat', desc: 'Di bawah 13 tahun membutuhkan persetujuan orang tua' },
    { flag: baseUrl + '/assets/3.2.png', name: 'Prancis', desc: 'Terlarang bagi usia di bawah 15 tahun (masih rencana)' },
    { flag: baseUrl + '/assets/3.3.png', name: 'United Kingdom', desc: 'Terlarang bagi usia di bawah 16 tahun  (masih rencana)' },
    { flag: baseUrl + '/assets/3.4.png', name: 'Jerman', desc: 'Usia 13-16 tahun membutuhkan persetujuan orang tua' },
    { flag: baseUrl + '/assets/3.5.png', name: 'Australia', desc: 'Terlarang bagi usia di bawah 16 tahun' },
    { flag: baseUrl + '/assets/3.6.png', name: 'Italia', desc: 'Usia di bawah 14 tahun membutuhkan persetujuan orang tua' },
    { flag: baseUrl + '/assets/3.7.png', name: 'Norwegia', desc: 'Terlarang bagi usia di bawah 16 tahun (masih rencana)' },
    { flag: baseUrl + '/assets/3.8.png', name: 'Yunani', desc: 'Usia di bawah 15 tahun harus disertai verifikasi dan kontrol orang tua (masih rencana)' },
  ]
  return (
    <motion.div
      className="relative flex font-sora flex-col items-center overflow-hidden bg-gradient-to-b from-black to-[80%] to-[#070419] bg-no-repeat"

    >
      {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#070419]" /> */}
      <div className="absolute w-[40rem] h-[80rem] blur-[10rem] bottom-[-40rem] bg-gradient-to-b to-[40%] from-purple-600 to-pink-600 rounded-full" />
      <div className="absolute size-[40rem] blur-[8rem] bottom-[0rem] left-[30%] bg-red-600 rounded-full" />
      <div className="absolute size-[40rem] blur-[4rem] bottom-[-40rem]  bg-gradient-to-b from-red-600 to-yellow-600 rounded-full" />
      <div className="relative noise2 w-full pt-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-[#ffc600] text-3xl md:text-4xl lg:text-6xl text-center font-bold px-4 lg:px-0">Aturan Mirip PP Tunas di Negara Lain</div>
            <div className="text-white font-medium text-lg md:text-2xl lg:text-3xl text-center px-4 lg:px-0">Di berbagai negara, penggunaan akun <br /> media sosial anak juga punya batasan usia</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-6 px-2 md:px-0">
            {flags.map(flag => (<div className="flex" key={flag.name}>
              <img src={flag.flag} alt={flag.name} className="size-[8rem] md:size-auto" />
              <div className="flex flex-col text-white justify-center">
                <div className="text-xl lg:text-2xl font-bold mb-3">{flag.name}</div>
                <div className="text-base lg:text-xl">{flag.desc}</div>
              </div>
            </div>))}
          </div>
          <div className="italic text-xl text-white float-right mr-4">Sumber: tech.co</div>
          <div className="relative">
            <img src={baseUrl + '/assets/3.9.png'} alt="Parent with children" />
            <motion.div
              className="absolute bottom-0 z-50 mx-auto max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <img
                src={`${baseUrl}/assets/footer.png`}
                className="z-50 mx-auto hidden w-full sm:block"
              />
            </motion.div>
          </div>
        </div>
        <Paragraph block={{
          component: COMPONENT_PARAGRAPH,
          componentProps: {
            className: 'text-white max-w-[65ch] font-sans',
            children: (<>
              <p>Tak hanya Australia, beberapa negara Eropa juga memiliki regulasi soal penggunan media sosial dan platform digital untuk anak-anak. Meski tiap negara memiliki pendekatan yang berbeda, tujuannya tetap sama, yaitu melindungi anak-anak dari risiko dunia digital dan memastikan media sosial digunakan secara bijak sesuai usia pengguna.</p>
            </>)
          }
        }} />
      </div>

    </motion.div>
  );
}
