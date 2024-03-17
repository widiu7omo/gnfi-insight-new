import { GroupIcon } from "lucide-react";
import type { DraggableItem } from "./types";
import { type FC, memo } from "react";
import { useDrop } from "react-dnd";
export type BlockSectionType = {
	accept: string[];
	lastDroppedItem?: DraggableItem;
	preview?: boolean;
	sectionName?: string;
	onDrop: (item: DraggableItem) => void;
};

export const BlockSection: FC<BlockSectionType> = memo(function BlockSection({
	accept,
	lastDroppedItem,
	onDrop,
	preview,
	sectionName,
}) {
	const [{ isOver, canDrop }, drop] = useDrop({
		accept,
		drop: onDrop,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	const isActive = isOver && canDrop;
	return (
		<div
			ref={drop}
			data-testid={sectionName}
			className="border p-3 bg-neutral-50 w-full rounded-xl"
			id={sectionName}
		>
			<div className="capitalize">{sectionName}</div>
			{JSON.stringify(lastDroppedItem)}
			{isActive
				? "Release to drop"
				: `This dustbin accepts: ${accept.join(", ")}`}
		</div>
	);
});
