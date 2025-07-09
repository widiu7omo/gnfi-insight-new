"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function CustomImageE() {
  const heroRef = useRef(null);
  const questionRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
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
      className="relative flex flex-col items-center overflow-hidden font-sora"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="relative w-full justify-center bg-cover bg-[center_40%] pt-6 md:pt-20 lg:py-32 lg:pb-4"
        style={{ backgroundImage: `url(${baseUrl}/assets/5.1.1.jpg)` }}
      >
        <div className="absolute inset-0 backdrop-grayscale bg-white/0" />
        <motion.div
          ref={heroRef}
          className="max-w-4xl mx-auto relative z-10 space-y-8"
        >
          <motion.div
            className="text-2xl px-4 lg:px-0 lg:text-4xl xl:text-6xl font-bold text-center leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Perhatian pemerintah memfasilitasi pesepeda Indonesia, sudah ke arah yang{" "}
            </motion.span>
            <motion.span
              className="text-[#ffbc25] text-stroke"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
            >
              benar?
            </motion.span>
          </motion.div>
          <motion.div
            className="text-base lg:text-2xl text-center lg:text-left px-4 lg:px-0 lg:max-w-[85%] mx-auto leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dalam beberapa tahun terakhir, pemerintah Indonesia tampak memberi perhatian kepada pesepeda. Serangkaian <b>infrastruktur</b> berupa jalur sepeda dibuat di beberapa kota agar pesepeda lebih nyaman berkendara.
          </motion.div>
          <img src={baseUrl + '/assets/5.2.png'} alt="Man with bike" className="opacity-0 max-h-[90rem]" />
          <motion.div
            ref={questionRef}
            className="absolute bottom-[25rem] flex items-center justify-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={questionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="max-w-[85%] mx-auto">
              <motion.p
                className="bg-yellow-400 inline text-black font-bold text-xl lg:text-4xl text-center leading-relaxed px-1 box-decoration-clone"
                initial={{ scale: 0.9 }}
                animate={questionInView ? { scale: 1 } : { scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {displayedText}
                <motion.span
                  className="inline-block w-1 h-8 bg-black ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute top-0 h-[10%] w-full bg-gradient-to-b from-[#e5e5e5]" />
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
