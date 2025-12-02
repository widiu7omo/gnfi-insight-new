import { motion } from "motion/react";

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-[#E6E6E6]">
      <div
        className="relative w-full justify-center bg-[#E6E6E6] pb-0 pt-10 md:pt-20"
      >
        <div className="flex mx-auto max-w-4xl lg:px-0 px-4 items-center mb-20 md:mb-28 relative">
          <div className="w-[60%]">
            <motion.h2
              className="w-full font-sora text-[#151515] font-bold text-3xl md:text-[52px] mb-8 lg:mb-10 leading-snug!"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Melestarikan WBTbI <br />Tak Mudah, <br />tapi Ada Jalan!          </motion.h2>
            <motion.p className="font-sora text-[#151515] text-base md:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}>
              Upaya melestarikan WBTbI dihadapkan tantangan. Kendati demikian, ada pula strategi yang ditempuh pemerintah untuk mengatasinya          </motion.p>
          </div>
          <div className="w-[60%] md:w-1/2">
            <motion.img
              src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.1.png`}
              alt="Nari"
              className="w-[80%] lg:w-[40%] xl:w-[40%] mx-auto object-left lg:absolute right-12 top-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.3.png`}
              alt="Tangan"
              className="w-[80%] md:w-[70%] absolute z-0 right-0 -bottom-20 lg:-bottom-28"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.1.1.png`}
              alt="Kue"
              className="w-[90%] lg:w-[40%] xl:w-[35%] mx-auto -mt-0 md:-mt-[60%] lg:-mt-72 relative lg:absolute z-10 bottom-0 right-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            />

          </div>
        </div>
      </div>
      <div
        className="relative w-full justify-center bg-[#534A45] rounded-t-[2rem] lg:rounded-t-[8rem]"
      >
        <div className="max-w-4xl mx-auto lg:px-0 px-4 items-center pt-16 md:pt-14 pb-20 md:pb-32">
          <motion.img
            src={'/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.4.png'}
            alt="tahu"
            className="z-10 -mt-[22%] md:-mt-[14%] lg:-mt-[10%] ml-[8%] md:ml-[4%] lg:ml-[8%] w-[20%] md:w-[20%]"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
          />
          <motion.p className="font-semibold -mt-[10%] relative mx-auto text-white w-full lg:w-[55%] lg:px-0 md:px-8 px-4 text-center font-sora text-2xl md:text-5xl lg:text-[52px] leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}>
            Tantangan
          </motion.p>
          <div className="space-y-2 px-4 md:px-28 mt-4 md:mt-10 lg:mt-16">
            <motion.div
              className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <img
                src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.5.png`}
                alt="Tantangan 1"
                className="w-5 md:w-6 inline-block mr-2 md:mr-4 flex-shrink-0"
              />
              <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                Terbatasnya dokumentasi yang komprehensif
              </p>
            </motion.div>

            <motion.div
              className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.3,
              }}
              viewport={{ once: true }}
            >
              <motion.img
                src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.6.png`}
                alt="Tantangan 2"
                className="w-4 md:w-6 inline-block mr-2 md:mr-4 flex-shrink-0"
              />
              <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                Menurunnya minat generasi muda
              </p>
            </motion.div>
            <motion.div
              className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.4,
              }}
              viewport={{ once: true }}
            >
              <motion.img
                src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.7.png`}
                alt="Tantangan 3"
                className="w-5 md:w-7 inline-block mr-2 md:mr-4 flex-shrink-0"
              />
              <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                Komodifikasi budaya yang tidak terkontrol
              </p>
            </motion.div>
            <motion.div
              className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.5,
              }}
              viewport={{ once: true }}
            >
              <motion.img
                src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.8.png`}
                alt="Tantangan 4"
                className="w-3 md:w-4 inline-block mr-2 md:mr-4"
              />
              <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                Keterbatasan sumber daya
              </p>
            </motion.div>
            <motion.div
              className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.6,
              }}
              viewport={{ once: true }}
            >
              <motion.img
                src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.9.png`}
                alt="Tantangan 5"
                className="w-4 md:w-6 inline-block mr-2 md:mr-4 flex-shrink-0"
              />
              <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                Perubahan iklim yang mengubah pola alam tempat lahirnya tradisi
              </p>
            </motion.div>
            <motion.div
              className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.7,
              }}
              viewport={{ once: true }}
            >
              <motion.img
                src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.10.png`}
                alt="Tantangan 6"
                className="w-4 md:w-6 inline-block mr-2 md:mr-4"
              />
              <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                Urbanisasi
              </p>
            </motion.div>
            <motion.div
              className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.8,
              }}
              viewport={{ once: true }}
            >
              <motion.img
                src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.11.png`}
                alt="Tantangan 6"
                className="w-4 md:w-6 inline-block mr-2 md:mr-4 flex-shrink-0"
              />
              <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                Klaim sepihak atas hak kekayaan intelektual komunal
              </p>
            </motion.div>
          </div>
        </div>
        <div
          className="relative w-full justify-center bg-black rounded-t-[2rem] lg:rounded-t-[8rem]"
        >
          <div className="max-w-4xl mx-auto lg:px-0 px-4 items-center pt-16 md:pt-14 pb-20 md:pb-32 relative">
            <motion.p className="z-0 font-semibold -ml-8 md:-ml-12 lg:ml-0 sm:-ml-0 lg:pl-20 relative mx-auto text-center md:text-center lg:text-left text-white w-full font-sora text-2xl md:text-5xl lg:text-[52px] leading-relaxed -mt-[10%] md:mt-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}>
              Strategi Pemerintah
            </motion.p>
            <motion.img
              src={'/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.1.2.png'}
              alt="panah"
              className="z-30 -mt-[28%] absolute w-[25%] right-0"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
            />
            <div className="space-y-2 px-4 md:px-28 mt-8 md:mt-10 lg:mt-8">
              <motion.div className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.2,
                }}
                viewport={{ once: true }}>
                <motion.img
                  src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.13.png`}
                  alt="Strategi 1"
                  className="w-5 md:w-6 inline-block mr-2 md:mr-4 flex-shrink-0"
                />
                <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                  Memperkuat basis data nasional WBTbI secara digital
                </p>
              </motion.div>
              <motion.div className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.3,
                }}
                viewport={{ once: true }}>                <motion.img
                  src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.14.png`}
                  alt="Strategi 2"
                  className="w-5 md:w-7 inline-block mr-2 md:mr-4 flex-shrink-0 mt-[2px]"
                />
                <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                  Regenerasi berbasis komunitas dan pendidikan budaya                </p>
              </motion.div>
              <motion.div className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.4,
                }}
                viewport={{ once: true }}>                <motion.img
                  src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.15.png`}
                  alt="Strategi 3"
                  className="w-5 md:w-7 inline-block mr-2 md:mr-4 flex-shrink-0 mt-[2px]"
                />
                <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                  Sinergi dengan sektor pariwisata dan ekonomi kreatif                </p>
              </motion.div>
              <motion.div className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}>                <motion.img
                  src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.16.png`}
                  alt="Strategi 4"
                  className="w-5 md:w-7 inline-block mr-2 md:mr-4 flex-shrink-0 mt-1"
                />
                <p className="font-sora text-white text-sm md:text-xl leading-relaxed"
                >
                  Menempatkan komunitas sebagai aktor utama                </p>
              </motion.div>
              <motion.div className="flex items-start border-2 border-white rounded-full px-4 md:px-8 py-1 md:py-1"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.6,
                }}
                viewport={{ once: true }}>
                <motion.img
                  src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/4.17.png`}
                  alt="Strategi 5"
                  className="w-4 md:w-6 inline-block mr-2 md:mr-4 flex-shrink-0 mt-[2px]"
                />
                <p className="font-sora text-white text-sm md:text-xl leading-relaxed">
                  Memperluas pengakuan internasional bagi WBTbI
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl">
          <img
            src={`/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/footer.png`}
            className="mx-auto hidden w-full sm:block"
            alt="Footer"
          />
        </div>
      </div>

    </div >
  );
}
