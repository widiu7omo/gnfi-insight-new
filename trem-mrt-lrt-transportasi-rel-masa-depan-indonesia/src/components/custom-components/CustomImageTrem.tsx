"use client";

import { baseUrl } from "@/constants/meta";
import { motion, type Variants } from "framer-motion";

export function CustomImageTrem() {
  const variants: Variants = {
    pOpen: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: { duration: .4, delay: 0.2 },
    },
    pClose: {
      opacity: 0,
      y: -20,
      x: -20,
      rotate: 1,
      transition: { duration: 1 },
    },
  };

  const paragraphVariant: Variants = {
    open: {
      opacity: 1,
      y: 20
    },
    close: {
      opacity: 0,
      y: 0
    }
  };

  const carsVariant: Variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
        duration: 3
      }
    },
    close: {
      opacity: 0
    }
  }

  const carVariant: Variants = {
    open: {
      opacity: 1,
      y: 20, transition: {
        duration: .5
      }
    },
    close: {
      opacity: 0,
      y: 0
    }
  }

  return (
    <div className="relative" style={{ backgroundImage: `url(${baseUrl}/assets/1.0.png)`, backgroundColor: "#d0d1c3" }}>
      <div className="h-[100px] bg-gradient-to-b absolute w-full from-[#d0d1c3]" />
      <section
        id="section-1"
        className="overflow-clip space-y-14"
      >
        <div className="relative flex flex-col items-start justify-center z-10">
          <div className="w-full bg-no-repeat bg-[cover,contain] xl:bg-[cover,auto] bg-[center_top] relative bg-blend-multiply max-w-4xl mx-auto ">
            <div className="px-4 md:px-0">
              <p className="text-3xl text-white font-extrabold px-4 md:px-6 w-fit py-2 bg-red-800">
                Trem
              </p>
              <motion.p viewport={{ once: true }} className="text-left md:text-6xl text-4xl text-red-900 font-extrabold pt-6" variants={paragraphVariant} initial="close" whileInView="open">
                Transportasi Berbasis Rel Intrakota Pertama
              </motion.p>
              <motion.p viewport={{ once: true }} className="text-left md:text-2xl text-xl text-black font-extrabold pt-6" variants={paragraphVariant} initial="close" whileInView="open">
                Trem adalah transportasi berbasis rel intrakota pertama di Indonesia yang sudah pernah ada di zaman Belanda
              </motion.p>
            </div>
            <div className="relative flex items-center flex-col md:flex-row justify-between pt-8 z-10">
              <motion.img viewport={{ once: true }}
                initial="close"
                whileInView="open" className="w-full md:w-auto"
                src={`${baseUrl}/assets/1.1.png`}
                alt="Trem"
              />
              <div className="flex flex-col items-start justify-center flex-1 space-y-4 px-4 md:px-0">
                <div>
                  <div className="text-white w-fit bg-red-800 text-5xl font-bold px-2 py-1">Batavia</div>
                  <div className="bg-black px-2 py-1 text-2xl text-white">atau kini bernama Jakarta</div>
                </div>
                <div className="text-2xl">adalah kota Indonesia pertama yang mengoperasikan armada ini.</div>
                <div className="italic text-lg pt-8 hidden md:block">
                  <p>Ilustrasi Foto:</p>
                  <p>Gatot Adri / Shutterstock</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${baseUrl}/assets/1.3.png)` }} className="md:mt-[-4.5rem] mt-4 w-full bg-no-repeat bg-[cover,cover] md:bg-[center_top] bg-blend-multiply relative">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#281d1d] shadow-xl p-6 flex flex-col items-center justify-center space-y-12 pt-8 md:pt-14 relative">
                <div className="text-2xl md:text-3xl font-bold max-w-full w-full md:max-w-md text-center text-white">Daerah-daerah yang dilewati
                  di antaranya meliputi</div>
                <div className="w-full sm:hidden space-y-8 !mt-0 flex flex-col items-start justify-center px-4 pb-4 relative">
                  <div className="w-[2px] h-[80%] bg-white absolute left-[2.9rem] top-[12%]" />
                  <div className="flex-1 text-white py-1 flex items-center space-y-2 z-10">
                    <img src={`${baseUrl}/assets/1.2.png`} alt="Station" className="bg-[#281d1d] mr-4 py-2" />
                    <p className="text-xl font-medium">Pasar Ikan</p>
                  </div>
                  <div className="flex-1 text-white py-1 flex items-center space-y-2 z-10">
                    <img src={`${baseUrl}/assets/1.2.png`} alt="Station" className="bg-[#281d1d] mr-4 py-2" />
                    <p className="text-xl font-medium">Harmoni</p>
                  </div>
                  <div className="flex-1 text-white py-1 flex items-center space-y-2 z-10">
                    <img src={`${baseUrl}/assets/1.2.png`} alt="Station" className="bg-[#281d1d] mr-4 py-2" />
                    <p className="text-xl font-medium">Kramat</p>
                  </div>
                  <div className="flex-1 text-white py-1 flex items-center space-y-2 z-10">
                    <img src={`${baseUrl}/assets/1.2.png`} alt="Station" className="bg-[#281d1d] mr-4 py-2" />
                    <p className="text-xl font-medium">Meester Cornelis (Jatinegara)</p>
                  </div>
                </div>
                <div className="w-full relative hidden sm:flex flex-wrap justify-center">
                  <div className="h-[2px] w-[80%] bg-white absolute top-[30%]" />
                  <div className="flex-1 text-white px-2 py-1 flex flex-col items-center space-y-2 z-10">
                    <img src={`${baseUrl}/assets/1.2.png`} alt="Station" className="bg-[#281d1d] px-4" />
                    <p className="text-xl font-medium">Pasar Ikan</p>
                  </div>
                  <div className="flex-1 text-white px-2 py-1 flex flex-col items-center space-y-2 z-10">
                    <img src={`${baseUrl}/assets/1.2.png`} alt="Station" className="bg-[#281d1d] px-4" />
                    <p className="text-xl font-medium">Harmoni</p>
                  </div>
                  <div className="flex-1 text-white px-2 py-1 flex flex-col items-center space-y-2 z-10">
                    <img src={`${baseUrl}/assets/1.2.png`} alt="Station" className="bg-[#281d1d] px-4" />
                    <p className="text-xl font-medium">Kramat</p>
                  </div>
                  <div className="flex-1 text-white px-2 py-1 flex flex-col items-center space-y-2 z-10">
                    <img src={`${baseUrl}/assets/1.2.png`} alt="Station" className="bg-[#281d1d] px-4" />
                    <p className="text-xl font-medium max-w-[200px] text-center">Meester Cornelis (Jatinegara)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[30rem] md:h-[50rem]" />
          </div>
        </div>
        <div className="absolute h-[20rem] bottom-[0rem] w-full bg-gradient-to-t from-[#d0d1c3] z-10" />
      </section>
    </div>
  );
}
