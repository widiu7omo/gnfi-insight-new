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
    img: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.5.png`,
    alt: "China",
    text: "China",
    jumlah: "48.027,9 ton",
  },
  {
    img: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.6.png`,
    alt: "India",
    text: "India",
    jumlah: "24.466,6 ton",
  },
  {
    img: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.7.png`,
    alt: "Bangladesh",
    text: "Bangladesh",
    jumlah: "21.270,6 ton",
  },
  {
    img: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.8.png`,
    alt: "Pakistan",
    text: "Pakistan",
    jumlah: "16.028,5 ton",
  },
  {
    img: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.9.png`,
    alt: "Vietnam",
    text: "Vietnam",
    jumlah: "12.062,4 ton",
  },
];

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute w-full z-10 h-[10rem] inset-0 bg-gradient-to-b from-[#2b0503]"></div>
      <div
        className="relative w-full justify-center bg-cover bg-center pt-16 md:pt-24"
        style={{ backgroundImage: `url(/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.1.png)` }}
      >
        <motion.img
          src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.10.png`}
          alt="Jamu"
          className="absolute -left-[10%] top-[4%] md:left-0 md:top-4 w-[40%] md:w-1/3 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
        />
        <div className="z-20 relative mx-auto max-w-4xl lg:px-0 md:px-8 px-4">
          <motion.h2
            className="pl-[30%] w-full font-sora text-[#FFC800] font-bold text-3xl md:text-5xl lg:text-7xl mb-8 md:mb-16 lg:mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Jamu Indonesia Dikenal Dunia
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="z-20 pl-0 lg:pl-[30%] text-xl md:text-4xl font-black text-white mb-4"
          >
            Diakui UNESCO sebagai Warisan Budaya Takbenda (WBTb) Dunia
          </motion.h3>
        </div>
        <div className="relative w-full z-20 justify-center bg-[#E4DAC1] pt-16 md:pt-24 pb-12 md:pb-[8rem] xl:pb-24 rounded-t-full mt-[20%]">
          <div className="z-20 space-y-10 md:space-y-24 pb-10 md:pb-10 -mt-[20%]">
            <div className="z-1 flex md:flex-row flex-col relative mx-auto max-w-4xl md:px-6 px-4 space-x-0 space-y-8 md:space-y-0 md:space-x-4 pt-1 md:pt-12">
              <div className="w-full md:w-1/2 flex flex-col md:flex-row relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative w-full flex md:flex-col flex-row text-left text-white bg-[#8A0000] rounded-3xl px-4 md:px-8 md:pb-4 py-8 md:py-0"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mt-[20%] md:mt-[40%] text-white text-lg md:text-2xl"
                  >
                    Jamu dianggap punya nilai budaya yang membangun koneksi antara manusia dengan alam
                  </motion.p>
                  <motion.img
                    src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.2.png`}
                    alt="Overlay"
                    initial={{ scale: 0, rotate: -15, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-0 -top-[10%] md:-top-8 md:-left-8 w-[50%] h-auto md:h-36 md:w-auto object-contain"
                  />
                </motion.div>
              </div>
              <div className="flex w-full md:w-1/2 text-center">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative w-full flex md:flex-col flex-row justify-center text-left text-white bg-[#8A0000] rounded-3xl pl-4 pr-6 lg:pr-20 md:pr-20 py-8 md:py-12"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mt-0 md:mt-8 text-white text-lg md:text-2xl pr-[50%] md:pr-0"
                  >
                    Manfaat jamu bagi kesehatan dipandang selaras dengan tujuan pembangunan berkelanjutan atau Suistanable Development Goals (SDG's)                </motion.p>
                  <motion.img
                    src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.3.png`}
                    alt="Overlay"
                    initial={{ scale: 0, rotate: -15, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: -20, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ scaleX: -1 }}
                    className="absolute -top-2 -right-[4%] md:-right-14 w-[50%] h-48 md:h-40 lg:h-48 md:w-auto object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl lg:px-12 md:px-8 px-4 ">
            <motion.h3
              className="font-semibold text-3xl text-[#3E0501] text-center"
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
              Jadi sumber pendapatan negara
            </motion.h3>
            <div className="flex flex-col md:flex-row mt-10 gap-2 md:gap-4 items-center justify-center">
              <div className="w-full md:w-[60%] text-center px-4 md:px-0">
                <motion.img
                  src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/4.4.png`}
                  alt="Ekspor Jamu"
                  className={`h-auto w-full rounded-3xl mb-4 mx-auto`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                />
              </div>
              <motion.p
                className="w-full md:w-[40%] text-[#3E0501] font-sora text-lg md:text-xl text-center md:text-left"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                viewport={{ once: true }}
              >
                Indonesia mengekspor tanaman obat, aromatik, dan rempah yang merupakan bahan baku jamu
              </motion.p>
            </div>
            <motion.h3
              className="font-normal text-xl md:text-2xl text-[#201D1D] text-center md:mt-0 mt-4"
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
              Negara tujuan ekspor utama <br />(berdasarkan volume ekspor per 2024):
            </motion.h3>
            <div className="mt-10">
              <div className="flex flex-row justify-between flex-wrap">
                {items.slice(0, 3).map((item, i) => (
                  <motion.div
                    key={i}
                    className="w-1/3 text-center px-0"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                  >
                    <motion.img
                      src={item.img}
                      alt={item.alt}
                      className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full border-2 border-white mb-4 mx-auto"
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
                    <p className="text-[#201D1D] font-sora text-base md:text-xl">{item.text}</p>
                    <p className="text-[#201D1D] font-bold font-sora text-base md:text-xl">{item.jumlah}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-row justify-center mt-10">
                {items.slice(3, 5).map((item, i) => (
                  <motion.div
                    key={i}
                    className="w-1/3 text-center mx-5"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 3}
                  >
                    <motion.img
                      src={item.img}
                      alt={item.alt}
                      className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full border-2 border-white mb-4 mx-auto"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: (i + 3) * 0.3,
                      }}
                      viewport={{ once: true }}
                    />
                    <p className="text-[#201D1D] font-sora text-base md:text-xl">{item.text}</p>
                    <p className="text-[#201D1D] font-bold font-sora text-base md:text-xl">{item.jumlah}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/footer.png`}
          className="z-50 mx-auto hidden w-full invert sm:block"
        />
      </div>
    </div>
  );
}
