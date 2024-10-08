"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageJadiWarisanDunia() {
  return (
    <section id="section-1" className="bg-[#c1bbb5] -mt-1 overflow-clip ">
      <div className="relative flex items-start justify-center overflow-clip flex-col">
        <div
          className="w-full bg-cover bg-no-repeat bg-[center_top] relative"
          style={{ backgroundImage: `url('${baseUrl}/assets/2.0.jpeg')` }}
        >
          <div className="max-w-4xl mx-auto relative z-10 mt-[15rem]">
            <div className="space-y-0">
              <div className="relative flex items-center justify-center z-0">
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  src={`${baseUrl}/assets/2.2.png`}
                  alt="Paper Torn"
                  className="top-0 hidden sm:block"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  src={`${baseUrl}/assets/2.2-sm.png`}
                  alt="Paper Torn"
                  className="top-0 block sm:hidden"
                />
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  src={`${baseUrl}/assets/2.1.png`}
                  alt="Silas Papare Top"
                  className="absolute top-[-20%] sm:top-[-35%]"
                />
                <div className="absolute left-[15%] sm:left-[10%] top-[15%] sm:top-[20%] max-w-[75%] sm:max-w-[50%] space-y-1 sm:space-y-4 xl:space-y-8">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45, duration: 0.7 }}
                    className="text-4xl xl:text-6xl font-extrabold">
                    <span className="text-red-600">Masa Kecil</span>
                    <br />
                    <span>Silas Papare</span>
                  </motion.p>
                  <motion.ul className="list-disc marker:text-red-600 text-base xl:text-lg space-y-1 sm:space-y-2 xl:space-y-4">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                    ><p>Silas kecil banyak menghabiskan waktu untuk <b>belajar agama</b> di rumah bersama orangtuanya</p></motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.7 }}
                    ><p>Musa memberi pendidikan agama kepada Silas lewat dongeng sebelum tidur</p></motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.7 }}
                    ><p>Lalu bersama Dorkas, ia <b>belajar memahami pandangan hidup orang-orang Serui</b></p></motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.7 }}
                    ><p>Dari ilmu yang diberikan orang tua, Silas belajar tentang ibadah serta pergaulan dengan sesama</p></motion.li>
                  </motion.ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[90%] from-transparent to-[#c1bbb5]" />
        </div>
        <div
          className="w-full bg-cover bg-no-repeat bg-[center_top] xl:bg-center relative"
          style={{ backgroundImage: `url('${baseUrl}/assets/2.4.png')` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b to-[80%] to-transparent from-[#c1bbb5]" />
          <div className="max-w-4xl mx-auto relative z-10 mb-20 mt-[5rem] sm:mt-0">
            <div className="space-y-0">
              <div className="relative flex items-center justify-center z-0">
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  src={`${baseUrl}/assets/2.5.png`}
                  alt="Paper Torn"
                  className="top-0 z-10 hidden sm:block"
                />
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  src={`${baseUrl}/assets/2.5-sm.png`}
                  alt="Paper Torn"
                  className="top-0 z-10 block sm:hidden"
                />
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  src={`${baseUrl}/assets/2.3.png`}
                  alt="Silas Papare Top"
                  className="absolute z-0 top-[-20%] sm:top-[-40%] right-[4%] sm:right-[-.7rem]"
                />
                <div className="absolute top-[10%] left-[15%] px-0 sm:px-14 max-w-[70%] sm:max-w-[50%] sm:ml-auto z-10 right-0">
                  <ul className="list-disc marker:text-red-600 text-base xl:text-lg space-y-1 sm:space-y-2 xl:space-y-4">
                    <motion.li
                      initial={{ opacity: 0, x: 10 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                    >
                      <p>Di tengah keterbatasan dan banyaknya orang tua yang melarang anak-anaknya
                        bersekolah, Silas juga
                        berkesempatan menempuh pendidikan formal hingga berkesempatan <b>belajar
                          di sekolah juru rawat</b> di Serui pada tahun 1931</p>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: 10 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.7 }}
                    >
                      <p>Silas memilih belajar menjadi juru rawat mengingat kualitas kesehatan di Serui sangat
                        memprihatinkan, sementara masih belum banyak orang
                        yang menekuni bidang tersebut
                      </p>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[80%] from-transparent to-[#f3f1e9]" />
        </div>
      </div>
    </section>
  );
}
