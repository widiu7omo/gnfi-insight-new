export type BlockType = {
  content: string;
  contentType: "image" | "text";
  component: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "img" | "div";
  contentCaption?: string;
  order: number;
};
