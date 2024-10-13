"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageTahunEmas() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="relative bg-cover flex flex-col pt-[10rem]"
      style={{ backgroundImage: `url('${baseUrl}/assets/3.0.png')` }}
    >
      <img src={`${baseUrl}/assets/3.1.png`} className="absolute top-0 left-0 w-full" alt="Background" />
      <div className="absolute lg:hidden block w-full bg-gradient-to-b from-black/50 to-transparent h-full" />
      <div className="flex flex-col sm:flex-row mx-auto max-w-4xl relative z-10">
        <motion.div
          className="space-y-5 flex-1"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            src={`${baseUrl}/assets/3.2.png`}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          />
          <ul className="flex flex-col sm:flex-row marker:text-white text-white font-semibold text-lg lg:text-xl px-8 lg:px-16 list-disc space-y-4 sm:space-y-0 sm:space-x-8">
            <li>Sejarah mencatat bahwa dangdut mencapai puncak kejayaannya pada era 1970-an</li>
            <li>Saat itu, musik dangdut benar-benar mewabah di mana-mana, bahkan sampai ke Malaysia</li>
          </ul>
        </motion.div>
      </div>
      <div className="flex flex-col relative z-10 max-w-4xl mx-auto gap-8 mt-4 lg:mt-[20rem]">
        <div className="relative flex flex-col xs:flex-row bg-[#c5842b]/60 space-x-4 lg:space-x-8 sm:items-center justify-start">
          <div className="flex-auto flex items-center justify-start sm:justify-center h-[10rem] sm:h-[20rem]">
            <img src={`${baseUrl}/assets/3.4.png`} className="absolute h-[8rem] sm:h-[15rem] lg:h-[25rem] left-0 top-[-1rem] lg:top-[-5rem]" alt="Artist" />
            <img src={`${baseUrl}/assets/3.5.png`} alt="TV" className="absolute left-4 md:left-[-3rem] h-[8rem] sm:h-[12rem]" />
          </div>
          <div className="lg:w-9/12 xs:w-8/12 w-full p-4">
            <p className="text-white font-semibold text-lg sm:text-2xl lg:text-3xl">Film, acara televisi, dan radio senantiasa menyiarkan lagu-lagu dangdut</p>
          </div>
        </div>
        <div className="relative flex bg-[#c5842b]/60 space-x-8 items-center justify-start">
          <div className="w-3/12 flex items-end justify-center h-[20rem]">
            <img src={`${baseUrl}/assets/3.3.png`} alt="Artist" className="absolute h-[20rem] sm:h-[25rem]" />
          </div>
          <div className="md:w-9/12 xs:w-8/12 w-full">
            <p className="text-white font-semibold text-lg sm:text-2xl lg:text-3xl">Di acara pesta, lagu yang dibawakan penyanyi yang tampil menghibur adalah dangdut</p>
          </div>
        </div>
        <div className="relative flex bg-[#c5842b]/60 space-x-8 items-center justify-start">
          <div className="w-3/12 items-center justify-center h-[16rem] xl:h-[20rem]">
            <img src={`${baseUrl}/assets/3.6.png`} alt="Artist" className="absolute w-[8rem] xs:w-[10rem] lg:w-[15rem] left-[-7%] xs:left-0 lg:left-[-5%] top-[-5%]" />
          </div>
          <div className="md:w-9/12 xs:w-8/12 w-full">
            <p className="text-white font-semibold text-lg sm:text-2xl lg:text-3xl">
              Bahkan di diskotik atau klub malam, musik yang diputar untuk menemani pengunjung menghabiskan malam bukanlah <i>electronic dance music</i> alias EDM seperti dewasa ini, melainkan dangdut
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
