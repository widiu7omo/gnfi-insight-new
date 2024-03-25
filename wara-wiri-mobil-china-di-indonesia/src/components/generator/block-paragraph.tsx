import { useBlocks } from "@/store/useBlocks";
import type { ParagraphType } from "@/stories/Paragraph";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TrashIcon } from "lucide-react";
import Input from "../reusable/input";
import { useState } from "react";
type BlockParagraphType = {
	sectionId: string;
	index: number;
};
export default function BlockParagraph({
	sectionId,
	index,
}: BlockParagraphType) {
	const [blocks, setBlocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as ParagraphType;
	const [paragraphState, setParagraphState] = useState<ParagraphType>(
		componentProps ?? {
			className: "",
			children: "",
		},
	);
	const saveConfig = () => {
		const updatedBlock = { ...block, componentProps: paragraphState };
		sectionBlocks[index] = updatedBlock;
		setBlocks((prev) => {
			const currentSections = {
				[sectionId]: sectionBlocks,
			};
			return { ...prev, ...currentSections };
		});
	};
	const editor = useEditor({
		extensions: [StarterKit],
		content:
			((blocks[sectionId][index].componentProps as ParagraphType)
				.children as string) ?? "<p>Edit Paragraph Here ! 🌎️</p>",
		onBlur: () => {
			setBlocks((prev) => {
				const currentBlock = prev[sectionId][index];
				const componentProps = currentBlock.componentProps as ParagraphType;
				componentProps.children = editor?.getHTML() ?? "";
				prev[sectionId][index] = { ...currentBlock, componentProps };
				const currentSections = prev[sectionId];
				return { ...prev, [sectionId]: currentSections };
			});
		},
	});
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
	const handleParagraphState = (key: keyof ParagraphType, value: unknown) => {
		setParagraphState((prev) => ({
			...prev,
			[key]: value,
		}));
	};
	return (
		<div className="p-4 space-y-4">
			<div className="text-xl font-semibold flex justify-between">
				<span>Paragraph Block</span>
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
				<div className="grid grid-cols-4 gap-4">
					<Input
						label="Nama Ornamen Top Right"
						id="otr"
						placeholder="Biarkan kosong jika tidak ada"
						value={paragraphState.ornamentTopRight}
						onBlur={saveConfig}
						onChange={(e) =>
							handleParagraphState("ornamentTopRight", e.target.value)
						}
					/>
					<Input
						label="Nama Ornamen Top Left"
						id="otl"
						placeholder="Biarkan kosong jika tidak ada"
						value={paragraphState.ornamentTopLeft}
						onBlur={saveConfig}
						onChange={(e) =>
							handleParagraphState("ornamentTopLeft", e.target.value)
						}
					/>
					<Input
						label="Nama Ornamen Bottom Left"
						id="obl"
						placeholder="Biarkan kosong jika tidak ada"
						value={paragraphState.ornamentBottomLeft}
						onBlur={saveConfig}
						onChange={(e) =>
							handleParagraphState("ornamentBottomLeft", e.target.value)
						}
					/>
					<Input
						label="Nama Ornamen Bottom Right"
						id="obr"
						placeholder="Biarkan kosong jika tidak ada"
						value={paragraphState.ornamentBottomRight}
						onBlur={saveConfig}
						onChange={(e) =>
							handleParagraphState("ornamentBottomRight", e.target.value)
						}
					/>
				</div>
				<small className="text-red-500 pt-2">
					Letakkan ornamen di folder /public/assets/nama-ornamen.svg
				</small>
			</div>
			<div className="flex flex-col">
				<div className="text-sm text-gray-600 pb-1">Style Paragraph</div>
				<Input
					label="Style with Tailwind classes"
					id="className"
					value={paragraphState.className}
					onChange={(e) =>
						setParagraphState((prev) => ({
							...prev,
							className: e.target.value,
						}))
					}
					onBlur={saveConfig}
				/>
			</div>
			<div className="">
				<div className="text-sm text-gray-600 pb-1">Content</div>
				<div className="py-2 bg-white">
					<EditorContent editor={editor} />
				</div>
			</div>
		</div>
	);
}
