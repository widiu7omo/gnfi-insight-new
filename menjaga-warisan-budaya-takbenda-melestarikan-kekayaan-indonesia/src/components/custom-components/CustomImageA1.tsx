"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cards = [
  { title: "Tradisi Lisan", image: "1a.2.jpg" },
  { title: "Manuskrip", image: "1a.3.jpg" },
  { title: "Adat istiadat", image: "1a.4.jpg" },
  { title: "Ritus", image: "1a.5.jpg" },
  { title: "Pengetahuan tradisional", image: "1a.6.jpg" },
  { title: "Teknologi tradisional", image: "1a.7.jpg" },
  { title: "Seni", image: "1a.8.jpg" },
  { title: "Bahasa", image: "1a.9.jpg" },
  { title: "Permainan rakyat", image: "1a.10.jpg" },
  { title: "Olahraga tradisional", image: "1a.11.jpg" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CustomImageA1() {
  return (
    <div className="relative w-full bg-white pb-8 xl:pb-28 font-sora">
      {/* Header Section */}
      <div className="relative h-[900px] w-full overflow-hidden bg-[#7a00cc]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#9d00ff] to-[#6200a3] opacity-90" />

        {/* Background Image with Mask */}
        <div
          className="absolute inset-0 z-0 opacity-40 "
          style={{
            backgroundImage: `url('${baseUrl}/assets/1a.1.1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center pt-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl text-center text-3xl pb-20 md:text-4xl lg:text-5xl xl:text-6xl font-bold !leading-snug text-[#39ff14] h-[15rem] -mb-[2rem] lg:h-[20rem] relative z-10">
            Mengenal Warisan Budaya Tak Benda, Kekayaan Indonesia Lintas Generasi
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-anton text-[5rem] mt-20 leading-none tracking-wide text-[#39ff14]"
          >
            OPK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-xl font-medium text-white"
          >
            OPK Terdiri Dari:
          </motion.p>
        </div>

        {/* Wave Separator */}
        <div className="absolute -bottom-1 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 320" className="w-full h-auto block" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative z-30 -mt-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative h-48 w-full overflow-hidden rounded-3xl shadow-lg md:h-64"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${baseUrl}/assets/${card.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer Logo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="mx-auto hidden w-full invert sm:block"
          alt="Footer"
        />
      </div>
    </div>
  );
}
