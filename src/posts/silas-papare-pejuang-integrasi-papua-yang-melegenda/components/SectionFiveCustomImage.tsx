"use client";

import { motion } from "motion/react";

export function SectionFiveCustomImage() {
  return (
    <section className="relative flex flex-col items-center bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.0.png)` }}>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0, duration: 2 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.1.png`}
          alt="lembaran kertas"
          className="relative top-0 left-0 z-20"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0, duration: 1 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.2.png`}
          alt="judul"
          className="absolute top-0 left-0 z-20"
        />
        <motion.img
          initial={{ opacity: 0, x: 10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.3.png`}
          alt="foto Silas"
          className="absolute top-0 right-0"
        />
        <motion.img
          initial={{ opacity: 0, x: 10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.5.png`}
          alt="jasa-jasa"
          className="absolute top-0 right-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.6.png`}
          alt="KRI Silas"
          className="absolute top-0 left-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: 10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.7.png`}
          alt="Text KRI Silas"
          className="absolute top-0 right-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.8.png`}
          alt="Lapangan Udara Silas"
          className="absolute top-0 left-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: 10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 1.2 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.9.png`}
          alt="Text Lapangan Udara Silas"
          className="absolute top-0 right-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 1.5 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.10.png`}
          alt="Monumen Silas"
          className="absolute top-0 left-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: 10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7, duration: 1.9 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.11.png`}
          alt="Text Monumen Silas"
          className="absolute top-0 right-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.9, duration: 2 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.12.png`}
          alt="STISIPOL Silas"
          className="absolute top-0 left-0 z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: 10 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 2.2 }}
          src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/5.13.png`}
          alt="Text STISIPOL Silas"
          className="absolute top-0 right-0 z-10"
        />
      </div>
      <motion.img initial={{ opacity: 0, y: 10 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/footer.png`} alt="footer" className="absolute bottom-0 z-50" />
    </section>
  );
}
