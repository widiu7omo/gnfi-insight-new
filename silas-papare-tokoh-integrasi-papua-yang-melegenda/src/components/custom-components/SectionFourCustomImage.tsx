"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionFourCustomImage() {
  return (
    <section className="relative">
      <div className="flex flex-col">
        <div className="flex flex-col z-10 relative bg-cover bg-[center_top] bg-no-repeat" style={{ backgroundImage: `url('${baseUrl}/assets/3.0.png')` }}>
          <div className="absolute top-0 bg-gradient-to-b from-[#82ded8] to-[#82ded8]/0 left-0 right-0 bottom-[90%] w-full" />
          <div className="flex justify-center max-w-4xl mx-auto relative lg:mt-[27rem]">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/3.1.png`} alt="" className="top-0" />
          </div>
          <div className="flex justify-center max-w-4xl mx-auto relative xl:mt-[5rem]">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/3.2.png`} alt="" className="top-0 invert" />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/3.3.png`} alt="" className="absolute top-0 " />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/3.4.png`} alt="" className="absolute top-0 " />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/3.5.png`} alt="" className="absolute top-0 " />
          </div>
          <div className="flex justify-center max-w-4xl mx-auto relative lg:top-[8rem] lg:pb-[8rem]">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`${baseUrl}/assets/3.6.png`} alt="" className="top-0" />
            <div className="absolute bottom-0 lg:pb-[8rem]">
              <div className="relative bottom-0 top-0 left-0 right-0">
                <motion.img
                  initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
                  src={`${baseUrl}/assets/3.7.png`} alt="" className="z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
