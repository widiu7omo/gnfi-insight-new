"use client";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./types";
import { useBlocks } from "@/store/useBlocks";
import { COMPONENT_CONTENT } from "@/data/component-front";
import { useSections } from "@/store/useSections";
import { BlockType } from "@/data/types";
import BlockSortable from "./block-sortable";
import { useState } from "react";
import { useCards } from "@/store/useCards";
import { DragItemType } from "./draggable-wrapper";
export default function BlockBin({ sectionId }: { sectionId: string }) {
  const [blocks, setBlocks] = useBlocks();
  const [sections] = useSections();
  const [cards, setCards] = useCards();

  const handleOnDropBlock = (item: DragItemType) => {
    console.log(item);
    if (item.itemType === ItemTypes.BLOCK) {
      setCards((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Tesss tess",
        },
      ]);
      setBlocks((prev) => {
        console.log(prev);
        const block = prev[sectionId] ?? [];
        const newValue = [
          ...block,
          {
            index: block.length + 1,
            content: `Content here ${block.length + 1}`,
            component: COMPONENT_CONTENT,
            group: "",
            order: block.length + 1,
            contentType: "text",
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
  return (
    <div
      ref={drop}
      data-testid="dustbin"
      className={`rounded-xl w-full border-2 border-dashed ${
        sections.length > 0 ? "p-6" : "h-[200px]"
      } flex items-center justify-center flex-col ${
        isActive ? "bg-neutral-200" : "bg-neutral-100"
      }`}
    >
      <div className="text-neutral-500 font-medium">
        {isActive ? "Release to drop" : "Drag block here"}
      </div>
      <div className="space-y-4 w-full">
        <BlockSortable sectionId={sectionId} />
      </div>
    </div>
  );
}
