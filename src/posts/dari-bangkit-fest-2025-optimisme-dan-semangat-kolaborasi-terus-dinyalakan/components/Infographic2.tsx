import { motion } from "motion/react";
import ChartLpdp from "./ChartLPDP";

export default function Infographic2() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-white ">
      <div className="relative flex flex-col items-center overflow-hidden bg-white mb-20 xl:mb-0">
        {/* <div className="absolute h-30 bg-linear-to-b from-[#f6f0fa] z-20 w-full inset-x-0 top-0"></div>
      <div className="absolute h-30 bg-linear-to-t from-[#d9dcf2] z-40 w-full inset-x-0 bottom-0"></div> */}
        <div
          className="relative w-full justify-center lg:px-0 px-4"
        >
          <div className="relative mx-auto max-w-4xl pb-12 pt-12 md:pb-32 md:pt-32">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.h2 className="font-sora text-[#000E4F] font-bold text-3xl md:text-[52px] mb-2 lg:mb-6 md:!leading-tight leading-snug">
                  Penerima Beasiswa <br />LPDP dari Tahun ke Tahun
                </motion.h2>
                <motion.h3 className="font-sora text-[#EA6114] font-medium text-3xl md:text-5xl mb-2 lg:mb-6 md:!leading-tight leading-snug">
                  2021-2024
                </motion.h3>
              </motion.div>
              <ChartLpdp />
              <p className="mt-6 md:mt-12 text-sm md:text-lg text-gray-600 font-sora">
                Sumber: LPDP RI, dihimpun oleh Goodstats
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="relative w-full bg-white overflow-hidden">
        <div className="flex w-full">
          <img
            src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/2.2.png"
            className="w-1/2 object-cover"
            alt="bg-left"
          />
          <img
            src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/2.2.png"
            className="w-1/2 object-cover"
            alt="bg-right"
          />
        </div>
        <motion.img
          src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/2.1.png"
          alt="overlay"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-4xl px-4 md:px-0 z-30"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-0 w-full flex justify-center z-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/footer.png"
            className="hidden sm:block w-full max-w-4xl"
            alt="footer"
          />
        </motion.div>
      </div>
    </div>
  );
}