import { motion, Variants } from "motion/react";

const container: Variants = {
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

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CustomImageA() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute h-40 inset-x-0 bg-linear-to-t z-20 from-[#e3dfdf] bottom-0"></div>
      <div
        className="relative w-full justify-center bg-cover bg-position-[center_top_15%] pt-16 md:pt-24"
        style={{ backgroundImage: `url(/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.1.png)` }}
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
          className="relative mx-auto -mb-14 md:-mb-32 z-10 w-full max-w-4xl flex flex-col items-center px-6 md:px-12 py-6 md:py-10 rounded-3xl">
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <motion.ul className="w-full list-none space-y-4 md:-space-y-8" variants={container}>
              <motion.li className="relative z-3 text-base md:text-xl h-fit font-normal font-sora text-white overflow-clip rounded-b-3xl md:rounded-b-none rounded-t-3xl bg-[#805d3b]" variants={item}>
                <motion.p variants={item} className="text-xl md:text-3xl text-center font-bold z-10 w-full bg-[#ffebbc] md:top-0 py-2 text-[#2f1731]">Domain</motion.p>
                <div className="w-full flex flex-col md:flex-row items-stretch">
                  <div className="flex-1 relative m-6 md:m-8 md:mb-0">
                    <div className="before:content-[''] before:absolute before:left-0
                                    before:top-[0.15em] before:translate-y-0
                                    md:before:border-t-12 md:before:border-b-12 md:before:border-l-20
                                    before:border-t-[9px] before:border-b-[9px] before:border-l-15
                                    before:border-t-transparent before:border-b-transparent before:border-l-[#ffebba] pl-6 md:pl-8">Tradisi lisan dan ekspresinya, termasuk bahasa sebagai wahana Warisan Budaya Takbenda</div>
                  </div>
                  <div className={`md:w-1/2 w-full h-[200px] md:h-auto bg-center md:bg-position-[center_bottom_30%] md:bg-center bg-cover min-h-0`} style={{ backgroundImage: `url('/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.1.1.jpg')` }} />
                </div>
              </motion.li>
              <motion.li className="relative z-2 text-base md:text-xl h-fit font-normal font-sora text-white rounded-t-3xl md:rounded-t-none rounded-b-3xl overflow-clip bg-[#805d3b]" variants={item}>
                <div className="w-full flex items-stretch relative">
                  <div className="absolute block md:hidden inset-0 bg-linear-to-t md:bg-linear-to-l z-1 from-10% to-80% from-[#944046]" />
                  <div className={`absolute right-0 h-[200px] md:h-full w-full md:w-[50%] bg-cover bg-[center_top_55%] md:bg-[center_top_40%] min-h-0`} style={{ backgroundImage: `url('/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.1.2.jpg')` }} />
                  <div className="flex-1 relative z-2 m-8 mb-6 md:mb-8 md:space-y-10 pr-[0%] md:pr-[50%] pt-28 md:pt-10 md:pb-2">
                    <div className="before:content-[''] before:absolute before:left-[0%]
                                    before:top-[86%] md:before:top-auto before:translate-y-0
                                    md:before:border-t-[12px] md:before:border-b-[12px] md:before:border-l-[20px]
                                    before:border-t-[9px] before:border-b-[9px] before:border-l-[15px]
                                    before:border-t-transparent before:border-b-transparent before:border-l-[#ffebba] pl-6 md:pl-8">
                      Seni Pertunjukan
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li className="relative z-[1] text-base md:text-2xl h-fit font-normal font-sora text-white rounded-3xl overflow-clip bg-[#573310]" variants={item}>
                <div className="w-full flex items-stretch relative">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l z-[1] from-40% to-80% from-[#573310]" />
                  <div className={`absolute left-0 h-full w-full md:w-[60%] bg-cover bg-center min-h-0`} style={{ backgroundImage: `url('/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.1.3.png')` }} />
                  <div className="flex-1 relative z-[2] m-8 space-y-2 md:space-y-10 pl-0 md:pl-[40%] pt-[10rem] md:pt-8">
                    <div className="before:content-[''] before:absolute before:left-[0%] md:before:left-[44%]
                                    before:top-auto before:translate-y-0
                                    md:before:border-t-[12px] md:before:border-b-[12px] md:before:border-l-[20px]
                                    before:border-t-[9px] before:border-b-[9px] before:border-l-[15px]
                                    before:border-t-transparent before:border-b-transparent before:border-l-[#cf4b49] pl-6 md:pl-8">
                      Praktik sosial, ritual, dan perayaan - perayaan
                    </div>
                    <div className="before:content-[''] before:absolute before:left-[0%] md:before:left-[44%]
                                    before:top-auto before:translate-y-0
                                    md:before:border-t-[12px] md:before:border-b-[12px] md:before:border-l-[20px]
                                    before:border-t-[9px] before:border-b-[9px] before:border-l-[15px]
                                    before:border-t-transparent before:border-b-transparent before:border-l-[#cf4b49] pl-6 md:pl-8">
                      Pengetahuan dan kebiasaan perilaku mengenai alam dan semesta;
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li className="relative z-[0] text-base md:text-2xl h-fit font-normal font-sora text-white rounded-3xl overflow-clip bg-[#241b15]" variants={item}>
                <div className="w-full flex items-stretch relative">
                  <div className="absolute inset-0 bg-gradient-to-r z-[1] from-50% to-80% from-[#241b15]" />
                  <div className={`absolute right-0 h-full w-[50%] bg-cover bg-[center_top_25%] min-h-0`} style={{ backgroundImage: `url('/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.1.4.jpg')` }} />
                  <div className="flex-1 relative z-[2] m-8 space-y-10 pr-[50%] py-0 sm:py-6 md:pb-10 md:pt-[4.5rem]">
                    <div className="before:content-[''] before:absolute before:left-0
                                    before:top-auto before:translate-y-0
                                    md:before:border-t-[12px] md:before:border-b-[12px] md:before:border-l-[20px]
                                    before:border-t-[9px] before:border-b-[9px] before:border-l-[15px]
                                    before:border-t-transparent before:border-b-transparent before:border-l-[#ffebba] pl-6 md:pl-8">
                      Kemahiran kerajinan <br /> tradisional.
                    </div>
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
      <div
        className="relative w-full justify-center bg-[#E2DFDF] pb-0 pt-10 md:pt-20"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          src={'/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.1.6.1.png'} alt="Ocean" className="absolute bottom-0 z-40 inset-x-0 object-cover w-full" />
        <div className="flex max-w-4xl flex-col md:flex-row mx-auto pt-8 px-12">

          {/* <div className="bg-[#cd4947] text-white rounded-2xl p-6 text-xl flex-1">
            <div>OPK Terdiri dari:</div>
            <ul className="ml-0.5 font-semibold space-y-3 mt-4 font-sora">
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Tradisi lisan</span>
              </li>
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Manuskrip</span>
              </li>
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Adat istiadat</span>
              </li>
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Ritus</span>
              </li>
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Pengetahuan tradisional</span>
              </li>
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Teknologi tradisional</span>
              </li>
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Seni</span>
              </li>
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Bahasa</span>
              </li>
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Permainan rakyat</span>
              </li>
              <li className="flex items-center">
                <svg className="size-4 inline mr-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#FFD300" strokeWidth="40" />
                </svg>
                <span>Olahraga tradisional</span>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4 pt-0 md:pt-16 lg:pt-20 z-20">
          <div className="top-4 lg:w-[55%] pb-[10rem] lg:pb-0 lg:absolute right-[-10rem]">
            <motion.p className=" font-semibold relative w-full lg:-mr-[20rem] lg:px-0 md:px-8 px-4 text-left font-sora text-[#3E0703] text-xl sm:text-2xl lg:text-3xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}>
              Untuk ditetapkan sebagai WBTbI, suatu OPK harus memenuhi syarat <br className="hidden lg:block" /> dan mengikuti prosedur penetapan
            </motion.p>
            {/* <img src={baseUrl + '/assets/1.1.5.png'} alt="Diagram Venn" className="mt-12 pr-8" /> */}
          </div>
          {[
            { src: `/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.2.png`, alt: 'Silat', className: "relative top-[-8rem] z-40 left-[0rem] lg:left-[-8rem] w-[80%]" },
            { src: `/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.8.png`, alt: 'Gunungan', className: "absolute bottom-0 right-0 lg:right-[0rem] w-[50%]" },
            { src: `/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.7.png`, alt: 'Dance Kids', className: "absolute bottom-[10rem] lg:bottom-[16rem] left-[4rem] w-[60%]" },
            { src: `/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.3.png`, alt: 'Play Angklung', className: "relative bottom-12 left-[-4rem] lg:left-[-8rem] w-[50%] -mt-[55%]" },
            { src: `/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.5.png`, alt: 'Drawing Batik', className: "absolute right-[-10rem] sm:right-[-15rem] xl:right-[-30rem] bottom-0 xl:bottom-12 ml-auto w-[60%] md:w-[60%] xl:w-[80%] -mt-[70%]" },
            { src: `/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.4.png`, alt: 'Jaipong', className: "absolute bottom-[-7rem] md:bottom-[-8rem] lg:bottom-[-13rem] w-[40%] md:w-[35%] lg:w-[45%] left-[15rem] sm:left-[20rem] md:left-[25rem] lg:left-[20rem]" },
            { src: `/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/1.6.png`, alt: 'Jamu', className: "absolute left-[8rem] bottom-0 w-[55%]" },
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt={img.alt}
              className={img.className}
              initial={{ opacity: 0, scale: 0.8, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0, zIndex: i }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: (7 - i) * 0.15,
              }}
              viewport={{ once: true, amount: 0.2 }}
            />
          ))}
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
