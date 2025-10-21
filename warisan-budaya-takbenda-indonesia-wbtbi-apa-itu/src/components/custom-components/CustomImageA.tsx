"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CustomImageA() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-[center_top_15%] pt-16 md:pt-24"
        style={{ backgroundImage: `url(${baseUrl}/assets/1.1.png)` }}
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 px-4">
          <motion.h2
            className="w-full font-sora text-[#08F3E8] font-bold text-3xl md:text-5xl mb-8 lg:mb-10 md:leading-snug leading-snug"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Warisan Budaya Takbenda Indonesia (WBTbI), Apa Itu?
          </motion.h2>
          <motion.p className="font-sora text-white text-base md:text-2xl mb-8 md:mb-12 lg:mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}>
            Berbagai hasil praktik, perwujudan, ekspresi pengetahuan dan keterampilan, yang terkait dengan lingkup budaya, yang diwariskan dari generasi ke generasi secara terus menerus melalui pelestarian dan/atau penciptaan kembali serta merupakan hasil kebudayaan yang berwujud budaya takbenda setelah melalui proses penetapan Budaya Takbenda (Permendikbud) Nomor 106 Tahun 2013
          </motion.p>
        </div>
        <motion.div variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto -mb-14 md:-mb-32 z-10 w-full max-w-4xl bg-[#EACD86] px-6 md:px-12 py-6 md:py-10 rounded-[1.5rem]">
          <motion.p variants={item} className="text-xl md:text-4xl font-bold text-[#2A2828] mb-4 md:mb-8">Domain:</motion.p>
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <motion.ul className="w-full md:w-1/2 list-none space-y-4 md:space-y-8" variants={container}>
              <motion.li className="text-base md:text-2xl font-bold text-[#2A2828] relative pl-6 md:pl-8 
                 before:content-[''] before:absolute before:left-0 
                 before:top-[0.15em] before:translate-y-0
                 md:before:border-t-[12px] md:before:border-b-[12px] md:before:border-l-[20px]
                 before:border-t-[9px] before:border-b-[9px] before:border-l-[15px]
                 before:border-t-transparent before:border-b-transparent before:border-l-[#EE756D]" variants={item}>
                Tradisi lisan dan ekspresinya, termasuk bahasa sebagai wahana Warisan Budaya Takbenda;
              </motion.li>
              <motion.li className="text-base md:text-2xl font-bold text-[#2A2828] relative pl-6 md:pl-8 
                 before:content-[''] before:absolute before:left-0 
                 before:top-[0.15em] before:translate-y-0
                 md:before:border-t-[12px] md:before:border-b-[12px] md:before:border-l-[20px]
                 before:border-t-[9px] before:border-b-[9px] before:border-l-[15px]
                 before:border-t-transparent before:border-b-transparent before:border-l-[#EE756D]" variants={item}>
                Seni Pertunjukan
              </motion.li>
              <motion.li className="text-base md:text-2xl font-bold text-[#2A2828] relative pl-6 md:pl-8 
                 before:content-[''] before:absolute before:left-0 
                 before:top-[0.15em] before:translate-y-0
                 md:before:border-t-[12px] md:before:border-b-[12px] md:before:border-l-[20px]
                 before:border-t-[9px] before:border-b-[9px] before:border-l-[15px]                 
                 before:border-t-transparent before:border-b-transparent before:border-l-[#EE756D]" variants={item}>
                <i>Social practices, rituals and festive events;</i> (praktik sosial, ritual, dan perayaan - perayaan)
              </motion.li>
            </motion.ul>
            <motion.ul className="w-full md:w-1/2 list-none space-y-4 md:space-y-8" variants={container}>

              <motion.li className="text-base md:text-2xl font-bold text-[#2A2828] relative pl-6 md:pl-8 
                 before:content-[''] before:absolute before:left-0 
                 before:top-[0.15em] before:translate-y-0
                 md:before:border-t-[12px] md:before:border-b-[12px] md:before:border-l-[20px]
                 before:border-t-[9px] before:border-b-[9px] before:border-l-[15px]                 
                 before:border-t-transparent before:border-b-transparent before:border-l-[#EE756D]" variants={item}>
                Pengetahuan dan kebiasaan perilaku mengenai alam dan semesta;
              </motion.li>
              <motion.li className="text-base md:text-2xl font-bold text-[#2A2828] relative pl-6 md:pl-8 
                 before:content-[''] before:absolute before:left-0 
                 before:top-[0.15em] before:translate-y-0
                 md:before:border-t-[12px] md:before:border-b-[12px] md:before:border-l-[20px]
                 before:border-t-[9px] before:border-b-[9px] before:border-l-[15px]                 
                 before:border-t-transparent before:border-b-transparent before:border-l-[#EE756D]" variants={item}>
                Kemahiran kerajinan tradisional.
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
      <div
        className="relative w-full justify-center bg-[#E2DFDF] pb-0 pt-10 md:pt-20"
      >
        <motion.p className="mt-[10%] font-semibold relative mx-auto text-center text-[#CD4947] w-full lg:w-[55%] lg:px-0 md:px-8 px-4 text-center font-sora text-[#3E0703] text-base md:text-3xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}>
          Untuk ditetapkan sebagai WBTbI,<br /> suatu budaya takbenda harus memenuhi syarat dan mengikuti prosedur penetapan
        </motion.p>
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4 pt-14 md:pt-16 lg:pt-20">
          {[
            { src: `${baseUrl}/assets/1.2.png`, className: "ml-auto w-[80%]" },
            { src: `${baseUrl}/assets/1.3.png`, className: "left-10 w-[50%] -mt-[55%]" },
            { src: `${baseUrl}/assets/1.4.png`, className: "ml-auto w-[50%] -mt-[55%]" },
            { src: `${baseUrl}/assets/1.6.png`, className: "w-[70%] -mt-[80%]" },
            { src: `${baseUrl}/assets/1.7.png`, className: "w-[100%] -mt-[30%]" },
            { src: `${baseUrl}/assets/1.5.png`, className: "ml-auto w-[80%] -mt-[70%]" },
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt="Silat"
              className={img.className}
              initial={{ opacity: 0, scale: 0.8, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: i * 0.15,
              }}
              viewport={{ once: true, amount: 0.2 }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl">
          <img
            src={`${baseUrl}/assets/footer.png`}
            className="mx-auto hidden w-full sm:block"
            alt="Footer"
          />
        </div>
      </div>

    </div >
  );
}
