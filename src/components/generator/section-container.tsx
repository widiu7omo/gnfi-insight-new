import { ReactNode, useCallback } from "react";
import { ContentSection } from "./content-section";
import SortableWrapper from "./sortable-wrapper";
import { DraggableItem, ItemTypes } from "./types";
import update from "immutability-helper";
import { useDraggableItem } from "@/store/useDraggableItem";
export default function SectionContainer({
  item,
  index,
}: {
  item: DraggableItem;
  index: number;
}): ReactNode {
  //Section Components
  const handleOnDrop = (item: DraggableItem) => {
    console.log(item);
  };
  const [draggableItems, setDraggableItems] = useDraggableItem();
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const moveBox = useCallback((dragIndex: number, hoverIndex: number) => {
    setDraggableItems((prevItems: DraggableItem[]) => {
      console.log(prevItems);
      return update(prevItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevItems[dragIndex] as DraggableItem],
        ],
      });
    });
  }, []);
  return (
    <SortableWrapper moveBox={moveBox} index={index} id={index}>
      <ContentSection
        sectionName={`section-${index}`}
        accept={[ItemTypes.COMPONENT]}
        onDrop={handleOnDrop}
      />
    </SortableWrapper>
  );
}
