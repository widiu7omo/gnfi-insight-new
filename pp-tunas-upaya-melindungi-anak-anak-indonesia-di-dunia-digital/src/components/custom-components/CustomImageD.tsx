"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CustomImageD() {
  const heroRef = useRef(null);

  return (
    <motion.div
      className="relative flex flex-col items-center overflow-hidden font-sora"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="relative w-full justify-center bg-cover bg-top pt-6 md:pt-20 "
        style={{ backgroundImage: `url(${baseUrl}/assets/4.1.png)` }}
      >
        <div className="absolute bottom-[-2px] w-full h-full block lg:hidden bg-gradient-to-t from-white"></div>
        <motion.div
          ref={heroRef}
          className="max-w-4xl mx-auto lg:pb-28 relative z-10"
        >
          <motion.div
            className="w-full space-y-8 px-4 lg:px-0"
          >
            <motion.div
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold pr-20 !leading-[1.2]"
            >
              Berapa Usia Ideal Anak untuk Mengakses <br />Media Sosial?
            </motion.div>
            <div className="py-16 space-y-16">
              <div className="bg-[#00213b] rounded-2xl p-6 text-white font-medium relative w-full sm:w-3/4 lg:w-1/2 relative">
                <img src={baseUrl + '/assets/4.3.png'} alt="Person 1" style={{ shapeOutside: 'circle()' }} className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3" />
                <div className="text-base leading-relaxed">
                  "Akses tanpa pengawasan, tanpa screen control atau pantauan orang tua, mungkin harus ditunda selama mungkin, tentunya sampai setidaknya (anak sudah berusia 9 tahun)."
                </div>
                <div className="mt-4">
                  Psikolog klinis & Chief Science Officer American Psychological Association (APA), Dr. Mitch Prinstein,
                  via CNBC Make It
                </div>
              </div>
              <div className="bg-[#00213b] rounded-2xl p-6 text-white font-medium relative w-full sm:w-3/4 lg:w-1/2 relative">
                <img src={baseUrl + '/assets/4.4.png'} alt="Person 1" style={{ shapeOutside: 'circle()' }} className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3" />
                <div className="text-base leading-relaxed">
                  "Penelitian menunjukkan bahwa anak perempuan 10-14 tahun terdampak paling besar oleh algoritma media sosial. Saya akan menunggu hingga berusia 15 atau 16, tetapi itu juga tampak kurang realistis bagi banyak kehidupan orang tua dan sang anak."
                </div>
                <div className="mt-4">
                  Pendiri dan CEO Social Awakening, organisasi yang gencar mengampanyekan penggunaan media sosial secara sehat, Max Stossel
                </div>
              </div>
              <div className="bg-[#00213b] rounded-2xl p-6 text-white font-medium w-full sm:w-3/4 lg:w-1/2 mt-[20%] md:hidden block">
                <img src={baseUrl + '/assets/4.5.png'} alt="Person 1" style={{ shapeOutside: 'circle()' }} className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3" />
                <div className="text-base leading-relaxed">
                  "Saya bisa memperkenalkan Anda kepada seorang anak berusia 13 tahun yang sangat dewasa dan seorang anak berusia 17 tahun yang sangat belum dewasa."
                </div>
                <div className="mt-4">
                  Psikolog klinis Child Mind Institute, Jerry Bubrick, PhD.,
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="bg-white ">
          <div className="max-w-4xl mx-auto relative">
            <div className="flex flex-row items-start py-12 px-4 lg:px-0">
              <img src={baseUrl + '/assets/4.6.png'} alt="Symbol" className="size-[3rem] mr-4" />
              <div className="text-xl md:text-2xl lg:text-3xl font-medium">
                Pembatasan usia minimal kini sudah lazim dilakukan. Namun perlu diketahui, usia tidak selalu mutlak mencerminkan kedewasaan.
              </div>
            </div>
            <div className="bg-[#00213b] rounded-2xl p-6 absolute top-0 left-4 text-white font-medium w-1/2 mt-[20%] hidden md:block">
              <img src={baseUrl + '/assets/4.5.png'} alt="Person 1" style={{ shapeOutside: 'circle()' }} className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3" />
              <div className="text-base leading-relaxed">
                "Saya bisa memperkenalkan Anda kepada seorang anak berusia 13 tahun yang sangat dewasa dan seorang anak berusia 17 tahun yang sangat belum dewasa."
              </div>
              <div className="mt-4">
                Psikolog klinis Child Mind Institute, Jerry Bubrick, PhD.,
              </div>
            </div>
            <img src={baseUrl + '/assets/4.2.png'} alt="Child with Laptop" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 h-[10%] w-full bg-gradient-to-b from-[#d4d6de]" />

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
