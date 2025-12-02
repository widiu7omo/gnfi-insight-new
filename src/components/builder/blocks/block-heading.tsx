import { useBlocks } from "@/store/useBlocks";
import type { HeadingType } from "@/components/post/heading";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
	Heading1Icon,
	Heading2Icon,
	Heading3Icon,
	Heading4Icon,
	Heading5Icon,
	Heading6Icon,
	Save,
} from "lucide-react";
import { useState } from "react";
import BlockWrapper from "./block-wrapper";
import { Input } from "../../ui/input";
import {toast} from "sonner";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export type BlockHeadingType = {
	sectionId: string;
	index: number;
	saveConfig: (index: number, updater: ((prev: unknown) => unknown) | unknown) => void;
};
export default function BlockHeading({ sectionId, index, saveConfig }: BlockHeadingType) {
	const [blocks] = useBlocks();
	const sectionBlocks = blocks[sectionId];
	const block = sectionBlocks[index];
	const componentProps = (block.componentProps ?? {}) as HeadingType;
	const [headingState, setHeadingState] = useState<HeadingType>(
		componentProps ?? {
			className: "",
			content: "",
			containerClassName: ""
		},
	);

	const handleSave = () => {
		saveConfig(index, {
			...headingState,
			content: editor?.getHTML() ?? ""
		});
		toast.success("Configuration Saved")
	}

	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				heading: {
					levels: [1, 2, 3, 4, 5, 6],
					HTMLAttributes: {
						class: "heading",
					},
				},
			}),
		],
		editorProps: {
			attributes: {
				class: cn(
					'prose dark:prose-invert prose-sm sm:prose-base mx-auto focus:outline-none size-full',
					'min-h-[200px] p-4 border-0'
				),
			},
		},
		content:
			(blocks[sectionId][index].componentProps as HeadingType).content ??
			"Heading Title",
	});
	return (
		<BlockWrapper label="Configuration Heading" compact sectionId={sectionId} index={index} className="p-4 space-x-2 rounded-t-xl space-y-4">
			<div className="flex space-x-4">
				<Field className="flex-1">
					<FieldLabel>Content</FieldLabel>
					<FieldContent>
						<div className="dark:bg-neutral-800 bg-white rounded-lg overflow-clip border border-white/15">
							<EditorContent editor={editor} className="min-h-30" />
						</div>
					</FieldContent>
				</Field>
				<div className="flex-1 flex flex-col space-y-4">
					<Field>
						<FieldLabel>Headings</FieldLabel>
						<FieldContent>
							<div className="dark:bg-neutral-800 w-fit bg-neutral-200 rounded-lg p-2">
								<button
									type="button"
									onClick={() => {
										editor?.commands.setHeading({ level: 1 });
										editor?.chain().focus().toggleHeading({ level: 1 });
									}}
									className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 1 }) ? "bg-white dark:bg-neutral-900" : ""}`}
								>
									<Heading1Icon size={20} />
								</button>
								<button
									type="button"
									onClick={() => {
										editor?.commands.setHeading({ level: 2 });
										editor?.chain().focus().toggleHeading({ level: 2 });
									}}
									className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 2 }) ? "bg-white dark:bg-neutral-900" : ""}`}
								>
									<Heading2Icon size={20} />
								</button>
								<button
									type="button"
									onClick={() => {
										editor?.commands.setHeading({ level: 3 });
										editor?.chain().focus().toggleHeading({ level: 3 });
									}}
									className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 3 }) ? "bg-white dark:bg-neutral-900" : ""}`}
								>
									<Heading3Icon size={20} />
								</button>
								<button
									type="button"
									onClick={() => {
										editor?.commands.setHeading({ level: 4 });
										editor?.chain().focus().toggleHeading({ level: 4 });
									}}
									className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 4 }) ? "bg-white dark:bg-neutral-900" : ""}`}
								>
									<Heading4Icon size={20} />
								</button>
								<button
									type="button"
									onClick={() => {
										editor?.commands.setHeading({ level: 5 });
										editor?.chain().focus().toggleHeading({ level: 5 });
									}}
									className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 5 }) ? "bg-white dark:bg-neutral-900" : ""}`}
								>
									<Heading5Icon size={20} />
								</button>
								<button
									type="button"
									onClick={() => {
										editor?.commands.setHeading({ level: 6 });
										editor?.chain().focus().toggleHeading({ level: 6 });
									}}
									className={`rounded py-1 px-2 ${editor?.isActive("heading", { level: 6 }) ? "bg-white dark:bg-neutral-900" : ""}`}
								>
									<Heading6Icon size={20} />
								</button>
							</div>
						</FieldContent>
					</Field>
					<Field>
						<FieldLabel>Style Heading</FieldLabel>
						<FieldContent>
							<Input
								value={headingState.className}
								onChange={(e) =>
									setHeadingState((prev) => ({
										...prev,
										className: e.target.value,
									}))
								}
							/>
						</FieldContent>
					</Field>
					<Field>
						<FieldLabel>Style Container</FieldLabel>
						<FieldContent>
							<Input
								value={headingState.containerClassName}
								onChange={(e) =>
									setHeadingState((prev) => ({
										...prev,
										containerClassName: e.target.value,
									}))
								}
							/>
						</FieldContent>
					</Field>
				</div>

			</div>
			<div>
				<Button onClick={handleSave}>
					<Save />
					<span>Save</span>
				</Button>
			</div>
		</BlockWrapper>
	);
}
