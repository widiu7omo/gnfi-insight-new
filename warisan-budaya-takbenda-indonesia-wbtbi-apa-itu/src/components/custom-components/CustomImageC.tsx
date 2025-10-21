"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageC() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute h-[10rem] bg-gradient-to-b from-[#f6f0fa] z-20 w-full inset-x-0 top-0"></div>
      <div className="absolute h-[10rem] bg-gradient-to-t from-[#d9dcf2] z-20 w-full inset-x-0 bottom-0"></div>
      <div
        className="relative w-full justify-center bg-cover bg-center pt-16 md:pt-24"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.8.png)` }}
      >
        <div className="relative mx-auto max-w-4xl lg:px-0 px-4">
          <motion.div
            className="md:hidden bg-white px-4 md:px-8 py-4 md:py-6 w-[88%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 className="font-sora text-[#C02220] font-bold text-3xl md:text-[52px] mb-2 lg:mb-6 md:!leading-tight leading-snug">
              Warisan Budaya Takbenda Indonesia Mendunia!
            </motion.h2>
            <motion.p className="font-sora text-[#2A2828] text-base md:text-2xl !leading-relaxed w-full md:w-[76%]">
              Ada sejumlah WBTbI yang telah diakui sebagai Intangible Cultural Heritage (IHC) oleh Organisasi Pendidikan, Keilmuan, dan Kebudayaan PBB (UNESCO)            </motion.p>
          </motion.div>
          <motion.img
            src={`${baseUrl}/assets/3.1.png`}
            alt="reog ponorogo"
            className="relative md:static mx-auto w-[80%] lg:mt-0 md:mt-20 md:pb-20 lg:pb-0 z-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.div
            className="hidden md:block absolute md:-top-24 lg:top-8 left-0 bg-white px-4 md:px-8 py-4 md:py-6 w-[88%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 className="font-sora text-[#C02220] font-bold text-3xl md:text-[52px] mb-2 lg:mb-6 md:!leading-snug leading-snug">
              Warisan Budaya Takbenda Indonesia Mendunia!
            </motion.h2>
            <motion.p className="font-sora text-[#2A2828] text-base md:text-2xl leading-relaxed w-[76%]">
              Ada sejumlah WBTbI yang telah diakui sebagai Intangible Cultural Heritage (IHC) oleh Organisasi Pendidikan, Keilmuan, dan Kebudayaan PBB (UNESCO)            </motion.p>
          </motion.div>
          <motion.img
            src={`${baseUrl}/assets/3.2.png`}
            alt="penari"
            className="hidden md:block absolute top-[20%] right-0 w-[38%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
          <div className="flex absolute bottom-0 items-end">
            <motion.div
              className="hidden md:block bottom-0 left-0 w-[40%] bg-[#EACD86] px-4 md:px-6 py-4 md:py-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.p
                className="font-sora text-[#2A2828] text-base md:text-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Setidaknya terdapat 16 WBTbI yang diakui sebagai IHC UNESCO
              </motion.p>
              <motion.p
                className="font-sora mt-6 text-[#2A2828] text-base md:text-2xl leading-relaxed md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Terbaru, Reog Ponorogo, Kebaya, dan Kolintang, mendapat pengakuan pada Desember 2024 lalu
              </motion.p>
            </motion.div>
            <motion.img
              src={`${baseUrl}/assets/3.2.png`}
              alt="penari"
              className="md:hidden absolute bottom-0 z-40 left-0 w-[30%]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`${baseUrl}/assets/3.3.png`}
              alt="reog ponorogo"
              className="w-[60%] ml-auto md:ml-0 z-30"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        <motion.div
          className="md:hidden bottom-0 left-0 w-full bg-[#EACD86] px-4 md:px-6 py-4 md:py-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="font-sora text-[#2A2828] text-base md:text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Setidaknya terdapat 16 WBTbI yang diakui sebagai IHC UNESCO
          </motion.p>
          <motion.p
            className="font-sora mt-6 text-[#2A2828] text-base md:text-2xl leading-relaxed md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            Terbaru, Reog Ponorogo, Kebaya, dan Kolintang, mendapat pengakuan pada Desember 2024 lalu
          </motion.p>
        </motion.div>
        <div className="relative pt-10 md:py-8 max-w-4xl mx-auto px-4 lg:px-0">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="relative w-full md:w-1/2">
              <motion.img
                src={`${baseUrl}/assets/3.4.png`}
                alt="Silat"
                className="w-[50%] mb-8 md:-mt-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.img
                src={`${baseUrl}/assets/3.5.png`}
                alt="Penari"
                className="hidden md:block absolute top-32 lg:top-20 -right-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, scale: 1.25, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={`${baseUrl}/assets/3.5.png`}
                alt="Penari"
                className="md:hidden absolute top-32 lg:top-20 -right-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={`${baseUrl}/assets/3.6.png`}
                alt="Orang"
                className="hidden md:block absolute md:top-[46%] lg:top-[38%] md:left-0 lg:-left-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, scale: 1.6, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={`${baseUrl}/assets/3.6.png`}
                alt="Orang"
                className="md:hidden absolute bottom-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="w-full mb-4 md:mb-20 pl-0 md:pl-[4rem] z-40">
              <motion.h3 className="font-sora text-[#C02220] font-bold text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-8 md:!leading-[1.2] leading-snug w-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                Mengapa pengakuan internasional atas WBTbI penting?
              </motion.h3>
              <motion.p className="lg:pr-[9rem] font-sora text-[#2A2828] text-base md:text-2xl mb-6 md:mb-8 leading-relaxed w-full"
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
              <motion.p className="lg:pr-[26%] font-sora text-[#2A2828] text-base md:text-2xl mb-6 md:mb-8 leading-relaxed w-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}>
                Mendorong perekonomian dengan mengemas budaya sebagai daya tarik wisata dan ekonomi kreatif</motion.p>
            </div>
          </div>
          <div className="relative pt-10 md:py-8 max-w-4xl mx-auto px-4 lg:px-0">
            <motion.img
              src={`${baseUrl}/assets/3.7.png`}
              alt="Silat"
              className="absolute bottom-3 md:bottom-0 z-20 w-full max-w-4xl"
              initial={{ opacity: 0, scale: 1, y: 40 }}
              whileInView={{ opacity: 1, scale: 1.25, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
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
