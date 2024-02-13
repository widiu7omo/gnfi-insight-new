import update from "immutability-helper";
import { Dispatch, useCallback, useState } from "react";
import { Card } from "./card";
import { CreditCardIcon } from "lucide-react";
import { SetStateAction } from "jotai";

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
  cards: Item[];
  setCards: Dispatch<SetStateAction<Item[]>>;
};
export default function BlockSortable({
  preview,
  sectionId,
  cards,
  setCards,
}: BlockSortableType) {
  {
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    }, []);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        );
      },
      []
    );
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
        <div
          className="border border-dashed border-neutral-300 p-3 w-full"
          style={style}
        >
          {cards.map((card, i) => renderCard(card, i))}
        </div>
      </>
    );
  }
}
