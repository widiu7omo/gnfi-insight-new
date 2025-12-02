import type { Identifier, XYCoord } from 'dnd-core'
import type { FC } from 'react'
import { useRef } from 'react'
import { DragSourceMonitor, useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../../types'
import { motion } from "motion/react";

export interface CardProps {
  id: unknown
  text: string
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
  index: number
  id: string
  type: string
}

export const Card: FC<CardProps> = ({ id, text, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.SORTABLE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.SORTABLE,
    item: () => {
      return { id, index }
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref));

  // Enhanced animation configuration for better drag experience
  const animationVariants = {
    initial: { 
      opacity: 1,
      scale: 1,
      y: 0,
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      border: "1px dashed gray"
    },
    dragging: { 
      opacity: 0.8,
      scale: 1.02,
      y: -4,
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      zIndex: 10,
      border: "1px solid #3b82f6",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    resting: { 
      opacity: 1,
      scale: 1,
      y: 0,
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      border: "1px dashed gray",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      layout
      ref={ref}
      animate={isDragging ? "dragging" : "resting"}
      initial="initial"
      variants={animationVariants}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.3
      }}
      data-handler-id={handlerId}
      style={{
        padding: '0.5rem 1rem',
        marginBottom: '.5rem',
        backgroundColor: 'white',
        cursor: isDragging ? "grabbing" : "grab",
        ...(isDragging && { pointerEvents: "none" })
      }}
    >
      {text}
    </motion.div>
  )
}
