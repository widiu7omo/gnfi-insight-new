import { motion } from "motion/react";

export function SectionFiveCustomImage() {
  return (
    <section>
      <div className="relative w-full">
        {" "}
        {/* Background Image */}
        <motion.img
          src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/11.7.png`}
          width={1079}
          height={601}
          alt="Background Cows"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Gradient Overlay */}
        <motion.div
          className="absolute bg-linear-to-b from-black/10 to-black z-0 left-0 right-0 top-0 bottom-0 p-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-clip">
          <div className="relative max-w-6xl mx-auto">
            {/* Main Title */}
            <motion.img
              src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.1.png`}
              className=""
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Description */}
            <motion.img
              src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.3.png`}
              className="absolute top-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Main Heading */}
            <motion.img
              src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.2.png`}

              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="absolute top-0 -translate-x-1/2 -translate-y-1/2"
            />
            {/* Program Target */}
            <motion.img
              src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.4.png`}
              className="absolute top-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="max-w-6xl mx-auto ">
            <motion.img
              src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.6.png`}
              className="absolute bottom-0 xl:bottom-44 xl:scale-150!"
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ delay: 1.8 }}
            />
            <motion.img
              src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.5.png`}
              className="absolute bottom-0 xl:bottom-44 xl:scale-150!"
              initial={{ opacity: 0, }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, }}
              transition={{ delay: 1 }}
            />
            <motion.img
              src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.7.png`}
              className="absolute bottom-0 xl:bottom-44 xl:scale-150!"
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ delay: 1.3 }}
            />
          </div>

        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <div className="max-w-6xl mx-auto ">
            <motion.img
              src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.8.png`}
              className="absolute xl:bottom-[-100px]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
            /><motion.img
              src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.9.png`}
              className="absolute xl:bottom-[-100px]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col relative sm:flex-row items-center mx-auto max-w-6xl mt-12 px-4 sm-px-0">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.10.png`}
          alt="Eclipse"
          className=""
        />
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.12.png`}
          alt="Eclipse"
          className="absolute"
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/5.11.png`}
          alt="Susu"
          className="absolute"
        />
      </div>
    </section>
  );
}
