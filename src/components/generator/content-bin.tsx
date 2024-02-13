"use client";
import { useDrop } from "react-dnd";
import { DraggableItem, ItemTypes } from "./types";
import { useSections } from "@/store/useSections";
type ContentBinType = {
  onDrop: (item: DraggableItem) => void;
};
import BlockBin from "./block-bin";
import { ArrowBigDown, GroupIcon } from "lucide-react";
export default function ContentBin({ onDrop }: ContentBinType) {
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
      ref={drop}
      data-testid="dustbin"
      className={`rounded-xl space-y-4 px-3 border-2 border-dashed ${
        components.length > 0 ? "p-6" : "h-[200px]"
      } flex items-center justify-center flex-col ${
        isActive ? "bg-neutral-200" : "bg-neutral-100"
      }`}
    >
      <div className="space-y-4 w-full">
        {components.map((component) => {
          return (
            <BlockBin
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
