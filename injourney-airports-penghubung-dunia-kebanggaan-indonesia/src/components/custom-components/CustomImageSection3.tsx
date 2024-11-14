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
      className="relative flex flex-col items-center overflow-hidden"
      ref={ref}
    >
      <div className="bg-gradient-to-b from-[#ccf2fb] w-full h-[300px] absolute z-10" />
      <div className="relative w-full">
        <img
          src={`${baseUrl}/assets/3.3.png`}
          alt="Sky"
          className="z-0 h-auto w-full object-cover lg:h-[78rem]"
        />
        <div className="hidden lg:block">
          <div className="absolute z-10 flex w-full justify-center md:-top-[34rem]">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              src={`${baseUrl}/assets/3.1.png`}
              alt="People"
              className="h-full w-full object-cover md:max-w-4xl"
            />
          </div>
          <div className="absolute -bottom-20 flex w-full justify-center z-10">
            <div className="absolute bottom-20 z-30 h-[20rem] w-full bg-gradient-to-t from-[#ffffff]" />
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              src={`${baseUrl}/assets/3.2.png`}
              alt="Airport"
              className="z-20 h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-10 flex justify-center">
          <div className="flex w-full flex-col items-start px-4 md:max-w-4xl md:px-10">
            <div className="mx-auto">
              <motion.p
                viewport={{ once: true }}
                variants={paragraphVariant}
                initial="close"
                whileInView="open"
                className="md:px-15 pt-6 text-left text-2xl font-extrabold text-[#18b1bf] md:pt-12 md:text-[2.5rem]"
              >
                InJourney Airports
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                variants={paragraphVariant}
                initial="close"
                transition={{ delay: 0.3 }}
                whileInView="open"
                className="md:px-15 text-left text-2xl font-extrabold text-[#042d73] md:mt-6 md:text-[2.75rem]"
              >
                Menatap Masa Depan
              </motion.p>
              <div className="mt-4 w-3/5 space-y-4 rounded-lg bg-[#fdfdfd] px-4 py-4 md:mt-16 md:space-y-10 md:px-8 md:pb-20 md:pt-12 md:w-1/2">
                <div>
                  <motion.p
                    viewport={{ once: true }}
                    variants={paragraphVariant}
                    initial="close"
                    whileInView="open"
                    className="mb-0 text-left text-base font-extrabold text-[#18b1bf] md:mb-4 md:text-3xl"
                  >
                    Visi
                  </motion.p>
                  <motion.p
                    viewport={{ once: true }}
                    variants={paragraphVariant}
                    initial="close"
                    whileInView="open"
                    className="text-left text-sm text-black md:text-xl"
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
                    className="mb-0 text-left text-base font-extrabold text-[#18b1bf] md:mb-4 md:text-3xl"
                  >
                    Misi
                  </motion.p>
                  <motion.ul
                    viewport={{ once: true }}
                    variants={paragraphVariant}
                    initial="close"
                    whileInView="open"
                    className="list-disc pl-5 text-left text-sm text-black md:text-xl"
                    style={{ color: "black" }}
                  >
                    <li className="mb-4 marker:text-red-500">
                      Meningkatkan kualitas layanan bandara dengan standar
                      internasional
                    </li>
                    <li className="marker:text-red-500">
                      Menjadikan bandara sebagai wajah kebanggaan bangsa dan
                      membentuk bandara yang dapat menciptakan nilai tambah (
                      <span className="italic">value creator</span>)
                    </li>
                  </motion.ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:hidden">
          <div className="absolute bottom-0 z-30 h-[6rem] w-full bg-gradient-to-t from-white via-white/95 to-transparent" />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 10, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            src={`${baseUrl}/assets/3.4.png`}
            alt="People"
            className="z-8 absolute -top-16 h-full w-full object-cover md:max-w-4xl"
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
            className="mx-auto mb-4 text-center text-base font-bold text-[#054037] md:mb-12 md:mb-8 md:max-w-2xl md:text-3xl"
          >
            InJourney Airports akan fokus melakukan pengembangan terhadap 4
            pilar berikut untuk mencapai visi dan misinya:
          </motion.p>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="space-y-4">
              <motion.ul
                viewport={{ once: true }}
                variants={paragraphVariant}
                initial="close"
                whileInView="open"
                className="list-disc pl-5 text-left text-lg text-[#18b1bf] md:text-xl"
              >
                <li className="text-sm font-bold italic md:text-xl">
                  Premises
                </li>
                <p className="text-sm text-black md:text-xl">
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
                className="list-disc pl-5 text-left text-lg text-[#18b1bf] md:text-xl"
              >
                <li className="text-sm font-bold italic md:text-xl">
                  People
                </li>
                <p className="text-sm text-black md:text-xl">
                  SDM di sektor pelayanan yang berkualitas, serta memenuhi
                  standar global
                </p>
              </motion.ul>
            </div>
            <div className="mt-4 md:mt-6">
              <motion.ul
                viewport={{ once: true }}
                variants={paragraphVariant}
                initial="close"
                whileInView="open"
                className="list-disc pl-5 text-left text-lg text-[#18b1bf] md:text-xl"
              >
                <li className="text-sm font-bold italic md:text-xl">
                  Process
                </li>
                <p className="text-sm text-black md:text-xl">
                  kolaborasi erat InJourney Airports dengan ekosistem aviasi
                </p>
              </motion.ul>
            </div>
            <div className="mt-4 md:mt-6">
              <motion.ul
                viewport={{ once: true }}
                variants={paragraphVariant}
                initial="close"
                whileInView="open"
                className="list-disc pl-5 text-left text-lg text-[#18b1bf] md:text-xl"
              >
                <li className="text-sm font-bold italic md:text-xl">
                  Enabler
                </li>
                <p className="text-sm text-black md:text-xl">
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
