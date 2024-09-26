"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function SectionThreeCustomImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(5px)"])
  const blurSugarLg = useTransform(scrollYProgress, [.5, 1], ["blur(0px)", "blur(3px)"])
  const scaleSugarLg = useTransform(scrollYProgress, [0, 1], [.8, 2])
  const positionY = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const rotation = useTransform(scrollYProgress, [0, 1], ['0deg', '45deg']);
  scrollYProgress.on('change', () => {
    console.log(blur.get())
  })
  return (
    <div className="flex flex-col bg-[hsl(30,40%,90%)] overflow-clip" ref={ref}>
      <div className="flex flex-col z-10 relative bg-cover bg-[center_top] bg-no-repeat" style={{ backgroundImage: `url('${baseUrl}/assets/3.1.png')` }}>
        <img src={`${baseUrl}/assets/3.0.png`} alt="" className="top-0 absolute left-0 right-0 w-full" />
        <div className="flex justify-center flex-col max-w-4xl mx-auto relative lg:mt-[27rem]">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/3.2.png`} alt="" className="top-0 relative z-10" />
          <div className="absolute top-[13%] max-w-[75%] mx-auto space-y-4 z-10">
            <h4 className="pl-[30%] text-2xl sm:text-6xl font-extrabold">
              Kedekatan
              Silas Papare
              dengan <span className="text-red-600">Papua</span>
            </h4>
            <p className="text-lg sm:text-xl pl-[30%]">
              Sebagai putra daerah Papua, Silas sangat dekat dengan tanah kelahirannya. Di sana, ia mengabdikan dirinya mulai sebagai tenaga medis, anggota militer, hingga politisi
            </p>
            <ul className="list-disc marker:text-red-600 text-base pl-[30%] space-y-2 max-w-[70%]">
              <li>
                <p>Selain bertugas sebagai juru rawat di Serui, Silas juga pernah  bekerja rumah sakit saat sebuah perusahaan minyak asal Belanda dibuka di Babo.</p>
              </li>
              <li>
                <p>
                  Setelah menjadi juru rawat, Silas direkrut Belanda untuk menjadi <b>intelijen</b>.
                  Kariernya pun melejit hingga diangkat menjadi <b>tentara Sekutu</b> dengan pangkat sersan persteklas
                </p>
              </li>
              <li>
                <p>Setelah Jepang hengkang dari Papua, Silas kembali jadi tenaga kesehatan dan menjabat Kepala Rumah Sakit Zending di Serui</p>
              </li>
            </ul>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/3.4.png`} alt="" className="bottom-0 absolute z-10" />
        </div>
        <div className="flex justify-center flex-col max-w-4xl mx-auto relative mt-[-7%] z-0">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/3.3.png`} alt="" className="top-0" />
          <div className="absolute top-[35%] left-[40%] right-[10%]">
            <ul className="list-disc marker:text-red-600 text-base space-y-2">
              <li>Setelah terjun di dunia kesehatan dan
                militer, ia berkecimpung di ranah politik hingga menjadi anggota DPR mewakili lrian Jaya dengan SK</li>
              <li>
                Presiden RI No. 143 tanggal I Agustus 1956 dan pernah diangkat sebagai anggota Dewan Perancang Nasional Sementara Republik Indonesia serta anggota MPRS
              </li>
            </ul>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`${baseUrl}/assets/3.5.png`} alt="" className="absolute top-0" />
        </div>
      </div>
    </div>
  );
}
