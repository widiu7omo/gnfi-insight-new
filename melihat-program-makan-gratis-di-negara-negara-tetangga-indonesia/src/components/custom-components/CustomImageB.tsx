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
        className="relative flex h-full w-full justify-center bg-cover bg-top text-center pt-10 xl:pt-32"
        style={{ backgroundImage: `url(${baseUrl}/assets/2.0.jpg)` }}
      >
        <div className="absolute w-full h-[50%] bg-gradient-to-b from-[#51534d] top-0" />
        <div className="z-10 max-w-4xl mx-auto">
          <div className="relative space-y-2 inset-x-0 z-10 mb-4 text-center font-sora text-3xl font-bold text-white md:text-6xl flex flex-col justify-center items-center">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="px-4 py-2 rounded-xl break-words w-fit">
              Program Makan Gratis di Malaysia, Sudah Ada sejak 1979
            </motion.h3>
          </div>
          <div className="float-right">
            <div className="w-[20rem] bg-blue-500 text-white relative font-sora p-8 rounded-2xl">
              <img src={baseUrl + "/assets/2.1.png"} alt="Plate" className="absolute top-[-2rem] right-[-2rem] w-[10rem] z-10" />

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

            </div>
            <div className="bg-black w-[20rem] text-white relative font-sora p-8 rounded-2xl -mt-6">
              <img src={baseUrl + "/assets/2.2.png"} alt="Plate" className="absolute top-[-2rem] right-0 w-[10rem] z-10" />
              <p className="text-lg text-left relative z-10">
                <div>Penerima:</div>
                <div className="mr-[5rem]">Siswa yang
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
              </p>
            </div>
          </div>
          <img src={`${baseUrl}/assets/footer.png`} className="z-50 hidden sm:block relative bottom-0 h-fit w-fit mx-auto" />
        </div>
      </div>
    </div>
  );
}
