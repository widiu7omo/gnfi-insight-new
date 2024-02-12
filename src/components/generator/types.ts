export const ItemTypes = {
  BOX: "box",
  COMPONENT: 'component'
};
export type DraggableItem = {
  name: string;
  component: string;
  order: number;
  group: string;
  index: number;
}