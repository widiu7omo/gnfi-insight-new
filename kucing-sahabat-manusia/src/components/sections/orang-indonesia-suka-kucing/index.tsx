"use client";
import { motion } from "framer-motion";
import { Lilita_One } from "next/font/google";
import { Inter } from "next/font/google";
// import Ornament1 from "./ornament1";
import Paragraph from "@/components/reusable/paragraph";
import Ornament1 from "./ornament1";
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
export default function SectionTwo() {
  return (
    <section id="section-2" className="bg-[#FFF4E4]">
      <div className="space-y-8 h-screen flex items-center justify-center flex-col relative">
        <Ornament1 />

        <div>
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`relative mx-auto max-w-3xl text-center text-2xl font-bold leading-snug text-dark lg:text-3xl xl:text-5xl ${lilitaOneFont.className}`}
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
    </section>
  );
}
