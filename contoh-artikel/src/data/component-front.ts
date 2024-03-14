import Content from '@/components/dynamic/content'
import Header from '@/components/dynamic/header'
import { ReactElement } from 'react'
import { BlockType } from '@/data/types'
import Image from '@/components/dynamic/image'
import ComponentRenderer from '@/components/dynamic/component-renderer'

export const getComponent = (
  componentId: number
): { component: ({ block }: { block: BlockType }) => ReactElement } => {
  return {
    component: componentList[componentId],
  }
}

export const COMPONENT_IMAGE: number = 0
export const COMPONENT_CONTENT: number = 1
export const COMPONENT_HEADER: number = 2
export const COMPONENT_CUSTOM: number = 3
export const COMPONENT_SECTION: number = 4

export const componentList: Record<
  number,
  ({ block }: { block: BlockType }) => ReactElement
> = { 0: Image, 1: Content, 2: Header, 3: ComponentRenderer }
