"use client";
import { baseUrl } from "@/constants/meta";
import NumberFlow, { useCanAnimate } from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const MotionNumberFlow = motion(NumberFlow)
export function CustomImageB() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [numbers, setNumbers] = useState([0, 0])
  useEffect(() => {
    if (inView) {
      setNumbers([37, 32])
    } else {
      setNumbers([0, 0])
    }
  }, [inView])
  const canAnimate = useCanAnimate()
  return (
    <div className="relative flex flex-col items-center overflow-hidden ">
      <div
        className="relative flex h-full w-full justify-center bg-cover bg-no-repeat text-center pt-10 xl:pt-32 bg-[center_top_-20rem]"
        style={{ backgroundImage: `url(${baseUrl}/assets/2.0.1.png)` }}
      >
        <div className="absolute w-full h-[50%] bg-gradient-to-b from-[#f0eff0] top-0" />
        <div className="z-10 w-full">
          <div className="max-w-4xl mx-auto relative space-y-6 inset-x-0 z-10 mb-4 text-center font-sora text-neutral-950 flex flex-col justify-center items-center">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="px-4 py-2 rounded-xl break-words w-fit text-3xl md:text-7xl font-bold">
              Bukan Sekadar Kuliner Kuah-kuahan Biasa
            </motion.h3>
            <motion.p className="text-3xl xl:px-3">
              Soto sendiri pada dasarnya menggunakan bumbu utama sederhana. Akan tetapi, ketika memasuki wilayah-wilayah Indonesia, soto menjadi kaya dengan bumbu seperti:
            </motion.p>
          </div>
          <div className="h-[70rem] relative flex flex-col items-center justify-center max-w-4xl mx-auto">
            <img src={`${baseUrl}/assets/2.1.png`} alt="" className="absolute top-0" />
            <img src={`${baseUrl}/assets/2.2.png`} alt="" className="absolute top-[20%] left-[-4rem]" />
            <img src={`${baseUrl}/assets/2.3.png`} alt="Lengkuas" className="absolute top-[30%] right-5" />
            <img src={`${baseUrl}/assets/2.4.png`} alt="" className="absolute bottom-[20%] left-0" />
            <img src={`${baseUrl}/assets/2.5.png`} alt="" className="absolute bottom-[25%] right-0" />
          </div>
          <div className="flex flex-col max-w-7xl mx-auto z-10 relative">
            <div className="h-[20rem]" />
            <div className="relative flex items-center justify-center">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.6 }}
                src={`${baseUrl}/assets/2.6.png`} className="w-full" alt="Chef" />
              <div className="absolute top-[23%] max-w-sm">
                <div className="absolute top-1 max-w-sm left-[-20px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-orange-500" />
                <p className="text-left font-sora text-white font-medium text-2xl relative">Pakar kuliner nusantara, <br />
                  <b>William Wongso</b> mengatakan jika
                  menyebut soto wajib menambahkan
                  asal daerahnya, misalnya: soto Kudus,
                  soto Banjar, soto Betawi, dan masih
                  banyak lagi</p>
              </div>
            </div>
            <img src={`${baseUrl}/assets/footer.png`} className="z-50 absolute hidden sm:block bottom-0 h-fit w-fit mx-auto" alt="Footer" />
          </div>
        </div>
      </div>
    </div>
  );
}
