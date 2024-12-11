"use client";
import { baseUrl } from "@/constants/meta";
import { motion, type Variants } from "framer-motion";
import { useRef } from "react";

export function CustomImageSerupaTapi() {
  const ref = useRef(null);
  return (
    <div
      className="flex flex-col bg-[#f9fafb] overflow-clip relative items-center h-full"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto relative z-10 py-12 space-y-6 px-4 md:px-0">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: .6 }}
          className="text-3xl md:text-6xl text-center font-sora font-bold text-red-800">
          Serupa, tapi Tak Sama
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: .4 }}
          className="text-xl md:text-2xl font-sora text-center">
          Baik trem, MRT, dan LRT sama-sama transportasi berbasis rel intrakota,
          tapi ada beberapa poin yang membedakannya.{" "}
        </motion.p>
      </div>
      <div className="relative flex items-end justify-center max-w-4xl w-full mx-auto pt-28">
        <div
          className="absolute w-full h-full bottom-0 mx-auto object-center flex justify-center" >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: .4, duration: .4 }}
            className="rounded-full bg-[#8e1d2c] object-center size-[50rem] md:size-[60rem] mt-[20%] md:mt-0 w-full" />
        </div>
        <motion.img
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0, duration: .3 }}
          src={`${baseUrl}/assets/2.1.png`}
          alt="Train Center"
          className="relative z-[3] w-[50%] md:w-auto"
        />
        <motion.img
          initial={{ opacity: 0, x: -40, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: .3 }}
          src={`${baseUrl}/assets/2.3.png`}
          alt="Train Right"
          className="absolute z-[2] right-[-3%] md:right-[-8rem] w-[70%] md:w-auto"
        />
        <motion.img
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: .3 }}
          src={`${baseUrl}/assets/2.2.png`}
          alt="Train Left"
          className="absolute z-[1] left-[-5%] md:left-[-5rem] w-[90%] md:w-auto"
        />
      </div>
      <div className="block lg:hidden bg-[#8e1d2c] w-full">
        <div className="md:flex-row flex-col flex items-center">
          <motion.img
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0, duration: .5 }}
            src={`${baseUrl}/assets/2.6.png`}
            alt="Serupa, tapi Tak Sama"
            className="flex-1 relative z-10 h-full w-full object-contain max-h-[50rem] -mt-[6rem]"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: .3 }}
            className="bg-white p-4 sm:p-8 flex h-fit overflow-clip relative w-full flex-1 -mt-20 sm:-mt-32 md:-ml-24  max-w-xl">
            <div className="flex flex-col space-y-2 absolute">
              {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
              {new Array(20).fill(0).map((i, inx) => (<div className="bg-[#8e1d2c] size-4" key={inx} />))}
            </div>
            <div className="flex flex-col space-y-2">
              <div className="space-x-2 pl-12 pt-4 flex items-start">
                <div className="w-0 h-0 border-t-[1rem] border-t-[#8e1d2c] border-l-[0.5rem] border-l-transparent border-r-[0.5rem] border-r-transparent rotate-[270deg] pt-4" />
                <p className="text-base sm:text-xl font-sora font-medium flex-1">
                  Trem, sekalipun sudah tidak ada lagi di Indonesia, bisa
                  diketahui ciri khasnya dengan beroperasi di tengah jalan-jalan
                  kota.
                </p>
              </div>
              <div className="space-x-2 pl-12 pt-4 flex items-start">
                <div className="w-0 h-0 border-t-[1rem] border-t-[#8e1d2c] border-l-[0.5rem] border-l-transparent border-r-[0.5rem] border-r-transparent rotate-[270deg] pt-4" />
                <p className="text-base sm:text-xl font-sora font-medium flex-1">
                  Sementara, MRT dan LRT  yang bisa dilihat di Jakarta berbeda.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="max-w-5xl flex flex-col mx-auto relative h-fit items-center">
          <div className="flex flex-row-reverse items-start justify-center">
            <motion.img
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0, duration: .5 }}
              src={`${baseUrl}/assets/2.4.png`}
              alt="Serupa, tapi Tak Sama"
              className="relative z-10 max-w-full sm:max-w-[80%] top-0 sm:top-[-2rem]"
            />
            <motion.img
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: .2 }}
              src={`${baseUrl}/assets/2.5.png`}
              alt="MRT"
              className="absolute z-10 max-w-[50%] right-0"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: .3 }}
            className="bg-white pl-4 pt-4 p-4 sm:p-8 flex h-fit relative overflow-clip w-full -rotate-1 max-w-sm mt-[-5rem] ml-[-5rem] sm:mt-[-3rem]">
            <div className="flex flex-col space-y-2 absolute">
              {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
              {new Array(20).fill(0).map((i, inx) => (<div className="bg-[#8e1d2c] size-4" key={inx} />))}
            </div>
            <div className="flex flex-col space-y-2">
              <div className="space-x-2 pl-12 pt-4 flex items-start">
                <div className="w-0 h-0 border-t-[1rem] border-t-[#8e1d2c] border-l-[0.5rem] border-l-transparent border-r-[0.5rem] border-r-transparent rotate-[270deg] pt-4" />
                <p className="text-base sm:text-xl font-sora font-medium flex-1">
                  MRT mengoperasikan armadanya di jalur layang dan bawah tanah, sementara LRT di jalur layang saja.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative z-10 bg-[#8e1d2c] w-full hidden lg:block">
        <div className="mx-auto max-w-4xl flex items-center -mt-20">
          <motion.img
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0, duration: .5 }}
            src={`${baseUrl}/assets/2.6.png`}
            alt="Serupa, tapi Tak Sama"
            className="flex-1 relative z-10"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: .3 }}
            className="bg-white pl-4 pt-4 p-8 flex h-fit overflow-clip relative w-full flex-1 -ml-24 rotate-1">
            <div className="flex flex-col space-y-2 absolute">
              {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
              {new Array(20).fill(0).map((i, inx) => (<div className="bg-[#8e1d2c] size-4" key={inx} />))}
            </div>
            <div className="flex flex-col space-y-2">
              <div className="space-x-2 pl-12 pt-4 flex items-start">
                <div className="w-0 h-0 border-t-[1rem] border-t-[#8e1d2c] border-l-[0.5rem] border-l-transparent border-r-[0.5rem] border-r-transparent rotate-[270deg] pt-4" />
                <p className="text-xl font-sora font-medium flex-1">
                  Trem, sekalipun sudah tidak ada lagi di Indonesia, bisa
                  diketahui ciri khasnya dengan beroperasi di tengah jalan-jalan
                  kota.
                </p>
              </div>
              <div className="space-x-2 pl-12 pt-4 flex items-start">
                <div className="w-0 h-0 border-t-[1rem] border-t-[#8e1d2c] border-l-[0.5rem] border-l-transparent border-r-[0.5rem] border-r-transparent rotate-[270deg] pt-4" />
                <p className="text-xl font-sora font-medium flex-1">
                  Sementara, MRT dan LRT  yang bisa dilihat di Jakarta berbeda.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="max-w-5xl flex mx-auto justify-between relative">
          <motion.img
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0, duration: .5 }}
            src={`${baseUrl}/assets/2.4.png`}
            alt="Serupa, tapi Tak Sama"
            className="relative z-10 max-w-[80%] top-[-5rem]"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: .3 }}
            className="bg-white pl-4 pt-4 p-8 flex h-fit overflow-clip w-full -rotate-1 max-w-sm absolute left-[30%]">
            <div className="flex flex-col space-y-2 absolute">
              {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
              {new Array(20).fill(0).map((i, inx) => (<div className="bg-[#8e1d2c] size-4" key={inx} />))}
            </div>
            <div className="flex flex-col space-y-2">
              <div className="space-x-2 pl-12 pt-4 flex items-start">
                <div className="w-0 h-0 border-t-[1rem] border-t-[#8e1d2c] border-l-[0.5rem] border-l-transparent border-r-[0.5rem] border-r-transparent rotate-[270deg] pt-4" />
                <p className="text-xl font-sora font-medium flex-1">
                  MRT mengoperasikan armadanya di jalur layang dan bawah tanah, sementara LRT di jalur layang saja.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: .2 }}
            src={`${baseUrl}/assets/2.5.png`}
            alt="Serupa, tapi Tak Sama"
            className="relative z-10 max-w-[80%] top-[-12rem]"
          />
        </div>
      </div>
      <div className="bg-gradient-to-t from-black/20 absolute bottom-0 left-0 right-0 h-full z-10" />
      <img src={`${baseUrl}/assets/footer.png`} alt="Footer" className="lg:block hidden h-[3rem] absolute bottom-0 z-10 w-full sm:h-[5rem] object-cover object-bottom max-w-4xl mx-auto" />
    </div>
  );
}
