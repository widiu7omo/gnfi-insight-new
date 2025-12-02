import { motion, useInView } from "motion/react";
import NumberFlow from "@number-flow/react";
import { useRef, useState, useEffect } from "react";

const ASSETS_PATH =
  "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan";

function AnimatedNumber({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      <NumberFlow
        value={displayValue}
        format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
        locales="id-ID"
      />
    </span>
  );
}

export default function Infographic4() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-[#000E4F]">
      {/* Circle ornament top right */}
      <motion.img
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        src={`${ASSETS_PATH}/4/circle-ornament-top-right.png`}
        alt=""
        className="absolute top-0 right-0 w-[35%] md:w-[28%] z-0"
      />

      <div className="relative w-full justify-center z-10">
        <div className="relative mx-auto max-w-4xl pt-12 md:pt-20 lg:pt-24">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 px-4 lg:px-0 "
          >
            <h2 className="font-sora text-white font-bold text-2xl md:text-[52px] md:leading-tight leading-snug">
              Indeks Optimisme 2025
            </h2>
            <h2 className="font-sora text-white font-bold text-2xl md:text-[52px] md:leading-tight leading-snug">
              Berdasarkan Usia
            </h2>
          </motion.div>

          {/* Row 1: 46-55 tahun & 56 tahun+ */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4 lg:mt-48 mt-24 md:mt-24 px-6 lg:px-0 ">
            {/* 46-55 tahun - 6,21 (old man) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="relative bg-[#ff4d0d] h-32 md:h-48 rounded-tl-full "
            >
              <img
                src={`${ASSETS_PATH}/4/old-men-people.png`}
                alt="46-55 tahun"
                className="w-1/2 lg:w-[60%] h-full object-cover object-bottom absolute left-0 bottom-0 overflow-y-visible"
              />
              <div className="px-2 md:px-4 py-1.5 md:py-3 w-full h-full flex items-center relative bottom-0">
                <div className="absolute right-6 top-6">
                  <p className="font-sora text-white text-lg md:text-3xl font-medium text-right">
                    46-55 tahun
                  </p>
                  <AnimatedNumber
                    value={6.21}
                    className="font-sora text-white font-extrabold text-5xl md:text-8xl text-right block"
                  />
                </div>
              </div>
            </motion.div>

            {/* 56 tahun+ - 5,94 (old woman) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-[#ff4d0d] h-32 md:h-48 rounded-tl-full "
            >
              <img
                src={`${ASSETS_PATH}/4/old-woman-people.png`}
                alt="56 tahun+"
                className="w-[60%] h-full object-cover object-bottom absolute left-0 bottom-0 overflow-y-visible"
              />
              <div className="px-2 md:px-4 py-1.5 md:py-3 w-full h-full flex items-center relative bottom-0">
                <div className="absolute right-6 top-6">
                  <p className="font-sora text-white text-lg md:text-3xl font-medium text-right">
                    56 tahun +
                  </p>
                  <AnimatedNumber
                    value={5.94}
                    className="font-sora text-white font-extrabold text-5xl md:text-8xl text-right block"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: 36-45, 26-36, 17-25 tahun */}
          <div className="flex flex-col lg:flex-row items-end gap-4 md:gap-3 mb-3 md:mb-4 lg:mt-12 mt-8 px-6 lg:px-0 ">
            {/* 36-45 tahun - 5,77 (woman) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full lg:flex-1"
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={`${ASSETS_PATH}/4/man.png`}
                  alt="36-45 tahun"
                  className="w-fit right-0 lg:right-auto lg:w-full absolute h-full bottom-0 object-cover z-10 lg:object-bottom"
                />
                <div className="absolute z-10 top-0 inset-0 bg-linear-to-t rounded-tl-full from-white to-80% bottom-0" />
                <div className="bg-white top-0 inset-0 relative h-112 md:h-96 lg:h-130 rounded-tl-full"></div>
                <div className="absolute z-20 bottom-4 left-0 right-0">
                  <p className="font-sora text-[#ff4d0d] text-center font-medium text-2xl md:text-3xl">
                    36-45 tahun
                  </p>
                  <AnimatedNumber
                    value={5.77}
                    className="font-sora text-[#ff4d0d] text-center font-extrabold text-7xl md:text-8xl block"
                  />
                </div>
              </div>
            </motion.div>

            {/* 26-36 tahun - 5,63 (man) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="relative w-full lg:flex-1"
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={`${ASSETS_PATH}/4/woman.png`}
                  alt="26-36 tahun"
                  className="w-fit right-0 lg:right-auto lg:w-full absolute h-full bottom-0 object-cover z-10 object-bottom"
                />
                <div className="absolute z-10 top-0 inset-0 bg-linear-to-t rounded-tl-full from-white to-80% bottom-0" />
                <div className="bg-white top-0 inset-0 relative h-[28rem] md:h-96 lg:h-130 rounded-tl-full"></div>
                <div className="absolute z-20 bottom-4 left-0 right-0">
                  <p className="font-sora text-[#ff4d0d] text-center font-medium text-2xl md:text-3xl">
                    26-36 tahun
                  </p>
                  <AnimatedNumber
                    value={5.63}
                    className="font-sora text-[#ff4d0d] text-center font-extrabold text-7xl md:text-8xl block"
                  />
                </div>
              </div>
            </motion.div>

            {/* 17-25 tahun - 5,45 (teenagers) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="relative w-full lg:flex-1"
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={`${ASSETS_PATH}/4/teenagers.png`}
                  alt="17-25 tahun"
                  className="w-fit right-0 lg:right-auto lg:w-full absolute h-full bottom-0 object-cover z-10 object-bottom"
                />
                <div className="absolute z-10 top-0 inset-0 bg-linear-to-t rounded-tl-full from-white to-80% bottom-0" />
                <div className="bg-white top-0 inset-0 relative h-[28rem] md:h-96 lg:h-130 rounded-tl-full"></div>
                <div className="absolute z-20 bottom-4 left-0 right-0">
                  <p className="font-sora text-[#ff4d0d] text-center font-medium text-2xl md:text-3xl">
                    17-25 tahun
                  </p>
                  <AnimatedNumber
                    value={5.45}
                    className="font-sora text-[#ff4d0d] text-center font-extrabold text-7xl md:text-8xl block"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Group of young people */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="lg:px-2 relative pt-12"
          >
            <img
              src={`${ASSETS_PATH}/4/group-of-peoples.png`}
              alt="Group of people"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
      <img src={`${ASSETS_PATH}/4/4.8.png`} alt="Background Bottom" className="absolute inset-x-0 w-full bottom-0 object-cover h-[70%]" />

      {/* Footer */}
      <div className="absolute bottom-0 flex items-center justify-center">
        <img
          src={`${ASSETS_PATH}/footer.png`}
          alt="GNFI Insight"
          className="z-50 hidden sm:block bottom-0 object-cover h-40 overflow-clip w-full max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
}
