"use client";
import { useDrop } from "react-dnd";
import { type DraggableItem, ItemTypes } from "./types";
import { useSections } from "@/store/useSections";
type SectionsType = {
	onDrop: (item: DraggableItem) => void;
};
import SectionItem from "./section-item";
import { ArrowBigDown, GroupIcon } from "lucide-react";
export default function Sections({ onDrop }: SectionsType) {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.SECTION,
		drop: onDrop,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;
	const [components] = useSections();

	return (
		<div
			// @ts-ignore
			ref={drop}
			data-testid="dustbin"
			className={`rounded-xl space-y-4 px-3 border-2 border-dashed ${components.length > 0 ? "p-6" : "h-[200px]"
				} flex items-center justify-center flex-col ${isActive ? "bg-neutral-200" : "bg-neutral-100"
				}`}
		>
			<div className="space-y-4 w-full">
				{components.map((component) => {
					return (
						<SectionItem
							sectionId={`section-${component.index}`}
							key={`${component.index}-key-${Math.random()}`}
						/>
					);
				})}
			</div>
			<div className="text-neutral-500 space-y-3 font-medium flex items-center justify-center flex-col w-full py-3 border border-dashed border-neutral-500 rounded-xl">
				<span>
					{!isActive && (
						<GroupIcon strokeWidth={1} className="text-neutral-500" size={50} />
					)}
					{isActive && (
						<ArrowBigDown
							strokeWidth={1}
							className="text-neutral-500"
							size={50}
						/>
					)}
				</span>
				<span>{isActive ? "Release to drop" : "Drag new section here"}</span>
			</div>
		</div>
	);
}
