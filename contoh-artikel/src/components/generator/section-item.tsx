"use client";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./types";
import { useBlocks } from "@/store/useBlocks";
import { useSectionClassName, useSections } from "@/store/useSections";
import type { BlockType } from "@/data/types";
import type { DragItemType } from "./draggable-wrapper";
import {
	ArrowDownToLineIcon,
	BlocksIcon,
	PaletteIcon,
	PenIcon,
	SaveIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import Blocks from "./blocks";
import type { SectionGroupType } from "@/stories/SectionGroup";

export default function SectionItem({ sectionId }: { sectionId: string }) {
	const [sectionName, setSectionName] = useState("Edit Section Name");
	const [toggleSecName, setToggleSecName] = useState(true);
	const [sectionClassName, setSectionClassName] = useSectionClassName();

	const [_, setBlocks] = useBlocks();
	const [sections] = useSections();
	const handleOnDropBlock = (item: DragItemType) => {
		if (item.itemType === ItemTypes.BLOCK) {
			setBlocks((prev) => {
				const block = prev[sectionId] ?? [];
				const newValue = [
					...block,
					{
						index: block.length,
						component: item.component,
						componentProps: {}, //TODO: default props each component
						group: sectionId,
						groupClassName: "",
						order: block.length,
					} as BlockType,
				];
				return { ...prev, [sectionId]: newValue };
			});
		}
	};

	const updateBlocks = () => {
		setBlocks((prev) => {
			const blocks = prev[sectionId] ?? [];
			const updateBlocks = blocks.map((item) => {
				item.groupClassName = sectionClassName[sectionId];
				return item;
			});
			return { ...prev, [sectionId]: updateBlocks };
		});
	};

	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.BLOCK,
		drop: handleOnDropBlock,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;

	//Add another config based on stories/SectionGroup
	const componentsProps: SectionGroupType = {
		children: undefined,
		sectionId: "",
	};
	return (
		<div
			ref={drop}
			data-testid="dustbin"
			className={`rounded-xl w-full border-4 border-neutral-400 mt-4 ${
				sections.length > 0 ? "p-6" : "h-[200px]"
			} flex items-center justify-center flex-col ${
				isActive ? "bg-neutral-300/70" : "bg-neutral-200/60"
			}`}
		>
			<div className="flex flex-col justify-between items-start w-full">
				<div className="flex space-y-4 justify-between items-center w-full">
					<div className="flex space-x-2 items-center justify-start">
						<button
							type="button"
							onClick={() => setToggleSecName((val) => !val)}
						>
							{toggleSecName ? (
								<PenIcon className="text-gray-600" size={16} />
							) : (
								<SaveIcon className="text-gray-600" size={16} />
							)}
						</button>
						<input
							type="text"
							value={sectionName}
							onChange={(e) => setSectionName(e.target.value)}
							readOnly={toggleSecName}
							className="bg-transparent outline-none text-sm text-gray-500"
						/>
					</div>
					<div className="text-xs text-neutral-500 w-fit flex-none">
						ID:{" "}
						<span className="rounded-full bg-black text-white px-3 py-1 ml-1">
							{sectionId}
						</span>
					</div>
				</div>
				<div className="space-x-2 w-full">
					<fieldset className="w-full space-y-1">
						<label htmlFor="sectionClassName" className="flex space-x-2">
							<PaletteIcon className="text-gray-600" size={16} />
							<span className="text-sm text-gray-500">Customize Style</span>
						</label>
						<textarea
							value={sectionClassName[sectionId]}
							placeholder="Customize section with tailwind classes if you want. i.e bg-gradient-to-b from-black ...etc"
							onChange={(e) =>
								setSectionClassName({ [sectionId]: e.target.value })
							}
							onBlur={updateBlocks}
							className="p-2 rounded-lg w-full bg-gray-50 outline-none text-sm text-gray-800 placeholder:text-gray-500"
						/>
					</fieldset>
				</div>
			</div>
			<div
				className={`space-y-4 w-full ${
					sections.length > 0 ? "py-2" : "h-[200px]"
				}`}
			>
				<Blocks sectionId={sectionId} />
				<div className="text-neutral-500 font-medium flex items-center justify-center flex-col w-full py-3 border border-dashed border-neutral-500 rounded-xl">
					<span>
						{!isActive && (
							<BlocksIcon strokeWidth={2} className="text-neutral-500" />
						)}
						{isActive && (
							<ArrowDownToLineIcon
								strokeWidth={2}
								className="text-neutral-500"
							/>
						)}
					</span>
					<span>{isActive ? "Release to drop" : "Drag block here"}</span>
				</div>
			</div>
		</div>
	);
}
