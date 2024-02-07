import { BlockType } from "@/data/types.ts";
export default function Hero({ block }: { block: BlockType }) {
  return (
    <div className="bg-cover w-full">
      <img src={block.content} alt={block.contentCaption ?? "unknown"} />
    </div>
  );
}
