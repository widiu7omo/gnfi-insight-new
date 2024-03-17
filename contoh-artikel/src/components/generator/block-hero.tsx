import Input from "../reusable/input";
import Textarea from "../reusable/text-area";

export default function BlockHero() {
	return (
		<div className="p-4">
			<h6 className="text-xl font-semibold">Hero Configuration</h6>
			<div className="grid grid-cols-2 gap-4 pt-3">
				<Input label="Title" id="title" placeholder="Judul Artikel" />
				<Input
					label="Cover URL"
					id="coverUrl"
					required
					placeholder="Masukkan url untuk memberi background gambar pada hero"
				/>
				<Input
					label="Swipe Icon"
					id="swipeIcon"
					placeholder="Ambil icon dari Lucide Icon"
				/>
				<Textarea
					label="Tailwind Class Gradient Color"
					className="col-span-2"
					id="gradientColor"
					placeholder="Biarkan kosong jika tidak ingin warna gradient"
				/>
			</div>
		</div>
	);
}
