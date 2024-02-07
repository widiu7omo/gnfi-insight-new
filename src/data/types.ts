export type BlockType = {
  content: string;
  contentType: "image" | "text";
  group: string;
  component: number;
  contentCaption?: string;
  order: number;
};
