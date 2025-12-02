export const ItemTypes = {
  BLOCK: 'block',
  SECTION: 'section',
  SORTABLE: 'sortable',
}
export const ContentType = {
  IMAGE: 'image',
  TEXT: 'text',
  CUSTOM: 'custom',
}
export type DraggableItem = {
  name: string
  component: string
  order: number
  group: string
  groupClassName?: string
  index: number
}

export type BlockType = {
  //General Config
  group?: string
  groupClassName?: string
  groupWithBackground?: boolean;
  order?: number
  index?: number,
  component: number,
  componentCustomName?: string;
  //Custom Config
  componentProps: Record<string, string | number | any>
  groupTitle?: string;
}