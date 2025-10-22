"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function CustomImageC() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute h-[10rem] bg-gradient-to-b from-[#f6f0fa] z-20 w-full inset-x-0 top-0"></div>
      <div className="absolute h-[10rem] bg-gradient-to-t from-[#d9dcf2] z-40 w-full inset-x-0 bottom-0"></div>
      <div
        className="relative w-full justify-center bg-cover bg-center pt-16 md:pt-24"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.8.png)` }}
      >
        <div className="relative mx-auto max-w-4xl z-20">
          <motion.div
            className="bg-white px-4 md:px-8 py-4 md:py-6 lg:w-[88%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 className="font-sora text-[#C02220] font-bold text-3xl md:text-[52px] mb-2 lg:mb-6 md:!leading-tight leading-snug">
              Warisan Budaya Takbenda Indonesia Mendunia!
            </motion.h2>
            <motion.p className="font-sora text-[#2A2828] text-base md:text-2xl !leading-relaxed w-full md:w-[76%]">
              ada sejumlah WBTbI yang telah diinskripsi sebagai Intangible Cultural Heritage (ICH) oleh Organisasi Pendidikan, Keilmuan, dan Kebudayaan PBB (UNESCO)            </motion.p>
          </motion.div>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
            <motion.div
              className="w-full md:w-[40%] px-4 md:px-6 py-4 md:py-12 bg-[#862625]"
              initial="hidden"
              variants={fadeUp}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.p
                variants={fadeUp}
                className="font-sora text-white font-bold text-2xl md:text-4xl lg:text-[30px] mb-6 md:mb-14 md:!leading-[1.2] leading-snug w-full"
              >
                WBTbI yang sudah diinkripsi UNESCO
              </motion.p>
              <motion.div
                className="font-sora text-white text-base md:text-2xl leading-relaxed mb-4 md:mb-6"
                variants={listContainer}
              >
                {[
                  ["Keris", 2008],
                  ["Wayang", 2008],
                  ["Batik", 2009],
                  ["Pendidikan dan Pelatihan Batik", 2009],
                  ["Angklung", 2010],
                  ["Tari Saman", 2011],
                  ["Noken", 2012],
                  ["Tiga Genre Tarian Tradisional Bali", 2015],
                  ["Pinisi", 2017],
                  ["Pencak Silat", 2019],
                  ["Pantun", 2020],
                  ["Gamelan", 2021],
                  ["Jamu", 2023],
                  ["Reog Ponorogo", 2024],
                  ["Kebaya", 2024],
                  ["Kolintang", 2024],
                ].map(([title, year], index) => (
                  <motion.p key={index} className="mb-2" variants={listItem}>
                    <span className="font-bold">{title}</span> ({year})
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
            <div className="relative w-full md:w-1/2 pb-[50%] lg:pb-[36%]">
              <div className="relative md:pb-4 z-20">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={`${baseUrl}/assets/3.1.png`}
                    alt="reog ponorogo"
                    className="-mt-40 w-full"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="absolute -top-[60%] -right-10 md:-right-20 w-[60%] md:w-[70%] z-10">
                  <motion.img
                    src={`${baseUrl}/assets/3.2.png`}
                    alt="penari"
                    className="w-full"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="absolute -bottom-9 -left-20 w-[75%] md:w-[85%]">
                  <motion.img
                    src={`${baseUrl}/assets/3.5.png`}
                    alt="penari"
                    className=""
                    initial={{ opacity: 0, y: 80, scale: 1 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                  />
                </div>
                <motion.img
                  src={`${baseUrl}/assets/3.3.png`}
                  alt="Silat"
                  className="absolute right-0 md:-right-10 bottom-0 z-40 w-[80%]"
                  initial={{ opacity: 0, scale: 1, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1.25, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="w-full mb-4 md:mb-20 z-40 pl-4 md:pl-10 pt-6 md:pt-14">
                <motion.h3 className="font-sora text-[#C02220] md:mt-0 mt-[10%] font-bold text-2xl md:text-4xl lg:text-[36px] mb-6 md:mb-8 md:!leading-[1.2] leading-snug w-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}>
                  Mengapa pengakuan internasional atas WBTbI penting?
                </motion.h3>
                <motion.p className="font-sora text-[#2A2828] text-base md:text-2xl mb-6 md:mb-8 leading-relaxed w-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}>
                  Menegaskan identitas bangsa dan membentuk citra Indonesia sebagai bangsa kaya akan keberagaman budaya
                </motion.p>
                <motion.p className="font-sora text-[#2A2828] text-base md:text-2xl mb-6 md:mb-8 leading-relaxed w-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}>
                  Medium diplomasi lunak <span className="italic"><br />(soft power diplomacy)  </span>   </motion.p>
                <motion.p className="font-sora text-[#2A2828] text-base md:text-2xl mb-6 md:mb-8 leading-relaxed w-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}>
                  Mendorong perekonomian dengan mengemas budaya sebagai daya tarik wisata dan ekonomi kreatif</motion.p>
              </div>
            </div>
          </div>
          <div className="">
            <motion.img
              src={`${baseUrl}/assets/3.4.png`}
              alt="Silat"
              className="absolute right-0 md:-right-20 bottom-3 md:bottom-0 z-20 w-[30%]"
              initial={{ opacity: 0, scale: 1, y: 40 }}
              whileInView={{ opacity: 1, scale: 1.25, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`${baseUrl}/assets/3.9.png`}
              alt="Jamu"
              className="absolute  left-[55%] bottom-10 md:bottom-28 z-10 w-[25%] md:w-[25%]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, scale: 1.6, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`${baseUrl}/assets/3.6.png`}
              alt="Orang"
              className="absolute left-[35%] md:left-[35%] bottom-0 z-30 w-[35%] md:w-[40%]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, scale: 1.6, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`${baseUrl}/assets/3.7.png`}
              alt="Gamelan"
              className="absolute bottom-3 md:bottom-0 z-30 left-0  w-full max-w-4xl"
              initial={{ opacity: 0, scale: 1, y: 40 }}
              whileInView={{ opacity: 1, scale: 1.25, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl">
          <img
            src={`${baseUrl}/assets/footer.png`}
            className="mx-auto hidden w-full sm:block invert"
            alt="Footer"
          />
        </div>
      </div>

    </div >
  );
}
