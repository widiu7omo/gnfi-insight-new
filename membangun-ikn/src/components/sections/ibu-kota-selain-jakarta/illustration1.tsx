"use client";
import { motion } from "framer-motion";
export default function Illustration1() {
  return (
    <div className="bg-[url('/assets/section3/da84d88dc706e90c8b1d715b4ee601bf.png')] bg-[50%_70%] bg-cover h-[700px] relative flex items-start justify-center">
      <div className="absolute -top-3 bottom-0 right-0 left-0 bg-gradient-to-b from-[#B4B0AD] to-black/0" />
      <div className="relative w-full h-[400px] z-40 top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col ">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.3 },
            skewY: -3,
          }}
          className="absolute top-0 text-5xl font-bold px-12 -skew-y-3 py-10 leading-[3.4rem] bg-[#FF9801]"
        >
          <motion.div
            initial={{ y: -20, opacity: 0, skewY: 3 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.5 },
              skewY: 3,
            }}
            className="skew-y-3"
          >
            Kota yang Pernah <br />
            Jadi Ibu Kota Indonesia <br />
            <span className="text-white"> Selain Jakarta</span>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.8 },
        }}
        className="bg-gray-300 z-10 absolute h-[500px] bottom-0 text-3xl px-12 pt-24"
      >
        <span>Memindah ibu kota Indonesia</span>
        <br />
        <span className="font-bold">bukanlah hal baru</span>
      </motion.div>
      <div className="absolute bottom-0 left-[20%]">
        <motion.img
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 20, opacity: 1, transition: { delay: 0.6 } }}
          src="/assets/section3/monas.png"
          alt="Monas"
          className="object-fit h-[700px]"
        />
      </div>
      <div className="absolute bottom-0 z-20 right-[10%]">
        <motion.img
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { delay: 1 } }}
          src="/assets/section3/soldier.png"
          alt="Monas"
          className="object-cover h-[300px] "
        />
      </div>
    </div>
  );
}
