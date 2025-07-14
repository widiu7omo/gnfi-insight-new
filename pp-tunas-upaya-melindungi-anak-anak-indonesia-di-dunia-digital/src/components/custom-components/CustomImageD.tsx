"use client";
import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CustomImageD() {
  const heroRef = useRef(null);
  const competitionRef = useRef(null);
  const businessRef = useRef(null);
  const cardsRef = useRef(null);
  const paragraphRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const competitionInView = useInView(competitionRef, { once: true });
  const businessInView = useInView(businessRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });
  const paragraphInView = useInView(paragraphRef, { once: true });

  return (
    <motion.div
      className="relative flex flex-col items-center overflow-hidden font-sora"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="relative w-full justify-center bg-cover bg-top pt-6 md:pt-20 lg:py-32 lg:pb-4"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.1.png)` }}
      >
        <div className="absolute bottom-[-2px] w-full h-full block lg:hidden bg-gradient-to-t from-white"></div>
        <motion.div
          ref={heroRef}
          className="max-w-4xl mx-auto pb-28 relative z-10"
        >
          <motion.div
            className="w-full space-y-8 px-4 lg:px-0"
          >
            <motion.div
              className="text-2xl sm:text-4xl xl:text-6xl font-extrabold pr-20 !leading-[1.2]"
            >
              Berapa Usia Ideal Anak untuk Mengakses <br />Media Sosial?
            </motion.div>
            <div className="py-16 space-y-16">
              <div className="bg-[#00213b] rounded-2xl p-6 text-white font-medium relative w-1/2 relative">
                <img src={baseUrl + '/assets/4.3.png'} alt="Person 1" style={{ shapeOutside: 'circle()' }} className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3" />
                <div className="text-base leading-relaxed">
                  "Akses tanpa pengawasan, tanpa screen control atau pantauan orang tua, mungkin harus ditunda selama mungkin, tentunya sampai setidaknya (anak sudah berusia 9 tahun)."
                </div>
                <div className="mt-4">
                  Psikolog klinis & Chief Science Officer American Psychological Association (APA), Dr. Mitch Prinstein,
                  via CNBC Make It
                </div>
              </div>
              <div className="bg-[#00213b] rounded-2xl p-6 text-white font-medium relative w-1/2 relative">
                <img src={baseUrl + '/assets/4.4.png'} alt="Person 1" style={{ shapeOutside: 'circle()' }} className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3" />
                <div className="text-base leading-relaxed">
                  "Penelitian menunjukkan bahwa anak perempuan 10-14 tahun terdampak paling besar oleh algoritma media sosial. Saya akan menunggu hingga berusia 15 atau 16, tetapi itu juga tampak kurang realistis bagi banyak kehidupan orang tua dan sang anak."
                </div>
                <div className="mt-4">
                  Pendiri dan CEO Social Awakening, organisasi yang gencar mengampanyekan penggunaan media sosial secara sehat, Max Stossel
                </div>
              </div>
              <div className="bg-[#00213b] rounded-2xl p-6 text-white font-medium relative w-1/2 relative">
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
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#bda686] h-[60%] hidden lg:block 2xl:hidden"></div>
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
