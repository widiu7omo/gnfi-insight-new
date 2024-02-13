import update from "immutability-helper";
import { useCallback } from "react";
import { Card } from "./card";
import { CreditCardIcon } from "lucide-react";
import { useCards } from "@/store/useCards";
import { useBlocks } from "@/store/useBlocks";
import { BlockType } from "@/data/types";
import { SortableWrapper } from "./sortable-wrapper";

const style = {
  width: "100%",
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}
export type BlockSortableType = {
  sectionId: string;
};
export default function BlockSortable({ sectionId }: BlockSortableType) {
  {
    const [blocks, setBlocks] = useBlocks();
    const blockComponents = blocks[sectionId] ?? [];
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const moveBlock = useCallback((dragIndex: number, hoverIndex: number) => {
      setBlocks((prevBlocks) => {
        const block = prevBlocks[sectionId] ?? [];
        const updatedBlock = update(block, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, block[dragIndex] as BlockType],
          ],
        });
        return { ...prevBlocks, [sectionId]: updatedBlock };
      });
    }, []);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const renderComponent = useCallback((block: BlockType, index: number) => {
      console.log(block);
      return (
        <SortableWrapper
          key={block.order}
          index={index}
          id={block.order}
          moveBlock={moveBlock}
        >
          <div>Tesss</div>
        </SortableWrapper>
      );
    }, []);
    return (
      <>
        <div className="" style={style}>
          {blockComponents.map((block, i) => renderComponent(block, i))}
        </div>
      </>
    );
  }
}
