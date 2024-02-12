"use client";
import { useDrop } from "react-dnd";
import { DraggableItem, ItemTypes } from "./types";
import SectionContainer from "./section-container";
import { useDraggableItem } from "@/store/useDraggableItem";
type ContentBinType = {
  onDrop: (item: DraggableItem) => void;
  components?: DraggableItem[];
};

export default function ContentBin({ onDrop }: ContentBinType) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  const [components] = useDraggableItem();
  console.log(components);
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
        {isActive ? "Release to drop" : "Drag a box here"}
      </div>
      {components.map((component) => {
        return (
          <SectionContainer
            index={component.index}
            item={component}
            key={`${component.index}-key-${Math.random()}`}
          />
        );
      })}
    </div>
  );
}
