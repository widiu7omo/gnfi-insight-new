"use client";
import { useDrag } from "react-dnd";
import { type DraggableItem, ItemTypes } from "./types";
import type { PropsWithChildren } from "react";
import { useSections } from "@/store/useSections";

interface DropResult extends DraggableItem {
	dropEffect: string;
}
export type DragItemType = {
	name?: string;
	component: number;
	itemType: string;
	contentType: string;
};

export default function DraggableWrapper({
	name,
	component,
	children,
	contentType,
	type,
}: PropsWithChildren<{
	name?: string;
	component: number;
	type: string;
	contentType: string;
}>) {
	const [_, setSections] = useSections();
	const [{ isDragging }, drag] = useDrag(() => ({
		type,
		item: {
			name,
			component,
			itemType: type,
			contentType,
		},
		options: { dropEffect: "copy" },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult<DropResult>();
			if (dropResult) {
				if (item.itemType === ItemTypes.SECTION) {
					setSections((prev) => {
						return [
							...prev,
							{
								...dropResult,
								index: prev.length + 1,
								order: prev.length + 1,
								group: "BOXES",
								groupClassName: "",
							},
						];
					});
				}
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));
	const opacity = isDragging ? 0.4 : 1;
	return (
		<div
			//@ts-ignore
			ref={drag}
			style={{ opacity }}
			data-testid={"box"}
			className="p-4 cursor-pointer hover:bg-neutral-300 hover:shadow-sm bg-neutral-200 "
		>
			{children}
		</div>
	);
}
