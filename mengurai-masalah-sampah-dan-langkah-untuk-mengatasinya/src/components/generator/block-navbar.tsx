import { useBlocks } from "@/store/useBlocks";
import type { NavbarType } from "@/stories/Navbar";
import { TrashIcon } from "lucide-react";
import BlockWrapper from "./block-wrapper";

export type BlockNavbarType = {
	sectionId: string;
	index: number;
};
export default function BlockNavbar({ sectionId, index }: BlockNavbarType) {
	const [blocks, setBlocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as NavbarType;
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
	const changeConfig = (
		key: keyof NavbarType,
		value: NavbarType[keyof NavbarType],
	) => {
		const updatedProps = { ...componentProps, [key]: value };
		const updatedBlock = { ...block, componentProps: updatedProps };
		sectionBlocks[index] = updatedBlock;
		setBlocks((prev) => {
			const currentSections = {
				[sectionId]: sectionBlocks,
			};
			return { ...prev, ...currentSections };
		});
	};
	return (
		<BlockWrapper label="Navbar Block" sectionId={sectionId} index={index}>
			<div>
				<div className="text-sm text-gray-500">Configuration</div>
				<div className="grid grid-cols-1 xl:grid-cols-4 gap-4 pt-2">
					<fieldset className="flex items-center">
						<input
							id="blurEffect"
							type="checkbox"
							className="mr-2"
							defaultChecked={componentProps?.blurEffect ?? false}
							onChange={(e) =>
								changeConfig("blurEffect", e.currentTarget.checked)
							}
						/>
						<label
							htmlFor="blurEffect"
							className="text-gray-500 font-medium text-sm tracking-wide"
						>
							Blur Transparent Navbar
						</label>
					</fieldset>
				</div>
			</div>
		</BlockWrapper>
	);
}
