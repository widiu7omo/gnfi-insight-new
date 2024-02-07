import { BlockType } from "@/data/types.ts";
export default function Content({ block }: { block: BlockType }) {
  return <div className="prose">{block.content}</div>;
}
