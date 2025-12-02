"use client";

import { motion, useInView } from "motion/react";

export function CustomImageC() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pb-12 pt-16 md:pb-32 md:pt-24 xl:pb-24"
        style={{ backgroundImage: `url(/assets/manis-bisnis-es-krim-di-indonesia/3.1.png)` }}
      >
        <div className="z-1 relative mx-auto max-w-4xl space-y-16 md:space-y-32 hidden lg:block">
          <div className="flex flex-col md:flex-row w-full z-10 space-x-0 md:space-x-10 px-4 md:px-0">
            <div className="flex flex-col md:w-1/2">
              <motion.h2
                className="font-sora text-[#102837] font-bold text-3xl md:text-7xl mb-5 md:mb-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Es Krim Tradisional
              </motion.h2>
              <motion.p
                className="font-sora text-[#102837] mb-10 md:mb-20 font-medium"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ketika susu mahal, santan atau bahan lainnya pun jadi. Dari situ maka jadilah es krim tradisional yang tak kalah nikmatnya memanjakan lidah dan badan kala hawa panas menyerang.
              </motion.p>
              <div className="w-full relative mb-32">
                <motion.div
                  className="flex items-center justify-center bg-[#E1A0B1] rounded-[3rem] 
          shadow-[0_-12px_24px_rgba(0,0,0,0.25)] relative z-0 pb-16 md:pb-32"
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.img
                    src={`/assets/manis-bisnis-es-krim-di-indonesia/3.3.png`}
                    alt="Ice Cream"
                    className="w-24 h-24 md:w-[20rem] md:h-80 object-contain mx-2 md:mx-4 relative z-10 -mt-6 md:-mt-20"
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
                    viewport={{ once: true }}
                  />
                  <motion.p
                    className="font-sora text-white font-black text-3xl md:text-[8rem] font-bold pr-2 md:pr-6 -ml-4 relative z-10"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    2.
                  </motion.p>
                </motion.div>
                <motion.div
                  className="-mt-10 md:-mt-40 py-4 md:py-8 px-2 md:px-6 bg-[#E3EEEA] 
          rounded-[3rem] shadow-lg relative z-0 space-y-2 md:space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="font-sora text-3xl font-bold text-[#102837]">Es Kado</p>
                  <p className="font-sora text-neutral-950 font-medium">
                    Sesuai namanya, es ini dibalut kertas kado plastik tipis dengan motif khas.
                    Rasa esnya bisa dibilang sama dengan es tradisional pada umumnya, tapi
                    tampilan kadonya yang menarik adalah senjata utama menarik perhatian
                    anak-anak.
                  </p>
                </motion.div>
              </div>
              <div className="w-full relative">
                <motion.div
                  className="flex items-center justify-center bg-[#C4E9B6] rounded-[3rem] 
          shadow-[0_-12px_24px_rgba(0,0,0,0.25)] relative z-0 pb-16 md:pb-32"
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="font-sora text-white font-black text-3xl md:text-[8rem] font-bold pl-2 md:pl-6 -mr-4 relative z-10"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    4.
                  </motion.p>
                  <motion.img
                    src={`/assets/manis-bisnis-es-krim-di-indonesia/3.5.png`}
                    alt="Ice Cream"
                    className="w-24 h-24 md:w-[20rem] md:h-80 object-contain mx-2 md:mx-4 relative z-10 -mt-6 md:-mt-20"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </motion.div>
                <motion.div
                  className="-mt-10 md:-mt-40 py-4 md:py-8 px-2 md:px-6 bg-[#F3F0E0]
      rounded-[3rem] shadow-lg relative z-0 space-y-2 md:space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="font-sora text-3xl font-bold text-[#102837]">Es Goyang</p>
                  <p className="font-sora text-neutral-950 font-medium">
                    Es goyang biasanya dibuat ditempat dengan gerobak yang digoyang-goyangkan
                    penjualnya. Berbahan dasar tepung kacang hijau dan tepung jagung, es ini
                    memiliki banyak varian rasa dan topping yang bisa dirikues sendiri oleh
                    penikmatnya.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 space-y-10 md:space-y-32 mt-10 md:mt-0">
              <div className="w-full relative">
                <motion.div
                  className="flex items-center justify-center bg-[#B39C96] rounded-[3rem] 
      shadow-[-12px_-12px_24px_rgba(0,0,0,0.25)] relative z-0 pb-16 md:pb-32"
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="font-sora text-white font-black text-3xl md:text-[8rem] font-bold pl-2 md:pl-6 -mr-4 relative z-10"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    1.
                  </motion.p>
                  <motion.img
                    src={`/assets/manis-bisnis-es-krim-di-indonesia/3.2.png`}
                    alt="Ice Cream"
                    className="w-24 h-24 md:w-[20rem] md:h-80 object-contain mx-2 md:mx-4 relative z-10 -mt-6 md:-mt-20"
                    initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
                    viewport={{ once: true }}
                  />
                </motion.div>
                <motion.div
                  className="-mt-10 md:-mt-40 py-4 md:py-8 px-2 md:px-6 bg-[#EEE6E1] 
      rounded-[3rem] shadow-lg relative z-0 space-y-2 md:space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="font-sora text-3xl font-bold text-[#102837]">
                    Es Tung-tung atau Es Puter
                  </p>
                  <p className="font-sora text-neutral-950 font-medium">
                    Es berbahan dasar santan ini penamaannya diambil dari gong mini yang dibawa si penjual.
                    Biasanya potongan buah nangka dimasukkan ke dalamnya dan disajikan dengan kerucut (cone)
                    renyah atau roti tawar.
                  </p>
                </motion.div>
              </div>
              <div className="w-full relative mb-32">
                <motion.div
                  className="flex items-center justify-between bg-[#E6A3E8] rounded-[3rem] 
      shadow-[-12px_-12px_24px_rgba(0,0,0,0.25)] relative z-0 pb-16 md:pb-32"
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="font-sora text-white font-black text-3xl md:text-[8rem] font-bold pl-[10%] md:pl-[20%] relative z-10"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    3.
                  </motion.p>

                  <motion.img
                    src={`/assets/manis-bisnis-es-krim-di-indonesia/3.4.png`}
                    alt="Ice Cream"
                    className="w-24 h-24 md:w-auto md:h-80 object-contain -ml-10 relative z-10 -mt-6 md:-mt-20"
                    initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', type: 'spring' }}
                    viewport={{ once: true }}
                  />
                </motion.div>
                <motion.div
                  className="-mt-10 md:-mt-40 py-4 md:py-8 px-2 md:px-6 bg-[#F1D2FE] 
      rounded-[3rem] shadow-lg relative z-0 space-y-2 md:space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="font-sora text-3xl font-bold text-[#102837]">
                    Es Gabus
                  </p>
                  <p className="font-sora text-neutral-950 font-medium">
                    Anak-anak generasi 90-an biasanya mengenal es unik satu ini.
                    Biasanya, es gabus berbentuk persegi dan berwarna seperti pelangi.
                    Bahan utama pembuatannya ialah tepung kunhue dan terkadang disajikan
                    dengan topping kental manis cair.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden px-4">
          <motion.h2
            className="font-sora text-[#102837] font-bold text-3xl md:text-7xl mb-5 md:mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Es Krim Tradisional
          </motion.h2>
          <motion.p
            className="font-sora text-[#102837] mb-10 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ketika susu mahal, santan atau bahan lainnya pun jadi. Dari situ maka jadilah es krim tradisional yang tak kalah nikmatnya memanjakan lidah dan badan kala hawa panas menyerang.
          </motion.p>
          <div className="w-full relative mt-12 mb-12">
            <motion.div
              className="flex items-center justify-center bg-[#B39C96] rounded-[3rem] 
      shadow-[-12px_-12px_24px_rgba(0,0,0,0.25)] relative z-0 pb-16 md:pb-32"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.p
                className="font-sora text-white font-black text-[6rem] md:text-[8rem] font-bold pl-2 md:pl-6 -mr-4 relative z-10"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                1.
              </motion.p>
              <motion.img
                src={`/assets/manis-bisnis-es-krim-di-indonesia/3.2.png`}
                alt="Ice Cream"
                className="w-48 h-48 md:w-[20rem] md:h-80 object-contain mx-2 md:mx-4 relative z-10 -mt-6 md:-mt-20"
                initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
                viewport={{ once: true }}
              />
            </motion.div>
            <motion.div
              className="-mt-20 md:-mt-40 py-6 md:py-8 px-6 bg-[#EEE6E1] 
      rounded-[3rem] shadow-lg relative z-0 space-y-2 md:space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-sora text-xl font-bold text-[#102837]">
                Es Tung-tung atau Es Puter
              </p>
              <p className="font-sora text-neutral-950 font-medium">
                Es berbahan dasar santan ini penamaannya diambil dari gong mini yang dibawa si penjual.
                Biasanya potongan buah nangka dimasukkan ke dalamnya dan disajikan dengan kerucut (cone)
                renyah atau roti tawar.
              </p>
            </motion.div>
          </div>
          <div className="w-full relative mb-12">
            <motion.div
              className="flex items-center justify-center bg-[#E1A0B1] rounded-[3rem] 
          shadow-[0_-12px_24px_rgba(0,0,0,0.25)] relative z-0 pb-16 md:pb-32"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.img
                src={`/assets/manis-bisnis-es-krim-di-indonesia/3.3.png`}
                alt="Ice Cream"
                className="w-48 h-48 md:w-[20rem] md:h-80 object-contain mx-2 md:mx-4 relative z-10 -mt-6 md:-mt-20"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
                viewport={{ once: true }}
              />
              <motion.p
                className="font-sora text-white font-black text-[6rem] md:text-[8rem] font-bold pr-2 md:pr-6 -ml-4 relative z-10"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                2.
              </motion.p>
            </motion.div>
            <motion.div
              className="-mt-20 md:-mt-40 py-6 md:py-8 px-2 px-6 bg-[#E3EEEA] 
          rounded-[3rem] shadow-lg relative z-0 space-y-2 md:space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-sora text-xl font-bold text-[#102837]">Es Kado</p>
              <p className="font-sora text-neutral-950 font-medium">
                Sesuai namanya, es ini dibalut kertas kado plastik tipis dengan motif khas.
                Rasa esnya bisa dibilang sama dengan es tradisional pada umumnya, tapi
                tampilan kadonya yang menarik adalah senjata utama menarik perhatian
                anak-anak.
              </p>
            </motion.div>
          </div>
          <div className="w-full relative mb-12">
            <motion.div
              className="flex items-center justify-between bg-[#E6A3E8] rounded-[3rem] 
      shadow-[-12px_-12px_24px_rgba(0,0,0,0.25)] relative z-0 pb-16 md:pb-32"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.p
                className="font-sora text-white font-black text-[6rem] md:text-[8rem] font-bold pl-[20%] relative z-10"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                3.
              </motion.p>

              <motion.img
                src={`/assets/manis-bisnis-es-krim-di-indonesia/3.4.png`}
                alt="Ice Cream"
                className="w-auto h-52 md:w-auto md:h-80 object-contain -ml-10 relative z-10 -mt-6 md:-mt-20"
                initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', type: 'spring' }}
                viewport={{ once: true }}
              />
            </motion.div>
            <motion.div
              className="-mt-20 md:-mt-40 py-6 md:py-8 px-2 px-6 bg-[#F1D2FE] 
      rounded-[3rem] shadow-lg relative z-0 space-y-2 md:space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-sora text-xl font-bold text-[#102837]">
                Es Gabus
              </p>
              <p className="font-sora text-neutral-950 font-medium">
                Anak-anak generasi 90-an biasanya mengenal es unik satu ini.
                Biasanya, es gabus berbentuk persegi dan berwarna seperti pelangi.
                Bahan utama pembuatannya ialah tepung kunhue dan terkadang disajikan
                dengan topping kental manis cair.
              </p>
            </motion.div>
          </div>
          <div className="w-full relative">
            <motion.div
              className="flex items-center justify-center bg-[#C4E9B6] rounded-[3rem] 
          shadow-[0_-12px_24px_rgba(0,0,0,0.25)] relative z-0 pb-16 md:pb-32"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.p
                className="font-sora text-white font-black text-[6rem] md:text-[8rem] font-bold pl-2 md:pl-6 -mr-4 relative z-10"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                4.
              </motion.p>
              <motion.img
                src={`/assets/manis-bisnis-es-krim-di-indonesia/3.5.png`}
                alt="Ice Cream"
                className="w-48 h-48 md:w-[20rem] md:h-80 object-contain mx-2 md:mx-4 relative z-10 -mt-6 md:-mt-20"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </motion.div>
            <motion.div
              className="-mt-20 md:-mt-40 py-6 md:py-8 px-2 px-6 bg-[#F3F0E0]
      rounded-[3rem] shadow-lg relative z-0 space-y-2 md:space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-sora text-xl font-bold text-[#102837]">Es Goyang</p>
              <p className="font-sora text-neutral-950 font-medium">
                Es goyang biasanya dibuat ditempat dengan gerobak yang digoyang-goyangkan
                penjualnya. Berbahan dasar tepung kacang hijau dan tepung jagung, es ini
                memiliki banyak varian rasa dan topping yang bisa dirikues sendiri oleh
                penikmatnya.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl">
        <img
          src={`/assets/manis-bisnis-es-krim-di-indonesia/footer.png`}
          className="mx-auto hidden w-full invert sm:block"
          alt="Footer"
        />
      </div>
    </div >
  );
}
