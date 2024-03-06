"use client";
import { motion } from "framer-motion";
import { Lilita_One } from "next/font/google";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
// import Ornament1 from "./ornament1";
import Paragraph from "@/components/reusable/paragraph";
import Ornament1 from "./ornament1";
import StatsCat from "./stats-cat";
import StatsDog from "./stats-dog";
import StatsParrot from "./stats-parrot";
// import Ornament2 from "./ornament2";
// import Ornament3 from "./ornament3";
// import Quote from "./quote";
// import Ornament5 from "./ornament5";
// import Ornament6 from "./ornament6";
export const lilitaOneFont = Lilita_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "400"],
});
export const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "400"],
});
export const heliumFont = localFont({
  src: "./fonts/helium.ttf",
  display: "swap",
  style: "normal",
});
export default function SectionTwo() {
  return (
    <section id="section-2" className="">
      <div className="space-y-8 h-screen flex items-center justify-center flex-col relative bg-gradient-to-b from-[#FFF4E4] to-[#E5E7E4]">
        <Ornament1 />
        <div>
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`relative z-10 mx-auto max-w-3xl text-center text-2xl font-bold leading-snug text-dark lg:text-3xl xl:text-5xl ${lilitaOneFont.className}`}
          >
            <span className="relative z-50">
              Data Membuktikan, Orang Indonesia Suka Kucing
            </span>
            {/* <Ornament1 /> */}
          </motion.h2>

          <Paragraph
            className={`pt-9 text-dark ${interFont.className} relative font-[400]`}
          >
            <p>
              Kucing memang adalah salah satu hewan peliharaan yang populer di
              Indonesia. Hewan yang satu ini pun bisa kita temui di rumah-rumah
              di berbagai daerah, baik itu di desa maupun di kota. Ini juga
              bukan sekedar klaim belaka, namun data yang ada membuktikan
              demikian.
            </p>
            <p>
              Berbagai survei telah menunjukkan bila kucing adalah salah satu
              hewan yang paling populer di Indonesia, bahkan merajai peringkat
              pertama sebagai hewan yang paling banyak dipelihara.
            </p>
          </Paragraph>
        </div>
      </div>
      <div className="bg-[#E5E7E4] pt-8">
        <div className="max-w-xl mx-auto text-center text-4xl font-bold leading-snug">
          <span
            className={`text-[#F09A00] font-medium ${heliumFont.className} relative w-fit`}
          >
            <span>Kucing,</span>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              src="./assets/foot-left.png"
              alt="Foot Left"
              className="size-6 absolute -top-[20%] left-[30%]"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              src="./assets/foot-right.png"
              alt="Foot Left"
              className="size-6 absolute -top-[40%] left-[50%]"
            />
          </span>{" "}
          Hewan Favorit Masyarakat Indonesia
        </div>
      </div>
      <div className="bg-[#E5E7E4]">
        <div className="relative mb-8">
          <div className="absolute top-0 z-[5] left-0 right-0 bottom-0 bg-gradient-to-b from-[#E5E7E4] to-white/0" />
          <div className="mx-auto z-0 w-full flex items-center justify-center pb-[8rem]">
            <img
              src="./assets/sofa.png"
              alt="Sofa"
              className="relative z-0 max-w-full xl:max-w-7xl mx-auto"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5, x: -100, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6 }}
              src="./assets/stats-parrot.png"
              alt="Parrot"
              className="absolute w-[400px] ml-[20rem] mt-[10rem] z-10"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5, x: 100, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4 }}
              src="./assets/stats-dog.png"
              alt="Dog"
              className="absolute w-[450px] mr-[12rem] mt-[10rem] z-10"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              src="./assets/stats-cat.png"
              alt="Cat"
              className="absolute w-[400px] ml-10 z-10"
            />
            <StatsCat />
            <StatsDog />
            <StatsParrot />
            <img
              src="./assets/animal-group-1.png"
              alt="Animals Group 1"
              className="absolute max-w-7xl w-full z-10 bottom-[20rem]"
            />
            <img
              src="./assets/animal-group-2.png"
              alt="Animals Group 2"
              className="absolute max-w-7xl w-full z-10 bottom-[7rem]"
            />
            <img
              src="./assets/animal-footer.png"
              alt="Animals Group Footer"
              className="absolute max-w-7xl w-full z-10 bottom-0 px-1"
            />
          </div>
        </div>
        <Paragraph className="py-8">
          <p>
            Pertama-tama, mari kita lihat mengenai data dari lingkup Asia
            terlebih dahulu. Seperti yang diungkapkan dalam survei Rakuten
            Insight Center dengan responden sebanyak 97.000 dari 12 negara di
            Asia, kucing dan anjing jadi hewan yang paling umum dipelihara.
          </p>

          <p>
            Terkhusus untuk kucing, Indonesia menjadi nomor satu yang paling
            banyak memeliharanya di Asia (47 persen total responden Indonesia),
            disusul dengan Filipina, Thailand, dan Vietnam.
          </p>

          <p>
            Pembahasan lebih lanjut mengenai data pemelihara hewan di Indonesia
            pernah dibahas oleh GoodStats dalam artikelnya berjudul Ragam
            Statistik Hewan Peliharaan di Indonesia. Terkait kepemilikan,
            sebagian besar pemilik hewan peliharaan di Indonesia mendapatkannya
            dari saudara atau kerabat.Bila melihat dari segi demografi umur,
            kucing juga jadi hewan yang paling banyak dipelihara dari usia
            berapa saja. Selanjutnya ada ikan dan burung yang menjadi hewan
            paling banyak dipelihara.
          </p>

          <p>
            Soal pengeluaran untuk merawat hewan peliharaan, masih berdasarkan
            survei Rakuten, 42 responden dari Indonesia menghabiskan lebih dari
            100 ribu rupiah per bulan untuk kebutuhan hewan peliharaan mereka.
          </p>

          <p>
            Sementara itu, terdapat peningkatan dari jumlah pemelihara kucing di
            Indonesia dari tahun ke tahun. Sebagaimana yang tercatat dari data
            Euromonitor di tahun 2022, tercatat ada 4,80 juta kucing yang
            dipelihara masyarakat. Bila melihat peningkatan jumlahnya dari tahun
            2017-2021, persentase peningkatannya adalah 129 persen.
          </p>
        </Paragraph>
      </div>
    </section>
  );
}
