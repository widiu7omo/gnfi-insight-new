import { ReactNode, useCallback } from "react";
import SortableWrapper from "./sortable-wrapper";
import { DraggableItem, ItemTypes } from "./types";
import update from "immutability-helper";
import { useSections } from "@/store/useSections";
export default function SectionContainer({
  item,
  moveBox,
}: {
  item: DraggableItem;
  moveBox: (hoverIndex: number, dropIndex: number) => void;
}): ReactNode {
  //Section Components
  const handleOnDrop = (item: DraggableItem) => {
    console.log(item);
  };
  const [sections, setSections] = useSections();

  if (!item) {
    return <div className="">Empty</div>;
  }
  return (
    <SortableWrapper moveBox={moveBox} index={item.order} id={item.order}>
      Tess - {item.order}
    </SortableWrapper>
  );
}
