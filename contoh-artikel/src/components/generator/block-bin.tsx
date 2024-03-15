"use client";
import { useDrop } from "react-dnd";
import { ContentType, ItemTypes } from "./types";
import { useBlocks } from "@/store/useBlocks";
import { useSections } from "@/store/useSections";
import type { BlockType } from "@/data/types";
import BlockSortable from "./block-sortable";
import type { DragItemType } from "./draggable-wrapper";
import {
	ArrowDownToLineIcon,
	BlocksIcon,
	PenIcon,
	SaveIcon,
} from "lucide-react";
import { useState } from "react";
export default function BlockBin({ sectionId }: { sectionId: string }) {
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
						order: block.length,
					} as BlockType,
				];
				return { ...prev, [sectionId]: newValue };
			});
		}
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
	const [sectionName, setSectionName] = useState("Section Name");
	const [toggleSecName, setToggleSecName] = useState(true);
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
			<div className="flex justify-between items-center w-full">
				<div className="flex space-x-2 items-center justify-between">
					<button type="button" onClick={() => setToggleSecName((val) => !val)}>
						{toggleSecName ? <PenIcon size={16} /> : <SaveIcon size={16} />}
					</button>
					<input
						type="text"
						value={sectionName}
						onChange={(e) => setSectionName(e.target.value)}
						readOnly={toggleSecName}
						className="bg-transparent outline-none text-sm text-neutral-800"
					/>
				</div>
				<div className="text-xs text-neutral-500">{sectionId}</div>
			</div>
			<div
				className={`space-y-4 w-full ${
					sections.length > 0 ? "p-6" : "h-[200px]"
				}`}
			>
				<BlockSortable sectionId={sectionId} />
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
