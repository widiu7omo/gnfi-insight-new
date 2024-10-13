"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageAsalUsul() {
  const variants = {
    pOpen: {
      opacity: 1, y: 0, transition: {
        staggerChildren: 0.2,
      },
    },
    pClose: { opacity: 0, y: 5 },
  }
  const childVariants = {
    pOpen: {
      opacity: 1, x: 0, transition: { duration: .3 }
    },
    pClose: { opacity: 0, x: -5, transition: { duration: .3 } },
  }
  const childLiVariants = {
    pOpen: {
      opacity: 1, x: 0, transition: { duration: .3 }
    },
    pClose: { opacity: 0, x: 20, transition: { duration: .3 } },
  }

  return (
    <section id="section-1" className="bg-[#fffcf3] -mt-1 overflow-clip">
      <div className="relative flex items-start justify-center">
        <div
          className="w-full bg-no-repeat bg-[cover,contain] xl:bg-[cover,auto] bg-[center_top] relative bg-blend-multiply"
          style={{ backgroundImage: `url('${baseUrl}/assets/1.0.png')` }}
        >
          <div className="absolute top-0 h-[10%] bg-gradient-to-b from-[#cec5be] left-0 right-0" />
          <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b to-[#cec5be] from-[#cec5be]/40 md:hidden" />
          <img src={`${baseUrl}/assets/1.1.png`} alt="Bg 1" className="absolute hidden xl:block top-0 lg:top-[-200px] xl:top-[-400px] 2xl:top-[-580px] left-0 right-0 w-full" />
          <div className="max-w-4xl mx-auto relative z-10 top-0">
            <div className="space-y-0">
              <div className="relative flex flex-col items-center justify-center z-0">
                <div className="mt-[10%] relative z-10">
                  <motion.img
                    initial={{ opacity: 0, y: 5, x: 5 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    src={`${baseUrl}/assets/1.2.png`}
                    className="relative"
                    alt="Dang Dut"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    src={`${baseUrl}/assets/1.2.1.png`}
                    className="absolute top-[-9%]"
                    alt="Title"
                  />
                </div>
                <div className="md:hidden space-y-[10rem] px-4 pt-[12rem] sm:pt-[10rem]">
                  <div className="relative">
                    <motion.img variants={childVariants} className="absolute h-[6rem] left-0 top-[-6rem]" src={`${baseUrl}/assets/1.3.1.png`} />
                    <motion.p variants={childVariants} className="text-2xl font-semibold">Penamaan dangdut merupakan pembentukan kata yang menirukan suara gendang, yaitu “dang”</motion.p>
                  </div>
                  <div className="relative">
                    <motion.img variants={childVariants} className="absolute h-[5rem] left-0 top-[-5rem]" src={`${baseUrl}/assets/1.3.2.png`} />
                    <motion.p variants={childVariants} className="text-2xl font-semibold">“dut” menjadi ungkapan yang digunakan untuk menghina dari lapisan masyarakat kelas atas kepada rakyat miskin</motion.p>
                  </div>
                </div>
                <div className="relative z-0">
                  <div className="relative opacity-0 md:opacity-100 h-[4rem] md:h-auto">
                    <motion.img
                      initial={{
                        x: 40,
                        scaleY: 0.9,
                        scaleX: 0.9,
                        scaleZ: 0.9,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        scaleY: 1,
                        scaleX: 1,
                        scaleZ: 1,
                        opacity: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: 0, duration: 0.4 }}
                      src={`${baseUrl}/assets/1.3.png`}
                      className="top-0 z-10"
                      alt="Rhoma Irama"
                    />
                  </div>
                  <div className="flex w-fit flex-col sm:flex-row absolute top-0 sm:top-[20rem]">
                    <motion.div
                      initial="pClose"
                      animate="pOpen"
                      variants={variants}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="flex-1 pl-[2rem] pt-[2rem] sm:pt-0 max-w-[50%] space-y-[30%] md:block hidden">
                      <div className="relative">
                        <motion.img variants={childVariants} className="size-auto absolute left-[-5%] top-[-120%]" src={`${baseUrl}/assets/1.3.1.png`} />
                        <motion.p variants={childVariants} className="text-2xl font-semibold">Penamaan dangdut merupakan pembentukan kata yang menirukan suara gendang, yaitu “dang”</motion.p>
                      </div>
                      <div className="relative">
                        <motion.img variants={childVariants} className="size-auto absolute left-[-5%] top-[-80%]" src={`${baseUrl}/assets/1.3.2.png`} />
                        <motion.p variants={childVariants} className="text-2xl font-semibold">“dut” menjadi ungkapan yang digunakan untuk menghina dari lapisan masyarakat kelas atas kepada rakyat miskin</motion.p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex md:flex-row flex-col space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <p className="text-3xl md:text-5xl font-semibold text-white px-4 md:px-8 tracking-normal md:leading-[3.7rem]">Konon, istilah dangdut
                        dipercaya muncul
                        pertama kali pada tahun <span className="text-[#ed8906]">1970-an</span></p>
                    </div>
                    <div className="flex-1 space-y-4 px-4 text-white text-2xl">
                      <p>Istilah tersebut berkembang dari ejekan yang dilakukan oleh anak-anak band rock
                        di Bandung</p>
                      <p>Ejekan mereka ditujukan pada corak musik Melayu bergaya India yang disertai dengan tablah</p>
                    </div>
                  </div>
                  <div className="relative">
                    <img src={`${baseUrl}/assets/1.4.png`} alt="Group Music" />
                    <motion.img
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      src={`${baseUrl}/assets/1.6.png`}
                      className="absolute bottom-0 invert max-w-full z-20 md:max-w-4xl mx-0 md:mx-auto left-0 right-0 hidden sm:block"
                      alt="Sub Title"
                    />
                    <div className="absolute bottom-0 z-10 left-0 w-full h-[20%] bg-gradient-to-b from-[#c1bfbb]/0 to-[#fbf8f0]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full from-[80%] h-full bg-gradient-to-b from-[#090d16]/0 to-[#fffcf3]" />
        </div>
      </div>
    </section>
  );
}
