import { MouseIcon, TrashIcon } from "lucide-react";
import Input from "../reusable/input";
import Textarea from "../reusable/text-area";
import { useBlocks } from "@/store/useBlocks";
import type { HeroType } from "@/stories/Hero";
import { useState } from "react";
type BlockHeroType = {
	sectionId: string;
	index: number;
};
export default function BlockHero({ sectionId, index }: BlockHeroType) {
	const [blocks, setBlocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as HeroType;
	const [heroState, setHeroState] = useState<HeroType>(
		componentProps ?? {
			title: "",
			coverUrl: "",
			gradientColor: "",
			swipeUpIcon: <MouseIcon />,
		},
	);
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
	const saveConfig = () => {
		const updatedBlock = { ...block, componentProps: heroState };
		sectionBlocks[index] = updatedBlock;
		setBlocks((prev) => {
			const currentSections = {
				[sectionId]: sectionBlocks,
			};
			return { ...prev, ...currentSections };
		});
	};

	return (
		<div className="p-4">
			<div className="text-xl font-semibold flex justify-between">
				<span>Hero Block</span>
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
				<Input
					label="Title"
					id="title"
					placeholder="Judul Artikel"
					required
					value={(heroState?.title as string) ?? ""}
					onChange={(e) => {
						setHeroState((prev) => ({
							...prev,
							title: e.target.value ?? "",
						}));
					}}
				/>
				<Input
					label="Cover URL"
					id="coverUrl"
					required
					value={heroState.coverUrl ?? ""}
					placeholder="Masukkan url untuk memberi background gambar pada hero"
					onChange={(e) =>
						setHeroState((prev) => ({ ...prev, coverUrl: e.target.value }))
					}
				/>
				<Input
					label="Swipe Icon"
					id="swipeIcon"
					required
					value={heroState.swipeUpIcon as string}
					placeholder="Ambil icon dari Lucide Icon"
					onChange={(e) =>
						setHeroState((prev) => ({ ...prev, swipeUpIcon: e.target.value }))
					}
				/>
				<Textarea
					label="Tailwind Class Gradient Color"
					className="col-span-2"
					id="gradientColor"
					value={heroState.gradientColor as string}
					placeholder="Biarkan kosong jika tidak ingin warna gradient"
					onChange={(e) =>
						setHeroState((prev) => ({ ...prev, gradientColor: e.target.value }))
					}
				/>
				<button
					onClick={saveConfig}
					className="px-3 py-2 font-medium text-sm bg-black text-white rounded"
					type="button"
				>
					Save Config
				</button>
			</div>
		</div>
	);
}
