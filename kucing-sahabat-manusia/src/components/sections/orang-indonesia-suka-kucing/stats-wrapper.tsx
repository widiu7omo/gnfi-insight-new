import Paragraph from "@/components/reusable/paragraph";
import { motion } from "framer-motion";
import StatsCat from "./stats-cat";
import StatsDog from "./stats-dog";
import StatsParrot from "./stats-parrot";
import { baseUrl } from "@/constants/meta";
export default function StatsWrapper() {
	return (
		<div className="bg-[#E5E7E4]">
			<div className="relative overflow-hidden xl:overflow-visible">
				<div className="absolute top-0 z-[5] left-0 right-0 bottom-0 bg-gradient-to-b from-[#E5E7E4] to-white/0" />
				<div className="mx-auto z-0 w-full flex items-center justify-center pb-[8rem]">
					<img
						src={`${baseUrl}/assets/sofa.png`}
						alt="Sofa"
						className="relative z-0 max-w-full xl:max-w-7xl mx-auto"
					/>
					<motion.img
						initial={{ opacity: 0, scale: 0.5, x: -100, y: 100 }}
						whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
						transition={{ delay: 0.6 }}
						src={`${baseUrl}/assets/stats-parrot.png`}
						alt="Parrot"
						className="absolute w-[180px] xl:w-[400px] ml-[10rem] xl:ml-[20rem] mt-[10rem] z-10"
					/>
					<motion.img
						initial={{ opacity: 0, scale: 0.5, x: 100, y: 100 }}
						whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
						transition={{ delay: 0.4 }}
						src={`${baseUrl}/assets/stats-dog.png`}
						alt="Dog"
						className="absolute w-[220px] xl:w-[450px] mr-[5rem] xl:mr-[12rem] mt-[10rem] z-10"
					/>
					<motion.img
						initial={{ opacity: 0, scale: 0.5, y: 100 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						src={`${baseUrl}/assets/stats-cat.png`}
						alt="Cat"
						className="absolute w-[200px] xl:w-[400px] ml-10 z-10"
					/>
					<StatsCat />
					<StatsDog />
					<StatsParrot />
					<div className="absolute max-w-7xl z-10 bottom-[2rem] xl:bottom-[8rem]">
						<img
							src={`${baseUrl}/assets/animal-group-1.png`}
							alt="Animals Group 1"
							className="w-full"
						/>
						<img
							src={`${baseUrl}/assets/animal-group-2.png`}
							alt="Animals Group 2"
							className="w-full"
						/>
						<img
							src={`${baseUrl}/assets/animal-footer.png`}
							alt="Animals Group Footer"
							className="w-full px-1"
						/>
					</div>
				</div>
			</div>
			<Paragraph className="py-8">
				<p>
					Pertama-tama, mari kita lihat mengenai data dari lingkup Asia terlebih
					dahulu. Seperti yang diungkapkan dalam survei Rakuten Insight Center
					dengan responden sebanyak 97.000 dari 12 negara di Asia, kucing dan
					anjing jadi hewan yang paling umum dipelihara.
				</p>

				<p>
					Terkhusus untuk kucing, Indonesia menjadi nomor satu yang paling
					banyak memeliharanya di Asia (47 persen total responden Indonesia),
					disusul dengan Filipina, Thailand, dan Vietnam.
				</p>

				<p>
					Pembahasan lebih lanjut mengenai data pemelihara hewan di Indonesia
					pernah dibahas oleh GoodStats dalam artikelnya berjudul Ragam
					Statistik Hewan Peliharaan di Indonesia. Terkait kepemilikan, sebagian
					besar pemilik hewan peliharaan di Indonesia mendapatkannya dari
					saudara atau kerabat.Bila melihat dari segi demografi umur, kucing
					juga jadi hewan yang paling banyak dipelihara dari usia berapa saja.
					Selanjutnya ada ikan dan burung yang menjadi hewan paling banyak
					dipelihara.
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
	);
}
