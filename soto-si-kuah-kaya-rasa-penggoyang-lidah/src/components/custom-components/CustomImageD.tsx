"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageD() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pt-6 md:pt-12 lg:pb-4"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.5.png)` }}
      >
        <div className="absolute left-0 right-0 top-0 z-10 flex justify-center">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={`${baseUrl}/assets/4.1.png`}
            alt="Yellow Background"
            className="min-h-[20rem] w-full object-cover md:h-full lg:max-h-[80%] lg:w-auto"
          />
        </div>

        <div className="relative z-20 mx-auto w-full px-4 md:max-w-4xl lg:px-0">
          <motion.h4
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-2 text-left font-sora text-xl font-bold text-[#2F2F2F] md:text-3xl lg:mb-4 lg:text-4xl"
          >
            Kecintaan Orang Indonesia
          </motion.h4>
          <div className="flex flex-row">
            <div className="z-30 w-1/2">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-2 text-left font-sora text-5xl font-extrabold text-white md:text-6xl lg:mb-4 lg:text-8xl"
                style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)" }}
              >
                Terhadap <br />
                Soto
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="inline bg-white decoration-clone box-decoration-clone px-2 text-left font-sora text-lg text-[#2F2F2F] md:text-2xl md:leading-[2.5rem] lg:text-3xl lg:leading-[3rem]"
              >
                Penggemarnya soto berasal dari beragam kalangan, dari masyarakat
                umum hingga selebritas ternama.
              </motion.p>
            </div>
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={`${baseUrl}/assets/4.2.png`}
              alt="Soto"
              className="z-20 -ml-[10%] mt-[25%] w-auto md:mt-0 md:h-auto md:w-[60%] lg:-ml-12 lg:h-[70%] lg:w-auto xl:h-full"
            />
          </div>
          <div className="md:hidden">
            <div className="flex items-end justify-center">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={`${baseUrl}/assets/4.3.png`}
                alt="Yusril Fahriza"
                className="z-30 h-auto w-[40%]"
              />
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="ml-[5%]"
              >
                <p className="font-sera text-lg font-semibold text-[#2F2F2F] md:text-4xl">
                  Komika Yogyakarta
                </p>
                <p className="font-sera text-2xl font-semibold text-[#FF521F] md:text-6xl">
                  Yusril Fahriza
                </p>
              </motion.div>
            </div>
            <div className="rounded-2xl bg-[#2F2F2F] px-4 py-4">
              <motion.p
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="font-sera text-base text-white"
              >
                Menunjukkan rasa cintanya terhadap soto lewat akun instagram{" "}
                <span className="text-[#FF521F]">@demisotoimpian</span>. Rajin
                menyambangi warung soto demi mendokumentasikan dirinya sedang
                menyantap soto. Bukan di-review seperti akun "kode-kodean" ya!
              </motion.p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="mx-auto flex flex-row items-end">
              <div className="w-[70%]">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -50, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`${baseUrl}/assets/4.3.png`}
                  alt="Yusril Fahriza"
                  className="z-30 h-auto max-h-[600px] w-auto object-contain"
                />
              </div>
              <div className="flex w-[80%] flex-col">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mb-2 space-y-1 md:mb-4 md:space-y-2"
                >
                  <p className="font-sera text-lg font-semibold text-[#2F2F2F] md:text-4xl">
                    Komika Yogyakarta
                  </p>
                  <p className="font-sera text-2xl font-semibold text-[#FF521F] md:text-6xl">
                    Yusril Fahriza
                  </p>
                </motion.div>
                <div className="-mb-5 -ml-[15%] flex items-center rounded-[2rem] bg-[#2F2F2F] py-2 pl-[18%] pr-2 md:py-4 md:pl-[20%] md:pr-8">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-sera text-base text-white md:text-xl md:leading-[2rem] lg:text-2xl lg:leading-[2.5rem]"
                  >
                    Menunjukkan rasa cintanya terhadap soto lewat akun instagram{" "}
                    <span className="text-[#FF521F]">@demisotoimpian</span>.
                    Rajin menyambangi warung soto demi mendokumentasikan dirinya
                    sedang menyantap soto. Bukan di-review seperti akun
                    "kode-kodean" ya!
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-14 mt-8 md:hidden">
            <div className="flex items-end justify-center">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mr-[5%]"
              >
                <p className="font-sera text-right text-lg font-semibold text-[#2F2F2F]">
                  Pemain naturalisasi Timnas Indonesia
                </p>
                <p className="font-sera text-right text-2xl font-semibold text-[#FF521F]">
                  Mees Hilgers
                </p>
              </motion.div>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/4.4.png`}
                alt="Mees Hilgers"
                className="z-30 h-auto w-[40%]"
              />
            </div>
            <div className="rounded-2xl bg-[#2F2F2F] px-4 py-4">
              <motion.p
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="font-sera text-base text-white"
              >
                Menyukai soto dan malahan bisa meraciknya sendiri sesuai selera.
                <br />
                {""}
                <br />
                "Soto ayam adalah favorit saya. Itu adalah sup khas dari
                Indonesia yang sangat lezat, terutama jika ibu saya yang
                membuatnya. Saya juga bisa membuatnya sendiri. Biasanya, ibu
                saya membangunkan saya untuk makan soto ayam yang telah dia
                buat," kata Hilgers{" "}
              </motion.p>
            </div>
          </div>
          <div className="mb-32 mt-48 hidden md:block">
            <div className="mx-auto -mt-32 flex flex-row items-end">
              <div className="-mr-[15%] flex w-[90%] flex-col">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mb-6 space-y-2"
                >
                  <p className="font-sera text-end text-lg font-semibold text-[#2F2F2F] md:text-4xl">
                    Pemain naturalisasi Timnas Indonesia
                  </p>
                  <p className="font-sera text-end text-2xl font-semibold text-[#FF521F] md:text-6xl">
                    Mees Hilgers
                  </p>
                </motion.div>
                <div className="-mb-[4.5%] flex items-center rounded-[2rem] bg-[#2F2F2F] py-2 pl-2 pr-[18%] md:py-4 md:pl-8 md:pr-[18%] lg:pr-[16%]">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9, x: -30 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-sera text-base text-white md:text-xl md:leading-[2rem] lg:text-2xl lg:leading-[2.5rem]"
                  >
                    Menyukai soto dan malahan bisa meraciknya sendiri sesuai
                    selera.
                    <br />
                    {""}
                    <br />
                    "Soto ayam adalah favorit saya. Itu adalah sup khas dari
                    Indonesia yang sangat lezat, terutama jika ibu saya yang
                    membuatnya. Saya juga bisa membuatnya sendiri. Biasanya, ibu
                    saya membangunkan saya untuk makan soto ayam yang telah dia
                    buat," kata Hilgers{" "}
                  </motion.p>
                </div>
              </div>
              <div className="-mr-[20%] w-[80%]">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  src={`${baseUrl}/assets/4.4.png`}
                  alt="Mees Hilgers"
                  className="z-30 h-auto max-h-[600px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full invert sm:block"
        />
      </div>
      <div className="absolute left-0 h-[50%] w-full bottom-0 bg-gradient-to-t from-[#d8d8d9]" />
    </div>
  );
}
