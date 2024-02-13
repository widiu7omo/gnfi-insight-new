"use client";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { DraggableItem, ItemTypes } from "./types";
import { PropsWithChildren } from "react";
import { useSections } from "@/store/useSections";
import { useBlocks } from "@/store/useBlocks";
import { useCards } from "@/store/useCards";

interface DropResult extends DraggableItem {
  dropEffect: string;
}
export type DragItemType = {
  name?: string;
  component?: string;
  itemType: string;
};

export default function DraggableWrapper({
  name,
  component,
  children,
  type,
}: PropsWithChildren<{ name?: string; component?: number; type: string }>) {
  const [_, setSections] = useSections();
  const [cards, setCards] = useCards();
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: {
      name,
      component,
      itemType: type,
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
              },
            ];
          });
        }
        // if (item.itemType === ItemTypes.BLOCK) {
        //   setCards((prev) => [
        //     ...prev,
        //     {
        //       id: prev.length + 1,
        //       text: "Tesss tess",
        //     },
        //   ]);
        // }
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
      ref={drag}
      style={{ opacity }}
      data-testid={`box`}
      className="cursor-pointer p-4 hover:bg-neutral-300 hover:shadow-sm bg-neutral-200 "
    >
      {children}
    </div>
  );
}
