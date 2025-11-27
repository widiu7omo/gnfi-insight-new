import { motion, useInView } from "motion/react";
import { useRef } from "react";

/**
 * CustomImageA component - Responsive hero section for Jakarta-Surabaya high-speed train article
 * Features responsive design with mobile-first approach and optimized layouts for different screen sizes
 */
export function CustomImageA() {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const infoBoxRef = useRef(null);
  const roadmapRef = useRef(null);

  // InView states for animations
  const heroInView = useInView(heroRef, { once: true });
  const titleInView = useInView(titleRef, { once: true });
  const infoBoxInView = useInView(infoBoxRef, { once: true });
  const roadmapInView = useInView(roadmapRef, { once: true });

  return (<motion.div
    className="relative overflow-clip font-sora bg-[#ffffff] py-6 sm:py-10 md:py-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="max-w-4xl mx-auto w-full relative px-4 sm:px-6 md:px-8 lg:px-0">
      <motion.div
        ref={titleRef}
        className="max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] w-full space-y-3 sm:space-y-4 md:space-y-5 py-6 sm:py-10 md:py-20 relative z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug text-[#ad1618]"
          initial={{ opacity: 0, y: -15 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Menanti Kereta Cepat Merah Putih
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-black font-medium leading-relaxed! md:leading-loose!"
          initial={{ opacity: 0, y: 15 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Kereta Cepat Merah Putih (KCMP) digadang-gadang sebagai teknologi karya anak bangsa yang bakal digunakan dalam proyek kereta cepat Jakarta-Surabaya
        </motion.p>
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 z-20 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/1.2.png'}
          alt="Jakarta"
          className="-ml-[40%] w-auto max-w-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        />
        <motion.img
          src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/1.1.png'}
          alt="Surabaya"
          className="-mt-[40%] w-auto max-w-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        />
      </motion.div>
      <motion.div
        ref={heroRef}
        className="relative"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.img
          src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/1.0.png'}
          alt="Trains"
          className="w-full h-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        />
        <div className="pt-40 xs:pt-32 sm:pt-28 md:pt-0"></div>
        <motion.div
          ref={infoBoxRef}
          className="max-w-2xl mx-auto absolute bottom-[2%] sm:bottom-[3%] md:bottom-[5%] w-full left-0 right-0 px-3 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={infoBoxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl md:rounded-4xl shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 z-10 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={infoBoxInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <motion.div
              className="text-[#ad1618] font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-4 sm:mb-16 md:mb-24"
              initial={{ opacity: 0, y: -10 }}
              animate={infoBoxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
              Riset KCMP membutuhkan:
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center text-white space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={infoBoxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              <motion.div
                className="rounded-lg sm:rounded-xl md:rounded-2xl bg-[#ad1618] p-2 sm:p-3 md:p-4 flex flex-row sm:flex-col items-center justify-between sm:justify-end h-auto sm:h-[70px] md:h-[90px] w-full sm:flex-1 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={infoBoxInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              >
                <motion.img
                  src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/1.7.png'}
                  alt="Clock"
                  className="w-12 h-12 sm:w-20 sm:h-20 md:w-auto md:h-auto sm:mr-auto sm:mb-2 md:mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={infoBoxInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                />
                <motion.div
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={infoBoxInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                >
                  3 Tahun
                </motion.div>
              </motion.div>
              <motion.div
                className="rounded-lg sm:rounded-xl md:rounded-2xl bg-[#ad1618] p-2 sm:p-3 md:p-4 flex flex-row sm:flex-col items-center justify-between sm:justify-end h-auto sm:h-[70px] md:h-[90px] w-full sm:flex-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={infoBoxInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              >
                <motion.img
                  src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/1.6.png'}
                  alt="Teams"
                  className="w-12 h-12 sm:w-20 sm:h-20 md:w-auto md:h-auto sm:mr-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={infoBoxInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                />
                <motion.div
                  className="text-right sm:text-center"
                  initial={{ opacity: 0 }}
                  animate={infoBoxInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">19 tim</div>
                  <p className="text-xs sm:text-xs md:text-sm">perguruan tinggi</p>
                </motion.div>
              </motion.div>
              <motion.div
                className="rounded-lg sm:rounded-xl md:rounded-2xl bg-[#ad1618] p-2 sm:p-3 md:p-4 flex flex-row sm:flex-col items-center justify-between sm:justify-end h-auto sm:h-[70px] md:h-[90px] w-full sm:flex-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={infoBoxInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              >
                <motion.img
                  src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/1.5.png'}
                  alt="Budget"
                  className="w-12 h-12 sm:w-20 sm:h-20 md:w-auto md:h-auto sm:mr-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={infoBoxInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                />
                <motion.div
                  className="text-right sm:text-center"
                  initial={{ opacity: 0 }}
                  animate={infoBoxInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                >
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">Rp 19 miliar</div>
                  <p className="text-xs sm:text-xs md:text-sm">dari LPDP</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={roadmapRef}
        className="relative -mt-[10%] sm:-mt-[15%] md:-mt-[20%] lg:-mt-[25%]"
        initial={{ opacity: 0 }}
        animate={roadmapInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.img
          src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/1.3.png'}
          alt="Background"
          className="rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl w-full h-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={roadmapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        />
        <motion.img
          src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/1.4.png'}
          alt="Roadmap"
          className="absolute top-[20%] sm:top-[25%] md:top-[30%] left-0 right-0 w-full h-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={roadmapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute left-3 sm:left-4 md:left-6 lg:left-8 top-[15%] sm:top-[19%] md:top-[25%] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={roadmapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Roadmap <br /> KCMP:
        </motion.div>
        <motion.div
          className="absolute left-2 sm:left-3 md:left-6 lg:left-12 top-[45%] sm:top-[50%] md:top-[57%] bg-white rounded-md sm:rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-tr-none py-1 sm:py-1 md:py-2 px-1 sm:px-2 md:px-3 lg:px-4 max-w-[45%] sm:max-w-[40%] md:max-w-none"
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={roadmapInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -30, y: 10 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <div className="text-[10px] text-black font-medium sm:text-xs md:text-sm leading-tight">Perancangan dan <br />desain awal</div>
        </motion.div>
        <motion.div
          className="absolute left-[48%] sm:left-[45%] md:left-[50%] top-[35%] sm:top-[40%] md:top-[45%] bg-white p-1 sm:p-2 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-bl-none py-1 sm:py-1 md:py-2 px-1 sm:px-2 md:px-3 lg:px-4 max-w-[45%] sm:max-w-[40%] md:max-w-none"
          initial={{ opacity: 0, y: -20 }}
          animate={roadmapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="text-[10px] text-black font-medium sm:text-xs md:text-sm leading-tight">Validasi teknis dan <br /> audit standar</div>
        </motion.div>
        <motion.div
          className="absolute left-2 sm:left-3 md:left-6 lg:left-12 top-[75%] sm:top-[80%] md:top-[90%] bg-white p-1 sm:p-2 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-tr-none py-1 sm:py-1 md:py-2 px-1 sm:px-2 md:px-3 lg:px-4 max-w-[45%] sm:max-w-[40%] md:max-w-none"
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={roadmapInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -30, y: 10 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <div className="text-[10px] text-black font-medium sm:text-xs md:text-sm text-right leading-tight">Produksi komponen <br /> dan prototipe uji</div>
        </motion.div>
        <motion.div
          className="absolute right-[10%] sm:right-[15%] md:right-[20%] lg:right-[25%] top-[67%] sm:top-[72%] md:top-[82%] bg-white p-1 sm:p-2 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-tl-none py-1 sm:py-1 md:py-2 px-1 sm:px-2 md:px-3 lg:px-4 max-w-[45%] sm:max-w-[40%] md:max-w-none"
          initial={{ opacity: 0, x: 30, y: 10 }}
          animate={roadmapInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 30, y: 10 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <div className="text-[10px] text-black font-medium sm:text-xs md:text-sm leading-tight">Uji fungsi <br />dan integrasi <br />sistem</div>
        </motion.div>
      </motion.div>
    </div>
    <motion.div
      className="absolute bottom-0 pt-3 sm:pt-5 md:pt-8 lg:pt-10 z-50 left-0 right-0 mx-auto max-w-4xl px-3 sm:px-4 md:px-6 lg:px-0"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
    >
      <img
        src={`/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/footer.png`}
        className="z-50 mx-auto hidden w-full invert sm:block "
        alt="Footer decoration"
      ></img>
    </motion.div>
  </motion.div>
  );
}
