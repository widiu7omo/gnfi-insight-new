import { GroupIcon } from "lucide-react";
import { DraggableItem } from "./types";
import { FC, memo } from "react";
import { useDrop } from "react-dnd";
export type ContentSectionType = {
  accept: string[];
  lastDroppedItem?: DraggableItem;
  preview?: boolean;
  sectionName?: string;
  onDrop: (item: DraggableItem) => void;
};

export const ContentSection: FC<ContentSectionType> = memo(
  function ContentSection({
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

    if (preview) {
      return (
        <div className="text-neutral-500 flex items-center flex-col">
          <GroupIcon size={45} strokeWidth={1} />
          <div className="text-sm">Group / Section</div>
        </div>
      );
    }
    return (
      <div
        ref={drop}
        data-testid={sectionName}
        className="border p-3 bg-neutral-50 w-full"
        id={sectionName}
      >
        <div>{sectionName}</div>
        {JSON.stringify(lastDroppedItem)}
        {isActive
          ? "Release to drop"
          : `This dustbin accepts: ${accept.join(", ")}`}
      </div>
    );
  }
);
