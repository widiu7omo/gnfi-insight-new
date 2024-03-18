import { useBlocks } from "@/store/useBlocks";
import type { ParagraphType } from "@/stories/Paragraph";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TrashIcon } from "lucide-react";
import Input from "../reusable/input";
type BlockParagraphType = {
	sectionId: string;
	index: number;
};
export default function BlockParagraph({
	sectionId,
	index,
}: BlockParagraphType) {
	const [blocks, setBlocks] = useBlocks();
	const editor = useEditor({
		extensions: [StarterKit],
		content:
			((blocks[sectionId][index].componentProps as ParagraphType)
				.children as string) ?? "<p>Paragraph! 🌎️</p>",
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
				<Input label="With Ornament" id="withOrnament" />
			</div>
			<div className="">
				<div className="text-sm text-gray-600 pb-1">Content</div>
				<div className="p-4 bg-white">
					<EditorContent editor={editor} />
				</div>
			</div>
		</div>
	);
}
