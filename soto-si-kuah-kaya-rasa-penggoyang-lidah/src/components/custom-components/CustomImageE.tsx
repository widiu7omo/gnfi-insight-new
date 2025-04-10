"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

const DATA = [
  {
    img: `${baseUrl}/assets/5.2.png`,
    desc: "Disajikan di Konferensi Asia Afrika (KAA) 1995",
  },
  {
    img: `${baseUrl}/assets/5.3.png`,
    desc: "Dipromosikan lewat program Indonesia Spice Up the World (ISUTW)",
  },
  {
    img: `${baseUrl}/assets/5.4.png`,
    desc: "Penjualnya ada di sejumlah kota besar dunia, mulai dari London hingga Amsterdam",
  },
  {
    img: `${baseUrl}/assets/5.5.png`,
    desc: 'Soto Betawi masuk "10 Makanan Berkuah Terbaik di Dunia" versi TasteAtlas',
  },
  {
    img: `${baseUrl}/assets/5.6.png`,
    desc: 'Soto Ayam masuk "20 Sup Terbaik di Dunia" versi CNN Travel',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

export function CustomImageE() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pt-6 md:pt-12 lg:pb-0"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.5.png)` }}
      >
        <div className="absolute left-0 right-0 top-0 z-10 flex justify-center">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={`${baseUrl}/assets/5.1.png`}
            alt="Soto Background"
            className="min-h-[20rem] w-full object-cover md:h-full lg:max-h-[80%] lg:w-auto"
          />
        </div>
        <div className="relative z-20 mx-auto w-full justify-center px-4 md:max-w-4xl lg:px-0">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-2 text-center font-sora text-3xl font-bold text-white md:text-5xl lg:mb-4 lg:text-6xl"
          >
            Soto di Mata Dunia
          </motion.h3>
          <motion.h4
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 text-center font-sora text-xl font-semibold text-white md:text-2xl lg:mb-4 lg:text-3xl"
          >
            Bukan Cuma Orang Indonesia yang Suka Soto Ayam!
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-2 mt-10 text-center font-sora text-xl text-white md:text-2xl lg:mb-4 lg:text-3xl"
          >
            Beberapa Jejak Soto di Kancah Dunia
          </motion.p>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
                {DATA.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex h-full flex-col bg-[#8F4C1F] p-2 pb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariant}
                    custom={index}
                  >
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        src={item.img}
                        alt={`Gambar ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-sera mt-4 px-0 text-center text-lg font-medium leading-relaxed text-white md:px-6 md:text-2xl">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-row md:mt-2">
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                {DATA.slice(3, 5).map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex h-full flex-col bg-[#8F4C1F] p-2 pb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariant}
                    custom={index}
                  >
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        src={item.img}
                        alt={`Gambar ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-sera mt-4 px-0 text-center text-lg font-medium leading-relaxed text-white md:px-10 md:text-2xl">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="my-8 text-center font-sora text-xl font-bold text-[#2F2F2F] md:my-16 md:text-2xl lg:mb-4 lg:text-4xl"
          >
            Kata figur publik internasional tentang Soto:
          </motion.p>
          <div className="mb-4 space-y-4 md:mb-8 lg:mt-28">
            <div className="relative flex w-full rounded-xl bg-[#2F2F2F] py-4 md:pr-[10%]">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/5.7.png`}
                alt="Sarah Carter"
                className="absolute bottom-1 left-[1%] z-30 max-h-[50%] w-auto object-contain sm:bottom-[5%] sm:max-h-[90%] md:bottom-3 md:bottom-[7%] md:left-1 md:left-3 md:h-auto md:max-h-none md:w-[24%]"
              />
              <div className="relative ml-[30%] flex h-full flex-col justify-center lg:ml-[40%]">
                <motion.p
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mb-2 ml-2 text-left font-sora text-lg font-semibold text-white md:text-xl md:font-bold lg:text-2xl"
                >
                  Saya sangat suka soto ayam, rasanya enak sekali. I do really
                  love this food,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mb-2 mt-8 text-left font-sora text-base text-white md:text-lg lg:text-xl"
                >
                  Selebriti Hollywood, <br />
                  <span className="text-[#FF521F]">
                    Sarah Carter<span className="text-white">, via Antara</span>
                  </span>
                </motion.p>
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`${baseUrl}/assets/5.8.png`}
                  alt="Tanda Petik"
                  className="absolute -left-[20%] -top-[20%] z-20 w-[20%] object-contain sm:-left-[20%] sm:-top-[25%] sm:w-[16%] md:-top-[30%] md:h-auto lg:-left-[25%] lg:-top-[40%] lg:w-[25%]"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 space-y-4 md:mb-8 lg:mt-16">
            <div className="relative flex w-full rounded-xl bg-[#2F2F2F] py-4 md:pr-[10%]">
              <div className="relative mr-[30%] flex h-full flex-col justify-center lg:mr-[40%]">
                <motion.p
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mb-2 ml-4 mr-1 text-left font-sora text-lg font-semibold text-white md:text-xl md:font-bold lg:text-2xl"
                >
                  Saya paling suka soto ayam. Selain itu mungkin nasi goreng.
                  Menurut saya soto ayam dan nasi goreng sangat enak,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mb-2 ml-4 mr-1 mt-8 text-left font-sora text-base text-white md:text-lg lg:text-xl"
                >
                  Pemain asing Persija, <br />
                  <span className="text-[#FF521F]">
                    Ryo Matsumara
                    <span className="text-white">, via persija.id</span>
                  </span>
                </motion.p>
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 50, scale: 0.8, rotate: 180 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`${baseUrl}/assets/5.8.png`}
                  alt="Tanda Petik"
                  className="absolute -right-[20%] -top-[12%] z-20 h-auto w-[20%] object-contain sm:-right-[15%] sm:-top-[20%] sm:w-[16%] md:-right-[15%] md:-top-[20%] lg:-right-[30%] lg:w-[25%]"
                />
              </div>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/5.9.png`}
                alt="Ryo Matsumara"
                className="absolute bottom-1 right-[1%] z-30 max-h-[40%] w-auto object-contain sm:bottom-[5%] sm:max-h-[90%] md:bottom-3 md:bottom-[4%] md:right-3 md:h-auto md:max-h-none md:w-[24%]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-20 w-full justify-center bg-[#741425] bg-cover bg-center pb-28 md:pb-40" />
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
