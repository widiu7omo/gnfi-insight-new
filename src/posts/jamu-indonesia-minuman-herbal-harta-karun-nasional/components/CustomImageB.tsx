import { motion, useMotionValue, useTransform, useInView, animate, Variants } from "motion/react";
import { useState, useRef, useEffect } from "react";

const textVariant: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 60,
      damping: 10,
      delay: i * 0.2,
    },
  }),
};

type CounterProps = {
  target: number;
  duration?: number;
  className?: string;
};

function Counter({ target, duration = 1.2, className }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // animasi counter dari 0 -> target
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(v);
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, target, duration]);
  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}

export function CustomImageB() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-[#ECECEC] pb-12 pt-16 md:pb-32 md:pt-24 xl:pb-24"
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4">
          <motion.h2
            className="font-sora text-[#1276DE] font-bold text-[32px] md:text-[46px] mb-5 md:mb-10 md:leading-14 pr-0 lg:pr-[30%]"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.1
            }}
            viewport={{ once: true }}
          >
            Gen X Masih Suka Jamu, bagaimana dengan Milenial dan Gen Z?
          </motion.h2>
          <motion.p
            className="mt-10 md:mt-32 font-sora font-semibold text-[#3B4F64] text-xl md:text-3xl lg:pr-[50%]"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Penggunaan Obat Herbal dan Jamu Menurut Generasi
          </motion.p>
          <motion.p
            className="mb-28 md:mb-64 font-sora font-semibold text-[#666666] text-lg md:text-2xl"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Tahun 2025
          </motion.p>
          <motion.img
            src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/2.3.png`}
            alt="Jamu"
            className="absolute right-0 bottom-8 md:bottom-14 w-1/4 z-40"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          />
          <div className="relative w-full">
            <motion.img
              src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/2.1.png`}
              alt="Infografik"
              className="mx-auto w-full pr-[16%] pl-[8%]"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
            />

            <div className="absolute z-10 left-[15%] bottom-[58%] md:bottom-[55%] flex flex-col items-center">
              <div className="absolute z-10 left-[15%] bottom-[58%] md:bottom-[55%] flex flex-col items-center">
                <div className="w-16 md:w-32 h-0.5 bg-[#1276DE] rotate-45 relative -bottom-1"></div>
                <div className="absolute -left-[60%] -top-[18px] md:-top-10">
                  <div className="w-12 md:w-24 h-0.5g-[#1276DE]"></div>
                  <Counter
                    target={35}
                    className="absolute font-sora -top-10 md:-top-20 left-1/2 -translate-x-1/2 text-[#1276DE] font-bold text-3xl md:text-7xl"
                  />
                </div>
              </div>
            </div>

            <div className="absolute z-30 left-[34%] md:left-[38%] top-[20%] flex flex-col items-center">
              <div className="w-16 md:w-32 h-0.5 bg-[#1276DE] rotate-45 relative bottom-2 lg:-bottom-1"></div>
              <div className="absolute -left-[58%] md:-left-[60%] -top-[30px] md:-top-[54px] lg:-top-10">
                <div className="w-12 md:w-24 h-0.5 bg-[#1276DE]"></div>
                <Counter
                  target={56}
                  className="absolute font-sora -top-10 md:-top-20 left-1/2 -translate-x-1/2 text-[#1276DE] font-bold text-3xl md:text-7xl"
                />
              </div>
            </div>

            <div className="absolute z-10 right-[28%] -top-6 md:-top-10 items-center">
              <div className="w-16 md:w-32 h-0.5 bg-[#1276DE] rotate-45 relative -bottom-1"></div>
              <div className="absolute -left-[60%] -top-[18px] md:-top-10">
                <div className="w-12 md:w-24 h-0.5 bg-[#1276DE]"></div>
                <Counter
                  target={68}
                  className="absolute font-sora -top-10 md:-top-20 left-1/2 -translate-x-1/2 text-[#1276DE] font-bold text-3xl md:text-7xl"
                />
              </div>
            </div>
          </div>
          <motion.img
            src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/2.2.png`}
            alt="Jamu"
            className="absolute -bottom-8 left-0 w-1/4 z-40"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          />
        </div>
        <motion.p
          className="text-[#666666] text-base md:text-xl mt-[8%] md:mt-16 max-w-4xl mx-auto lg:px-0 md:px-8 px-4 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Sumber: <br />
          Survei Local Product Shopping Behavior in Indonesia
        </motion.p>
      </div>

      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block invert"
        />
      </div>
    </div>
  );
}
