import NumberFlow from "@number-flow/react";
import { motion, MotionProps, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const fadeInUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true },
});
const MotionNumberFlow = motion(NumberFlow)

export function CustomImageC() {
  const ref = useRef(null)

  const [number, setNumber] = useState(0)
  const inView = useInView(ref)
  useEffect(() => {
    if (inView) {
      setNumber(164)
    } else {
      setNumber(0)
    }
  }, [inView])
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pb-12 pt-16 md:pb-20 md:pt-20"
        style={{ backgroundImage: `url(/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/3.1.png)` }}
      >
        <div className="absolute left-0 top-0 h-[30%] w-full bg-linear-to-b from-[#FAFAFA]" />
        <div className="z-1 relative mx-auto mb-12 max-w-4xl items-center px-4 md:mb-20 lg:px-0">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 text-center font-sora text-[1.75rem] font-bold text-[#141C21] md:mb-8 md:text-[48px] md:leading-none lg:text-[70px]"
          >
            Daya Saing Harga dan <br />
            Ekspansi Pasar Global
          </motion.h3>
        </div>
        <div className="relative mx-auto flex w-full items-center px-4 md:max-w-4xl lg:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#C8C4C2] text-center md:h-[300px] md:w-[300px]"
          >
            <p className="text-2xl font-extrabold text-[#141C21] md:text-[5rem] md:text-[64px] lg:text-[96px]">
              1/2
            </p>
            <p className="text-xl font-extrabold text-[#141C21] md:mt-10 md:text-[2.5rem] md:text-[40px] lg:mt-14 lg:text-[60px]">
              HARGA
            </p>
          </motion.div>
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/3.6.png`}
            alt="Mobil Abu"
            className="relative z-20 mt-[15%] h-auto w-full md:mt-[20%]"
          />
          <div className="absolute right-0 top-[80%] z-20 w-[80%] justify-end rounded-xl bg-black p-4 drop-shadow-2xl md:right-0 md:top-[84%] md:w-[75%] md:p-6">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-base text-white md:text-xl"
            >
              Kendaraan EV China jauh lebih terjangkau, rata-rata setengah harga
              dibandingkan EV dari negara lain. Bahkan dengan tarif impor, sedan
              dan SUV Eropa masih jauh lebih mahal (15-30%)
            </motion.p>
          </div>
        </div>
        <div className="mx auto mx-auto w-full max-w-4xl px-4 lg:px-0">
          <div className="mt-[50%] rounded-3xl border border-white md:mt-[16%]">
            <div className="rounded-3xl border border-white bg-[#043F6A]">
              <div className="flex flex-col md:flex-row">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/3.2.png`}
                  alt="Mobil Abu"
                  className="z-20 h-auto w-full md:-mr-12 md:-mt-12 md:w-[48%] md:pr-4"
                />
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="my-auto py-4 pl-4 pr-0 text-base text-white md:w-full md:pl-14 md:pr-2 md:text-xl"
                >
                  Keunggulan harga ini memungkinkan ekspansi agresif ke pasar
                  internasional, terutama di{" "}
                  <strong>Asia Tenggara dan Brasil</strong>
                </motion.p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-16 px-8 pb-8 pt-8 md:flex-row md:px-24">
              <div className="flex w-full flex-col md:w-1/2">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/3.3.png`}
                  alt="Mobil Peta 1"
                  className="z-20 mx-auto h-auto w-full pb-4 md:w-[60%]"
                />
                <motion.p
                  {...fadeInUp(0.1)}
                  className="mt-[6%] text-center text-[2rem] font-extrabold text-white md:text-left lg:text-[2.75rem]"
                >
                  Asia Tenggara
                </motion.p>
                <motion.div
                  className="mx-auto h-px w-[80%] origin-left bg-[#CEBFB1] md:mx-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                />{" "}
                <div className="flex items-center justify-center gap-4 md:justify-start md:gap-0">
                  <motion.p
                    {...fadeInUp(0.2)}
                    className="text-left text-[3rem] font-extrabold text-white md:w-1/2 lg:text-[4rem]"
                  >
                    70%
                  </motion.p>
                  <motion.p
                    {...fadeInUp(0.3)}
                    className="font-semisbold w-1/2 pr-0 text-left text-white md:pr-4 lg:text-xl"
                  >
                    Pangsa pasar di beberapa negara utama
                  </motion.p>
                </div>
              </div>
              <div className="flex w-full flex-col md:w-1/2">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/3.4.png`}
                  alt="Mobil Peta 2"
                  className="z-20 mx-auto h-auto w-full pb-4 md:w-[60%]"
                />
                <motion.p
                  {...fadeInUp(0.1)}
                  className="text-center text-[2rem] font-extrabold text-white md:text-left lg:text-[2.75rem]"
                >
                  Brasil
                </motion.p>
                <motion.div
                  className="mx-auto h-px w-[80%] origin-left bg-[#CEBFB1] md:mx-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                />{" "}
                <div className="flex items-center justify-center gap-4 md:justify-start md:gap-0">
                  <motion.p
                    {...fadeInUp(0.2)}
                    className="text-left text-[3rem] font-extrabold text-white md:w-1/2 lg:text-[4rem]"
                  >
                    82%
                  </motion.p>
                  <motion.p
                    {...fadeInUp(0.3)}
                    className="font-semisbold w-1/2 pr-0 text-left text-white md:pr-4 lg:text-xl"
                  >
                    Penjualan EV dan PHEV di 2024
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col justify-center bg-[#C8C4C2] bg-cover bg-center px-0 text-center md:flex-row">
        <div className="relative -mt-[7.5%] w-full md:-mt-[3.75%] md:w-1/2">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/3.5.png`}
            alt="Mobil bendera"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 h-[30%] w-full bg-linear-to-t from-[#C8C4C2] md:hidden" />
        </div>
        <div ref={ref} className="relative -mt-[3.75%] flex w-full flex-col justify-center px-4 pb-14 md:w-1/2 md:px-0 md:pb-0 z-20">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-left md:max-w-[400px]"
          >
            <motion.p className="font-sera text-lg text-neutral-800 drop-shadow-lg md:text-xl lg:text-3xl">
              <span className="font-semibold text-neutral-800 lg:font-bold">
                Indonesia
              </span>{" "}
              juga mengalami peningkatan penjualan EV China yang signifikan
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-4 flex w-fit items-center gap-2 rounded-full border border-black px-6 text-neutral-800 lg:px-10 xl:px-14"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-[2rem] font-extrabold lg:text-[3rem] xl:text-[6rem]"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            >
              <MotionNumberFlow willChange
                value={number}
                format={{ style: 'decimal' }}
                //@ts-ignore
                style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                // Important, see note below:
                layout
                layoutRoot
              />%
            </motion.p>
            <div className="space-y-0 xl:space-y-2">
              <motion.p
                className="text-left text-base font-semibold lg:text-[1.5rem] xl:text-[2rem] leading-3 xl:leading-tight"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
              >
                di

              </motion.p>
              <motion.p className="text-left text-base font-semibold lg:text-[1.5rem] xl:text-[2rem]"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}>
                2024
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/footer.png`}
          className="z-50 mx-auto hidden w-full invert sm:block"
        />
      </div>
      <div className="absolute left-0 bottom-0 h-[10%] w-full bg-linear-to-t from-[#c9c4c2] z-0" />
    </div>
  );
}
