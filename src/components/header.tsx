import { BlockType } from "@/data/types.ts";
export default function Header({ block }: { block: BlockType }) {
  return <div className="prose text-2xl font-black">{block.content}</div>;
}
