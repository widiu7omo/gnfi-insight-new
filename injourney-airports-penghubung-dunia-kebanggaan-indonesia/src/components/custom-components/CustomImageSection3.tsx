"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

export function CustomImageSection3() {
  const ref = useRef(null);
  const paragraphVariant: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: .8, delayChildren: 0.3 }
    },
    close: {
      opacity: 0,
      y: -20,
    },
  };
  return (
    <div
      className="relative flex flex-col items-center overflow-hidden bg-cover bg-no-repeat"
      ref={ref} style={{ backgroundImage: `url("${baseUrl}/assets/3.3.png")` }}
    >
      <div className="bg-gradient-to-b from-[#ccf2fb] w-full h-[300px] absolute z-10" />
      <div className="relative w-full">
        <div className="inset-0 z-10 relative">
          <div className="w-full lg:max-w-4xl mx-auto md:px-0 lg:px-10">
            <div className="flex flex-col items-center px-4">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .8, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="md:px-15 pt-6 text-left tracking-wider font-sora text-xl xs:text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#18b1bf] sm:pt-8 md:pt-12 "
              >
                InJourney Airports
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .8, ease: "easeInOut", delay: .3 }}
                viewport={{ once: true }}
                className="md:px-15 text-left text-2xl xs:text-4xl sm:text-5xl xl:text-6xl font-sora font-extrabold text-[#042d73] md:mt-6 "
              >
                Menatap Masa Depan
              </motion.p>
            </div>
            <div className="relative z-10 flex w-full justify-end">
              <div className="relative md:absolute z-20 md:left-0 lg:left-2 w-full md:w-1/2 mt-[20rem] md:mt-4 mx-4 flex justify-center">
                <div className="bg-[#fdfdfd] shadow-sm px-6 py-6 lg:py-12 rounded-lg space-y-4 ">
                  <div>
                    <motion.p
                      viewport={{ once: true }}
                      variants={paragraphVariant}
                      initial="close"
                      whileInView="open"
                      className="text-left font-sora font-extrabold text-[#18b1bf] mb-4 text-2xl sm:text-3xl"
                    >
                      Visi
                    </motion.p>
                    <motion.p
                      viewport={{ once: true }}
                      variants={paragraphVariant}
                      initial="close"
                      whileInView="open"
                      className="text-left font-sora text-gray-800 text-lg sm:text-xl md:text-lg xl:text-xl"
                    >
                      Menjadi operator bandara kelas dunia yang menghubungkan
                      global travelers dengan hospitality khas Indonesia
                    </motion.p>
                  </div>
                  <div>
                    <motion.p
                      viewport={{ once: true }}
                      variants={paragraphVariant}
                      initial="close"
                      whileInView="open"
                      className="text-left font-sora font-extrabold text-[#18b1bf] mb-4 text-2xl md:text-3xl"
                    >
                      Misi
                    </motion.p>
                    <motion.ul
                      viewport={{ once: true }}
                      variants={paragraphVariant}
                      initial="close"
                      whileInView="open"
                      className="list-disc pl-5 text-left font-sora text-lg sm:text-xl md:text-lg xl:text-xl"
                      style={{ color: "black" }}
                    >
                      <li className="mb-4 marker:text-red-500 text-gray-800">
                        Meningkatkan kualitas layanan bandara dengan standar
                        internasional
                      </li>
                      <li className="marker:text-red-500 text-gray-800">
                        Menjadikan bandara sebagai wajah kebanggaan bangsa dan
                        membentuk bandara yang dapat menciptakan nilai tambah (
                        <span className="italic">value creator</span>)
                      </li>
                    </motion.ul>
                  </div>
                </div>
              </div>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                src={`${baseUrl}/assets/3.1.png`}
                alt="People"
                className="absolute top-0 md:relative h-full w-full md:w-1/2 right-0 object-contain object-top md:max-w-4xl mt-0 md:mt-[5rem] lg:mt-0"
              />
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                src={`${baseUrl}/assets/3.1.1.png`}
                alt="People with plane"
                className="h-full absolute w-1/2 bottom-[-50%] hidden lg:block right-0 object-cover md:max-w-4xl"
              />
            </div>
          </div>
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            src={`${baseUrl}/assets/3.2.png`}
            alt="People"
            className="h-full w-full bottom-[-50%] right-0 object-cover relative z-20 mt-0 md:mt-[-5rem] lg:mt-0"
          />
        </div>
      </div>
      <div className="relative z-50 w-full bg-white pb-12 pt-10">
        <div className="col mx-auto flex w-full flex-col justify-center px-4 md:max-w-4xl md:px-10">
          <motion.p
            viewport={{ once: true }}
            variants={paragraphVariant}
            initial="close"
            whileInView="open"
            className="mx-auto mb-4 text-center font-bold text-[#054037] md:mb-12 md:max-w-2xl text-lg sm:text-xl md:text-3xl"
          >
            InJourney Airports akan fokus melakukan pengembangan terhadap 4
            pilar berikut untuk mencapai visi dan misinya:
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="space-y-4">
              <motion.ul
                viewport={{ once: true }}
                variants={paragraphVariant}
                initial="close"
                whileInView="open"
                className="list-disc pl-5 text-left text-[#18b1bf]"
              >
                <li className="font-bold italic sm:text-lg">
                  Premises
                </li>
                <p className="text-gray-800">
                  infrastruktur dan fasilitas bandara berkualitas prima
                </p>
              </motion.ul>
            </div>
            <div className="space-y-4">
              <motion.ul
                viewport={{ once: true }}
                variants={paragraphVariant}
                initial="close"
                whileInView="open"
                className="list-disc pl-5 text-left text-[#18b1bf]"
              >
                <li className="font-bold italic sm:text-lg">
                  People
                </li>
                <p className="text-gray-800">
                  SDM di sektor pelayanan yang berkualitas, serta memenuhi
                  standar global
                </p>
              </motion.ul>
            </div>
            <div className="space-y-4">
              <motion.ul
                viewport={{ once: true }}
                variants={paragraphVariant}
                initial="close"
                whileInView="open"
                className="list-disc pl-5 text-left text-[#18b1bf]"
              >
                <li className="font-bold italic sm:text-lg">
                  Process
                </li>
                <p className="text-gray-800">
                  kolaborasi erat InJourney Airports dengan ekosistem aviasi
                </p>
              </motion.ul>
            </div>
            <div className="space-y-4">
              <motion.ul
                viewport={{ once: true }}
                variants={paragraphVariant}
                initial="close"
                whileInView="open"
                className="list-disc pl-5 text-left text-[#18b1bf]"
              >
                <li className="font-bold italic sm:text-lg">
                  Enabler
                </li>
                <p className="text-gray-800">
                  implementasi beragam inovasi teknologi, serta digitalisasi
                </p>
              </motion.ul>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex w-full justify-end">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 10, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            src={`${baseUrl}/assets/3.5.png`}
            alt="Airport"
            className="z-20 w-auto h-[50%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
