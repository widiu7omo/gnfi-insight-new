import { BlockType } from "@/data/types";
export default function Header({ block }: { block: BlockType }) {
  return <div className="prose text-2xl font-black">{block.content}</div>;
}
