import { motion } from "motion/react";

const DATA = [
  { image: "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/1.2.png", label: "Ekonomi", value: 5.16 },
  { image: "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/1.3.png", label: "Pendidikan", value: 5.51 },
  { image: "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/1.4.png", label: "Kesehatan", value: 5.52 },
  { image: "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/1.5.png", label: "Teknologi & Inovasi", value: 6.69 },
  { image: "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/1.6.png", label: "Politik & Pemerintah", value: 3.87 },
  { image: "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/1.7.png", label: "Budaya & Kreativitas", value: 6.75 },
  { image: "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/1.8.png", label: "Sosial & Toleransi", value: 6.06 },
  { image: "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/1.9.png", label: "Geopolitik & Hubungan Internasional", value: 5.30 },
];
const MAX = 6.7;

export default function Infographic1() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-[#1156BA]">
      <div className="absolute h-full bg-linear-to-b from-[#000e4f] z-20 w-full inset-x-0 top-0"></div>
      <div className="absolute h-full bg-linear-to-t to-30% from-[#000e4f] z-40 w-full inset-x-0 bottom-0"></div>
      <div
        className="relative w-full justify-center lg:px-0 px-4"
      >
        <div className="relative mx-auto max-w-4xl pb-12 pt-12 md:pb-32 md:pt-32">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/1.1.png"
            className="absolute z-20 bottom-0 -right-[10%] w-[85%]"
            alt="bendera"
          />
          <div className="relative z-40">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2 className="font-sora text-white font-bold text-3xl md:text-[52px] mb-2 lg:mb-6 md:!leading-tight leading-snug">
                INDEKS OPTIMISME <br /> INDONESIA 2025: <span className="bg-[#F26D20] px-2">5,51</span>
              </motion.h2>
            </motion.div>
            {DATA.map((d, i, arr) => (
              <div
                key={i}
                className={`flex items-center ${i !== arr.length - 1 ? "mb-1 md:mb-3" : ""}`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(d.value / MAX) * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  style={{ backgroundColor: "#F26D20" }}
                  className="h-6 md:h-12 rounded-l-full"
                  viewport={{ once: true, amount: 0.5 }}
                />
                <div className="absolute flex items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.25 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="ml-[1px] md:ml-[2px] flex items-center justify-center 
               h-6 w-6 md:h-11 md:w-11 bg-white rounded-full 
               p-1 md:p-2 shadow"
                  >
                    <img
                      src={d.image}
                      className="h-full w-full object-contain"
                      alt=""
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="ml-1 md:ml-3 px-2 md:px-4 rounded-3xl 
               bg-[#F7A16E] text-[#151515] font-sora font-medium
               text-xs md:text-2xl text-center shadow"
                  >
                    {d.label}
                  </motion.div>
                </div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.3 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="h-6 md:h-12 px-1 font-sora text-sm md:px-3 md:text-3xl items-center flex"
                  style={{ backgroundColor: "#FFFFFF", color: "#151515" }}
                >
                  {d.value.toLocaleString("id-ID")}
                </motion.span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 z-40 mx-auto mt-10 md:mt-28">
        <img
          src={'/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/footer.png'}
          className="z-50 mx-auto hidden w-full max-w-4xl sm:block"
        />
      </div>
    </div>
  );
}