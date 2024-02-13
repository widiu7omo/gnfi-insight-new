import { BlockType } from "@/data/types";
import parse from "html-react-parser";
export default function Content({ block }: { block: BlockType }) {
  return <div className="prose text-left">{parse(block.content)}</div>;
}
