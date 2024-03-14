"use client";
import Paragraph from "@/components/reusable/paragraph";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import AshCat from "./ash-cat";
import Hadits from "./hadits";
import Quotes from "./quotes";
import Quote2 from "./quote2";

export const interFont = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function SectionFive() {
	return (
		<section id="section-5" className="">
			<div className="relative bg-[#2d5e16] overflow-hidden">
				<div
					className="absolute top-0 left-0 bottom-0 right-0 opacity-10 bg-contain"
					style={{ backgroundImage: "url('/assets/noise-paper2.jpeg')" }}
				/>

				<div className="space-y-8 h-screen pt-16 flex-col ">
					<motion.h2
						viewport={{ once: true }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className={`relative z-40 mx-auto h-[60px] max-w-3xl text-center text-2xl font-bold leading-snug text-[#FAD30D] lg:text-3xl xl:text-5xl ${interFont.className}`}
					>
						<span className="relative z-40">Kucing dan Agama Islam</span>
					</motion.h2>
					<div className="relative h-full mx-auto flex items-center justify-center max-w-4xl">
						<Hadits />
						<AshCat />
						<Quotes />
					</div>
				</div>
				<div className="space-y-8 py-24 flex-col relative bg-[#35472D]/60">
					<motion.h3
						viewport={{ once: true }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className={`relative z-40 mx-auto max-w-full px-4 md:px-0 xl:max-w-3xl text-center font-medium leading-snug text-white text-xl xl:text-2xl ${interFont.className}`}
					>
						<span className="relative z-40">
							Nabi Muhammad ﷺ diketahui memiliki kucing bernama Muezza, dan
							pernah berpesan kepada sahabatnya agar menyayangi kucing
							peliharaan layaknya keluarga sendiri
						</span>
					</motion.h3>

					<Paragraph className={`font-light text-white ${interFont.className}`}>
						<p>
							Kepercayaan mengenai kucing tidak hanya tertuang dalam mitos-mitos
							di berbagai daerah, namun agama pun demikian. Agama Islam sebagai
							agama mayoritas yang dianut masyarakat Indonesia pun punya ajaran
							tentang kucing.
						</p>
						<p>
							Dalam ajaran Islam, kucing disebut sebagai hewan kesayangan Nabi
							Muhammad ﷺ. “Kucing tidak najis. Ia binatang yang ada di sekitar
							kalian,” demikian bunyi Hadis Riwayat (HR) Abu Dawud dan Tirmidzi.
							Untuk itu, hukum memelihara kucing untuk umat Islam ialah boleh. 
						</p>
						<p>
							Nabi Muhammad ﷺ juga pernah berpesan untuk menyayangi kucing
							peliharaan layaknya keluarga sendiri. Ia dapat memberikan
							kebahagiaan bagi manusia, meredakan amarah, dan stres manusia.
							Nabi pun memiliki kucing peliharaan bernama Muezza.
						</p>
						<p>
							Dahulu kala, ada seorang penyair dan penulis wisata dari Amerika
							Serikat, Bayard Taylor (1825-1878), terkejut saat melihat sebuah
							rumah sakit di Suriah dihuni banyak kucing. Kucing domestik di
							sana dilindungi dan dipelihara oleh sebuah lembaga yang didanai
							dari wakaf, termasuk upah pengasuh, perawatan, dan makanan kucing.
						</p>
						<p>
							Salah satu hadis riwayat al-Bukhari No. 3482 versi Fathul Bari
							Kitab hadis tentang para Nabi yang artinya: telah bercerita
							kepadaku 'Abdullah bin Muhammad bin Asma' telah bercerita kepada
							kami Juwairiyah bin Asmai dari Nafi' dari 'Abdullah bin 'Umar
							radhiallahu'anhuma bahwa Nabi Muhammad ﷺ bersabda, "Ada seorang
							wanita disiksa disebabkan seekor kucing yang dikurungnya hingga
							mati kelaparan, lalu wanita itu pun masuk neraka karena dia tidak
							memberinya makan dan minum ketika mengurungnya, dan tidak
							melepaskannya, sehingga dia dapat menyantap serangga tanah
						</p>
						<p>
							Lantas, apakah agama menjadi alasan masyarakat Indonesia untuk
							memelihara kucing? Sebagian ya, dan sebagian lainnya tidak. Rissa
							dan Brasti mengaku bahwa agama bukanlah alasan mereka memilih
							kucing sebagai peliharaan. Namun sebagaimana disinggung Baindro
							Wisnuyana dan Eka Yuniati dalam penelitiannya di jurnal Solidarity
							mengenai dampak memelihara kucing saat pandemi Covid-19, ada yang
							memelihara kucing karena hewan tersebut tidak dianggap najis dalam
							agama Islam.
						</p>
					</Paragraph>
				</div>
			</div>
			<Quote2 />
		</section>
	);
}
