"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CustomImageD() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const quotesRef = useRef(null);
  const bottomSectionRef = useRef(null);
  const imageRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const titleInView = useInView(titleRef, { once: true });
  const quotesInView = useInView(quotesRef, { once: true });
  const bottomSectionInView = useInView(bottomSectionRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <motion.div
      className="relative flex flex-col items-center overflow-hidden font-sora bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="relative w-full justify-center bg-cover bg-top pt-6 md:pt-20 "
        style={{ backgroundImage: `url(${baseUrl}/assets/5.1.png)` }}
      >
        <div className="absolute bottom-[-2px] w-full h-[30rem] bg-gradient-to-t from-[#01162d]"></div>
        <motion.div
          ref={heroRef}
          className="max-w-4xl mx-auto lg:pb-28 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="w-full px-4 lg:px-0"
          >
            <motion.div
              ref={titleRef}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold !leading-[1.2] text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Bikin Kereta Cepat <br />
              Jakarta-Surabaya,<br />
              Awas Malah Rugi!
            </motion.div>
            <div className="flex flex-col md:flex-row lg:space-x-4 space-y-4 lg:space-y-0 pt-12 -mb-12 lg:-mb-24">
              <div className="flex-1 order-2 lg:order-1">
                <img src={baseUrl + '/assets/5.2.png'} alt="People" className="w-full h-auto" />
              </div>
              <div className="flex-1 text-white order-1 lg:order-2">
                <div className="text-lg sm:text-xl lg:text-2xl">Pengamat transportasi sekaligus Wakil Ketua Pemberdayaan dan Pengembangan Wilayah Masyarakat Transportasi Indonesia (MTI) Pusat, Djoko Setijowarno,</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mt-4">mengingatkan 2 potensi kerugian akibat kereta cepat Jakarta-Surabaya.</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 z-10 bg-no-repeat bg-cover relative p-4 sm:p-8 md:p-20 rounded-[2rem] md:rounded-[4rem]" style={{ backgroundImage: `url(${baseUrl}/assets/5.3.png)` }}>
              <div className="flex-1 bg-[#5dd6f1] overflow-visible h-auto rounded-[1.5rem] lg:rounded-[2.5rem]">
                <div className="p-4 sm:p-6 lg:p-8 pb-4 bg-[#88e6fb] rounded-t-[1.5rem] lg:rounded-t-[2.5rem]">
                  <img src={baseUrl + '/assets/5.5.png'} alt="Plane" className="-mt-8 lg:-mt-16 h-[150px] sm:h-[200px] lg:h-[265px] object-cover overflow-visible mx-auto" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">1.</div>
                  <div className="text-base sm:text-lg lg:text-xl font-medium">
                    Investasi di sektor transportasi udara sia-sia karena pasarnya direbut kereta cepat
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 pt-4 text-base sm:text-lg lg:text-xl rounded-b-[1.5rem] lg:rounded-b-[2.5rem] h-auto">
                  "Kira-kira apa sudah BEP? Coba dipikirkan. Tapi kalau belum BEP perlu dipikirkan siapa yang menanggung kerugian"</div>
              </div>
              <div className="flex-1 bg-[#5dd6f1] rounded-[1.5rem] lg:rounded-[2.5rem]">
                <div className="p-4 sm:p-6 lg:p-8 pb-4 bg-[#88e6fb] rounded-t-[1.5rem] lg:rounded-t-[2.5rem]">
                  <img src={baseUrl + '/assets/5.4.png'} alt="Wallet" className="-mt-8 lg:-mt-16 h-[150px] sm:h-[200px] lg:h-[265px] w-[100px] sm:w-[150px] lg:w-[200px] mx-auto" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">2.</div>
                  <div className="text-base sm:text-lg lg:text-xl font-medium">
                    Penggunaan uang negara seperti di proyek kereta cepat Jakarta - Bandung terulang
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 pt-4 text-base sm:text-lg lg:text-xl rounded-b-[1.5rem] lg:rounded-b-[2.5rem]">
                  Jangan menggunakan APBN, jangan gunakan PMN. Ada perusahaan yang sampai kolaps
                  (Wijaya Karya). Sebentar lagi mau di-<i>merger</i> karena kereta cepat.</div>
              </div>
              <img src={baseUrl + '/assets/5.7.png'} alt="Train" className="absolute object-cover top-0 left-0 right-0 !m-0 hidden lg:block" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
