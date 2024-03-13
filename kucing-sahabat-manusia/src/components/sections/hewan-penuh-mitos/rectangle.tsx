"use client";
import Paragraph from "@/components/reusable/paragraph";
import { Inter } from "next/font/google";
import CalicoCat from "./calico-cat";
import Ornament3 from "./ornament3";

export const interFont = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function Rectangle() {
	return (
		<div className="bg-[#2C2C2C] px-20 py-12 max-w-2xl mx-auto relative -top-[7rem] -mb-[7rem]">
			<CalicoCat />
			<Paragraph
				className={` text-white ${interFont.className} relative font-base text-xl`}
			>
				<div className="relative">
					<Ornament3 />
					<p>Masyarakat di berbagai daerah mengenal mitos mengenai kucing</p>
					<p>
						Di Jawa, ada naskah bernama{" "}
						<i className={"text-[#FAD30D] font-bold"}>
							Serat Ngalamating Kucing
						</i>
						. Isinya adalah catatan mengenai hubungan antara warna kucing
						tertentu dengan nasib yang akan menimpa pemiliknya.
					</p>
					<p>
						Di luar Jawa, salah satu mitos tentang kucing yang dikenal, adalah
						punya cerita Sulawesi Selatan
						<i className={"text-[#FAD30D] font-bold"}> Meong Palo Karellae</i>{" "}
						atau
						<i className={"text-[#FAD30D] font-bold"}> kucing belang tiga</i>.
						Cerita rakyat ini tercatat dalam berjudul kitab
						<i className={"text-[#FAD30D] font-bold"}> Sureq La Galigo</i>
					</p>
				</div>
				<p className={"font-semibold text-2xl"}>
					Ada pula kepercayaan bahwa kucing memiliki sembilan nyawa
				</p>
				<p>
					Penjelasan logisnya, kucing memiliki tubuh yang lentur. Kucing terdiri
					dari susunan tulang dan otot yang lentur sehingga cukup fleksibel.
					Kondisi tersebut yang menyebabkan sebagian besar kucing selamat
					meskipun jatuh dari ketinggian.
				</p>
			</Paragraph>
		</div>
	);
}
