import { useBlocks } from "@/store/useBlocks";
import type { SectionHeaderType } from "@/stories/SectionHeader";
import { useState } from "react";
import Textarea from "../reusable/text-area";
import ImageDropzone from "../reusable/image-dropzone";
import BlockWrapper from "./block-wrapper";

type BlockSectionHeaderType = {
	sectionId: string;
	index: number;
};
export default function BlockSectionHeader({
	sectionId,
	index,
}: BlockSectionHeaderType) {
	const [blocks, setBlocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as SectionHeaderType;
	const [sectionHeaderState, setSectionHeaderState] =
		useState<SectionHeaderType>(
			componentProps ?? {
				title: "",
				coverImage: "",
				customTitle: "",
				className: "",
			},
		);
	const saveConfig = () => {
		const updatedBlock = { ...block, componentProps: sectionHeaderState };
		sectionBlocks[index] = updatedBlock;
		setBlocks((prev) => {
			const currentSections = {
				[sectionId]: sectionBlocks,
			};
			return { ...prev, ...currentSections };
		});
	};
	const handleSectionHeaderState = (
		key: keyof SectionHeaderType,
		value: unknown,
	) => {
		setSectionHeaderState((prev) => ({
			...prev,
			[key]: value,
		}));
	};
	return (
		<BlockWrapper sectionId={sectionId} index={index} label="Section Header Block">
			<div className="grid grid-cols-4 gap-4">
				<div className="flex flex-col w-full">
					<div className="text-sm text-gray-600 pb-1">Configuration</div>
					<div className="w-full space-y-4">
						<Textarea
							label="Title"
							id="title"
							value={sectionHeaderState.title}
							onBlur={saveConfig}
							onChange={(e) => handleSectionHeaderState("title", e.target.value)}
						/>
						<Textarea
							label="Custom Html Title"
							id="customTitle"
							placeholder="Isi dengan html dan classnya jika ingin membuat custom title, jika tidak kosongkan saja"
							className="col-span-2"
							value={sectionHeaderState.customTitle as string}
							onBlur={saveConfig}
							onChange={(e) =>
								handleSectionHeaderState("customTitle", e.target.value)
							}
						/>
						<Textarea
							label="Heading Style"
							id="className"
							helperText="Use tailwindcss classes"
							value={sectionHeaderState.className}
							onChange={(e) =>
								setSectionHeaderState((prev) => ({
									...prev,
									className: e.target.value,
								}))
							}
							onBlur={saveConfig}
						/>
					</div>
				</div>
				<div className="flex flex-col col-span-3">
					<ImageDropzone
						name={`heading-image-${sectionId}`}
						label="Heading Image"
						className="col-span-2"
						defaultPreview={sectionHeaderState.coverImage}
						onBlur={saveConfig}
						onUploaded={(file) => {
							handleSectionHeaderState("coverImage", file.preview)
							// setTimeout(() => {
							// 	saveConfig()
							// }, 1000)
						}} />

				</div>
			</div>
		</BlockWrapper>
	);
}
