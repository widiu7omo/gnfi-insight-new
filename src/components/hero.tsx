import { BlockType } from "@/data/types";

export default function Hero({ block }: { block: BlockType }) {
  return (
    <div className="w-full bg-cover">
      <img className="w-full" src={block.content} alt={block.contentCaption ?? "unknown"} />
    </div>
  );
}
