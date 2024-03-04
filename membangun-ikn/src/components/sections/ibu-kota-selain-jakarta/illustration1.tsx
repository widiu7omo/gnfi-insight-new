"use client";
import { motion } from "framer-motion";
export default function Illustration1() {
  return (
    <div className="relative flex h-[700px] items-start justify-center bg-[url('/assets/section3/da84d88dc706e90c8b1d715b4ee601bf.png')] bg-cover bg-[50%_70%]">
      <div className="absolute -top-3 bottom-0 left-0 right-0 bg-gradient-to-b from-[#B4B0AD] to-black/0" />
      <div className="relative bottom-0 left-0 right-0 top-0 z-40 flex h-[400px] w-full flex-col items-center justify-center ">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.3 },
            skewY: -3,
          }}
          viewport={{ once: true }}
          className="absolute top-0 -skew-y-3 bg-[#FF9801] px-12 py-10 text-5xl font-bold leading-[3.4rem]"
        >
          <motion.div
            initial={{ y: -20, opacity: 0, skewY: 3 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.5 },
              skewY: 3,
            }}
            viewport={{ once: true }}
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
        viewport={{ once: true }}
        className="absolute bottom-0 z-10 h-[500px] bg-gray-300 px-12 pt-24 text-3xl"
      >
        <span>Memindah ibu kota Indonesia</span>
        <br />
        <span className="font-bold">bukanlah hal baru</span>
      </motion.div>
      <div className="absolute bottom-0 left-[20%]">
        <motion.img
          viewport={{ once: true }}
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 20, opacity: 1, transition: { delay: 0.6 } }}
          src="/assets/section3/monas.png"
          alt="Monas"
          className="xl:object-fit w-[40px] xl:h-[700px] xl:w-full"
        />
      </div>
      <div className="absolute bottom-0 right-[10%] z-20">
        <motion.img
          viewport={{ once: true }}
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { delay: 1 } }}
          src="/assets/section3/soldier.png"
          alt="Monas"
          className="h-[300px] object-cover "
        />
      </div>
    </div>
  );
}
