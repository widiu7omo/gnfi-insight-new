import { motion, Variants } from "motion/react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  }),
};

const items = [
  {
    img: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/1.4.png`,
    alt: "Artefak",
    text: "Artefak yang diyakini sebagai alat tumpu jamu seperti cobek dan ulekan di situs arkeologi Liyangan",
    imgClass: "w-36",
  },
  {
    img: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/1.5.png`,
    alt: "Relief",
    text: "Relief di candi seperti Candi Rimbi dan Candi Surowono yang merekam pemanfaatan jamu",
    imgClass: "w-24",
  },
];


export function CustomImageA() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="bg-[#F5FAE1] w-full pt-20 pb-6 md:pt-24 md:pb-32 relative">
        <div className="relative flex md:flex-row flex-col mx-auto max-w-4xl lg:px-0 md:px-8 px-4 ">
          <div className="z-0 w-full md:w-1/2">
            <motion.h2
              className="font-sora text-[#8C1007] font-bold text-[32px] md:text-[46px] mb-5 md:mb-10 md:leading-[3.5rem]"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 60,
                damping: 10,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              Jamu di Indonesia, <br /> Ada Sejak Kapan?
            </motion.h2>
            <motion.img
              src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/1.2.png`}
              alt="Jamu"
              className="h-auto w-full rounded-t-3xl"
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className="bg-[#4F200D] rounded-b-3xl text-white p-5 md:p-6">
              <motion.p
                className="text-2xl md:text-[34px] font-semibold text-white font-sora leading-[1.2] md:leading-[2.5rem] mb-6"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Ada catatan <br className="hidden md:block" />
                mengenai keberadaan jamu pada abad ke-13
              </motion.p>

              <motion.p
                className="text-2xl lg:text-3xl font-normal text-[#E6CFA9] font-sora"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Dalam Prasasti Madhawapura, terkuak juga ada profesi peracik jamu
                pada era Majapahit yang disebut "Acaraki"
              </motion.p>

            </div>
          </div>
          <div className="z-10 w-full md:w-1/2">
            <motion.img
              src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/1.1.png`}
              alt="Jamu"
              className="md:hidden h-auto w-full rounded-3xl md:w-full md:h-full object-contain -mt-4"
              style={{ scaleX: -1 }}
              initial={{ scale: 0, rotate: -15, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "backOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/1.1.png`}
              alt="Jamu"
              className="
      hidden md:block h-auto rounded-3xl object-contain
      md:absolute lg:-right-4 mt-0 md:mt-[10%] md:-right-12
    "
              style={{ scaleX: -1, scale: 0.8 }}
              initial={{ scale: 0, rotate: -15, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "backOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#8C1007] w-full pb-6 md:pb-24 pt-0 relative">
        <div className="mx-auto max-w-4xl lg:px-0 md:px-8 px-4">
          <div className="z-20 relative bg-[#E6CFA9] rounded-3xl p-6 md:pl-10 md:pt-8 pr-[8rem] md:pr-[20rem] mb-10 -mt-20">
            <motion.p
              className="text-[#4F200D] font-sora text-lg md:text-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Eksistensi jamu juga tercatat dalam Serat Centhini yang ditulis oleh
              Kanjeng Gusti Pangeran Adipati Anom pada 1814
            </motion.p>

            <motion.img
              src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/1.3.png`}
              alt="Serat Centhini"
              className="z-30 h-auto w-48 md:w-[28rem] rounded-3xl absolute bottom-0 md:-bottom-20 -right-8 md:-right-24"
              initial={{ opacity: 0, scale: 0.7, rotate: -5, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.68, -0.55, 0.27, 1.55],
                delay: 0.2
              }}
              viewport={{ once: true }}
            />
          </div>
          <motion.p
            className="text-white md:text-xl text-lg px-4 md:px-12 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Selain itu, dalam kitab kuno Serat Centhini yang ditulis pada awal abad ke-19,
            terdapat berbagai resep jamu tradisional yang mencerminkan pengetahuan mendalam
            tentang tanaman obat dan cara penggunaannya untuk menjaga kesehatan.
          </motion.p>

          <motion.p
            className="text-white md:text-xl text-lg px-4 md:px-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            Sementara itu, Serat Kawruh yang ditulis pada 1858 membahas resep obat-obatan
            tradisional pada masa lalu
          </motion.p> </div>
      </div>

      <div className="bg-[#4F200D] w-full py-20 md:py-24 relative">
        <div className="mx-auto max-w-4xl lg:px-12 md:px-8 px-4">
          <motion.h3
            className="font-semibold text-3xl text-[#FCC61D] text-center"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 120,
              damping: 10,
            }}
            viewport={{ once: true }}
          >
            Peninggalan keberadaan jamu pada masa lalu:
          </motion.h3>

          <div className="flex flex-col md:flex-row mt-10 gap-8 md:gap-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="w-full md:w-1/2 text-center px-4 md:px-14"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <motion.img
                  src={item.img}
                  alt={item.alt}
                  className={`h-auto ${item.imgClass} rounded-3xl mb-4 mx-auto`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: i * 0.3,
                  }}
                  viewport={{ once: true }}
                />
                <p className="text-white font-sora text-lg md:text-xl">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
