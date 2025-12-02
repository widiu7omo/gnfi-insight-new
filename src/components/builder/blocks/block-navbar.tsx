import { useBlocks } from "@/store/useBlocks";
import type { NavbarType } from "@/components/post/navbar";
import BlockWrapper from "./block-wrapper";

export type BlockNavbarType = {
	sectionId: string;
	index: number;
	saveConfig: (index: number, updater: ((prev: unknown) => unknown) | unknown) => void;
};
export default function BlockNavbar({ sectionId, index, saveConfig }: BlockNavbarType) {
	const [blocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as NavbarType;

	const changeConfig = (
		key: keyof NavbarType,
		value: NavbarType[keyof NavbarType],
	) => {
		const updatedProps = { ...componentProps, [key]: value };
		saveConfig(index, updatedProps);
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
