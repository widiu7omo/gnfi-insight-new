import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ChartWBTBI from "./ChartWBTBI";

export function CustomImageB() {
  const heroRef = useRef(null);
  const questionRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const questionInView = useInView(questionRef, { once: true, amount: 0.2 });

  // Animation variants for reusable animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 }
  };


  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="relative flex flex-col font-sora items-center overflow-hidden bg-cover"
    >
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#dfcdb9]" />
      <div className="relative w-full lg:pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={heroRef}
            className="w-full flex flex-col items-start justify-end relative"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="text-3xl lg:max-w-2xl sm:text-5xl pt-8 lg:pt-20 pb-4 lg:pb-0 lg:text-[52px] font-bold text-[#151515] !leading-tight px-4 lg:px-0"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Sejarah Baru
              Penetapan Warisan
              Budaya Takbenda
              Indonesia
            </motion.div>
            <div
              className="flex flex-col lg:pb-20"
            >
              <div className="flex">
                <motion.div
                  className="text-lg px-4 lg:px-0 sm:text-xl lg:text-2xl text-[#151515] font-medium lg:mt-10 flex-grow"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Sidang penetapan Warisan Budaya Takbenda Indonesia Tahun 2025
                  di Jakarta, Jumat (10/10/2025) Menorehkan sejarah baru.
                </motion.div>
                <div className="relative z-10 lg:mr-6 w-full lg:flex items-end justify-center hidden">
                  <motion.img
                    variants={fadeInRight}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    src={'/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/2.1.png'} alt="People Dancing" className="w-full" />
                  <div className="absolute">
                    <motion.p
                      variants={fadeInUp}
                      transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="text-5xl lg:pt-20 font-bold font-sora text-center text-white">514 <br />
                      Objek</motion.p>
                    <motion.p
                      variants={fadeInUp}
                      transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="block text-xl text-left text-white p-8">
                      Pemajuan Kebudayaan yang direkomendasikan untuk ditetapkan.
                      Terbanyak sejak 2013!
                    </motion.p>
                  </div>
                </div>
              </div>
              <motion.img
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                src={'/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/2.2.png'} alt="Sidang" className="lg:absolute" />
            </div>
          </motion.div>
        </div>
        <div className="bg-[#24130e] lg:rounded-t-[8rem] relative z-20">
          <div className="max-w-4xl mx-auto relative">
            <motion.img
              variants={fadeInLeft}
              transition={{ duration: 0.6, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
              src={'/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/2.3.png'} alt="Tofu" className="w-1/2 absolute block left-[-2rem] -top-8 lg:top-[-6rem] z-20" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="lg:pt-20">
              <ChartWBTBI />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 w-full flex justify-center bg-[#24130e]">
        <motion.div
          ref={questionRef}
          className="z-50 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={questionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.img
            src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/footer.png`}
            className="z-40 mx-auto hidden w-full sm:block"
            initial={{ filter: "blur(4px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
