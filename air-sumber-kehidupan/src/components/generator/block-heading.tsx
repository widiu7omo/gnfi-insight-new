import { useBlocks } from "@/store/useBlocks";
import type { HeadingType } from "@/stories/Heading";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
	Heading1Icon,
	Heading2Icon,
	Heading3Icon,
	Heading4Icon,
	Heading5Icon,
	Heading6Icon,
	TrashIcon,
} from "lucide-react";
import { useState } from "react";
import BlockWrapper from "./block-wrapper";
export type BlockHeadingType = {
	sectionId: string;
	index: number;
};
export default function BlockHeading({ sectionId, index }: BlockHeadingType) {
	const [blocks, setBlocks] = useBlocks();
	// TODO: Persist=> move to atom jotai
	const [className, setClassName] = useState();
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				heading: {
					levels: [1, 2, 3],
					HTMLAttributes: {
						class: "heading",
					},
				},
			}),
		],
		content:
			(blocks[sectionId][index].componentProps as HeadingType).content ??
			"Heading Title",
		onBlur: () => {
			setBlocks((prev) => {
				const currentBlock = prev[sectionId][index];
				const componentProps = currentBlock.componentProps as HeadingType;
				componentProps.content = editor?.getHTML() ?? "";
				componentProps.className = className ?? "";
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
		<BlockWrapper label="Navbar Block" sectionId={sectionId} index={index} className="p-4 space-x-2 rounded-t-xl space-y-4">
			<div className="flex flex-col">
				<div className="text-sm text-gray-600 pb-1">Configuration</div>
				<div className="bg-neutral-200 rounded">
					<button
						type="button"
						onClick={() => {
							editor?.commands.setHeading({ level: 1 });
							editor?.chain().focus().toggleHeading({ level: 1 });
						}}
						className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 1 }) ? "bg-white" : ""
							}`}
					>
						<Heading1Icon size={20} />
					</button>
					<button
						type="button"
						onClick={() => {
							editor?.commands.setHeading({ level: 2 });
							editor?.chain().focus().toggleHeading({ level: 2 });
						}}
						className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 2 }) ? "bg-white" : ""
							}`}
					>
						<Heading2Icon size={20} />
					</button>
					<button
						type="button"
						onClick={() => {
							editor?.commands.setHeading({ level: 3 });
							editor?.chain().focus().toggleHeading({ level: 3 });
						}}
						className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 3 }) ? "bg-white" : ""
							}`}
					>
						<Heading3Icon size={20} />
					</button>
					<button
						type="button"
						onClick={() => {
							editor?.commands.setHeading({ level: 4 });
							editor?.chain().focus().toggleHeading({ level: 4 });
						}}
						className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 4 }) ? "bg-white" : ""
							}`}
					>
						<Heading4Icon size={20} />
					</button>
					<button
						type="button"
						onClick={() => {
							editor?.commands.setHeading({ level: 5 });
							editor?.chain().focus().toggleHeading({ level: 5 });
						}}
						className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 5 }) ? "bg-white" : ""
							}`}
					>
						<Heading5Icon size={20} />
					</button>
					<button
						type="button"
						onClick={() => {
							editor?.commands.setHeading({ level: 6 });
							editor?.chain().focus().toggleHeading({ level: 6 });
						}}
						className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 6 }) ? "bg-white" : ""
							}`}
					>
						<Heading6Icon size={20} />
					</button>
				</div>
			</div>
			<div>
				<div className="text-sm text-gray-600 pb-1">Content</div>
				<div className="p-4 bg-white rounded">
					<EditorContent editor={editor} />
				</div>
			</div>
		</BlockWrapper>
	);
}
