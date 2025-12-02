import { Paragraph } from "@/components/post/paragraph";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function CustomImageC() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const titleInView = useInView(titleRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

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
  const flags: { flag: string; name: string, desc: string }[] = [
    { flag: '/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/3.1.png', name: 'Amerika Serikat', desc: 'Di bawah 13 tahun membutuhkan persetujuan orang tua' },
    { flag: '/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/3.2.png', name: 'Prancis', desc: 'Terlarang bagi usia di bawah 15 tahun (masih rencana)' },
    { flag: '/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/3.3.png', name: 'United Kingdom', desc: 'Terlarang bagi usia di bawah 16 tahun  (masih rencana)' },
    { flag: '/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/3.4.png', name: 'Jerman', desc: 'Usia 13-16 tahun membutuhkan persetujuan orang tua' },
    { flag: '/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/3.5.png', name: 'Australia', desc: 'Terlarang bagi usia di bawah 16 tahun' },
    { flag: '/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/3.6.png', name: 'Italia', desc: 'Usia di bawah 14 tahun membutuhkan persetujuan orang tua' },
    { flag: '/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/3.7.png', name: 'Norwegia', desc: 'Terlarang bagi usia di bawah 16 tahun (masih rencana)' },
    { flag: '/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/3.8.png', name: 'Yunani', desc: 'Usia di bawah 15 tahun harus disertai verifikasi dan kontrol orang tua (masih rencana)' },
  ]
  return (
    <motion.div
      className="relative flex font-sora flex-col items-center overflow-hidden bg-linear-to-b from-black to-80% to-[#070419] bg-no-repeat"

    >
      {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#070419]" /> */}
      <div className="absolute w-160 h-320 blur-[10rem] -bottom-160 bg-linear-to-b to-40% from-purple-600 to-pink-600 rounded-full" />
      <div className="absolute size-160 blur-[8rem] bottom-0 left-[30%] bg-red-600 rounded-full" />
      <div className="absolute size-160 blur-3xl -bottom-160 bg-linear-to-b from-red-600 to-yellow-600 rounded-full" />
      <div className="relative noise2 w-full pt-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            ref={titleRef}
            className="flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="text-[#ffc600] text-3xl md:text-4xl lg:text-6xl text-center font-bold px-4 lg:px-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Aturan Mirip PP Tunas di Negara Lain
            </motion.div>
            <motion.div
              className="text-white font-medium text-lg md:text-2xl lg:text-3xl text-center px-4 lg:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Di berbagai negara, penggunaan akun <br /> media sosial anak juga punya batasan usia
            </motion.div>
          </motion.div>
          <motion.div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-6 px-2 md:px-0"
          >
            {flags.map((flag, index) => (
              <motion.div
                className="flex group cursor-pointer"
                key={flag.name}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={cardsInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.img
                  src={flag.flag}
                  alt={flag.name}
                  className="size-32 md:size-auto transition-transform duration-300 group-hover:scale-110"
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={cardsInView ? { rotate: 0, opacity: 1 } : { rotate: -10, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                />
                <motion.div
                  className="flex flex-col text-white justify-center ml-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <motion.div
                    className="text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#ffc600]"
                    initial={{ y: 10, opacity: 0 }}
                    animate={cardsInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  >
                    {flag.name}
                  </motion.div>
                  <motion.div
                    className="text-base lg:text-xl transition-colors duration-300 group-hover:text-gray-200"
                    initial={{ y: 10, opacity: 0 }}
                    animate={cardsInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  >
                    {flag.desc}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="italic text-xl text-white float-right mr-4"
            initial={{ opacity: 0, x: 20 }}
            animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Sumber: tech.co
          </motion.div>
          <motion.div
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={'/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/3.9.png'}
              alt="Parent with children"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={imageInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="transition-transform duration-500 hover:scale-105"
            />
            <motion.div
              className="absolute bottom-0 z-50 mx-auto max-w-4xl"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={imageInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.img
                src={`/assets/pp-tunas-upaya-melindungi-anak-anak-indonesia-di-dunia-digital/footer.png`}
                className="z-50 mx-auto hidden w-full sm:block"
                initial={{ opacity: 0 }}
                animate={imageInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Paragraph className='text-white max-w-[65ch] font-sans transition-all duration-500 hover:text-gray-200'>
            <>
              <p>Tak hanya Australia, beberapa negara Eropa juga memiliki regulasi soal penggunan media sosial dan platform digital untuk anak-anak. Meski tiap negara memiliki pendekatan yang berbeda, tujuannya tetap sama, yaitu melindungi anak-anak dari risiko dunia digital dan memastikan media sosial digunakan secara bijak sesuai usia pengguna.</p>
            </>
          </Paragraph>
        </motion.div>
      </div>

    </motion.div>
  );
}
