import { motion } from "motion/react";
export function CustomImageA() {
  return (
    <div className="relative overflow-clip font-sora py-14 bg-no-repeat bg-cover" style={{ backgroundImage: `url(/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.0.jpg)`, backgroundColor: 'black' }}>
      <div className="absolute left-0 w-full bottom-0 h-[20%] z-0 bg-linear-to-t from-black"></div>
      <div className="absolute left-0 w-full top-0 h-full bg-black/30 z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10 pt-0 lg:pt-24 pb-20">
        <div className="px-4 xl:px-0 space-y-2 md:space-y-6 xl:space-y-0 py-4 xl:py-0 text-center flex items-center justify-center flex-col">
          <motion.h6
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .3 }}
            viewport={{ once: true }}
            className="font-sora w-full text-2xl md:text-3xl xl:text-4xl font-bold leading-tight! tracking-wide text-white">
            Perbedaan
          </motion.h6>
          <motion.h4
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .3 }}
            viewport={{ once: true }}
            className="font-sora w-full text-4xl md:text-6xl xl:text-7xl font-bold leading-tight! tracking-wide text-[#ffd800]">
            Padel dan Tenis
          </motion.h4>
        </div>
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .3 }}
            viewport={{ once: true }}
            src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.1.png`} alt="Player 1" className="relative z-10 -ml-[10%] sm:-ml-[20%]" />
          <motion.img
            initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .4, delay: .5 }}
            viewport={{ once: true }}
            src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.2.png`} alt="Player 2" className="absolute top-0 right-[-10%] hidden sm:block" />
          <div className="relative z-10 flex sm:flex-row flex-col sm:space-x-6 -mt-[35%] font-sora">
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .4, delay: 0.1 }}
              viewport={{ once: true }}
              className="pt-12 flex-1 object-center flex items-center justify-start flex-col bg-white rounded-2xl h-full relative mx-4 sm:mx-0">
              <div className="absolute top-[-2%]">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-[150px] h-[50px] bg-[#050280] skew-x-6 rotate-2">
                  </div>
                  <div className="absolute w-[150px] h-[50px] bg-[#ffd800] -skew-x-6 -rotate-2">
                  </div>
                  <p className="relative text-3xl font-bold z-10 text-[#050280]">Padel</p>
                </div>
              </div>
              <div className="space-y-4 w-full">
                <img src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.3.png`} className="object-contain object-center mx-auto px-8 h-[200px] sm:h-[250px]" alt="Yard 1" />
                <div className="h-[200px] sm:h-[320px] w-full flex flex-col ">
                  <div className="mx-auto pb-6 sm:pb-0 px-8 flex-1 h-full">
                    <p className="text-lg sm:text-2xl max-w-xs text-left">Ukuran lapangannya</p>
                    <p className="text-lg sm:text-2xl max-w-xs text-left">20m x 10m</p>
                  </div>
                  <div className="flex items-end justify-end relative w-full h-[180px]">
                    <img src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.4.png`} alt="Padel Racket" className="absolute w-[37%] xl:w-auto bottom-[-4%] left-[-15%]" />
                    <p className="pl-[30%] bg-[#e4e3ff] rounded-b-2xl py-6 sm:py-12 h-full text-lg xl:text-2xl pr-9">Raketnya tertutup cover padat
                      dengan permukaan
                      berlubang
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .4, delay: .5 }}
              viewport={{ once: true }}
              src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.2.png`} alt="Player 2" className="block mt-[10%] sm:mt-0 sm:hidden" />
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .4, delay: .2 }}
              viewport={{ once: true }}
              className="-mt-[20%] sm:mt-0 pt-12 flex-1 object-center flex items-center justify-start flex-col bg-white rounded-2xl h-full relative mx-4 sm:mx-0">
              <div className="absolute top-[-2%]">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-[150px] h-[50px] bg-[#ffd800] skew-x-6 rotate-2">
                  </div>
                  <div className="absolute w-[150px] h-[50px] bg-[#050280] -skew-x-6 -rotate-2">
                  </div>
                  <p className="relative text-3xl font-bold z-10 text-[#ffd800]">Tenis</p>
                </div>
              </div>
              <div className="space-y-4 w-full">
                <img src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.5.png`} className="object-contain px-8 h-[200px] object-center mx-auto sm:h-[250px]" alt="Yard 2" />
                <div className="h-[200px] sm:h-[320px] w-full flex flex-col ">
                  <div className="mx-auto pb-6 sm:pb-0 px-8 flex-1 h-full">
                    <p className="text-lg sm:text-2xl max-w-xs text-left">Ukuran lapangannya</p>
                    <ul className="text-lg sm:text-2xl list-disc ml-6">
                      <li>23,77m x 8,2m (single)</li>
                      <li>23,77m x 10,97m (double)</li>
                    </ul>
                  </div>
                  <div className="relative w-full h-[180px] rounded-b-2xl bg-[#e4e3ff]">
                    <img src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.6.png`} alt="Padel Racket" className="absolute bottom-[-4%] w-[60%] sm:w-[68%] xl:w-auto right-[-20%]" />
                    <div className="pr-[30%] py-6 sm:py-12">
                      <p className=" h-full max-w-[50%] xl:max-w-full text-xl xl:text-2xl pl-9">Raketnya memiliki senar</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <div className="relative mt-10 flex sm:flex-row flex-col items-end justify-end w-full">
            <div className="relative z-10 ">
              <motion.img
                initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .4, delay: .3 }}
                viewport={{ once: true }}
                src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.7.png`} alt="Tenis Player" className="relative sm:w-auto w-[70%] z-10" />
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .6, delay: .5 }}
                viewport={{ once: true }}
                className="absolute border-t border-white top-[15%] left-[25%] w-[70px] h-[100px]">
                <div className="w-full h-full relative">
                  <div className="absolute size-2 bg-white rounded-full -top-1 -left-1"></div>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .6, delay: .5 }}
                viewport={{ once: true }}
                className="absolute top-[12%] right-0 text-white max-w-[50%] sm:max-w-xs text-sm sm:text-xl">
                Pemain tidak bisa memantulkan bola ke dinding
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .6, delay: .7 }}
                viewport={{ once: true }}
                className="absolute border-b border-r border-white top-[48%] z-0 sm:top-[43%] right-[20%] xl:right-[0%] w-[200px] h-[40px]">
                <div className="w-full h-full relative">
                  <div className="absolute size-2 bg-white rounded-full -top-1 -right-1"></div>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .6, delay: .7 }}
                viewport={{ once: true }}
                className="absolute text-white top-[35%] right-0 sm:right-[-5%] xl:right-[-20%] max-w-[50%] text-sm sm:text-xl z-10">
                Servis dapat dilakukan dari atas dan bawah
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .4, delay: .2 }}
                viewport={{ once: true }}
                className="bg-[#052193] rounded-xl p-4 bottom-0 right-0 pl-[20%] sm:pl-[15%] relative flex py-6 w-fit z-10">
                <img src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.9.png`} alt="Ball" className="absolute left-[-5%] top-[-5%]" />
                <p className=" text-white max-w-xs text-sm sm:text-xl">
                  Bola yang digunakan lebih besar dengan tekanan lebih tinggi
                </p>
              </motion.div>
            </div>
            <div className="sm:absolute left-0 bottom-0 font-sora mt-[20%] z-0">
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: .6, delay: .4 }}
                  viewport={{ once: true }}
                  src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/1.8.png`} alt="Padel Player" className="z-10 relative" />
                <motion.div
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: .6, delay: .5 }}
                  viewport={{ once: true }}
                  className="absolute border-r border-t border-white top-[-18%] left-[35%] sm:left-[25%] w-[60px] sm:w-[100px] h-[100px] z-0">
                  <div className="w-full h-full relative">
                    <div className="absolute size-2 bg-white rounded-full -top-1 -left-1"></div>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: .6, delay: .5 }}
                  viewport={{ once: true }}
                  className="absolute max-w-xs text-sm sm:text-xl text-white left-4 sm:left-0 top-[-20%]">
                  Pemain dapat <br /> memantulkan bola
                  <br />
                  ke dinding
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: .6, delay: .7 }}
                  viewport={{ once: true }}
                  className="absolute border-l border-b border-white top-[50%] sm:top-[40%] left-[10%] w-[200px] h-[40px]">
                  <div className="w-full h-full relative">
                    <div className="absolute size-2 bg-white rounded-full -top-1 -left-1"></div>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: .6, delay: .7 }}
                  viewport={{ once: true }}
                  className="absolute max-w-[30%] left-2 sm:left-0 text-sm sm:text-xl top-[20%] text-white">
                  Servis dilakukan dari bawah (underhand)
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: .9, delay: .8 }}
                  viewport={{ once: true }}
                  className="absolute border-l border-b border-white left-[4%] w-[80px] h-[40px]">
                  <div className="w-full h-full relative">
                    <div className="absolute size-2 bg-white rounded-full -top-1 -left-1"></div>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: .9, delay: .8 }}
                  viewport={{ once: true }}
                  className="absolute max-w-xs left-[8%] text-sm sm:text-xl text-neutral-950 bg-[#ffd800] p-4 rounded-2xl">
                  Bola yang digunakan
                  lebih kecil dengan tekanan rendah (10-11 psi)
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={`/assets/bermain-padel-menikmati-olahraga-dari-meksiko-yang-sedang-tren-di-jakarta/footer.png`} className="z-50 hidden sm:block relative bottom-0 h-full w-fit mx-auto" />
    </div >
  );

}
