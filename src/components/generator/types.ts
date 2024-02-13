export const ItemTypes = {
  BLOCK: "block",
  SECTION: 'section',
  SORTABLE: 'sortable'
};
export type DraggableItem = {
  name: string;
  component: string;
  order: number;
  group: string;
  index: number;
}