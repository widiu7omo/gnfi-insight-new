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
      className="relative flex flex-col noise2 items-center overflow-hidden font-sora bg-no-repeat bg-[center_top_0%] bg-cover" style={{ backgroundImage: `url(${baseUrl + '/assets/4.1.png'})` }}
    >
      <motion.div
        ref={heroRef}
        className="mx-auto max-w-4xl w-full py-12 relative mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="space-y-4 px-4 lg:px-0 w-full">
          <motion.div
            ref={titleRef}
            className="font-bold text-white text-4xl sm:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Kereta Cepat <br />
            Jakarta-Surabaya,
          </motion.div>
          <motion.div
            ref={subtitleRef}
            className="font-bold px-3 py-1 bg-white w-fit text-2xl sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Mimpi Indonesia sejak Lama
          </motion.div>
          <div className="h-[20rem]" />
          <div className="w-full">
            <div className="flex items-end bg-[#93010d] w-full rounded-t-[2.5rem]">
              <img src={baseUrl + '/assets/4.2.png'} alt="SBY" className="w-1/2 left-0 absolute" />
              <div className="w-1/2" />
              <div className="text-white text-2xl font-bold flex-1 pt-10 pb-20">Mulai direncanakan pada era Presiden SBY</div>
            </div>
            <div className="flex items-end bg-[#202020] px-8">
              <div className="text-white text-2xl flex-1 py-8 pb-20">
                <div className="font-bold">Mulai direncanakan pada era Presiden SBY</div>
                <div className="mt-2 font-base">tetapi Jepang mundur dari proyek</div>
              </div>
              <img src={baseUrl + '/assets/4.3.png'} alt="Jokowi" className="w-[30%] right-0 absolute" />
              <div className="w-[30%]" />
            </div>
            <div className="flex items-end bg-[#dfdfdf] px-8 rounded-b-[2.5rem] overflow-clip">
              <img src={baseUrl + '/assets/4.4.png'} alt="Prabowo" className="w-[50%] left-0 absolute rounded-bl-[2.5rem]" />
              <div className="w-[50%]" />
              <div className="text-[#202020] text-2xl flex-1 py-8 pb-20">
                <div className="font-bold">Diminta oleh Presiden Prabowo agar diwujudkan</div>
                <div className="mt-8 flex space-x-4">
                  <div className="font-sora text-[#d70011] text-8xl font-bold">&ldquo;</div>
                  <div>
                    <div className="text-3xl font-base">Presiden Prabowo Subianto telah memberikan instruksi yang tegas untuk memperluas jalur kereta cepat Jakarta, Bandung hingga Surabaya,</div>
                    <div className="pt-4 relative">
                      <div>
                        <div className="font-bold">
                          Agus Harimurti Yudhoyono (AHY)
                        </div>
                        <div className="font-normal text-base pt-2">Menteri Koordinator Bidang Infrastruktur
                          dan Pembangunan Kewilayahan
                        </div>
                      </div>
                      <img src={baseUrl + '/assets/4.5.png'} alt="AHY" className="absolute left-[-9rem] top-[-2rem] w-[40%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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
