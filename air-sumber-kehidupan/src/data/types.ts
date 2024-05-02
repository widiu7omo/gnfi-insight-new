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
  componentProps: unknown
}
