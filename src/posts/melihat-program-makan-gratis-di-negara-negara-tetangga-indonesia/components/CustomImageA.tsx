"use client";

import { motion, useInView } from "motion/react";
import { useCanAnimate } from '@number-flow/react'
import { useRef } from "react";
export function CustomImageA() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const canAnimate = useCanAnimate()
  const problems = [
    'Pemotongan biaya makanan perporsi dari Rp15 ribu menjadi Rp10 ribu',
    'Keracunan massal di Sukoharjo',
    'Penemuan lauk daging ayam mentah di Kupang',
    'Aksi penolakan di Papua Tengah',
    'Wacana penggunaan susu ikan',
  ]
  return (
    <div ref={ref} className="relative overflow-clip font-sora py-14 bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(/assets/melihat-program-makan-gratis-di-negara-negara-tetangga-indonesia/1.0.1.png)`, backgroundColor: "#d0d1c3" }}>
      <div className="absolute left-0 w-full bottom-0 h-[20%] bg-[#4f2911] z-0"></div>
      <div className="absolute left-0 w-full top-0 h-full bg-black/30 z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10 pt-0 lg:pt-24 pb-20">
        <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className="font-sora w-full text-4xl md:text-6xl xl:text-7xl font-bold leading-tight! tracking-wide text-white text-center">Makan Bergizi Gratis "Gebrakan" Baru Indonesia
        </motion.h4>
        <div className="h-40 lg:h-200"></div>
        <div className="flex flex-col md:flex-row flex-wrap">
          <div className="relative basis-1/2 p-2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              src={'/assets/melihat-program-makan-gratis-di-negara-negara-tetangga-indonesia/1.2.png'} alt="Capres" className="absolute -top-28 w-40 left-4" />
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="bg-[#352925] p-4 xl:p-6 rounded-xl relative ">
              <p className="text-white text-lg lg:text-2xl tracking-wide leading-snug">Merupakan <span className="font-bold">janji politik</span>
                {' '}Prabowo Subianto- Gibran Rakabuming di Pilpres
                2024</p>
            </motion.div>
          </div>
          <div className="relative basis-1/2 p-2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              src={'/assets/melihat-program-makan-gratis-di-negara-negara-tetangga-indonesia/1.3.png'} alt="Money" className="absolute -top-12 h-32 lg:h-40 right-0 z-10" />
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-[#352925] p-4 xl:p-6 rounded-xl relative pr-20">
              <p className="text-white text-lg lg:text-2xl tracking-wide leading-snug">Anggaran sebesar <span className="font-bold">Rp171 triliun</span> untuk 2025</p>
            </motion.div>
          </div>
          <div className="relative basis-1/2 p-2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              src={'/assets/melihat-program-makan-gratis-di-negara-negara-tetangga-indonesia/1.4.png'} alt="Rocket" className="absolute -top-8 w-20 lg:w-32 right-8 lg:right-0 z-10" />
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-[#352925] p-4 xl:p-6 rounded-xl relative">
              <p className="text-white text-lg lg:text-2xl tracking-wide leading-snug pr-20">Mulai digulirkan sejak Senin<span className="font-bold">(6/1/2025)</span></p>
            </motion.div>
          </div>
          <div className="relative basis-1/2 p-2 mt-0 md:-mt-6 lg:-mt-8 2xl:-mt-18">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              src={'/assets/melihat-program-makan-gratis-di-negara-negara-tetangga-indonesia/1.5.png'} alt="Arrow" className="absolute top-0 bottom-0 lg:bottom-0 lg:-top-12 w-24 lg:w-40 right-0 lg:-right-12 z-10" />
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-[#352925] p-4 xl:p-6 rounded-xl relative ">
              <p className="text-white text-lg lg:text-2xl tracking-wide leading-snug pr-20">Diklaim menjangkau
                38 provinsi dengan
                lebih dari  <span className="font-bold">2 juta penerima</span>
                {' '}per akhir Februari 2025</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-[#4f2911] pt-16">
        <div className="flex flex-col max-w-4xl mx-auto relative px-6 pb-10">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="absolute px-8 left-0 md:left-2 shadow-lg py-4 -top-24 text-2xl font-bold text-white rounded-r-full bg-[#8e4c1f]">Beberapa Polemik MBG</motion.div>
          <div className="flex flex-col md:flex-row flex-wrap relative z-10">
            {problems.map((problem, index) => (
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                key={index} className={`flex basis-1/2 flex-row items-start space-x-2 text-white text-xl lg:px-4 py-2 h-fit ${index == problems.length - 2 ? 'lg:-mt-12' : ''}`}>
                <div className="min-w-4 min-h-4 bg-[#e8b795] rounded-full mt-1.5"></div>
                <p>{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <img src={`/assets/melihat-program-makan-gratis-di-negara-negara-tetangga-indonesia/1.6.png`} alt="" className="absolute bottom-0 right-0 w-[50%] lg:w-[45%] z-0" />
      </div>
      <img src={`/assets/melihat-program-makan-gratis-di-negara-negara-tetangga-indonesia/footer.png`} className="z-50 hidden sm:block relative bottom-0 h-full w-fit mx-auto" />
    </div >
  );

}
