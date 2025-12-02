import { motion, useInView } from "motion/react";
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
    <div
      className="relative flex flex-col items-center overflow-hidden font-sora bg-black"
    >
      <div
        className="relative w-full justify-center bg-cover bg-top pt-6 md:pt-20 "
        style={{ backgroundImage: `url(/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/5.1.png)` }}
      >
        <div className="absolute -bottom-0.5 w-full h-120 bg-linear-to-t from-[#01162d]"></div>
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
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.2]! text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Bikin Kereta Cepat <br />
              Jakarta-Surabaya,<br />
              Awas Malah Rugi!
            </motion.div>
            <motion.div
              ref={quotesRef}
              className="flex flex-col md:flex-row lg:space-x-4 space-y-4 lg:space-y-0 pt-12 -mb-12 lg:-mb-24"
              initial={{ opacity: 0, y: 30 }}
              animate={quotesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="flex-1 order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={quotesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                <img src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/5.2.png'} alt="People" className="w-full h-auto" />
              </motion.div>
              <motion.div
                className="flex-1 text-white order-1 lg:order-2"
                initial={{ opacity: 0, x: -20 }}
                animate={quotesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl">Pengamat transportasi sekaligus Wakil Ketua Pemberdayaan dan Pengembangan Wilayah Masyarakat Transportasi Indonesia (MTI) Pusat, Djoko Setijowarno,</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mt-4">mengingatkan 2 potensi kerugian akibat kereta cepat Jakarta-Surabaya.</div>
              </motion.div>
            </motion.div>
            <motion.div
              ref={bottomSectionRef}
              className="flex flex-col md:flex-row space-y-6 md:space-y-0 z-10 bg-no-repeat bg-cover relative p-4 sm:p-8 md:p-20 rounded-4xl md:rounded-[4rem]"
              style={{ backgroundImage: `url(/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/5.3.png)` }}
              initial={{ opacity: 0, y: 50 }}
              animate={bottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: .7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="flex-1 bg-[#5dd6f1] md:mr-6 overflow-visible h-auto rounded-3xl lg:rounded-[2.5rem]"
                initial={{ opacity: 0, x: -30, rotateY: -15 }}
                animate={bottomSectionInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -30, rotateY: -15 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <motion.div
                  className="p-4 sm:p-6 lg:p-8 pb-4 text-black bg-[#88e6fb] rounded-t-3xl lg:rounded-t-[2.5rem]"
                  initial={{ backgroundColor: "#5dd6f1" }}
                  animate={bottomSectionInView ? { backgroundColor: "#88e6fb" } : { backgroundColor: "#5dd6f1" }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.img
                    src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/5.5.png'}
                    alt="Plane"
                    className="-mt-8 lg:-mt-16 h-[150px] sm:h-[200px] lg:h-[265px] object-cover overflow-visible mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={bottomSectionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
                  />
                  <motion.div
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={bottomSectionInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >1.</motion.div>
                  <motion.div
                    className="text-base sm:text-lg lg:text-xl font-medium"
                    initial={{ opacity: 0 }}
                    animate={bottomSectionInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    Investasi di sektor transportasi udara sia-sia karena pasarnya direbut kereta cepat
                  </motion.div>
                </motion.div>
                <motion.div
                  className="p-4 sm:p-6 lg:p-8 pt-4 text-black font-medium text-base sm:text-lg lg:text-xl rounded-b-3xl lg:rounded-b-[2.5rem] h-auto"
                  initial={{ opacity: 0 }}
                  animate={bottomSectionInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  "Kira-kira apa sudah BEP? Coba dipikirkan. Tapi kalau belum BEP perlu dipikirkan siapa yang menanggung kerugian"
                </motion.div>
              </motion.div>
              <motion.div
                className="flex-1 bg-[#5dd6f1] rounded-3xl lg:rounded-[2.5rem]"
                initial={{ opacity: 0, x: 30, rotateY: 15 }}
                animate={bottomSectionInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 30, rotateY: 15 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <motion.div
                  className="p-4 sm:p-6 lg:p-8 pb-4 text-black bg-[#88e6fb] rounded-t-3xl lg:rounded-t-[2.5rem]"
                  initial={{ backgroundColor: "#5dd6f1" }}
                  animate={bottomSectionInView ? { backgroundColor: "#88e6fb" } : { backgroundColor: "#5dd6f1" }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <motion.img
                    src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/5.4.png'}
                    alt="Wallet"
                    className="-mt-8 lg:-mt-16 h-[150px] sm:h-[200px] lg:h-[265px] w-[100px] sm:w-[150px] lg:w-[200px] mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={bottomSectionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
                  />
                  <motion.div
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={bottomSectionInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >2.</motion.div>
                  <motion.div
                    className="text-base sm:text-lg lg:text-xl font-medium"
                    initial={{ opacity: 0 }}
                    animate={bottomSectionInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    Penggunaan uang negara seperti di proyek kereta cepat Jakarta - Bandung terulang
                  </motion.div>
                </motion.div>
                <motion.div
                  className="p-4 sm:p-6 lg:p-8 pt-4 text-black text-base sm:text-lg lg:text-xl rounded-b-3xl lg:rounded-b-[2.5rem]"
                  initial={{ opacity: 0 }}
                  animate={bottomSectionInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Jangan menggunakan APBN, jangan gunakan PMN. Ada perusahaan yang sampai kolaps
                  (Wijaya Karya). Sebentar lagi mau di-<i>merger</i> karena kereta cepat.
                </motion.div>
              </motion.div>
              <motion.img
                ref={imageRef}
                src={'/assets/kereta-cepat-jakarta-surabaya-misi-ambisius-di-antara-2-sisi-pulau-jawa/5.7.png'}
                alt="Train"
                className="absolute object-cover top-0 left-0 right-0 m-0! hidden lg:block"
                initial={{ opacity: 0, x: 100, y: 100, scale: 0.7 }}
                animate={imageInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: 100, y: 100, scale: 0.7 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 50,
                  damping: 15
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
