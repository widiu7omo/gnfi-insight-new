export type BlockType = {
  //General Config
  group?: string
  groupClassName?: string
  order?: number
  index?: number,
  component: number,
  componentCustomName?: string;
  //Custom Config
  componentProps: unknown
}
