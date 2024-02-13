import update from "immutability-helper";
import { useCallback } from "react";
import { Card } from "./card";
import { CreditCardIcon } from "lucide-react";
import { useCards } from "@/store/useCards";
import { useBlocks } from "@/store/useBlocks";
import { BlockType } from "@/data/types";

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
  preview?: boolean;
  sectionId: string;
};
export default function BlockSortable({
  preview,
  sectionId,
}: BlockSortableType) {
  {
    const [blocks, setBlocks] = useBlocks();
    const blockComponents = blocks[sectionId] ?? [];
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
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
    const renderCard = useCallback((card: BlockType, index: number) => {
      return (
        <Card
          key={card.order}
          index={index}
          id={card.order}
          text={card.content}
          moveCard={moveCard}
        />
      );
    }, []);
    if (preview) {
      return (
        <div>
          <CreditCardIcon />
          <div>Card Test</div>
        </div>
      );
    }
    return (
      <>
        <div className="" style={style}>
          {blockComponents.map((card, i) => renderCard(card, i))}
        </div>
      </>
    );
  }
}
