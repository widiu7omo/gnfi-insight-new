import { BlockType } from "@/data/types";
import parse from "html-react-parser";
export default function Header({ block }: { block: BlockType }) {
  return (
    <div className="prose text-2xl font-black pt-6">{parse(block.content)}</div>
  );
}
