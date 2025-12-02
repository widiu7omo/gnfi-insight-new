import { motion, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";

export function CustomImageB() {
  const ref1969 = useRef<HTMLDivElement>(null);
  const ref2024 = useRef<HTMLDivElement>(null);
  const ref1969mobile = useRef<HTMLDivElement>(null);
  const ref2024mobile = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [distanceMobile, setDistanceMobile] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      ref1969.current &&
      ref2024.current &&
      ref1969mobile.current &&
      ref2024mobile.current
    ) {
      const pos1 = ref1969.current.getBoundingClientRect().top;
      const pos2 = ref2024.current.getBoundingClientRect().top;
      const pos3 = ref1969mobile.current.getBoundingClientRect().top;
      const pos4 = ref2024mobile.current.getBoundingClientRect().top;
      const d = Math.abs(pos2 - pos1);
      const dMobile = Math.abs(pos4 - pos3);
      setDistance(d);
      setDistanceMobile(dMobile);

      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative flex h-full w-full justify-center bg-cover bg-position-[center_top_-5rem] bg-no-repeat py-10 text-center xl:bg-position-[center_top_-20rem] xl:py-32"
        style={{ backgroundImage: `url(/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/2.1.png)` }}
      >
        <div className="z-10 w-full pb-10 lg:pb-6">
          <div className="relative inset-x-0 z-10 mx-auto mb-4 flex max-w-4xl flex-col items-center justify-center space-y-6 px-4 text-center font-sora text-neutral-950 md:space-y-0 lg:px-0">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="pb-2 text-left font-sora text-[1.75rem] font-bold leading-normal text-[#332B00] md:pb-10 md:text-[48px] lg:text-[64px]"
            >
              Sejarah Padel
            </motion.h3>

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 transform border-l-4 border-black md:translate-y-[3%] lg:mt-0 lg:translate-y-[5%]"
              initial={{ height: 0 }}
              animate={{
                height: isMobile ? (distanceMobile ?? 0) : (distance ?? 0),
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="z-20 w-full text-left md:w-1/2 md:pr-8">
                  <div
                    ref={ref1969mobile}
                    className="z-20 rounded-t-lg bg-black px-3 py-1 text-lg font-bold text-[#FFD800] md:text-2xl"
                  >
                    1969
                  </div>
                  <div className="z-20 rounded-b-lg bg-white px-4 py-2 shadow-md">
                    Pertama kali ditemukan di Acapulco oleh Viviana dan Enrique.
                    Setelahnya, Enrique membangun sebuah lapangan padel
                    berukuran 20 meter x 10 meter untuk Viviana.
                  </div>
                </div>
                <div className="relative mt-5 hidden md:block">
                  <div
                    ref={ref1969}
                    className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black"
                  />
                  <div className="absolute left-1/2 top-1/2 z-0 -ml-8 h-[4px] w-16 -translate-x-1/2 -translate-y-1/2 transform bg-black" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-0 flex w-full flex-col items-center md:-mt-2 md:flex-row md:items-start md:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative mt-5 hidden md:block">
                <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
                <div className="-translate-x-1/5 absolute left-1/2 top-1/2 z-0 h-[4px] w-16 -translate-y-1/2 transform bg-black" />
              </div>
              <div className="z-20 w-full text-left md:w-1/2 md:pl-8">
                <div className="relative z-20 flex justify-between rounded-t-lg bg-black px-3 py-1 text-lg font-bold text-[#FFD800] md:text-2xl">
                  <p>1974</p>
                  <motion.img
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/2.2.png`}
                    alt="Bendera"
                    className="absolute bottom-4 right-4 z-30 h-auto w-20 md:right-6 md:w-28"
                  />
                </div>
                <div className="z-20 rounded-b-lg bg-white px-4 py-2 shadow-md">
                  Lapangan padel dibangun di Spanyol
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-0 flex flex-col items-center md:mb-12 md:flex-row md:items-start">
                <div className="z-20 w-full text-left md:w-1/2 md:pr-8">
                  <div className="z-20 rounded-t-lg bg-black px-3 py-1 text-lg font-bold text-[#FFD800] md:text-2xl">
                    1991
                  </div>
                  <div className="z-20 rounded-b-lg bg-white px-4 py-2 shadow-md">
                    Pertama kali ditemukan di Acapulco oleh Viviana dan Enrique.
                    Setelahnya, Enrique membangun sebuah lapangan padel
                    berukuran 20 meter x 10 meter untuk Viviana.
                  </div>
                </div>
                <div className="relative mt-5 hidden md:block">
                  <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
                  <div className="absolute left-1/2 top-1/2 z-0 -ml-8 h-[4px] w-16 -translate-x-1/2 -translate-y-1/2 transform bg-black" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="-mt-2 flex w-full flex-col items-center md:flex-row md:items-start md:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative mt-5 hidden md:block">
                <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
                <div className="-translate-x-1/5 absolute left-1/2 top-1/2 z-0 h-[4px] w-16 -translate-y-1/2 transform bg-black" />
              </div>
              <div className="z-20 w-full text-left md:w-1/2 md:pl-8">
                <div className="z-20 rounded-t-lg bg-black px-3 py-1 text-lg font-bold text-[#FFD800] md:text-2xl">
                  1992
                </div>
                <div className="z-20 rounded-b-lg bg-white px-4 py-2 shadow-md">
                  Kejuaraan Dunia Padel pertama digelar di Spanyol
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <div className="mb-0 flex w-full flex-col items-center md:mb-12 md:flex-row md:items-start">
                <div className="z-20 w-full text-left md:w-1/2 md:pr-8">
                  <div className="z-20 rounded-t-lg bg-black px-3 py-1 text-lg font-bold text-[#FFD800] md:text-2xl">
                    2020-2021
                  </div>
                  <div className="z-20 rounded-b-lg bg-white px-4 py-2 shadow-md">
                    Padel mulai eksis di Asia Tenggara
                  </div>
                </div>
                <div className="relative mt-5 hidden md:block">
                  <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
                  <div className="absolute left-1/2 top-1/2 z-0 -ml-8 h-[4px] w-16 -translate-x-1/2 -translate-y-1/2 transform bg-black" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-0 flex w-full flex-col items-center md:-mt-2 md:flex-row md:items-start md:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative mt-5 hidden md:block">
                <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
                <div className="-translate-x-1/5 absolute left-1/2 top-1/2 z-0 h-[4px] w-16 -translate-y-1/2 transform bg-black" />
              </div>
              <div className="z-20 w-full text-left md:w-1/2 md:pl-8">
                <div className="z-20 rounded-t-lg bg-black px-3 py-1 text-lg font-bold text-[#FFD800] md:text-2xl">
                  2023
                </div>
                <div className="z-20 rounded-b-lg bg-white px-4 py-2 shadow-md">
                  PBPI diakui KONI Pusat sebagai induk asosiasi cabang olahraga
                  padel di Indonesia
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-0 flex w-full flex-col items-center md:mb-12 md:flex-row md:items-start"
            >
              <div className="z-20 w-full text-left md:w-1/2 md:pr-8">
                <div
                  ref={ref2024mobile}
                  className="z-20 rounded-t-lg bg-black px-3 py-1 text-lg font-bold text-[#FFD800] md:text-2xl"
                >
                  2024
                </div>
                <div className="z-20 rounded-b-lg bg-white px-4 py-2 shadow-md">
                  Padel jadi cabor eksibisi di PON PON XXI Aceh-Sumut 2024
                </div>
              </div>
              <div className="relative mt-5 hidden md:block">
                <div
                  ref={ref2024}
                  className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black"
                />
                <div className="absolute left-1/2 top-1/2 z-0 -ml-8 h-[4px] w-16 -translate-x-1/2 -translate-y-1/2 transform bg-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/footer.png`}
          className="z-50 mx-auto hidden w-full invert sm:block"
        />
      </div>
    </div>
  );
}
