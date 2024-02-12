import { BlockType } from "@/data/types";
export default function Content({ block }: { block: BlockType }) {
  return <div className="prose text-left">{block.content}</div>;
}
