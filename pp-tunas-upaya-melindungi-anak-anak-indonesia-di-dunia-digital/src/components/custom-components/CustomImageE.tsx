"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function CustomImageE() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const rolesRef = useRef(null);
  const cardsRef = useRef(null);
  const imageRef = useRef(null);
  const quoteRef = useRef(null);
  const questionRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const titleInView = useInView(titleRef, { once: true });
  const subtitleInView = useInView(subtitleRef, { once: true });
  const rolesInView = useInView(rolesRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });
  const quoteInView = useInView(quoteRef, { once: true });
  const questionInView = useInView(questionRef, { once: true });

  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Namun, sebatas jalur apakah sudah cukup memberi kepuasan bagi pesepeda di Indonesia?";

  useEffect(() => {
    if (questionInView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [questionInView]);

  return (
    <motion.div
      className="relative flex flex-col items-center overflow-hidden font-sora bg-no-repeat bg-[center_top_20%] bg-cover" style={{ backgroundImage: `url(${baseUrl + '/assets/5.1.jpg'})` }}
    >
      <div className="absolute top-0 h-[10rem] w-full bg-gradient-to-b from-[#efefe8]"></div>

      <motion.div
        ref={heroRef}
        className="mx-auto max-w-4xl py-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="space-y-4 px-4 lg:px-0">
          <motion.div
            ref={titleRef}
            className="font-bold text-2xl sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Pada dasarnya, internet bermanfaat untuk anak
          </motion.div>
          <motion.div
            ref={subtitleRef}
            className="font-bold text-4xl sm:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Namun, harus ada pendampingan orang tua
          </motion.div>
          <div className="h-[60rem] md:h-[70rem] lg:h-[80rem]" />
        </div>
        <div className="space-y-20 px-4 lg:px-0">
          <motion.div
            ref={rolesRef}
            className="text-center font-bold text-2xl lg:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Peran orang tua saat anak berinternet:
          </motion.div>
          <motion.div
            ref={cardsRef}
            className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-6 lg:gap-6"
            initial={{ opacity: 0 }}
            animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="bg-[#eae9e7] p-6 rounded-xl shadow-xl flex flex-col justify-start items-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.img
                src={baseUrl + '/assets/5.2.png'}
                alt=""
                className="max-h-[10rem] w-fit absolute top-[-4rem]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="text-base sm:text-xl lg:text-2xl font-medium sm:font-bold text-center text-neutral-700 pt-[5rem]">Pembatasan waktu, durasi dan konten</div>
            </motion.div>
            <motion.div
              className="bg-[#eae9e7] p-6 rounded-xl shadow-xl flex flex-col justify-start items-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.img
                src={baseUrl + '/assets/5.3.png'}
                alt=""
                className="max-h-[10rem] w-fit absolute top-[-4rem]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="text-sm sm:text-lg lg:text-xl font-medium sm:font-bold text-center text-neutral-700 pt-[5rem]">Mengikutsertakan anak dalam menyusun aturan dan batasan</div>
            </motion.div>
            <motion.div
              className="bg-[#eae9e7] p-6 rounded-xl shadow-xl flex flex-col justify-start items-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.img
                src={baseUrl + '/assets/5.4.png'}
                alt=""
                className="max-h-[10rem] w-fit absolute top-[-4rem]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div className="text-base sm:text-xl lg:text-2xl font-medium sm:font-bold text-center text-neutral-700 pt-[5rem]">Konsisten menerapkan aturan</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full">
        <motion.div
          ref={imageRef}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={baseUrl + '/assets/5.5.png'} alt="Family" className="" />
        </motion.div>
        <motion.div
          ref={quoteRef}
          className="bg-[#776a62] relative z-10 -mt-[5%] w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="max-w-4xl px-0 pt-10 pb-6 sm:pb-24 mx-auto text-white text-base sm:text-lg lg:text-2xl leading-relaxed">
            <motion.div
              className="px-4 lg:px-0"
              initial={{ opacity: 0, y: 15 }}
              animate={quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              "Memang tidak mudah menerapkan aturan-aturan tersebut, tetapi yang jelas apabila orang tua juga aware dengan dampak negatif dari penyalahgunaan internet pada anak, menyebabkan implementasinya akan jauh lebih mudah. Karena orang tua aware, anak lambat laun juga muncul kesadaran dalam dirinya. Tidak pure rasa takut, tetapi lebih ke arah kesadaran."
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </motion.div>
    </motion.div>
  );
}
