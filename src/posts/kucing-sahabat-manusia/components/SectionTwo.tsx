import { motion } from "motion/react";
import Ornament1 from "./Ornament1";
import { Paragraph } from "@/components/post/paragraph";
import StatsWrapper from "./StatsWrapper";

// export const lilitaOneFont = Lilita_One({
// 	subsets: ["latin"],
// 	display: "swap",
// 	weight: ["400", "400"],
// });
// export const interFont = Inter({
// 	subsets: ["latin"],
// 	display: "swap",
// 	weight: ["400", "400"],
// });
// export const heliumFont = localFont({
// 	src: "./fonts/helium.ttf",
// 	display: "swap",
// 	style: "normal",
// });
export default function SectionTwo() {
	return (
		<section id="section-2" className="">
			<div className="space-y-8 h-fit xl:h-screen flex items-center justify-center flex-col relative bg-linear-to-b from-[#FFF4E4] to-[#E5E7E4]">
				<Ornament1 />
				<div>
					<motion.h2
						viewport={{ once: true }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className={`relative z-10 mx-auto max-w-3xl text-center font-bold leading-snug text-dark text-3xl lg:text-5xl xl:text-6xl font-lilita-one`}
					>
						<span className="relative z-50 text-neutral-900">
							Data Membuktikan, Orang Indonesia Suka Kucing
						</span>
					</motion.h2>

					<Paragraph className={`pt-9 text-dark font-sans relative font-medium`}><>
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
					</>
					</Paragraph>
				</div>
			</div>
			<div className="bg-[#E5E7E4] pt-8">
				<div className="max-w-xl mx-auto text-center text-2xl lg:text-3xl xl:text-5xl font-bold leading-snug text-black">
					<span
						className={`text-[#F09A00] font-medium font-helium relative w-fit`}
					>
						<span>Kucing,</span>
						<motion.img
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							src={`/assets/kucing-sahabat-manusia/foot-left.png`}
							alt="Foot Left"
							className="size-4 xl:size-6 absolute -top-[20%] left-[30%]"
						/>
						<motion.img
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.6 }}
							src={`/assets/kucing-sahabat-manusia/foot-right.png`}
							alt="Foot Left"
							className="size-4 xl:size-6 absolute -top-[40%] left-[50%]"
						/>
					</span>{" "}
					Hewan Favorit Masyarakat Indonesia
				</div>
			</div>
			<StatsWrapper />
		</section>
	);
}
