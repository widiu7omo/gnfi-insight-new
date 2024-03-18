import { TrashIcon } from "lucide-react";
import Input from "../reusable/input";
import Textarea from "../reusable/text-area";
import { useBlocks } from "@/store/useBlocks";
type BlockHeroType = {
	sectionId: string;
	index: number;
};
export default function BlockHero({ sectionId, index }: BlockHeroType) {
	const [blocks, setBlocks] = useBlocks();

	const removeBlock = () => {
		setBlocks((prev) => {
			prev[sectionId].splice(index, 1);
			for (const block of prev[sectionId]) {
				const index = prev[sectionId].indexOf(block);
				block.order = index;
				block.index = index;
			}
			const currentSections = prev[sectionId];
			return { ...prev, [sectionId]: currentSections };
		});
	};
	return (
		<div className="p-4">
			<div className="text-xl font-semibold flex justify-between">
				<span>Hero Configuration</span>
				<button
					onClick={removeBlock}
					type="button"
					className="text-white bg-red-800 rounded-lg text-sm px-3 py-2 transition-all inline-flex"
				>
					<TrashIcon size={20} className="mr-2" />
					<span>Remove Block</span>
				</button>
			</div>
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
