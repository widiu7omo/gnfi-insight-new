import { Paragraph } from "@/components/post/paragraph";

export default function CatStatue() {
	return (
		<div className="relative max-w-3xl mx-auto pb-8 pt-20">
			<div className="flex flex-col xl:flex-row items-start justify-center">
				<div className="relative flex-none w-full xl:w-[520px] pb-[12rem]">
					<img
						src={`/assets/kucing-sahabat-manusia/cat-hunt.png`}
						alt="Cat Hunt"
						className="object-cover"
					/>
					<img
						src={`/assets/kucing-sahabat-manusia/cat-statue.png`}
						alt="Cat Statue"
						className="absolute -left-[2rem] xl:-left-[5rem] bottom-0"
					/>
				</div>
				<Paragraph className="grow">
					<>
						<p>
							Domestikasi kucing terjadi pada 10.000 tahun lalu di sebuah wilayah
							Timur Tengah
						</p>
						<p>
							Saat itu,masyarakat menjalin ikatan dengan kucing yang dianggap
							berfungsi sebagai pengendali hama
						</p>
						<p className="font-bold">
							Kucing dibawa berlayar oleh manusia untuk membasmi hama di kapal.
							Itu yang membuat kucing menyebar ke seluruh dunia
						</p>
					</>
				</Paragraph>
			</div>
		</div>
	);
}
