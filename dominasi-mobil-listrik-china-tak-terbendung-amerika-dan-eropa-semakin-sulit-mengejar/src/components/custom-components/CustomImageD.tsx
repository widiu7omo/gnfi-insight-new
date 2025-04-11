"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

const SKANDAL = [
  "Beberapa sekolah di Nakhon Ratchasima terdeteksi National Anti-Corruption Commission (NACC) menyajikan menu tak sesuai standar",
  "Pimpinan sekolah di Chon Buri dilaporkan memanipulasi angka jumlah siswa penerima program",
  "Sekolah Ban Tha Mai di Surat Thani menyajikan makanan minim gizi. Pimpinan sekolah lalu dicopot dari jabatannya",
];

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pt-16 md:pt-20 lg:pb-4"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.6.png)` }}
      >
        <div className="absolute bg-gradient-to-b from-[#028d85] top-0 left-0 h-[30%] w-full" />
        <div className="mx-auto flex w-full flex-col items-center px-4 md:max-w-4xl md:flex-row md:items-start lg:px-0 relative z-10">
          <div className="w-full lg:w-2/3">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-12 pb-8 text-left font-sora text-[1.75rem] font-bold leading-[1.2] text-white md:text-[48px] lg:text-[70px]"
            >
              Makan Gratis <br />
              di Thailand yang Ternoda oleh Skandal
            </motion.h3>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/4.1.png`}
              alt="Makan gratis"
              className="relative z-30 -mt-12 h-auto w-full self-end md:-ml-4 md:ml-8"
            />
          </div>
          <div className="z-40 w-full space-y-4 lg:w-1/3 lg:space-y-12">
            <div className="z-20 w-full rounded-xl bg-white p-4 shadow-2xl md:w-[80%] md:p-6">
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-sm text-gray-700 md:text-xl"
              >
                Pada 1992, Pemerintah Thailand meluncurkan pendanaan untuk Thai
                School Lunch Program (Thai SLP)
              </motion.p>
            </div>
            <div className="z-20 w-full rounded-xl bg-white p-4 shadow-2xl md:w-[80%] md:p-6">
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-sm text-gray-700 md:text-xl"
              >
                Awalnya, setiap siswa menerima subsidi makanan 5 baht perhari
                selama 200 hari dalam setahun, lalu pada 2021 dinaikkan menjadi
                21 baht
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative w-full justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.2.png)` }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-x-0 px-4 md:flex-row md:space-x-12 md:px-0">
          <div className="relative flex h-[200px] w-full self-start md:h-[250px] md:w-1/2">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/4.3.png`}
              alt="Makan gratis"
              className="z-30 ml-0 mt-2 h-[70%] w-auto md:-ml-12 md:mt-0 md:h-full md:w-auto"
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/4.4.png`}
              alt="Makan gratis"
              className="absolute left-[50%] top-2 z-30 h-auto w-1/2 md:top-4"
            />
          </div>
          <div className="flex w-full py-6 md:w-1/2 md:py-0">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg leading-normal text-[#FFB433] md:text-[28px]"
            >
              Sekolah bertanggungjawab atas pelaksanaan Thai SLP untuk siswa
              taman kanak-kanak hingga kelas 6
            </motion.p>
          </div>
        </div>
      </div>
      <div
        className="relative w-full justify-center bg-cover bg-center pb-0 pt-16 md:pt-20"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.5.jpg)` }}
      >
        <div className="mx-auto px-4 md:max-w-4xl lg:px-0 relative z-10">
          <div className="flex w-full flex-col items-center space-x-0 md:flex-row md:space-x-4 lg:space-x-8">
            <div className="flex h-full w-full flex-grow flex-col pb-20 md:pb-0 lg:w-4/5">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-8 text-left font-sora text-[1.75rem] font-bold leading-[1.2] text-[#009990] md:mb-12 md:text-[48px] lg:text-[70px]"
              >
                Skandal yang <br />
                menodai Thai SLP pada 2019:
              </motion.h3>
              <motion.div
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.55,
                    },
                  },
                }}
              >
                {SKANDAL.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -40, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: { duration: 0.8, ease: "backOut" },
                      },
                    }}
                    className="flex space-x-2"
                  >
                    <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-[#009990] align-baseline" />
                    <p className="text-left font-sora text-lg text-[#2A3335] md:text-2xl">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="h-full w-full md:w-2/5">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/4.6.png`}
                alt="Makan gratis"
                className="z-50 h-full w-full object-cover"
              />
            </div>
          </div>
          <img
            src={`${baseUrl}/assets/footer.png`}
            className="mx-auto hidden w-full sm:block invert"
          />
        </div>
        <div className="absolute bg-gradient-to-t from-white bottom-0 left-0 h-[30%] w-full z-0" />
      </div>
    </div>
  );
}
