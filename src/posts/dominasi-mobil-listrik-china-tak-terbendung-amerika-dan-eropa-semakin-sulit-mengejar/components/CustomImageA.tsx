import { motion, useInView } from "motion/react";
import NumberFlow, { useCanAnimate } from '@number-flow/react'
import { useEffect, useRef, useState } from "react";
const MotionNumberFlow = motion(NumberFlow)
export function CustomImageA() {
  const ref = useRef(null)
  const [numbers, setNumbers] = useState([0, 0])
  const inView = useInView(ref)
  const canAnimate = useCanAnimate()
  useEffect(() => {
    if (inView) {
      setNumbers([27, 62])
    } else {
      setNumbers([0, 0])
    }
  }, [inView])
  return (
    <div ref={ref} className="relative overflow-clip font-sora bg-no-repeat bg-cover bg-top bg-[#e5e5ec]">
      {/* <div className="absolute left-0 w-full bottom-0 h-[20%] z-0"></div> */}
      <div className="relative z-10 pt-12 xl:pt-20">
        <div className="max-w-4xl mx-auto ">
          <motion.h4
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className="font-sora w-full px-4 lg:px-0 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight! tracking-wide text-[#0f36d5] text-start">Pertumbuhan Industri Kendaraan Listrik China Kian Tak Terbendung
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .2 }}
            viewport={{ once: true }}
            className="px-4 lg:px-0 text-2xl md:text-3xl xl:text-4xl text-black font-bold font-sora py-2">Dominasi Pasar dan Trajektori Pertumbuhan</motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .4 }}
            viewport={{ once: true }}
            className="px-4 lg:px-0 py-8 text-lg md:text-xl xl:text-2xl text-black font-sora xl:max-w-[80%]">China telah melesat menjadi pemimpin global yang tak terbantahkan di industri kendaraan listrik</motion.p>
          <div className="w-full relative flex flex-row-reverse">

            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
              src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/1.1.png`} className="h-full w-[70%] md:w-[60%] ml-auto z-10 relative" />
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="absolute bg-[#0f36d5] rounded-tl-[4rem] md:rounded-tl-[5rem] rounded-bl-md md:right-[10%] left-0 bottom-8 xs:top-[25%] p-7 md:p-12">
              <div className="absolute block md:hidden bg-linear-to-r from-[#0f0fd5] z-40 w-full left-0 rounded-tl-[4rem] md:rounded-tl-[5rem] top-0 h-full"></div>
              <div className="w-[90%] xs:w-[60%] md:w-[40%] font-sora text-white text-xl font-semibold space-y-2 z-40 relative">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >pada 2024</motion.div>
                <motion.div layout className="text-[5rem] xs:text-[6rem] w-[80%] md:w-full leading-[0.9] font-bold text-[#ffe354] relative">
                  <MotionNumberFlow willChange
                    value={numbers[0]}
                    className="text-[#ffe354]"
                    format={{ style: 'decimal' }}
                    //@ts-ignore
                    style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                    // Important, see note below:
                    layout
                    layoutRoot
                  />%</motion.div>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >kendaraan listrik baterai (BEV) saja menguasai pasar otomotif domestik</motion.p>
              </div>
            </motion.div>
          </div>
          <div className="w-full relative py-16 z-10 xl:z-0">
            <div className="flex md:flex-row flex-col md:items-start items-end">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex-1 font-sora text-[#272e3f] text-xl space-y-2 px-6 lg:px-10 py-1">
                <p>Lebih mengesankan lagi,
                  jika kita melihat keseluruhan penjualan kendaraan listrik, termasuk hybrid plug-in (PHEV), merek-merek China </p>
              </motion.div>
              <div className="flex-1 font-sora text-[#272e3f] text-xl font-semibold px-6 lg:px-0 py-8 md:py-0 text-right md:text-left">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >Menguasai</motion.div>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-[5rem] xs:text-[7rem] xl:text-[8rem] text-[#0f36d5] font-bold leading-[0.8]">
                  <MotionNumberFlow willChange
                    value={numbers[1]}
                    format={{ style: 'decimal' }}
                    //@ts-ignore
                    style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                    // Important, see note below:
                    layout
                    layoutRoot
                  />%</motion.p>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >Pangsa Pasar global</motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center z-0 xl:z-0">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.6 }}
            src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/1.0.png`} className="bottom-0 max-w-4xl -mt-80 xs:-mt-100 sm:-mt-120 xl:-mt-160 h-full w-full mx-auto relative z-10" />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/1.0.png`} className="-bottom-20 scale-[1.3] mx-auto absolute z-0 blur-3xl" />
          <img src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/footer.png`} className="z-50 absolute max-w-4xl hidden sm:block bottom-0 w-full mx-auto" />
        </div>
      </div>

    </div >
  );

}
