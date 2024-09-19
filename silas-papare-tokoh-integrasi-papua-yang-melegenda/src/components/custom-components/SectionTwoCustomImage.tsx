"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionTwoCustomImage() {
  return (
    <section id="section-1" className="bg-[#fffcf3] -mt-1 overflow-clip ">
      <div className="relative flex items-start justify-center overflow-clip">
        <div
          className="w-full bg-cover bg-no-repeat bg-[center_top] relative"
          style={{ backgroundImage: `url('${baseUrl}/assets/1.0.png')` }}
        >
          <div className="max-w-4xl mx-auto relative z-10 xl:mt-[15rem]">
            <div className="space-y-0">
              <div className="relative flex items-center justify-center z-0">
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.1.png`}
                  alt="Title"
                  className=" top-0"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.2.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0, y: 5, x: 5 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  src={`${baseUrl}/assets/1.3.png`}
                  className="absolute"
                  alt="Sub Title"
                />
                <motion.img
                  initial={{
                    x: 40,
                    scaleY: 0.9,
                    scaleX: 0.9,
                    scaleZ: 0.9,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    scaleY: 1,
                    scaleX: 1,
                    scaleZ: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  src={`${baseUrl}/assets/1.4.png`}
                  className="absolute top-0"
                  alt="Stamp"
                />
                <motion.img
                  initial={{
                    x: 40,
                    scaleY: 0.9,
                    scaleX: 0.9,
                    scaleZ: 0.9,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    scaleY: 1,
                    scaleX: 1,
                    scaleZ: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  src={`${baseUrl}/assets/1.5.png`}
                  className="absolute top-0"
                  alt="Stamp"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  src={`${baseUrl}/assets/1.6.png`}
                  className="absolute"
                  alt="Sub Title"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  src={`${baseUrl}/assets/1.7.png`}
                  className="absolute"
                  alt="Sub Title"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                  src={`${baseUrl}/assets/1.8.png`}
                  className="absolute"
                  alt="Sub Title"
                />
              </div>
              <div className="relative flex items-center justify-center z-0">
                <motion.img
                  initial={{ opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.9.1.png`}
                  alt="Title"
                  className=" top-0"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.9.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.10.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  src={`${baseUrl}/assets/1.11.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.12.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.13.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  src={`${baseUrl}/assets/1.14.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.15.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.16.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.17.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.18.png`}
                  alt="Title"
                  className="absolute top-0"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  src={`${baseUrl}/assets/1.19.png`}
                  alt="Title"
                  className="absolute top-0 invert"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[90%] from-transparent to-[#fffcf3]" />
        </div>
      </div>
    </section>
  );
}
