"use client";
import { useDrop } from "react-dnd";
import { DraggableItem, ItemTypes } from "./types";
import SectionContainer from "./section-container";
import { useSections } from "@/store/useSections";
import { useCallback } from "react";
type ContentBinType = {
  onDrop: (item: DraggableItem) => void;
};
import update from "immutability-helper";
import CardContainer from "./card-container";
import BlockBin from "./block-bin";
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
      className={`rounded-xl border-2 border-dashed ${
        components.length > 0 ? "p-6" : "h-[200px]"
      } flex items-center justify-center flex-col ${
        isActive ? "bg-neutral-200" : "bg-neutral-100"
      }`}
    >
      <div className="text-neutral-500 font-medium">
        {isActive ? "Release to drop" : "Drag a section here"}
      </div>
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
    </div>
  );
}
