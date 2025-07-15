"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

// Animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export function CustomImageA() {
  return (<div className="relative overflow-clip">
    {/* Animated background gradients */}
    <motion.div
      className="rounded-l-[20rem] h-[50rem] w-[50vw] absolute top-0 right-[-0%] bottom-0 bg-gradient-to-br to-[80%] from-yellow-500 to-red-500"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    ></motion.div>
    <motion.div
      className="rounded-l-[20rem] h-[50rem] w-[70vw] absolute top-[40%] blur-2xl right-[-10%] bottom-0 bg-gradient-to-br from-red-500 to-pink-500"
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
    ></motion.div>
    <motion.div
      className="noise2 backdrop-blur-2xl relative pt-8 md:pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto font-sora">
        <div className="flex gap-2 flex-col md:flex-row items-center justify-between gap-4">
          <motion.div className="flex-1 space-y-2 px-4 lg:px-0" variants={itemVariants}>
            <motion.div
              className="text-[#0149a5] text-4xl sm:text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              PP Tunas
            </motion.div>
            <motion.div
              className="bg-[#2d8ee1] p-1 text-white font-bold text-xl sm:text-3xl md:text-4xl w-fit transition-all duration-300 hover:bg-[#1e6bb8] hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              Apa itu?
            </motion.div>
            <motion.div
              className="text-lg sm:text-xl md:text-2xl text-neutral-700 pb-0 md:pb-2 pt-2 md:pt-4"
              variants={itemVariants}
            >
              Jumat, 28 Maret 2025
            </motion.div>
            <motion.div
              className="text-lg sm:text-xl md:text-2xl font-medium"
              variants={itemVariants}
            >
              Pemerintah meluncurkan Peraturan Pemerintah (PP) Nomor 17 Tahun 2025 tentang Tata Kelola Penyelenggaraan Sistem Elektronik dalam Perlindungan Anak
              (PP Tunas)
            </motion.div>
          </motion.div>
          <motion.div
            className="flex-1 w-full h-full"
            variants={imageVariants}
          >
            <motion.img
              className="object-cover transition-transform duration-500 hover:scale-105"
              src={baseUrl + '/assets/1.1.png'}
              alt="Prabowo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
        <motion.div
          className="relative w-full overflow-hidden p-10"
          variants={itemVariants}
        >
          <motion.div
            className="absolute left-11 top-11 bottom-11 right-11 bg-gradient-to-r from-blue-800 to-blue-600 transform -skew-y-1 scale-110"
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1.1, rotate: -1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          ></motion.div>
          <motion.div
            className="absolute left-12 top-12 bottom-12 right-12 bg-gradient-to-r from-blue-600 to-blue-400 transform skew-y-1 scale-110"
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1.1, rotate: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          ></motion.div>
          <motion.div
            className="relative text-xl md:text-3xl text-center text-white py-6 px-4 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            Bertujuan melindungi anak-anak dari ancaman <br />
            dan risiko bahaya di ruang digital
          </motion.div>
        </motion.div>
        <motion.div className="space-y-8" variants={itemVariants}>
          <motion.div
            className="text-center text-2xl md:text-4xl font-bold pt-6 md:pt-12"
            variants={itemVariants}
          >
            Hal-hal utama dalam PP Tunas:
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row gap-2 md:gap-5"
            variants={containerVariants}
          >
            <motion.div className="flex-1" variants={cardVariants}>
              <motion.div
                className="bg-white rounded-2xl shadow-lg px-10 md:px-12 py-8 m-4 md:m-0 transition-all duration-300 hover:shadow-xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <ul className="list-disc text-lg md:text-xl font-medium space-y-2">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    Klasifikasi tingkat risiko platform digital
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    Pembatasan akses terhadap konten dan platform digital berdasarkan usia
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    Kewajiban platform digital untuk memverifikasi pengguna dan mengedukasi anak serta orang tua untuk berinternet secara aman
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
            <motion.div className="flex-1" variants={cardVariants}>
              <motion.div
                className="bg-white rounded-2xl shadow-lg px-10 md:px-12 py-8 m-4 md:m-0 transition-all duration-300 hover:shadow-xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <ul className="list-disc text-lg md:text-xl font-medium space-y-2">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    Pelibatan orang tua dalam memberi persetujuan terhadap penggunaan platform digital oleh anak
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                  >
                    Larangan profiling anak untuk tujuan komersial
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                  >
                    Sanksi bagi platform digital yang melanggar, mulai dari teguran hingga denda
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="-mt-10"
          variants={imageVariants}
        >
          <motion.img
            src={baseUrl + "/assets/1.2.png"}
            alt="3d Childs"
            className="transition-transform duration-500 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="-mt-10 lg:-mt-20"
          variants={imageVariants}
        >
          <motion.img
            src={baseUrl + "/assets/footer.png"}
            alt="Footer"
            className="invert transition-transform duration-500 hover:scale-105"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  </div>
  );
}
