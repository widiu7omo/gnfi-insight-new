import { motion } from "motion/react";

const checklistItemsAvi = [
  "Pastikan penyelenggaranya terpercaya",
  "Upayakan pilih yang jalurnya steril",
  "Lokasi yang dekat dengan tempat tinggal jadi nilai plus",
  "Minta rekomendasi dari pelari berpengalaman",
  "Pilih kategori jarak yang sesuai dengan kemampuan fisik",
];

const checklistItemsRully = [
  "Persiapkan fisik dan mental",
  "Bekali diri dengan latihan tambahan",
  "Jaga kesehatan agar tetap fit",
];

export function CustomImageE() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative flex h-full w-full flex-col justify-center bg-cover bg-no-repeat pb-4 text-center md:pb-20"
        style={{ backgroundImage: `url(/assets/derap-tren-olahraga-lari-masa-kini/5.1.png)` }}
      >
        <div className="relative z-10 mx-auto mb-auto flex w-full max-w-4xl flex-row px-4 lg:px-0">
          <div className="z-10 hidden w-1/2 pt-12 md:block md:pt-32">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 mb-2 w-full text-left font-sora text-3xl font-bold text-white md:text-6xl"
            >
              Tips Ikut
            </motion.h3>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="relative z-10 mb-6 w-full text-left font-sora text-3xl font-bold text-white md:mb-8 md:text-6xl"
            >
              Event Lari
            </motion.h3>
            <motion.div className="text-left font-sora text-white">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-2xl font-bold md:text-4xl"
              >
                Ala Avi Rudianita
              </motion.p>

              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="mb-8 text-lg md:text-xl"
              >
                (Pegiat lari komunitas <br />
                ASN Runners & BPS Runners)
              </motion.p>
            </motion.div>

            <motion.div className="space-y-4">
              {checklistItemsAvi.map((item, index) => (
                <motion.div
                  key={index}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  className="flex space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 shrink-0 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 14-4-4 1.414-1.414L11 13.172l4.586-4.586L17 10Z" />
                  </svg>
                  <p className="text-left font-sora text-xl text-white md:text-2xl">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`/assets/derap-tren-olahraga-lari-masa-kini/5.2.png`}
            alt="Lari"
            className="absolute -right-[20%] z-0 mb-auto hidden h-auto w-[80%] object-cover md:block"
          />
          <div className="relative pt-12 md:hidden md:pt-0">
            <div className="relative z-20 w-full">
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.6 }}
                className="relative z-10 mb-2 w-full text-left font-sora text-3xl font-bold text-white md:text-6xl"
              >
                Tips Ikut
              </motion.h3>
              <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.6 }}
                className="relative z-10 mb-6 w-full text-left font-sora text-3xl font-bold text-white md:mb-8 md:text-6xl"
              >
                Event Lari
              </motion.h3>
              <motion.div className="text-left font-sora text-white">
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-2xl font-bold md:text-4xl"
                >
                  Ala Avi Rudianita
                </motion.p>

                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="mb-8 text-lg md:text-xl"
                >
                  (Pegiat lari komunitas <br />
                  ASN Runners & BPS Runners)
                </motion.p>
              </motion.div>
            </div>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`/assets/derap-tren-olahraga-lari-masa-kini/5.2.png`}
              alt="Lari"
              className="absolute -right-[50%] top-0 -z-10 w-full"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="z-20 flex w-full max-w-4xl flex-col space-y-4 px-4 pb-20 md:hidden"
            >
              {checklistItemsAvi.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="flex space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 shrink-0 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 14-4-4 1.414-1.414L11 13.172l4.586-4.586L17 10Z" />
                  </svg>
                  <p className="text-left font-sora text-xl text-white md:text-2xl">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="flex w-full items-center bg-cover bg-no-repeat object-cover"
        style={{ backgroundImage: `url(/assets/derap-tren-olahraga-lari-masa-kini/5.3.png)` }}
      >
        <div className="relative z-10 mx-auto flex w-full max-w-4xl items-center px-4 lg:px-0">
          <div className="z-10 w-1/2 pb-[60%] pt-20 md:pr-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="mb-8 space-y-2"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="text-left mb-16 sm:mb-0 font-sora text-2xl font-bold text-white md:text-4xl"
              >
                Ala Rully Eko
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                  },
                }}
                className="text-left absolute left-4 top-26 sm:static font-sora text-lg text-white md:text-xl"
              >
                (Ranger Indorunners Surabaya)
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="space-y-4"
            >
              {checklistItemsRully.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="flex space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 shrink-0 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 14-4-4 1.414-1.414L11 13.172l4.586-4.586L17 10Z" />
                  </svg>
                  <p className="text-left font-sora text-xl text-white md:text-2xl">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="absolute bottom-16 right-0 z-10 w-1/2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`/assets/derap-tren-olahraga-lari-masa-kini/5.4.png`}
              alt="Lari"
              className="mb-20 h-auto w-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="absolute -bottom-[6%] right-4 z-20 text-sm text-white md:-bottom-[4%] md:right-[10%] md:text-lg lg:-right-12 lg:bottom-32"
            >
              @rullyeardianto / <br />
              Instagram
            </motion.p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-[#232a38] h-[20%]"></div>
    </div>
  );
}
