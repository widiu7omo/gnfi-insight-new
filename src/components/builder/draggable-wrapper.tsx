import { useDrag } from "react-dnd";
import { type DraggableItem, ItemTypes } from "../../types";
import type { PropsWithChildren } from "react";
import { useSections } from "@/store/useSections";
import { motion, Variants } from "motion/react";

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

	// Enhanced animation for draggable items
	const animationVariants: Variants = {
		initial: {
			opacity: 1,
			scale: 1,
			boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
		},
		dragging: {
			opacity: 0.7,
			scale: 1.05,
			boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
			zIndex: 10,
			transition: {
				duration: 0.2,
				ease: "easeOut"
			}
		},
		resting: {
			opacity: 1,
			scale: 1,
			boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
			transition: {
				duration: 0.3,
				ease: "easeInOut"
			}
		}
	};

	return (
		<motion.div
			//@ts-ignore
			ref={drag}
			animate={isDragging ? "dragging" : "resting"}
			initial="initial"
			variants={animationVariants}
			transition={{ duration: 0.2 }}
			data-testid={"box"}
			className="cursor-grab"
			style={{
				cursor: isDragging ? "grabbing" : "grab"
			}}
		>
			{children}
		</motion.div>
	);
}