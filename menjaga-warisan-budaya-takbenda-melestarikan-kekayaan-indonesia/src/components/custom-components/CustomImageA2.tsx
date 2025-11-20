"use client";

import { baseUrl } from "@/constants/meta";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const steps = [
  {
    id: 1,
    text: "Masyarakat, komunitas atau pemerintah daerah mengajukan usulan kepada dinas yang membidangi kebudayaan di tingkat kabupaten/kota",
    bg: "bg-[#5b4434]",
  },
  {
    id: 2,
    text: "Data usulan dimasukkan ke dalam sistem Dapobud (Data Objek Pemajuan Kebudayaan)",
    bg: "bg-[#6c4e3a]",
  },
  {
    id: 3,
    text: "Tim Pendataan Dapobud melakukan verifikasi dan validasi mulai dari tingkat kabupaten/kota hingga provinsi",
    bg: "bg-[#885432]",
  },
  {
    id: 4,
    text: "Dinas Provinsi mengajukan usulan Penetapan Warisan Budaya Takbenda",
    bg: "bg-[#a05c20]",
  },
  {
    id: 5,
    text: "Seleksi seleksi administrasi, penilaian substansi, dan verifikasi berjenjang oleh Tim Ahli Warisan Budaya Takbenda Indonesia",
    bg: "bg-[#b6661e]",
  },
  {
    id: 6,
    text: "Usulan Warisan Budaya Takbenda dibawa ke sidang penetapan WBTbI, sebelum nantinya ditetapkan sebagai Warisan Budaya Tak Benda Indonesia oleh Menteri Kebudayaan RI",
    bg: "bg-[#b66f0a]",
  },
];

const requirements = [
  "Berusia 50 tahun atau lebih,",
  "Memiliki maestro,",
  "Telah diwariskan paling sedikit dua generasi,",
  "Memiliki nilai penting bagi masyarakat dalam aspek sosial, ekonomi,",
  "dan/atau budaya,",
  "Berdampak pada pembangunan berkelanjutan,",
  "Masih lestari dan dipraktikkan di masyarakat, serta",
  "Tidak melanggar ketentuan peraturan perundang-undangan.",
];

export function CustomImageA2() {
  return (
    <div className="relative w-full overflow-hidden bg-[#3E3632] text-white font-sora">

      {/* Top Section: Header + List */}
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-10">

        {/* Image 1b.1: Dancers Left - Background for Title and List */}
        <div className="absolute top-0 left-[-4rem] w-[80%] md:w-[60%] lg:w-[50%] z-0 pointer-events-none">
          <img
            src={`${baseUrl}/assets/1b.1.png`}
            alt="Dancers Left"
            className="w-full object-contain object-top opacity-100"
          />
        </div>

        {/* Image 1b.2: Bowl Right - Overlay on List */}
        <div className="absolute top-[40%] right-0 xl:right-[10rem] w-[30%] md:w-[25%] z-20 pointer-events-none translate-x-1/4">
          <img
            src={`${baseUrl}/assets/1b.2.png`}
            alt="Bowl Decoration"
            className="w-full object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto xl:px-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-left"
          >
            <h2 className="text-2xl text-right xl:text-left md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              OPK Jadi WBTbI,<br />
              Bagaimana Caranya?
            </h2>
          </motion.div>

          {/* Steps List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-3"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                variants={itemVariant}
                className={cn("flex items-stretch overflow-hidden shadow-md relative min-h-[80px]", step.bg)}
              >
                <div className="flex-shrink-0 w-14 md:w-20 flex items-center justify-center text-3xl md:text-5xl font-bold text-[#E8DCCF]">
                  {step.id}
                </div>
                <div className="p-3 md:p-5 flex items-center w-full">
                  <p className={cn("text-xs md:text-base leading-snug text-[#FDF6E3]", (i > 1 && i < 4) && "max-w-[80%]", i === 4 && "max-w-[90%]")}>
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Middle Section: Diagram */}
      <div className="relative w-full flex justify-center py-10 z-10 bg-[#3E3632]">
        <motion.img
          src={`${baseUrl}/assets/1b.3.png`}
          alt="OPK WBTbI Diagram"
          className="w-48 md:w-64 lg:w-80 object-contain"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Bottom Section: Requirements */}
      <div className="relative w-full mt-10">

        {/* Title with Background Image 1b.4 */}
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          <img
            src={`${baseUrl}/assets/1b.4.png`}
            alt="Dancers Bottom Background"
            className=" inset-0 w-full h-full object-cover object-top brightness-75 max-w-7xl mx-auto"
          />
          <div className="absolute z-10 max-w-4xl px-6 text-center bottom-[10rem]">
            <div className="bg-[#b6661e] rounded-full py-3 px-8 inline-block mb-4 shadow-lg">
              <h3 className="text-sm md:text-xl font-bold text-white uppercase tracking-wide">
                OPK Harus Memenuhi Syarat-syarat Ini<br className="hidden md:block" /> agar Bisa Ditetapkan Menjadi WBTbI:
              </h3>
            </div>
          </div>
        </div>

        {/* Checklist - Overlapping the image slightly or just below */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 xl:px-24 -mt-24 md:-mt-32 pb-8 xl:pb-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#2C2420]/95 border border-[#8B5E3C] rounded-3xl p-6 md:p-10 shadow-2xl space-y-2"
          >
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="flex items-start space-x-3 border-b border-[#8B5E3C]/30 last:border-0 pb-2 last:pb-0"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#B87333] bg-white rounded-full p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm md:text-lg text-gray-200 font-medium">{req}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
