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
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="w-full space-y-8 px-4 lg:px-0"
          >
            <motion.div
              ref={titleRef}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold pr-20 !leading-[1.2]"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Berapa Usia Ideal Anak untuk Mengakses <br />Media Sosial?
            </motion.div>
            <motion.div
              ref={quotesRef}
              className="py-16 space-y-16"
              initial={{ opacity: 0 }}
              animate={quotesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="bg-[#00213b] rounded-2xl p-6 text-white font-medium relative w-full sm:w-3/4 lg:w-1/2 relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 24px rgba(0, 33, 59, 0.15)",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <motion.img
                  src={baseUrl + '/assets/4.3.png'}
                  alt="Person 1"
                  style={{ shapeOutside: 'circle()' }}
                  className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={quotesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <motion.div
                  className="text-base leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  "Akses tanpa pengawasan, tanpa screen control atau pantauan orang tua, mungkin harus ditunda selama mungkin, tentunya sampai setidaknya (anak sudah berusia 9 tahun)."
                </motion.div>
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Psikolog klinis & Chief Science Officer American Psychological Association (APA), Dr. Mitch Prinstein,
                  via CNBC Make It
                </motion.div>
              </motion.div>
              <motion.div
                className="bg-[#00213b] rounded-2xl p-6 text-white font-medium relative w-full sm:w-3/4 lg:w-1/2 relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 24px rgba(0, 33, 59, 0.15)",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <motion.img
                  src={baseUrl + '/assets/4.4.png'}
                  alt="Person 1"
                  style={{ shapeOutside: 'circle()' }}
                  className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={quotesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <motion.div
                  className="text-base leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  "Penelitian menunjukkan bahwa anak perempuan 10-14 tahun terdampak paling besar oleh algoritma media sosial. Saya akan menunggu hingga berusia 15 atau 16, tetapi itu juga tampak kurang realistis bagi banyak kehidupan orang tua dan sang anak."
                </motion.div>
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Pendiri dan CEO Social Awakening, organisasi yang gencar mengampanyekan penggunaan media sosial secara sehat, Max Stossel
                </motion.div>
              </motion.div>
              <motion.div
                className="bg-[#00213b] rounded-2xl p-6 text-white font-medium w-full sm:w-3/4 lg:w-1/2 mt-[20%] md:hidden block group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 24px rgba(0, 33, 59, 0.15)",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <motion.img
                  src={baseUrl + '/assets/4.5.png'}
                  alt="Person 1"
                  style={{ shapeOutside: 'circle()' }}
                  className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={quotesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <motion.div
                  className="text-base leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  "Saya bisa memperkenalkan Anda kepada seorang anak berusia 13 tahun yang sangat dewasa dan seorang anak berusia 17 tahun yang sangat belum dewasa."
                </motion.div>
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Psikolog klinis Child Mind Institute, Jerry Bubrick, PhD.,
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          ref={bottomSectionRef}
          className="bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={bottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              className="flex flex-row items-start py-12 px-4 lg:px-0"
              initial={{ opacity: 0, y: 15 }}
              animate={bottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.img
                src={baseUrl + '/assets/4.6.png'}
                alt="Symbol"
                className="size-[3rem] mr-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={bottomSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="text-xl md:text-2xl lg:text-3xl font-medium"
                initial={{ opacity: 0, y: 15 }}
                animate={bottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Pembatasan usia minimal kini sudah lazim dilakukan. Namun perlu diketahui, usia tidak selalu mutlak mencerminkan kedewasaan.
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-[#00213b] rounded-2xl p-6 absolute z-10 top-0 left-4 text-white font-medium w-1/2 mt-[20%] hidden md:block group cursor-pointer"
              initial={{ opacity: 0, x: -30 }}
              animate={bottomSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(0, 33, 59, 0.15)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.img
                src={baseUrl + '/assets/4.5.png'}
                alt="Person 1"
                style={{ shapeOutside: 'circle()' }}
                className="rounded-full float-left -mt-[10%] -ml-[15%] size-[8rem] p-3 transition-transform duration-300 group-hover:scale-110"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={bottomSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="text-base leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={bottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                "Saya bisa memperkenalkan Anda kepada seorang anak berusia 13 tahun yang sangat dewasa dan seorang anak berusia 17 tahun yang sangat belum dewasa."
              </motion.div>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={bottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Psikolog klinis Child Mind Institute, Jerry Bubrick, PhD.,
              </motion.div>
            </motion.div>
            <motion.img
              ref={imageRef}
              src={baseUrl + '/assets/4.2.png'}
              alt="Child with Laptop"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
      <div className="absolute top-0 h-[10%] w-full bg-gradient-to-b from-[#d4d6de]" />

      <motion.div
        className="absolute bottom-0 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 15 }}
        animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
          initial={{ opacity: 0 }}
          animate={imageInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </motion.div>
    </motion.div>
  );
}
