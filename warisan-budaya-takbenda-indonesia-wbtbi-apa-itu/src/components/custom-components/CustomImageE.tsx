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
      className="relative flex flex-col items-center overflow-hidden font-sora bg-no-repeat bg-[center_top_20%] bg-cover" style={{ backgroundImage: `url(${baseUrl + '/assets/5.3.png'})` }}
    >
      <div className="absolute top-0 h-[10rem] w-full bg-gradient-to-b from-[#efefe8]"></div>
      {/* <div className="z-30 absolute inset-0 flex items-center justify-center">
        <img src={baseUrl + '/assets/5.1.png'} alt="Traditional Activity" className="object-cover " />
      </div> */}
      <div className="py-8 lg:py-20 bg-gradient-to-b from-white to-white/70 backdrop-blur-3xl w-full rounded-br-[8rem] z-20">
        <motion.div
          ref={heroRef}
          className="mx-auto max-w-4xl py-4 lg:py-12 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="space-y-4 px-4 lg:px-0 ">
            <motion.div
              ref={subtitleRef}
              className="font-bold text-3xl sm:text-4xl lg:text-5xl !leading-[1.2] text-[#450693]"
              initial={{ opacity: 0, y: 20 }}
              animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Pelestarian Warisan Budaya
              Takbenda Indonesia (WBTbI)
              Tanggung Jawab Siapa?
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg lg:text-2xl w-[80%]">
              Negara bertanggungjawab atas pelestarian WBTbI. Namun, masyarakat turut punya peran aktif
            </motion.p>
          </div>
        </motion.div>
      </div>
      <div className="w-full">
        <div className="w-full relative">
          <img src={baseUrl + '/assets/5.2.png'} alt="Batik" className="object-cover w-full absolute inset-0 z-10 -mt-[20%]" />
          <div className="max-w-4xl mx-auto flex flex-col-reverse lg:flex-row relative h-fit -mt-[6rem] lg:mt-0 lg:pt-[10rem] pb-[4rem] lg:pb-[15rem] z-20">
            <div className="px-4 lg:px-0">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg lg:text-2xl text-white lg:w-1/2 font-medium">Negara bertugas merumuskan kebijakan, memberikan fasilitas, serta memastikan perlindungan secara hukum dan administratif.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: .2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg lg:text-2xl mt-4 lg:mt-12 text-white lg:w-[40%] font-medium">Di sisi lain, warisan budaya itu lahir, tumbuh, dan hidup di tengah masyarakat.</motion.p>
            </div>
            <motion.img
              initial={{ opacity: 0, x: 30, scale: 1 }}
              whileInView={{ opacity: 1, x: 0, scale: .8 }}
              transition={{ duration: 0.8, delay: .3, ease: [0.25, 0.46, 0.45, 0.94] }}
              src={baseUrl + '/assets/5.6.png'} alt="Traditional" className="lg:absolute z-20 right-0 lg:right-[-15rem] top-[-5rem] lg:top-[-15rem] scale-[.8]" />
          </div>
        </div>
        <div className="">
          <motion.div
            ref={quoteRef}
            className="relative z-30 w-full bg-gradient-to-br from-[#fe3e7f] to-[#ff71d6] rounded-tl-[8rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="max-w-4xl px-0 pt-10 pb-6 sm:pb-24 mx-auto text-white text-base sm:text-lg lg:text-2xl leading-relaxed relative flex flex-col lg:flex-row lg:items-end">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: .3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="lg:-mt-[50%] w-auto lg:h-[28rem] relative">
                <img src={baseUrl + '/assets/5.4.png'} alt="I Made Dharma Suteja" className="object-cover" />
                <div className="absolute inset-x-0 w-fit bottom-0 px-6 py-1.5 ml-4 mr-4 lg:mr-0 lg:ml-6 h-fit bg-[#450693] rounded-tr-[2rem] rounded-bl-[2rem]">
                  <p className="text-[#ffc402] font-medium text-xl">I Made Dharma Suteja</p>
                  <p className="text-sm">Direktur Warisan Budaya, Kementerian Kebudayaan</p>
                </div>
              </motion.div>
              <motion.div
                className="px-4 lg:px-0 lg:w-[60%] ml-auto font-semibold text-xl lg:text-3xl pt-4 lg:pt-0"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                "Pada akhirnya, pelestarian WBTbI akan lebih kuat jika menjadi bagian dari gaya hidup sehari-hari, bukan hanya seremoni."
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 z-40 mx-auto max-w-4xl"
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
