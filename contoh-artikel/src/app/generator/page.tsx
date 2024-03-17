"use client";
import Sections from "@/components/generator/sections";
import { BlockSection } from "@/components/generator/block-section";
import DraggableWrapper from "@/components/generator/draggable-wrapper";
import {
	ContentType,
	type DraggableItem,
	ItemTypes,
} from "@/components/generator/types";
import {
	COMPONENT_IMAGE,
	COMPONENT_CUSTOM,
	COMPONENT_HERO,
	COMPONENT_PARAGRAPH,
	COMPONENT_SECTION_GROUP,
	COMPONENT_SECTION_HEADER,
	COMPONENT_NAVBAR,
	COMPONENT_HEADING,
	COMPONENT_QUOTE,
} from "@/data/component-front";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useBlocks } from "@/store/useBlocks";
import type { BlockType } from "@/data/types";
import {
	AppWindowIcon,
	GalleryThumbnailsIcon,
	GalleryVerticalIcon,
	GroupIcon,
	HeadingIcon,
	ImageIcon,
	LayoutTemplateIcon,
	QuoteIcon,
	TextIcon,
} from "lucide-react";
import { useSeoDesc, useSeoTitle, useTitle } from "@/store/useTitle";

export default function GeneratePage() {
	const [title, setTitle] = useTitle();
	const [seoTitle, setSeoTitle] = useSeoTitle();
	const [seoDesc, setSeoDesc] = useSeoDesc();
	const handleOnDropSection = (item: DraggableItem) => {
		console.log(item);
	};
	const handleOnDropComponent = (item: DraggableItem) => {
		console.log(item);
	};
	const [blocks] = useBlocks();
	const generateBlocks = async () => {
		//Normalize
		const blockJoined: BlockType[] = [];
		for (const block of Object.keys(blocks)) {
			blockJoined.push(...blocks[block]);
		}
		const normalizeBlock: BlockType[] = blockJoined.map((item, index) => {
			item.order = index;
			return item;
		});
		const result = await fetch("/api/generate-content", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ title: title, content: normalizeBlock }),
		});
		console.log(await result.json());
	};
	return (
		<>
			<DndProvider backend={HTML5Backend}>
				<div className="w-[30%] border-r bg-neutral-100">
					<div className="w-20px space-y-2 min-h-screen h-full overflow-y-auto p-6">
						{/* SECTIONS COMPONENTS */}
						<div className="text-neutral-500 uppercase text-sm border-b border-neutral-300 pb-1">
							sections
						</div>
						<DraggableWrapper
							contentType={ContentType.TEXT}
							type={ItemTypes.SECTION}
							name="section-group"
							component={COMPONENT_SECTION_GROUP}
						>
							<div className="text-neutral-500 flex items-center flex-col">
								<GroupIcon size={45} strokeWidth={1} />
								<div className="text-sm">Group / Section</div>
							</div>
						</DraggableWrapper>
						{/* BLOCK COMPONENTS */}
						<div className="text-neutral-500 uppercase text-sm border-b border-neutral-300 pb-1 pt-3">
							blocks
						</div>
						<DraggableWrapper
							contentType={ContentType.CUSTOM}
							type={ItemTypes.BLOCK}
							name="navbar"
							component={COMPONENT_NAVBAR}
						>
							<div className="text-neutral-500 flex items-center flex-col">
								<AppWindowIcon size={45} strokeWidth={1} />
								<div className="text-sm">Navbar Config</div>
							</div>
						</DraggableWrapper>
						<DraggableWrapper
							contentType={ContentType.CUSTOM}
							type={ItemTypes.BLOCK}
							name="hero"
							component={COMPONENT_HERO}
						>
							<div className="text-neutral-500 flex items-center flex-col">
								<GalleryThumbnailsIcon size={45} strokeWidth={1} />
								<div className="text-sm">Hero Editor</div>
							</div>
						</DraggableWrapper>
						<DraggableWrapper
							type={ItemTypes.BLOCK}
							contentType={ContentType.TEXT}
							name="section-header"
							component={COMPONENT_SECTION_HEADER}
						>
							<div className="text-neutral-500 flex items-center flex-col">
								<GalleryVerticalIcon size={45} strokeWidth={1} />
								<div className="text-sm">Section Header</div>
							</div>
						</DraggableWrapper>
						<DraggableWrapper
							type={ItemTypes.BLOCK}
							contentType={ContentType.TEXT}
							name="heading"
							component={COMPONENT_HEADING}
						>
							<div className="text-neutral-500 flex items-center flex-col">
								<HeadingIcon size={45} strokeWidth={1} />
								<div className="text-sm">Heading</div>
							</div>
						</DraggableWrapper>
						<DraggableWrapper
							type={ItemTypes.BLOCK}
							contentType={ContentType.TEXT}
							name="paragraph"
							component={COMPONENT_PARAGRAPH}
						>
							<div className="text-neutral-500 flex items-center flex-col">
								<TextIcon size={45} strokeWidth={1} />
								<div className="text-sm">Paragraph Editor</div>
							</div>
						</DraggableWrapper>
						<DraggableWrapper
							type={ItemTypes.BLOCK}
							contentType={ContentType.TEXT}
							name="quote"
							component={COMPONENT_QUOTE}
						>
							<div className="text-neutral-500 flex items-center flex-col">
								<QuoteIcon size={45} strokeWidth={1} />
								<div className="text-sm">Quote Editor</div>
							</div>
						</DraggableWrapper>
						<DraggableWrapper
							contentType={ContentType.IMAGE}
							type={ItemTypes.BLOCK}
							name="image"
							component={COMPONENT_IMAGE}
						>
							<div className="text-neutral-500 flex items-center flex-col">
								<ImageIcon size={45} strokeWidth={1} />
								<div className="text-sm">Image Component</div>
							</div>
						</DraggableWrapper>

						<DraggableWrapper
							contentType={ContentType.CUSTOM}
							type={ItemTypes.BLOCK}
							name="custom-component"
							component={COMPONENT_CUSTOM}
						>
							<div className="text-neutral-500 flex items-center flex-col">
								<LayoutTemplateIcon size={45} strokeWidth={1} />
								<div className="text-sm">Custom Component</div>
							</div>
						</DraggableWrapper>
					</div>
				</div>
				<div className="flex-1 space-y-7 p-8 min-h-screen overflow-auto">
					<div className="text-3xl font-semibold text-neutral-900 flex justify-between">
						<span> Page Content Generator</span>
						<button
							onClick={generateBlocks}
							type="button"
							className="text-lg text-white bg-black px-4 py-2 font-semibold"
						>
							Generate
						</button>
					</div>
					<div className="space-y-4">
						<div>
							<label
								htmlFor="title"
								className="text-base font-bold text-gray-500"
							>
								Article Title
							</label>
							<input
								id="title"
								type="text"
								className="text-2xl font-semibold text-neutral-700 outline-none w-full"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div>
							<div className="text-base font-bold text-gray-500">SEO Meta</div>
							<div className="">
								<input
									type="text"
									className="text-lg text-neutral-700 outline-none w-full"
									value={seoTitle}
									onChange={(e) => setSeoTitle(e.target.value)}
								/>
								<input
									type="text"
									className="text-lg text-neutral-700 outline-none w-full"
									value={seoDesc}
									onChange={(e) => setSeoDesc(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<Sections onDrop={handleOnDropSection} />
				</div>
			</DndProvider>
		</>
	);
}
