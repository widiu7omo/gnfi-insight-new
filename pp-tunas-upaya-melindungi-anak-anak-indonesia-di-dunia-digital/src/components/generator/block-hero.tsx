import { MouseIcon, TrashIcon, ViewIcon } from "lucide-react";
import Input from "../reusable/input";
import Textarea from "../reusable/text-area";
import { useBlocks } from "@/store/useBlocks";
import { Hero, type HeroType } from "@/stories/Hero";
import { useState } from "react";
import toast from "react-hot-toast";
import { COMPONENT_HERO } from "@/data/component-front";
import ImageDropzone from "../reusable/image-dropzone";
import BlockWrapper from "./block-wrapper";
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
	const saveConfig = () => {
		const updatedBlock = { ...block, componentProps: heroState };
		sectionBlocks[index] = updatedBlock;
		setBlocks((prev) => {
			const currentSections = {
				[sectionId]: sectionBlocks,
			};
			return { ...prev, ...currentSections };
		});
		toast.success("Configuration Saved")
	};

	return (
		<BlockWrapper label="Hero Block" sectionId={sectionId} index={index}>
			<div className="grid grid-cols-2 gap-4 pt-3">
				<Input
					label="Hero Title"
					placeholder="Hero Title"
					required
					value={(heroState?.title as string) ?? ""}
					onChange={(e) => {
						setHeroState((prev) => ({
							...prev,
							title: e.target.value ?? "",
						}));
					}}
					onBlur={saveConfig}
				/>
				<Input
					label="Swipe Icon"
					id="swipeIcon"
					required
					value={heroState.swipeUpIcon as string}
					placeholder="Get icon from lucide icon"
					helperText="Get icon from lucide icon"
					onChange={(e) =>
						setHeroState((prev) => ({ ...prev, swipeUpIcon: e.target.value }))
					}
					onBlur={saveConfig}
				/>
				<ImageDropzone
					name={`hero-image-${sectionId}`}
					label="Hero Image"
					onBlur={() => console.log('Blurr Input')}
					className="col-span-2"
					defaultPreview={heroState.coverUrl}
					onUploaded={(file) => {
						setHeroState((prev) => ({ ...prev, coverUrl: file.preview }))
						// setTimeout(() => {
						// 	saveConfig()
						// }, 2000)
					}} />
				<Textarea
					label="Tailwind Class Gradient Color"
					className="col-span-2"
					id="gradientColor"
					value={heroState.gradientColor as string}
					placeholder="Biarkan kosong jika tidak ingin warna gradient"
					onChange={(e) =>
						setHeroState((prev) => ({ ...prev, gradientColor: e.target.value }))
					}
					onBlur={saveConfig}
				/>
			</div>
		</BlockWrapper>
	);
}
