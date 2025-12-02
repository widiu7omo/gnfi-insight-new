import NumberFlow, { useCanAnimate } from "@number-flow/react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
const MotionNumberFlow = motion(NumberFlow)
export function CustomImageB() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [numbers, setNumbers] = useState([0, 0])
  useEffect(() => {
    if (inView) {
      setNumbers([37, 32])
    } else {
      setNumbers([0, 0])
    }
  }, [inView])
  const canAnimate = useCanAnimate()
  return (
    <div className="relative flex flex-col items-center overflow-hidden ">
      <div
        className="relative flex h-full w-full justify-center bg-cover bg-position-[center_top_55%] text-center pt-10 xl:pt-32"
        style={{ backgroundImage: `url(/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/2.0.jpg)` }}
      >
        <div className="absolute w-full h-[50%] bg-linear-to-b from-[#011625] top-0" />
        <div className="absolute w-full h-[50%] bg-linear-to-t from-black bottom-0" />
        <div className="z-10 w-full">
          <div className="max-w-4xl mx-auto relative space-y-2 inset-x-0 z-10 mb-4 text-left font-sora text-3xl font-bold text-[#ffe354] md:text-6xl flex flex-col justify-center items-center">
            <motion.h4
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="py-2 rounded-xl wrap-break-word w-fit leading-tight! px-4 md:px-6 xl:px-0 text-4xl md:text-5xl xl:text-6xl">
              Dukungan Pemerintah dan Inisiatif Strategis
            </motion.h4>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center max-w-4xl mx-auto relative">
            <div className="flex-1 font-sora text-lg text-left text-white space-y-4 px-4 md:px-6 xl:px-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .5, delay: .1 }}
                viewport={{ once: true }}
              >Kesuksesan luar biasa industri EV China tak lepas dari dukungan pemerintah yang besar dan konsisten</motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                viewport={{ once: true }}
              >Beijing telah menggelontorkan dana sekitar <span className="text-[#ffe354] font-bold">US$230</span> miliar untuk sektor ini antara 2009 dan 2023.</motion.div>
            </div>
            <div className="flex-1 pr-4 -mb-8">
              <motion.img
                initial={{ opacity: 0, y: '10%' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .2 }}
                viewport={{ once: true }}
                src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/2.1.png`} alt="Presiden Cina" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto relative scale-125 xs:scale-100">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: .3 }}
              viewport={{ once: true }}
              src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/2.2.png`} alt="Stats" className="-ml-4 xs:ml-0" />
          </div>
          <div className="h-160 md:h-80"></div>
          <div className="flex flex-col sm:flex-row max-w-4xl mx-auto relative items-end space-y-6 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: '-10%' }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, delay: .2 }}
              viewport={{ once: true }}
              className="flex-1 px-4 md:px-12">
              <p className="text-white text-xl tracking-wider font-medium text-left">BYD, salah satu produsen EV terkemuka di China, menjadi contoh nyata penerima manfaat  dari dukungan besar ini, menerima subsidi pemerintah hingga
                <span className="font-black text-[#ffe354]">{" "}US$3,7</span> miliar antara 2018 dan 2022.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: '10%' }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, delay: .2 }}
              viewport={{ once: true }}
              className="flex-1 px-4 md:px-12">
              <img src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/2.3.png`} alt="Factory" className="w-full" />
              <p className="bg-[#98a2b6] p-4 text-neutral-800 text-xl tracking-wider font-medium text-left">Suntikan dana ini memungkinkan BYD dan perusahaan lain untuk berinvestasi dalam riset dan pengembangan, meningkatkan kapasitas produksi, dan menawarkan harga yang kompetitif.</p>
            </motion.div>
          </div>
          <img src={`/assets/dominasi-mobil-listrik-china-tak-terbendung-amerika-dan-eropa-semakin-sulit-mengejar/footer.png`} className="z-50 hidden sm:block relative bottom-0 h-fit w-fit mx-auto" alt="Footer" />
        </div>
      </div>
    </div>
  );
}
