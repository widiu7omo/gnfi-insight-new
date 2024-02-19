import { motion } from "framer-motion";
const containerAnimate = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function CaptionFromWill() {
  return (
    <div className="w-full h-fit pb-3 pt-32">
      <div className="pt-16 pb-8 bg-orange-500">
        <motion.div
          className="flex space-x-6 flex-col-reverse xl:flex-row relative max-w-full xl:max-w-7xl mx-auto"
          variants={containerAnimate}
          initial="hidden"
          whileInView="visible"
        >
          <motion.img
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            src="pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/golkar/will.png"
            alt="Sir William"
            className="w-[80px] xl:w-full"
          />
          <span className="right-0 -top-20 z-10 absolute leading-3 font-bold text-[400px] rotate-180 text-orange-300/80">
            “
          </span>
          <motion.div
            className="z-20 space-y-5"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-3xl text-white font-bold leading-9 ">
              "Selain trauma politik dan faktor ekonomi, kepatuhan dan ketakutan
              kepada penguasa adalah unsur terpenting di dalam kemenangan
              Golkar. Secara tidak langsung pengaruhnya masuk melalui
              pemimpin-pemimpin desa dan meresap di kalangan warga desa biasa"
            </p>
            <div className="divide-x-2 divide-orange-200">
              <span className="font-bold text-lg text-orange-200 mr-3">
                R. William Liddle
              </span>
              <span className="text-base pl-3 text-orange-200">
                Pengamat politik dari Universitas Ohio
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
