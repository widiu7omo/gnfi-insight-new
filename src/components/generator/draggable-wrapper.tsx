"use client";
import { useDrag } from "react-dnd";
import { DraggableItem, ItemTypes } from "./types";
import { PropsWithChildren } from "react";
import { useDraggableItem } from "@/store/useDraggableItem";

interface DropResult extends DraggableItem {
  dropEffect: string;
}

export default function DraggableWrapper({
  name,
  component,
  children,
  type,
}: PropsWithChildren<{ name?: string; component?: number; type: string }>) {
  const [components, setComponents] = useDraggableItem();
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: {
      name,
      component,
    },
    options: { dropEffect: "copy" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      console.log(dropResult);
      if (dropResult) {
        setComponents((prev) => {
          console.log(prev);
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
