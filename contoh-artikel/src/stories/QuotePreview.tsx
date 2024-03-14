import Quote1 from "@/components/reusable/quote1";
import Quote2 from "@/components/reusable/quote2";
import Quote3 from "@/components/reusable/quote3";
type QuotePreviewType = {
	variant: number;
};
export function QuotePreview({ variant }: QuotePreviewType) {
	switch (variant) {
		case 1:
			return (
				<div className="bg-orange-200">
					<div className="max-w-2xl mx-auto py-8">
						{/* Only get this */}
						<Quote1
							figureUrl="assets/figure-example.png"
							figureName="SBY"
							quote="“Karena buat Soekarno tak ada kota lain yang punya identitas seperti Jakarta yang menjadi wadah tumbuhnya nasionalisme di Indonesia. Puncak nasionalisme di Indonesia itu di Jakarta. Inilah ibukota politik, tak tergantikan. Ini orientasi Soekarno,” ujar Rizal yang dimuat Kompas."
						/>
					</div>
				</div>
			);
		case 2:
			return (
				<div className="max-w-xl mx-auto py-12">
					<Quote2
						figureUrl="assets/figure-example.png"
						figureName="SBY"
						quote="“Meski ibu kota pindah, Jakarta tetap akan berfungsi sebagai pusat ekonomi dan perdagangan,” kata SBY kala itu."
					/>
				</div>
			);
		case 3:
			return (
				<div className="max-w-full mx-auto py-12">
					<Quote3
						figureUrl="assets/figure-square-example.png"
						figureName="Bambang Brodjonegoro"
						figureDesc="Guru Besar Fakultas Ekonomi dan Bisnis Universitas Indonesia dan eks Menteri Perencanaan Pembangunan Nasional Indonesia/Kepala Bappenas"
						quote="Dengan IKN, kita berharap, ketika kita membangun kota dari nol, kita akan munya kota yang menjadi standar bagi pembangunan kota lain di Indonesia"
					/>
				</div>
			);
	}
}
