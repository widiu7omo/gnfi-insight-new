"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionThreeCustomImage() {
  return (
    <div className="bg-cover bg-nore relative xl:bg-[center_top_-30rem]" style={{ backgroundImage: `url(${baseUrl}/assets/3.1.1.png)` }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 from-[5%] bg-gradient-to-b from-[#D5D5D5] to-[#606060]/0" >
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-center justify-center">
          {/* <div className="absolute bg-gradient-to-t from-[#04070B] z-0 left-0 right-0 top-[20%] bottom-0" /> */}
          <img src={`${baseUrl}/assets/3.1.png`} alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} src={`${baseUrl}/assets/3.4.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} src={`${baseUrl}/assets/3.3.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} src={`${baseUrl}/assets/3.2.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} src={`${baseUrl}/assets/3.5.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} src={`${baseUrl}/assets/3.6.png`} className="absolute" alt="Title" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto relative pt-0 ">
        <div className="relative flex flex-col items-center justify-center">
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} src={`${baseUrl}/assets/3.7.png`} alt="Who memperkirakan" className="" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 from-[80%] bg-gradient-to-b from-[#D5D5D5]/0 to-[#606060]" >
      </div>
      <div className="max-w-4xl mx-auto absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-center">
          <motion.img className="" initial={{ opacity: 0, y: 30 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} src={`${baseUrl}/assets/3.9.png`} alt="Who memperkirakan" />
          <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} src={`${baseUrl}/assets/3.8.png`} alt="Who memperkirakan" className="absolute" />
        </div>
      </div>
    </div>
  );
}
