import { BlockType } from "@/data/types";

export default function ContentAnimated({ block }: { block: BlockType }) {
  return <div>Block type {JSON.stringify(block)}</div>;
}
