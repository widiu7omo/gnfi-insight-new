"use client";
import { baseUrl } from "@/constants/meta";
import NumberFlow, { useCanAnimate } from "@number-flow/react";
import { motion, useInView } from "framer-motion";
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
        className="relative flex h-full w-full justify-center bg-cover bg-top text-center pt-10 xl:pt-32"
        style={{ backgroundImage: `url(${baseUrl}/assets/2.0.jpg)` }}
      >
        <div className="absolute w-full h-[50%] bg-gradient-to-b from-[#f9bea8] top-0" />
        <div className="z-10 max-w-4xl mx-auto">
          <div className="relative space-y-2 inset-x-0 z-10 mb-4 text-center font-sora text-3xl font-bold text-white md:text-6xl flex flex-col justify-center items-center">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="bg-[#9d2d3d] px-4 py-2 rounded-xl break-words w-fit">Lari, Olahraga Favorit</motion.h3>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-[#9d2d3d] px-4 py-2 rounded-xl break-words w-fit">Anak Muda Indonesia</motion.h3>
          </div>
          <div ref={ref} className="mt-[10rem] relative">
            <div className="absolute left-4 xl:left-0 top-0 space-y-4 z-10">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.6 }}
                className="text-2xl font-bold text-white px-4 !tracking-wide py-1 w-fit rounded-full bg-[#2643a3]">Hasil Survei</motion.p>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                src={baseUrl + "/assets/2.2.png"} alt="2.2" className="" />
            </div>
            <div className="absolute lg:right-[-4rem] xl:right-[-13rem] top-[4rem] items-start flex-col z-10 lg:flex hidden">
              <div className="rounded-xl overflow-clip z-10 relative">
                <div className="bg-[#2643a3] px-6 pt-4 rounded-t-2xl tracking-normal leading-none font-bold text-white font-sora">
                  <MotionNumberFlow willChange
                    value={numbers[0]}
                    className="lg:text-[12rem] xl:text-[14rem]"
                    format={{ style: 'decimal' }}
                    //@ts-ignore
                    style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                    // Important, see note below:
                    layout
                    layoutRoot
                  />
                </div>
                <div
                  className="bg-[#9b2838] rounded-b-2xl text-white text-4xl py-2 px-6">
                  <motion.span
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: .5 }}>
                    persen milenial
                  </motion.span>
                </div>
              </div>
              <div className="w-[10rem] -mt-[8rem] z-0 h-[15rem] rounded-br-3xl border-[3px] border-t-transparent border-l-transparent border-dashed bg-transparent"></div>
            </div>
            <div className="absolute lg:left-[-4rem] xl:left-[-6rem] top-[28rem] lg:flex hidden items-end flex-col z-10">
              <div className="w-[10rem] -mb-[8rem] relative z-0 h-[15rem] rounded-tl-3xl border-[3px] border-b-transparent border-r-transparent border-dashed bg-transparent"></div>
              <div className="rounded-xl overflow-clip z-10 relative">
                <div className="bg-[#5d25a3] px-6 pt-4 rounded-t-2xl tracking-normal leading-none font-bold text-white font-sora">
                  <MotionNumberFlow willChange
                    value={numbers[1]}
                    className="lg:text-[12rem] xl:text-[14rem]"
                    format={{ style: 'decimal' }}
                    //@ts-ignore
                    style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                    // Important, see note below:
                    layout
                    layoutRoot
                  />
                </div>
                <div
                  className="bg-[#9b2838] rounded-b-2xl text-white text-4xl py-2 px-6">
                  <motion.span
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: .5 }}
                  >
                    persen gen Z
                  </motion.span>
                </div>
              </div>
              <div className="pt-[3rem] w-full pl-10">
                <p className="text-white font-bold text-3xl tracking-wide text-start">Menggemari Lari</p>
              </div>
            </div>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: .5 }}
              src={baseUrl + "/assets/2.1.png"} alt="People Run" className="w-full h-full object-contain relative z-[1]" />
          </div>
          <div className="absolute lg:hidden flex flex-col z-10 w-full left-0 divide-y divide-[#c2e4ff]">
            <div className="flex items-center w-full bg-[#9b2838]">
              <div className="w-[30%] py-4  text-white font-bold bg-[#2643a3] px-6">
                <MotionNumberFlow willChange
                  value={numbers[0]}
                  className="text-3xl sm:text-5xl"
                  format={{ style: 'decimal' }}
                  //@ts-ignore
                  style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                  // Important, see note below:
                  layout
                  layoutRoot
                />
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: .5 }}
                className="flex-1 text-white text-3xl font-semibold text-left h-full pl-8">persen milenial</motion.div>
            </div>
            <div className="flex items-center w-full bg-[#9b2838]">
              <div className="w-[30%] py-4 text-3xl sm:text-5xl text-white font-bold bg-[#2643a3] px-6">
                <MotionNumberFlow willChange
                  value={numbers[1]}
                  className="text-3xl sm:text-5xl"
                  format={{ style: 'decimal' }}
                  //@ts-ignore
                  style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                  // Important, see note below:
                  layout
                  layoutRoot
                />
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: .4 }}
                className="flex-1 text-white text-3xl font-semibold text-left h-full pl-8">persen gen Z</motion.div>
            </div>
            <p className="text-white font-bold text-3xl tracking-wide text-center pt-4">Menggemari Lari</p>
          </div>
          <img src={baseUrl + "/assets/2.3.png"} alt="Background" className="w-full h-full absolute left-0 top-[35%] z-0" />
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: .5 }}
            className="relative z-10 mt-[16rem] xl:mt-[10rem] px-8 xl:px-0 space-y-4 xl:space-y-8">
            <img src={baseUrl + "/assets/2.5.png"} alt="Quote 2" className="size-8 md:size-12 xl:size-fit object-contain absolute top-[-0.7rem] xl:top-[-1.5rem] left-2 xl:left-[-4rem]" />
            <p className="text-white text-lg sm:text-3xl xl:text-4xl font-semibold text-center tracking-wide max-w-full xl:max-w-full sm:max-w-[80%] mx-auto leading-tight">Lari dan bulutangkis lebih populer bagi Gen Z,
              sementara berjalan kaki dan bersepeda lebih
              populernya di kalangan generasi yang lebih tua.</p>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: .3 }}
              className="text-white font-medium text-center text-sm xl:text-2xl max-w-[80%] mx-auto">Jakpat dalam laporan "Indonesia Sports Habits and Healthy Lifestyle"</motion.p>
            <img src={baseUrl + "/assets/2.4.png"} alt="Quote 1" className="size-8 md:size-12 xl:size-fit object-contain absolute bottom-[3.5rem] right-2 xl:bottom-[4.5rem] xl:right-[-4rem]" />
          </motion.div>
          <div className="absolute w-full left-0 bottom-0 bg-gradient-to-t from-[#8c1239] h-[20%] z-0"></div>
          <img src={`${baseUrl}/assets/footer.png`} className="z-50 hidden sm:block relative bottom-0 h-fit w-fit mx-auto" />
        </div>
      </div>
    </div>
  );
}
