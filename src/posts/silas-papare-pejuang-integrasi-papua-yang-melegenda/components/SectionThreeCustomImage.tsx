"use client";
import { motion } from "motion/react";

export function SectionThreeCustomImage() {
  return (
    <div className="flex flex-col bg-[#fffcf3] overflow-clip " >
      <div className="flex flex-col z-10 relative bg-cover bg-position-[center_top] bg-no-repeat mb-80 sm:mb-0" style={{ backgroundImage: `url('/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/3.1.jpeg')` }}>
        <img src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/3.0.png`} alt="" className="top-0 absolute left-0 right-0 w-full " />
        <div className="flex justify-center flex-col max-w-4xl mx-auto relative lg:mt-108">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/3.2.png`} alt="" className="top-0 hidden sm:block relative z-10" />
          <img
            src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/3.2-sm.png`} alt="" className="top-0 sm:hidden block relative z-10 opacity-0" />
          <div className="absolute top-[5%] sm:top-[13%] max-w-full sm:max-w-[75%] mx-auto space-y-4 z-10">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="pt-[43%] text-black sm:pt-0 pl-4 pr-4 sm:pr-0 sm:pl-[30%] text-3xl sm:text-5xl xl:text-6xl font-extrabold">
              Kedekatan
              Silas Papare
              dengan <span className="text-red-600">Papua</span>
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-base text-black sm:text-xl pl-4 pr-4 sm:pr-0 sm:pl-[30%]">
              Sebagai putra daerah Papua, Silas sangat dekat dengan tanah kelahirannya. Di sana, ia mengabdikan dirinya mulai sebagai tenaga medis, anggota militer, hingga politisi
            </motion.p>
            <ul className="list-disc text-black marker:text-red-600 text-base pl-10 pr-4 sm:pr-0 sm:pl-[30%] space-y-2 max-w-full sm:max-w-[70%]">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <p>Selain bertugas sebagai juru rawat di Serui, Silas juga pernah  bekerja rumah sakit saat sebuah perusahaan minyak asal Belanda dibuka di Babo.</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <p>
                  Setelah menjadi juru rawat, Silas direkrut Belanda untuk menjadi <b>intelijen</b>.
                  Kariernya pun melejit hingga diangkat menjadi <b>tentara Sekutu</b> dengan pangkat sersan persteklas
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <p>Setelah Jepang hengkang dari Papua, Silas kembali jadi tenaga kesehatan dan menjabat Kepala Rumah Sakit Zending di Serui</p>
              </motion.li>
            </ul>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/3.4.png`} alt="" className="bottom-0 absolute z-10 hidden sm:block" />
        </div>
        <div className="flex justify-center flex-col max-w-4xl mx-auto relative mt-[-7%] z-0">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.3 }}
            src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/3.3.png`} alt="" className="top-0 hidden sm:block" />
          <div className="absolute top-[120%] sm:top-[30%] left-10 sm:left-[40%] right-[10%]">
            <ul className="list-disc text-black marker:text-red-600 text-base space-y-2">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}>
                Setelah terjun di dunia kesehatan dan
                militer, ia berkecimpung di ranah politik hingga menjadi anggota DPR mewakili lrian Jaya dengan SK
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}>
                Presiden RI No. 143 tanggal I Agustus 1956 dan pernah diangkat sebagai anggota Dewan Perancang Nasional Sementara Republik Indonesia serta anggota MPRS
              </motion.li>
            </ul>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.5 }}
            src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/3.5.png`} alt="" className="absolute top-0 hidden sm:block" />
          <img
            src={`/assets/silas-papare-pejuang-integrasi-papua-yang-melegenda/3.5-sm.png`} alt="" className="max-w-[60%] top-0 block sm:hidden opacity-0 sm:opacity-100" />
        </div>
      </div>
    </div>
  );
}
