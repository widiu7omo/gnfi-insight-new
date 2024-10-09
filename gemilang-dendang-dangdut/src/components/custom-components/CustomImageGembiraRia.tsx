"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageGembiraRia() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="mx-auto w-full">
      <div
        className="relative h-[150vh] w-full"
        style={{ paddingBottom: "177.78%" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${baseUrl}/assets/5.0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-between overflow-y-auto p-4 text-white">
            <motion.div
              className="mx-auto flex max-w-4xl flex-grow flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerChildren}
            >
              <motion.h1
                className="text-center text-3xl font-black sm:text-4xl md:text-5xl lg:text-7xl"
                variants={fadeInUp}
              >
                Gembira Ria Dangdut di Masyarakat
              </motion.h1>
              <motion.p
                className="text-center text-base font-light sm:text-lg md:text-xl lg:text-3xl"
                variants={fadeInUp}
              >
                Sinisme terhadap dangdut tidak membuat para musisinya seret
                prestasi. Buktinya pada 1990-an, beberapa musisi dangdut pernah
                mencatatkan namanya di dunia internasional.
              </motion.p>
              <motion.div
                className="flex flex-col items-center justify-center space-y-2"
                variants={fadeInUp}
              >
                <p className="w-fit bg-purple-700 px-2 text-base font-semibold sm:text-lg md:text-xl lg:text-3xl">
                  Itu artinya musik dangdut diterima
                </p>
                <p className="w-fit bg-purple-700 px-2 text-base font-semibold sm:text-lg md:text-xl lg:text-3xl">
                  masyarakat di luar Indonesia.
                </p>
              </motion.div>
              <motion.p
                className="text-center text-lg sm:text-xl md:text-2xl lg:text-4xl"
                variants={fadeInUp}
              >
                Ratu dangdut, Elvy Sukaesih adalah salah satu contoh yang
                membawa dangdut menggoyang Jepang.
              </motion.p>
              <motion.div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
                variants={fadeInUp}
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-2xl">
                  Pada 1992, ia diminta menyanyikan lagu Jepang, "Koi no Fuga"
                  karya Rei Nakanishi. Namun, tidak dengan bahasa Jepang,
                  melainkan dengan bahasa Indonesia.
                </p>
                <div className="space-y-4 bg-purple-700 p-4">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Lirik versi bahasa Indonesia dari Rudy Anand pun tercipta
                    yakni "Jangan Kau Pergi". Lagu itu dibawakan dengan cengkok
                    dangdut dan direkam dalam bentuk compact disc (CD) dan
                    dipasarkan di Jepang.
                  </p>
                  <motion.img
                    src={`${baseUrl}/assets/5.1.png`}
                    alt="Album cover"
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
              src={`${baseUrl}/assets/footer.png`}
              alt="footer"
              className="mt-8 w-full"
            />
          </div>
          <motion.img
            src={`${baseUrl}/assets/5.2.png`}
            alt="TV"
            className="md:bottom-30 md:left-30 absolute bottom-10 left-10 w-1/2 sm:bottom-20 sm:left-20 lg:bottom-40 lg:left-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
}
