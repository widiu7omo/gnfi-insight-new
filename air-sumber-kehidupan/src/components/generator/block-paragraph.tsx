import { useBlocks } from "@/store/useBlocks";
import type { ParagraphType } from "@/stories/Paragraph";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Input from "../reusable/input";
import { useState } from "react";
import ImageDropzone from "../reusable/image-dropzone";
import BlockWrapper from "./block-wrapper";
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
		console.log(paragraphState)
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

	const handleParagraphState = (key: keyof ParagraphType, value: unknown) => {
		setParagraphState((prev) => ({
			...prev,
			[key]: value,
		}));
	};
	return (
		<BlockWrapper label="Paragraph Block" sectionId={sectionId} index={index}>
			<div className="flex flex-col">
				<div className="text-sm text-gray-600 pb-1">Configuration</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-4 border border-gray-200 rounded-2xl p-4">
						<Input
							label="Style Ornamen Top Right"
							id="className"
							value={paragraphState.classOrnamentTopRight}
							onChange={(e) =>
								setParagraphState((prev) => ({
									...prev,
									classOrnamentTopRight: e.target.value,
								}))
							}
							onBlur={saveConfig}
						/>
						<ImageDropzone
							name={`otr-${sectionId}`}
							label="Ornamen Top Right"
							className="col-span-2"
							staticHeight="h-[100px]"
							defaultPreview={paragraphState.ornamentTopRight}
							onUploaded={(file) => {
								handleParagraphState("ornamentTopRight", file.preview)
								// setTimeout(() => {
								// 	saveConfig()
								// }, 1000)
							}} />
					</div>
					<div className="space-y-4 border border-gray-200 rounded-2xl p-4">
						<Input
							label="Style Ornamen Top Left"
							id="className"
							value={paragraphState.classOrnamentTopLeft}
							onChange={(e) =>
								setParagraphState((prev) => ({
									...prev,
									classOrnamentTopLeft: e.target.value,
								}))
							}
							onBlur={saveConfig}
						/>
						<ImageDropzone
							name={`otl-${sectionId}`}
							label="Ornamen Top Left"
							className="col-span-2"
							staticHeight="h-[100px]"
							defaultPreview={paragraphState.ornamentTopLeft}
							onUploaded={(file) => {
								handleParagraphState("ornamentTopLeft", file.preview)
								// setTimeout(() => {
								// 	saveConfig()
								// }, 1000)
							}} />
					</div>
					<div className="space-y-4 border border-gray-200 rounded-2xl p-4">
						<Input
							label="Style Ornamen Bottom Left"
							id="className"
							value={paragraphState.classOrnamentBottomLeft}
							onChange={(e) =>
								setParagraphState((prev) => ({
									...prev,
									classOrnamentBottomLeft: e.target.value,
								}))
							}
							onBlur={saveConfig}
						/>
						<ImageDropzone
							name={`obl-${sectionId}`}
							label="Ornamen Bottom Left"
							className="col-span-2"
							staticHeight="h-[100px]"
							defaultPreview={paragraphState.ornamentBottomLeft}
							onUploaded={(file) => {
								handleParagraphState("ornamentBottomLeft", file.preview)
								// setTimeout(() => {
								// 	saveConfig()
								// }, 1000)
							}} />
					</div>
					<div className="space-y-4 border border-gray-200 rounded-2xl p-4">
						<Input
							label="Style Ornamen Bottom Left"
							id="className"
							value={paragraphState.ornamentBottomRight}
							onChange={(e) =>
								setParagraphState((prev) => ({
									...prev,
									ornamentBottomRight: e.target.value,
								}))
							}
							onBlur={saveConfig}
						/>
						<ImageDropzone
							name={`obr-${sectionId}`}
							label="Ornamen Bottom Right"
							className="col-span-2"
							staticHeight="h-[100px]"
							defaultPreview={paragraphState.ornamentBottomRight}
							onUploaded={(file) => {
								handleParagraphState("ornamentBottomRight", file.preview)
								// setTimeout(() => {
								// 	saveConfig()
								// }, 1000)
							}} />
					</div>
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
		</BlockWrapper>
	);
}
