"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const maxValue = 25000;

export default function BarChartLPDP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full flex flex-col max-w-4xl">
      <div className="flex gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg lg:text-xl"
        >
          <span className="w-4 h-4 bg-[#003092]"></span>Umum
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg lg:text-xl"
        >
          <span className="w-4 h-4 bg-[#F93827]"></span>Targeted
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg lg:text-xl"
        >
          <span className="w-4 h-4 bg-[#16C47F]"></span>Afirmasi
        </motion.div>
      </div>

      <div className="w-full flex">
        <span
          className="font-sora absolute -left-[24%] md:-left-28 top-[58%] -rotate-90 text-sm whitespace-nowrap md:text-lg font-medium"
        >
          Kategori Penerima (orang)
        </span>
        <div className="flex-1 pl-[20%] md:pl-24">
          <div className="relative border-l border-gray-300 pl-4 h-[25rem]">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[25000, 20000, 15000, 10000, 5000, 0].map((v, i) => (
                <div key={v} className="relative w-full">

                  <div className="border-t border-gray-300/70 w-full"></div>

                  <span
                    className="font-sora absolute -left-12 top-1/2 -translate-y-1/2 text-xs text-gray-600"
                  >
                    {v === 0 ? "" : v.toLocaleString("id-ID")}
                  </span>
                </div>
              ))}
            </div>
            <div ref={ref} className="relative z-10 flex justify-around items-end h-full">
              <div className="flex flex-col -mb-6 md:-mb-9">
                <div className="absolute bottom-18 flex flex-col gap-2 mt-2 text-xs text-gray-700">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#003092]"></span>1.742
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#F93827]"></span>1.119
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#16C47F]"></span>1.405
                  </motion.div>

                </div>
                <div
                  className="flex items-end"
                  style={{ height: `25rem` }}
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(1742 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#003092] shadow-lg shadow-black/90 overflow-visible"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(1119 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 + 0.1 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#F93827] shadow-lg shadow-black/90 overflow-visible"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(1405 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 + 0.2 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#16C47F] shadow-lg shadow-black/90 overflow-visible"
                  />
                </div>
                <div className="font-sora mt-2 text-center text-xs md:text-lg text-gray-600">
                  2021
                </div>
              </div>
              <div className="flex flex-col -mb-6 md:-mb-9">
                <div className="absolute bottom-18 flex flex-col gap-2 mt-2 text-xs text-gray-700">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 * 0.2 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#003092]"></span>2.616
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#F93827]"></span>1.518
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#16C47F]"></span>806
                  </motion.div>
                </div>
                <div
                  className="flex items-end"
                  style={{ height: `25rem` }}
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(2616 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#003092] shadow-lg shadow-black/90 overflow-visible"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(1518 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 + 0.1 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#F93827] shadow-lg shadow-black/90 overflow-visible"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(806 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 + 0.2 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#16C47F] shadow-lg shadow-black/90 overflow-visible"
                  />
                </div>
                <div className="font-sora mt-2 text-center text-xs md:text-lg text-gray-600">
                  2022
                </div>
              </div>
              <div className="flex flex-col -mb-6 md:-mb-9">
                <div className="absolute bottom-18 flex flex-col gap-2 mt-2 text-xs text-gray-700">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3 * 0.2 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#003092]"></span>3.490
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3 * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#F93827]"></span>3.961
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3 * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#16C47F]"></span>1.105
                  </motion.div>
                </div>
                <div
                  className="flex items-end"
                  style={{ height: `25rem` }}
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(3490 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#003092] shadow-lg shadow-black/90 overflow-visible"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(3961 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 + 0.1 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#F93827] shadow-lg shadow-black/90 overflow-visible"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(1105 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 * 0.2 + 0.2 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#16C47F] shadow-lg shadow-black/90 overflow-visible"
                  />
                </div>
                <div className="font-sora mt-2 text-center text-xs md:text-lg text-gray-600">
                  2023
                </div>
              </div>
              <div className="flex flex-col -mb-6 md:-mb-9">
                <div className="absolute bottom-[24.5rem] flex flex-col gap-2 text-xs text-gray-700">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 4 * 0.2 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#003092]"></span>24.791
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 4 * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#F93827]"></span>15.074
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 4 * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="font-sora flex items-center gap-2 text-[#272E3F] md:text-lg"
                  >
                    <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#16C47F]"></span>421
                  </motion.div>
                </div>
                <div
                  className="flex items-end"
                  style={{ height: `24.791rem` }}
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(24791 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 4 * 0.2 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#003092] shadow-lg shadow-black/90 overflow-visible"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(15074 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 4 * 0.2 + 0.1 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#F93827] shadow-lg shadow-black/90 overflow-visible"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isInView
                        ? `${(421 / maxValue) * 100}%`
                        : 0,
                    }}
                    transition={{ duration: 0.8, delay: 4 * 0.2 + 0.2 }}
                    className="w-4 md:w-6 lg:w-8 bg-[#16C47F] shadow-lg shadow-black/90 overflow-visible"
                  />
                </div>
                <div className="font-sora mt-2 text-center text-xs md:text-lg text-gray-600">
                  2024
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-sm md:text-lg font-medium">Tahun</div>
        </div>
      </div>
    </div>
  );
}


