"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageB() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pb-12 pt-16 md:pb-[8rem] md:pt-24 xl:pb-24"
        style={{ backgroundImage: `url(${baseUrl}/assets/2.1.png)` }}
      >
        <div className="absolute left-0 top-0 h-[30%] w-full bg-gradient-to-b from-[#B52874]" />
        <div className="space-y-14 md:space-y-24">
          <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4">
            <div className="flex w-full flex-col md:flex-row text-center items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-[45%]"
              >
                <img
                  src={`/assets/2.3.png`}
                  alt="Ragusa"
                  className="rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl object-cover md:rounded-tr-none md:rounded-br-none h-96 w-full md:w-full md:h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white bg-[#FE98D9] rounded-tl-none md:rounded-bl-none rounded-bl-3xl md:rounded-tr-3xl rounded-br-3xl px-6 md:px-14 py-8 md:py-12"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-[36px] md:text-[42px] font-black mb-4 text-[#000BFF]"
                >
                  Ragusa
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 text-[#2A2A2A] text-lg md:text-xl font-semibold"
                >
                  Terletak di bilangan Gambir, Jakarta Pusat. Kedai es krim Ragusa
                  dikenal sebagai salah satu es krim tertua di Jakarta karena sudah
                  berdiri sejak 1932.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-[#2A2A2A] text-lg md:text-xl font-semibold"
                >
                  Menu andalannya ialah Es Krim Spageti yang pernah masuk dalam jajaran{" "}
                  <span className="text-[#000BFF]">"100 Most Iconic Ice Creams"</span>{" "}
                  TasteAtlas.
                </motion.p>
                <motion.img
                  src={`/assets/2.2.png`}
                  alt="Overlay"
                  initial={{ scale: 0, rotate: -15, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-16 md:-top-24 -right-6 w-40 h-40 md:h-[14rem] md:w-[14rem] object-contain"
                />
              </motion.div>
            </div>
          </div>
          <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4">
            <div className="flex w-full flex-col md:flex-row-reverse text-center items-stretch">
              {/* Image kanan (karena row-reverse) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-[45%]"
              >
                <img
                  src={`/assets/2.4.png`}
                  alt="Zangrandi"
                  className="h-96 w-full rounded-tr-3xl rounded-tl-3xl md:rounded-tl-none md:rounded-br-3xl object-cover md:rounded-tl-none md:rounded-bl-none md:w-full md:h-full"
                />
              </motion.div>

              {/* Konten kiri */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white bg-[#FE98D9] rounded-tr-none md:rounded-br-none rounded-br-3xl md:rounded-tl-3xl rounded-bl-3xl px-6 md:px-14 py-8 md:py-12"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-[36px] md:text-[42px] font-black mb-4 text-[#000BFF]"
                >
                  Zangrandi
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 text-[#2A2A2A] text-lg md:text-xl font-semibold"
                >
                  Kedai es krim Zangrandi terletak di Surabaya dan telah eksis sejak
                  1930. Sudah berusia lebih dari satu abad, Zangrandi tetap
                  mempertahankan rasa otentik es krimnya.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-[#2A2A2A] text-lg md:text-xl font-semibold"
                >
                  Avocadocano menjadi salah satu menu andalan di kedai es krim
                  kebanggan kota pahlawan tersebut.
                </motion.p>

                {/* Overlay image */}
                <motion.img
                  src={`/assets/2.8.png`}
                  alt="Overlay"
                  initial={{ scale: 0, rotate: 10, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-16 md:-top-24 -right-12 w-40 h-40 md:h-[14rem] md:w-[14rem] object-contain"
                />
              </motion.div>
            </div>
          </div>
          <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex w-full flex-col md:flex-row text-center items-stretch"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-[45%]"
              >
                <img
                  src={`${baseUrl}/assets/2.5.png`}
                  alt="Baltic"
                  className="h-96 w-full rounded-3xl
                     md:w-full md:h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white 
                   rounded-3xl 
                   md:rounded-tl-none md:rounded-bl-none 
                   md:rounded-r-3xl 
                   px-6 md:px-14 py-4"
              >
                <p className="text-[36px] md:text-[42px] font-black mb-4 text-[#000BFF]">Baltic</p>
                <p className="mb-4 text-[#2A2A2A] text-lg md:text-xl font-semibold">
                  Tidak jauh dari Ragusa, ada kedai es krim Baltic di Jakarta tepatnya dekat Simpang Senen, Kwitang. <br />
                  Es krim bikinan Baltic menyesuaikan zaman karena banyak varian rasa favorit gen Z seperti green tea dan peppermint tea.
                </p>
                <p className="text-[#2A2A2A] text-lg md:text-xl font-semibold">
                  Menariknya, Baltic juga mendistribusikan es krimnya di Depok, Tangerang, Bekasi, hingga sebagian wilayah Bogor.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex w-full flex-col md:flex-row-reverse text-center items-stretch"
            >
              {/* Gambar */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-[45%]"
              >
                <img
                  src={`${baseUrl}/assets/2.6.png`}
                  alt="Tjanang"
                  className="h-96 w-full rounded-3xl md:w-full md:h-full object-cover"
                />
              </motion.div>

              {/* Konten */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white 
                   rounded-tr-none md:rounded-br-none 
                   rounded-br-3xl md:rounded-tl-3xl 
                   rounded-bl-3xl px-6 md:px-14 py-4"
              >
                <p className="text-[36px] md:text-[42px] font-black mb-4 text-[#000BFF]">Tjanang</p>
                <p className="mb-4 text-[#2A2A2A] text-lg md:text-xl font-semibold">
                  Gerai es krim Tjanang berdiri sejak 1950-an di Jakarta. Dulu, Tjanang menjadi salah satu lokasi langganan Presiden Sukarno untuk menikmati hidangan ringan.
                </p>
                <p className="text-[#2A2A2A] text-lg md:text-xl font-semibold">
                  Es krim Tjanang pernah tersaji di meja tamu-tamu negara karena pemerintah pernah memesannya untuk hajatan istimewa, salah satunya GANEFO 1963.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-[#0013FF] w-full pt-20 pb-6 md:py-24 relative">
        <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex w-full flex-col md:flex-row text-center items-stretch"
          >
            {/* Gambar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-[45%]"
            >
              <img
                src={`${baseUrl}/assets/2.7.png`}
                alt="Oen"
                className="h-96 w-full rounded-3xl md:w-full md:h-full object-cover"
              />
            </motion.div>

            {/* Konten */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white 
                   rounded-tr-none md:rounded-br-none 
                   rounded-br-3xl md:rounded-tl-3xl 
                   rounded-bl-3xl px-6 md:px-14 py-4"
            >
              <p className="text-[36px] md:text-[42px] font-black mb-4 text-[#00FF3C]">Oen</p>
              <p className="mb-4 text-white text-lg md:text-xl font-semibold">
                Toko Oen adalah restoran keluarga terkemuka di zamannya yang menyajikan hidangan khas Eropa dan Indonesia. Tempat legend ini didirikan oleh Liem Gien Nio-Oma Oen. Oen memiliki empat cabang, yakni Semarang, Malang, Jakarta, dan Surabaya. Namun, yang masih bertahan hingga saat ini adalah Semarang dan Malang. Selain kue-kuean, mereka juga menyajikan es krim sundae yang khas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
