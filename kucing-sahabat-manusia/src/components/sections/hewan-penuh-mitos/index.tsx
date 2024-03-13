"use client";
import Paragraph from "@/components/reusable/paragraph";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import BlackCat from "./black-cat";
import Ornament1 from "./ornament1";
import Ornament2 from "./ornament2";
import Rectangle from "./rectangle";
import WhiteCat from "./white-cat";

export const interFont = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function SectionFour() {
	return (
		<section id="section-4" className=" overflow-hidden">
			<div className="space-y-8 flex item-center pb-24 flex-col bg-[#435348] relative">
				<div className="bg-[#343434] top-0 w-full h-screen absolute">
					<BlackCat />
				</div>
				<div className="relative top-0 py-4 xl:py-[8rem]">
					<motion.h2
						viewport={{ once: true }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className={`relative z-40 px-4 md:px-0 mx-auto max-w-full xl:max-w-3xl text-center !text-3xl lg:!text-5xl xl:!text-6xl font-bold leading-snug text-[#FAD30D] ${interFont.className}`}
					>
						<Ornament1 />
						<span className="relative">Hewan Penuh Mitos</span>
					</motion.h2>
					<Paragraph
						className={`z-40 text-white ${interFont.className} relative font-medium`}
					>
						<Ornament2 />
						<p>
							Di balik keberadaannya sebagai hewan yang banyak digemari manusia,
							kucing menyimpan banyak mitos. Ya, masyarakat dari berbagai daerah
							di Indonesia mengenal beragam mitos mengenai kucing.
						</p>
						<p>
							Kebudayaan Jawa bahkan mengenal sebuah naskah yang membahas
							mitos-mitos seputar kucing ini, namanyai Serat Ngalamating Kucing.
							Mirya A dalam penelitiannya yang diterbitkan Jurnal NUSA
							menjelaskan bahwa naskah tersebut mencatat mitos hubungan antara
							warna kucing tertentu dengan nasib yang akan menimpa pemiliknya.
						</p>
						<p>
							Misalnya saja, kucing yang berbulu hitam dan berekor panjang
							disebut sebagai Kucing Putra Kajetaka. Kucing tersebut dianggap
							sebagai kucing pembawa sial dan dapat membuat pemiliknya
							memuntahkan darah. Lalu masih dengan kucing hitam yang dipercaya
							banyak membawa kesialan, ada pula Durjana Kapethuk dengan
							ciri-ciri kucing berwarna hitam tetapi mulut dan kepalanya
							berwarna belang. Kucing ini dipercaya dapat membawa nasib buruk
							bagi yang memelihara sehingga siapa pun yang memelihara kucing ini
							akan mendapatkan musibah dan keinginannya tidak akan tercapai.
						</p>
						<p>
							Tak hanya nasib buruk, ada pula warna kucing yang diyakini membawa
							nasib baik.Kucing yang badannya berwarna hitam sedangkan kakinya
							berwarna belang putih dipercaya dapat memberikan kebahagiaan.
							Apalagi, jika jenis kucing yang dipelihara berekor tumpul. Kucing
							ini disebut sebagai Leksana Nira. Kucing yang punggungnya berwarna
							belang dan warna mukanya sama dengan warna bulu di badannya
							dipercaya membawa hal baik. Kucing yang dinamakan Sangga Buwana
							ini disebutkan bahwa siapa saja yang memelihara kucing ini akan
							terkabul doa-doanya. Apalagi, jika yang dipelihara adalah kucing
							yang berekor tumpul.
						</p>
						<p>
							Di luar Jawa, mitos tentang kucing juga dikenal, misalnya
							Masyarakat Sulawesi Selatan punya cerita rakyat Meong Palo
							Karellae atau kucing belang tiga. Cerita rakyat ini tercatat dalam
							berjudul kitab Sureq La Galigo.
						</p>
						<p>
							Kucing belang tiga berjenis kelamin jantan adalah hal yang langka.
							Kelangkaan kucing itu kerap dikaitkan dengan mitos bahwa hewan
							tersebut merupakan pengawal setia Sangiang Serri (Dewi Padi).
						</p>
						<p>
							Konon, Meong Palo Karellae hidup bahagia bersama tuannya di Wage,
							Namun, ia berpindah tuan dan dibawa ke Lamuru hingga kehidupannya
							berubah drastis menjadi menderita.
						</p>
						<p>
							Pada suatu waktu, Meong Palo Karellae pernah dipukul oleh tuannya,
							lalu lari ke tempat bersemayamnya Sangiang Serri hingga kemudian
							mereka pergi ke khayangan karena tidak kuat hidup di dunia dan
							akhirnya kembali lagi ke bumi atas perintah Batara Guru.
						</p>
					</Paragraph>
				</div>
			</div>

			<div className="relative bg-[#D49C0B] ">
				<div
					className="absolute top-0 left-0 bottom-0 right-0 opacity-10"
					style={{ backgroundImage: "url('/assets/noise-wall.jpeg')" }}
				/>
				<Rectangle />
				<WhiteCat />
				<Paragraph
					className={`relative z-20 py-12 ${interFont.className} relative font-medium`}
				>
					<p>
						Singkat cerita, Meong Palo Karellae dan Sangiang Serri perke ke
						Barru dan disambut masyarakat di sana. Lalu, Sangiang Serri meminta
						masyarakat agar jangan bertengkar, nyalakan lampu pelita pada malam
						hari, jaga agar periuk dan tempat air minum tetap terisi, dan jangan
						pernah melakukan perbuatan curang. Setelahnya Kehidupan manusia pun
						menjadi damai dan penuh rasa saling menghargai.
					</p>
					<p>
						Tak hanya di Indonesia, di belahan dunia lain pun ada mitos tentang
						kucing. Misalnya dalam mitologi Mesir kuno, kucing dianggap sebagai
						Bastet—dewi rumah tangga. Dia bertugas melindungi rumah dari roh
						jahat serta penyakit yang berhubungan dengan wanita dan anak-anak,
						termasuk persalinan. Di samping itu, kucing juga disebut sebagai
						hewan ilahi.
					</p>
					<p>
						Bastet terlahir sebagai putri Dewa Matahari, Ra. Sama seperti banyak
						dewa dalam agama Mesir, dia pun memainkan peran di akhirat, yakni
						pemandu dan penolong orang mati.
					</p>
					<p>
						Britannica menggambarkan Bastet sebagai wanita berkepala kucing,
						membawa sistrum (perkusi kuno) di tangan kanannya, lalu aegis atau
						pelindung dada di tangan kirinya, dan tas kecil di lengan kiri. Dia
						mengenakan gaun berornamen rumit. Kultusnya dibawa ke Italia oleh
						orang Romawi, sedangkan jejaknya telah ditemukan di Roma, Ostia,
						Nemi, dan Pompeii.
					</p>
					<p>
						Di samping mitos kucing dari berbagai wilayah dan negara, ada
						kepercayaan paling populer di tengah masyarakat yang mengatakan
						kucing memiliki sembilan nyawa. Penjelasan logisnya, kucing memiliki
						tubuh yang lentur. Kucing terdiri dari susunan tulang dan otot yang
						lentur sehingga cukup fleksibel. Kondisi tersebut yang menyebabkan
						sebagian besar kucing selamat meskipun jatuh dari ketinggian.
					</p>
				</Paragraph>
			</div>
		</section>
	);
}
