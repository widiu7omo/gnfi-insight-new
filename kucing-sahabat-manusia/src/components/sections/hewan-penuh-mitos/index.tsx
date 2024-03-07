"use client";
import Paragraph from "@/components/reusable/paragraph";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Ornament1 from "./ornament1";
import Ornament2 from "./ornament2";
import BlackCat from "./black-cat";
import CalicoCat from "./calico-cat";
import Rectangle from "./rectangle";

export const interFont = Inter({
    subsets: ["latin"],
    display: "swap",
});


export default function SectionFour() {
    return (
        <section id="section-4" className="">
            <div className="space-y-8 flex item-center h-screen pt-52 flex-col relative bg-[#343434]">
                <div>
                    <Ornament1 />
                    <motion.h2
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`relative z-10 mx-auto max-w-3xl text-center text-2xl font-bold font-[700] leading-snug text-[#FAD30D] lg:text-3xl xl:text-5xl ${interFont.className}`}
                    >
                        <span className="relative z-50">
                            Hewan Penuh Mitos
                        </span>
                        {/* <Ornament1 /> */}
                    </motion.h2>

                    <Paragraph
                        className={`pt-9 z-30 text-[#FAD30D] ${interFont.className} relative font-[300]`}
                    >
                        <Ornament2 />
                        <p>
                            Di balik keberadaannya sebagai  hewan yang banyak 
                            digemari manusia, kucing menyimpan banyak mitos. 
                            Ya, masyarakat dari berbagai daerah di Indonesia 
                            mengenal beragam mitos mengenai kucing. 
                        </p>
                        <p>
                            Kebudayaan Jawa bahkan mengenal sebuah naskah 
                            yang membahas mitos-mitos seputar kucing ini, 
                            namanyai Serat Ngalamating Kucing.  Mirya A 
                            dalam penelitiannya yang diterbitkan Jurnal 
                            NUSA menjelaskan bahwa naskah tersebut mencatat 
                            mitos hubungan antara warna kucing tertentu 
                            dengan nasib yang akan menimpa pemiliknya.
                        </p>
                        <p>
                            Misalnya saja, kucing yang berbulu hitam dan 
                            berekor panjang disebut sebagai Kucing Putra 
                            Kajetaka. Kucing tersebut dianggap sebagai kucing
                            pembawa sial dan dapat membuat pemiliknya memuntahkan
                            darah. Lalu masih dengan kucing hitam yang 
                            dipercaya banyak membawa kesialan, ada pula 
                            Durjana Kapethuk dengan ciri-ciri kucing 
                            berwarna hitam tetapi mulut dan kepalanya 
                            berwarna belang. Kucing ini dipercaya dapat 
                            membawa nasib buruk bagi yang memelihara 
                            sehingga siapa pun yang memelihara kucing ini 
                            akan mendapatkan musibah dan keinginannya 
                            tidak akan tercapai. 
                        </p>
                        <p>
                            Tak hanya nasib buruk, ada pula warna kucing 
                            yang diyakini membawa nasib baik.Kucing yang 
                            badannya berwarna hitam sedangkan kakinya berwarna
                            belang putih dipercaya dapat memberikan kebahagiaan.
                            Apalagi, jika jenis kucing yang dipelihara berekor
                            tumpul. Kucing ini disebut sebagai Leksana Nira.
                            Kucing yang punggungnya berwarna belang dan warna
                            mukanya sama dengan warna bulu di badannya
                            dipercaya membawa hal baik. Kucing yang
                            dinamakan Sangga Buwana ini disebutkan bahwa
                            siapa saja yang memelihara kucing ini akan
                            terkabul doa-doanya. Apalagi, jika yang
                            dipelihara adalah kucing yang berekor
                            tumpul.
                        </p>
                        <p>
                            Di luar Jawa, mitos tentang kucing juga dikenal,
                            misalnya Masyarakat Sulawesi Selatan punya
                            cerita rakyat Meong Palo Karellae atau kucing
                            belang tiga. Cerita rakyat ini tercatat
                            dalam berjudul kitab Sureq La Galigo.
                        </p>
                        <p>
                            Kucing belang tiga berjenis kelamin jantan
                            adalah hal yang langka. Kelangkaan kucing 
                            itu kerap dikaitkan dengan mitos bahwa 
                            hewan tersebut merupakan pengawal setia 
                            Sangiang Serri (Dewi Padi).
                        </p>
                        <p>
                            Konon, Meong Palo Karellae hidup bahagia 
                            bersama tuannya di Wage, Namun, ia berpindah 
                            tuan dan dibawa ke Lamuru hingga kehidupannya 
                            berubah drastis menjadi menderita.
                        </p>
                        <p>
                            Pada suatu waktu, Meong Palo Karellae pernah 
                            dipukul oleh tuannya, lalu lari  ke tempat 
                            bersemayamnya Sangiang Serri hingga kemudian 
                            mereka pergi ke khayangan karena tidak kuat 
                            hidup di dunia dan akhirnya kembali lagi ke 
                            bumi atas perintah Batara Guru.
                        </p>
                    </Paragraph>
                    <BlackCat />
                    <CalicoCat />
                </div>
            </div>
            <div className="space-y-8 h-screen p-8 flex-col relative bg-[#435348]"></div>
            <div className="space-y-8 h-screen p-8 flex-col relative bg-[#D49C0B]">
                <Rectangle />
            </div>
        </section>
    );
}