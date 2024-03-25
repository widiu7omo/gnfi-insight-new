import { useBlocks } from "@/store/useBlocks";
import type { SectionHeaderType } from "@/stories/SectionHeader";
import { TrashIcon } from "lucide-react";
import { useState } from "react";
import Input from "../reusable/input";
import Textarea from "../reusable/text-area";

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
		<div className="p-4 space-y-4">
			<div className="text-xl font-semibold flex justify-between">
				<span>Section Header Block</span>
				<button
					onClick={removeBlock}
					type="button"
					className="text-white bg-red-800 rounded-lg text-sm px-3 py-2 transition-all inline-flex"
				>
					<TrashIcon size={20} className="mr-2" />
					<span>Remove Block</span>
				</button>
			</div>
			<div className="flex flex-col">
				<div className="text-sm text-gray-600 pb-1">Configuration</div>
				<div className="grid grid-cols-2 gap-4">
					<Input
						label="Title"
						id="title"
						value={sectionHeaderState.title}
						onBlur={saveConfig}
						onChange={(e) => handleSectionHeaderState("title", e.target.value)}
					/>
					<Input
						label="Cover url"
						id="coverUrl"
						required
						value={sectionHeaderState.coverImage}
						onBlur={saveConfig}
						onChange={(e) =>
							handleSectionHeaderState("coverImage", e.target.value)
						}
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
				</div>
				<small className="text-red-500 pt-2">
					{/* Letakkan ornamen di folder /public/assets/nama-ornamen.svg */}
				</small>
			</div>
			<div className="flex flex-col">
				<div className="text-sm text-gray-600 pb-1">Customize Header</div>
				<Input
					label="Style with Tailwind classes"
					id="className"
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
	);
}
