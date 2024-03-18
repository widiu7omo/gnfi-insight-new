import { useBlocks } from "@/store/useBlocks";
import { TrashIcon } from "lucide-react";

export type BlockNavbarType = {
	sectionId: string;
	index: number;
};
export default function BlockNavbar({ sectionId, index }: BlockNavbarType) {
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
			<div className="grid grid-cols-4 gap-4 pt-3">
				<fieldset className="flex items-center">
					<input id="blurEffect" type="checkbox" className="mr-2" />
					<label
						htmlFor="blurEffect"
						className="text-gray-500 font-medium text-sm tracking-wide"
					>
						Blur Transparent Navbar
					</label>
				</fieldset>
			</div>
		</div>
	);
}
