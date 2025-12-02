import { motion } from "motion/react";

export function SectionThreeCustomImage() {
  return (
    <div className="bg-contain relative xl:bg-position-[center_top_-30rem]" style={{ backgroundImage: `url(/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.1.1.png)` }}>
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-center justify-center">
          <div className="absolute bg-linear-to-t from-[#04070B] z-0 left-0 right-0 top-[20%] bottom-0" />
          <img src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.1.png`} alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.2.png`} className="absolute" alt="Title" />
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.3.png`} className="absolute" alt="Title" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-0 z-20">
        <div className="relative flex items-center justify-center">
          <motion.img initial={{ opacity: 0, y: 20 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.4.png`} alt="Who memperkirakan" className="" />
          <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.5.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, x: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.6.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.7.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.8.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, x: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.9.1.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.9.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.10.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.11.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.12.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.13.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.14.png`} alt="Who memperkirakan" className="absolute" />
          <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/3.15.png`} alt="Who memperkirakan" className="absolute" />
        </div>
        <motion.img initial={{ opacity: 0, y: 30 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.15.png`} alt="Who memperkirakan" className="invert" />
      </div>
    </div>
  );
}
