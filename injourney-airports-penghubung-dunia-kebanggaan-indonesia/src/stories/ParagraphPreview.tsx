import { cn } from "@/lib/utils";
import { Paragraph } from "./Paragraph";
import type { ReactNode } from "react";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";

type ParagraphPreviewType = {
	withOrnament?: boolean;
	className?: string;
	ornaments?: ReactNode[];
};
export function ParagraphPreview({
	withOrnament,
	className,
	ornaments = [],
}: ParagraphPreviewType) {
	return (
		<div
			className={cn(
				withOrnament ? "py-0 text-white xl:py-12 bg-orange-900 w-full" : "",
			)}
		>
			<Paragraph
				block={{
					component: COMPONENT_PARAGRAPH,
					componentProps: {
						className: className,
						children: (
							<>
								{ornaments}
								<p>
									Ada sejarahnya bagaimana kucing (Felis catus) bisa banyak
									dipelihara manusia. Jauh sebelum pecinta kucing seperti Rissa
									dan Brasti serta banyak orang Indonesia Lainnya, manusia sudah
									memelihara kucing sejak ribuan tahun silam.
								</p>

								<p>
									Sama halnya dengan hewan peliharaan lainnya, kucing ternyata
									juga merupakan hasil domestikasi dari miacis yang juga
									merupakan nenek moyang dari anjing dan beruang. Miacis ini
									kemudian mengalami evolusi menjadi kucing besar seperti singa
									dan harimau yang kemudian berevolusi menjadi nenek moyang
									kucing domestik. Nenek moyang kucing domestik ini pertama kali
									ditemukan berdasarkan hasil fosil mumi di Mesir.
								</p>

								<p>
									Penelusuran sejarah mencatat bahwa domestikasi kucing terjadi
									pada 10.000 tahun lalu di sebuah wilayah Timur Tengah yang
									mengelilingi Sungai Tigris dan Efrat. Masyarakat mengembangkan
									ikatan dengan kucing sebagai pengendali hama.
								</p>

								<p>
									Wilayah yang diyakini tempat domestikasi kucing pertama
									dikenal sebagai kawasan berbentuk bulan sabit. Setelah 10.000
									tahun berlalu, wilayah tersebut kini menjadi sejumlah negara,
									seperti Irak, Turki, Suriah, Lebanon, Israel, Palestina, dan
									Mesir.
								</p>

								<p>
									Di Mesir, kucing dianggap sebagai dewa oleh rakyat. Pada tahun
									2004, Jean dari National Museum of Natural History in Paris
									melaporkan bahwa ditemukan bukti adanya kuburan manusia dan
									disampingnya terdapat kuburan kucing.
								</p>
								<p>
									“Fosil tersebut diperkirakan berumur 9.500 tahun. Hal ini
									mengungkapkan bahwa telah ada kedekatan antara manusia dan
									kucing sejak 10.000 tahun yang lalu,” tulis Dian Dwi Putri
									Ulan Sari Patongai dalam dalam Evolusi Kucing: Genetika dan
									Evolusi. Dalam tulisan tersebut, diuraikan pula bahwa ahli
									paleogenetik Claudio Ottoni membagi domestikasi kucing terjadi
									dalam dua jenis. Dia juga mengatakan kucing domestik memiliki
									nenek moyang yang sama yaitu berasal dari kucing liar Afrika.
									Penelitian yang dilakukan olehnya juga menjelaskan mengapa
									kucing menyebar ke seluruh dunia. Dirinya menganalisis, DNA
									purba dari sisa-sisa kucing yang ditemukan di kota pelabuhan,
									para ilmuwan menyimpulkan kucing ini dibawa menggunakan kapal.
								</p>
							</>
						),
					},
				}}
			/>
		</div>
	);
}
