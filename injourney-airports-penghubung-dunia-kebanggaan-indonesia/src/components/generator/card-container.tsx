import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './card'
import { CreditCardIcon } from 'lucide-react'

const style = {
  width: '100%',
}

export interface Item {
  id: number
  text: string
}

export interface ContainerState {
  cards: Item[]
}

export default function CardContainer({ preview }: { preview?: boolean }) {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'PROFIT',
      },
    ])

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      )
    }, [])

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
        )
      },
      []
    )
    if (preview) {
      return (
        <div>
          <CreditCardIcon />
          <div>Card Test</div>
        </div>
      )
    }
    return (
      <>
        <div
          className="w-full p-3 border border-dashed border-neutral-300"
          style={style}
        >
          {cards.map((card, i) => renderCard(card, i))}
        </div>
      </>
    )
  }
}
