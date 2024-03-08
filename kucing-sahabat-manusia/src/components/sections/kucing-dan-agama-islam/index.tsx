"use client";
import Paragraph from "@/components/reusable/paragraph";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import AshCat from "./ash-cat";
import BrownCat from "./brown-cat";
import Hadits from "./hadits";
import HaditsCaption from "./hadits-caption";
import Quotes from "./quotes";

export const interFont = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function SectionFive() {
    return (
        <section id="section-5" className="">
            <div className="space-y-8 flex item-center h-screen pt-24 flex-col relative bg-[#144000]">
                <div>
                    <motion.h2
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`relative z-40 mx-auto max-w-3xl text-center text-2xl font-bold font-[700] leading-snug text-[#FAD30D] lg:text-3xl xl:text-5xl ${interFont.className}`}
                    >
                        <span className="relative z-40">
                            Kucing dan Agama Islam
                        </span>
                    </motion.h2>
                    <Hadits />
                    <HaditsCaption />
                    <AshCat />
                    <BrownCat />
                    <Quotes />
                </div>
            </div>
            <div className="space-y-8 py-24 flex-col relative bg-[#35472D]">
                <motion.h2
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`relative z-40 mx-auto max-w-3xl text-center text-2xl font-bold font-[500] leading-snug text-white lg:text-xl xl:text-2xl ${interFont.className}`}
                    >
                    <span className="relative z-40">
                        Nabi Muhammad SAW diketahui memiliki kucing bernama Muezza,
                        dan pernah berpesan kepada sahabatnya agar menyayangi kucing
                        peliharaan layaknya keluarga sendiri
                    </span>
                </motion.h2>

                <Paragraph className={`font-[300] text-white ${interFont.className}`}>
                    <p>
                        Kepercayaan mengenai kucing tidak hanya tertuang dalam mitos-mitos di 
                        berbagai daerah, namun agama pun demikian. Agama Islam sebagai 
                        agama mayoritas yang dianut masyarakat Indonesia pun punya 
                        ajaran tentang kucing.
                    </p>
                    <p>
                        Dalam ajaran Islam, kucing disebut sebagai hewan 
                        kesayangan Nabi Muhammad SAW. “Kucing tidak najis. 
                        Ia binatang yang ada di sekitar kalian,” demikian 
                        bunyi Hadis Riwayat (HR) Abu Dawud dan Tirmidzi. 
                        Untuk itu, hukum memelihara kucing untuk umat 
                        Islam ialah boleh. 
                    </p>
                    <p>
                        Nabi Muhammad SAW juga pernah berpesan untuk menyayangi 
                        kucing peliharaan layaknya keluarga sendiri. Ia dapat 
                        memberikan kebahagiaan bagi manusia, meredakan amarah, 
                        dan stres manusia. Nabi pun memiliki kucing peliharaan 
                        bernama Muezza.
                    </p>
                    <p>
                        Dahulu kala, ada seorang penyair dan penulis wisata dari Amerika Serikat, 
                        Bayard Taylor (1825-1878), terkejut saat melihat sebuah rumah sakit di 
                        Suriah dihuni banyak kucing. Kucing domestik di sana dilindungi dan 
                        dipelihara oleh sebuah lembaga yang didanai dari wakaf, termasuk upah 
                        pengasuh, perawatan, dan makanan kucing.
                    </p>
                    <p>
                        Salah satu hadis riwayat al-Bukhari No. 3482 versi Fathul Bari 
                        Kitab hadis tentang para Nabi yang artinya: telah bercerita 
                        kepadaku 'Abdullah bin Muhammad bin Asma' telah bercerita kepada 
                        kami Juwairiyah bin Asmai dari Nafi' dari 'Abdullah bin 
                        'Umar radhiallahu'anhuma bahwa Nabi Muhammad SAW bersabda, 
                        "Ada seorang wanita disiksa disebabkan seekor kucing yang 
                        dikurungnya hingga mati kelaparan, lalu wanita itu pun masuk 
                        neraka karena dia tidak memberinya makan dan minum ketika 
                        mengurungnya, dan tidak melepaskannya, sehingga dia dapat 
                        menyantap serangga tanah
                    </p>
                    <p>
                        Lantas, apakah agama menjadi alasan masyarakat Indonesia 
                        untuk memelihara kucing? Sebagian ya, dan sebagian lainnya tidak. 
                        Rissa dan Brasti mengaku bahwa agama bukanlah alasan mereka memilih 
                        kucing sebagai peliharaan. Namun sebagaimana disinggung Baindro 
                        Wisnuyana dan Eka Yuniati dalam penelitiannya di jurnal Solidarity 
                        mengenai dampak memelihara kucing saat pandemi Covid-19, ada yang 
                        memelihara kucing karena hewan tersebut tidak dianggap najis dalam 
                        agama Islam.
                    </p>
                </Paragraph>

            </div>
        </section>
    );
}