import Paragraph from "@/components/reusable/paragraph";
import Header from "./header";
import Ornament1 from "./ornament1";
import Ornament2 from "./ornament2";
import SliderCats from "./slider-cats";

export default function SectionSix() {
	return (
		<section id="section-6" className="bg-[#060609]">
			<Header />
			<div className="relative">
				<Paragraph className="text-white relative py-8 z-0">
					<Ornament1 />
					<Ornament2 />
					<p>
						Ada banyak jenis kucing yang ada di dunia, termasuk yang dipelihara
						manusia. Rissa misalnya, memelihara kucing berjenis himalaya,
						sementara Brasti memelihara kucing domestik atau kampung serta
						campuran.
					</p>

					<p>
						Kucing-kucing menggemaskan tidak hanya berasal dari jenis asal luar
						negeri. Sebagai negara yang kaya, Indonesia juga memiliki
						jenis-jenis kucing yang tak kalah menarik. Namun perlu diingat,
						kucing asli Indonesia ini kebanyakan merupakan jenis liar yang
						dilindungi sehingga tidak sembarangan untuk memeliharanya.
					</p>

					<p className="font-bold">
						Berikut ini beberapa jenis kucing lucu asli Indonesia:
					</p>
				</Paragraph>
				<div className="z-10 bottom-0 w-full overflow-hidden">
					<SliderCats />
				</div>
			</div>
		</section>
	);
}
