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
        className="relative flex h-full w-full justify-center bg-cover bg-center text-center pt-10 xl:pt-32"
        style={{ backgroundImage: `url(${baseUrl}/assets/2.0.jpg)` }}
      >
        <div className="absolute w-full h-[50%] bg-gradient-to-b from-[#51534d] top-0" />
        <div className="z-10 w-full">
          <div className="max-w-4xl mx-auto relative space-y-2 inset-x-0 z-10 mb-4 text-center font-sora text-3xl font-bold text-white md:text-6xl flex flex-col justify-center items-center">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="px-4 py-2 rounded-xl break-words w-fit">
              Program Makan Gratis di Malaysia, Sudah Ada sejak 1979
            </motion.h3>
          </div>
          <div className="flex max-w-4xl mx-auto z-10 relative">
            <div className="basis-2/3" />
            <div className="basis-1/3">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.6 }}
                className="w-[20rem] bg-blue-500 text-white relative font-sora p-8 rounded-2xl">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  src={baseUrl + "/assets/2.1.png"} alt="Plate" className="absolute top-[-2rem] right-[-2rem] w-[10rem] z-10" />

                <div className="space-y-4 text-left">
                  <h6 className="pb-1 text-2xl font-semibold  mr-[4rem]">Rancangan
                    Makanan
                    Tambahan
                    (RMT)</h6>
                  <p className="text-lg">
                    Dimulai pada 1979,
                    Pemerintah Malaysia membagikan makanan dan susu selama {" "}<b>190 hari</b> dalam setahun
                  </p>
                  <p className="text-lg">Didanai Kementerian Pendidikan. Untuk 2025, anggarannya{" "}
                    <b>869 juta ringgit</b>
                  </p>
                </div>

              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-black w-[20rem] text-white relative font-sora p-8 rounded-2xl -mt-6">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  src={baseUrl + "/assets/2.2.png"} alt="Plate" className="absolute top-[-2rem] right-0 w-[10rem] z-10" />
                <div className="text-lg text-left relative z-10">
                  <div>Penerima:</div>
                  <div className="mr-[5rem] pb-1.5">Siswa yang
                    memenuhi
                    salah satu dari
                    kriteria berikut:</div>
                  <ol className="pl-5 list-decimal font-bold">
                    <li>Pendapatan kepala
                      keluarganya di bawah standar kemiskinan
                    </li>
                    <li>Orang Asli dan
                      Orang Penan</li>
                    <li>Berkebutuhan khusus</li>
                  </ol>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="bg-[#272727] h-full w-full -mt-5 pt-20 font-sora relative">
            <div className="absolute top-[0rem] sm:top-[-4rem] lg:top-[-10rem] left-0 right-[-2rem] w-full">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0, duration: 0.6 }}
                src={baseUrl + '/assets/2.4.png'} className="object-contain w-full scale-[2] md:scale-100" alt="Flag" />
            </div>
            <div className="flex max-w-4xl mx-auto w-full flex-col lg:flex-row relative z-10 bg-[#272727]">
              <div className="basis-1/2 flex flex-col p-8 items-start justify-start">
                <motion.h4
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0, duration: 0.6 }}
                  className="text-3xl text-white text-left w-full pb-6 font-semibold">Hidangan Berkhasiat di Sekolah (HiTS)</motion.h4>
                <ul className="text-left text-white text-lg space-y-2">
                  <motion.li
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0.6 }}
                    className="flex space-x-2 items-start">
                    <div className="w-0 h-0 border-t-[10px] mt-1.5 scale-[0.80] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-yellow-500"></div>
                    <p>Dimulai sejak 2007 di Muar, Johor</p>
                  </motion.li>
                  <motion.li
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex space-x-2 items-start">
                    <div className="w-0 h-0 border-t-[10px] mt-1.5 scale-[0.80] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-yellow-500"></div>
                    <p>Didanai pihak sekolah dan orang tua siswa</p>
                  </motion.li>
                  <motion.li
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex space-x-2 items-start">
                    <div className="w-0 h-0 border-t-[10px] mt-1.5 scale-[0.80] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-yellow-500"></div>
                    <p>Tersedia pilihan setidaknya
                      60 menu, lebih banyak dari
                      RMT yang hanya 20 menu</p>
                  </motion.li>
                </ul>
              </div>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                src={baseUrl + '/assets/2.3.jpg'} alt="Children" className="basis-1/2 w-full lg:w-1/2" />
            </div>
            <img src={`${baseUrl}/assets/footer.png`} className="z-50 hidden sm:block relative bottom-0 h-fit w-fit mx-auto" alt="Footer" />
          </div>
        </div>
      </div>
    </div>
  );
}
