"use client";

import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function CustomImageC() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (statsInView) {
      let start = 0;
      const end = 156;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounter(end);
          clearInterval(timer);
        } else {
          setCounter(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [statsInView]);

  return (
    <motion.div
      className="relative flex font-sora flex-col items-center overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${baseUrl}/assets/3.1.png)` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        ref={heroRef}
        className="max-w-4xl mx-auto pt-0 lg:pt-[20rem] pb-[2rem] z-10"
      >
        <motion.div
          className="flex flex-col lg:max-w-[80%] px-4 lg:px-0 py-8 pb-0 lg:pb-20 lg:py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={
            heroInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-3xl sm:text-4xl xl:text-6xl font-bold leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={
              heroInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pandemi mendera dunia, boom bike tercipta!
          </motion.div>
          <motion.p
            className="text-lg lg:text-2xl pt-4 lg:pt-10 lg:max-w-[80%]"
            initial={{ opacity: 0, y: 20 }}
            animate={
              heroInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sepeda buatan Indonesia memikat hati penghobi gowes dalam maupun luar
            negeri.
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        ref={cardsRef}
        className="max-w-4xl mx-auto pb-[10rem] z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={
              cardsInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.img
              src={baseUrl + "/assets/3.2.jpg"}
              alt="Bike Garage"
              className="rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                cardsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.h6
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={
                cardsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Pandemi covid-19 yang terjadi pada 2020-2021 lalu rupanya justru
              menyadarkan gaya hidup sehat.
            </motion.h6>
            <motion.p
              className="font-neutral-800 text-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={
                cardsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 15 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Kegiatan bersepeda pun booming, tak terkecuali di Indonesia. Toko
              sepeda daring maupun laring ketiban untung imbas ke-fomo-an publik
              yang ingin menjajal aktivitas gowes di jalan-jalan lengang karena
              pembatasan sosial.
            </motion.p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={
              cardsInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.p
              className="font-neutral-800 text-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={
                cardsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 15 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Contohnya pada periode Maret hingga Juni 2020. Kompas Data menyebut
              Bukalapak mencatatkan peningkatan transaksi
            </motion.p>
            <motion.img
              src={baseUrl + "/assets/3.3.png"}
              alt="Stats"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                cardsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                cardsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                className="text-center text-8xl font-extrabold text-[#0058be]"
                initial={{ scale: 0.5 }}
                animate={
                  statsInView
                    ? { scale: 1 }
                    : { scale: 0.5 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {counter}%
              </motion.div>
              <motion.div
                className="text-center font-neutral-800 font-bold text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  statsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                penjualan sepeda
              </motion.div>
            </motion.div>
            <motion.p
              className="font-neutral-800 text-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={
                cardsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 15 }
              }
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Kawan GNFI ikut beli juga enggak tuh?
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-black z-0 to-[60%]" />
      <motion.div
        className="absolute bottom-0 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </motion.div>
    </motion.div>
  );
}
